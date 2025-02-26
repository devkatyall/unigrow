import CalendlyEmbed from "@/components/CalendlyEmbed";
import { MarqueeDemo } from "@/components/HeroSection";
import ServicesSec from "@/components/ServicesSec";
import Pricing from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import Top from "@/components/home/Top";
import Packs from "@/components/home/packs";
import Projects from "@/components/home/projects";
import { Main, MainHeading, MainText } from "@/components/services/Main";
import { Sub, SubHeading, SubText } from "@/components/services/Sub";
import Image from "next/image";
import business from "@/../public/services/smallbusiness.png";

export const metadata = {
  title: "High-Performance Custom Websites – Unigrow",
  description:
    "Unigrow builds high-performance, SEO-optimized websites for businesses, startups, and brands. Fully managed, no hidden fees, stress-free website development.",
  icons: {
    icon: "/logo.png", // Standard favicon
    shortcut: "/logo.png",
    apple: "/logo.png", // Apple touch icon
  },
  keywords:
    "custom website design, SEO web development, business websites, affordable website development, Unigrow web services",
  authors: [{ name: "Unigrow" }],
  openGraph: {
    type: "website",
    url: "https://www.unigrow.ca",
    title: "High-Performance Custom Websites – Unigrow",
    description:
      "Get a modern, high-performing website without hassle. SEO-optimized, mobile-friendly, and fully managed. Start with a free consultation!",
    images: [
      {
        url: "https://www.unigrow.ca/logo.png",
        width: 1200,
        height: 630,
        alt: "Unigrow Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Performance Custom Websites – Unigrow",
    description:
      "Get a modern, high-performing website without hassle. SEO-optimized, mobile-friendly, and fully managed. Start with a free consultation!",
    images: ["https://www.unigrow.ca/logo.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Top />
        <Services />
        <Pricing />
        <MarqueeDemo />
        <Projects />
        <section className=" h-auto py-[4vh] lg:p-0 lg:h-[80vh] flex items-center justify-center border-2 bg-blue-400/30 mt-[8vh]">
          <Main
            className={
              " flex lg:flex-row justify-between items-center gap-[4vw]"
            }
          >
            <div className=" lg:w-1/2 text-start space-y-[2vh]">
              <SubHeading>
                Trusted by Small Businesses, Startups & Growing Brands
              </SubHeading>
              <SubText>
                Unigrow simplifies website development by offering fully
                managed, all-inclusive solutions for businesses looking to
                establish or grow their online presence.
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
      </main>
    </>
  );
}

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Unigrow",
    url: "https://www.unigrow.ca",
    description:
      "Unigrow offers fully managed web development solutions, including custom website design, SEO optimization, and hosting. Get a stress-free, high-performance website.",
    publisher: {
      "@type": "Organization",
      name: "Unigrow",
      logo: "https://www.unigrow.ca/logo.png",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
