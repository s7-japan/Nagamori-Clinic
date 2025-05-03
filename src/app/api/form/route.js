import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// POST request to update scheduleData in data.js
export async function POST(request) {
  try {
    const { scheduleData } = await request.json();
    if (!scheduleData || !Array.isArray(scheduleData)) {
      return NextResponse.json(
        { message: "Invalid scheduleData" },
        { status: 400 }
      );
    }

    const fileContent = `export const scheduleData = ${JSON.stringify(
      scheduleData,
      null,
      2
    )};`;
    const filePath = path.join(process.cwd(), "public", "data", "data.js");

    // Ensure the directory exists
    const dirPath = path.dirname(filePath);
    fs.mkdirSync(dirPath, { recursive: true });

    fs.writeFileSync(filePath, fileContent);

    return NextResponse.json(
      { message: "data.js updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: `Error updating data.js: ${err.message}` },
      { status: 500 }
    );
  }
}

// GET request to fetch scheduleData from data.js
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "data.js");
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Extract scheduleData array from file content
    const dataMatch = fileContent.match(
      /export const scheduleData = (\[.*?\]);/s
    );
    const scheduleData = dataMatch ? JSON.parse(dataMatch[1]) : [];

    return NextResponse.json(scheduleData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Error reading data.js: ${err.message}` },
      { status: 500 }
    );
  }
}
