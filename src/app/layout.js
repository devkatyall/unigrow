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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5TG6KZHK');
          `}
        </Script>
      </head>
      <body className="dark mt-[15vh] ">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TG6KZHK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
