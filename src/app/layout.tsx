import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import "./globals.css";

import { ToastContainer } from "react-toastify";

import Nav from "@/component/Nav";
import Footer from "@/component/Footer";
import WorkProvider from "@/contex/workContex";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Track your fitness journey with FitLog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${oswald.variable}`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <WorkProvider>
          <Nav />
          {children}
          <Footer />
          <ToastContainer />
        </WorkProvider>
      </body>
    </html>
  );
}
