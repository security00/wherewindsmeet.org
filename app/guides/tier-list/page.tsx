import type { Metadata } from "next";
import TierListClient from "./TierListClient";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Tier List – PVP & PVE Weapons, Paths, Dual Builds",
  description:
    "Interactive Where Winds Meet tier list covering PVP tier list, PVE rankings, weapon paths, dual weapon combinations, and internal arts from the latest updates.",
  alternates: {
    canonical: `${baseUrl}/guides/tier-list`,
  },
  openGraph: {
    title: "Where Winds Meet Tier List – PVP & PVE Weapons, Paths, Dual Builds",
    description:
      "Interactive Where Winds Meet tier list covering PVP tier list, PVE rankings, weapon paths, dual weapon combinations, and internal arts from the latest updates.",
    url: `${baseUrl}/guides/tier-list`,
  },
  twitter: {
    title: "Where Winds Meet Tier List – PVP & PVE Weapons, Paths, Dual Builds",
    description:
      "Interactive Where Winds Meet tier list covering PVP tier list, PVE rankings, weapon paths, dual weapon combinations, and internal arts from the latest updates.",
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
