import type { Metadata } from "next";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
  description:
    "Interactive Where Winds Meet tier list for PVE and PVP: weapon rankings, paths, dual-weapon combos, and internal arts for quick comparisons.",
  alternates: buildHreflangAlternates("/guides/tier-list"),
  openGraph: {
    title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
    description:
      "Interactive Where Winds Meet tier list for PVE and PVP: weapon rankings, paths, dual-weapon combos, and internal arts for quick comparisons.",
    url: `${baseUrl}/guides/tier-list`,
  },
  twitter: {
    title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
    description:
      "Interactive Where Winds Meet tier list for PVE and PVP: weapon rankings, paths, dual-weapon combos, and internal arts for quick comparisons.",
  },
};

export default function TierListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/tier-list`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${baseUrl}/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tier List",
          item: `${baseUrl}/guides/tier-list`,
        },
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
