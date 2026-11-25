import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { spiritOfTheGroveOfficialMapStill } from "@/lib/officialMapCaptures";
import { inkboundCampus, spiritOfTheGroveHall, spiritOfTheGroveMirror } from "@/lib/officialQingzhouMedia";

const pageUrl = "https://wherewindsmeet.org/guides/spirit-of-the-grove";

export const metadata: Metadata = {
  title: "Spirit of the Grove Exploration Guide — Where Winds Meet",
  description:
    "Where Winds Meet Spirit of the Grove light-horror exploration guide (Inkbound abandoned study hall, bronze mirror anomalies)—not Spirits of the Lake. Opened with Penglai on October 29.",
  alternates: buildHreflangAlternates("/guides/spirit-of-the-grove"),
  openGraph: {
    title: "Spirit of the Grove Exploration Guide — Where Winds Meet",
    description: "Light-horror Inkbound hall exploration. Not Spirits of the Lake.",
    url: pageUrl,
    type: "article",
    images: [{ url: spiritOfTheGroveHall.src, alt: spiritOfTheGroveHall.alt }],
  },
};

export default function SpiritOfTheGrovePage() {
  return (
    <article className="space-y-10">
      <HomeHubBacklink language="en" />
      <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/85 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">Guides · Exploration · Inkbound Order</p>
        <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-4xl">
          What is the Spirit of the Grove light-horror exploration in Where Winds Meet?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          <strong>[Spirit of the Grove]</strong> is a featured <strong>light-horror exploration</strong> that arrives{" "}
          <strong>October 29</strong> with Penglai. Official Dev Letter <em>Dreaming Paths, Murders in the Snow</em>{" "}
          places it in an abandoned study hall of the Inkbound Order: looping corridors, and a bronze mirror used to
          spot hidden anomalies. This is not Spirits of the Lake.
        </p>
        <p className="mt-3 text-xs text-slate-500">Last checked 2026-10-29 (Asia/Shanghai) · Unofficial fan hub. No invented anomaly checklist or ending.</p>
      </section>

      <OfficialMediaFigure item={spiritOfTheGroveHall} priority aspectClassName="aspect-[16/9]" />

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">How to play (official systems)</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Enter the abandoned Inkbound study hall after October 29. The exact pin is Pending in-game confirmation.</li>
          <li>Expect endlessly looping corridors. Do not assume standard quest arrows.</li>
          <li>Use the bronze mirror to inspect surroundings and spot hidden anomalies.</li>
          <li>Some abnormalities are obvious. Others lurk in areas you have already walked—retrace when stuck.</li>
          <li>The letter leaves the building’s history for you to find inside. This page does not invent that ending.</li>
        </ol>
        <OfficialMediaFigure item={spiritOfTheGroveMirror} />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Same-day doors</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Snowbound inn — <Link href="/guides/mount-tai-blizzard" className="text-emerald-300 underline underline-offset-4">Mount Tai Blizzard</Link></li>
          <li>Dream-spun academy — <Link href="/guides/cast-in-currents" className="text-emerald-300 underline underline-offset-4">Cast in Currents</Link></li>
          <li>Abandoned hall — this page</li>
          <li>Regional gate — <Link href="/guides/penglai" className="text-emerald-300 underline underline-offset-4">Penglai</Link></li>
          <li>Sect card — <Link href="/guides/sects#inkbound-order" className="text-emerald-300 underline underline-offset-4">Inkbound Order</Link></li>
        </ul>
        <OfficialMediaFigure item={inkboundCampus} />
        <OfficialMediaFigure item={spiritOfTheGroveOfficialMapStill} aspectClassName="aspect-[1188/937]" />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Is Spirit of the Grove a Campaign?", "The letter labels it a featured exploration (light-horror), separate from Campaign [Mount Tai Blizzard] and Jianghu Legacy [Cast in Currents]."],
          ["Do I need a party?", "Not stated officially. Pending in-game confirmation."],
          ["What does the bronze mirror do?", "Inspect surroundings to spot anomalies. Some hide in places you already walked."],
          ["Is it a full horror raid?", "Official framing is light-horror and eerie halls. No jump-scare list is published here."],
        ].map(([q, a]) => (
          <div key={q} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h2 className="font-semibold text-slate-50">{q}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{a}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-200">Sources</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1028devletter.html" target="_blank" rel="noreferrer">October 28 Dev Letter</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1009devletter.html" target="_blank" rel="noreferrer">Dev Letter Part 1</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/map/" target="_blank" rel="noreferrer">Official interactive map</a></li>
        </ul>
        <p className="mt-4 text-xs">Unofficial fan hub. Not affiliated with NetEase / Everstone.</p>
      </section>
    </article>
  );
}
