import type { Metadata } from "next";
import SmoothScrolling from "../components/SmoothScrolling/SmoothScrolling";
import { ThemeProvider } from "../contexts/ThemeContext";
import { TooltipProvider } from "../components/animate-ui/primitives/animate/tooltip";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"], weight: "400" });

import "./globals.css";

export const metadata: Metadata = {
  title: "Huy Nguyễn — Frontend Developer",
  description: "Personal official porfolio website",
  openGraph: {
    title: "Huy Nguyễn — Frontend Developer",
    description: "Personal official porfolio website",
    url: "https://vhuy257.github.io",
    siteName: "Huy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huy Nguyễn — Frontend Developer",
    description: "Personal official porfolio website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Huy Nguyễn — Frontend Developer</title>
        <meta name="description" content="Personal official porfolio website" />
      </head>
      <body className={`${lexend.className}`}>
        <ThemeProvider>
          <TooltipProvider>
            <SmoothScrolling>{children}</SmoothScrolling>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
