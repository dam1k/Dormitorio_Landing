"use client";

import React, { useState } from "react";
import { modelsObj } from "../data";
import CarouselItem from "./CarouselItem";
import ImageFull from "./ImageFull";
import { AnimatePresence, motion } from "framer-motion";

export default function DesktopGallery() {
  const [showImage, setShowImage] = useState("");
  return (
    <>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-20px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        viewport={{ once: true }}
        className="max-[1024px]:hidden !mt-[175px] max-[1024px]:!mt-[65px]"
        id="new-collection"
      >
        <div className="carousel-grid">
          <CarouselItem
            //@ts-ignore
            colSpan={2}
            rowSpan={2}
            imgUrl={modelsObj[0].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[0].name}
            size1={modelsObj[0].size1}
            price={modelsObj[0].price}
            country={modelsObj[0].country}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[1].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[1].name}
            size1={modelsObj[1].size1}
            price={modelsObj[1].price}
            country={modelsObj[1].country}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[2].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[2].name}
            size1={modelsObj[2].size1}
            price={modelsObj[2].price}
            country={modelsObj[2].country}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[0].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[0].name}
            size1={modelsObj[0].size1}
            price={modelsObj[0].price}
            country={modelsObj[0].country}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            rowStart={4}
            imgUrl={modelsObj[1].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[1].name}
            size1={modelsObj[1].size1}
            price={modelsObj[1].price}
            country={modelsObj[1].country}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={2}
            rowSpan={2}
            imgUrl={modelsObj[2].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[2].name}
            size1={modelsObj[2].size1}
            price={modelsObj[2].price}
            country={modelsObj[2].country}
            setShowImage={setShowImage}
          />
        </div>
      </motion.div>
      <AnimatePresence>
        {showImage && (
          <ImageFull setShowImage={setShowImage} imgUrl={showImage} />
        )}
      </AnimatePresence>
    </>
  );
}
