import React from "react";
import one from "../../public/images/menu1.png";
import two from "../../public/images/menu2.png";
import three from "../../public/images/menu3.png";
import four from "../../public/images/menu4.png";
import btn2 from "../../public/images/btn2.svg";
import btn3 from "../../public/images/btn3.svg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="px-6 md:px-[16vw] flex flex-col items-center mt-24 md:mt-[9vw] relative">
      <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[105%] w-[28%] opacity-[12%] hidden md:block"></div>
      <h1 className="text-center text-[15vw] md:text-[4vw] mb-1 sikita">
        Menu
      </h1>
      <div className="w-27 lg:w-31 h-[1px] bg-[#707070] mb-3"></div>
      <p className="text-center tracking-[0.076em] mb-14 md:mb-12 text-black text-[clamp(21px,2vw,25px)] leading[30px]">
        施術メニュー
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 md:gap-8">
        <div>
          <div className="mb-1">
            <img src={one} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw] md:mt-[1vw] font-[400]">
            眉アートメイク
          </p>
          <p className="text-[3vw] md:text-[1.1vw] sikita font-[500]">
            ￥ 100,000~
          </p>
        </div>
        <div>
          <div className="mb-1">
            <img src={two} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw] md:mt-[1vw] font-[400]">
            アイラインアートメイク
          </p>
          <p className="text-[3vw] md:text-[1.1vw] sikita font-[500]">
            ￥ 100,000~
          </p>
        </div>
        <div>
          <div className="mb-1">
            <img src={three} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw] md:mt-[1vw] font-[400]">
            リップアートメイク
          </p>
          <p className="text-[3vw] md:text-[1.1vw] sikita font-[500]">
            ￥ 100,000~
          </p>
        </div>
        <div className="z-10">
          <div className="mb-1">
            <img src={four} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw] md:mt-[1vw] font-[400]">
            ヘアライン, 涙袋 etc
          </p>
          <p className="text-[3vw] md:text-[1.1vw] sikita font-[500]">
            ￥ 100,000~
          </p>
        </div>
      </div>
      <img
        onClick={() => {
          window.location.replace("/treatment");
        }}
        src={btn2}
        alt=""
        className="mt-[3vw] hidden md:block md:w-[15vw] cursor-pointer"
      />
      <Link to="https://nagamori.vercel.app/treatment">
        <button>
          <img
            src={btn3}
            alt=""
            className="mt-[10vw] w-full md:hidden cursor-pointer"
          />
        </button>
      </Link>
      <p className="mt-7 md:mt-[3vw] text-[3.3vw] md:text-[1.1vw]">
        初めての方も、お気軽にお問い合わせください。
      </p>
    </div>
  );
};

export default Menu;
