"use client";

import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="px-6 md:px-[16vw] flex flex-col items-center mt-15 md:mt-[8vw] relative">
      <h1 className="text-center text-[15vw] md:text-[4vw] mb-1 sikita">
        Portfolio
      </h1>
      <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[95%] w-[28%] opacity-[12%] hidden md:block -z-10"></div>
      <div className="w-25 h-[1.5px] bg-[#707070] mb-3"></div>
      <p className="text-center tracking-[0.076em] mb-14 md:mb-12 text-black text-[clamp(21px,2vw,25px)] leading[30px]">
        施術例
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <img src="/images/p1.png" alt="" />
        <img src="/images/p2.png" alt="" />
        <img src="/images/p3.png" alt="" />
        <img src="/images/p4.png" alt="" />
        <img src="/images/p5.png" alt="" />
        <img src="/images/p6.png" alt="" />
        <img src="/images/p7.png" alt="" />
        <img src="/images/p8.png" alt="" />
        <img src="/images/p9.png" alt="" />
        <img src="/images/p10.png" alt="" />
        <img src="/images/p11.png" alt="" />
        <img src="/images/p12.png" alt="" />
      </div>
      <Link href="https://www.instagram.com/tomomi_nagamori_art?igsh=bmtpYzRvZXQ1bXE1">
        <button>
          <img src="/images/btn6.svg" alt="" className="mt-10 cursor-pointer" />
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
