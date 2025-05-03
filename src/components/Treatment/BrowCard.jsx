import React from "react";
import PriceCard from "../PriceCard";
import PriceCard2 from "../PriceCard2";
import SideShape from "../SideShape";
import TSectionHeader from "../Treatment/TSectionHeader";
export default function BrowCard() {
  return (
    <div className="relative">
      <SideShape height="725px" top="0" left="0" />
      <div className="small-con">
        <TSectionHeader
          heading={"Brow"}
          subheading={"眉"}
          lineText={"料金表"}
        />
        <div className="mx-auto mt-2 w-full xl:mt-8.5">
          <img src="/assets/t1.png" alt="t1Image" />
        </div>

        <div className="mt-8">
          <div className="mx-auto mt-5 w-full border border-b-0 border-[#7070703a]">
            <PriceCard
              serial={"1回目"}
              p1={"（税込み）110,000 円"}
              p2={"（モニター価格税込み）88,000 円"}
            />
            <PriceCard
              serial={"2回目"}
              p1={"（税込み）880,000 円"}
              p2={"（モニター価格税込み）70,400 円"}
            />
          </div>
          <PriceCard2 serial={"3回目 1年以内"} p1={"（税込み）44,000 円"} />
          <PriceCard2 serial={"3回目 1年以降"} p1={"（税込み）55,000 円"} />
        </div>
      </div>
    </div>
  );
}
