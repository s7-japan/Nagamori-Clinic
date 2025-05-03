"use client";
import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [animate, setAnimate] = useState(false);

  // Preload images
  useEffect(() => {
    const images = [
      "/assets/slider1.png",
      "/assets/slider2.png",
      "/assets/slider3.png",
      "/assets/slider4.png",
    ];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="main">
      <div className="moving md:mt-0">
        <div className="left"></div>
        <div className={`move ${animate ? "animate" : ""}`}>
          {Array(4)
            .fill(0)
            .flatMap(() =>
              [
                "/assets/slider1.png",
                "/assets/slider2.png",
                "/assets/slider3.png",
                "/assets/slider4.png",
              ].map((src, idx) => (
                <img
                  key={Math.random() + idx}
                  src={src}
                  alt="slider_image"
                  className="h-25 md:h-[9vw]"
                  loading="lazy"
                />
              ))
            )}
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default ImageSlider;
