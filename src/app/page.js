import { MarqueeDemo } from "@/components/HeroSection";
import ServicesSec from "@/components/ServicesSec";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Top from "@/components/home/Top";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <Top />
      <Services />
      {/* <Projects /> */}
      <MarqueeDemo />
    </>
  );
}
