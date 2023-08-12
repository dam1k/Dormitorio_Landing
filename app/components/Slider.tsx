"use client";

import React, { useState, useEffect } from "react";
import { models, model } from "@/app/data";
// import { motion, AnimatePresence } from "framer-motion";
function Slider() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  // const [fadeImg, setFadeImg] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage !== models.length - 1) {
        setCurrentImage((prev: number) => prev + 1);
      } else {
        setCurrentImage(0);
      }
      // setFadeImg(false);
    }, 2000);
    // const fadeInterval = setInterval(() => {
    //   setFadeImg(true);
    // }, 1500);

    return () => {
      clearInterval(interval);
      // clearInterval(fadeInterval);
    };
  }, [currentImage]);

  return (
    <div className="flex">
      {models.map((model: model, index: number) => {
        return (
          <div
            key={model.id}
            className={`${index === currentImage ? "block" : "hidden"} 
             w-full h-[600px] rounded-[20px] overflow-hidden transition-all`}
          >
            <img src={model.img} className="w-full h-full object-cover" />
            {model.name}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
