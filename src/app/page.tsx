import React from "react";
import HeroSection from "../components/HeroSection";
import HeroContent from "../components/HeroContent";
import Menu from "../components/Menu";
import Info from "../components/Info";
import Portfolio from "../components/Portfolio";
import Recommendation from "../components/Recommendation";
import ImageSlider from "../components/Imageslider/ImageSlider";
import AnimatedLoader from "../components/Loader/AnimatedLoader";
import AnimatedLoaderMobile from "../components/Loader/AnimatedLoaderMobile";
import HeroContent2 from "../components/HeroContent2";
import Menu2 from "../components/Menu2";

const Home = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <AnimatedLoader />
      </div>
      <div className="md:hidden">
        <AnimatedLoaderMobile />
      </div>
      <HeroSection />
      <ImageSlider />
      <HeroContent />
      <HeroContent2 />
      <Menu2 />
      <Menu />
      <Info />
      <Portfolio />
      <Recommendation />
    </div>
  );
};

export default Home;
