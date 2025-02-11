import React from "react";
import ParallaxImage from "../parallax";
import img from "@/../public/why-us/heroImage.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { features } from "@/data";
import { MagicCard } from "../ui/magic-card";

export default function PartA() {
  return (
    <section
      id="we-are-easy"
      className=" flex items-center justify-center overflow-hidden"
    >
      <div className=" flex flex-col w-full">
        <div className="flex flex-col gap-[4vh]">
          <div className="mx-auto w-[87vw]">
            <h2 className=" lg:text-5xl xl:text-6xl text-3xl tracking-tight lg:tracking-normal font-medium">
              Experience Effortless Website Creation.
            </h2>
            <p className=" text-sm lg:text-lg mt-2 text-slate-400">
              Our streamlined process makes building a website stress-free,
              affordable, and hassle-free.
            </p>
          </div>
          <Carousel className="">
            <CarouselContent className="mr-[7vw] ">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2 translate-x-[6vw]"
                >
                  <div className="p-1 h-full">
                    <MagicCard className={" h-full"}>
                      <div className=" flex flex-col gap-3 p-6 h-full">
                        <span className=" stroke-gray-400">{feature.icon}</span>
                        <div>
                          <h3 className="text-[20px] font-semibold lg:text-[28px]">
                            {feature.title}
                          </h3>
                          <p className="text-sm lg:text-base text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </MagicCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="w-full flex justify-end px-[9vh] py-[4vh]">
              <div className="flex gap-2">
                <CarouselPrevious className=" w-12 h-12 " />
                <CarouselNext className="  w-12 h-12 " />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
