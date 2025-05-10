import React from "react";
import PriceCard2 from "../PriceCard2";
import SideShape from "../SideShape";
import TSectionHeader from "./TSectionHeader";
import SmallHeading from "./SmallHeading";
export default function OtherCard() {
  return (
    <div className="relative">
      <SideShape height="725px" top="0" left="0" />

      <div className="small-con">
        <TSectionHeader
          heading={"Other"}
          subheading={"その他"}
          lineText={"料金表"}
        />
        <div className="mx-auto mt-2 w-full">
          <img src="/assets/t5.png" className="w-full" alt="other_image" />
        </div>
        <div>
          <SmallHeading text="涙袋アートメイク" />
          <PriceCard2 serial={"1回"} p1={"（税込み）33,000 円"} />
          <SmallHeading text="眉・リップ Rmove (専門薬液を用いて過去のアートを薄くする技法）" />
          <PriceCard2 serial={"1回"} p1={"（税込み）33,000 円"} />
        </div>
        <div>
          <SmallHeading text="黒子・ホクロ" />
          <PriceCard2 serial={"1個"} p1={"（税込み）11,000 円"} />
        </div>
      </div>
    </div>
  );
}
