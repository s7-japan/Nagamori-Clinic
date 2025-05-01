import React from "react";
import hero from "../assets/hero_removed.png";
import herowhite from "../assets/herowhite.svg";
import TreatmentCard from "../components/TreatmentCard";

const Treatment = () => {
  return (
    <div>
      <div className="pt-28 md:pt-[10vw] px-6 md:px-[16vw]">
        <p className="text-[3vw] md:text-[1.3vw] mb-[1vw] text-[#00000063] md:text-black">
          ホーム 施術メニュー（料金表）
        </p>
        <div className="flex flex-col md:flex-row justify-start md:mb-4 lg:mb-6 xl:mb-7.5 mt-9">
          <p className="text-[clamp(2rem,3vw,4.125rem)] tracking-[0.2em] text-center">
            施術メニュー
          </p>
          <p className="text-[clamp(1.25rem,3vw,4.125rem)] text-center tracking-[0.2em] mb-5 md:mb-0">
            （料金表）
          </p>
        </div>
      </div>
      <div className="w-full h-[55vw] md:h-[25vw] bg-[#E6E6E6] flex md:px-[13vw] px-6">
        <div className="w-1/2 h-full">
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 h-full md:items-center flex items-start">
          <img src={herowhite} alt="" className="h-25" />
        </div>
      </div>
      <div className="px-6 leading-[36px] md:px-[13vw] mt-8 mb-20 font-light">
        当院には様々な最先端医療がございますので、まずは施術(値段)一覧よりご希望のメニューご確認いただき、カウンセリングにお越しください。美容治療のスペシャリスト達が、患者様の「究極の美」を追求するため、お悩みに合わせたプランをご提案させていただきます。
      </div>
      <TreatmentCard />
    </div>
  );
};

export default Treatment;
