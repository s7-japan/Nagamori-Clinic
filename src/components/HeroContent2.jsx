import React from "react";
import SideShape from "./SideShape";

const HeroContent2 = () => {
  return (
    <div className="relative md:mt-20 lg:mt-30 xl:mt-44">
      <SideShape height={"757px"} right={"0"} />
      <div className="large-con relative flex flex-col-reverse md:flex-row md:items-start md:gap-6 lg:gap-10 xl:gap-22">
        <div className="mt-14 flex w-full flex-col gap-5 md:mt-0 md:max-w-[340px] lg:max-w-[390px]">
          <div className="aspect-square w-full overflow-hidden">
            <video
              src="/assets/vid1.mov"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            ></video>
          </div>

          <div className="aspect-square w-full overflow-hidden">
            <video
              src="/assets/vid2.mov"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            ></video>
          </div>
        </div>

        <div className="relative flex w-full flex-col justify-center">
          <div className="relative mt-5 mr-auto ml-auto flex w-[330px] flex-col items-center justify-center py-10 md:-mt-3 md:ml-0 md:pt-0 lg:w-[490px] xl:w-[628px] xl:flex-col xl:items-start xl:py-0">
            <p className="text-[41px] NotoSerifJP tracking-[0.055em] text-[#606060] lg:text-[50px] xl:mt-20 xl:text-[63px]">
              Feather Brow
            </p>
            <p className="text-[17px] tracking-[0.055em] mt-3 xl:mt-4 text-[#606060] lg:text-[23px] xl:text-[28px]">
              永森独自の技法でリアルな毛並みを再現
            </p>
          </div>
          <p className="leading-[36px] font-light lg:text-lg xl:mt-14 xl:text-xl">
            眉のアートメイクは、「肌質」と「仕上がり感」
            でお客様と丁寧に相談のうえ、手彫りか機械彫りかを決めていきますが、マシンのほうが大胆な毛並みができます。
            <br />
            <br />
            Feather
            Browは、マシンを使用し、ドットの集合体で線を描くことにより、肌への負担が少なくなる、にじみにくく産毛も再現できる、
            お客様の肌質を選ばない、より自由なデザインにできる、
            <br />
            など利点が多いため，世界中で普及している技法です。
            <br />
            <br />
            日本ではまだ綺麗に描けるアーティストが極めて少ないですが、施術者の技術ですべてが決まります。
            <br />
            <br />
            永森が世界的評価の高い4つの講習を経て、５年の学びと研究を重ねて作り上げた技術で、よりリアルな毛並み感を提供いたします。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent2;
