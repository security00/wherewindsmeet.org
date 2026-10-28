import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { MediaPlaceholder } from "@/components/guides/MediaPlaceholder";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { friendsFromAfarBanner, friendsFromAfarCover } from "@/lib/officialQingzhouMedia";

const pageUrl = "https://wherewindsmeet.org/guides/warehouse";

export const metadata: Metadata = {
  title: "Where Winds Meet Warehouse & Mount Sack Storage (Lv.20)",
  description:
    "How to unlock the Warehouse and Mount Sack storage in Where Winds Meet Version 2.3: Level 20 Warehouse tabs, Echo Jade / Coin expansion, Mount Prowess sack slots—not the Zhao Feiyan warehouse key quest.",
  alternates: buildHreflangAlternates("/guides/warehouse"),
  openGraph: {
    title: "Where Winds Meet Warehouse & Mount Sack Storage (Lv.20)",
    description: "Level 20 Warehouse and Mount Sack from the October 15 Version 2.3 notes. Not the Zhao Feiyan key quest.",
    url: pageUrl,
    type: "article",
    images: [{ url: friendsFromAfarBanner.src, alt: friendsFromAfarBanner.alt }],
  },
};

export default function WarehouseGuidePage() {
  return (
    <article className="space-y-10">
      <HomeHubBacklink language="en" />
      <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/85 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">Guides · QoL · Version 2.3 Friends From Afar</p>
        <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-4xl">
          How do you unlock the Warehouse and Mount Sack storage in Where Winds Meet (Level 20)?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Version <strong>2.3 Friends From Afar</strong> (live update <strong>October 15, 2026</strong>) launched the{" "}
          <strong>Warehouse</strong> feature and the <strong>Mount Sack</strong> system. Official October 15 patch notes:
          Warehouse unlocks at <strong>Level 20</strong>. Mount Sack shares the same core storage functions and expands
          with <strong>Mount Prowess</strong> (plus a Legendary Mount bonus).
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          This is account storage. It is <strong>not</strong> the Kaifeng story often searched as “Zhao Feiyan warehouse”
          or “warehouse key.”
        </p>
        <p className="mt-3 text-xs text-slate-500">Last checked 2026-10-29 (Asia/Shanghai) · Unofficial fan hub. Echo Jade and Coin prices are not printed in the notes we cite.</p>
      </section>

      <OfficialMediaFigure item={friendsFromAfarBanner} priority aspectClassName="aspect-[16/9]" />

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Warehouse (official rules)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li><strong>Unlock:</strong> Level 20.</li>
          <li><strong>What you can store:</strong> inventory tabs Common, Gear, and Quick Use.</li>
          <li><strong>Tabs:</strong> the first tab unlocks automatically. Spend Echo Jade for more tabs. Maximum 3 tabs. The Echo Jade price is Pending in-game confirmation.</li>
          <li><strong>Slots:</strong> spend Coin for more slots. Maximum 30 slots per tab. The Coin price is Pending in-game confirmation.</li>
          <li><strong>Bulk:</strong> deposit, withdrawal, and moving items across Warehouse tabs.</li>
        </ul>
        <p className="text-sm leading-6 text-slate-400">
          The same notes add Social, Build, and Warehouse tabs in Settings. The exact click path is Pending in-game confirmation.
        </p>
        <MediaPlaceholder
          slot="Warehouse UI"
          alt="Warehouse tabs and slots as described in the official Version 2.3 notes (Level 20)."
          expectation="Pending an official patch-gallery or in-client Warehouse screenshot. Do not overlay invented Echo Jade prices."
        />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Mount Sack (official rules)</h2>
        <p className="text-sm leading-6 text-slate-300">
          Official framing: your mount doubles as a portable sack. Core functions are identical to the Warehouse.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Different Mount Prowess tiers grant Mount Sack slots.</li>
          <li>Once Mount Prowess reaches 6,000, gain +6 slots for every +1,000 Prowess.</li>
          <li>A Legendary Mount grants +12 additional slots.</li>
          <li>The sack defaults to Warehouse Tab 1 and can be reassigned.</li>
        </ul>
        <OfficialMediaFigure item={friendsFromAfarCover} />
        <p className="text-xs text-slate-400">
          Version 2.3 overview art for context. It is not a Mount Sack UI screenshot.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Checklist</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Reach character Level 20.</li>
          <li>Open Warehouse (Settings → Warehouse tab per the notes—verify in-client).</li>
          <li>Store Common / Gear / Quick Use items. Expand only up to the published caps.</li>
          <li>Grow Mount Prowess, and a Legendary Mount if you have one, for sack slots.</li>
          <li>Zhao Laoliu’s General Store (October 29 Qingzhou shop) is unrelated to this unlock. See <Link href="/guides/qingzhou" className="text-emerald-300 underline underline-offset-4">/guides/qingzhou</Link>.</li>
        </ol>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Is this the Zhao Feiyan warehouse / warehouse key quest?", "No. Those searches usually mean a Kaifeng story interaction. This page covers only the Version 2.3 Level 20 Warehouse and Mount Sack."],
          ["What level unlocks Warehouse?", "Level 20 (official)."],
          ["How many tabs and slots?", "Up to 3 tabs and 30 slots per tab. The first tab is free. Extra tabs cost Echo Jade and extra slots cost Coin. Amounts are not printed in the notes we cite."],
          ["When did this ship?", "With Version 2.3 maintenance on October 15, 2026, 05:00–12:00 UTC+8."],
        ].map(([q, a]) => (
          <div key={q} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h2 className="font-semibold text-slate-50">{q}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{a}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-slate-400">
        <Link href="/guides/patch-notes" className="text-emerald-300 underline underline-offset-4">Patch notes</Link>
        {" · "}
        <Link href="/guides/penglai" className="text-emerald-300 underline underline-offset-4">Penglai (October 29)</Link>
      </p>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-200">Sources</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/FriendsFromAfarPatchNotes.html" target="_blank" rel="noreferrer">
              October 15 Version 2.3 patch notes — Warehouse and Mount Sack
            </a>
          </li>
          <li>
            <a className="text-emerald-300 underline underline-offset-4" href="https://www.wherewindsmeetgame.com/news/official/1029patchnotes.html" target="_blank" rel="noreferrer">
              October 29 notes (Zhao Laoliu shop, not the Warehouse unlock)
            </a>
          </li>
        </ul>
        <p className="mt-4 text-xs">Unofficial fan hub. Not affiliated with NetEase / Everstone.</p>
      </section>
    </article>
  );
}
