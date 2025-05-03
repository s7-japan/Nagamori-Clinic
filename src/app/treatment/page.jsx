import React from "react";
import BrowCard from "@/components/Treatment/BrowCard";
import LipCard from "@/components/Treatment/LipCard";
import EyelineCard from "@/components/Treatment/EyelineCard";
import HairLineCard from "@/components/Treatment/HairLineCard";
import OtherCard from "@/components/Treatment/OtherCard";
import TreatmentHero from "@/components/Treatment/TreatmentHero";
import MenuImageCard from "@/components/Treatment/MenuImageCard";

const Treatment = () => {
  return (
    <div className="flex flex-col gap-[58px] md:gap-[70px] lg:gap-[85px] xl:gap-[107px]">
      <TreatmentHero />
      <BrowCard />
      <LipCard />
      <EyelineCard />
      <HairLineCard />
      <OtherCard />
      <MenuImageCard />
    </div>
  );
};

export default Treatment;
