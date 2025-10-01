import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScrolling from "../components/SmoothScrolling/SmoothScrolling";
import { GeistSans } from 'geist/font/sans';

import "./globals.scss";

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
