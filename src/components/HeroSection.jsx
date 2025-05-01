import bg from "../../public/images/bg.svg";
import bgmobile from "../../public/images/mobilebg.svg";
import whitelogo from "../../public/images/whitelogo.svg";
import makeupLine from "../../public/images/makeupLine.svg";

export default function HeroSection() {
  return (
    <div className="md:h-[41vw] w-full pt-23 md:mb-0">
      <img src={bg} alt="" className="w-full hidden md:block" />
      <div className="md:hidden relative">
        <img
          src={whitelogo}
          alt=""
          className="absolute w-[300px] top-7 left-1/2 transform -translate-x-1/2"
        />
        <img
          src={makeupLine}
          alt=""
          className="absolute top-28 left-1/2 transform -translate-x-1/2"
        />
        <img src={bgmobile} alt="" className="w-full" />
      </div>
    </div>
  );
}
