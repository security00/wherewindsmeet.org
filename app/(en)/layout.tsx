import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import { Analytics } from "../analytics";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageSwitchPrompt } from "@/components/LanguageSwitchPrompt";
import { SiteFooter } from "@/components/SiteFooter";
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
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://static.wherewindsmeet.org" crossOrigin="anonymous" />
        <Script
          id="cdn-image-fallback"
          strategy="beforeInteractive"
        >{`
          (function () {
            function applyFallback(img) {
              if (!img) return;
              var fallbackSrc = img.getAttribute('data-fallback-src');
              if (!fallbackSrc) return;
              if (img.getAttribute('data-fallback-applied') === 'true') return;
              if (img.getAttribute('src') === fallbackSrc) return;
              img.setAttribute('data-fallback-applied', 'true');
              img.removeAttribute('srcset');
              img.setAttribute('src', fallbackSrc);
            }

            window.addEventListener(
              'error',
              function (event) {
                var target = event && event.target;
                if (!target || !target.tagName) return;
                if (target.tagName !== 'IMG') return;
                applyFallback(target);
              },
              true
            );
          })();
        `}</Script>
      </head>
      <body
        className="antialiased text-slate-50 bg-slate-950"
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
