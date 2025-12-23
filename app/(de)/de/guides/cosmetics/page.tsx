import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Kosmetik & Appearance Sets | Where Winds Meet (DE)",
  description:
    "Outfits, Färbungen, Accessoires und Stil-Tipps – woher sie kommen, wie man sie kombiniert und welche kostenlosen Optionen es gibt.",
  alternates: buildHreflangAlternates("/guides/cosmetics", { canonicalLanguage: "de" }),
};

export default function CosmeticsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg5.webp"
            alt="Where Winds Meet Cosmetics Hintergrund"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>
        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Appearance & Style</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Kosmetik-Guide: Outfits, Färbungen, Accessoires.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Kurzer Überblick zu Stiloptionen und Quellen. Kombiniere kostenlose Routen mit Event-/Shop-Pieces, damit dein Wanderer zu jedem Anlass passt.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <Link href="/de/guides/free-outfits" className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100 hover:border-emerald-300/80">
              Gratis-Outfits
            </Link>
            <Link href="/de/guides/codes" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60">
              Aktive Codes
            </Link>
            <Link href="/de/guides/flicker-of-faces" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60">
              Flicker of Faces
            </Link>
            <Link href="/de/news" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60">
              News / Events
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-50">Was du hier findest</h2>
          <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
            <li>Outfit-/Appearance-Sets und ihre Quellen (Events, Shops, Quests).</li>
            <li>Färbungen/Accessoires, die gut kombinieren und bezahlbar bleiben.</li>
            <li>Hinweise, welche Teile gratis oder über Codes erhältlich sind.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-50">Schnellstart</h2>
          <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
            <li>Kombiniere gratis Event-/Quest-Sets mit 1–2 Shop-Pieces für Akzente.</li>
            <li>Nutz Codes zuerst, dann Event-Shops, dann reguläre Shops.</li>
            <li>Halte ein „Allwetter“-Set (neutral) und ein „Showcase“-Set (Stil) bereit.</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
