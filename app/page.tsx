"use client";

import Gallery from "@/app/components/Gallery";
import Slider from "./components/AutoplayCarousel";
import MobileGallery from "@/app/components/MobileGallery";
import Contact from "@/app/components/Contact";
import About from "./components/About";
import { motion } from "framer-motion";

const brandName = "Dormitorio";
export default function Home() {
  return (
    <main>
      <Gallery />
      <div className="!mt-[175px] max-[1024px]:!mt-[65px] flex flex-col w-full container">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
          className="flex justify-between min-[1025px]:justify-end min-[1025px]:gap-[50px] items-start"
        >
          <span className="text-black/[0.5] text-[12px]">(Collection)</span>
          <h1 className="text-[65px] relative z-[10] max-[1024px]:leading-[135%] max-[1024px]:mb-[50px] min-[1025px]:leading-[69px] max-[1024px]:text-[20px] ">
            {brandName}:{" "}
            <span className="text-black/[0.5]">Colecția noastră</span>
          </h1>
        </motion.div>
        <MobileGallery />
        <Slider />
      </div>
      <Contact />
      <About />
    </main>
  );
}
