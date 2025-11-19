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
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg5.png"
            alt="Where Winds Meet codes background art"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Where Winds Meet <span className="text-ink-gold">Codes & Rewards</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
            <p>
              This page serves as your one-stop reference for Where Winds Meet
              codes. Instead of scrambling between social feeds, screenshots, and
              expired links, you can check a single structured list that separates
              active and expired codes.
            </p>
            <p>
              The goal is to protect your time and make sure every visit turns into concrete
              progress or a fun cosmetic upgrade.
            </p>
          </div>
        </div>
      </section>

      {/* Live Codes Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Active Codes <span className="text-sm font-normal text-slate-400 ml-2">(Reported)</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveCodes.map((entry) => (
            <div
              key={entry.code}
              className="card-wuxia group relative flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/30"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/50 px-2 py-1 rounded border border-emerald-900">
                    Active
                  </span>
                  <span className="text-lg">🎁</span>
                </div>
                <div>
                  <code className="block text-xl font-mono font-bold text-slate-100 bg-black/30 p-2 rounded text-center border border-slate-800 group-hover:border-emerald-500/50 transition-colors select-all">
                    {entry.code}
                  </code>
                  <p className="mt-2 text-sm font-medium text-ink-gold">
                    {entry.label}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-400 border-t border-slate-800/50 pt-3">
                {entry.notes}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic">
          * Codes are region-dependent and time-limited. Always check in-game.
        </p>
      </section>

      {/* Distribution Pattern */}
      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          How Codes Work
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-100">📢 Official Events</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Teased in trailers and live streams. Usually time-limited to the event window (e.g., Launch Week).
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-100">🔧 Compensation</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Issued after maintenance or bugs. These have generous expiry windows but are one-time use.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-100">🤝 Creator Partners</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Unique codes shared by streamers. Often grant exclusive cosmetics or fun social items.
            </p>
          </div>
        </div>
      </section>

      {/* Example Rewards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Reward Types
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {exampleCodes.map((code) => (
            <div
              key={code.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition-colors hover:bg-slate-900/60"
            >
              <h3 className="text-sm font-bold text-slate-100 mb-1">
                {code.label}
              </h3>
              <p className="text-[10px] uppercase tracking-wide text-emerald-400 mb-2">
                {code.status}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">
                {code.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Redemption Guide */}
      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          How to Redeem
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-gold">PC & Mobile</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300 marker:text-emerald-500">
              <li>Open the <span className="text-slate-100 font-medium">Paimon Menu</span> (Esc).</li>
              <li>Navigate to <span className="text-slate-100 font-medium">Settings {'>'} Account</span>.</li>
              <li>Select <span className="text-slate-100 font-medium">Redeem Code</span>.</li>
              <li>Paste the code and check your in-game mail.</li>
            </ol>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-gold">PlayStation 5</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Most codes can be redeemed in-game via the same menu. However, some platform-exclusive packs must be claimed via the <span className="text-slate-100 font-medium">PlayStation Store</span> interface.
            </p>
            <div className="rounded bg-slate-950/50 p-3 text-xs text-slate-400 border border-slate-800">
              Tip: Use the PlayStation App on your phone to type codes faster!
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="card-wuxia rounded-3xl p-8">
        <h2 className="text-xl font-bold text-slate-100 mb-4">
          Redemption Strategy
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          New players often see a flood of codes. Don't panic. Sort them into <span className="text-slate-100">Progression</span> (claim now) and <span className="text-slate-100">Cosmetics</span> (claim later).
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          By approaching rewards with intention, you turn codes into a gentle tailwind rather than a source of FOMO pressure.
        </p>
      </section>
    </article>
  );
}
