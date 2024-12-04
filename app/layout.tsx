import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import SessionWrapper from "@/components/session_wrapper";

import { Toaster } from "@/components/ui/toaster";
import SiteHeader from "@/components/ui/general/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Renaday - Blockchain-Powered Job Platform',
  description: 'Connect skilled professionals with clients worldwide through blockchain technology. Features smart contracts, decentralized escrow, and innovative solutions for remote work.',
  keywords: 'blockchain jobs, smart contracts, decentralized work, freelance platform, web3 jobs',
  openGraph: {
    title: 'Renaday - Blockchain-Powered Job Platform',
    description: 'Connect skilled professionals with clients worldwide through blockchain technology.',
    type: 'website',
    url: 'https://renaday.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Renaday Platform Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renaday - Blockchain-Powered Job Platform',
    description: 'Connect skilled professionals with clients worldwide through blockchain technology.',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <SessionWrapper>

      <html lang="en" className="h-full">
        <title>RENADAY | WORK ON YOUR OWN TERM</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] `}
        >
          <SiteHeader />
          <main className="w-full h-full relative bg-transparent">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </SessionWrapper>
  );
}
