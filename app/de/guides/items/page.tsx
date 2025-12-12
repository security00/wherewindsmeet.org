import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ItemTabs from "@/app/guides/items/ItemTabs";
import { itemCategories } from "@/app/guides/items/data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Item-Index | Where Winds Meet (DE)",
  description:
    "Reiterbasierter Item-Index: Materialien, Verbrauchsgüter und Kuriositäten mit Nutzen und Fundorten, angelehnt an das Wiki-Layout.",
  alternates: buildHreflangAlternates("/guides/items", { canonicalLanguage: "de" }),
};

export default function ItemsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Where Winds Meet Items Hintergrund"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Items & Kategorien</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Item-Index mit Schnell-Tabs.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Angelehnt an das Wiki-Layout: Items nach Kategorien klickbar sortiert. Jede Kategorie zeigt Beispiele, Nutzung und Beschaffung.
            Kombiniere dies mit der{" "}
            <Link href="/de/guides/martial-arts-weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Waffen/Kampfkunst-Tabelle
            </Link>{" "}
            und dem{" "}
            <Link href="/de/guides/skill-theft" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Skill-Theft-Guide
            </Link>{" "}
            für schnelle Farm-Routen.
          </p>
        </div>
      </section>

      <ItemTabs categories={itemCategories} />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Nutzungstipps</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Materialien/Entwicklungs-Mats priorisieren – sie gate-en Waffen- und Inner-Skill-Breakthroughs.</li>
            <li>2–3 Gruppengerichte vorbereiten; vor Teamplay essen für mehr Fehlertoleranz.</li>
            <li>Alltags-Items als Geschenke/Favor nutzen, um Begegnungen und Rabatte freizuschalten.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Verwandte Guides</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link href="/de/guides/new-players" className="underline underline-offset-4 hover:text-emerald-100">
                Einsteiger-Route: sinnvolle Ressourcen-Reihenfolge
              </Link>
            </li>
            <li>
              <Link href="/de/guides/weapons" className="underline underline-offset-4 hover:text-emerald-100">
                Waffen-Übersicht: Main-Waffe & Build wählen
              </Link>
            </li>
            <li>
              <Link href="/de/guides/bosses" className="underline underline-offset-4 hover:text-emerald-100">
                Boss-Guide: Vorab-Item-Checkliste
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
