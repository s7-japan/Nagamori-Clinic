export default function HeroSection() {
  return (
    <div className="md:h-[41vw] w-full pt-23 md:mb-0">
      <img src="/images/bg.svg" alt="" className="w-full hidden md:block" />
      <div className="md:hidden relative">
        <img
          src={"/images/whitelogo.svg"}
          alt=""
          className="absolute w-[300px] top-7 left-1/2 transform -translate-x-1/2"
        />
        <img
          src="/images/makeupLine.svg"
          alt=""
          className="absolute top-28 left-1/2 transform -translate-x-1/2"
        />
        <img src="/images/mobilebg.svg" alt="" className="w-full" />
      </div>
    </div>
  );
}
