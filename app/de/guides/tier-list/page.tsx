import type { Metadata } from "next";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Tierlist – Waffen, Pfade, Dual-Builds (DE)",
  description:
    "Interaktive Where Winds Meet Tierlist auf Deutsch: PVP/PVE-Rankings, Waffenpfade, Dual-Waffen-Kombos und Innere Künste auf Basis der aktuellen Updates.",
  alternates: buildHreflangAlternates("/guides/tier-list", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Tierlist – Waffen, Pfade, Dual-Builds",
    description:
      "Interaktive Tierlist für PVP/PVE, Waffenpfade, Dual-Kombos und Innere Künste – deutschsprachig.",
    url: `${baseUrl}/de/guides/tier-list`,
  },
  twitter: {
    title: "Where Winds Meet Tierlist – Waffen, Pfade, Dual-Builds (DE)",
    description:
      "Deutschsprachige Tierlist mit PVP/PVE-Rankings, Waffenpfaden und Dual-Build-Hinweisen.",
  },
};

export default function TierListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/guides/tier-list`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Tierlist", item: `${baseUrl}/de/guides/tier-list` },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TierListClient />
    </>
  );
}
