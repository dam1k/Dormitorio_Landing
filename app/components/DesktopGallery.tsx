"use client";

import React, { useState } from "react";
import { modelsObj } from "../data";
import CarouselItem from "./CarouselItem";
import ImageFull from "./ImageFull";
import { AnimatePresence, motion } from "framer-motion";

export default function DesktopGallery() {
  const [showImage, setShowImage] = useState({
    desc: "",
    imgUrl: "",
  });
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
            desc={modelsObj[0].desc}
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
            desc={modelsObj[1].desc}
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
            desc={modelsObj[2].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[3].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[3].name}
            size1={modelsObj[3].size1}
            price={modelsObj[3].price}
            country={modelsObj[3].country}
            desc={modelsObj[3].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            rowStart={4}
            imgUrl={modelsObj[4].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[4].name}
            size1={modelsObj[4].size1}
            price={modelsObj[4].price}
            country={modelsObj[4].country}
            desc={modelsObj[4].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={2}
            rowSpan={2}
            imgUrl={modelsObj[5].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[5].name}
            size1={modelsObj[5].size1}
            price={modelsObj[5].price}
            country={modelsObj[5].country}
            desc={modelsObj[5].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={2}
            rowSpan={2}
            imgUrl={modelsObj[6].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[6].name}
            size1={modelsObj[6].size1}
            price={modelsObj[6].price}
            country={modelsObj[6].country}
            desc={modelsObj[6].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[7].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[7].name}
            size1={modelsObj[7].size1}
            price={modelsObj[7].price}
            country={modelsObj[7].country}
            desc={modelsObj[7].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[8].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[8].name}
            size1={modelsObj[8].size1}
            size2={modelsObj[8].size2}
            price={modelsObj[8].price}
            country={modelsObj[8].country}
            desc={modelsObj[8].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[9].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[9].name}
            size1={modelsObj[9].size1}
            price={modelsObj[9].price}
            country={modelsObj[9].country}
            desc={modelsObj[9].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={2}
            rowSpan={2}
            imgUrl={modelsObj[10].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[10].name}
            size1={modelsObj[10].size1}
            price={modelsObj[10].price}
            desc={modelsObj[10].desc}
            country={modelsObj[10].country}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={1}
            rowSpan={1}
            imgUrl={modelsObj[11].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[11].name}
            size1={modelsObj[11].size1}
            size2={modelsObj[11].size2}
            price={modelsObj[11].price}
            country={modelsObj[11].country}
            desc={modelsObj[11].desc}
            setShowImage={setShowImage}
          />
          <CarouselItem
            //@ts-ignore
            colSpan={2}
            rowSpan={2}
            imgUrl={modelsObj[12].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[12].name}
            size1={modelsObj[12].size1}
            price={modelsObj[12].price}
            country={modelsObj[12].country}
            desc={modelsObj[12].desc}
            setShowImage={setShowImage}
          />
        </div>
      </motion.div>
      <AnimatePresence>
        {showImage.imgUrl && (
          <ImageFull setShowImage={setShowImage} showImage={showImage} />
        )}
      </AnimatePresence>
    </>
  );
}
