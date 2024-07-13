import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Apple Entertainment - Services",
  description:
    "Enjoy the best content and experiences on Apple TV+, Apple Music, Apple Arcade, Apple Fitness+, Apple News+, Apple Podcasts, and Apple Books.",
  // alternates: {
  //   icon: "https://example.com/icon.png",
  //   apple: "https://example.com/apple-icon.png",
  // },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
