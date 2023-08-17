import Gallery from "@/app/components/Gallery";
import Slider from "./components/AutoplayCarousel";
import MobileGallery from "@/app/components/MobileGallery";
import Contact from "@/app/components/Contact";
import About from "./components/About";

const brandName = "Dormitorio";
export default function Home() {
  return (
    <main className="">
      {/*<Header />*/}
      {/*<h1 className="max-[1024px]:text-[25px] text-[65px] max-[1024px]:w-full w-[900px] max-[1024px]:mt-[35px] mt-[75px] max-[1024px]:leading-[135%] leading-[69px] max-[1024px]:indent-0 indent-[70px] max-[1024px]:mb-[10px] mb-[35px]">*/}
      {/*  {brandName}:{" "}*/}
      {/*  <span className="text-black/[0.5]">Explorează-ți Dormitorul Ideal</span>*/}
      {/*</h1>*/}
      <Gallery />
      <div className="!mt-[175px] max-[1024px]:!mt-[65px] flex flex-col w-full container">
        <div className="flex justify-between min-[1025px]:justify-end min-[1025px]:gap-[50px] items-start">
          <span className="text-black/[0.5] text-[12px]">(Collection)</span>
          <h1 className="text-[65px] relative z-[10] mb-[100px] max-[1024px]:leading-[135%] max-[1024px]:mb-[50px] min-[1025px]:leading-[69px] max-[1024px]:text-[20px] ">
            {brandName}:{" "}
            <span className="text-black/[0.5]">Colecția noastră</span>
          </h1>
        </div>
        <MobileGallery />
        <Slider />
      </div>
      <Contact />
      <About />
    </main>
  );
}
