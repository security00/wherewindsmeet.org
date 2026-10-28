import Link from "next/link";

import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import { qingzhouMountTai } from "@/lib/officialQingzhouMedia";

export function QingzhouDivinecraftPending() {
  return (
    <section className="space-y-4 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">Last checked 2026-10-29</p>
      <h2 className="text-2xl font-bold text-slate-50">Qingzhou: awaiting official English dungeon names — no entries yet</h2>
      <p className="text-sm leading-6 text-slate-200">
        Dev Letter V2.3 Part 1 mentions venturing beneath Mount Tai into a Han Dynasty tomb alongside allies. That line is
        worldbuilding, not a published Divinecraft dungeon title in English. This page will not invent a Qingzhou
        Divinecraft name, and it will not list Jianghu Legacy [Riddled Echoes] (the Fan unlock) as a Divinecraft dungeon.
      </p>
      <p className="text-sm leading-6 text-slate-200">
        When official notes, Journal, or the map UI ship a formal English Divinecraft title, add a normal entry with a
        source and a new Last checked date. Until then, use{" "}
        <Link href="/guides/qingzhou" className="text-emerald-300 underline underline-offset-4">/guides/qingzhou</Link>,{" "}
        <Link href="/guides/penglai" className="text-emerald-300 underline underline-offset-4">/guides/penglai</Link>,{" "}
        <Link href="/guides/mount-tai-blizzard" className="text-emerald-300 underline underline-offset-4">Mount Tai Blizzard</Link>,{" "}
        <Link href="/guides/cast-in-currents" className="text-emerald-300 underline underline-offset-4">Cast in Currents</Link>,{" "}
        <Link href="/guides/spirit-of-the-grove" className="text-emerald-300 underline underline-offset-4">Spirit of the Grove</Link>, and the Qingzhou rows on{" "}
        <Link href="/guides/bosses" className="text-emerald-300 underline underline-offset-4">/guides/bosses</Link>.
      </p>
      <OfficialMediaFigure item={qingzhouMountTai} />
      <p className="text-xs text-slate-400">
        Source:{" "}
        <a href="https://www.wherewindsmeetgame.com/news/official/1009devletter.html" className="text-emerald-300 underline underline-offset-4" target="_blank" rel="noreferrer">
          Dev Letter Part 1
        </a>
        . No formal Qingzhou Divinecraft English name was found in the October 29 search pass.
      </p>
    </section>
  );
}
