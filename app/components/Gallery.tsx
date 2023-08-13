"use client";

import React, { useState, useEffect } from "react";
import { modelsArr, model } from "@/app/data";
import { motion, AnimatePresence } from "framer-motion";
function Gallery() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  // const [fadeImg, setFadeImg] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage !== modelsArr.length - 1) {
        setCurrentImage((prev: number) => prev + 1);
      } else {
        setCurrentImage(0);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="flex">
      {modelsArr.map((model: model, index: number) => {
        return (
          <div
            key={model.id}
            className={`${index === currentImage ? "block" : "hidden"} 
             w-full h-[600px] rounded-[20px] overflow-hidden transition-all relative`}
          >
            <img src={model.img} className="w-full h-full object-cover" />
            {/*<div className="absolute top-[25px] left-[25px] right-[25px]">*/}
            {/*  <h1 className="text-[55px] leading-[53px] text-white">*/}
            {/*    {model.name}*/}
            {/*  </h1>*/}
            {/*</div>*/}
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
