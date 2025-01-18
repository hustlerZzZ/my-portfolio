import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { Navbar } from "@/components/essentitals/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prince Portfolio / Full Stack Developer",
  description:
    "Prince Pal-Experienced Full-Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. Crafting responsive UIs, robust backends, and optimized web solutions. Explore my portfolio to discover innovative projects in e-commerce, DevOps, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative antialiased grid grid-rows-[auto_1fr] h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="overscroll-y-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
