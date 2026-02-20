import type { Metadata } from "next";
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
  metadataBase: new URL("https://ninexgo.com"),
  title: "Ninexgo — Crafting the future.",
  description: "Ninexgo builds developer tools, platforms, and internet products — with design discipline and long-term thinking at the center.",
  icons: {
    icon: "/ninexgo-icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Ninexgo",
    title: "Ninexgo — Crafting the future.",
    description: "Ninexgo builds developer tools, platforms, and internet products — with design discipline and long-term thinking at the center.",
    url: "https://ninexgo.com",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninexgo — Crafting the future.",
    description: "Ninexgo builds developer tools, platforms, and internet products — with design discipline and long-term thinking at the center.",
    site: "@ninexgo",
    creator: "@_iPushpendra",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
