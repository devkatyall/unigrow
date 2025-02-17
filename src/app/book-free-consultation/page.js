import CalendlyEmbed from "@/components/CalendlyEmbed";
import EnquiryForm from "@/components/Common/EnquiryForm";
import { Main, MainHeading, MainText } from "@/components/services/Main";
import { Sub, SubHeading, SubText } from "@/components/services/Sub";
import { pricingPackages, why_book } from "@/data";
import Image from "next/image";
import React from "react";
import business from "@/../public/services/smallbusiness.png";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function page() {
  return (
    <main className="">
      <section id="book-now" className=" mx-auto w-[87vw] pb-[10vh]">
        <Main
          className={
            "flex flex-col lg:flex-row gap-y-[4vh] lg:gap-[2vw] items-center text-start"
          }
        >
          <div className="lg:w-1/2 space-y-[3vh]">
            <SubHeading>
              Let’s Build a Website That Works for Your Business
            </SubHeading>
            <SubText>
              Need a high-performing website or e-commerce store? Whether you’re
              starting fresh, redesigning an existing site, or looking to
              optimize for SEO and conversions, our experts are here to help.
            </SubText>
            <div className="my-[4vh] space-y-[3vh]">
              {why_book.cards.map((item, index) => (
                <div
                  key={index}
                  className=" flex gap-[2vw] items-center lg:px-8"
                >
                  <span className=" stroke-cyan-400">{item.icon}</span>
                  <div>
                    <h3 className=" text-xl font-semibold text-cyan-500">
                      {item.heading}
                    </h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <EnquiryForm />
        </Main>
      </section>
      <section className="h-screen flex items-center justify-center border-2 bg-blue-400/30 mt-[8vh]">
        <Main
          className={" flex lg:flex-row justify-between items-center gap-[4vw]"}
        >
          <div className=" lg:w-1/2 text-start space-y-[2vh]">
            <SubHeading>
              Trusted by Small Businesses, Startups & Growing Brands
            </SubHeading>
            <SubText>
              Unigrow simplifies website development by offering fully managed,
              all-inclusive solutions for businesses looking to establish or
              grow their online presence.
            </SubText>
            <SubText>
              With SEO-optimized, high-performance websites that load fast and
              convert visitors into customers, we take care of
              everything—design, development, hosting, SEO, security, and
              maintenance—so you can focus on running your business.
            </SubText>
          </div>
          <div className=" lg:w-1/2 h-full relative">
            <Image
              src={business}
              alt="Small businesses and growing brands"
              width={1000}
              height={1000}
              className=" object-cover "
            />
          </div>
        </Main>
      </section>
      <section className="flex py-[10vh] lg:h-[80vh] items-center justify-center">
        <Main className={" flex justify-between items-center gap-[8vh]"}>
          <div className=" space-y-[2vh]">
            <SubHeading>Built for Performance & Growth</SubHeading>
            <SubText className={"lg:px-[10vw]"}>
              With optimized hosting, mobile responsiveness, and advanced
              security, Unigrow websites ensure a seamless user experience while
              helping businesses rank higher on Google.
            </SubText>
          </div>
          <div className="grid lg:grid-cols-4 gap-y-[3vh] lg:gap-[2vw] items-center w-[80vw] lg:w-full lg:mt-[4vh]">
            <div className=" flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke=""
                className="size-10 stroke-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>

              <h3 className="text-2xl font-medium">4x Faster</h3>
              <p className="text-sm">
                than industry average website load times, optimized for Google
                Core Web Vitals
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke=""
                className="size-10 stroke-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <h3 className="text-2xl font-medium">100% Mobile-Responsive</h3>
              <p className="text-sm">
                ensuring your site looks perfect on every device
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke=""
                className="size-10 stroke-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                />
              </svg>

              <h3 className="text-2xl font-medium">SEO-Optimized</h3>
              <p className="text-sm">
                to help businesses rank higher & attract organic traffic
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke=""
                className="size-10 stroke-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              </svg>

              <h3 className="text-2xl font-medium">99.9% Uptime Guarantee</h3>
              <p className="text-sm">with secure hosting & regular updates</p>
            </div>
          </div>
        </Main>
      </section>
      <section className="space-y-[10vh] py-[10vh] bg-blue-600/20">
        <div>
          <SubHeading className={"text-center"}>
            Basic Needs? Simple Plans!
          </SubHeading>
          <SubText className={"text-center"}>
            Unigrow delivers a complete website development experience, removing
            the complexity of multiple service providers.
          </SubText>
        </div>
        <div className=" grid md:grid-cols-3 gap-y-[4vh]  gap-x-[2vw] w-[87vw] mx-auto mt-[4vh]">
          {pricingPackages.map((e, i) => (
            <div
              key={i}
              className={cn(
                " relative border-2 h-full border-neutral-700 rounded-xl py-6 px-4 flex flex-col gap-4 backdrop-blur-lg bg-neutral-900/40",
                i === 1 && "border-2 lg:h-[calc(100%+30px)] lg:bottom-[30px]"
              )}
            >
              {i === 1 && <div className="ribbon">Top Choice</div>}
              <span className="text-lg px-4 py-1 bg-blue-700 rounded-xl w-fit">
                {e.name}
              </span>
              <p className="text-sm text-slate-400">{e.description}</p>
              <h3 className="text-[36px] md:text-[56px] py-[22px] border-b-2 border-neutral-800/40">
                ${e.price} +
              </h3>
              <ul className="text-slate-400 flex flex-col gap-2 my-[2vh]">
                {e.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-full min-w-6" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[10vh] border-y-2">
        <VelocityScroll
          numRows={2}
          defaultVelocity={1}
          className={"font-medium"}
        >
          Your Website. Your Growth. Our Expertise.
        </VelocityScroll>
      </section>
    </main>
  );
}
