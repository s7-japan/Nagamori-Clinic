import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ sidebar, setSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname || "/";
    if (path === "/") {
      setActiveMenu("home");
    } else if (path === "/treatment") {
      setActiveMenu("treatment");
    } else if (path === "/schedule") {
      setActiveMenu("schedule");
    } else if (path === "/contact") {
      setActiveMenu("contact");
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 z-20 flex h-[75px] w-full items-center justify-between bg-white px-7 md:h-[90px] lg:h-[114px] lg:pb-4 xl:pr-30">
        <Link href={"/"}>
          <img
            src="/assets/newLogo.svg"
            alt="logo"
            className="hidden cursor-pointer md:block"
          />
          <img
            src="/assets/Nlogo.svg"
            alt="logo"
            className="cursor-pointer md:hidden"
          />
        </Link>
        <div className="md:flex md:flex-col md:items-end">
          <div className="mb-2 hidden lg:mb-0 lg:flex lg:flex-col lg:items-end lg:gap-6">
            <a
              href="https://line.me/R/ti/p/@321iyeoj"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-b-md bg-[#06C755] px-4"
            >
              <img src="/assets/line.svg" alt="" className="lg:w-40 xl:w-44" />
            </a>

            <div className="hidden lg:flex lg:gap-25 xl:gap-35">
              <Link
                onClick={() => {
                  setActiveMenu("home");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                href={"/"}
              >
                ホーム
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "home" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
              <Link
                onClick={() => {
                  setActiveMenu("treatment");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                href={"/treatment"}
              >
                施術メニュー
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "treatment" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
              <Link
                onClick={() => {
                  setActiveMenu("schedule");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                href={"/schedule"}
              >
                出勤予定表
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "schedule" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
              <Link
                onClick={() => {
                  setActiveMenu("contact");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                href={"/contact"}
              >
                お問い合わせ
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "contact" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer lg:hidden">
            {sidebar ? (
              <RxCross1
                size={28}
                onClick={() => {
                  setSidebar(!sidebar);
                }}
              />
            ) : (
              <div
                onClick={() => {
                  setSidebar(!sidebar);
                }}
                className="flex flex-col gap-2"
              >
                <div className="h-[1px] w-[22px] bg-[#707070]"></div>
                <div className="h-[1px] w-[22px] bg-[#707070]"></div>
                <div className="h-[1px] w-[22px] bg-[#707070]"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[75px] md:h-[90px] lg:h-[114px]"></div>
    </>

    // <div
    //   className={`flex justify-between items-center py-5 md:py-0 md:pb-5 lg:items-end px-5 fixed top-0 left-0 w-full z-20 ${
    //     isScrolled ? "bg-white" : "lg:bg-white bg-white"
    //   }`}
    // >
    //   <div>
    //     <img
    //       onClick={() => {
    //         router.push("/");
    //       }}
    //       src="/images/newLogo.svg"
    //       alt="logo"
    //       className="cursor-pointer h-[4.1vw] hidden md:block"
    //     />
    //     <img
    //       onClick={() => {
    //         router.push("/");
    //       }}
    //       src="/images/Nlogo.svg"
    //       alt="logo"
    //       className="cursor-pointer h-[10vw] md:hidden"
    //     />
    //   </div>
    //   <div>
    //     <div className="hidden md:flex flex-col items-end gap-3">
    //       <div
    //         onClick={() => {
    //           window.location.replace("https://line.me/R/ti/p/@321iyeoj");
    //         }}
    //         className="bg-[#06C755] cursor-pointer h-[3vw] w-[12vw] rounded-b-md mr-20 flex items-center justify-center"
    //       >
    //         <img
    //           src="/images/line.svg"
    //           alt=""
    //           className="h-[90%] object-contain"
    //         />
    //       </div>
    //       <div className="gap-[8vw] pr-20 hidden lg:flex">
    //         <Link
    //           onClick={() => {
    //             setActiveMenu("home");
    //           }}
    //           className={` text-[0.95vw] relative`}
    //           href={"/"}
    //         >
    //           ホーム
    //           <div
    //             className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
    //               activeMenu === "home" ? "block" : "hidden"
    //             }`}
    //           ></div>
    //         </Link>
    //         <Link
    //           onClick={() => {
    //             setActiveMenu("treatment");
    //           }}
    //           className={` text-[0.95vw] relative`}
    //           href={"/treatment"}
    //         >
    //           施術メニュー
    //           <div
    //             className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
    //               activeMenu === "treatment" ? "block" : "hidden"
    //             }`}
    //           ></div>
    //         </Link>
    //         <Link
    //           onClick={() => {
    //             setActiveMenu("schedule");
    //           }}
    //           className={`relative text-[0.95vw]`}
    //           href={"/schedule"}
    //         >
    //           出勤予定表
    //           <div
    //             className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
    //               activeMenu === "schedule" ? "block" : "hidden"
    //             }`}
    //           ></div>
    //         </Link>
    //         <Link
    //           onClick={() => {
    //             setActiveMenu("contact");
    //           }}
    //           className={`relative text-[0.95vw]`}
    //           href={"/contact"}
    //         >
    //           お問い合わせ
    //           <div
    //             className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
    //               activeMenu === "contact" ? "block" : "hidden"
    //             }`}
    //           ></div>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="lg:hidden">
    //       {sidebar ? (
    //         <RxCross1
    //           onClick={() => {
    //             setSidebar(!sidebar);
    //           }}
    //         />
    //       ) : (
    //         <div
    //           onClick={() => {
    //             setSidebar(!sidebar);
    //           }}
    //           className="flex flex-col gap-2"
    //         >
    //           <div className="w-[22px] h-[1px] bg-[#707070]"></div>
    //           <div className="w-[22px] h-[1px] bg-[#707070]"></div>
    //           <div className="w-[22px] h-[1px] bg-[#707070]"></div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
