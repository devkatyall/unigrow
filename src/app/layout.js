import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import SmothScroll from "@/lib/SmothScroll";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head></head>
      <body className="dark mt-[18vh] ">
        <Header />
        <SmothScroll>{children}</SmothScroll>
        <Footer />
      </body>
    </html>
  );
}
