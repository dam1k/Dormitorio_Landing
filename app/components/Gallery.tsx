import Header from "../components/Header";
import Image from "next/image";
function Gallery() {
  return (
    <div
      id="top"
      className="relative w-[100vw] max-[1024px]:h-[50vh] h-[100vh]"
    >
      <Header />
      <div className="absolute top-0 max-[1024px]:h-[50vh] left-0 z-[1] w-[100vw] h-[100vh] gradient_bg" />
      {/*<div className="relative w-full h-full">*/}
      <Image
        alt=""
        fill
        src="/Hero.jpg"
        style={{ objectFit: "cover" }}
        priority={true}
        layout="cover"
        objectFit="cover"
        // className="absolute top-0 left-0"
      />
      {/*</div>*/}
      <div className="container">
        <h1 className="heading max-[1024px]:text-[25px] max-[1024px]:pt-[93px] relative z-[10] font-[500] text-[55px] max-[1024px]:w-full w-[900px] max-[1024px]:mt-[35px] mt-[125px] max-[1024px]:leading-[135%] text-white leading-[69px] max-[1024px]:indent-[35px] max- indent-[70px] max-[1024px]:mb-[10px] mb-[35px]">
          Dormitorio: <span>Explorează-ți Dormitorul Ideal</span>
        </h1>
      </div>
    </div>
  );
}

export default Gallery;
