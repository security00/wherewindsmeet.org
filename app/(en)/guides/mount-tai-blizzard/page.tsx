import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  blizzardDeductionClip,
  caseRoomClip,
  gongNoteZitherStill,
  mountTaiBlizzardInn,
  qingzhouAnnouncementTrailer,
  qingzhouMountTai,
} from "@/lib/officialQingzhouMedia";

const pageUrl = "https://wherewindsmeet.org/guides/mount-tai-blizzard";

export const metadata: Metadata = {
  title: "Mount Tai Blizzard Campaign Guide — Where Winds Meet",
  description:
    "What is the Mount Tai Blizzard campaign in Where Winds Meet? Official closed-circle detective whodunit: snow-sealed inn, Gong-Note Zither freeze-frames, Case Room deduction, and Reverse revisits—opened with Penglai on October 29.",
  alternates: buildHreflangAlternates("/guides/mount-tai-blizzard"),
  openGraph: {
    title: "Mount Tai Blizzard Campaign Guide — Where Winds Meet",
    description: "Official closed-circle detective campaign that opened with Penglai on October 29.",
    url: pageUrl,
    type: "article",
    images: [{ url: mountTaiBlizzardInn.src, alt: mountTaiBlizzardInn.alt }],
  },
};

const systems = [
  "Gong-Note Zither — a space that reconstructs the past. Key moments are frozen in time; you can walk into the freeze-frame and look from any angle.",
  "Evidence — gather letters, keepsakes, and other scattered clues across the inn.",
  "Case Room — clues are logged here and pieced together on a deduction board. Return to the scene if details fail to line up.",
  "Conclude and Reverse — if you have not uncovered every answer, conclude for now and revisit later through Reverse.",
  "Combat coda — the letter says a legendary foe emerges. Name, phases, and drops are Pending official Journal confirmation.",
];

export default function MountTaiBlizzardPage() {
  return (
    <article className="space-y-10">
      <HomeHubBacklink language="en" />
      <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/85 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">Guides · Campaign · Qingzhou</p>
        <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-4xl">
          What is the Mount Tai Blizzard campaign in Where Winds Meet?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          <strong>[Mount Tai Blizzard]</strong> is a new <strong>Campaign</strong> in Version 2.3. Official Dev Letter{" "}
          <em>Dreaming Paths, Murders in the Snow</em> (2026-10-28) introduces it as a closed-circle detective whodunit:
          heavy snow cuts off the roads; strangers share an isolated inn; murders begin; everyone has a secret. The
          investigation unearths a century-old Jianghu feud and the rumor of a Mount Tai massacre a hundred years ago.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          It opens <strong>on October 29, alongside Penglai</strong>, with <strong>[Cast in Currents]</strong> and{" "}
          <strong>[Spirit of the Grove]</strong>.
        </p>
        <p className="mt-3 text-xs text-slate-500">Last checked 2026-10-29 (Asia/Shanghai) · Unofficial fan hub. No invented solutions or damage numbers.</p>
      </section>

      <OfficialMediaFigure item={mountTaiBlizzardInn} priority aspectClassName="aspect-[16/9]" />

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">How the investigation works (official systems only)</h2>
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-300">
          {systems.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="text-sm leading-6 text-slate-400">
          Exact quest-accept UI, recommended level, and party rules are Pending in-game confirmation. This page does not
          name the killer.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <OfficialMediaFigure item={gongNoteZitherStill} />
          <OfficialMediaFigure item={caseRoomClip} />
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Story framing (official wording)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Blizzard-bound inn; classic detective setup with a Jianghu twist.</li>
          <li>An old letter and a haunting zither melody reopen the cold case.</li>
          <li>The letter asks whether things truly happened the way the tales claim.</li>
        </ul>
        <OfficialMediaFigure item={qingzhouMountTai} />
        <p className="text-xs text-slate-400">
          Mount Tai / Eastern Peak still from Dev Letter Part 1. The Han tomb line under Mount Tai is not an official
          English Divinecraft dungeon name.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">How this ties to Qingzhou / Penglai</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Qingzhou – Eastern Peak has been live since October 15, 2026. Unlock: <Link href="/guides/qingzhou" className="text-emerald-300 underline underline-offset-4">/guides/qingzhou</Link>.</li>
          <li>Penglai opening: October 29, alongside this Campaign. <Link href="/guides/penglai" className="text-emerald-300 underline underline-offset-4">/guides/penglai</Link>.</li>
          <li>Same-day sisters: <Link href="/guides/cast-in-currents" className="text-emerald-300 underline underline-offset-4">Cast in Currents</Link> and <Link href="/guides/spirit-of-the-grove" className="text-emerald-300 underline underline-offset-4">Spirit of the Grove</Link>.</li>
        </ul>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Player action: unlock Qingzhou first, then after October 29 open the Journal for [Mount Tai Blizzard]. The
          Journal entry name is Pending in-game confirmation.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <OfficialMediaFigure item={blizzardDeductionClip} />
          <div className="space-y-3">
            <LiteYouTubeEmbed
              videoId={qingzhouAnnouncementTrailer.videoId}
              title={qingzhouAnnouncementTrailer.title}
              poster="/background/bg4.webp"
              analytics={{ eventName: "guide_video_play", params: { guide: "mount-tai-blizzard", source: "official_youtube" } }}
            />
            <p className="text-xs text-slate-400">Official channel trailer for regional context, not a spoiler walkthrough.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Is Mount Tai Blizzard a dungeon or a Campaign?", "Official titling: Campaign [Mount Tai Blizzard]. It mixes investigation systems with a combat finale."],
          ["Can I finish without finding every clue?", "Yes per official text: conclude for now and revisit through Reverse."],
          ["Does it require Penglai?", "The letter schedules it alongside the opening of Penglai on October 29. The exact zone gate is Pending in-game confirmation."],
          ["Will this page list the killer?", "No. It stays on systems and official framing."],
        ].map(([q, a]) => (
          <div key={q} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h2 className="font-semibold text-slate-50">{q}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{a}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-slate-400">
        October 29 Guild War, Battle Pass, and Zhao Laoliu notes: <Link href="/guides/patch-notes" className="text-emerald-300 underline underline-offset-4">/guides/patch-notes</Link>.
        Map hub: <Link href="/tools/interactive-map" className="text-emerald-300 underline underline-offset-4">/tools/interactive-map</Link>.
      </p>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-200">Sources</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1028devletter.html" target="_blank" rel="noreferrer">October 28 Dev Letter</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1009devletter.html" target="_blank" rel="noreferrer">Dev Letter Part 1</a></li>
          <li><a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1029patchnotes.html" target="_blank" rel="noreferrer">October 29 patch notes</a></li>
        </ul>
        <p className="mt-4 text-xs">Unofficial fan hub. Not affiliated with NetEase / Everstone.</p>
      </section>
    </article>
  );
}
