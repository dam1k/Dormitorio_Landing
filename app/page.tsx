import Slider from "@/app/components/Slider";

const brandName = "Dormitorio";
export default function Home() {
  return (
    <main className="container">
      <h1 className="text-[65px] w-[787px] mt-[75px] leading-[69px] indent-[70px] mb-[35px]">
        {brandName}:{" "}
        <span className="text-black/[0.5]">Explorează-ți Dormitorul Ideal</span>
      </h1>
      <Slider />
    </main>
  );
}
