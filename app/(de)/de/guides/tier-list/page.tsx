import type { Metadata } from "next";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

const arenaRankNotes = [
  {
    title: "Arena-Rank-Climber",
    detail:
      "Starte mit Mobilitaet, Burst-Fenstern und verlaesslicher Kontrolle. Wenn du nur eine Seite pruefst, vergleiche diese Hauptliste mit der PVP-Seite, bevor du Reset-Material ausgibst.",
    href: "/de/guides/pvp-tier-list",
    label: "PVP arena ranks",
  },
  {
    title: "Upcoming-nerf Checks",
    detail:
      "Wenn Spieler nach kommenden Nerfs suchen, fuehre Tier-Aenderungen zuerst auf offizielle Path-Balance- und Maintenance-Notes zurueck.",
    href: "/de/guides/patch-notes#upcoming-nerfs",
    label: "Balance watch",
  },
  {
    title: "Nur Waffen vergleichen",
    detail:
      "Nutze die Waffen-Tierliste, wenn du Waffenfamilien ohne Pfade, innere Kuenste und kompletten Build-Kontext vergleichen willst.",
    href: "/de/guides/weapons/tier-list",
    label: "Weapon tier list",
  },
];

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
      <HomeHubBacklink language="de" />
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
      <section id="arena-ranks" className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-slate-200 shadow-sm shadow-emerald-950/40">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Search intent: wwm arena ranks</p>
            <h2 className="mt-1 text-xl font-bold text-slate-50">Arena ranks, Tierlisten-Aenderungen und Nerf-Watch.</h2>
          </div>
          <Link
            href="/de/guides/patch-notes#upcoming-nerfs"
            className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100 hover:border-emerald-300/80"
          >
            Neueste Balance-Notes
          </Link>
        </div>
        <p className="mt-3 leading-6 text-slate-300">
          Spieler suchen gerade nach WWM arena ranks, PVP ranking und upcoming nerfs. Behandle diese Seite als breite Meta-Sicht,
          pruefe danach PVP-Tierliste, Waffen-Tierliste und Patch Notes, um zu sehen, ob ein Ranking noch zu Version 1.7 Path Balance passt.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {arenaRankNotes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-emerald-300/60"
            >
              <p className="text-sm font-semibold text-slate-50">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{item.detail}</p>
              <p className="mt-3 text-xs font-semibold text-emerald-300">{item.label}</p>
            </Link>
          ))}
        </div>
      </section>
      <TierListClient />
    </>
  );
}
