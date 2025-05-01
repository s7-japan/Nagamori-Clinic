import React from "react";
import logo from "../assets/newLogo.svg";
import instalogo from "../assets/instalogo.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#FCFCFC] px-12 md:px-[14vw] pt-[5vw] mt-20 md:mt-10 flex flex-col items-center">
      <div className="flex flex-col mt-20 md:flex-row items-center md:gap-4 justify-between md:justify-start">
        <img src={logo} alt="" className="h-14 md:h-[6vw]" />
        <img
          onClick={() => {
            window.location.replace(
              "https://www.instagram.com/tomomi_nagamori_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            );
          }}
          src={instalogo}
          alt=""
          className="w-9.5 md:w-12 lg:w-16 xl:w-20 aspect-square mt-[70px] md:mt-0 cursor-pointer"
        />
      </div>
      <p className="mt-[83px] md:mt-25 lg:mt-26 text-center md:text-start text-[2.8vw] md:text-[1vw] font-light">
        ご予約・お問い合わせは、LINEより受け付けております。ご不明点等ございましたら、お気軽にご連絡くださいませ。
      </p>
      <p className="text-center mt-6 mb-5 md:mt-[6vw] text-[10px] md:text-[0.95vw] tracking-[0.099em]">
        Copyright © Nagamori art makeup All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
