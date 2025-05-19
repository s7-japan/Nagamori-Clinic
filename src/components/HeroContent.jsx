import React from "react";
import SideShape from "./SideShape";
import BorderCutBtn from "./Button/BorderCutBtn";
import Link from "next/link";
const HeroContent = () => {
  return (
    <div className="relative md:mt-20 lg:mt-30 xl:mt-44">
      <SideShape height={"739px"} />
      <div className="relative container mx-auto flex flex-col px-6 md:flex-row md:items-start md:gap-6 md:px-0 lg:gap-10 xl:max-w-7xl xl:gap-22">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="relative flex items-center justify-center py-10 xl:flex-col xl:items-start xl:py-0">
            <img
              src="/assets/concept.png"
              alt="concept"
              className="absolute left-1/2 w-48 -translate-x-1/2 opacity-40 xl:relative xl:left-0 xl:w-52 xl:-translate-0 xl:opacity-60"
            />
            <p className="text-[28px] tracking-[0.055em] text-[#606060] xl:-mt-5 xl:text-[45px] xl:font-light xl:text-black">
              リアルで自然な眉を描く
            </p>
          </div>
          <p className="leading-[36px] font-light lg:text-lg xl:mt-14 xl:text-xl">
            現在の主流としては、使い捨ての医療用ニードルと色素を用いて、皮膚の真皮上層部に染色していく行為です。
            <br />
            <br />
            アートメイクの施術直後は濃く発色しますが、1週間程度で色が落ち着いてきます。個人差がありますが、数ヶ月〜数年かけて徐々に薄くなりますが、完全に消えることはありません。色の定着には個人差がありますので、2〜3回の施術が必要な方が多いです。
            <br />
            <br />
            ただし、日本ではまだまだ手彫りによる毛並み技術が主流ですが、この技術では数年経つと滲んでしまい、塗りつぶしたような仕上がりになる点が懸念されます。
            <br />
            <br />
            一方で、Nagamori Art
            Makeでの施術ではマシンでドットを描く技術を採用しており、滲みにくく肌への負担も少ないのが特徴です。これにより、仕上がりの美しさと長持ちする自然な色味を実現しています。
          </p>
        </div>
        <div className="mt-11 flex w-full justify-end md:w-1/2 xl:mt-0">
          <img
            src="/assets/Intersection.png"
            alt="intersection"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
