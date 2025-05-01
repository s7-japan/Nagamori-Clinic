import Link from "next/link";

const MobileNav = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={`lg:hidden fixed w-[50%] h-[100vh] bg-white pt-20 z-9 right-0 ${
        sidebar ? "" : "translate-x-full"
      } transition-all duration-300 border border-[#7070703e]`}
    >
      <div className="flex flex-col p-5 gap-5">
        <Link
          onClick={() => {
            setSidebar(!sidebar);
          }}
          href={"/"}
        >
          ホーム
        </Link>

        <Link
          onClick={() => {
            setSidebar(!sidebar);
          }}
          href={"/treatment"}
        >
          施術メニュー
        </Link>

        <Link
          onClick={() => {
            setSidebar(!sidebar);
          }}
          href={"/schedule"}
        >
          出勤予定表
        </Link>
        
        <Link
          onClick={() => {
            setSidebar(!sidebar);
          }}
          href={"/contact"}
        >
          お問い合わせ
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
