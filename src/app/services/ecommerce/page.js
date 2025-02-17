import AnimatedLink from "@/components/AnimatedLink";
import {
  Main,
  MainFlag,
  MainHeading,
  MainText,
} from "@/components/services/Main";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { content } from "@/ecommerce";
import Image from "next/image";
import React from "react";
import women from "@/../public/services/women.png";
import { SubFlag, SubHeading, Sub, SubText } from "@/components/services/Sub";
import { Safari } from "@/components/magicui/safari";
import { ProcessSteps } from "@/components/Common/Process";
import { WarpBackground } from "@/components/magicui/warp-background";
import { MagicCard } from "@/components/ui/magic-card";
import Faq from "@/components/Common/Faq";

export const metadata = {
  title: "E-Commerce Website Development in Canada | Unigrow",
  description:
    "Sell more online with a high-converting e-commerce website. Fast, secure, mobile-optimized, and SEO-friendly e-commerce development for businesses in Canada.",
  keywords:
    "e-commerce website development, Shopify development, WooCommerce development, online store development, e-commerce SEO, Unigrow e-commerce",
  openGraph: {
    type: "website",
    url: "https://www.unigrow.ca/services/ecommerce-development",
    title: "E-Commerce Website Development in Canada | Unigrow",
    description:
      "Sell more online with a high-converting e-commerce website. Fast, secure, mobile-optimized, and SEO-friendly e-commerce development for businesses in Canada.",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Unigrow Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website Development in Canada | Unigrow",
    description:
      "Sell more online with a high-converting e-commerce website. Fast, secure, mobile-optimized, and SEO-friendly e-commerce development for businesses in Canada.",
    images: ["/logo.png"],
  },
};

export default function page() {
  return (
    <>
      <StructuredData />
      <main className=" flex flex-col gap-[10vh]">
        <section className="hidden relative overflow-hidden xl:h-screen 2xl:h-[90vh] border-b-2 lg:flex flex-col items-center justify-between py-[4vh] ">
          <Main
            className={
              " items-start bg-[#2ee4e3]/20 rounded-xl px-[4vw] py-[4vh]"
            }
          >
            <MainFlag className={"ring-0 p-0 "}>{content.title}</MainFlag>
            <MainHeading
              className={
                "lg:text-start font-semibold drop-shadow-xl text-[#E3E6E8]"
              }
            >
              {content.tagline}
            </MainHeading>
            <MainText className={"lg:w-[70%] text-start text-white/50"}>
              {content.introduction.description}
            </MainText>
            <AnimatedLink href={"/book-free-consultation"}>
              <PulsatingButton className="font-bold">
                {content.introduction.cta}
              </PulsatingButton>
            </AnimatedLink>
          </Main>
          <Main className={" items-start px-[4vw]"}>
            <SubHeading className={"font-light"}>Features</SubHeading>
            <div className="space-y-2">
              {content.introduction.key_features.map((feature, index) => (
                <div className=" flex items-center gap-2" key={index}>
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
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <p className=" text-lg 2xl:text-xl">{feature}</p>
                </div>
              ))}
            </div>
          </Main>
          <div className=" hidden lg:block lg:w-[60vw] lg:h-[90vh] lg:right-[-8vw] xl:w-[60vw] xl:h-[90vh] 2xl:right-0 2xl:w-[50vw] 2xl:h-[90vh] absolute top-[20vh] lg:top-[15vh] xl:top-[18vh] 2xl:top-[15vh] drop-shadow-xl right-0">
            <Image
              src={women}
              alt="ecommerce"
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </section>
        <section className="lg:hidden">
          <Main className={" gap-[3vh] "}>
            <SubFlag>{content.tagline}</SubFlag>
            <MainHeading>{content.title}</MainHeading>
            <MainText>{content.introduction.description}</MainText>
            <AnimatedLink href={"/book-free-consultation"}>
              <PulsatingButton className="font-bold">
                {content.introduction.cta}
              </PulsatingButton>
            </AnimatedLink>
            <Safari
              imageSrc={
                "https://cdn.dribbble.com/userupload/13660743/file/original-4f50bcad1140d841c2c380f1d5d2910e.jpg?resize=752x&vertical=center"
              }
              className=" size-full lg:hidden drop-shadow-[0px_0px_10px_#b8b8b859] mt-[2vh] hover:scale-105 transition-all ease-in-out duration-150"
            />
          </Main>
        </section>
        <section>
          <Sub>
            <SubFlag>{content.why_choose_us.title}</SubFlag>
            <SubHeading>{content.why_choose_us.subtitle}</SubHeading>
            <div className=" grid lg:grid-cols-3 gap-6 mt-[2vh] lg:mt-[5vh]">
              {content.why_choose_us.cards.map((item, index) => (
                <div className="flex lg:flex-col items-center lg:items-start lg:gap-0 gap-[5vw] p-3">
                  <div className=" p-3 bg-cyan-800 h-full flex items-center lg:items-start lg:w-fit lg:rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <SubText key={index} className={"text-cyan-600  text-xl"}>
                      {item.heading}
                    </SubText>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
              <AnimatedLink
                href="/book-free-consultation"
                className=" h-full flex items-center bg-cyan-800 p-3 hover:cursor-pointer rounded-md"
              >
                <div
                  className={
                    "text-white font-medium text-xl lg:text-2xl flex flex-col gap-4"
                  }
                >
                  <div className=" p-3 bg-black w-fit rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  {content.why_choose_us.cta}
                </div>
              </AnimatedLink>
            </div>
          </Sub>
        </section>
        <ProcessSteps process={content.process} />
        <section className=" relative overflow-hidden">
          <WarpBackground>
            <Sub className=" w-auto flex flex-col gap-y-[1vh] items-center justify-center py-[4vh] text-center">
              <SubFlag>{content.analytics.title}</SubFlag>
              <SubHeading className={"lg:w-[70%] drop-shadow-xl"}>
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
    </>
  );
}

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "E-Commerce Website Development in Canada",
    url: "https://www.unigrow.ca/services/ecommerce-development",
    description:
      "Sell more online with a high-converting e-commerce website. Fast, secure, mobile-optimized, and SEO-friendly e-commerce development for businesses in Canada.",
    publisher: {
      "@type": "Organization",
      name: "Unigrow",
      logo: "https://www.unigrow.ca/logo.png",
    },
    service: {
      "@type": "Service",
      name: "E-Commerce Development",
      provider: {
        "@type": "Organization",
        name: "Unigrow",
        url: "https://www.unigrow.ca",
      },
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
      serviceType: "E-Commerce Website Development",
      offers: {
        "@type": "Offer",
        price: "Custom Pricing",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: "https://www.unigrow.ca/book-free-consultation",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
