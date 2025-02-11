import ParallaxImage from "@/components/parallax";
import React from "react";
import HeroPic from "@/../public/why-us/team.jpg";
import GradientText from "@/components/ui/GradText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section style={{ zIndex: 0 }} className=" relative h-screen">
        <ParallaxImage image={HeroPic} className={"h-[200vh] lg:top-[-50%]"} />
        <div
          style={{ zIndex: 10 }}
          className="absolute rounded-t-xl -bottom-5 w-full h-[45vh] lg:h-[40vh] flex md:flex-row flex-col items-center bg-black backdrop-blur-md bg-opacity-70"
        >
          <h1 className=" text-white text-opacity-65 text-5xl leading-[35px] md:leading-none md:text-4xl lg:text-5xl xl:text-[4rem] w-full font-medium drop-shadow-xl">
            Because Getting a Website Should Be Easy.
          </h1>
          <div className=" flex flex-col mt-4 md:m-0 gap-6 md:w-[80%]">
            <p className=" text-base lg:text-lg ">
              You have a business to run—you shouldn’t have to chase multiple
              people for content, design, and development. Discover why Unigrow
              is your best bet for your digital goals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
