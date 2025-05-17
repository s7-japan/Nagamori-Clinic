import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Function to initialize Google Sheets API with service account
function getGoogleSheetsClient() {
  try {
    // Get credentials from environment variables
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const key = process.env.GOOGLE_PRIVATE_KEY;
    
    if (!email || !key) {
      console.error('Missing Google service account credentials in environment variables');
      console.error('GOOGLE_SERVICE_ACCOUNT_EMAIL:', email ? 'defined' : 'undefined');
      console.error('GOOGLE_PRIVATE_KEY:', key ? 'defined' : 'undefined');
      throw new Error('Missing Google service account credentials');
    }
    
    // Process the private key - replace escaped newlines with actual newlines
    const privateKey = key.replace(/\\n/g, '\n');
    
    const credentials = {
      client_email: email,
      private_key: privateKey
    };

    const auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/spreadsheets.readonly']
    );

    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    throw error;
  }
}

// Function to fetch data from all sheets in a Google Spreadsheet
async function fetchAllSheetsData(spreadsheetId) {
  const sheets = getGoogleSheetsClient();
  
  try {
    // Get all sheet names
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: 'sheets.properties'
    });
    
    if (!spreadsheet.data.sheets || spreadsheet.data.sheets.length === 0) {
      console.error('No sheets found in the spreadsheet');
      throw new Error('No sheets found in the spreadsheet');
    }
    
    console.log(`Found ${spreadsheet.data.sheets.length} sheets in the spreadsheet`);
    
    const allData = [];
    
    // For each sheet, fetch its data
    for (const sheet of spreadsheet.data.sheets) {
      const sheetTitle = sheet.properties.title;
      console.log(`Processing sheet: ${sheetTitle}`);
      
      try {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: sheetTitle
        });
        
        const rows = response.data.values;
        
        if (!rows || rows.length < 2) {
          console.log(`Sheet ${sheetTitle} has no data or only headers. Skipping.`);
          continue;
        }
        
        // Get headers (first row)
        const headers = rows[0].map(header => header.trim());
        
        console.log(`Sheet ${sheetTitle} headers: ${headers.join(', ')}`);
        console.log(`Sheet ${sheetTitle} has ${rows.length - 1} data rows`);
        
        // Map headers to our expected format (case-insensitive matching)
        const headerMap = {
          date: headers.findIndex(h => /^date$/i.test(h)),
          slot1: headers.findIndex(h => /^slot1$/i.test(h)),
          slot1Link: headers.findIndex(h => /^slot(1?)links$/i.test(h)), // Match SlotLinks or Slot1Links
          slot1Colour: headers.findIndex(h => /^slot1colou?r$/i.test(h)), // Match both color and colour
          slot1Period: headers.findIndex(h => /^slot1period$/i.test(h)),
          slot2: headers.findIndex(h => /^slot2$/i.test(h)),
          slot2Colour: headers.findIndex(h => /^slot2colou?r$/i.test(h)),
          slot2Period: headers.findIndex(h => /^slot2period$/i.test(h)),
          slot2Link: -1 // We'll populate this later if needed
        };
        
        // Log the header mapping
        console.log(`Header mapping for sheet ${sheetTitle}:`, 
          Object.entries(headerMap)
            .filter(([_, index]) => index !== -1)
            .map(([key, index]) => `${key}: ${headers[index]}`)
            .join(', ')
        );
        
        // Check if we have at least the date and a slot column
        if (headerMap.date === -1 || (headerMap.slot1 === -1 && headerMap.slot2 === -1)) {
          console.log(`Sheet ${sheetTitle} doesn't have the required Date and Slot columns. Skipping.`);
          continue;
        }
        
        // Map remaining rows to objects using our header mapping
        const sheetData = rows.slice(1).map((row, rowIndex) => {
          const item = {};
          
          // Map each field using our header mapping
          Object.entries(headerMap).forEach(([key, index]) => {
            if (index !== -1 && index < row.length) {
              item[key] = row[index] || '';
            } else {
              item[key] = '';
            }
          });
          
          // Special handling for SlotLinks - if it's a common column for both slots
          if (headerMap.slot1Link !== -1 && headerMap.slot2Link === -1) {
            item.slot2Link = item.slot1Link;
          }
          
          // Add source sheet info for debugging
          item._sourceSheet = sheetTitle;
          item._rowIndex = rowIndex + 2; // +2 because we're 0-indexed and skipped header
          
          return item;
        });
        
        // Filter out rows without a date
        const validRows = sheetData.filter(item => item.date && item.date.trim() !== '');
        
        if (validRows.length === 0) {
          console.log(`Sheet ${sheetTitle} has no valid rows with dates. Skipping.`);
          continue;
        }
        
        console.log(`Added ${validRows.length} valid rows from sheet ${sheetTitle}`);
        allData.push(...validRows);
      } catch (error) {
        console.error(`Error processing sheet ${sheetTitle}:`, error);
        // Continue with other sheets even if one fails
      }
    }
    
    return allData;
  } catch (error) {
    console.error('Error fetching sheets data:', error);
    throw error;
  }
}

// Function to transform data to match data.js format
function transformToScheduleData(data) {
  try {
    console.log(`Transforming ${data.length} records from Google Sheets`);
    
    // Validate data
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error('No data to transform');
      return [];
    }
    
    // Sort data by date
    const sortedData = [...data].sort((a, b) => {
      // Ensure dates are in the same format (YYYY-MM-DD)
      const dateA = formatDate(a.date);
      const dateB = formatDate(b.date);
      return dateA.localeCompare(dateB);
    });
    
    // Map to the required format
    const transformedData = sortedData.map(item => {
      // Handle missing or empty data
      const slot1 = item.slot1 || '';
      const slot1Colour = item.slot1Colour || '';
      const slot1Period = item.slot1Period || '';
      const slot1Link = item.slot1Link || '';
      const slot2 = item.slot2 || '';
      const slot2Colour = item.slot2Colour || '';
      const slot2Period = item.slot2Period || '';
      const slot2Link = item.slot2Link || '';
      
      // Create a base object with default empty values
      const transformedItem = {
        date: formatDate(item.date),
        slot1,
        slot1Colour,
        slot1Period,
        slot1Link,
        slot2,
        slot2Colour,
        slot2Period,
        slot2Link
      };
      
      return transformedItem;
    });
    
    // Filter out items with invalid dates
    const validItems = transformedData.filter(item => {
      return item.date && /^\d{4}-\d{2}-\d{2}$/.test(item.date);
    });
    
    // Remove duplicates based on date
    const uniqueItems = [];
    const dateSet = new Set();
    
    validItems.forEach(item => {
      if (!dateSet.has(item.date)) {
        dateSet.add(item.date);
        uniqueItems.push(item);
      } else {
        console.log(`Duplicate date found: ${item.date}, keeping first occurrence`);
      }
    });
    
    console.log(`Transformed data contains ${uniqueItems.length} valid unique records`);
    
    // Log a sample of the data
    if (uniqueItems.length > 0) {
      console.log('Sample item:', JSON.stringify(uniqueItems[0], null, 2));
    }
    
    return uniqueItems;
  } catch (error) {
    console.error('Error transforming data:', error);
    return [];
  }
}

// Helper function to ensure dates are in the YYYY-MM-DD format
function formatDate(dateString) {
  if (!dateString) return '';
  
  // If it's already in YYYY-MM-DD format, return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return dateString;
  }
  
  try {
    // Try to parse the date
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date: ${dateString}`);
      return '';
    }
    
    // Format to YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  } catch (error) {
    console.error(`Error formatting date ${dateString}:`, error);
    return '';
  }
}

// Function to update data.js file
function updateDataFile(data) {
  try {
    // Validate that we have data before writing
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error("No valid data to write to file");
      throw new Error("No valid data to write to file");
    }

    // Ensure directory exists
    const dirPath = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, 'data.js');
    
    // Format the data as a proper JavaScript export
    const fileContent = `export const scheduleData = ${JSON.stringify(data, null, 2)};`;
    
    // Write to temporary file first to avoid corruption
    const tempFilePath = path.join(dirPath, 'data.temp.js');
    fs.writeFileSync(tempFilePath, fileContent);
    
    // Check if the temp file was written correctly and has content
    const stats = fs.statSync(tempFilePath);
    if (stats.size === 0) {
      throw new Error("Failed to write data to temporary file");
    }
    
    // Rename temp file to actual file
    fs.renameSync(tempFilePath, filePath);
    
    return true;
  } catch (error) {
    console.error("Error updating data file:", error);
    throw error;
  }
}

export async function GET() {
  try {
    console.log('Starting Google Sheets data fetch and update process');
    
    // Fetch the spreadsheet ID from environment variables
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      console.error('Spreadsheet ID not found in environment variables');
      return new Response(JSON.stringify({ 
        error: 'Spreadsheet ID not found in environment variables',
        env: {
          SPREADSHEET_DEFINED: process.env.GOOGLE_SPREADSHEET_ID ? true : false,
          EMAIL_DEFINED: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? true : false,
          KEY_DEFINED: process.env.GOOGLE_PRIVATE_KEY ? true : false
        }
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log(`Using spreadsheet ID: ${spreadsheetId.substring(0, 5)}...`);
    
    // Fetch all data from the spreadsheet
    const sheetsData = await fetchAllSheetsData(spreadsheetId);
    
    // Validate that we got data
    if (!sheetsData || !Array.isArray(sheetsData) || sheetsData.length === 0) {
      console.error('No data returned from Google Sheets');
      return new Response(JSON.stringify({ 
        error: 'No data returned from Google Sheets',
        spreadsheetId: spreadsheetId.substring(0, 5) + '...'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log(`Fetched ${sheetsData.length} records from Google Sheets`);
    
    // Transform data to match data.js format
    const scheduleData = transformToScheduleData(sheetsData);
    
    // Validate transformed data
    if (!scheduleData || scheduleData.length === 0) {
      console.error('Data transformation resulted in empty data');
      return new Response(JSON.stringify({ 
        error: 'Data transformation resulted in empty data',
        rawDataCount: sheetsData.length
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Update data.js file
    updateDataFile(scheduleData);
    
    console.log('Successfully updated data.js file');
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Data file updated successfully',
      count: scheduleData.length
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating data file:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to update data file',
      stack: error.stack ? error.stack.split('\n').slice(0, 3).join('\n') : 'No stack trace available'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Optional: Add a POST endpoint to trigger the update with custom parameters
export async function POST(request) {
  try {
    const body = await request.json();
    const spreadsheetId = body.spreadsheetId || process.env.GOOGLE_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      return new Response(JSON.stringify({ error: 'Spreadsheet ID not provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Fetch all data from the spreadsheet
    const sheetsData = await fetchAllSheetsData(spreadsheetId);
    
    // Validate that we got data
    if (!sheetsData || !Array.isArray(sheetsData) || sheetsData.length === 0) {
      return new Response(JSON.stringify({ error: 'No data returned from Google Sheets' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Transform data to match data.js format
    const scheduleData = transformToScheduleData(sheetsData);
    
    // Validate transformed data
    if (!scheduleData || scheduleData.length === 0) {
      return new Response(JSON.stringify({ error: 'Data transformation resulted in empty data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Update data.js file
    updateDataFile(scheduleData);
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Data file updated successfully',
      count: scheduleData.length
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating data file:', error);
    
    return new Response(JSON.stringify({ error: error.message || 'Failed to update data file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 