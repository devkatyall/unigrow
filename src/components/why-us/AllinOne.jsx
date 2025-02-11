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
      <Carousel>
        <CarouselContent className="mr-[8vw]">
          {object.map((e, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/2 lg:basis-1/4 translate-x-[6vw]"
            >
              <div className="p-1">
                <div className="flex flex-col justify-end sgap-3 p-6 h-[50vh] w-[22vw] rounded-2xl border-2 border-slate-800">
                  <Image
                    src={e?.img}
                    width={100}
                    height={100}
                    className=" object-cover"
                  />
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
      </Carousel>
    </div>
  );
}
