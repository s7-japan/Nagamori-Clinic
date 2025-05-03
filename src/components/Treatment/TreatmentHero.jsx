import React from "react";
export default function TreatmentHero() {
  return (
    <div>
      <div className="large-con mt-5 px-6 md:mt-7 lg:mt-8 xl:mt-10">
        <p className="text-xs opacity-60 md:text-base md:opacity-100 lg:text-2xl xl:text-[28px]">
          ホーム 施術メニュー（料金表）
        </p>
        <div className="mt-9 flex flex-col justify-start md:mb-4 md:flex-row lg:mb-6 xl:mb-7.5">
          <p className="text-center text-[clamp(2rem,3vw,4.125rem)] tracking-[0.2em]">
            施術メニュー
          </p>
          <p className="mb-5 text-center text-[clamp(1.25rem,3vw,4.125rem)] tracking-[0.2em] md:mb-0">
            （料金表）
          </p>
        </div>
      </div>
      <div className="flex h-[197px] w-full items-center bg-[#E6E6E6] md:h-[260px] lg:h-[350px] xl:h-[494px]">
        <div className="large-con flex h-full md:items-center">
          <div className="flex h-full w-1/2 items-end">
            <img
              src="/assets/hero_removed.png"
              alt="hero"
              className="h-[180px] w-full object-cover md:h-auto"
            />
          </div>
          <div className="flex w-1/2 items-start md:items-center md:justify-end">
            <img
              src="/assets/herowhite.svg"
              alt="hero_white"
              className="md:mt0 mt-9 w-[192px] md:w-[280px] lg:w-[400px] xl:w-[527px]"
            />
          </div>
        </div>
      </div>
      <div className="large-con mt-[53px] px-6 leading-[36px] font-light md:mt-9 md:text-xl md:leading-[40px] lg:mt-8 lg:text-2xl lg:leading-[48px] xl:text-3xl xl:leading-[51px]">
        当院には様々な最先端医療がございますので、まずは施術(値段)一覧よりご希望のメニューご確認いただき、カウンセリングにお越しください。美容治療のスペシャリスト達が、患者様の「究極の美」を追求するため、お悩みに合わせたプランをご提案させていただきます。
      </div>
    </div>
  );
}
