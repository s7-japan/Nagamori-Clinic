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
          <p className="leading-[36px] font-light lg:text-lg lg:font-normal xl:mt-14 xl:text-xl">
            現在の主流としては使い捨ての医療⽤ニードルと⾊素を⽤いて、⽪膚の真⽪上層部に染⾊していく⾏為です。
            <br />
            <br />
            アートメイクの施術直後は濃く発⾊しますが、1週間程で半分くらいの発⾊に落ち着きます。個⼈差が⽣じますが、数ヶ⽉〜数年かけて徐々に薄くなりますが、完全に消えることはありません。⾊の定着に個⼈差がありますので、2〜3回の回数が必要な⽅がいます。
            <br />
            <br />
            仕上がりが希望の⾊・形と異なるリスクがあります。ニードルの刺激により、発⾚・腫脹・疼痛・搔痒感が数⽇続く場合があります。また、感染・予期せぬアレルギー等の副作⽤が起こる可能性があります。
          </p>
        </div>
        <div className="mt-11 flex w-full justify-end md:w-1/2 xl:mt-0">
          <img
            src="/assets/Intersection.png"
            alt="intersection"
            className="w-full"
          />
        </div>
        <div className="mt-10 flex justify-center md:hidden">
          <Link href={"/contact"} className="w-full sm:w-fit">
            <BorderCutBtn text={"予約確認はこちら →"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
