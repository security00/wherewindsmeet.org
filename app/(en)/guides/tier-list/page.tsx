import type { Metadata } from "next";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
  description:
    "WWM tier list for 2026: Where Winds Meet PVE and PVP rankings, arena-rank links, weapon tiers, paths, dual-weapon combos, and internal arts.",
  alternates: buildHreflangAlternates("/guides/tier-list"),
  openGraph: {
    title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
    description:
      "WWM tier list for 2026: Where Winds Meet PVE and PVP rankings, arena-rank links, weapon tiers, paths, dual-weapon combos, and internal arts.",
    url: `${baseUrl}/guides/tier-list`,
  },
  twitter: {
    title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
    description:
      "WWM tier list for 2026: Where Winds Meet PVE and PVP rankings, arena-rank links, weapon tiers, paths, dual-weapon combos, and internal arts.",
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
      <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/60">
        Updated for WWM tier list and arena-rank searches. Want a PVP-only page? Open the{" "}
        <Link href="/guides/pvp-tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          PVP tier list and arena ranks
        </Link>{" "}
        or browse the{" "}
        <Link href="/guides/weapons/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          weapons tier list
        </Link>{" "}
        or open the{" "}
        <Link href="/guides/weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          weapon encyclopedia
        </Link>
        .
      </section>
      <TierListClient />
    </>
  );
}
