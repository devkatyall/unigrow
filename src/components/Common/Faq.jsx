import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";

export default function Faq({ questions, children, classname }) {
  return (
    <div className="px-[6vw]">
      {children}
      <Accordion type="single" collapsible className="">
        {questions.map((question, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className=" text-xl lg:text-2xl font-normal text-gray-300 hover:no-underline">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className=" text-sm lg:text-base text-gray-400 font-light tracking-wide">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
