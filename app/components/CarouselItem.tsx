export default function CarouselItem({
  imgUrl,
  imgTitle,
  size1,
  price,
  country,
}: {
  imgUrl: any;
  imgTitle: String;
  size1: number[];
  price: number;
  country: string;
}) {
  return (
    <div className="carousel-card flex flex-col items-start">
      <img src={imgUrl} alt="mobila" />
      <div className="flex justify-between w-full mt-[15px]">
        <h2 className="text-[25px] flex justify-start gap-[5px]">
          {imgTitle}
          <span className="text-[12px] text-[#1e1e1e]/[0.35]">{country}</span>
        </h2>
        <h2 className="text-[25px] flex justify-start gap-[5px]">
          {price}
          <span className="text-[12px]">MDL</span>
        </h2>
      </div>
      <div className="bg-black/[0.05] flex gap-[5px] rounded-[7px] px-[6px] py-[3px] text-[14px] items-center mt-[10px]">
        <img className="w-[13px] h-[12px]" src="/Size.svg" alt="" />
        {size1.join(" x ")}
      </div>
    </div>
  );
}
