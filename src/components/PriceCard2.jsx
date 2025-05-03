import React from "react";

export default function PriceCard2({ serial, p1 }) {
  return (
    <div className="mt-7.5 w-full border border-[#7070703a] md:flex">
      <div className="border-b border-[#DADADA] bg-[#FFD2D2]/25 py-[17px] text-center text-lg leading-[26px] tracking-[0.0147em] md:w-5/12 md:border-r md:border-b-0 md:py-5 md:pl-5 md:text-left md:text-xl lg:w-6/12 lg:py-6 lg:pl-6 lg:text-2xl xl:w-7/12 xl:py-7 xl:pl-7.5 xl:text-[26px]">
        {serial}
      </div>

      <div className="flex items-center justify-center py-4 text-lg leading-[26px] tracking-[0.0147em] md:w-7/12 md:py-3.5 md:text-xl lg:w-6/12 lg:text-2xl xl:w-5/12 xl:text-[26px]">
        {p1}
      </div>
    </div>
  );
}
