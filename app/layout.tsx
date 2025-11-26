import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "./analytics";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { SiteHeader } from "../components/SiteHeader";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wherewindsmeet.org"),
  title: {
    default: "Where Winds Meet Guides, News & Codes Hub",
    template: "%s | Where Winds Meet Hub",
  },
  description:
    "Where Winds Meet guides hub with tier lists, builds, codes, and news to help players master the open world wuxia RPG across platforms.",
  openGraph: {
    title: "Where Winds Meet Guides, News & Codes Hub",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      </head>
      <body
        className={`${inter.variable} antialiased text-slate-50 bg-slate-950`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1548791648803369"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Analytics />
        <BackgroundWrapper />

        <div className="relative min-h-screen z-10">
          <SiteHeader />

          <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
            {children}
          </main>

          <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 text-xs text-slate-400">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
              <p>
                Unofficial Where Winds Meet fan hub. All trademarks are the
                property of their respective owners.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/guides"
                  className="transition-colors hover:text-emerald-400"
                >
                  Guides
                </Link>
                <Link
                  href="/guides/bosses"
                  className="transition-colors hover:text-emerald-400"
                >
                  Bosses
                </Link>
                <Link
                  href="/guides/weapons"
                  className="transition-colors hover:text-emerald-400"
                >
                  Weapons
                </Link>
                <Link
                  href="/news"
                  className="transition-colors hover:text-emerald-400"
                >
                  News
                </Link>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-emerald-400"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-emerald-400"
                >
                  Terms
                </Link>
                <a
                  href="mailto:support@wherewindsmeet.org"
                  className="transition-colors hover:text-emerald-400"
                >
                  Contact: support@wherewindsmeet.org
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
