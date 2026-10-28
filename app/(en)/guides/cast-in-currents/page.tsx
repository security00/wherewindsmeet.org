import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { MediaPlaceholder } from "@/components/guides/MediaPlaceholder";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  castInCurrentsDream,
  castInCurrentsScholar,
  castInCurrentsTime,
  inkboundCampus,
} from "@/lib/officialQingzhouMedia";

const pageUrl = "https://wherewindsmeet.org/guides/cast-in-currents";

export const metadata: Metadata = {
  title: "Cast in Currents Jianghu Legacy Guide — Dreamscape Puzzle",
  description:
    "Where Winds Meet Cast in Currents Jianghu Legacy guide: official dreamscape / dreamcore spatial puzzle with Zheng Sheng of the Inkbound Order—not Spirits of the Lake. Time moves with your steps; live with Penglai on October 29.",
  alternates: buildHreflangAlternates("/guides/cast-in-currents"),
  openGraph: {
    title: "Cast in Currents Jianghu Legacy Guide — Dreamscape Puzzle",
    description: "Jianghu Legacy dreamscape with Zheng Sheng. Not Spirits of the Lake.",
    url: pageUrl,
    type: "article",
    images: [{ url: castInCurrentsScholar.src, alt: castInCurrentsScholar.alt }],
  },
};

export default function CastInCurrentsPage() {
  return (
    <article className="space-y-10">
      <HomeHubBacklink language="en" />
      <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/85 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">Guides · Jianghu Legacy · Inkbound Order</p>
        <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-4xl">
          How does the Cast in Currents Jianghu Legacy dreamscape work in Where Winds Meet?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          <strong>[Cast in Currents]</strong> is a new <strong>Jianghu Legacy</strong> that opens <strong>October 29</strong>{" "}
          with Penglai. Official Dev Letter <em>Dreaming Paths, Murders in the Snow</em> pitches it for dreamcore spatial
          puzzles: multi-layer shifting dreamscapes where the familiar turns strange. This is not Spirits of the Lake.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          The tale centers on <strong>Zheng Sheng</strong>, a scholar of the <strong>Inkbound Order</strong>, still waiting
          for his mentor’s final guidance. You find him asleep at his desk and are drawn into the dream.
        </p>
        <p className="mt-3 text-xs text-slate-500">Last checked 2026-10-29 (Asia/Shanghai) · Unofficial fan hub. Room-by-room solutions stay Pending.</p>
      </section>

      <OfficialMediaFigure item={castInCurrentsScholar} priority aspectClassName="aspect-[16/9]" />

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Dreamcore pitch (official imagery)</h2>
        <p className="text-sm leading-6 text-slate-300">
          The letter describes an empty classroom, a corridor stretching into infinity, repeating bookshelves, stairs
          leading in strange directions, and water creeping over floorboards that reflect vacant desks.
        </p>
        <OfficialMediaFigure item={castInCurrentsDream} />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Core mechanic (official only)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li><strong>Time and movement:</strong> step forward and time advances; step back and time reverses.</li>
          <li><strong>Objects</strong> shift as time moves.</li>
          <li>Watch spatial anomalies for newly opened paths.</li>
          <li><strong>Standard quest guidance is minimized</strong> on purpose.</li>
          <li>The exit pieces together a forgotten past shared between master and disciple.</li>
        </ul>
        <p className="text-sm leading-6 text-slate-400">
          Journal volume and the exact accept button are Pending in-game confirmation. This page does not publish a
          unique solution table.
        </p>
        <OfficialMediaFigure item={castInCurrentsTime} />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Inkbound Order and Penglai</h2>
        <p className="text-sm leading-6 text-slate-300">
          Sect card: <Link href="/guides/sects#inkbound-order" className="text-emerald-300 underline underline-offset-4">/guides/sects#inkbound-order</Link>.
          Same-day pages: <Link href="/guides/penglai" className="text-emerald-300 underline underline-offset-4">Penglai</Link>,{" "}
          <Link href="/guides/mount-tai-blizzard" className="text-emerald-300 underline underline-offset-4">Mount Tai Blizzard</Link>,{" "}
          <Link href="/guides/spirit-of-the-grove" className="text-emerald-300 underline underline-offset-4">Spirit of the Grove</Link>.
          Whether membership is required is Pending in-game confirmation.
        </p>
        <OfficialMediaFigure item={inkboundCampus} />
        <MediaPlaceholder
          slot="Journal / map"
          alt="Where Cast in Currents appears in Journal or on the map after October 29."
          expectation="Pending an official map or in-client Journal capture. Do not invent coordinates."
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Is this a combat Legacy?", "The official pitch emphasizes a spatial puzzle and dream narrative. Combat beyond the letter is Pending."],
          ["Why are there almost no quest markers?", "By design. The letter says guidance is minimized."],
          ["Does stepping back reverse time?", "Yes per official text: movement advances or reverses time, and objects shift."],
          ["Related mystic skills on October 29?", "Inkwash Splendor and Dear Sword — /guides/mystic-arts. Launch clock from official social: 05:00 UTC+8."],
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
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1009devletter.html" target="_blank" rel="noreferrer">Dev Letter Part 1 (academy context)</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/map/" target="_blank" rel="noreferrer">Official interactive map</a></li>
        </ul>
        <p className="mt-4 text-xs">Unofficial fan hub. Not affiliated with NetEase / Everstone.</p>
      </section>
    </article>
  );
}
