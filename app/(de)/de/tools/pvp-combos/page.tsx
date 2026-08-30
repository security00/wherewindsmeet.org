import type { Metadata } from "next";
import Link from "next/link";
import { DeferredIframeEmbed } from "@/components/DeferredIframeEmbed";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

const combosUrl = "https://www.wwmcombos.com/?hasVideo=true";

type Video = {
  id: string;
  title: string;
  description: string;
};

const videos: Video[] = [
  {
    id: "4UFzw-Q39pQ",
    title: "Combat-Grundlagen",
    description: "Spacing und Tempo: wie du im Duell keine kostenlosen Punishes verschenkst.",
  },
  {
    id: "DhhUnD1wmX4",
    title: "Movement & Positioning",
    description: "Footwork, Kamera und Distanzkontrolle — Druck ohne Overcommit.",
  },
  {
    id: "TCLlK21RVw0",
    title: "Kontern & Parry Basics",
    description: "Praktischer Einstieg in defensive Basics, damit du nicht permanent überrollt wirst.",
  },
  {
    id: "DMR8UN4gEaY",
    title: "Animation Cancelling",
    description: "Fortgeschrittene Technik: wo Cancels echten Vorteil bringen (nicht nur flashy).",
  },
  {
    id: "d9WyWI6RRL4",
    title: "Advanced Combo Strings",
    description: "Längere Strings und Conversion-Ideen, wenn du Neutral schon stabil spielst.",
  },
  {
    id: "Xh_xT8Aduu8",
    title: "High-Level PVP Strategy",
    description: "Entscheidungen unter Druck: wann disengagen, wann committen — und warum.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet PVP Combos (Datenbank + Videos)",
  description:
    "Öffne eine eingebettete Where Winds Meet PVP-Combos-Datenbank und schaue kuratierte Duel-Videos auf einer Seite. Mit Quick Links zur PVP-Tierliste und Builds.",
  alternates: buildHreflangAlternates("/tools/pvp-combos", { canonicalLanguage: "de" }),
};

export default function PvpCombosPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">PVP Combos</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            Für den typischen Moment: Du willst gleich Duelle spielen und brauchst schnell zwei Dinge — Combo-Referenz +
            ein paar solide Beispiele aus echten Fights.
          </p>
          <p>
            Die Combos-Datenbank ist ein Drittanbieter-Embed. Wenn es nicht lädt, öffne sie in einem neuen Tab und nutze
            diese Seite für Videos und interne Links.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <Link
            href="/guides/pvp-tier-list"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
          >
            PVP Tierliste →
          </Link>
          <Link
            href="/de/guides/builds"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
          >
            Builds →
          </Link>
          <Link
            href="/de/guides/weapons"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
          >
            Waffen →
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-slate-950/70 p-3">
            <p className="text-sm font-semibold text-slate-100">Combos-Datenbank (Embed)</p>
            <a
              href={combosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              In neuem Tab öffnen →
            </a>
          </div>

          <DeferredIframeEmbed
            src={combosUrl}
            title="Where Winds Meet PVP combos database"
            loadLabel="Drittanbieter-Datenbank laden"
            privacyNote="Der Anbieter wird erst nach deinem Klick kontaktiert. Alternativ kannst du den Quelllink oben verwenden."
            className="h-[70vh] min-h-[560px] sm:min-h-[720px]"
            sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
          />
        </div>

        <p className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-xs leading-relaxed text-slate-300">
          Drittanbieter-Hinweis: Werbung/Accounts/Features werden vom Anbieter gesteuert. Diese Seite speichert keine
          Combo-Historie.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">Kuratierte PVP-Videos</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          Nutze die Clips als Referenz: schau eins, kopiere eine kleine Idee, dann zurück zur Combo-Datenbank und genau
          diese Conversion üben.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <LiteYouTubeEmbed
                videoId={video.id}
                title={video.title}
                poster="/background/bg4.webp"
                analytics={{ eventName: "pvp_combo_video_play", params: { locale: "de" } }}
              />
              <p className="text-sm font-semibold text-slate-100">{video.title}</p>
              <p className="text-xs leading-relaxed text-slate-300">{video.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Quellvideo auf YouTube oeffnen
              </a>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
