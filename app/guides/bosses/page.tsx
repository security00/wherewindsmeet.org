import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bosses } from "@/lib/bosses";

export const metadata: Metadata = {
  title: "Where Winds Meet Bosses & Key Encounters Overview",
  description:
    "Overview of major Where Winds Meet bosses and key encounters with short backstories, themes, and links to encounter overviews so you can choose which legends of Jianghu to face next.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/bosses",
  },
};

export default function BossesPage() {
  return (
    <article className="space-y-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Meet the bosses and legends of Jianghu.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
          This page gathers the major Where Winds Meet bosses and named foes in
          one place, focusing on who they are in the world and what their fights
          feel like, not on precise damage numbers. It is meant as a spoiler
          light overview that helps you decide which legendary encounters you
          want to chase first.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          Use it alongside the{" "}
          <Link
            href="/guides/weapons"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            weapons overview
          </Link>{" "}
          and{" "}
          <Link
            href="/guides/builds"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            build guides
          </Link>{" "}
          to pair each fight with a weapon and playstyle that matches its tone
          and your preferences.
        </p>
        <p className="mt-3 text-xs text-slate-400 sm:text-sm">
          All descriptions on this page are based on official Where Winds Meet
          material and general action RPG experience. They are written to set
          expectations about story tone and encounter feel, not to make hard
          claims about exact mechanics or balance. In game experience and patch
          notes always come first.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Boss gallery and quick themes.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bosses.map((boss) => (
            <article
              key={boss.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900/80">
                <video
                  src={boss.backgroundVideo}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-8 w-32 sm:h-9 sm:w-40">
                  <Image
                    src={boss.titleImage}
                    alt={boss.name}
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {boss.name}
                  </h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {boss.encounterType}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{boss.tagline}</p>
                <p className="text-[11px] text-slate-400">
                  Theme: {boss.theme}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/guides/bosses/${boss.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    View encounter overview
                  </Link>
                  <Link
                    href="/guides/builds"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Browse builds
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
