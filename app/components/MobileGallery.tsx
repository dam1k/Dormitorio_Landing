"use client";

import React from "react";
import { modelsObj } from "../data";
import MobileGalleryItem from "./MobileGalleryItem";

export default function MobileGallery() {
  return (
    <div className="flex flex-col gap-[25px] mb-" id="new-collection">
      {Object.keys(modelsObj).map((detailKey, index) => {
        return (
          <MobileGalleryItem
            key={index}
            //@ts-ignore
            imgUrl={modelsObj[detailKey].imgUrl}
            //@ts-ignore
            imgTitle={modelsObj[detailKey].name}
            size1={modelsObj[detailKey].size1}
            price={modelsObj[detailKey].price}
            country={modelsObj[detailKey].country}
          ></MobileGalleryItem>
        );
      })}
    </div>
  );
}
