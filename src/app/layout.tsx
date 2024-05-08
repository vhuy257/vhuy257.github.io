import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScrolling from "../components/SmoothScrolling/SmoothScrolling";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.scss";

// const audrey = localFont({
//   src: "./fonts/Audrey-Medium.otf",
//   variable: "--font-audrey",
// });

// const calibri = localFont({
//   src: "./fonts/CerebriSans-Book.ttf",
//   variable: "--font-calibri",
// });

export const metadata: Metadata = {
  title: "Huy Nguyen FE | Porfolio",
  description: "Personal official porfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans .className}`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
