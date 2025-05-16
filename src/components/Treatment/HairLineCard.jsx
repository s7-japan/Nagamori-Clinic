import React from "react";

import PriceCard from "../PriceCard";
import PriceCard2 from "../PriceCard2";
import SideShape from "../SideShape";
import TSectionHeader from "./TSectionHeader";
import SmallHeading from "./SmallHeading";
export default function HairLineCard() {
  return (
    <div className="relative">
      <SideShape height="725px" top="0" left="0" />

      <div className="small-con">
        <TSectionHeader
          heading={"Hairline"}
          subheading={"ヘアライン"}
          lineText={"料金表"}
        />
        <div className="mx-auto mt-2 w-full">
          <img src="/images/hairline.jpg" className="w-full" alt="t4_image" />
        </div>

        <div>
          <SmallHeading text="トップ or サイド" />

          <div className="mx-auto w-full border border-[#7070703a]">
            <PriceCard
              serial={"1回目"}
              p1={"（税込み）88,000 円"}
              p2={"（モニター価格税込み）70,400 円"}
            />
            <PriceCard
              serial={"2回目"}
              p1={"（税込み）66,000 円"}
              p2={"（モニター価格税込み）52,800 円"}
            />
          </div>
          <PriceCard2 serial={"3回目 1年以内"} p1={"（税込み）44,000 円"} />
          <PriceCard2 serial={"3回目 1年以降"} p1={"（税込み）55,000 円"} />
          <SmallHeading text="SMP" />
          <PriceCard2
            serial={"1回目 （頭皮の毛根を書く技術）"}
            p1={"（税込み）55,000 円"}
          />
        </div>
      </div>
    </div>
  );
}
