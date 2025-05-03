"use client";
import BorderCutBtn from "./Button/BorderCutBtn";

import Link from "next/link";

const Info = () => {
  return (
    <div className="large-con mt-21.5 flex flex-col md:mt-20 md:flex-row lg:mt-30 xl:mt-44">
      <div className="md:hidden">
        <p className="sikita text-2xl text-[23px] opacity-25 xl:text-4xl">
          Makeup Artist
        </p>
        <div className="mx-w-[522px] flex flex-col">
          <div className="flex items-center justify-between md:gap-16">
            <h1 className="text-[46px] font-light tracking-[0.02em] md:text-[52px] lg:text-[60px] xl:text-[72px]">
              永森友美
            </h1>
            <a
              className="w-12.5"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/tomomi_nagamori_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <img
                src="/assets/instalogo.png"
                alt="instalogo"
                className="cursor-pointer"
              />
            </a>
          </div>
          <p className="sikita md:2xl lg:text-28px mt-2 mb-5 text-[21px] italic xl:mt-2.5 xl:text-[33px]">
            Nagamori Tomomi
          </p>
        </div>
      </div>
      <div className="w-full md:w-[45%]">
        <img
          src="/assets/Intersection_2.png"
          alt="intersection"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center pl-0 md:w-[55%] md:items-start md:justify-between md:pl-20">
        <div className="hidden w-full md:block">
          <div className="relative">
            <div className="absolute top-[1vw] -left-[3vw] h-[1px] w-6 bg-[#707070] opacity-[25%]"></div>
            <p className="sikita text-2xl text-[23px] opacity-25 xl:text-4xl">
              Makeup Artist
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex max-w-[550px] items-center justify-between">
              <h1 className="text-[46px] font-light tracking-[0.02em] md:text-[52px] lg:text-[60px] xl:text-[72px]">
                永 森 友 美
              </h1>
              <a
                className="md:w-[45px] lg:w-[50px] xl:w-[63px]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/tomomi_nagamori_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <img
                  src="/assets/instalogo.png"
                  alt="instalogo"
                  className="w-full"
                />
              </a>
            </div>
            <p className="sikita md:2xl lg:text-28px mt-2 mb-5 text-[21px] italic xl:mt-2.5 xl:text-[33px]">
              Nagamori Tomomi
            </p>
          </div>
        </div>
        <p className="mt-10 leading-[36px] font-light md:mt-[50px] md:leading-[29px] lg:mt-[55px] lg:text-lg xl:mt-[65px] xl:text-xl">
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
        <div className="mt-11 flex w-full cursor-pointer justify-center md:mt-13 md:justify-start lg:mt-14 xl:mt-16">
          <Link href="/contact" className="w-full sm:w-fit">
            <BorderCutBtn text={"予約確認はこちら →"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
