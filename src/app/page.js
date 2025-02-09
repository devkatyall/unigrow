import CalendlyEmbed from "@/components/CalendlyEmbed";
import { MarqueeDemo } from "@/components/HeroSection";
import ServicesSec from "@/components/ServicesSec";
import Pricing from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import Top from "@/components/home/Top";
import Packs from "@/components/home/packs";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <main>
      <Top />
      <Services />
      <Pricing />
      <MarqueeDemo />
      <Projects />
    </main>
  );
}
