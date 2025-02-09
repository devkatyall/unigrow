import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { AppProvider, useAppContext } from "@/Context";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AppProvider>
        <body className="dark">
          <Header />
          {children}
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
