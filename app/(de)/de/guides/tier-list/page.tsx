import type { Metadata } from "next";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Tierliste – Waffen, Pfade, Dual-Builds (DE)",
  description:
    "Interaktive Where Winds Meet Tierliste (Tierlist) auf Deutsch: PvP/PvE-Rankings, Waffenpfade, Dual-Waffen-Kombos und Innere Künste auf Basis der aktuellen Updates.",
  alternates: buildHreflangAlternates("/guides/tier-list", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Tierliste – Waffen, Pfade, Dual-Builds",
    description:
      "Interaktive Tierliste (Tierlist) für PvP/PvE, Waffenpfade, Dual-Kombos und Innere Künste – deutschsprachig.",
    url: `${baseUrl}/de/guides/tier-list`,
  },
  twitter: {
    title: "Where Winds Meet Tierliste – Waffen, Pfade, Dual-Builds (DE)",
    description:
      "Deutschsprachige Tierliste (Tierlist) mit PvP/PvE-Rankings, Waffenpfaden und Dual-Build-Hinweisen.",
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
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Tierliste", item: `${baseUrl}/de/guides/tier-list` },
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
        Du willst nur Waffen vergleichen? Öffne die{" "}
        <Link href="/de/guides/weapons/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          Waffen-Tierliste
        </Link>{" "}
        oder die{" "}
        <Link href="/de/guides/weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          Waffen-Übersicht
        </Link>
        .
      </section>
      <TierListClient />
    </>
  );
}
