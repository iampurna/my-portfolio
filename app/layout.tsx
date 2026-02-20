import type { Metadata } from "next";
import { MotionProviders } from "@/components/motion/providers";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purna Lungeli | Full Stack Engineer",
  description:
    "Building robust, scalable systems with clean architecture and quiet confidence. Portfolio of Purna Lungeli — Full Stack Backend Engineer.",
  keywords: [
    "Purna Lungeli",
    ".NET",
    "Backend Engineer",
    "Full Stack Developer",
    "C#",
    "Portfolio",
    "Flutter Developer",
    "Enterprise Software Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Purna Lungeli" }],
  openGraph: {
    title: "Purna Lungeli | Full Stack Backend Engineer",
    description:
      "Building robust, scalable systems with clean architecture and quiet confidence.",
    url: "https://purnalungeli.info.np",
    siteName: "Purna Lungeli",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purna Lungeli | Full Stack Engineer",
    description:
      "Building robust, scalable systems with clean architecture and quiet confidence.",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <MotionProviders>
          <SmoothScroll />
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </MotionProviders>
      </body>
    </html>
  );
}