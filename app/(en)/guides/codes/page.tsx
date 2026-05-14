import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes May 2026 – Active Rewards",
  description:
    "Updated May 2026 Where Winds Meet codes list with active rewards, disabled leaked exchange codes warning, redemption steps, and expired launch codes.",
  alternates: buildHreflangAlternates("/guides/codes"),
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

const lastChecked = "May 14, 2026";

const liveCodes = [
  {
    code: "QINCHUAN0430",
    label: "Qinchuan update code",
    notes:
      "Reported by code trackers in May 2026 with Echo Jade, Resonating Melody, and Coins. Redeem first because update/event codes can expire without much warning.",
  },
  {
    code: "LIANGZHOUGO",
    label: "Liangzhou follow-up reward",
    notes:
      "Reported as a Liangzhou/Hexi-era code with Echo Jade, an Inner Way Note chest, and Coins. If your server rejects it, move it to your expired list.",
  },
  {
    code: "LIANGZHOU0402",
    label: "Liangzhou April code",
    notes:
      "Reported as an April 2026 Liangzhou code. Good quick check for returning players catching up on older Hexi rewards.",
  },
  {
    code: "MEETINHEXI",
    label: "Hexi expansion code",
    notes:
      "Reported reward bundle includes Echo Jade, Coins, Inner Way Note chests, and Oscillating Jades. Still worth trying on returning accounts.",
  },
  {
    code: "HEXI0306",
    label: "Hexi March code",
    notes:
      "Reported Hexi code for Echo Jade and Coins. Redeem before older expansion campaigns rotate out.",
  },
  {
    code: "GOOSENEWS",
    label: "Goose news reward",
    notes:
      "Reported as a smaller Echo Jade plus Inner Way chest reward. Useful for new accounts that missed launch freebies.",
  },
  {
    code: "DEVLOG2601",
    label: "Developer log code",
    notes:
      "Reported as a dev-log reward. Some communities previously listed expiry windows, so verify in-game before assuming it still works.",
  },
  {
    code: "WWMDEVTALK",
    label: "Dev talk reward",
    notes:
      "Reported as Echo Jade and Coins. Prioritize it with other official/community dev-post codes.",
  },
  {
    code: "WWMGLyoutube",
    label: "Global launch YouTube campaign",
    notes:
      "Older launch campaign code that some May 2026 lists still report as active. Try it after newer Qinchuan/Hexi codes.",
  },
];

export default function CodesPage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg5.webp"
            alt="Where Winds Meet codes background art"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Where Winds Meet <span className="text-ink-gold">Codes May 2026</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
            <p>
              Updated {lastChecked}: this page refreshes the Where Winds Meet codes list for the Qinchuan/Hexi era instead of leaving old launch-only codes at the top. Start with the newest reported codes, then try older launch rewards only if your account has never claimed them.
            </p>
            <p>
              Important: the official news feed also reported that a leaked batch of 30 exchange codes was disabled in early May 2026. If a code from social media fails, it may simply be one of those disabled leak codes rather than a problem with your account.
            </p>
          </div>
        </div>
      </section>

      {/* Live Codes Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Active Codes <span className="text-sm font-normal text-slate-400 ml-2">(reported, checked {lastChecked})</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveCodes.map((entry) => (
            <div
              key={entry.code}
              className="card-jade-token group relative flex flex-col justify-between rounded-2xl p-6 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 bg-emerald-900/60 px-2 py-1 rounded border border-emerald-700/50 shadow-sm shadow-emerald-900/50">
                    Active
                  </span>
                  <span className="text-lg filter drop-shadow-md">🎁</span>
                </div>
                <div>
                  <code className="block text-xl font-mono font-bold text-emerald-50 bg-black/40 p-2 rounded text-center border border-emerald-900/50 group-hover:border-emerald-500/50 transition-colors select-all shadow-inner">
                    {entry.code}
                  </code>
                  <p className="mt-2 text-sm font-medium text-emerald-200/80">
                    {entry.label}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-emerald-100/60 border-t border-emerald-900/30 pt-3">
                {entry.notes}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic">
          * Codes are region-dependent and time-limited. Always check in-game. Leaked May 2026 batches may already be disabled.
        </p>
      </section>

      <section className="rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 text-sm text-amber-50 shadow-lg shadow-amber-950/30">
        <h2 className="text-xl font-bold text-amber-100">May 2026 exchange-code warning</h2>
        <p className="mt-3 leading-relaxed text-amber-50/90">
          The official mobile news feed posted an Exchange Code Announcement on May 3, 2026 saying that a leaked batch of 30 codes had been disabled. That means some very large social-media lists may be noisy. Use this page as a practical checklist: try the most recent Qinchuan/Hexi codes first, then treat failed leaked codes as expired instead of retrying them for days.
        </p>
      </section>

      {/* Distribution Pattern */}
      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          How Codes Work
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">📢 Official Events</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Teased in trailers and live streams. Usually time-limited to the event window (e.g., Launch Week).
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">🔧 Compensation</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Issued after maintenance or bugs. These have generous expiry windows but are one-time use.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">🤝 Creator Partners</h3>
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
              className="card-inactive rounded-2xl p-5"
            >
              <h3 className="text-sm font-bold text-slate-300 mb-1">
                {code.label}
              </h3>
              <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-2">
                {code.status}
              </p>
              <p className="text-xs leading-relaxed text-slate-400">
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
            <h3 className="text-lg font-semibold text-ink-spirit">PC & Mobile</h3>
            <ol className="space-y-3 text-sm text-slate-300">
              <li className="step-manual">Open the <span className="text-slate-100 font-medium">System Menu</span> (Esc).</li>
              <li className="step-manual">Navigate to <span className="text-slate-100 font-medium">Settings {'>'} Account</span>.</li>
              <li className="step-manual">Select <span className="text-slate-100 font-medium">Redeem Code</span>.</li>
              <li className="step-manual">Paste the code and check your in-game mail.</li>
            </ol>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-spirit">PlayStation 5</h3>
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
          New players often see a flood of codes. Don&apos;t panic. Sort them into <span className="text-slate-100">Progression</span> (claim now) and <span className="text-slate-100">Cosmetics</span> (claim later).
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          By approaching rewards with intention, you turn codes into a gentle tailwind rather than a source of FOMO pressure.
        </p>
      </section>
    </article>
  );
}
