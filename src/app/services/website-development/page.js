import {
  Main,
  MainFlag,
  MainHeading,
  MainText,
} from "@/components/services/Main";
import React from "react";
import AnimatedLink from "@/components/AnimatedLink";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { Sub, SubFlag, SubHeading, SubText } from "@/components/services/Sub";
import { content } from "@/webDev";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import image from "@/../public/services/webdev.png";
import { cn } from "@/lib/utils";
import Process, {
  AnimatedBeamDemo,
  ProcessSteps,
} from "@/components/Common/Process";
import { WarpBackground } from "@/components/magicui/warp-background";
import { MagicCard } from "@/components/ui/magic-card";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import Faq from "@/components/Common/Faq";

export const metadata = {
  title: "Custom Web Development Services in Canada | Unigrow",
  description:
    "Get high-performance, SEO-optimized web development services in Canada. Custom website design, e-commerce, and WordPress development for small businesses & startups.",
  keywords:
    "web development Canada, custom website design, SEO web development, website services Canada, e-commerce development",
  authors: [
    { name: "Unigrow Web Development Team", url: "https://unigrow.ca" },
  ],
  robots: "index, follow",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://unigrow.ca/services/website-development",
    title: "Custom Web Development Services in Canada | Unigrow",
    description:
      "High-performance, SEO-friendly web development for businesses & startups. Get a responsive, fast, and optimized website today!",
    images: [
      {
        url: "https://www.unigrow.ca/services/webdev.png",
        width: 1200,
        height: 630,
        alt: "Unigrow Web Development Services",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "Custom Web Development Services in Canada | Unigrow",
    description:
      "SEO-optimized, mobile-friendly web development for businesses. Get your website designed & developed by experts.",
    images: ["https://www.unigrow.ca/services/webdev.png"],
  },
};

export default function page() {
  return (
    <>
      <main className=" flex flex-col gap-[10vh]">
        <section className="">
          <Main className="lg:gap-[2vh] pt-[4vh]">
            <MainFlag>Web Development Services in Canada</MainFlag>
            <MainHeading className={"lg:w-[90%] 2xl:w-[80%]"}>
              High-Performance, SEO-Optimized Websites for Businesses & Startups
            </MainHeading>
            <MainText className="lg:w-[75%] 2xl:w-[60%]">
              Looking for custom web development services in Canada? A great
              website isn’t just about design—it needs to attract visitors,
              generate leads, and drive conversions.
            </MainText>
            <AnimatedLink href={"/book-free-consultation"}>
              <Button className=" w-fit text-lg py-[3vh] mt-5 font-bold">
                Book a Free Consultation
              </Button>
            </AnimatedLink>
          </Main>
          <div className=" rounded-2xl mx-auto bg-blend-screen bg-transparent h-[30vh] w-[90vw]  lg:h-[75vh] lg:w-[80vw] relative drop-shadow-[0px_0px_60px_#163F4B] hover:scale-105 transition-all duration-150 ease-in-out">
            <Image
              fill
              src={image}
              className="rounded-2xl"
              alt="responsive web development services in laptop and mobile"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </section>
        <section>
          <Sub className="flex flex-col gap-y-[1vh] items-center justify-center py-[1vh] text-center">
            <SubFlag>{content.why_choose_us.title}</SubFlag>
            <SubHeading className={"lg:w-[70%]"}>
              {content.why_choose_us.subtitle}
            </SubHeading>
            <SubText>Quick Fact: {content.why_choose_us.fact}</SubText>
            <div className=" flex gap-[3vh] lg:gap-[2vw] flex-wrap items-center justify-center mt-[4vh]">
              {content.why_choose_us.benefits.map((e, i) => (
                <div
                  key={i}
                  className=" drop-shadow-[0px_0px_10px_#3D3C3B] ring-1 ring-cyan-600/20 md:h-[23vh] flex flex-col items-center justify-center lg:h-[30vh] xl:h-[25vh] p-3 rounded-lg w-[calc(100%)] md:w-[calc(100%/3)] lg:w-[calc(100%/4)] bg-neutral-800"
                >
                  <BlurFade inView delay={0.25 * i}>
                    <span className=" text-4xl my-[1vh] block">{e.icon}</span>
                    <h4 className="text-xl md:text-2xl text-white">
                      {e.heading}
                    </h4>
                    <SubText>{e.description}</SubText>
                  </BlurFade>
                </div>
              ))}
            </div>
          </Sub>
        </section>
        <section className="">
          <Sub className={""}>
            <SubFlag>{content.services.title}</SubFlag>
            <SubHeading>{content.services.subtitle}</SubHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4 lg:gap-[3vh] py-[4vh] ">
              {content.services.cards.map((e, i) => (
                <div
                  key={i}
                  style={{
                    borderColor: e.color,
                  }}
                  className={cn(
                    `p-6 border-[1px] lg:col-span-1 flex flex-col gap-4 h-full rounded-xl hover:translate-y-0 transition-all duration-150 ease-in-out bg-white/5`,
                    i % 2 !== 0
                      ? "lg:translate-y-[5vh]"
                      : "lg:hover:translate-y-[5vh]"
                  )}
                >
                  <div
                    style={{ background: e.color }}
                    className="w-full overflow-hidden rounded-xl"
                  >
                    <div className="w-[100%] h-[20vh] lg:h-[40vh] overflow-hidden rounded-xl drop-shadow-2xl relative translate-x-[6vw] translate-y-[6vw] lg:translate-x-[2vw] lg:translate-y-[2vw]">
                      <Image
                        src={e.img}
                        alt={e.heading}
                        fill
                        className=" object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-3xl font-medium">
                    {e.heading}
                  </h3>
                  <SubText className={"mt-0"}>{e.description}</SubText>
                </div>
              ))}
            </div>
          </Sub>
        </section>
        <ProcessSteps process={content.process} />
        <section className=" relative overflow-hidden">
          <WarpBackground>
            <Sub className=" w-auto flex flex-col gap-y-[1vh] items-center justify-center py-[4vh] text-center">
              <SubFlag>{content.analytics.title}</SubFlag>
              <SubHeading className={"w-full lg:w-[70%] drop-shadow-xl"}>
                {content.analytics.subtitle}
              </SubHeading>
              <div className="grid lg:grid-cols-3 gap-[2vw] mt-[4vh]">
                {content.analytics.cards.map((e, i) => (
                  <MagicCard key={i} className={" col-span-1 drop-shadow-2xl"}>
                    <div className="flex flex-col gap-2 items-center p-2 lg:p-6">
                      <span className=" my-[1vh] block">{e.icon}</span>
                      <h4 className="text-xl md:text-2xl">{e.heading}</h4>
                      <SubText>{e.description}</SubText>
                    </div>
                  </MagicCard>
                ))}
              </div>
            </Sub>
          </WarpBackground>
        </section>
        <section>
          <Faq questions={content.faqs.items}>
            <SubHeading>{content.faqs.title}</SubHeading>
          </Faq>
        </section>
      </main>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Custom Web Development Services in Canada | Unigrow",
            url: "https://unigrow.ca/services/website-development",
            description:
              "SEO-optimized web development for businesses & startups in Canada. Get a mobile-friendly, high-performance website today!",
            image: "https://www.unigrow.ca/services/webdev.png",
            author: {
              "@type": "Organization",
              name: "Unigrow",
              url: "https://unigrow.ca",
            },
            publisher: {
              "@type": "Organization",
              name: "Unigrow",
              logo: {
                "@type": "ImageObject",
                url: "https://unigrow.ca/logo.png",
              },
            },
            mainEntity: {
              "@type": "Service",
              name: "Web Development Services",
              description:
                "Custom website development, SEO, and e-commerce solutions in Canada.",
              provider: {
                "@type": "Organization",
                name: "Unigrow",
                url: "https://unigrow.ca",
              },
              serviceType: "Web Development",
              areaServed: {
                "@type": "Country",
                name: "Canada",
              },
              offers: {
                "@type": "Offer",
                price: "Starting from $XX",
                priceCurrency: "CAD",
                availability: "https://schema.org/InStock",
                url: "https://unigrow.ca/services/web-development",
              },
            },
          }),
        }}
      />
    </>
  );
}
