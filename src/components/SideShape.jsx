import React from "react";

export default function SideShape({ height, top, left, right, bottom }) {
  const style = {
    ...(height && { height }),
    ...(top && { top }),
    ...(left && { left }),
    ...(right && { right }),
    ...(bottom && { bottom }),
  };

  return (
    <div
      className="absolute hidden bg-[#B6BFBC] opacity-[12%] xl:block xl:w-[547px]"
      style={style}
    ></div>
  );
}