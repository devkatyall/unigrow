import YouTubePlayer from "@/components/YoutubeVideo";
import HeroVideoDialog from "@/components/hero-video-dialog";
import AllinOne from "@/components/why-us/AllinOne";
import Comparison from "@/components/why-us/Comparison";
import Hero from "@/components/why-us/Hero";
import PartA from "@/components/why-us/PartA";
import VideoSec from "@/components/why-us/VideoSec";
import { allInOne } from "@/data";

export default function page() {
  return (
    <main className=" flex flex-col gap-[13vh]">
      <VideoSec />
      <PartA />
      <Comparison />
      <AllinOne object={allInOne}>
        <div className=" w-[87vw] mx-auto my-[2vh]">
          <h2 className=" text-3xl md:text-5xl font-medium">
            Everything You Need, All in One Plan
          </h2>
          <p className=" text-sm lg:text-lg mt-2 text-slate-400">
            A fully managed process from design to launch—so you can focus on
            growing your business.
          </p>
        </div>
      </AllinOne>
    </main>
  );
}
