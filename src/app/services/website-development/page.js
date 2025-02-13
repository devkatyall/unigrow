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
      <main>
        <section>
          <Main>
            <MainFlag>Custom Web Development Services in Canada</MainFlag>
            <MainHeading>
              High-Performance, SEO-Optimized Websites for Businesses & Startups
            </MainHeading>
            <MainText className="lg:w-[80%]">
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
