import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neil Jay Lacandazo | Full-Stack & Data Engineer",
  description:
    "T-shaped developer specializing in Full-Stack Development, Data Engineering, and Machine Learning. Building production-grade digital infrastructure.",
  generator: "v0.app",
  openGraph: {
    title: "Neil Jay Lacandazo | Full-Stack & Data Engineer",
    description:
      "Junior IS Student, Associate Data Engineer, and Full-Stack Developer",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "",
        type: "image/svg+xml",
      },
    ],
    apple: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
