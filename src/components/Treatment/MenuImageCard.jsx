import React from "react";

export default function MenuImageCard() {
  return (
    <div className="small-con flex flex-col gap-5 md:flex-row md:gap-6 lg:gap-7 xl:gap-8">
      <div>
        <img src="/assets/schedule1.svg" className="w-full" alt="menuImage" />
      </div>
      <div>
        <img src="/assets/schedule2.svg" className="w-full" alt="menuImage" />
      </div>
    </div>
  );
}
