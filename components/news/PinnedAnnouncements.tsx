import type { ReactNode } from "react";
import Link from "next/link";

import {
  ANNIVERSARY_POST,
  APPEARANCES_1029,
  BATTLE_PASS_POST,
  DLSS_POST,
  HUTUO_POST,
  PATCH_NOTES_1029,
  PLAYSTATION_HUTUO_POST,
} from "@/lib/globalAnnouncements";

const PINNED_LAST_VERIFIED = "2026-11-13";
const PINNED_LAST_VERIFIED_LABEL = "2026-11-13 (Asia/Shanghai)";

const PAID_TOPUP_URL = "https://x.com/WhereWindsMeet_/status/2119761940117332319";

const SOURCE_URLS = [
  HUTUO_POST.url,
  ANNIVERSARY_POST.url,
  PLAYSTATION_HUTUO_POST.url,
  BATTLE_PASS_POST.url,
  PATCH_NOTES_1029.url,
  APPEARANCES_1029.url,
  DLSS_POST.url,
  "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
  "https://x.com/WhereWindsMeet_/status/2120532003351048535",
  "https://x.com/WhereWindsMeet_/status/2120637700524904525",
  "https://x.com/WhereWindsMeet_/status/2118548827586372057",
  "https://www.wherewindsmeetgame.com/news/official/1113appearance.html",
] as const;

const MOUNT_SYNC_URL = "https://x.com/WhereWindsMeet_/status/2120501807055040709";

function Cite({ n }: { n: number | readonly number[] }) {
  const nums = typeof n === "number" ? [n] : n;
  return (
    <>
      {nums.map((num) => (
        <a
          key={num}
          href={SOURCE_URLS[num - 1]}
          className="text-emerald-300 underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          [{num}]
        </a>
      ))}
    </>
  );
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-emerald-300 underline underline-offset-4" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

const watchRows: { key: string; date: ReactNode; item: ReactNode; source: ReactNode }[] = [
  {
    key: "nov-1",
    date: "Nov 1, 0:00 UTC+8",
    item: (
      <>
        Appearances: Wraithflame (limited to Feb 1, 2027, 04:59:59 UTC+8); Frost&apos;s Glow; Myriad Sounds: Wrought Obsidian / Azure Dragon. <strong>Unchanged.</strong>
      </>
    ),
    source: <Ext href={APPEARANCES_1029.url}>Official appearances overview (Oct 29)</Ext>,
  },
  {
    key: "nov-8",
    date: "Nov 8, 0:00 UTC+8",
    item: (
      <>
        Appearances: Lotus Crane set; Mindful Joy Golden Body mystic VFX. <strong>Unchanged.</strong>
      </>
    ),
    source: <Ext href={APPEARANCES_1029.url}>Official appearances overview (Oct 29)</Ext>,
  },
  {
    key: "scarlet",
    date: "Nov 13, 17:59:59 UTC+8",
    item: (
      <>
        Scarlet Whispers Battle Pass end (adjusted from November 14, 04:59:59). <strong>Unchanged.</strong>
      </>
    ),
    source: <Ext href={PATCH_NOTES_1029.url}>Official October 29 patch notes</Ext>,
  },
  {
    key: "hutuo",
    date: (
      <>
        Nov 13, <strong>18:00–23:00 (UTC+8)</strong>; also <strong>18:00:00–22:59:59 (UTC+8)</strong> per the Version 2.4 overview, then go live <strong>following</strong>
      </>
    ),
    item: (
      <>
        <strong>Hutuo / Version 2.4</strong> 1st anniversary major update. This is a <strong>non-downtime update</strong> window.
        Official copy says Hutuo goes live <strong>following</strong> it—not at 18:00, and 23:00 is not the start of the update.
        Launch graphic: single moment <strong>11PM UTC+8 on November 13</strong> (15:00 UTC); KST / JST 12AM, AEDT 2AM, NZDT 4AM are <strong>November 14</strong>; CST on the graphic is US Central Time, not Beijing time.
        Earlier “November 13” / “November 13 (UTC)” date-only labels are superseded by this window. Announced, <strong>not live</strong> as of 2026-11-13.
      </>
    ),
    source: (
      <>
        Official X: launch window
        <Cite n={9} />
        ; longer explanation on <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link>
      </>
    ),
  },
  {
    key: "topup",
    date: "Nov 13, 23:00 UTC+8",
    item: (
      <>
        Paid top-up events begin (First Top-Up Reset, Flow of Echoes, Soaring Record). <strong>Not</strong> free login rewards.
        Flow of Echoes ends Dec 18, 04:59:59 (UTC+8). First Top-Up Reset and Soaring Record are not given their own end times in the cited post.
      </>
    ),
    source: (
      <>
        <Ext href={PAID_TOPUP_URL}>Official X: paid top-up</Ext>
        ; detail on <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">/guides/anniversary</Link>
      </>
    ),
  },
  {
    key: "new-appearances",
    date: "Nov 13, 23:00 UTC+8 (item windows differ)",
    item: (
      <>
        Version 2.4 new appearances, from the official overview (page date 2026-11-11, date only): <strong>[Silent Voice: Twin Sentinels]</strong> (Mo Blade, Draw Shop, to Nov 9, <strong>2027</strong>, 04:59:59 UTC+8); <strong>[Wrathful Lord: Masked Fury]</strong> and <strong>[Gale Steed]</strong> VFX (arrival only, no end published); <strong>[Astral Array: Celestial Drift]</strong> (to May 13, 2027, 04:59:59 UTC+8; limited-time discount until Dec 26, 2026, 04:59:59 UTC+8, no amount published); <strong>[Radiant Charger]</strong> chest (arrival only; no contents list); mount <strong>[Peli-can-eat]</strong> (discount until Dec 14, 04:59:59 UTC+8—not written as a delist date; official wording does not restate a time zone immediately after 23:00). No prices published. Full table and limits: <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">/guides/anniversary</Link>.
      </>
    ),
    source: (
      <>
        <Ext href={SOURCE_URLS[11]}>Official appearances overview (page date 2026-11-11)</Ext>
        <Cite n={12} />
        ; <Ext href={MOUNT_SYNC_URL}>official X: mount</Ext>
        <Cite n={12} />
      </>
    ),
  },
  {
    key: "restated",
    date: "Nov 13, 23:00 UTC+8 (event and shop windows unchanged)",
    item: (
      <>
        Previously announced windows restated on the same overview, <strong>not a change</strong>: [Flowing Clarity] to Dec 7, 4:59:59 UTC+8 (with [Luminous Tides] / [Lucent Ripples]; event end is not a shop delist date); [Plumed Opulence] to Dec 18, 4:59:59 UTC+8; [Bound Majesty] to Feb 12, 2027, 4:59:59 UTC+8; [Iris Herald] Draw set to Mar 22, 2027, 04:59:59 UTC+8 (not a free grant); [Spectral Scroll] to Nov 28, 4:59:59 UTC+8 (with [Whispered Omens]; event end is not a shop delist date).
      </>
    ),
    source: (
      <>
        <Ext href={SOURCE_URLS[11]}>Official appearances overview (page date 2026-11-11)</Ext>
        <Cite n={12} />
        ; detail on <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">/guides/anniversary</Link>
      </>
    ),
  },
  {
    key: "frostbound",
    date: "Nov 13, 23:00 – Dec 10, 04:59:59 UTC+8",
    item: (
      <>
        Battle Pass outfit Frostbound Edge. Not the free login outfit choice. <strong>Unchanged.</strong>
      </>
    ),
    source: <Ext href={BATTLE_PASS_POST.url}>Official X: Frostbound Edge and Willow Breeze</Ext>,
  },
  {
    key: "willow",
    date: "Nov 13, 23:00 – Jan 29, 2027, 04:59:59 UTC+8",
    item: (
      <>
        Battle Pass appearance Willow Breeze (return). Not the free login outfit choice. Also January 28, 2027, 04:59:59 (no time zone stated) per the Version 2.4 [Across Autumn Waters] overview.
      </>
    ),
    source: <Ext href={BATTLE_PASS_POST.url}>Official X: Frostbound Edge and Willow Breeze</Ext>,
  },
  {
    key: "dual-spears",
    date: (
      <>
        <strong>November 26 (UTC)</strong>; no clock time
      </>
    ),
    item: (
      <>
        Dual Spears martial art. <strong>Not</strong> a November 13 unlock. Do not rewrite as Beijing midnight. (This replaces the live “Late November” row; the date itself is the already-approved official label, not a new change.)
      </>
    ),
    source: (
      <>
        Official X: Dual Spears
        <Cite n={11} />
      </>
    ),
  },
  {
    key: "dlss",
    date: "November 23 (date only)",
    item: (
      <>
        NVIDIA DLSS 5 support announced for PC. No timezone, minute, FPS percentage, or GPU floor in the post. <strong>Unchanged.</strong>
      </>
    ),
    source: <Ext href={DLSS_POST.url}>Official X: NVIDIA DLSS 5</Ext>,
  },
];

const moduleSources: { id: string; label: string; url: string; published: string }[] = [
  HUTUO_POST,
  ANNIVERSARY_POST,
  PLAYSTATION_HUTUO_POST,
  BATTLE_PASS_POST,
  PATCH_NOTES_1029,
  APPEARANCES_1029,
  DLSS_POST,
  {
    id: "dev-letter-1109",
    label: "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
    url: "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
    published:
      "Official Version 2.4 Dev Letter (page date 2026-11-09, date only). Used here for the Version 2.4 label. This is a Global official-site source, not a Steam announcement.",
  },
  {
    id: "hutuo-launch-window",
    label: "https://x.com/WhereWindsMeet_/status/2120532003351048535",
    url: "https://x.com/WhereWindsMeet_/status/2120532003351048535",
    published:
      "Official X: Hutuo “will officially go live following a non-downtime update on November 13, from 18:00 to 23:00 (UTC+8).” Graphic: “1ST ANNIVERSARY: HUTUO GLOBAL LAUNCH,” 11PM UTC+8 on November 13. Posted 2026-11-11 23:00:01 Asia/Shanghai (2026-11-11T15:00:01Z).",
  },
  {
    id: "hutuo-scenery",
    label: "https://x.com/WhereWindsMeet_/status/2120637700524904525",
    url: "https://x.com/WhereWindsMeet_/status/2120637700524904525",
    published:
      "Official X scenery post. Full text: “The Anniversary Version: Hutuo arrives on November 13 (UTC)!” On-timeline display is cut to “November 13.” Posted 2026-11-12 06:00:02 Asia/Shanghai. Do not use this post to overwrite source [9].",
  },
  {
    id: "dual-spears-nov-26",
    label: "https://x.com/WhereWindsMeet_/status/2118548827586372057",
    url: "https://x.com/WhereWindsMeet_/status/2118548827586372057",
    published:
      "Official X: “Dual Spears officially arrives on November 26 (UTC).” Posted 2026-11-06 11:39:35 Asia/Shanghai. No clock; do not rewrite as Beijing midnight. Already approved; this page’s live “late November” row is what is being aligned.",
  },
  {
    id: "appearances-1113",
    label: "https://www.wherewindsmeetgame.com/news/official/1113appearance.html",
    url: "https://www.wherewindsmeetgame.com/news/official/1113appearance.html",
    published:
      "Official Version 2.4 New Appearances Overview (page date 2026-11-11, date only; HTTP 200 on 2026-11-12). Mount sync: https://x.com/WhereWindsMeet_/status/2120501807055040709 (posted 2026-11-11 21:00:02 Asia/Shanghai). Prices are published in the Version 2.4 [Across Autumn Waters] overview and on /guides/anniversary. Full tables and evidence limits: /guides/anniversary.",
  },
];

export function PinnedAnnouncements() {
  return (
    <section
      id="pinned-announcements"
      className="space-y-4 rounded-2xl border border-amber-400/40 bg-amber-500/10 p-4 text-sm text-amber-50"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">
            Pinned · Scheduled global update · Not live
          </p>
          <h2 id="announced-hutuo" className="mt-1 text-xl font-bold text-slate-50">
            Next announced major beat: Hutuo, November 13 (Version 2.4)
          </h2>
        </div>
        <time
          dateTime={PINNED_LAST_VERIFIED}
          className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-100"
        >
          Last verified {PINNED_LAST_VERIFIED_LABEL}
        </time>
      </div>
      <p className="leading-6 text-amber-50/90">
        Where Winds Meet’s 1st Anniversary major update <strong>Hutuo</strong> is the official <strong>Version 2.4</strong> update.
        <Cite n={8} /> Official copy now says Hutuo will officially go live <strong>following</strong> a non-downtime update on November 13, from <strong>18:00 to 23:00 (UTC+8)</strong>.
        <Cite n={9} /> That span is the update window, not a go-live time at 18:00, and 23:00 is not the start of the update. The same post’s launch graphic is titled “1ST ANNIVERSARY: HUTUO GLOBAL LAUNCH” and shows a <strong>single</strong> moment: <strong>11PM UTC+8 on November 13</strong> (15:00 UTC); 12AM KST, 12AM JST, 2AM AEDT, and 4AM NZDT fall on <strong>November 14</strong>. CST on that graphic is <strong>US Central Time</strong>, not Beijing time.
        <Cite n={9} />
      </p>
      <p className="leading-6 text-amber-50/90">
        Earlier official posts that only said <strong>November 13</strong>, or <strong>November 13 (UTC)</strong>, without a clock—including a later scenery post whose full text still says “Hutuo arrives on November 13 (UTC)!”—are kept and marked as <strong>superseded</strong> by this window. This page does not use the scenery post to overwrite the window, and it does not rewrite a date-only label as Beijing midnight.
        <Cite n={[2, 10]} /> The Version 2.4 label comes from the official Global Dev Letter, <strong>not</strong> from Steam. Steam has published Version 2.4 [Across Autumn Waters] Update Overview (gid <strong>1849192144183182</strong>, 2026-11-12 22:43:09 UTC+8) and Version 2.4 Path Balance Adjustment Announcement (November 13) (gid <strong>1849192144183200</strong>, 2026-11-12 22:46:44 UTC+8).
        <Cite n={5} /> Announcement check only, not an in-game test. As of 2026-11-13, Hutuo is scheduled, not live.
      </p>
      <p id="announced-anniversary" className="leading-6 text-slate-200">
        Reward categories, paid top-up events, and Version 2.4 appearance windows are on{" "}
        <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">/guides/anniversary</Link>.
        Battlefield and Campaign context is on{" "}
        <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link>.{" "}
        <span id="announced-dual-spears">
          Dual Spears officially arrives on <strong>November 26 (UTC)</strong>, with no clock published—that is <strong>not</strong> a November 13 same-day unlock, and it should not be rewritten as Beijing midnight.
          <Cite n={11} />
        </span>{" "}
        NVIDIA DLSS 5 support remains announced for <strong>November 23</strong> (date only), unchanged.
        <Cite n={7} />
      </p>
      <div className="flex flex-wrap gap-3 text-xs font-semibold">
        <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">
          /guides/hutuo
        </Link>
        <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">
          /guides/anniversary
        </Link>
        <Link href="/guides/martial-arts-weapons#dual-spears-announced" className="text-emerald-300 underline underline-offset-4">
          /guides/martial-arts-weapons
        </Link>
        <Link href="/guides/patch-notes#announced-november" className="text-emerald-300 underline underline-offset-4">
          /guides/patch-notes
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl border border-amber-300/30 bg-slate-950/80">
        <table className="min-w-[720px] w-full text-left text-sm text-slate-200">
          <caption className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-amber-200">
            Watch calendar
          </caption>
          <thead className="text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Item</th>
              <th className="px-3 py-2">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {watchRows.map((row) => (
              <tr key={row.key}>
                <td className="px-3 py-3 align-top text-slate-100">{row.date}</td>
                <td className="px-3 py-3 align-top leading-6">{row.item}</td>
                <td className="px-3 py-3 align-top leading-6">{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-semibold text-slate-100">Sources for this pinned module</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs leading-5 text-slate-300">
          {moduleSources.map((source) => (
            <li key={source.id}>
              <a href={source.url} className="text-emerald-300 underline underline-offset-4" target="_blank" rel="noreferrer">
                {source.label}
              </a>
              <span className="text-slate-500"> — {source.published}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
