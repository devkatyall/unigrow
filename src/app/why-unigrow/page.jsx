import CallToAction from "@/components/Common/CallToAction";
import YouTubePlayer from "@/components/YoutubeVideo";
import HeroVideoDialog from "@/components/hero-video-dialog";
import { Button } from "@/components/ui/button";
import AllinOne from "@/components/why-us/AllinOne";
import Comparison from "@/components/why-us/Comparison";
import Hero from "@/components/why-us/Hero";
import PartA from "@/components/why-us/PartA";
import VideoSec from "@/components/why-us/VideoSec";
import { allInOne } from "@/data";
import Link from "next/link";

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
      <CallToAction>
        <div
          className=" flex flex-col
        gap-2  py-[5vh]"
        >
          <h2 className=" text-3xl md:text-5xl font-medium drop-shadow-lg">
            {" "}
            Ready to Build a Website Without the Headaches?
          </h2>
          <p className=" text-sm lg:text-lg text-slate-400">
            Unigrow takes care of everything so you can focus on growing your
            business. All-inclusive pricing. No hidden fees. Stress-free, fully
            managed process
          </p>
          <div className="mt-4">
            <Button>
              <Link href="/book-free-consultation">Book a Free Call</Link>
            </Button>
          </div>
        </div>
      </CallToAction>
    </main>
  );
}
