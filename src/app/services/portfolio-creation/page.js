import {
  Main,
  MainFlag,
  MainHeading,
  MainText,
} from "@/components/services/Main";
import Image from "next/image";
import React from "react";
import mainPic from "@/../public/services/portfolio.webp";
import ParallaxImage from "@/components/parallax";
import { Safari } from "@/components/magicui/safari";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Sub, SubHeading, SubText } from "@/components/services/Sub";

export default function page() {
  return (
    <div className=" flex flex-col gap-[7vh]">
      <section>
        <Main className={"py-[4vh]"}>
          <MainFlag>Portfolio Creation</MainFlag>
          <MainHeading>
            Turn Your Best Work into a Client-Attracting Portfolio
          </MainHeading>
          <MainText>
            Struggling to present your work online? Whether you’re a freelancer,
            creative professional, student, or business owner, a well-structured
            portfolio builds credibility and helps you win more clients or job
            opportunities.
          </MainText>
          <Safari
            url={"unigrow.ca"}
            imageSrc="https://cdn.dribbble.com/users/2282987/screenshots/17220119/media/9e60f332e6e18a9554d7ff1679503865.jpg?resize=1000x750&vertical=center"
            className=" size-full lg:size-3/4 drop-shadow-[0px_0px_10px_#b8b8b859] mt-[4vh] hover:scale-105 transition-all ease-in-out duration-150"
          />
        </Main>
        <VelocityScroll
          numRows={2}
          defaultVelocity={0.5}
          className={
            " tracking-wide my-[4vh] text-neutral-900 border-dashed border-y-[2px] border-white py-2 bg-cyan-400/70"
          }
        >
          For Professionals. Students. Business Owners.
        </VelocityScroll>
      </section>
      <section className="min-h-screen">
        <Sub>
          <SubHeading>Why a Professional Portfolio Matters</SubHeading>
          <SubText>
            Your portfolio is your online reputation—make it count.
          </SubText>
          <ul>
            <li>
              📌 Builds Trust & Credibility – Clients and employers are more
              likely to work with you when they see proof of your skills.
            </li>
            <li>
              📌Boosts Conversions – A well-structured portfolio turns visitors
              into customers or recruiters into interviewers.
            </li>
            <li>
              📌 Improves Online Visibility – SEO-optimized portfolios rank
              higher in search results, bringing you more opportunities.
            </li>
          </ul>
        </Sub>
      </section>
    </div>
  );
}
