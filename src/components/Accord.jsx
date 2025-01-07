import React from "react";
import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import Image from "next/image";
import stage1 from "@/.././public/stage1.webp";
import stage2 from "@/.././public/stage2.webp";
import stage3 from "@/.././public/stage3.webp";

export default function Accord() {
  return (
    <div className="lg:px-20 w-full relative lg:py-20 py-16 px-4">
      <div className="blobm -z-10"></div>
      <div className="lg:flex gap-8 items-center w-full">
        <h2 className="text-6xl font-medium lg:font-normal w-full">
          Our Three Stage Plan Makes It a Success
        </h2>
        <p className="text-sm lg:w-[80%] my-4 lg:my-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          veniam cum eius ab non sint nihil quidem ex veritatis sed autem eos
          iusto illo maxime, ad delectus soluta esse eveniet.
        </p>
      </div>
      <div className=" w-full h-[1px] bg-gray-700 rounded-full my-10"></div>

      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-12"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className="w-full relative">
            <AccordionTrigger className="w-full text-left flex justify-between items-center ">
              <h3 className="lg:text-5xl text-3xl font-extralight flex items-center gap-4 pb-4">
                <span className="text-base font-bold">01</span>Setting Processes
                Delegating Tasks
              </h3>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center">
                <p className=" text-lg lg:w-[70%] text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  delectus accusantium, ad assumenda impedit maiores quas nulla
                  velit laudantium, necessitatibus modi neque recusandae
                  laboriosam fuga doloribus sequi? Dolorum, delectus quis?
                </p>
                <Image
                  src={stage1}
                  alt=""
                  className=" hidden lg:block w-[300px] drop-shadow-lg rounded-lg rotate-2"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="w-full relative">
            <AccordionTrigger className="w-full text-left flex justify-between items-center ">
              <h3 className="lg:text-5xl text-3xl  font-extralight flex items-center gap-4 pb-4">
                <span className="text-base font-bold">02</span>Dive into Project
                Management
              </h3>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center">
                <p className=" text-lg lg:w-[70%] text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  delectus accusantium, ad assumenda impedit maiores quas nulla
                  velit laudantium, necessitatibus modi neque recusandae
                  laboriosam fuga doloribus sequi? Dolorum, delectus quis?
                </p>
                <Image
                  src={stage2}
                  alt=""
                  className="hidden lg:block w-[300px] drop-shadow-lg rounded-lg"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="w-full relative">
            <AccordionTrigger className="w-full text-left flex justify-between items-center ">
              <h3 className="lg:text-5xl text-3xl  font-extralight flex items-center gap-4 pb-4">
                <span className="text-base font-bold">03</span>Setting
                Processes, Delegating Tasks
              </h3>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center">
                <p className=" text-lg lg:w-[70%] text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  delectus accusantium, ad assumenda impedit maiores quas nulla
                  velit laudantium, necessitatibus modi neque recusandae
                  laboriosam fuga doloribus sequi? Dolorum, delectus quis?
                </p>
                <Image
                  src={stage3}
                  alt=""
                  className="hidden lg:block w-[300px] drop-shadow-lg rounded-lg"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
