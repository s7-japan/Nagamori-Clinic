export default function HeroSection() {
  return (
    <div className="">
      <img
        src="/assets/bg.svg"
        alt="background"
        className="hidden w-full md:block"
      />
      <div className="relative md:hidden">
        <div className="absolute top-7 w-full text-center">
          <img
            src="/assets/whitelogo.png"
            alt="logo"
            className="mx-auto w-[300px]"
          />
          <p className="sikita mt-8 w-full text-center text-sm text-white italic">
            Makeup Artist / Nagamori Tomomi
          </p>
        </div>
        <img src="/assets/mobilebg.svg" alt="background" className="w-full" />
      </div>
    </div>
  );
}
