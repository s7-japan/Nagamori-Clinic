import React from "react";
import t1 from "../assets/t1.png";
import t3 from "../assets/t3.png";
import t2 from "../assets/t2.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import brow from "../assets/Brow.png";
import Hairline from "../assets/Hairline1.png";
import schedule1 from "../assets/schedule1.svg";
import schedule2 from "../assets/schedule2.svg";

const TreatmentCard = () => {
  return (
    <div>
      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] left-0 h-[50%] w-[28%] opacity-[16%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[7vw] md:text-[3.2vw] mb-1 sikita">
          Brow
        </h1>
        <div className="w-[clamp(109px,20vw,150px)] h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[4vw] md:text-[1vw]">眉</p>

        <div className="border-b w-full mx-auto py-1 text-[clamp(1.125rem,4vw,2.0625rem)] tracking-[0.076em] md:tracking-normal">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t1} alt="" />
        </div>

        <div>
          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                1回目
              </div>
              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）110,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）88,000 円
                </div>
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                2回目
              </div>

              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）880,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）70,400 円
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[50%] w-[28%] opacity-[16%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 sikita">
          Lip
        </h1>
        <div className="w-[clamp(109px,20vw,150px)] h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[clamp(1.3125rem,2vw,1.5625rem)] tracking-[0.076em]">
          リップ
        </p>

        <div className="border-b w-full mx-auto py-1 text-[clamp(1.125rem,4vw,2.0625rem)] tracking-[0.076em] md:tracking-normal">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t3} alt="" />
        </div>

        <div>
          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                1回目
              </div>
              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）110,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）88,000 円
                </div>
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                2回目
              </div>

              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）880,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）70,400 円
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[43%] w-[28%] opacity-[16%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[7vw] md:text-[3.3vw] mb-1 sikita">
          Eyeline
        </h1>
        <div className="w-[clamp(109px,20vw,150px)] h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[clamp(1.3125rem,2vw,1.5625rem)] tracking-[0.076em]">
          アイライン
        </p>

        <div className="border-b w-full mx-auto py-1 text-[clamp(1.125rem,4vw,2.0625rem)] tracking-[0.076em] md:tracking-normal">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t2} alt="" />
        </div>

        <div>
          <p className="w-full md:w-[80%] mx-auto md:pb-2 pb-4.5 pt-10 md:text-start text-center text-[4.2vw] md:text-[1.3vw]">
            テールなし
          </p>
          <div className="w-full md:w-[80%] mx-auto border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                1回目
              </div>
              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）66,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）52,800 円
                </div>
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                2回目
              </div>

              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）33,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）26,400 円
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="w-full md:w-[80%] mx-auto md:pb-2 pb-4.5 pt-10 md:text-start text-center text-[4.2vw] md:text-[1.3vw]">
            テール or シャドウあり
          </p>
          <div className="w-full md:w-[80%] mx-auto border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                1回目
              </div>
              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）88,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み70,400 円
                </div>
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                2回目
              </div>

              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）33,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）26,400 円
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
          <div className="md:flex w-full">
            <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
              3回目 1年以降
            </div>
            <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
              （税込み）55,000 円
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] left-0 h-[34%] w-[28%] opacity-[16%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 sikita">
          Hairline
        </h1>
        <div className="w-[clamp(109px,20vw,150px)] h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[clamp(1.3125rem,2vw,1.5625rem)] tracking-[0.076em]">
          ヘアライン
        </p>

        <div className="border-b w-full mx-auto py-1 text-[clamp(1.125rem,4vw,2.0625rem)] tracking-[0.076em] md:tracking-normal">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t4} className="w-full" alt="" />
        </div>

        <div>
          <p className="w-full md:w-[80%] mx-auto md:pb-2 pb-4.5 pt-10 md:text-start text-center text-[4.2vw] md:text-[1.3vw]">
            トップ or サイド
          </p>
          <div className="w-full md:w-[80%] mx-auto border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:text-[1.2vw] py-[17px] flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:pl-6 lg:pl-6.5  md:w-[55%] bg-[#ffd2d239]">
                1回目
              </div>
              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）88,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）70,400 円
                </div>
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                2回目
              </div>

              <div className="flex flex-col py-5 justify-center text-nowrap">
                <div className="md:text-[1.2vw] md:text-left text-center pl-5 md:w-[45%]">
                  （税込み）66,000 円
                </div>
                <div className="md:text-[1.0vw] md:text-left text-center text-red-500 pl-5 md:w-[45%]">
                  （モニター価格税込み）52,800 円
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>
          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目 1年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
          <p className="w-full md:w-[80%] mx-auto md:pb-2 pb-4.5 pt-10 md:text-start text-center text-[4.2vw] md:text-[1.3vw]">
            SMP
          </p>
          <div className="w-full md:w-[80%] mx-auto  border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                1回目 （頭皮の毛根を書く技術）
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-[60%] bg-[#B6BFBC] left-0 h-[43%] w-[28%] opacity-[16%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 sikita">
          Other
        </h1>
        <div className="w-[clamp(109px,20vw,150px)] h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[clamp(1.3125rem,2vw,1.5625rem)] tracking-[0.076em]">
          その他
        </p>

        <div className="border-b w-full mx-auto py-1 text-[clamp(1.125rem,4vw,2.0625rem)] tracking-[0.076em] md:tracking-normal">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t5} className="w-full" alt="" />
        </div>

        <div>
          <p className="w-full md:w-[80%] mx-auto md:pb-2 pb-4.5 pt-10 md:text-start text-center text-[4.2vw] md:text-[1.3vw]">
            涙袋アートメイク
          </p>

          <div className="w-full md:w-[80%] mx-auto border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239] z-20">
                1回
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）33,000 円
              </div>
            </div>
          </div>
          <p className="w-full md:w-[80%] mx-auto md:pb-2 pb-4.5 pt-10 md:text-start text-center text-[4.2vw] md:text-[1.3vw]">
            眉・リップ Rmove (専門薬液を用いて過去のアートを薄くする技法）
          </p>
          <div className="w-full md:w-[80%] mx-auto  border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                1回{" "}
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）33,000 円
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="w-full md:w-[80%] mx-auto md:pb-2 pb-4.5 pt-10 md:text-start text-center text-[4.2vw] md:text-[1.3vw]">
            黒子・ホクロ
          </p>
          <div className="w-full md:w-[80%] mx-auto  border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                1回{" "}
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）11,000 円
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <img src={brow} alt="" />
          <img src={Hairline} alt="" />
        </div> */}
      </div>

      <div className="flex flex-col md:flex-row gap-5 px-[13%]">
        <div>
          <img src={schedule1} alt="" />
        </div>
        <div>
          <img src={schedule2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
