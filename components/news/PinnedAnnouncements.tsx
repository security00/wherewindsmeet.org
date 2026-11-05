import Link from "next/link";

import {
  ANNIVERSARY_POST,
  APPEARANCES_1029,
  BATTLE_PASS_POST,
  DLSS_POST,
  HUTUO_POST,
  LAST_VERIFIED,
  LAST_VERIFIED_LABEL,
  PATCH_NOTES_1029,
  PLAYSTATION_HUTUO_POST,
} from "@/lib/globalAnnouncements";

const watchRows = [
  {
    date: "Nov 1, 0:00 UTC+8",
    item: "Appearances: Wraithflame (limited to Feb 1, 2027, 04:59:59 UTC+8); Frost's Glow; Myriad Sounds: Wrought Obsidian / Azure Dragon",
    source: APPEARANCES_1029,
  },
  {
    date: "Nov 8, 0:00 UTC+8",
    item: "Appearances: Lotus Crane set; Mindful Joy Golden Body mystic VFX",
    source: APPEARANCES_1029,
  },
  {
    date: "Nov 13 (UTC date; no clock on the rewards post)",
    item: "Hutuo / 1st anniversary major update. Announced, not live.",
    source: ANNIVERSARY_POST,
  },
  {
    date: "Nov 13, 17:59:59 UTC+8",
    item: "Scarlet Whispers Battle Pass end (adjusted from November 14, 04:59:59)",
    source: PATCH_NOTES_1029,
  },
  {
    date: "Nov 13, 23:00 – Dec 10, 04:59:59 UTC+8",
    item: "Battle Pass outfit Frostbound Edge. Not the free login outfit choice.",
    source: BATTLE_PASS_POST,
  },
  {
    date: "Nov 13, 23:00 – Jan 29, 2027, 04:59:59 UTC+8",
    item: "Battle Pass appearance Willow Breeze (return). Not the free login outfit choice.",
    source: BATTLE_PASS_POST,
  },
  {
    date: "Late November",
    item: "Dual Spears martial art. Not a November 13 unlock.",
    source: PLAYSTATION_HUTUO_POST,
  },
  {
    date: "November 23 (date only)",
    item: "NVIDIA DLSS 5 support announced for PC. No timezone, minute, FPS percentage, or GPU floor in the post.",
    source: DLSS_POST,
  },
];

const moduleSources = [
  HUTUO_POST,
  ANNIVERSARY_POST,
  PLAYSTATION_HUTUO_POST,
  BATTLE_PASS_POST,
  PATCH_NOTES_1029,
  APPEARANCES_1029,
  DLSS_POST,
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
            Next announced major beat: Hutuo, November 13
          </h2>
        </div>
        <time
          dateTime={LAST_VERIFIED}
          className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-100"
        >
          Last verified {LAST_VERIFIED_LABEL}
        </time>
      </div>
      <p className="leading-6 text-amber-50/90">
        Where Winds Meet’s 1st Anniversary major update “Hutuo” is scheduled for November 13. One official
        rewards post labels the launch November 13 (UTC) and does not give a clock time. This page does not
        rewrite that date as Beijing 00:00, and it does not number the update. Announcement check only, not an
        in-game test.
      </p>
      <p id="announced-anniversary" className="leading-6 text-amber-50/90">
        The same celebration names a new Campaign: Hutuo, plus board modes Horse Racing Chess and Jianghu
        Tactics (names only). Reward categories are on the anniversary guide. Dual Spears, called out below,
        are a late-November martial art.
      </p>
      <p id="announced-dual-spears" className="leading-6 text-slate-200">
        Dual Spears: late November on the PlayStation Blog. That is not a confirmed November 13 same-day unlock.
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
              <tr key={row.item}>
                <td className="px-3 py-3 align-top text-slate-100">{row.date}</td>
                <td className="px-3 py-3 align-top leading-6">{row.item}</td>
                <td className="px-3 py-3 align-top">
                  <a href={row.source.url} className="text-emerald-300 underline underline-offset-4" target="_blank" rel="noreferrer">
                    {row.source.label}
                  </a>
                </td>
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
