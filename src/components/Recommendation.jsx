import React from "react";
import d1 from "../../public/images/d1.png";
import d2 from "../../public/images/d2.png";
import d3 from "../../public/images/d3.png";
import d4 from "../../public/images/d4.png";
import d5 from "../../public/images/d5.png";

const Recommendation = () => {
  return (
    <div className="px-6 md:px-[16vw] mt-10 md:mt-[8vw] relative">
      <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[30%] w-[28%] opacity-[12%] hidden md:block -z-10"></div>
      <h1 className="flex justify-center text-center text-[10vw] md:text-[4vw] mb-1 sikita">
        Recommendations
      </h1>
      <div className="w-25 h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
      <p className="text-center mb-14 md:mb-12 text-[4vw] md:text-[1.1vw] text-[#707070] font-[600]">
        提携先クリニックからひとこと
      </p>

      <div className="md:grid grid-cols-1 md:grid-cols-3 md:gap-x-16 md:gap-y-40 md:pb-20">
        <div className="mb-20 md:mb-0">
          <div>
            <img src="/images/d4.png" alt="" className="w-full h-full object-cover" />
            <div className="mt-2">
              <p className="text-[6vw] md:text-[1.3vw] font-bold text-[#70707079] sikita md:mb-[0.8vw]">
                doctor
              </p>
              <h1 className="text-[12vw] md:text-[2.1vw] mb-3 md:mb-2">
                前田 拓摩
              </h1>
              <p className="text-[6.5vw] md:text-[1.2vw] mb-3">
                札幌ル・トロワ ビューティクリニック Vogue 院長
              </p>
              <p className="text-[3.9vw] md:text-[1vw] leading-[6vw] md:leading-[1.5vw] text-[#707070]">
                札幌ルトロワビューティクリニックVogueでは、永森友美氏によるトップレベルのアートメイク技術をご提供しています。最新の技術とセンスで、自然で洗練されたアートメイクを実現します。
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-0">
          <div>
            <img src="/images/d5.png" alt="" className="w-full h-full object-cover" />
            <div className="mt-2">
              <p className="text-[6vw] md:text-[1.3vw] font-bold text-[#70707079] sikita md:mb-[0.8vw]">
                doctor
              </p>
              <h1 className="text-[12vw] md:text-[2.1vw] mb-3 md:mb-2">
                細井 龍
              </h1>
              <p className="text-[6.5vw] md:text-[1.2vw] mb-3 min-h-[45px]">
                アマソラクリニック院長
              </p>
              <p className="text-[3.9vw] md:text-[1vw] leading-[6vw] md:leading-[1.5vw] text-[#707070]">
                永森友美氏は、国内外で数々の実績を持つアートメイクのスペシャリストです。総合病院での看護経験をはじめ、美容外科や美容皮膚科で技術を磨き上げた後、HAABでアートメイク部門を立ち上げるなど、美容業界において独自のキャリアを築いてきました。
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-0">
          <div>
            <img src="/images/d3.png" alt="" className="w-full h-full object-cover" />
            <div className="mt-2">
              <p className="text-[6vw] md:text-[1.3vw] font-bold text-[#70707079] sikita md:mb-[0.8vw]">
                doctor
              </p>
              <h1 className="text-[12vw] md:text-[2.1vw] mb-3 md:mb-2">
              田中 優太
              </h1>
              <p className="text-[6.5vw] md:text-[1.2vw] mb-3 min-h-[45px]">
                HAAB DREAM BEAUTY CLINIC 東京本院 院長
              </p>
              <p className="ttext-[3.9vw] md:text-[1vw] leading-[6vw] md:leading-[1.5vw] text-[#707070]">
                永森友美氏は、国内外で数々の実績を持つアートメイクのスペシャリストです。HAABではアートメイク部門の立ち上げから、現在はHAABアートメイク統括として活躍中。お客様からの評判も大変良く、著名人も数多く担当しています。
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-0">
          <div>
            <img src="/images/d2.png" alt="" className="w-full h-full object-cover" />
            <div className="mt-2">
              <p className="text-[6vw] md:text-[1.3vw] font-bold text-[#70707079] sikita md:mb-[0.8vw]">
                doctor
              </p>
              <h1 className="text-[12vw] md:text-[2.1vw] mb-3 md:mb-2">
                池田 欣生
              </h1>
              <p className="text-[6.5vw] md:text-[1.2vw] mb-3">
                SHIBAURA B.CLINIC 院長
              </p>
              <p className="text-[3.9vw] md:text-[1vw] leading-[6vw] md:leading-[1.5vw] text-[#707070]">
                看護師として長年の臨床経験を積んだ後にアートメイクアーティストに転身。その後真面目に学会発表をされたりヨーロッパのアートメイクコンテストで優勝するなど、安心でかつデザインのセンスも良い方なので自信を持ってお勧めできるアートメイク看護師です。
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img src="/images/d1.png" alt="" className="w-full h-full object-cover" />
            <div className="mt-2">
              <p className="text-[6vw] md:text-[1.3vw] font-bold text-[#70707079] sikita md:mb-[0.8vw]">
                doctor
              </p>
              <h1 className="text-[12vw] md:text-[2.1vw] mb-3 md:mb-2">
                大西 真代
              </h1>
              <p className="text-[6.5vw] md:text-[1.2vw] mb-3">
                GRACY TOKYO CLINIC 院長
              </p>
              <p className="text-[3.9vw] md:text-[1vw] leading-[6vw] md:leading-[1.5vw] text-[#707070]">
                世界中のアートメイクイベントでスピーカーや審査員として活躍する、業界を代表するアーティストです。彼女の卓越した技術と知識は、国内外で高く評価されており、イタリア・ミラノでのコンペティションでの優勝や、世界的権威「Beauty
                Angel Master」の資格取得など、その実績は枚挙に暇がありません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
