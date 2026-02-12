import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layoutClient";
import { aleo } from "@/fonts/config";

export const metadata = {
  title: {
    default: "Trendswear",
    template: "%s - Trendswear",
  },
  description: "Designed by Axexa Technology Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aleo.variable} antialiased flex flex-col min-h-screen`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
