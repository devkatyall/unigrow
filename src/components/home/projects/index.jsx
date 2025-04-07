import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MagicCard } from "@/components/ui/magic-card";
import { projects } from "@/data";
import ShinyButton from "@/components/ui/ShinyButton";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="md:my-6 md:px-16 lg:py-16 px-8 py-3 my-6">
      <div className=" flex flex-col gap-2 mb-6 text-center">
        <h2 className="text-[30px] md:text-5xl font-normal tracking-tight leading-[30px] lg:leading-none">
          Our Work – Websites That Speak for Themselves
        </h2>
        <p>
          We’ve helped businesses across Canada build stunning, high-performing
          websites that drive growth and make an impact. Here’s a look at some
          of our recent projects
        </p>
      </div>
      <Carousel className="w-full md:px-6">
        <CarouselContent>
          {projects.map((e, index) => (
            <CarouselItem key={index} className=" lg:basis-1/3 ">
              <div className="p-1">
                <MagicCard className={" px-6 py-6 rounded-xl"}>
                  <div className=" flex flex-col gap-4 relative items-center justify-center">
                    <div className=" overflow-hidden rounded-xl relative cursor-pointer">
                      <Image
                        src={e.imgDesk}
                        width={800}
                        height={"full"}
                        alt=""
                        style={{ objectFit: "cover" }}
                        className=" z-10 hover:opacity-0 transition-opacity duration-100"
                      />
                      <Image
                        className="absolute top-0 -z-10"
                        src={e.imgMob}
                        width={800}
                        height={"full"}
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className=" flex flex-col gap-4">
                      <h4 className=" text-xl lg:text-2xl xl:text-3xl tracking-tight font-medium">
                        {e.title}
                      </h4>
                      <div>
                        <span className=" px-3 py-1 rounded-full bg-sky-600 font-medium tracking-wide absolute top-4 left-4 drop-shadow-xl">
                          {e.plan} Plan
                        </span>
                      </div>
                      <button className="flex gap-2 hover:font-bold">
                        Read More
                        <ArrowUpRight />
                      </button>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
