import AllinOne from "@/components/why-us/AllinOne";
import Comparison from "@/components/why-us/Comparison";
import PartA from "@/components/why-us/PartA";
import VideoSec from "@/components/why-us/VideoSec";
import { allInOne } from "@/data";

export const metadata = {
  title: "Why Choose Unigrow? Stress-Free Website Creation",
  description:
    "Discover why Unigrow is your best choice for high-performance, hassle-free website development. No hidden fees, SEO-optimized, and fully managed.",
  keywords:
    "website development, SEO-friendly websites, Unigrow advantages, stress-free web development, website pricing, professional web services",
  openGraph: {
    type: "website",
    url: "https://www.unigrow.ca/why-unigrow",
    title: "Why Choose Unigrow? Stress-Free Website Creation",
    description:
      "Discover why Unigrow is your best choice for high-performance, hassle-free website development. No hidden fees, SEO-optimized, and fully managed.",
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
    title: "Why Choose Unigrow? Stress-Free Website Creation",
    description:
      "Discover why Unigrow is your best choice for high-performance, hassle-free website development. No hidden fees, SEO-optimized, and fully managed.",
    images: ["https://www.unigrow.ca/logo.png"],
  },
};

export default function page() {
  return (
    <>
      <StructuredData />
      <main className=" flex flex-col gap-[13vh]">
        <VideoSec />
        <PartA />
        <Comparison />
        <AllinOne object={allInOne}>
          <div className=" w-[87vw] mx-auto my-[2vh]">
            <h2 className=" lg:text-5xl xl:text-6xl text-3xl tracking-tight lg:tracking-normal font-medium">
              Everything You Need, All in One Plan
            </h2>
            <p className=" text-sm lg:text-lg mt-2 text-slate-400">
              A fully managed process from design to launch—so you can focus on
              growing your business.
            </p>
          </div>
        </AllinOne>
      </main>
    </>
  );
}

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Why Choose Unigrow?",
    url: "https://www.unigrow.ca/why-unigrow",
    description:
      "Discover why Unigrow is your best choice for high-performance, hassle-free website development. No hidden fees, SEO-optimized, and fully managed.",
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
