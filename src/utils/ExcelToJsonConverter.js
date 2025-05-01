const XLSX = require("xlsx");
const fs = require("fs");

// Read the Excel file
const workbook = XLSX.readFile("schedule.xlsx"); // Replace with your Excel file path
const sheetName = workbook.SheetNames[0]; // Assume data is in the first sheet
const worksheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const rawData = XLSX.utils.sheet_to_json(worksheet);

// Transform data to match scheduleData format
const scheduleData = rawData.map((row) => ({
  date: row.Date, // Ensure YYYY-MM-DD format in Excel
  slot1: row.Slot1 || "",
  slot1Colour: row.Slot1Colour || "",
  slot1Period: row.Slot1Period || "",
  slot2: row.Slot2 || "",
  slot2Colour: row.Slot2Colour || "",
  slot2Period: row.Slot2Period || "",
}));

// Validate and clean data (optional, add more checks as needed)
const cleanedData = scheduleData.filter((entry) => {
  // Ensure date is valid and in YYYY-MM-DD format
  const isValidDate = /^2025-\d{2}-\d{2}$/.test(entry.date);
  // Ensure period is valid if present
  const validPeriod = (p) => !p || ["half", "full"].includes(p);
  return (
    isValidDate &&
    validPeriod(entry.slot1Period) &&
    validPeriod(entry.slot2Period)
  );
});

// Generate data.js content
const fileContent = `export const scheduleData = ${JSON.stringify(
  cleanedData,
  null,
  2
)};`;

// Write to data.js
fs.writeFileSync("data.js", fileContent);

console.log("Data extracted and saved to data.js");
