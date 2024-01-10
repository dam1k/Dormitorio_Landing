import Image from "next/image";

export default function CarouselItem({
  imgUrl,
  imgTitle,
  size1,
  size2,
  desc,
  price,
  country,
}: {
  imgUrl: any;
  imgTitle: String;
  size1: number[];
  size2?: number[];
  price: number;
  country: string;
  desc: string;
}) {
  return (
    <div className="min-[1025px]:hidden ">
      <Image
        src={imgUrl}
        width={1000}
        height={1000}
        style={{ width: "100%", objectFit: "cover" }}
        alt="mobila"
        className="rounded-[10px]"
      />
      <div className="flex items-center">
        <div className="flex justify-between w-full mt-[15px]">
          <h2 className="text-[25px] flex justify-start gap-[5px]">
            {imgTitle}
            {/*<span className="text-[12px] text-[#1e1e1e]/[0.35]">{country}</span>*/}
          </h2>
        </div>
        <div className="inline-flex shrink-0 flex-0 bg-black/[0.05]  gap-[5px] rounded-[7px] px-[6px] py-[3px] text-[14px] items-center mt-[10px]">
          <img className="w-[13px] h-[12px]" src="/Size.svg" alt="" />
          {size1.join(" x ")}
        </div>
        {size2 && (
          <div className="ml-[15px] bg-black/[0.05] shrink-0 flex gap-[5px] rounded-[7px] px-[6px] py-[3px] text-[14px] items-center mt-[10px]">
            <img className="w-[13px] h-[12px]" src="/Size.svg" alt="" />
            {size2.join(" x ")}
          </div>
        )}
      </div>
      <div className="mt-[15px]">{desc}</div>
    </div>
  );
}
