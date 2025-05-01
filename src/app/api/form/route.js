import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
