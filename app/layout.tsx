import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "./analytics";
import BackgroundWrapper from "../components/BackgroundWrapper";

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
          <header className="border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/40" />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold tracking-wide text-slate-50">
                    Where Winds Meet
                  </span>
                  <span className="text-xs text-slate-400">
                    Guides · Tier List · Codes
                  </span>
                </div>
              </Link>
              <nav className="hidden gap-6 text-sm font-medium text-slate-200 sm:flex">
                <Link
                  href="/"
                  className="transition-colors hover:text-emerald-400"
                >
                  Home
                </Link>
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
                  href="/guides/martial-arts-weapons"
                  className="transition-colors hover:text-emerald-400"
                >
                  Martial Arts
                </Link>
                <Link
                  href="/guides/tier-list"
                  className="transition-colors hover:text-emerald-400"
                >
                  Tier List
                </Link>
                <Link
                  href="/guides/builds"
                  className="transition-colors hover:text-emerald-400"
                >
                  Builds
                </Link>
                <Link
                  href="/guides/codes"
                  className="transition-colors hover:text-emerald-400"
                >
                  Codes
                </Link>
                <Link
                  href="/guides/items"
                  className="transition-colors hover:text-emerald-400"
                >
                  Items
                </Link>
                <Link
                  href="/news"
                  className="transition-colors hover:text-emerald-400"
                >
                  News
                </Link>
              </nav>
            </div>
          </header>

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
