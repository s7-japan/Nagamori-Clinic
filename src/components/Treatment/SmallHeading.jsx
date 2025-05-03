import React from "react";

export default function SmallHeading({text}) {
  return (
    <p className="mt-[35px] mb-4.5 w-full text-center text-lg tracking-[0.076em] md:mt-[45px] md:mb-3 md:text-start md:text-xl md:tracking-normal lg:mt-[60px] lg:text-2xl xl:mt-[70px] xl:text-[27px]">
      {text}
    </p>
  );
}
