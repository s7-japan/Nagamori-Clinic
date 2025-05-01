"use client";
import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";
import {
  UploadIcon,
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Upload = () => {
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    setMessage("");
    setError("");
    setIsLoading(true);
    const file = event.target.files[0];
    if (!file) {
      setIsLoading(false);
      return;
    }

    // Validate file type
    if (
      ![
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ].includes(file.type)
    ) {
      setError("Please upload a valid Excel file (.xlsx or .xls)");
      toast.error("Invalid file type!", {
        icon: <AlertCircle className="text-red-500" size={18} />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsLoading(false);
      return;
    }

    setFileName(file.name);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(worksheet, { raw: false });

        console.log("Raw Excel data:", rawData);

        const scheduleData = rawData.map((row) => {
          let formattedDate = "";
          // Handle date in M/D/YY format (e.g., "5/1/25")
          if (
            typeof row.Date === "string" &&
            /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/.test(row.Date)
          ) {
            const [month, day, year] = row.Date.split("/").map(Number);
            // Assume years 00-99 are 2000-2099
            const fullYear = year < 100 ? 2000 + year : year;
            formattedDate = `${fullYear}-${String(month).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`;
          }

          return {
            date: formattedDate,
            slot1: row.Slot1 || "",
            slot1Colour: row.Slot1Colour || "",
            slot1Period: row.Slot1Period || "",
            slot2: row.Slot2 || "",
            slot2Colour: row.Slot2Colour || "",
            slot2Period: row.Slot2Period || "",
          };
        });

        console.log("Transformed scheduleData:", scheduleData);

        const cleanedData = scheduleData.filter((entry) => {
          const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(entry.date);
          const validPeriod = (p) =>
            !p || ["half", "full"].includes(p.toLowerCase());
          const hasData = entry.slot1Colour || entry.slot2Colour;
          return (
            isValidDate &&
            validPeriod(entry.slot1Period) &&
            validPeriod(entry.slot2Period) &&
            hasData
          );
        });

        if (cleanedData.length === 0) {
          console.log("Cleaned data:", cleanedData);
          setError("No valid data found in the Excel file");
          toast.error("No valid data found in the file!", {
            icon: <AlertCircle className="text-red-500" size={18} />,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setIsLoading(false);
          return;
        }

        try {
          const response = await fetch("/api/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ scheduleData: cleanedData }),
          });
          const result = await response.json();
          if (response.ok) {
            setMessage(result.message);
            toast.success("Schedule uploaded successfully!", {
              icon: <CheckCircle className="text-green-500" size={18} />,
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
              duration: 5000,
            });
          } else {
            setError(result.message);
            toast.error(result.message || "Upload failed!", {
              icon: <AlertCircle className="text-red-500" size={18} />,
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }
        } catch (err) {
          setError("Failed to update data.js: " + err.message);
          toast.error("Failed to update data.js", {
            icon: <AlertCircle className="text-red-500" size={18} />,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        } finally {
          setIsLoading(false);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (err) {
      setError("Error processing file: " + err.message);
      toast.error("Error processing file", {
        icon: <AlertCircle className="text-red-500" size={18} />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFileName("");
    setMessage("");
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.success("Upload reset!", {
      icon: <CheckCircle className="text-green-500" size={18} />,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && fileInputRef.current) {
      fileInputRef.current.files = files;
      handleFileUpload({ target: { files } });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-center text-4xl sm:text-5xl mb-4 font-serif text-gray-800">
            Upload Schedule
          </h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full mb-4"></div>
          <p className="text-center text-lg sm:text-xl tracking-wider text-gray-600">
            スケジュールアップロード
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div
            className={`mb-8 border-2 border-dashed rounded-lg p-8 text-center transition-all ${
              isDragging
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-blue-50 rounded-full">
                <FileSpreadsheet size={40} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {fileName ? "File Selected" : "Upload Excel File"}
              </h3>
              <p className="text-gray-500 mb-4 text-sm">
                Drag and drop your Excel file here, or click to browse
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
                disabled={isLoading}
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors disabled:bg-blue-300"
                disabled={isLoading}
              >
                <UploadIcon size={18} />
                {fileName ? "Change File" : "Browse Files"}
              </button>

              {fileName && (
                <div className="mt-4 flex items-center gap-2 text-sm bg-gray-100 py-2 px-4 rounded-full">
                  <FileSpreadsheet size={16} className="text-blue-500" />
                  <span className="text-gray-700">{fileName}</span>
                </div>
              )}
            </div>
          </div>

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-4">
              <Loader2 className="animate-spin text-blue-500 mb-2" size={30} />
              <p className="text-blue-600 font-medium">
                Processing your file...
              </p>
            </div>
          )}

          {message && !isLoading && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start">
              <CheckCircle
                className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                size={18}
              />
              <p className="text-green-800">{message}</p>
            </div>
          )}

          {error && !isLoading && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
              <AlertCircle
                className="text-red-500 mr-3 mt-0.5 flex-shrink-0"
                size={18}
              />
              <p className="text-red-800">{error}</p>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-6 rounded-lg transition-colors disabled:bg-gray-100 disabled:text-gray-400 font-medium"
              disabled={isLoading || (!fileName && !message && !error)}
            >
              Reset
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-6 rounded-lg transition-colors disabled:bg-blue-300 font-medium flex items-center gap-2"
              disabled={isLoading}
            >
              <UploadIcon size={18} />
              {fileName ? "Upload New File" : "Select File"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
