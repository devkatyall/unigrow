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
    <>
      <VideoSec />
      {/* <Hero /> */}
      <PartA />
      <Comparison />
      <AllinOne object={allInOne} />
    </>
  );
}
