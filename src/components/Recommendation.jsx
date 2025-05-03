import React from "react";
import DoctorCard from "./DoctorCard";
import SideShape from "./SideShape";
const Recommendation = () => {
  return (
    <div className="relative">
      <SideShape height={"851px"} right={"0"} />
      <SideShape height={"843px"} bottom={"0"} />

      <div className="large-con relative mt-10 md:mt-16 lg:mt-20 xl:mt-25">
        <div className="flex flex-col items-center">
          <h1 className="sikita text-center text-[35px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
            Recommendations
          </h1>
          <div className="h-underline"></div>
          <p className="subheading-1">提携先クリニックからひとこと</p>
        </div>
        <div className="grid-cols-1 gap-y-14 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-20 md:pb-20 lg:grid-cols-3 lg:gap-y-30 xl:gap-y-35">
          <DoctorCard
            image="/assets/d4.png"
            t1={"前田 拓摩"}
            t2={"札幌ル・トロワ ビューティクリニック Vogue 院長"}
            t3={
              "札幌ルトロワビューティクリニックVogueでは、永森友美氏によるトップレベルのアートメイク技術をご提供しています。最新の技術とセンスで、自然で洗練されたアートメイクを実現します。"
            }
          />
          <DoctorCard
            image="/assets/d5.png"
            t1={"細井 龍"}
            t2={"アマソラクリニック院長"}
            t3={
              "永森友美氏は、国内外で数々の実績を持つアートメイクのスペシャリストです。総合病院での看護経験をはじめ、美容外科や美容皮膚科で技術を磨き上げた後、HAABでアートメイク部門を立ち上げるなど、美容業界において独自のキャリアを築いてきました。"
            }
          />

          <div className="mb-20 md:mb-0">
            <div>
              <img
                src="/assets/d3.png"
                alt="doctor"
                className="h-full w-full object-cover"
              />
              <div className="mt-2">
                <div className="mt-[19px] mb-[23px] h-[1px] w-10 bg-[#707070] opacity-20"></div>
                <p className="sikita text-[33px] font-bold opacity-20">
                  doctor
                </p>
                <h1 className="trakcing-[0.02em] text-[39px]">田中 優太</h1>
                <div className="flex flex-col">
                  <p className="sitika mt-5 text-[22px] italic md:text-[24px] lg:text-[25px] xl:text-[27px]">
                    HAAB DREAM BEAUTY CLINIC
                  </p>
                  <p className="sitika text-[22px] italic md:text-[24px] lg:text-[25px] xl:text-[27px]">
                    東京本院 院長
                  </p>
                </div>
                <p className="mt-4 font-light md:text-[17px] lg:text-[19px] xl:text-[21px]">
                  永森友美氏は、国内外で数々の実績を持つアートメイクのスペシャリストです。HAABではアートメイク部門の立ち上げから、現在はHAABアートメイク統括として活躍中。お客様からの評判も大変良く、著名人も数多く担当しています。
                </p>
              </div>
            </div>
          </div>
          <DoctorCard
            image="/assets/d1.png"
            t1={"大西 真代"}
            t2={"GRACY TOKYO CLINIC 院長"}
            t3={
              "世界中のアートメイクイベントでスピーカーや審査員として活躍する、業界を代表するアーティストです。彼女の卓越した技術と知識は、国内外で高く評価されており、イタリア・ミラノでのコンペティションでの優勝や、世界的権威「Beauty Angel Master」の資格取得など、その実績は枚挙に暇がありません。"
            }
          />

          <div>
            <div>
              <img
                src="/assets/d2.png"
                alt="doctor"
                className="h-full w-full object-cover"
              />
              <div className="mt-2">
                <div className="mt-[19px] mb-[23px] h-[1px] w-10 bg-[#707070] opacity-20"></div>
                <p className="sikita text-[33px] font-bold opacity-20">
                  doctor
                </p>
                <h1 className="trakcing-[0.02em] text-[39px]">池田 欣生</h1>
                <p className="sitika mt-5 text-[22px] italic md:text-[24px] lg:text-[25px] xl:text-[27px]">
                  SHIBAURA B.CLINIC 院長
                </p>
                <p className="mt-4 font-light md:text-[17px] lg:text-[19px] xl:text-[21px]">
                  看護師として長年の臨床経験を積んだ後にアートメイクアーティストに転身。その後真面目に学会発表をされたりヨーロッパのアートメイクコンテストで優勝するなど、安心でかつデザインのセンスも良い方なので自信を持ってお勧めできるアートメイク看護師です。
                </p>
                <p className="mt-4 font-light md:text-[17px] lg:text-[19px] xl:text-[21px]">
                  日本初の「Beauty Angel
                  Master」資格取得者であり、真の美しさを追求し続けています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
