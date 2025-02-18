import Faq from "@/components/Common/Faq";
import { questions } from "@/data";
import React from "react";

export const metadata = {
  title: "Cookies Policy | Unigrow",
  description:
    "Learn how Unigrow uses cookies to improve your browsing experience. Read our cookie policy to understand how we handle data.",
  keywords:
    "cookies policy, GDPR compliance, privacy policy, Unigrow cookies, data tracking",
  robots: "index, follow", // Allows indexing but not high priority
  openGraph: {
    type: "website",
    url: "https://www.unigrow.ca/cookies",
    title: "Cookies Policy | Unigrow",
    description:
      "Learn how Unigrow uses cookies to improve your browsing experience. Read our cookie policy to understand how we handle data.",
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
    title: "Cookies Policy | Unigrow",
    description:
      "Learn how Unigrow uses cookies to improve your browsing experience.",
    images: ["https://www.unigrow.ca/logo.png"],
  },
};

export default function page() {
  return (
    <>
      {" "}
      <StructuredData />{" "}
      <Faq questions={questions.use_of_cookies}>Questions</Faq>
    </>
  );
}

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookies Policy",
    url: "https://www.unigrow.ca/cookies",
    description:
      "Learn how Unigrow uses cookies to improve your browsing experience. Read our cookie policy to understand how we handle data.",
    publisher: {
      "@type": "Organization",
      name: "Unigrow",
      url: "https://www.unigrow.ca",
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
