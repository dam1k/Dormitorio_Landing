"use client";

import React, { useState } from "react";
import { modelsObj } from "../data";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div
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
        />
      </div>
      {/*<div className="absolute cursor-pointer active:opacity-80 transition-all top-[45%] translate-y-[-50%] left-[10px] bg-[#fff] w-[50px] h-[50px] p-[10px] rounded-[50%]">*/}
      {/*  <img src="/Arrow.svg" className="rotate-180 select-none" />*/}
      {/*</div>*/}
      {/*<div className="absolute cursor-pointer top-[45%] transition-all  active:opacity-80 z-[10] translate-y-[-50%] right-[22px] bg-[#fff] w-[50px] h-[50px] p-[10px] rounded-[50%]">*/}
      {/*  <img src="/Arrow.svg" className="select-none" />*/}
      {/*</div>*/}
    </div>
  );
}
