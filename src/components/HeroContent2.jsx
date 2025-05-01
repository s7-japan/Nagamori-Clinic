import React from "react";
import technique from "../../public/images/technique.png";

const HeroContent2 = () => {
  return (
    <div className="px-6 md:px-[16vw] md:flex-row flex flex-col-reverse md:mt-32 mt-[9vw] relative">
      <div className="w-full md:w-[30%] mt-8 md:mt-0">
        <div className="flex flex-col gap-5">
          <div className="md:w-[18vw] md:h-[18vw] w-full h-[90vw]">
            <video
              src="/videos/vid1.mov"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="md:w-[18vw] md:h-[18vw] w-full h-[380px]">
            <video
              src="videos/vid2.mov"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
        <div></div>
      </div>
      <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[95%] w-[28%] opacity-[12%] hidden md:block"></div>

      <div className="w-full pl-0 md:w-[70%] md:pl-[5vw] flex flex-col justify-center relative">
        <div className="absolute right-20 md:left-[3.5vw] -top-[10vw] md:-top-[2.5vw]">
          <img
            src="/images/technique.png"
            alt=""
            className="h-[40vw] md:h-[10vw] opacity-50 md:opacity-100"
          />
        </div>
        <div className="text-[7vw] md:mt-[5vw] md:text-[2vw] mb-2 text-[#707070] font-[400] tracking-[3px]">
          永森独自の技法で
        </div>
        <div className="text-[7vw] md:text-[2vw] flex justify-end text-[#707070] font-[400] tracking-[3px]">
          リアルな毛並みを再現
        </div>
        <p className="text-[3.7vw] md:text-[0.95vw] mt-[8vw] md:mt-[1.5vw] font-[200] md:font-[600] mb-20 md:mb-0 leading-9 md:leading-[1.8vw] md:text-[#707070]">
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
          日本ではまだ綺麗に描けるアーティストが極めて少ないですが、施術者の技術ですべてが決まります。
          <br />
          <br />
          永森が世界的評価の高い4つの講習を経て、５年の学びと研究を重ねて作り上げた技術で、よりリアルな毛並み感を提供いたします。
        </p>
      </div>
    </div>
  );
};

export default HeroContent2;
