import type { Metadata } from "next";
import "../globals.css";
import { LocaleRootLayout } from "@/components/LocaleRootLayout";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  metadataBase: new URL("https://wherewindsmeet.org"),
  title: "Where Winds Meet Guides Hub",
  description:
    "Where Winds Meet guides hub with tier lists, builds, codes, and news to help players master the open world wuxia RPG across platforms.",
  alternates: buildHreflangAlternates("/"),
  openGraph: {
    title: "Where Winds Meet Guides Hub",
    description:
      "Where Winds Meet guides hub with tier lists, builds, codes, and news to help players master the open world wuxia RPG across platforms.",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://static.wherewindsmeet.org/background/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Where Winds Meet fan hub cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Guides, News & Codes Hub",
    description:
      "Where Winds Meet guides hub with tier lists, builds, codes, and news to help players master the open world wuxia RPG across platforms.",
    images: ["https://static.wherewindsmeet.org/background/bg.jpg"],
  },
  other: {
    "google-adsense-account": "ca-pub-1548791648803369",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleRootLayout locale="en">{children}</LocaleRootLayout>;
}
