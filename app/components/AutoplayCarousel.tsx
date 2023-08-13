"use client";

import React from "react";
import { modelsObj } from "../data";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container" id="new-collection">
      <div className="carousel-track">
        {Object.keys(modelsObj).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              //@ts-ignore
              imgUrl={modelsObj[detailKey].imgUrl}
              //@ts-ignore
              imgTitle={modelsObj[detailKey].name}
              size1={modelsObj[detailKey].size1}
              price={modelsObj[detailKey].price}
              country={modelsObj[detailKey].country}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
