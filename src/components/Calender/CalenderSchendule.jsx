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
        slot1Link: "",
        slot2: "",
        slot2Colour: "",
        slot2Period: "",
        slot2Link: "",
      };
      const slots = [];
      if (dayData.slot1Colour) {
        slots.push({
          colour: dayData.slot1Colour,
          period: dayData.slot1Period,
          text: dayData.slot1,
          link: dayData.slot1Link,
        });
        if (dayData.slot1) {
          uniqueSlots.set(dayData.slot1, dayData.slot1Colour);
        }
      }
      if (dayData.slot2Colour) {
        slots.push({
          colour: dayData.slot2Colour,
          period: dayData.slot2Period,
          text: dayData.slot2,
          link: dayData.slot2Link,
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
      ([name, color]) => {
        // Find the first entry with this name to get its link
        const entry = scheduleData.find(
          (item) => item.slot1 === name || item.slot2 === name
        );
        const link = entry 
          ? (entry.slot1 === name ? entry.slot1Link : entry.slot2Link) 
          : "";
        
        return {
          color,
          text: name,
          link: link || "",
        };
      }
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
    <div className="small-con">
      <div className="flex flex-col items-center">
        <h1 className="sikita text-[35px] md:text-[45px] lg:text-[55px] xl:text-[68px]">
          Working Schedule
        </h1>
        <div className="mb-4.5 h-[1px] w-27 bg-[#707070] md:w-31 lg:w-36 xl:w-38"></div>
        <p className="mb-[32px] text-[21px] tracking-[0.076em] md:mb-[34px] md:text-[22px] lg:mb-[38px] lg:text-[23px] xl:mb-[41px] xl:text-[25px]">
          出勤表
        </p>
      </div>

      {/* Content Section */}

      <p className="mb-12 text-center text-sm leading-[20px] tracking-[0.076em] md:mb-10 md:text-left md:text-base md:tracking-normal lg:text-lg xl:text-xl">
        詳しくは、以下の在籍表を確認して公式LINEアカウントから予約から確認してください。
      </p>

      <div className="mb-2 text-xs tracking-[0.076em] md:hidden">
        横スクロールで確認できます。
      </div>
      {/* Calendar Section with Scroll */}
      <div className="mt-2 w-full overflow-x-auto md:mt-4">
        <div className="">
          {/* Month Header */}
          <div className="grid grid-cols-1 grid-rows-2">
            <div className="flex items-center justify-between border-[1px] border-gray-600 bg-[#787A98] px-5 py-1 text-lg font-bold text-white sm:text-xl">
              <BiSolidLeftArrow
                className="cursor-pointer fill-[#A0A1BF] hover:fill-white/90"
                onClick={prevMonth}
              />
              <div>{`${currentDate.getFullYear()}.${
                currentDate.getMonth() + 1
              }`}</div>
              <BiSolidRightArrow
                className="cursor-pointer fill-[#A0A1BF] hover:fill-white/90"
                onClick={nextMonth}
              />
            </div>
            <div className="grid grid-cols-7 grid-rows-1">
              {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                <div
                  key={day}
                  className="flex h-12 items-center justify-center border-[1px] border-gray-600 text-sm sm:h-14 sm:text-base"
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
                    className={`border-[1px] overflow-hidden border-gray-600 bg-gray-100 h-16 sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px] flex flex-col justify-between relative`}
                    style={{ backgroundColor: cell.backgroundColor }}
                  >
                    <div className="pt-2 md:pt-3 lg:pt-4 xl:pt-5 pr-2 md:pr-3 lg:pr-4 xl:pr-5 text-right text-sm sm:text-base">
                      {cell.day || ""}
                    </div>
                    {cell.day && cell.slots.length > 0 && (
                      <div className="flex flex-col h-full justify-end">
                        {cell.slots.length === 1 &&
                          cell.slots[0].period === "full" && (
                            <div
                              className="h-full relative"
                              style={{ backgroundColor: cell.slots[0].colour }}
                            >
                              {cell.slots[0].link && (
                                <a 
                                  href={cell.slots[0].link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="absolute inset-0 cursor-pointer"
                                  title={`Visit ${cell.slots[0].text}`}
                                />
                              )}
                            </div>
                          )}
                        {cell.slots.length === 1 &&
                          cell.slots[0].period === "half" && (
                            <div
                              className="h-6 sm:h-[40%] relative"
                              style={{ backgroundColor: cell.slots[0].colour }}
                            >
                              {cell.slots[0].link && (
                                <a 
                                  href={cell.slots[0].link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="absolute inset-0 cursor-pointer"
                                  title={`Visit ${cell.slots[0].text}`}
                                />
                              )}
                            </div>
                          )}
                        {cell.slots.length === 2 &&
                          cell.slots[0].period === "half" &&
                          cell.slots[1].period === "half" && (
                            <div className="flex flex-col h-full justify-end">
                              <div
                                className="h-6 sm:h-[40%] relative"
                                style={{
                                  backgroundColor: cell.slots[0].colour,
                                }}
                              >
                                {cell.slots[0].link && (
                                  <a 
                                    href={cell.slots[0].link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 cursor-pointer"
                                    title={`Visit ${cell.slots[0].text}`}
                                  />
                                )}
                              </div>
                              <div
                                className="h-6 sm:h-[40%] relative"
                                style={{
                                  backgroundColor: cell.slots[1].colour,
                                }}
                              >
                                {cell.slots[1].link && (
                                  <a 
                                    href={cell.slots[1].link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 cursor-pointer"
                                    title={`Visit ${cell.slots[1].text}`}
                                  />
                                )}
                              </div>
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
      <div className="mt-9 flex flex-col gap-4 md:mt-[45px] lg:mt-[60px] xl:mt-[84px]">
        {legendData.map((category, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-10">
            <div
              className="h-5 w-[45px] flex-shrink-0 md:h-[25px] md:w-[55px] lg:h-[35px] lg:w-[80px] xl:h-[45px] xl:w-[101px]"
              style={{ backgroundColor: category.color }}
            ></div>
            <div className="text-xs md:text-base lg:text-lg xl:text-xl">
              {category.link ? (
                <a 
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {category.text}
                </a>
              ) : (
                category.text
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalenderSchendule;
