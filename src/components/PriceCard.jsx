import React from "react";

export default function PriceCard({ serial, p1, p2 }) {
  return (
    <div className="w-full border-b border-[#7070703a] md:flex">
      <div className="flex items-center justify-center border-b border-[#DADADA] bg-[#FFD2D2]/25 py-[17px] text-lg leading-[26px] tracking-[0.0147em] md:w-5/12 md:justify-start md:border-r md:border-b-0 md:pl-5 md:text-xl lg:w-6/12 lg:pl-6 lg:text-2xl xl:w-7/12 xl:pl-7.5 xl:text-[26px]">
        {serial}
      </div>
      <div className="py-5.5 text-nowrap md:w-7/12 md:py-3.5 lg:w-6/12 xl:w-5/12">
        <div className="text-center text-lg leading-[26px] tracking-[0.0147em] md:text-xl lg:text-2xl xl:text-[26px]">
          {p1}
        </div>
        <div className="mt-2.5 text-center text-lg leading-[26px] tracking-[0.0147em] text-[#FF4E00] md:text-[19px] lg:text-[20px]">
          {p2}
        </div>
      </div>
    </div>
  );
}
