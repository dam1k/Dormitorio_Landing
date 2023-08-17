"use client";

import React, { useState, useEffect } from "react";
// import { modelsArr, model } from "@/app/data";
// import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
function Gallery() {
  // const [currentImage, setCurrentImage] = useState<number>(0);
  // const [hideGallery, setHideGallery] = useState<boolean>(false);
  // const [fadeImg, setFadeImg] = useState<boolean>(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentImage !== modelsArr.length - 1) {
  //       setCurrentImage((prev: number) => prev + 1);
  //     } else {
  //       setCurrentImage(0);
  //     }
  //     setHideGallery(false);
  //   }, 2000);
  //
  //   const animationInterval = setInterval(() => {
  //     setHideGallery(true);
  //   }, 1750);
  //
  //   return () => {
  //     clearInterval(interval);
  //     clearInterval(animationInterval);
  //   };
  // }, [currentImage]);

  return (
    <div className="relative w-[100vw] max-[1024px]:h-[50vh] h-[100vh]">
      <Header />
      <div className="absolute top-0 max-[1024px]:h-[50vh] left-0 z-[1] w-[100vw] h-[100vh] bg-[#1e1e1e]/[0.6]" />
      <img
        src="/Dormitor.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="container">
        <h1 className="heading max-[1024px]:text-[25px] max-[1024px]:pt-[93px] animate-[animateHeading_1s_ease-in-out_infinite] relative z-[10] text-[60px] max-[1024px]:w-full w-[900px] max-[1024px]:mt-[35px] mt-[75px] max-[1024px]:leading-[135%] text-white leading-[69px] max-[1024px]:indent-0 indent-[70px] max-[1024px]:mb-[10px] mb-[35px]">
          Dormitorio: <span>Explorează-ți Dormitorul Ideal</span>
        </h1>
      </div>
    </div>
    // <div className="flex">
    //   {modelsArr.map((model: model, index: number) => {
    //     return (
    //       <div
    //         key={model.id}
    //         className={`${index === currentImage ? "block" : "hidden"}
    //          w-full h-[600px] rounded-[20px] overflow-hidden  relative
    //          transition ease-in-out duration-500`}
    //       >
    //         <AnimatePresence>
    //           {!hideGallery && (
    //             <motion.img
    //               key="gallery-img"
    //               initial={{ opacity: 0 }}
    //               animate={{ opacity: 1 }}
    //               exit={{ opacity: 0 }}
    //               src={model.img}
    //               className="w-full h-full object-cover"
    //             />
    //           )}
    //         </AnimatePresence>
    //         {/*<div className="absolute top-[25px] left-[25px] right-[25px]">*/}
    //         {/*  <h1 className="text-[55px] leading-[53px] text-white">*/}
    //         {/*    {model.name}*/}
    //         {/*  </h1>*/}
    //         {/*</div>*/}
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default Gallery;
