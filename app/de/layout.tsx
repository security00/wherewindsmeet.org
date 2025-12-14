import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  metadataBase: new URL("https://wherewindsmeet.org"),
  title: {
    default: "Where Winds Meet - Deutscher Guide-Hub",
    template: "%s | WWM Hub (DE)",
  },
  description:
    "Deutscher Where Winds Meet Guide-Hub mit Tierlisten, Builds, Codes, News und Tipps für einen stressfreien Start.",
  openGraph: {
    title: "Where Winds Meet - Deutscher Guide-Hub",
    description:
      "Guides, Tierlisten, Codes, News und Roadmap-Updates für deutschsprachige Spieler.",
    url: "https://wherewindsmeet.org/de",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/background/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Where Winds Meet fan hub cover",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet - Deutscher Guide-Hub",
    description:
      "Guides, Tierlisten, Codes und News für Where Winds Meet auf Deutsch.",
    images: ["https://wherewindsmeet.org/background/bg.jpg"],
  },
  alternates: buildHreflangAlternates("/", { canonicalLanguage: "de" }),
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
