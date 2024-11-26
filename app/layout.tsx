import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Roboto({
weight: ["100", "300", "400", "500", "700", "900"],
subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Project | Next js",
  description: "Real Estate Website using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
