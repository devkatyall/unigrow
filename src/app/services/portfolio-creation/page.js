import {
  Main,
  MainFlag,
  MainHeading,
  MainText,
} from "@/components/services/Main";
import Image from "next/image";
import React from "react";
import { Safari } from "@/components/magicui/safari";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Sub, SubHeading, SubText } from "@/components/services/Sub";
import students from "@/../public/services/students.jpg";
import ImageSec from "@/components/services/ImageSec";
import AnimatedLink from "@/components/AnimatedLink";
import { Button } from "@/components/ui/button";
import Faq from "@/components/Common/Faq";
import { questions } from "@/data";

export default function page() {
  return (
    <main className=" flex flex-col gap-[7vh]">
      <section>
        <Main className={"py-[4vh]"}>
          <MainFlag>Portfolio Creation</MainFlag>
          <MainHeading>
            Turn Your Best Work into a Client Attracting Portfolio
          </MainHeading>
          <MainText>
            Struggling to present your work online? Whether you’re a freelancer,
            creative professional, student, or business owner, a well-structured
            portfolio builds credibility and helps you win more clients or job
            opportunities.
          </MainText>
          <AnimatedLink href={"/book-free-consultation"}>
            <Button className=" w-fit text-lg py-[3vh] font-bold">
              Lets Get Started!
            </Button>
          </AnimatedLink>
          <Safari
            url={"unigrow.ca"}
            imageSrc="https://cdn.dribbble.com/users/2282987/screenshots/17220119/media/9e60f332e6e18a9554d7ff1679503865.jpg?resize=1000x750&vertical=center"
            className=" size-full lg:size-3/4 drop-shadow-[0px_0px_10px_#b8b8b859] mt-[4vh] hover:scale-105 transition-all ease-in-out duration-150"
          />
        </Main>
        <VelocityScroll
          numRows={2}
          defaultVelocity={1}
          className={" tracking-wide my-[2vh] text-neutral-700/60"}
        >
          For Professionals. Students. Business Owners.
        </VelocityScroll>
      </section>
      <section className=" py-[4vh] flex items-center">
        <Sub className={"px-[2vw]"}>
          <SubHeading as="h3">Why a Professional Portfolio Matters</SubHeading>
          <SubText>
            Your portfolio is your online reputation—make it count.
          </SubText>
          <ul className=" grid md:grid-cols-3 gap-[4vw] my-[6vh]">
            <li>
              <h4 className=" text-xl lg:text-2xl font-extralight">
                Builds Trust & Credibility
              </h4>
              <p className=" text-sm lg:text-base text-cyan-400/50">
                Clients and employers are more likely to work with you when they
                see proof of your skills.
              </p>
            </li>
            <li>
              <h4 className=" text-xl lg:text-2xl font-extralight">
                Boosts Conversions{" "}
              </h4>
              <p className=" text-sm lg:text-base text-cyan-400/50">
                A well-structured portfolio turns visitors into customers or
                recruiters into interviewers.
              </p>
            </li>
            <li>
              <h4 className=" text-xl lg:text-2xl font-extralight">
                Improves Online Visibility
              </h4>
              <p className=" text-sm lg:text-base text-cyan-400/50">
                SEO-optimized portfolios rank higher in search results, bringing
                you more opportunities.
              </p>
            </li>
          </ul>
        </Sub>
      </section>

      <ImageSec image={students} className={"opacity-35 blur-sm"}>
        <Sub
          className={
            "text-center h-full justify-center flex flex-col gap-[4vh] items-center z-10"
          }
        >
          <MainFlag className="drop-shadow-lg my-[2vh] bg-white text-black font-medium">
            Portfolio Creation for Students
          </MainFlag>
          <SubHeading
            as="h3"
            className="font-bold text-[4em] lg:text-[6em] leading-[.8em] xl:text-[8em] xl:tracking-tighter text-white drop-shadow-2xl"
          >
            Get Hired Faster with a Standout Portfolio
          </SubHeading>
          <SubText className="text-white w-[95%] md:w-[90%]">
            In today’s competitive job market, a professional portfolio is just
            as important as a resume. If you’re a student or recent graduate,
            showcasing your skills and projects online can cause you wonders,
            because you competiting against the candidates who has one.
          </SubText>
          <AnimatedLink href={"/book-free-consultation"}>
            <Button className=" w-fit text-lg py-[3vh] font-bold">
              Get Your Portfolio Today!
            </Button>
          </AnimatedLink>
        </Sub>
      </ImageSec>
      <section>
        <Faq questions={questions.portfolio_creation}>
          <SubHeading as="h3">Frequently Asked Questions</SubHeading>
        </Faq>
      </section>
    </main>
  );
}
