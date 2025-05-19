import React from "react";

export default function BorderCutBtnSm({ text }) {
  return (
    <div className="border_cut_btnsm px-5 py-3 text-center text-[13px] md:text-[25px] before:inset-[1px] md:before:inset-[3px] tracking-[0.0134em] max-w-[170px] md:max-w-[323px]">
      {text}
    </div>
  );
}
