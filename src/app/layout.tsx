import type { Metadata } from "next";
import SmoothScrolling from "../components/SmoothScrolling/SmoothScrolling";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"], weight: "400" });

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
      <body className={`${lexend.className}`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
