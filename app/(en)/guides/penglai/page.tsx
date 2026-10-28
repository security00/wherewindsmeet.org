import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { MediaPlaceholder } from "@/components/guides/MediaPlaceholder";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  devLetter1028Cover,
  qingzhouAnnouncementTrailer,
  qingzhouPenglai,
} from "@/lib/officialQingzhouMedia";

const baseUrl = "https://wherewindsmeet.org";
const pageUrl = `${baseUrl}/guides/penglai`;
const lastChecked = "2026-10-29";

export const metadata: Metadata = {
  title: "Where Winds Meet Penglai Guide: Explore Mount Penglai",
  description:
    "How to explore Mount Penglai in Where Winds Meet Version 2.3: Qingzhou’s mist-shrouded immortal mountain opened October 29 with Mount Tai Blizzard, Cast in Currents, and Spirit of the Grove—official framing only.",
  alternates: buildHreflangAlternates("/guides/penglai"),
  openGraph: {
    title: "Where Winds Meet Penglai Guide: Explore Mount Penglai",
    description:
      "Mount Penglai opened October 29 with Mount Tai Blizzard, Cast in Currents, and Spirit of the Grove.",
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    type: "article",
    images: [{ url: qingzhouPenglai.src, alt: qingzhouPenglai.alt }],
  },
};

const batch = [
  {
    name: "[Mount Tai Blizzard]",
    type: "Campaign",
    pitch: "Closed-circle detective whodunit in a snow-sealed inn; Gong-Note Zither freeze-frames; Case Room.",
    href: "/guides/mount-tai-blizzard",
  },
  {
    name: "[Cast in Currents]",
    type: "Jianghu Legacy",
    pitch: "Dreamcore spatial puzzle; scholar Zheng Sheng of the Inkbound Order.",
    href: "/guides/cast-in-currents",
  },
  {
    name: "[Spirit of the Grove]",
    type: "Exploration (light-horror)",
    pitch: "Abandoned Inkbound study hall; looping corridors; bronze mirror anomalies.",
    href: "/guides/spirit-of-the-grove",
  },
];

const faqs = [
  {
    q: "Is Penglai a new paid expansion?",
    a: "No official note we cite frames Penglai as a separate paid map DLC. It is Version 2.3 Friends From Afar follow-up content tied to Qingzhou. Region access still follows Qingzhou unlock gates.",
  },
  {
    q: "When did Penglai open?",
    a: "Official (October 28 Dev Letter): October 29, alongside Penglai’s opening and the three experiences. Social mirrors additionally cite 05:00 UTC+8 for related launches—confirm in the in-game event UI.",
  },
  {
    q: "Do I need Inkbound Order for Penglai?",
    a: "Penglai itself is a regional open. Cast in Currents and Spirit of the Grove are framed around Inkbound academy spaces. Exact gating is Pending in-game confirmation. Sect steps: /guides/sects.",
  },
  {
    q: "Is there a Qingzhou Divinecraft dungeon under Mount Tai?",
    a: "Dev Letter Part 1 mentions a Han tomb under Mount Tai without an official English dungeon name. This site will not invent a Divinecraft entry until an official English name ships.",
  },
];

const related = [
  { href: "/guides/qingzhou", label: "Unlock Qingzhou – Eastern Peak" },
  { href: "/guides/mount-tai-blizzard", label: "Mount Tai Blizzard" },
  { href: "/guides/cast-in-currents", label: "Cast in Currents" },
  { href: "/guides/spirit-of-the-grove", label: "Spirit of the Grove" },
  { href: "/guides/sects", label: "Inkbound Order" },
  { href: "/guides/mystic-arts#inkwash-splendor", label: "Inkwash Splendor / Dear Sword" },
  { href: "/tools/interactive-map", label: "Interactive map" },
  { href: "/guides/patch-notes", label: "Oct 28–29 patch notes" },
];

export default function PenglaiGuidePage() {
  return (
    <article className="space-y-10">
      <HomeHubBacklink language="en" />
      <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/85 p-6 shadow-2xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Guides · Qingzhou · Version 2.3 Friends From Afar
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          How do you explore Mount Penglai in Where Winds Meet?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          <strong>Mount Penglai</strong> (also framed as <strong>Qingzhou: Penglai</strong> in official social copy) is
          the mist-shrouded immortal-mountain / academy slice of Qingzhou. Official Version 2.3 Dev Letter{" "}
          <em>Dreaming Paths, Murders in the Snow</em> (published 2026-10-28) states that{" "}
          <strong>on October 29, alongside the opening of Penglai</strong>, three experiences arrive: Campaign{" "}
          <strong>[Mount Tai Blizzard]</strong>, Jianghu Legacy <strong>[Cast in Currents]</strong>, and exploration{" "}
          <strong>[Spirit of the Grove]</strong>.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          You still unlock the Qingzhou region first (<strong>Lv. 32</strong> + Qinghe Main{" "}
          <strong>[Heaven Has No Pier]</strong> → Lost Chapter <strong>[Away to Qingzhou]</strong>; Eastern Peak opened
          with 2.3 on <strong>October 15, 2026</strong>). Exact in-client steps from Eastern Peak into Penglai are{" "}
          <strong>Pending in-game confirmation</strong>—use Journal and the map after October 29.
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Last checked {lastChecked} (Asia/Shanghai) · Unofficial fan hub. Re-check the official links in Sources.
        </p>
      </section>

      <OfficialMediaFigure item={devLetter1028Cover} priority aspectClassName="aspect-[16/9]" />

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What Penglai is (official framing)</h2>
        <p className="text-sm leading-6 text-slate-300">
          Dev Letter Part 1 (2026-10-09) describes Mount Penglai further east in Qingzhou: isolated by waters, echoing
          the classic immortal-mountain vision, yet anchored by academy culture—ancient academies, colossal sage
          statues, and the foremost Pavilion of Tomes. Treat that letter as worldbuilding orientation, not a pin list.
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The October 28 letter closes: <em>Welcome to Penglai. A snowbound inn, a dream-spun academy, and an abandoned
          hall stirring in the dark…</em> Penglai is the regional gate for the three October 29 experiences, not a
          separate version number.
        </p>
        <OfficialMediaFigure item={qingzhouPenglai} />
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What opens with Penglai (October 29)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[680px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Experience</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Official pitch</th>
                <th className="px-3 py-2">Guide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {batch.map((row) => (
                <tr key={row.href}>
                  <td className="px-3 py-3 font-semibold text-slate-50">{row.name}</td>
                  <td className="px-3 py-3">{row.type}</td>
                  <td className="px-3 py-3 leading-6 text-slate-300">{row.pitch}</td>
                  <td className="px-3 py-3">
                    <Link href={row.href} className="text-emerald-300 underline underline-offset-4">{row.href}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Social mirrors of official posts also timed <strong>Inkwash Splendor</strong> and <strong>Dear Sword</strong>{" "}
          for October 29, 05:00 UTC+8 — see{" "}
          <Link href="/guides/mystic-arts#inkwash-splendor" className="text-emerald-300 underline underline-offset-4">
            /guides/mystic-arts
          </Link>
          . Prefer the October 28 Dev Letter for Penglai and the three experiences.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Qingzhou announcement (official channel)</h2>
        <p className="text-sm leading-6 text-slate-300">
          Embedded from the official Where Winds Meet YouTube channel for Eastern Peak → coast → Penglai context. A
          separate upload titled the same on another channel was not used.
        </p>
        <LiteYouTubeEmbed
          videoId={qingzhouAnnouncementTrailer.videoId}
          title={qingzhouAnnouncementTrailer.title}
          poster="/background/bg4.webp"
          analytics={{ eventName: "guide_video_play", params: { guide: "penglai", source: "official_youtube" } }}
        />
        <p className="text-xs text-slate-400">
          {qingzhouAnnouncementTrailer.channel} ·{" "}
          <a href={qingzhouAnnouncementTrailer.watchUrl} className="text-emerald-300 underline underline-offset-4" target="_blank" rel="noreferrer">
            {qingzhouAnnouncementTrailer.title}
          </a>
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Orientation checklist (no spoilers)</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Confirm Qingzhou – Eastern Peak is unlocked (<Link href="/guides/qingzhou" className="text-emerald-300 underline underline-offset-4">/guides/qingzhou</Link>).</li>
          <li>After the October 29 drop, open the in-game map and Journal for Penglai, Campaign, and Legacy entries. The exact Journal door is Pending in-game confirmation.</li>
          <li>Prefer the <a href="https://www.wherewindsmeetgame.com/map/" className="text-emerald-300 underline underline-offset-4" target="_blank" rel="noreferrer">official interactive map</a>. This page does not invent marker totals.</li>
          <li>October 29 patch notes: Qingzhou items at Zhao Laoliu’s General Store.</li>
          <li>Pick one door first: snowbound inn, dream-spun academy, or abandoned hall.</li>
        </ol>
        <div className="mt-4">
          <MediaPlaceholder
            slot="map layer"
            alt="Official interactive map — Qingzhou / Penglai layer (pin counts not claimed on this fan page)."
            expectation="Pending a capture of the official map Penglai layer after October 29. Do not invent pin counts."
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h2 className="font-semibold text-slate-50">{faq.q}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{faq.a}</p>
          </div>
        ))}
      </section>

      <nav className="grid gap-2 sm:grid-cols-2">
        {related.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-emerald-300">
            {link.label} →
          </Link>
        ))}
      </nav>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-200">Sources</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1028devletter.html" target="_blank" rel="noreferrer">October 28 Dev Letter (2026-10-28)</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1009devletter.html" target="_blank" rel="noreferrer">Dev Letter Part 1 (2026-10-09)</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1029patchnotes.html" target="_blank" rel="noreferrer">October 29 patch notes</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/map/" target="_blank" rel="noreferrer">Official interactive map</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href={qingzhouAnnouncementTrailer.watchUrl} target="_blank" rel="noreferrer">Official Qingzhou announcement trailer</a></li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          Unofficial fan hub. Not affiliated with NetEase / Everstone. Community mirrors were used only to cross-check
          the mystic-skill clock, not as art.
        </p>
      </section>
    </article>
  );
}
