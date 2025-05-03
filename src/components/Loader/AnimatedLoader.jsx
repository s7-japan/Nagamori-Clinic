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
      className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-white"
    >
      <img src="/assets/newLogo.svg" alt="logo" height={300} width={300} />
      <div ref={lineRef} className="absolute top-0 w-[3px] bg-black"></div>
    </div>
  );
};

export default AnimatedLoader;
