"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { useState } from "react";
import Link from "next/link";

export default function LayoutWrapper({ children }) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <a
        href="https://line.me/R/ti/p/@321iyeoj"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 md:hidden right-8 z-50"
      >
        <img src="/assets/lineLogo.png" alt="lineLogo" />
      </a>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <MobileNav sidebar={sidebar} setSidebar={setSidebar} />
      {children}
      <Footer />
    </div>
  );
}
