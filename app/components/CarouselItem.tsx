import ImageFull from "../components/ImageFull";
import { useState } from "react";
export default function CarouselItem({
  imgUrl,
  imgTitle,
  size1,
  price,
  country,
  colSpan,
  rowSpan,
  rowStart,
  setShowImage,
}: {
  imgUrl: any;
  imgTitle: String;
  size1: number[];
  price: number;
  country: string;
  colSpan: number;
  rowSpan: number;
  rowStart?: number;
  setShowImage: any;
}) {
  return (
    <>
      <div
        className={`relative flex flex-col items-start ${
          colSpan === 1 ? "col-span-1" : "col-span-2"
        } ${rowSpan === 1 ? "row-span-1" : "row-span-2"}
      ${rowStart && rowStart === 4 ? "row-start-4" : ""}`}
      >
        <div className="overflow-hidden rounded-[15px] rounded-[15px] w-full">
          <img
            src={imgUrl}
            className="cursor-pointer w-full min-h-full hover:scale-110 transition-all"
            alt="mobila"
            onClick={() => setShowImage(imgUrl)}
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-between w-full mt-[15px]">
            <h2 className="text-[25px] flex justify-start gap-[5px]">
              {imgTitle}
              <span className="text-[12px] text-[#1e1e1e]/[0.35]">
                {country}
              </span>
            </h2>
            {/*<h2 className="text-[25px] flex justify-start gap-[5px]">*/}
            {/*  {price.toFixed(3)}*/}
            {/*  <span className="text-[12px]">MDL</span>*/}
            {/*</h2>*/}
          </div>
          <div className="bg-black/[0.05] shrink-0 flex gap-[5px] rounded-[7px] px-[6px] py-[3px] text-[14px] items-center mt-[10px]">
            <img className="w-[13px] h-[12px]" src="/Size.svg" alt="" />
            {size1.join(" x ")}
          </div>
        </div>
      </div>
    </>
  );
}
