import React from "react";

export default function TSectionHeader({ heading, subheading, lineText }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="sikita text-[35px] md:text-[45px] lg:text-[55px] xl:text-[68px]">
          {heading}
        </h1>
        <div className="mb-4.5 h-[1px] w-27 bg-[#707070] md:w-31 lg:w-36 xl:w-38"></div>
        <p className="mb-[32px] text-[21px] tracking-[0.076em] md:mb-[34px] md:text-[22px] lg:mb-[38px] lg:text-[23px] xl:mb-[41px] xl:text-[25px]">
          {subheading}
        </p>
      </div>
      <div className="mx-auto mb-2.5 w-full border-b py-1 text-[18px] tracking-[0.076em] md:mb-4 md:text-[24px] md:tracking-normal lg:mb-6 lg:text-[27px] xl:mb-8 xl:text-[33px]">
        {lineText}
      </div>
    </>
  );
}
