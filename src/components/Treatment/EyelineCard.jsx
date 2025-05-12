import React from "react";
import PriceCard from "../PriceCard";
import PriceCard2 from "../PriceCard2";
import SideShape from "../SideShape";
import TSectionHeader from "./TSectionHeader";
import SmallHeading from "./SmallHeading";
export default function EyelineCard() {
  return (
    <div className="relative">
      <SideShape height="725px" top="0" left="0" />
      <div className="small-con">
        <TSectionHeader
          heading={"Eyeline"}
          subheading={"アイライン"}
          lineText={"料金表"}
        />
        <div className="mx-auto mt-2 w-full">
          <img src="/assets/t2.png" className="hidden md:block w-full"  alt="t2Image" />
          <img src="/assets/t2-mobile.png" className="md:hidden w-full"  alt="t2Image" />
        </div>

        <div>
          <SmallHeading text="テールなし" />
          <div className="mx-auto w-full border border-[#7070703a]">
            <PriceCard
              serial={"1回目"}
              p1={"（税込み）66,000 円"}
              p2={"（モニター価格税込み）52,800 円"}
            />
            <PriceCard
              serial={"2回目"}
              p1={"（税込み）33,000 円"}
              p2={"（モニター価格税込み）26,400 円"}
            />
          </div>
          <PriceCard2 serial={"3回目 1年以内"} p1={"（税込み）44,000 円"} />
          <PriceCard2 serial={"3回目 1年以内"} p1={"（税込み）55,000 円"} />
        </div>

        <div>
          <SmallHeading text="テール or シャドウあり" />
          <div className="mx-auto w-full border border-[#7070703a]">
            <PriceCard
              serial={"1回目"}
              p1={"（税込み）88,000 円"}
              p2={"（モニター価格税込み70,400 円"}
            />
            <PriceCard
              serial={"2回目"}
              p1={"（税込み）33,000 円"}
              p2={"（モニター価格税込み）26,400 円"}
            />
          </div>
        </div>
        <PriceCard2 serial={"3回目 1年以降"} p1={"（税込み）44,000 円"} />
        <PriceCard2 serial={"3回目 1年以降"} p1={"（税込み）55,000 円"} />
      </div>
    </div>
  );
}
