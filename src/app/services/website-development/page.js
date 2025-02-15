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
        url: "https://unigrow.ca/images/web-development-banner.jpg",
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
    images: ["https://unigrow.ca/images/web-development-banner.jpg"],
  },
};

export default function page() {
  return (
    <>
      <main className=" space-y-[10vh]">
        <section>
          <Main className="lg:gap-[2vh] pt-[4vh]">
            <MainFlag>Web Development Services in Canada</MainFlag>
            <MainHeading className={"lg:w-[90%]"}>
              High-Performance, SEO-Optimized Websites for Businesses & Startups
            </MainHeading>
            <MainText className="lg:w-[75%]">
              Looking for custom web development services in Canada? A great
              website isn’t just about design—it needs to attract visitors,
              generate leads, and drive conversions. At Unigrow, we provide
              fully managed, all-inclusive web development solutions designed
              for small businesses, startups, and growing brands.
            </MainText>
            <AnimatedLink href={"/book-free-consultation"}>
              <Button className=" w-fit text-lg py-[3vh] font-bold">
                Book a Free Consultation
              </Button>
            </AnimatedLink>
          </Main>
          <div className=" mx-auto bg-blend-screen bg-transparent h-[30vh] w-[90vw]  lg:h-[70vh] lg:w-[70vw] relative drop-shadow-[0px_0px_30px_#163F4B] hover:scale-105 transition-all duration-150 ease-in-out">
            <Image
              fill
              src={image}
              alt="responsive web development services in laptop and mobile"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </section>
        <section>
          <Sub className="flex flex-col gap-y-[1vh] items-center justify-center py-[4vh] text-center">
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
          <Sub>
            <SubHeading>{content.services.title}</SubHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4 lg:gap-[2vh] py-[2vh]">
              {content.services.items.map((e, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-6 ring-1 ring-white/30 flex flex-col gap-1 h-full rounded-lg",
                    i % 2 === 0 && "lg:row-span-2",
                    i === 5 && ""
                  )}
                >
                  <h3 className="text-xl md:text-2xl my-[1vh]">{e.title}</h3>
                  <SubText className={"mt-0"}>{e.description}</SubText>
                  <div>
                    {e.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="text-sm md:text-base  " key={j}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 drop-shadow-[0px_0px_10px_#3D3C3B] fill-white/50"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>
                        </span>
                        <p className="text-white/50">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Sub>
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
            image: "https://unigrow.ca/images/web-development-banner.jpg",
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
