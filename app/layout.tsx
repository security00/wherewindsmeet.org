import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "./analytics";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { SiteHeader } from "../components/SiteHeader";
import { LanguageSwitchPrompt } from "../components/LanguageSwitchPrompt";
import { SiteFooter } from "../components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wherewindsmeet.org"),
  title: {
    default: "Where Winds Meet Guides Hub",
    template: "%s | WWM Hub",
  },
  description:
    "Where Winds Meet guides hub with tier lists, builds, codes, and news to help players master the open world wuxia RPG across platforms.",
  alternates: {
    canonical: "https://wherewindsmeet.org/",
    languages: {
      "en-US": "https://wherewindsmeet.org/",
      "vi-VN": "https://wherewindsmeet.org/vn",
    },
  },
  openGraph: {
    title: "Where Winds Meet Guides Hub",
    description:
      "Where Winds Meet guides hub with tier lists, builds, codes, and news to help players master the open world wuxia RPG across platforms.",
    url: "https://wherewindsmeet.org",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/background/bg.jpg",
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
    images: ["https://wherewindsmeet.org/background/bg.jpg"],
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      </head>
      <body
        className={`${inter.className} antialiased text-slate-50 bg-slate-950`}
      >
        <Analytics />
        <BackgroundWrapper />

        <div className="relative min-h-screen z-10">
          <SiteHeader />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <LanguageSwitchPrompt />
          </div>

          <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
            {children}
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
