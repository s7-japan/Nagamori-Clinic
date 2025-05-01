"use client";

import Link from "next/link";

const Info = () => {
  return (
    <div className="px-6 md:px-[16vw] flex-row md:flex mt-14 md:mt-[10vw] md:h-[40vw]">
      <div className="md:hidden">
        <div>
          <p className="text-[#7070706e] text-[6vw] md:text-[1.5vw] sikita">
            Makeup Artist
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between md:gap-16 items-center">
            <h1 className="text-[12vw] md:text-[3.5vw] font-light">永森友美</h1>
            <img
              onClick={() => {
                window.location.replace(
                  "https://www.instagram.com/tomomi_nagamori_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                );
              }}
              src="/images/instalogo.png"
              alt=""
              className="h-10 cursor-pointer"
            />
          </div>
          <p className="italic text-[4vw] md:text-[1.2vw] mb-5 sikita">
            Nagamori Tomomi
          </p>
        </div>
      </div>
      <div className="w-full md:w-[45%]">
        <img
          src="/images/Intersection.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full md:w-[55%] flex flex-col md:justify-between pl-0 md:pl-20">
        <div className="hidden md:block">
          <div className="relative">
            <div className="h-[1px] w-6 bg-[#707070] opacity-[25%] absolute top-[1vw] -left-[3vw]"></div>
            <p className="text-[#7070706e] text-[1.5vw] sikita md:mb-[1.3vw]">
              Makeup Artist
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-16 items-center">
              <h1 className="text-[3.3vw] font-light">永 森 友 美</h1>
              <img
                onClick={() => {
                  window.location.replace(
                    "https://www.instagram.com/tomomi_nagamori_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  );
                }}
                src="/images/instalogo.png"
                alt=""
                className="md:h-[3.5vw] cursor-pointer"
              />
            </div>
            <p className="italic text-[1.3vw]">Nagamori Tomomi</p>
          </div>
        </div>
        <p className="text-lg md:text-[0.95vw] md:text-[#707070] font-[200] md:font-[500] mt-5 leading-[9vw] md:mt-0 md:leading-[1.1vw]">
          総合病院での看護経験の後、大手美容外科、美容皮膚科で
          長年経験を積み、美容に関する技術と知識を習得その後、HAAB
          でアートメイク部門を立ち上げる。
          <br />
          <br />
          国内外のあらゆる資格を取得し、とくに世界的に認められている Beauty
          Angel Master を日本で初めて取得。
          <br />
          <br />
          イタリア・ミラノで開催された米国 SVIATO アカデミーのコンペティションで
          1 位獲得。
          <br />
          <br />
          AMASORA
          Clinic、札幌ルトロワビューティクリニックVogueでのアートメイクを開始。
          <br />
          <br />
          世界で開催されるアートメイクイベントにスピーカーや審査員として招待される。
        </p>
        <div className="flex justify-center md:justify-start">
          <Link href="/contact">
            <button>
              <img
                src="/images/btn4.svg"
                alt=""
                className="mt-10 md:mt-0 w-[15vw] hidden md:block cursor-pointer"
              />
            </button>
          </Link>
          <Link href="/contact"></Link>
          <button>
            <img
              src="/images/btn4.svg"
              alt=""
              className="mt-10 md:mt-0 w-full md:hidden cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
