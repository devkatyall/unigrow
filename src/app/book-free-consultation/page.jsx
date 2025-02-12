import CalendlyEmbed from "@/components/CalendlyEmbed";
import GradientText from "@/components/ui/GradText";
import { Particles } from "@/components/ui/particles";
import React from "react";

export default function page() {
  return (
    <main>
      <section className=" min-h-screen flex justify-center items-center">
        <div className="] md:px-16 lg:py-10 px-0 py-3 flex flex-col items-center">
          <div className=" px-8 md:px-0 flex flex-col items-center">
            <GradientText>
              <h1 className="text-3xl md:text-6xl text-center font-medium">
                Stop Overthinking. Start Growing.
              </h1>
            </GradientText>
            <p className=" text-center pt-3 lg:w-[70%]">
              Your business needs a website that works. Whether you’re starting
              fresh or upgrading an outdated site, we make the process simple,
              stress-free, and affordable.
            </p>
          </div>
          <div className=" relative w-full  flex items-center justify-center">
            <div className="blob bottom-0 top-10 lg:w-[calc(100vw-600px)] blur-[150px] lg:h-[calc(100vh-300px)] absolute" />
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
