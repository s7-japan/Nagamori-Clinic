import React from "react";
import PriceCard from "../PriceCard";
import PriceCard2 from "../PriceCard2";
import SideShape from "../SideShape";
import TSectionHeader from "./TSectionHeader";
export default function LipCard() {
  return (
    <div className="relative">
      <SideShape height="739px" top="0" right="0" />

      <div className="small-con">
        <TSectionHeader
          heading={"Lip"}
          subheading={"リップ"}
          lineText={"料金表"}
        />
        <div className="mx-auto mt-2 w-full">
          <img src="/assets/t3.png" className="hidden md:block w-full" alt="t3_image" />
          <img src="/assets/t3-mobile.png" className="md:hidden w-full" alt="t3_image" />
        </div>

        <div>
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
