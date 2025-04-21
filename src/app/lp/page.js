"use client";
import { Button } from "@/components/ui/button";
import StepperButton, { StepperForm } from "@/global/stepper-form";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ProcessSteps } from "@/components/Common/Process";
import { content } from "@/webDev";
import Link from "next/link";

const AbstractBack = dynamic(() => import("@/components/Common/AbstractBack"), {
  ssr: false,
});

export default function page() {
  return (
    <main className=" space-y-[9vh]">
      <AbstractBack />
      <section className="hidden min-h-[calc(100vh-200px)] justify-between z-10 w-[90vw] lg:w-[87vw] mx-auto lg:flex flex-row items-center gap-[2vw]">
        <div className="space-y-[2vh] lg:w-1/2">
          <h1 className=" text-5xl lg:text-7xl xl:text-[85px] tracking-wide font-semibold">
            Get a business website that makes{" "}
            <span className="funky">money.</span>
          </h1>
          <p className="text-muted-foreground xl:text-lg print:text-sm">
            Your website isn’t just an online brochure—it’s your most powerful
            sales tool. At Unigrow, we build modern, high-performance websites
            engineered to turn every click into a customer. Our approach is
            laser-focused on increasing your revenue and maximizing your return
            on investment.
          </p>
          <div className="py-2 flex items-center gap-[2vw]">
            {/* <StepperButton className="text-lg py-5 bg-green-600">
              Get Started{" "}
            </StepperButton> */}
            <ScrollLink targetId={"how-it-works"}>
              <span className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                See how it works
              </span>
            </ScrollLink>
          </div>
        </div>
        <div className=" lg:w-1/2 flex items-center justify-center">
          <StepperForm />
        </div>
      </section>

      <section className=" min-h-[calc(100vh-200px)] justify-between z-10 w-[90vw] lg:w-[87vw] mx-auto lg:hidden flex flex-col items-center ">
        <div className="space-y-[3vh] lg:w-1/2 ">
          <h1 className=" text-5xl lg:text-7xl xl:text-[85px] tracking-wide font-semibold text-center">
            Get a business website that makes{" "}
            <span className="funky">money.</span>
          </h1>

          <p className="text-muted-foreground print:text-sm hidden  text-sm">
            Your website isn’t just an online brochure—it’s your most powerful
            sales tool. At Unigrow, we build modern, high-performance websites
            engineered to turn every click into a customer. Our approach is
            laser-focused on increasing your revenue and maximizing your return
            on investment.
          </p>
          <StepperForm />
          <div className="py-2 flex items-center justify-center gap-[2vw]">
            {/* <StepperButton className="text-lg py-5 bg-green-600">
              Get Started{" "}
            </StepperButton> */}
            <Link href={"#how-it-works"}>
              <span className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                See how it works
              </span>
            </Link>
          </div>
        </div>
        <div className=" lg:w-1/2 flex items-center justify-center"></div>
      </section>

      <section className="relative min-h-[200vh]">
        <div className="h-fit flex items-center justify-center sticky  rounded-lg mb-[10vh] top-[12vh] ">
          <div className="relative lg:h-[calc(100vh-200px)] lg:gap-[4vw]  w-[90vw] p-[5vw] lg:w-[87vw] mx-auto flex flex-col lg:flex-row items-center justify-center bg-[#8A5FB4] rounded-lg">
            <div className="lg:w-1/2 space-y-[2vh] lg:space-y-[3vh]">
              <h2 className=" text-3xl lg:text-6xl text-black">
                From Blank Mind to{" "}
                <span className="funky">Brilliant Ideas..</span>
              </h2>
              <p className="text-black print:text-sm text-sm lg:text-base">
                Start with a spark—even if you’re not sure where to begin. At
                Unigrow, we take your initial, undeveloped ideas and transform
                them into innovative, conversion-driven concepts that propel
                your business forward. Our collaborative process brings clarity
                and creativity to your vision, turning uncertainty into a
                stunning digital presence that drives measurable results.
              </p>
            </div>
            <div className=" w-[80%] lg:w-1/2 relative">
              <img
                src="https://i.ibb.co/b5LD8dd1/sec1.png"
                alt="image of a guy thinking about business idea for his website"
                className="lg:p-8"
              />
            </div>
          </div>
        </div>
        <div className="h-fit flex items-center justify-center sticky  rounded-lg mb-[10vh] top-[14vh] ">
          <div className=" gap-[4vw] relative lg:h-[calc(100vh-200px)]  w-[90vw] p-[5vw] lg:w-[87vw] mx-auto flex flex-col lg:flex-row-reverse items-center justify-center bg-[#CC975E] rounded-lg">
            <div className="lg:w-1/2 space-y-[2vh] lg:space-y-[3vh]">
              <h2 className=" text-3xl lg:text-6xl text-black">
                Crafting a <span className="funky">Design</span> That Sells
              </h2>
              <p className="text-black print:text-sm text-sm lg:text-base">
                Our design process is more than just aesthetics—it’s about
                building a site that converts. With custom visuals, intuitive
                navigation, and responsive layouts, we create a seamless digital
                experience that not only reflects your brand’s personality but
                also compels visitors to take action.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://i.ibb.co/HDZkQ0Vq/Frame-2.png"
                alt="different kinds of designs offered by Unigrow"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="h-fit flex items-center justify-center sticky  rounded-lg mb-[10vh] top-[16vh] ">
          <div className=" relative lg:h-[calc(100vh-200px)] gap-[4vw] w-[90vw] p-[5vw] lg:w-[87vw] mx-auto flex flex-col lg:flex-row items-center justify-center bg-[#6B8DB4] rounded-lg">
            <div className="lg:w-1/2 space-y-[2vh] lg:space-y-[3vh]">
              <h2 className=" text-3xl lg:text-6xl text-black">
                Engineered for <span className="funky">Revenue </span>Growth
              </h2>
              <p className="text-black print:text-sm text-sm lg:text-base">
                Every element of your website is strategically optimized for
                maximum ROI. From integrated e-commerce features to targeted SEO
                and performance analytics, we ensure your site attracts the
                right customers and drives sustainable revenue growth, turning
                every click into a potential sale.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://i.ibb.co/c7Bq7Xj/section3.png"
                alt="business owner happy about earnign revenue through website"
                className="rounded-xl transform-[scaleX(-1)] scale-x-[-1]"
              />
            </div>
          </div>
        </div>
        <div className="h-fit  flex items-center justify-center sticky  rounded-lg mb-[10vh] top-[18vh] ">
          <div className=" relative lg:h-[calc(100vh-200px)] lg:gap-[4vw] w-[90vw] p-[5vw] lg:w-[87vw] mx-auto flex flex-col lg:flex-row-reverse items-center justify-center bg-[#CECECE] rounded-lg">
            <div className="lg:w-1/2 space-y-[2vh] lg:space-y-[3vh]">
              <h2 className=" text-3xl lg:text-6xl text-black">
                Advanced <span className="funky">Analytics </span> & Ad{" "}
                <span className="funky">Tracking </span>
                Support
              </h2>
              <p className="text-black print:text-sm text-sm lg:text-base">
                Once your website is live, the real work begins—optimizing your
                ad campaigns based on real-time data. We ensure your site is
                fully equipped with advanced tracking tools like Google
                Analytics, Facebook Pixel, and more, so you never miss a beat.
                Our ongoing support means we’ll help you set up, monitor, and
                refine your ad tracking, providing clear insights to drive
                better performance and maximize ROI. This way, as you run ads
                and scale your business, your website remains a reliable hub for
                data-driven decision-making.
              </p>
            </div>
            <div className=" w-[80%] lg:w-1/2">
              <img
                src="https://i.ibb.co/GQvcggJr/section4.png"
                alt="business owner tracking everything"
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center"></div>
        <div className=" h-screen lg:h-[calc(100vh+100px)] sticky top-[0vh] bg-blue-800 rounded-t-3xl flex flex-col items-center justify-center">
          <h4 className=" text-3xl lg:text-5xl w-[80vw] mx-auto text-center w-fit">
            And that's not all—at Unigrow, every service you need is bundled in
            <span className="funky text-sky-500"> one place</span> {""}, so you
            can focus on growing your business while we handle the rest!
          </h4>
          <StepperButton className={"mt-10 text-lg p-5 bg-white text-black"}>
            Let's Get Started
          </StepperButton>
        </div>
      </section>

      <section id="how-it-works" className="">
        <ProcessSteps process={content.process} ad={true} />
      </section>
    </main>
  );
}
