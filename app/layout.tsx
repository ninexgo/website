import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/MotionProvider";

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
  title: {
    default: "Ninexgo — Crafting the future.",
    template: "%s | Ninexgo",
  },
  description: "Ninexgo builds developer tools, platforms, and internet products — with design discipline and long-term thinking at the center.",
  alternates: {
    canonical: "https://ninexgo.com",
  },
  icons: {
    icon: "/ninexgo-icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Ninexgo",
    title: "Ninexgo — Crafting the future.",
    description: "Ninexgo builds developer tools, platforms, and internet products — with design discipline and long-term thinking at the center.",
    url: "https://ninexgo.com",
    // og:image handled by app/opengraph-image.tsx (cascades to all routes)
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ninexgo.com/#organization",
      "name": "Ninexgo",
      "alternateName": "Ninexgo Studio",
      "url": "https://ninexgo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ninexgo.com/ninexgo-icon.svg",
      },
      "description": "Ninexgo is an independent software studio building developer tools, platforms, and internet products with design discipline and long-term thinking.",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Pushpendra Singh",
        "sameAs": "https://x.com/_iPushpendra",
      },
      "sameAs": [
        "https://github.com/ninexgo",
        "https://x.com/ninexgo",
        "https://www.linkedin.com/company/ninexgo/",
        "https://bsky.app/profile/ninexgo.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ninexgo.com/#website",
      "name": "Ninexgo",
      "url": "https://ninexgo.com",
      "publisher": { "@id": "https://ninexgo.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ninexgo.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
