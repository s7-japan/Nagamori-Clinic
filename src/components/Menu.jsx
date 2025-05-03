"use client";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import SideShape from "./SideShape";
import BorderCutBtn from "./Button/BorderCutBtn";
const Menu = () => {
  return (
    <div className="relative md:mt-20 lg:mt-30 xl:mt-44">
      <SideShape height={"1043px"} right={"0"} />
      <div className="large-con relative mt-24 flex flex-col items-center">
        <SectionHeader heading={"Menu"} subheading={"施術メニュー"} />
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-8">
          <div>
            <div className="mb-1">
              <img src="/assets/menu1.png" alt="menu" />
            </div>
            <p className="s-card-heading">眉アートメイク</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
          <div>
            <div className="mb-1">
              <img src="/assets/menu2.png" alt="menu" />
            </div>
            <p className="s-card-heading">アイラインアートメイク</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
          <div>
            <div className="mb-1">
              <img src="/assets/menu3.png" alt="menu" />
            </div>
            <p className="s-card-heading">リップアートメイク</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
          <div>
            <div className="mb-1">
              <img src="/assets/menu4.png" alt="menu" />
            </div>
            <p className="s-card-heading">ヘアライン, 涙袋 etc</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center md:mt-13 lg:mt-17 xl:mt-20">
          <Link href="/treatment" className="w-full sm:w-fit">
            <BorderCutBtn text={"予約確認はこちら →"} />
          </Link>
        </div>
        <p className="mt-8 text-[13px] tracking-[0.097em] md:mt-9 md:text-base lg:mt-10 lg:text-[22px] xl:mt-12 xl:text-[25px]">
          初めての方も、お気軽にお問い合わせください。
        </p>
      </div>
    </div>
  );
};

export default Menu;
