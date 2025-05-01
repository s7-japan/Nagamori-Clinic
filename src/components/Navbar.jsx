import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, Router } from "react-router-dom";
import logo from "../assets/newLogo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import line from "../assets/line.svg";
import Nlogo from "../assets/Nlogo.svg";

export default function Navbar({ sidebar, setSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveMenu("home");
    } else if (path === "/treatment") {
      setActiveMenu("treatment");
    } else if (path === "/schedule") {
      setActiveMenu("schedule");
    } else if (path === "/contact") {
      setActiveMenu("contact");
    }
  }, [location.pathname]);

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
  }, [location.pathname]);

  return (
    <div
      className={`flex justify-between items-center py-5 md:py-0 md:pb-5 lg:items-end px-5 fixed top-0 left-0 w-full z-20 ${
        isScrolled ? "bg-white" : "lg:bg-white bg-white"
      }`}
    >
      <div>
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="logo"
          className="cursor-pointer h-[4.1vw] hidden md:block"
        />
        <img
          onClick={() => {
            navigate("/");
          }}
          src={Nlogo}
          alt="logo"
          className="cursor-pointer h-[10vw] md:hidden"
        />
      </div>
      <div>
        <div className="hidden md:flex flex-col items-end gap-3">
          <div
            onClick={() => {
              window.location.replace("https://line.me/R/ti/p/@321iyeoj");
            }}
            className="bg-[#06C755] cursor-pointer h-[3vw] w-[12vw] rounded-b-md mr-20 flex items-center justify-center"
          >
            <img src={line} alt="" className="h-[90%] object-contain" />
          </div>
          <div className="gap-[8vw] pr-20 hidden lg:flex">
            <Link
              onClick={() => {
                setActiveMenu("home");
              }}
              className={` text-[0.95vw] relative`}
              to={"/"}
            >
              ホーム
              <div
                className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
                  activeMenu === "home" ? "block" : "hidden"
                }`}
              ></div>
            </Link>
            <Link
              onClick={() => {
                setActiveMenu("treatment");
              }}
              className={` text-[0.95vw] relative`}
              to={"/treatment"}
            >
              施術メニュー
              <div
                className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
                  activeMenu === "treatment" ? "block" : "hidden"
                }`}
              ></div>
            </Link>
            <Link
              onClick={() => {
                setActiveMenu("schedule");
              }}
              className={`relative text-[0.95vw]`}
              to={"/schedule"}
            >
              出勤予定表
              <div
                className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
                  activeMenu === "schedule" ? "block" : "hidden"
                }`}
              ></div>
            </Link>
            <Link
              onClick={() => {
                setActiveMenu("contact");
              }}
              className={`relative text-[0.95vw]`}
              to={"/contact"}
            >
              お問い合わせ
              <div
                className={`absolute -bottom-[.5vw] h-[1px] w-full bg-black ${
                  activeMenu === "contact" ? "block" : "hidden"
                }`}
              ></div>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          {sidebar ? (
            <RxCross1
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
              <div className="w-[22px] h-[1px] bg-[#707070]"></div>
              <div className="w-[22px] h-[1px] bg-[#707070]"></div>
              <div className="w-[22px] h-[1px] bg-[#707070]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
