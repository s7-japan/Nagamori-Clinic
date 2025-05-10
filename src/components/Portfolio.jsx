"use client";
import SectionHeader from "./SectionHeader";
import SideShape from "./SideShape";
import BorderCutBtn from "./Button/BorderCutBtn";
const Portfolio = () => {
  return (
    <div className="relative">
      <SideShape height={"739px"} right={"0"} />
      <SideShape height={"739px"} left={"0"} bottom={"0"} />

      <div className="large-con relative mt-20 flex flex-col items-center md:mt-22 lg:mt-24 xl:mt-27">
        <SectionHeader heading={"Portfolio"} subheading={"施術例"} />
        <div className="mt-2 grid grid-cols-2 gap-4.5 md:mt-3 md:grid-cols-3 md:gap-6 lg:mt-4 lg:grid-cols-4 lg:gap-7 xl:mt-5 xl:gap-9">
          <img src="/assets/p1.png" alt="portfolio_image" />
          <img src="/assets/p7.png" alt="portfolio_image" />
          <img src="/assets/p5.png" alt="portfolio_image" />
          <img src="/assets/p6.png" alt="portfolio_image" />
          <img src="/assets/p9.png" alt="portfolio_image" />
          <img src="/assets/p8.png" alt="portfolio_image" />
          <img src="/assets/p4.png" alt="portfolio_image" />
          <img src="/assets/p12.png" alt="portfolio_image" />
          <img src="/assets/p10.png" alt="portfolio_image" />
          <img src="/assets/p3.png" alt="portfolio_image" />
          <img src="/assets/p11.png" alt="portfolio_image" />
          <img src="/assets/p2.png" alt="portfolio_image" />
        </div>
        <div className="mt-12 flex w-full cursor-pointer justify-center md:mt-20 lg:mt-25 xl:mt-30">
          <a
            className="w-full sm:w-fit"
            href="https://www.instagram.com/tomomi_nagamori_art?igsh=bmtpYzRvZXQ1bXE1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BorderCutBtn text={"詳細はこちら →"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
