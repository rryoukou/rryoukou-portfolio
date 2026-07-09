import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryoukou | Fullstack Developer Portfolio",
  description: "Explore the portfolio of Ryoukou Arya Nugroho, a Fullstack Developer specializing in building high-performance web applications with Next.js, React, and Laravel.",
  keywords: ["Ryoukou Arya Nugroho", "Fullstack Developer", "Portfolio", "Next.js", "Laravel", "React", "Web Development"],
  authors: [{ name: "Ryoukou Arya Nugroho" }],
  openGraph: {
    title: "Ryoukou | Fullstack Developer Portfolio",
    description: "Building modern, scalable web applications with Next.js and Laravel.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
