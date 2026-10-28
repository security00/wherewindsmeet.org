import Link from "next/link";

import { MediaPlaceholder } from "@/components/guides/MediaPlaceholder";

const mirror =
  "https://www.wwmguilds.com/news/2026-10-24-discord-duel-with-brush-and-ink-fight-shoulder-to-shoulder-320844";

export function MysticArtsOct29() {
  return (
    <section className="space-y-6 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
        October 29 · Last checked 2026-10-29
      </p>
      <h2 className="text-2xl font-bold text-slate-50">Mystic skills that opened with the Penglai batch</h2>
      <p className="text-sm leading-6 text-slate-200">
        Official social copy (English wording via a community mirror) schedules both skills for{" "}
        <strong>October 29, 05:00 UTC+8</strong>. Unlock steps, cooldowns, and damage stay off this page.
      </p>

      <article id="inkwash-splendor" className="scroll-mt-24 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
        <h3 className="text-xl font-semibold text-slate-50">Inkwash Splendor</h3>
        <p className="text-sm leading-6 text-slate-300">
          <strong>Status:</strong> Live with the October 29 batch. Official social labels it a <strong>Mystic Skill</strong>.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>
            <strong>In combat:</strong> wield your brush to lunge and unleash flowing combos.
          </li>
          <li>
            <strong>Out of battle:</strong> splash ink to leave custom calligraphy and make your mark on Jianghu.
          </li>
        </ul>
        <p className="text-xs text-slate-400">No cooldowns, ink costs, or damage values are published here. Journal / vendor steps: Pending in-game confirmation.</p>
        <MediaPlaceholder
          slot="MA1"
          alt="Official still for Mystic Skill Inkwash Splendor — brush combat and out-of-battle calligraphy."
          expectation="Pending publisher CDN or official social still. Do not hotlink community-mirror card art."
        />
      </article>

      <article id="dear-sword" className="scroll-mt-24 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
        <h3 className="text-xl font-semibold text-slate-50">Dear Sword</h3>
        <p className="text-sm leading-6 text-slate-300">
          <strong>Status:</strong> Same launch window — October 29, 05:00 UTC+8. Official social labels it a{" "}
          <strong>Mystic Skill</strong>.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>
            <strong>Solo:</strong> build sword intent, then unleash sword waves.
          </li>
          <li>
            <strong>With a companion:</strong> trigger a synchronized dual attack with echoing blades.
          </li>
        </ul>
        <p className="text-xs text-slate-400">Companion rules, intent stacks, and numbers: Pending in-game confirmation.</p>
        <MediaPlaceholder
          slot="MA2"
          alt="Official still for Mystic Skill Dear Sword — solo sword waves or synchronized dual attack."
          expectation="Pending the same official announcement asset set as Inkwash Splendor."
        />
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <h3 className="font-semibold text-slate-50">When do they unlock?</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Official social scheduling: October 29, 05:00 UTC+8. Exact Journal or vendor steps are pending. Context:{" "}
            <Link href="/guides/penglai" className="text-emerald-300 underline underline-offset-4">/guides/penglai</Link> and{" "}
            <Link href="/guides/patch-notes" className="text-emerald-300 underline underline-offset-4">/guides/patch-notes</Link>.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <h3 className="font-semibold text-slate-50">Paths or Mystic Skills?</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Official social labels both as Mystic Skills. Silkbind – Wings stays on{" "}
            <Link href="/guides/martial-arts-weapons" className="text-emerald-300 underline underline-offset-4">martial arts</Link>.
            This page will not post a tier from unverified numbers.
          </p>
        </div>
      </div>
      <p className="text-xs text-slate-400">
        Copy source (not art):{" "}
        <a href={mirror} target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4">
          community mirror of the official social post
        </a>
        . Penglai batch:{" "}
        <a href="https://www.wherewindsmeetgame.com/news/official/1028devletter.html" target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4">
          October 28 Dev Letter
        </a>
        .
      </p>
    </section>
  );
}
