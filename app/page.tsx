import Gallery from "@/app/components/Gallery";
import Slider from "./components/AutoplayCarousel";

const brandName = "Dormitorio";
export default function Home() {
  return (
    <main className="container">
      <h1 className="max-[1024px]:text-[25px] text-[65px] max-[1024px]:w-full w-[787px] max-[1024px]:mt-[35px] mt-[75px] max-[1024px]:leading-[135%] leading-[69px] max-[1024px]:indent-0 indent-[70px] max-[1024px]:mb-[10px] mb-[35px]">
        {brandName}:{" "}
        <span className="text-black/[0.5]">Explorează-ți Dormitorul Ideal</span>
      </h1>
      <Gallery />
      <div className="mt-[175px] flex flex-col w-full items-end">
        <h1 className="text-[65px] mb-[100px] leading-[69px] indent-[70px] mb-[35px]">
          {brandName}:{" "}
          <span className="text-black/[0.5]">Colecția noastră</span>
        </h1>
        <Slider />
      </div>
    </main>
  );
}
