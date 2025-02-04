import { MarqueeDemo } from "@/components/HeroSection";
import ServicesSec from "@/components/ServicesSec";
import Pricing from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import Top from "@/components/home/Top";
import WhyUs from "@/components/home/WhyUs";
import Packs from "@/components/home/packs";

export default function Home() {
  return (
    <>
      <Top />
      <Services />
      <Pricing />
      <Packs />
      <MarqueeDemo />
    </>
  );
}
