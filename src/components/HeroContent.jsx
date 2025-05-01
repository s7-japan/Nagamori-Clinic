import React from "react";
import intersection from "../../public/images/Intersection.png";
import concept from "../../public/images/concept.png";
import btn1 from "../../public/images/btn1.svg";

const HeroContent = () => {
  return (
    <div className="px-6 md:px-[16vw] flex-row md:flex md:mt-[9vw] relative">
      <div className="absolute top-0 bg-[#B6BFBC] left-0 h-[95%] w-[28%] opacity-[12%] hidden md:block"></div>
      <div className="w-full md:w-1/2 flex flex-col relative">
        <div className="">
          <img
            src="/images/concept.png"
            alt=""
            className="md:h-[9.5vw] md:-top-[1.8vw] md:-left-[1vw] absolute -top-[0vw] left-[15vw] h-[40vw] opacity-50 md:opacity-100"
          />
        </div>
        <p className="text-[7vw] md:text-[2.1vw] font-light mt-[15vw] md:mt-[7vw]">
          リアルで自然な眉を描く
        </p>
        <p className="text-[3.7vw] md:text-[0.95vw] mt-[8vw] md:mt-[1.5vw] font-[200] md:font-[500] mb-20 md:mb-0 leading-9 md:leading-[1.8vw] md:text-[#707070]">
          現在の主流としては使い捨ての医療⽤ニードルと⾊素を⽤いて、⽪膚の真⽪上層部に染⾊していく⾏為です。
          <br />
          <br />
          アートメイクの施術直後は濃く発⾊しますが、1週間程で半分くらいの発⾊に落ち着きます。個⼈差が⽣じますが、数ヶ⽉〜数年かけて徐々に薄くなりますが、完全に消えることはありません。⾊の定着に個⼈差がありますので、2〜3回の回数が必要な⽅がいます。
          <br />
          <br />
          仕上がりが希望の⾊・形と異なるリスクがあります。ニードルの刺激により、発⾚・腫脹・疼痛・搔痒感が数⽇続く場合があります。また、感染・予期せぬアレルギー等の副作⽤が起こる可能性があります。
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <img src="/images/Intersection.png" alt="" className="w-full md:w-[80%]" />
      </div>
      <div className="flex justify-center mt-10 md:hidden">
        <img src="/images/btn1.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default HeroContent;
