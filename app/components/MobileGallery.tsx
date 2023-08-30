"use client";

import React from "react";
import { modelsObj } from "../data";
import MobileGalleryItem from "./MobileGalleryItem";
import { motion } from "framer-motion";

export default function MobileGallery() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true }}
      className="flex flex-col gap-[25px] mb-"
      id="new-collection"
    >
      {Object.keys(modelsObj).map((detailKey, index) => {
        return (
          <MobileGalleryItem
            key={index}
            //@ts-ignore
            imgUrl={modelsObj[detailKey].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[detailKey].name}
            size1={modelsObj[detailKey].size1}
            size2={modelsObj[detailKey].size2}
            price={modelsObj[detailKey].price}
            country={modelsObj[detailKey].country}
          ></MobileGalleryItem>
        );
      })}
    </motion.div>
  );
}
