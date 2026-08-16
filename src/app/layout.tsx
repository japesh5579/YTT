import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Light House — Yoga Teacher Training, Rishikesh",
  description:
    "Light House is a yoga teacher training and retreat centre on the banks of the Ganges in Rishikesh, founded by Krishnaji.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f4ee] text-[#22201c]">
        <Nav />
        <div className="flex min-w-0 flex-1 flex-col overflow-x-clip">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
