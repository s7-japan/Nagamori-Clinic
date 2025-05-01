"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { useState } from "react";

export default function LayoutWrapper({ children }) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <MobileNav sidebar={sidebar} setSidebar={setSidebar} />
      {children}
      <Footer />
    </div>
  );
}
