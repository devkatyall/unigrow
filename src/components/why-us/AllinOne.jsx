import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

export default function AllinOne({ object, children }) {
  return (
    <div>
      {children}
      <Carousel className=" px-[6vw] lg:px-0">
        <CarouselContent className=" lg:mr-[8vw]">
          {object.map((e, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/2 lg:basis-1/4 lg:translate-x-[6vw]"
            >
              <div className="p-1">
                <div className=" hover:cursor-grab transition-all hover:drop-shadow-[0px_5px_20px_#b8b8b859] duration-500 ease-in-out relative overflow-hidden flex flex-col justify-end sgap-3 p-6 h-[40vh] lg:h-[50vh] min-w-[22vw] rounded-2xl">
                  {e.img && (
                    <Image
                      alt={e?.alt}
                      src={e?.img}
                      fill
                      className=" opacity-30 bg-black -z-10 object-cover"
                      priority
                    />
                  )}
                  <div>
                    <h3 className="text-[20px] leading-tight font-semibold lg:text-[28px]">
                      {e.title}
                    </h3>
                    <p className="text-sm mt-2 text-slate-400">{e.text}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex lg:justify-end lg:px-[2vw] py-[2vh]">
          <div className=" flex gap-4">
            <CarouselPrevious className="rounded-full size-12" />
            <CarouselNext className="rounded-full size-12" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
