import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Card, CardContent } from "./ui/card";

export default function MeetTeam() {
  return (
    <Carousel
      className="lg:px-20 lg:py-10 flex flex-col w-full"
      opts={{ align: "start" }}
    >
      <div className="pb-8 flex justify-between items-center">
        <div className=" flex gap-4">
          <CarouselPrevious
            variant="outline"
            className="rounded-full size-12 "
          />
          <CarouselNext variant="outline" className="rounded-full size-12" />
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className=" text-6xl font-medium">Meet Our Team</h2>
          <span className="text-gray-400 text-right">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <div className="blobm -z-20"></div>
        </div>
      </div>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
