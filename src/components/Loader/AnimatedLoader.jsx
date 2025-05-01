"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedLoader = () => {
  const lineRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(lineRef.current, {
      delay: 1,
      duration: 1,
      height: 100 + "%",
      ease: "power2.inOut",
    });
    tl.to(lineRef.current, {
      width: 100 + "%",
      duration: 1,
      ease: "power2.inOut",
    });
    tl.to(containerRef.current, {
      duration: 1,
      opacity: 0,
    });
    tl.to(containerRef.current, {
      delay: 1,
      display: "none",
    });
  });

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen fixed z-50 bg-white flex items-center justify-center"
    >
      <img src="images/newLogo.svg" alt="logo" height={300} width={300} />
      <div ref={lineRef} className="w-[3px] bg-black absolute top-0"></div>
    </div>
  );
};

export default AnimatedLoader;
