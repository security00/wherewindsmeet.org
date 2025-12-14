import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { weapons } from "@/lib/weapons.de";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Waffen-Guide | Where Winds Meet (DE)",
  description:
    "Alle Where Winds Meet Waffen auf einen Blick: Rollen, Tier, Showcase-Art und Links zur Tierliste und zu Builds.",
  alternates: buildHreflangAlternates("/guides/weapons", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Waffen-Guide | Where Winds Meet",
    description:
      "Galerie aller Waffen mit Rollenbeschreibung und Sprung zur Tierliste und zu Builds.",
    url: `${baseUrl}/de/guides/weapons`,
  },
  twitter: {
    title: "Waffen-Guide | Where Winds Meet (DE)",
    description:
      "Rollen, Tier, Showcase-Bilder und schnelle Links zu Tierliste/Builds für jede Waffe.",
  },
};

export default function WeaponsPage() {
  const roleLabelMap: Record<string, string> = {
    Assassin: "Assassine",
    Balanced: "Ausgewogen",
    Bleed: "Blutung",
    Tank: "Tank",
    Support: "Support",
    "Parry/Konter": "Parade/Konter",
    "Mobile Control / Picks": "Mobile Kontrolle / Picks",
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/guides/weapons`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Waffen", item: `${baseUrl}/de/guides/weapons` },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg3.webp"
            alt="Where Winds Meet Waffen Hintergrund"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Waffen – Spielgefühl & Rolle
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Galerie aller aktuellen Waffen mit kurzer Einordnung, wie sie sich spielen – Reichweite, Rhythmus, typische Matchups.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Für ein reines Ranking schau in die{" "}
            <Link href="/de/guides/weapons/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Waffen-Tierliste
            </Link>{" "}
            und komm dann hierher zurück für Kontext und Rollen.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Kombiniere die Infos mit der{" "}
            <Link href="/de/guides/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Gesamt-Tierliste
            </Link>{" "}
            und den{" "}
            <Link href="/de/guides/builds" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              empfohlenen Builds
            </Link>
            , um eine Waffe zu wählen, die zu deinem Spieltempo passt – nicht nur zur Meta.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Waffengalerie & Kurzrollen
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {weapons.map((weapon) => (
            <article
              key={weapon.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full bg-slate-900/80">
                <Image
                  src={weapon.officialArt}
                  alt={weapon.name}
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">{weapon.name}</h3>
                  <div className="flex gap-2">
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        weapon.tier === "S"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : weapon.tier === "A"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {weapon.tier} Tier
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                      {roleLabelMap[weapon.role] ?? weapon.role}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300">{weapon.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/de/guides/weapons/${weapon.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    Details ansehen
                  </Link>
                  <Link
                    href="/de/guides/tier-list"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Tierliste-Kontext
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
