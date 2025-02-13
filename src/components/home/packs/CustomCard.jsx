import AnimatedLink from "@/components/AnimatedLink";
import GradientText from "@/components/ui/GradText";
import ShinyButton from "@/components/ui/ShinyButton";
import { Meteors } from "@/components/ui/meteors";
import { Particles } from "@/components/ui/particles";
import { customPackage } from "@/data";
import Link from "next/link";
import React from "react";

export default function CustomCard() {
  const { name, price, suitableFor, description, features } = customPackage;

  return (
    <div className="relative h-full overflow-hidden border-[2px] flex flex-col items-center justify-center rounded-2xl p-10 text-center">
      <Meteors />
      <div className=" w-full h-full backdrop-blur-sm rounded-2xl flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-sky-500 text-center mb-4">
          <GradientText colors={["#6366F1", "#0EA5E9", "#10B981"]}>
            {name} Plan
          </GradientText>
        </h2>
        <p className="text-white text-opacity-80 text-base md:text-lg lg:text-xl xl:text-xl mb-6 lg:px-[15%]">
          {description}
        </p>
        <ShinyButton className="font-bold hover:scale-105 transition-all ease-in-out">
          <AnimatedLink href="/book-free-consultation">
            Book a 15 min
          </AnimatedLink>
        </ShinyButton>
      </div>
    </div>
  );
}
