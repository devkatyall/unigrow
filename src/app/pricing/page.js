import { Button } from "@/components/ui/button";
import { addOns, pricingPackages, questions } from "@/data";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import CustomCard from "@/components/home/packs/CustomCard";
import Faq from "@/components/Common/Faq";
import AnimatedLink from "@/components/AnimatedLink";

export const metadata = {
  title: "Affordable Website Pricing Plans | Unigrow",
  description:
    "Find the best website pricing plans at Unigrow. Transparent, affordable, and SEO-optimized web development solutions for businesses in Canada.",
  keywords:
    "website pricing, web development cost, affordable website plans, SEO web pricing, Unigrow pricing, e-commerce website cost",
  openGraph: {
    type: "website",
    url: "https://www.unigrow.ca/pricing",
    title: "Affordable Website Pricing Plans | Unigrow",
    description:
      "Find the best website pricing plans at Unigrow. Transparent, affordable, and SEO-optimized web development solutions for businesses in Canada.",
    images: [
      {
        url: "https://www.unigrow.ca/logo.png",
        width: 500,
        height: 500,
        alt: "Unigrow Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Website Pricing Plans | Unigrow",
    description:
      "Find the best website pricing plans at Unigrow. Transparent, affordable, and SEO-optimized web development solutions for businesses in Canada.",
    images: ["https://www.unigrow.ca/logo.png"],
  },
};

export default function page() {
  return (
    <>
      <StructuredData />
      <main>
        <div className="space-y-[10vh]">
          <div className="w-[87vw] mx-auto text-center relative flex flex-col items-center gap-2">
            <div className=" blob opacity-70 absolute blur-[120px] mx-auto -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] " />
            <span className=" px-4 py-1 my-4 rounded-full ring-2 w-fit text-cyan-600">
              Pricing
            </span>
            <h1 className="text-4xl lg:tracking-tight lg:text-7xl">
              {" "}
              No Hidden Fees!
              <br /> Just One Simple Price for Everything
            </h1>
            <p className=" text-sm lg:text-lg mt-2 text-slate-400">
              Choose the perfect plan for your business and get a fully managed
              website that’s built for success.
            </p>
          </div>
          <div className=" space-y-[3vh]">
            <div className=" grid md:grid-cols-3 gap-y-[4vh]  gap-x-[2vw] w-[87vw] mx-auto mt-[4vh]">
              {pricingPackages.map((e, i) => (
                <div
                  key={i}
                  className={cn(
                    " relative border-2 h-full border-neutral-900 rounded-xl py-6 px-4 flex flex-col gap-4 backdrop-blur-lg bg-neutral-900/40",
                    i === 1 &&
                      "border-0 lg:h-[calc(100%+30px)] lg:bottom-[30px]"
                  )}
                >
                  {i === 1 && <div className="ribbon">Top Choice</div>}
                  <span className="text-lg px-4 py-1 bg-blue-700 rounded-xl w-fit">
                    {e.name}
                  </span>
                  <p className="text-sm text-slate-400">{e.description}</p>
                  <h3 className="text-[36px] md:text-[56px] py-[22px] border-b-2 border-neutral-800/40">
                    ${e.price}
                  </h3>
                  <ul className="text-slate-400 flex flex-col gap-2 my-[2vh]">
                    {e.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-full min-w-6" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className=" mt-auto">
                    <Button
                      variant="outline"
                      className=" py-6 w-full scale-95 hover:scale-100 hover:shadow-sm transition-all duration-150"
                    >
                      <AnimatedLink href={"/book-free-consultation"}>
                        Get Started
                      </AnimatedLink>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[87vw] mx-auto">
              <CustomCard />
            </div>
            {/* <div className="w-[87vw] mx-auto">
          <h2 className="lg:text-5xl xl:text-6xl text-3xl tracking-tight lg:tracking-normal font-medium mb-2">
            Add Ons
          </h2>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-y-[4vh]  gap-x-[2vw]">
            {addOns.map((e, i) => (
              <div
                className="h-full flex flex-col gap-2 bg-blue-700/20 py-6 px-4 rounded-xl backdrop-blur-lg"
                key={i}
              >
                <h3 className="text-[20px] lg:text-[28px] font-semibold">
                  {e.name}
                </h3>
                <p className="text-sm lg:text-base text-slate-400">
                  {e.description}
                </p>
                <span className="text-base lg:text-lg text-slate-400">
                  CAD {e.price}
                </span>
              </div>
            ))}
          </div>
        </div> */}
          </div>

          <Faq questions={questions.pricing}>
            <h2 className="lg:text-5xl xl:text-6xl text-3xl tracking-tight lg:tracking-normal mb-2">
              FAQs - Your Questions Answered
            </h2>
          </Faq>
        </div>
      </main>
    </>
  );
}

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Pricing Plans",
    provider: {
      "@type": "Organization",
      name: "Unigrow",
      url: "https://www.unigrow.ca",
    },
    serviceType: "Web Development Pricing",
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        price: "399",
        priceCurrency: "CAD",
        url: "https://www.unigrow.ca/pricing",
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "699",
        priceCurrency: "CAD",
        url: "https://www.unigrow.ca/pricing",
      },
      {
        "@type": "Offer",
        name: "Growth Plan",
        price: "999",
        priceCurrency: "CAD",
        url: "https://www.unigrow.ca/pricing",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
