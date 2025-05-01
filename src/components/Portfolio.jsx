import React from "react";
import p1 from "../../public/images/p1.png";
import p2 from "../../public/images/p2.png";
import p3 from "../../public/images/p3.png";
import p4 from "../../public/images/p4.png";
import p5 from "../../public/images/p5.png";
import p6 from "../../public/images/p6.png";
import p7 from "../../public/images/p7.png";
import p8 from "../../public/images/p8.png";
import p9 from "../../public/images/p9.png";
import p10 from "../../public/images/p10.png";
import p11 from "../../public/images/p11.png";
import p12 from "../../public/images/p12.png";
import btn6 from "../../public/images/btn6.svg";
import { Link } from "react-router-dom";

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
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
        <img src={p5} alt="" />
        <img src={p6} alt="" />
        <img src={p7} alt="" />
        <img src={p8} alt="" />
        <img src={p9} alt="" />
        <img src={p10} alt="" />
        <img src={p11} alt="" />
        <img src={p12} alt="" />
      </div>
      <Link to="https://www.instagram.com/tomomi_nagamori_art?igsh=bmtpYzRvZXQ1bXE1">
        <button>
          <img src={btn6} alt="" className="mt-10 cursor-pointer" />
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
