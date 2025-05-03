import React from "react";

export default function DoctorCard({ image, t1, t2, t3 }) {
  return (
    <div className="mb-20 md:mb-0">
      <div>
        <img src={image} alt="doctor" className="h-full w-full object-cover" />
        <div className="mt-2">
          <div className="mt-[19px] mb-[23px] h-[1px] w-10 bg-[#707070] opacity-20"></div>
          <p className="sikita text-[33px] font-bold opacity-20">doctor</p>
          <h1 className="trakcing-[0.02em] text-[39px]">{t1}</h1>
          <p className="sitika mt-5 text-[22px] italic md:text-[24px] lg:text-[25px] xl:text-[27px]">
            {t2}
          </p>
          <p className="mt-4 font-light md:text-[17px] lg:text-[19px] xl:text-[21px]">
            {t3}
          </p>
        </div>
      </div>
    </div>
  );
}
