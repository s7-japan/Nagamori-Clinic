"use client";
import React, { useEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
// import { scheduleData } from "../../../public/data/data";

const CalenderSchendule = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // January 2025

  // fetching the data
  const [scheduleData, setScheduleData] = useState([]);
  const fetchScheduleData = async () => {
    try {
      const res = await fetch("/api/form");
      if (!res.ok) {
        throw new Error("Failed to fetch schedule data");
      }
      const data = await res.json();
      setScheduleData(data);
      console.log("Fetched Schedule Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchScheduleData(); // Fetch schedule data on component mount
  }, []);

  // Lookup for Japanese clinic names
  // const clinicNameMap = {
  //   HAAB: "HAAB東京 ( 原宿）",
  //   Amazora: "アマソラクリニック（渋谷)",
  //   Vogue: "札幌ル・トロワビューティクリニックVogue（札幌）",
  //   Shibaura: "SHIBAURA B.CLINIC（芝浦）",
  //   Gracy: "GRACY TOKYO CLINIC（表参道）",
  //   Holiday: "休診日",
  // };

  // Helper functions for calendar generation
  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const weeks = [];
    let currentWeek = [];
    const uniqueSlots = new Map(); // Map to collect unique slot names and colors

    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push({ day: null, slots: [], backgroundColor: "#E5E7EB" });
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      const dayData = scheduleData.find((entry) => entry.date === dateStr) || {
        slot1: "",
        slot1Colour: "",
        slot1Period: "",
        slot2: "",
        slot2Colour: "",
        slot2Period: "",
      };
      const slots = [];
      if (dayData.slot1Colour) {
        slots.push({
          colour: dayData.slot1Colour,
          period: dayData.slot1Period,
        });
        if (dayData.slot1) {
          uniqueSlots.set(dayData.slot1, dayData.slot1Colour);
        }
      }
      if (dayData.slot2Colour) {
        slots.push({
          colour: dayData.slot2Colour,
          period: dayData.slot2Period,
        });
        if (dayData.slot2) {
          uniqueSlots.set(dayData.slot2, dayData.slot2Colour);
        }
      }
      const backgroundColor = "#FFFFFF";
      currentWeek.push({ day, slots, backgroundColor });
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Fill the last week with empty cells if needed
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ day: null, slots: [], backgroundColor: "#E5E7EB" });
      }
      weeks.push(currentWeek);
    }

    // Convert uniqueSlots to array for legend
    const legendData = Array.from(uniqueSlots.entries()).map(
      ([name, color]) => ({
        color,
        text: name,
      })
    );

    return { weeks, legendData };
  };

  // Navigation functions
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const { weeks, legendData } = generateCalendar();

  return (
    <div className="w-full px-4 sm:px-8 md:px-80 overflow-x-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-2 cambria">
          Working Schedule
        </h1>
        <div className="w-25 h-[1.5px] bg-[#707070] relative mb-3"></div>
        <p className="text-center text-[clamp(1.3125rem,2vw,1.5625rem)] tracking-[0.076em]">
          出勤表
        </p>
      </div>

      {/* Content Section */}
      <p className="mb-6 text-sm text-center tracking-[0.076em] leading-[20px]">
        詳しくは、以下の在籍表を確認して公式LINEアカウントから予約から確認してください。
      </p>
      <p className="text-xs tracking-[0.076em]">横スクロールで確認できます。</p>

      {/* Calendar Section with Scroll */}
      <div className="w-full overflow-x-auto md:mt-4 mt-2">
        <div className="min-w-[700px]">
          {/* Month Header */}
          <div className="grid grid-cols-1 grid-rows-2">
            <div className="bg-[#787A98] flex justify-between px-5 items-center py-1 text-white font-bold text-lg sm:text-xl border-gray-600 border-[1px]">
              <BiSolidLeftArrow
                color="#A0A1BF"
                className="cursor-pointer"
                onClick={prevMonth}
              />
              <div>{`${currentDate.getFullYear()}.${
                currentDate.getMonth() + 1
              }`}</div>
              <BiSolidRightArrow
                color="#A0A1BF"
                className="cursor-pointer"
                onClick={nextMonth}
              />
            </div>
            <div className="grid grid-cols-7 grid-rows-1">
              {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                <div
                  key={day}
                  className="border-[1px] border-gray-600 flex items-center justify-center h-12 sm:h-14 text-sm sm:text-base"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7">
                {week.map((cell, cellIndex) => (
                  <div
                    key={`${weekIndex}-${cellIndex}`}
                    className="border-[1px] border-gray-600 h-16 sm:h-20 flex flex-col justify-between relative"
                    style={{ backgroundColor: cell.backgroundColor }}
                  >
                    <div className="text-right text-sm sm:text-base absolute top-1 right-2">
                      {cell.day || ""}
                    </div>
                    {cell.day && cell.slots.length > 0 && (
                      <div className="flex flex-col h-full justify-end">
                        {cell.slots.length === 1 &&
                          cell.slots[0].period === "full" && (
                            <div
                              className="h-full"
                              style={{ backgroundColor: cell.slots[0].colour }}
                            ></div>
                          )}
                        {cell.slots.length === 1 &&
                          cell.slots[0].period === "half" && (
                            <div
                              className="h-[40%]"
                              style={{ backgroundColor: cell.slots[0].colour }}
                            ></div>
                          )}
                        {cell.slots.length === 2 &&
                          cell.slots[0].period === "half" &&
                          cell.slots[1].period === "half" && (
                            <div className="flex flex-col h-full">
                              <div
                                className="h-[60%]"
                                style={{
                                  backgroundColor: cell.slots[0].colour,
                                }}
                              ></div>
                              <div
                                className="h-[40%]"
                                style={{
                                  backgroundColor: cell.slots[1].colour,
                                }}
                              ></div>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="flex flex-col mt-9 gap-4 px-2">
        {legendData.map((category, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-10">
            <div
              className="w-12 sm:w-20 h-8 sm:h-10"
              style={{ backgroundColor: category.color }}
            ></div>
            <div className="text-sm sm:text-base">{category.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalenderSchendule;
