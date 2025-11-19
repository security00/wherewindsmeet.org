import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes, Rewards & Redeem Guide",
  description:
    "Track active and expired Where Winds Meet codes, learn how to redeem them on PC and PS5, and prioritize the best rewards for new and returning players.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/codes",
  },
};

const exampleCodes = [
  {
    label: "Launch celebration bundle",
    status: "Example active code",
    notes:
      "A typical Where Winds Meet code during launch might include cosmetics, temporary boosts, and a small stash of upgrade materials.",
  },
  {
    label: "Content creator reward",
    status: "Example limited code",
    notes:
      "Partnered campaigns often share short-lived Where Winds Meet codes that reward exclusive visual items or fun social toys.",
  },
  {
    label: "Apology or hotfix gift",
    status: "Example compensation code",
    notes:
      "When servers struggle or major bugs appear, developers sometimes distribute Where Winds Meet codes that grant currencies or consumables.",
  },
];

const liveCodes = [
  {
    code: "WWMGLtiktok",
    label: "Global launch TikTok campaign",
    notes:
      "Shared through launch social campaigns; typically grants a small bundle of cosmetics and progression items. Listed in Traditional Chinese launch coverage on 2025-11-17, so treat it as time-limited.",
  },
  {
    code: "WWMGLyoutube",
    label: "Global launch YouTube campaign",
    notes:
      "Companion code to the TikTok promotion. Rewards are similar in scale and also time-limited, so redeem it soon if it is still active.",
  },
  {
    code: "WWMGO1114",
    label: "Launch date celebration code",
    notes:
      "Celebrates the 2025-11-14 global launch window. If the game reports that the code has expired, it simply means the event window has closed.",
  },
  {
    code: "WWM251115",
    label: "Early launch event code",
    notes:
      "Another early launch-period gift code surfaced in Traditional Chinese community guides. Exact rewards may vary by region, but it generally offers helpful early-game materials.",
  },
  {
    code: "WWMGO1115",
    label: "Follow-up launch gift",
    notes:
      "Issued shortly after the main launch date. As with other codes, it is one-time per account and subject to expiration rules.",
  },
];

export default function CodesPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg5.png"
            alt="Where Winds Meet codes background art"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet codes, rewards tracking, and redeem tips.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            This page serves as your one-stop reference for Where Winds Meet
            codes. Instead of scrambling between social feeds, screenshots, and
            expired links, you can check a single structured list that separates
            active and expired Where Winds Meet codes, tracks their usual reward
            types, and explains how to redeem them on each platform. The goal is
            to protect your time and make sure every visit turns into concrete
            progress or a fun cosmetic upgrade.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            A good Where Winds Meet codes guide does more than shout code
            strings at you. It clarifies when new players should redeem them,
            which rewards matter most if you only log in occasionally, and how
            long you can safely wait before an event ends. Throughout this page,
            you will see practical notes that blend launch surge excitement with
            a calm, long-term view. You will never be told to sacrifice sleep or
            family time for fear of missing a minor boost.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Because Where Winds Meet codes change over time, the emphasis is on
            teaching patterns. Once you understand how official announcements,
            content creator campaigns, and in-game notices usually roll out
            codes, you can quickly judge which new Where Winds Meet codes
            deserve your attention. That way, even if you visit this site less
            frequently, you will still feel confident about the choices you make
            with your limited playtime.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          How Where Winds Meet codes are typically distributed.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Most large events use a familiar rhythm. First, official channels
          tease upcoming celebrations or collaborations. Shortly afterward,
          Where Winds Meet codes appear in trailers, live streams, or pinned
          posts, often with regional timing differences. Then, as hype peaks,
          partner creators and community streams share additional Where Winds
          Meet codes that stack on top of the official rewards. Understanding
          this rhythm makes it easier to plan your logins and avoid burnout.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Another common pattern is compensation codes when the game runs into
          trouble. If servers struggle during a highly anticipated patch, or a
          bug disrupts progress, developers may issue global Where Winds Meet
          codes that grant currencies, experience boosts, or rare crafting
          materials. These codes usually have generous expiration windows but
          still require an intentional visit to the redeem menu, so keeping an
          eye on news and this page&apos;s summaries helps you stay current.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Finally, some Where Winds Meet codes are purely for fun: playful
          cosmetics, emotes, or social gestures that do not directly affect
          power. Treat these as opportunities to express your personality in
          Jianghu. For many players, a memorable outfit or unique mount makes
          sessions feel special long after the underlying stats have become
          irrelevant. That is why this guide notes cosmetic rewards clearly, so
          collectors know which codes to prioritize.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Example Where Winds Meet code types and reward value.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {exampleCodes.map((code) => (
            <div
              key={code.label}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {code.label}
              </h3>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-emerald-300">
                {code.status}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {code.notes}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          While the specific strings for Where Winds Meet codes will change, the
          categories above tend to persist. Launch bundles usually offer the
          biggest spike of value, especially for new or returning players. Hotfix
          rewards demonstrate goodwill and help smooth over rough patches.
          Creator or event codes often celebrate community moments. By
          recognizing these categories, you can decide at a glance which new
          Where Winds Meet codes align with your priorities.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Sample currently reported Where Winds Meet codes.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Traditional Chinese launch guides have already catalogued several
          Where Winds Meet gift codes. The entries below come from that coverage
          as of <span className="font-semibold">2025-11-17</span>. They are{" "}
          <span className="font-semibold">time-limited and region-dependent</span>
          , so treat them as references rather than guarantees—if the game says
          a code is invalid or expired, you have simply missed the window.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {liveCodes.map((entry) => (
            <div
              key={entry.code}
              className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  One-time gift code
                </p>
                <p className="font-mono text-xs text-slate-50">
                  {entry.code}
                </p>
                <p className="text-[11px] font-medium text-slate-200">
                  {entry.label}
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {entry.notes}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
          These codes were originally documented in Traditional Chinese community
          coverage and mirrored here in English for convenience. Always double-check
          the in-game redeem screen for final validity, and never purchase codes from
          unofficial sellers—legitimate Where Winds Meet codes are distributed for
          free through official events and partners.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Redeeming Where Winds Meet codes on PC and PS5.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Redemption flows can differ slightly by platform, but the core idea is
          the same: you take a Where Winds Meet code string, paste it into an
          official input field, confirm, and then claim the resulting rewards
          from in-game mail or a dedicated menu. This section walks through a
          typical experience so you know what to expect, even if interface
          details change over time with updates.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Traditional Chinese launch guides describe the in-game flow like this:
          open the menu in the{" "}
          <span className="font-semibold">top-right corner</span>, go to{" "}
          <span className="font-semibold">
            Settings &gt; Other &gt; Exchange Code
          </span>
          , enter the string, and confirm. Most regions follow a very similar
          pattern.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          On PC, some Where Winds Meet codes are also redeemed via an official
          website or launcher account page. After logging in with your game
          account, you paste the code carefully, double-check capitalization if
          the site is strict, and submit. Once the system accepts it, you
          usually receive a confirmation message and can switch back to the
          client. Within a few minutes, rewards appear in mail or a notification
          panel ready to claim on your character.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          On PS5, Where Winds Meet codes sometimes route through platform-level
          redemption systems, while others still use in-game menus. Because
          typing long strings on a controller can be tedious, this guide
          recommends keeping a screenshot or note handy so you can copy the code
          accurately. If a code fails, do not panic; many Where Winds Meet codes
          are region specific or time limited. Simply cross-check the details
          listed beside each entry on this page before trying again.
        </p>
        <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
          If redemption fails repeatedly, the most common reasons reported in
          Traditional Chinese guides are simple: the code has expired, there is
          a stray space copied at the end, the case does not match, or you have
          already redeemed it on that account. Where Winds Meet gift codes are{" "}
          <span className="font-semibold">one-time per account</span>—you
          cannot redeem the same string twice.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Planning your reward strategy with Where Winds Meet codes.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The simplest approach is to redeem every Where Winds Meet code as soon
          as you see it, but that is not always ideal. Some boosts are most
          valuable when stacked with specific activities, such as long farming
          sessions, event runs, or coordinated co-op nights. When possible,
          glance at the reward description and decide whether you want to claim
          it immediately or wait until you have time for a focused session that
          fully uses the benefits.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          New and returning players will often see a flood of Where Winds Meet
          codes at once. Instead of rushing, sort them mentally into cosmetics,
          progression, and convenience. Claim progression codes early if they
          help unlock key systems or reduce frustrating bottlenecks. Save
          convenience boosts for days when you can play longer. Cosmetically
          focused Where Winds Meet codes can usually be redeemed whenever you
          are in the mood for a fresh look or want to mark a special milestone.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          By approaching rewards with intention, you turn Where Winds Meet codes
          into a gentle tailwind rather than a source of pressure. This page is
          here to keep track of changing details so you do not have to. Check
          in before big events, skim the latest notes, and then dive back into
          Jianghu knowing you are making the most of the generosity surrounding
          Where Winds Meet without sacrificing your own pace.
        </p>
      </section>
    </article>
  );
}
