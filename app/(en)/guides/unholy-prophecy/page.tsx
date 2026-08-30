import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import LiteMp4Embed from "@/components/LiteMp4Embed";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const game8MediaBase = "/guides/unholy-prophecy/game8";
const game8Source = "https://game8.co/games/Where-Winds-Meet/archives/569548";

export const metadata: Metadata = {
  title: "An Unholy Prophecy Walkthrough – Where Winds Meet (WWM)",
  description:
    "Step-by-step An Unholy Prophecy guide: light rooftop braziers, solve the Meridian Touch bell/door puzzle, clear spike traps, beat Shi Zhen, and fix common stuck steps.",
  alternates: buildHreflangAlternates("/guides/unholy-prophecy"),
  openGraph: {
    title: "An Unholy Prophecy Walkthrough – Where Winds Meet (WWM)",
    description:
      "Full An Unholy Prophecy walkthrough: start in Jadewood Court, light rooftop braziers, use Meridian Touch, clear spike traps, defeat Shi Zhen, and unstick common bugged steps.",
    url: `${baseUrl}/guides/unholy-prophecy`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/background/bg4.webp"),
        width: 1400,
        height: 788,
        alt: "Where Winds Meet guide background artwork",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "An Unholy Prophecy Walkthrough – Where Winds Meet (WWM)",
    description:
      "TL;DR and fixes for An Unholy Prophecy: braziers, Meridian Touch, spike hall, and the Shi Zhen boss fight.",
    images: [cdn("/background/bg4.webp")],
  },
};

const quickFacts = [
  { label: "Region", value: "Kaifeng — Martial Temple (Jadewood Court)", icon: "🧭" },
  { label: "Quest type", value: "Jianghu Legacy 07 side story", icon: "📜" },
  { label: "Unlock trigger", value: "Speak to the Mysterious Painter inside the temple", icon: "🗣️" },
  { label: "Core beats", value: "Rooftop climb → fire arrow braziers → emote → spike hall → boss", icon: "⚔️" },
  { label: "Required tools", value: "Fire arrows + Meridian Touch to open sealed doors", icon: "🔥" },
  { label: "Run time", value: "About 15–20 minutes if you know the route", icon: "⏱️" },
];

const fastRoute = [
  "Speak with the Mysterious Painter at the Martial Temple in Jadewood Court to flag the quest.",
  "Find the entrance on the temple's western eaves and climb up.",
  "Shoot the hanging braziers with fire arrows along the rooftops.",
  "Perform the 'An Unholy Prophecy' emote on the rooftop platform.",
  "Enter the hallway opposite the barred area; slip past or clear guards.",
  "Strike the bell and use Meridian Touch on the knocker to open the way.",
  "Clear or evade the arsenal hall guards, then choose either the left or right wing.",
  "Retrieve the long weapon from the left wing.",
  "Retrieve the short weapon from the right wing.",
  "Enter the revealed door and venture deeper.",
  "Enter the boss arena and prep for the fight.",
  "Defeat Shi Zhen and his minions, focusing adds/banners first.",
  "Meet the Mysterious Painter again to conclude the quest.",
];

export type WalkthroughStep = {
  title: string;
  text: string;
  media?: readonly WalkthroughMedia[];
};

type WalkthroughMedia =
  | { type: "image"; file: string; alt: string }
  | { type: "video"; file: string; poster: string; label: string };

const image = (file: string, alt: string): WalkthroughMedia => ({ type: "image", file, alt });
const video = (file: string, poster: string, label: string): WalkthroughMedia => ({
  type: "video",
  file,
  poster,
  label,
});

const walkthrough: WalkthroughStep[] = [
  {
    title: "Speak with the Mysterious Painter",
    text: "Travel to the Martial Temple in Jadewood Court (Kaifeng) and talk to the Mysterious Painter to start An Unholy Prophecy, marked as Jianghu Legacy 07.",
    media: [image("09e38cc673e78b1672132d3572098067.png", "Speak with the Mysterious Painter inside Martial Temple")],
  },
  {
    title: "Find the western eaves entrance",
    text: "Follow the quest markers up the Martial Temple's western eaves and onto the rooftops to reach the quest path.",
    media: [image("f96b6f737b455cf08d82d02e120f0205.png", "Climb the Martial Temple rooftop route")],
  },
  {
    title: "Shoot the hanging braziers",
    text: "Equip fire arrows and light all three hanging braziers on the rooftop route. Regular arrows won't count here.",
    media: [
      video(
        "3662de73207315d3e2b3483081826783.mp4",
        "3662de73207315d3e2b3483081826783.jpg",
        "Follow the rooftop marker and light the braziers",
      ),
    ],
  },
  {
    title: "Perform the quest emote",
    text: "After lighting the braziers, open the Puzzle tab (F2) and perform the 'An Unholy Prophecy' emote on the rooftop platform.",
    media: [
      video(
        "27e4c791d5143760bdb150b7758187d7.mp4",
        "27e4c791d5143760bdb150b7758187d7.jpg",
        "Platform approach and An Unholy Prophecy emote trigger",
      ),
    ],
  },
  {
    title: "Enter the hallway opposite the barred area",
    text: "Drop down inside and take the hallway opposite the barred section. Sneak or fight as you move forward.",
    media: [image("37d7a9d5f22c4ffafeacb6bcd2697a44.png", "Enter the temple interior and guarded halls")],
  },
  {
    title: "Strike the bell and use Meridian Touch",
    text: "Interact with the bell/knocker and use Meridian Touch to open the way forward.",
    media: [
      video(
        "31c4cd8070b9e6f5c228f994d78d39cf.mp4",
        "31c4cd8070b9e6f5c228f994d78d39cf.jpg",
        "Jade bell and knocker puzzle with Meridian Touch",
      ),
    ],
  },
  {
    title: "Clear the arsenal hall and choose a wing",
    text: "Push through the arsenal hall opposite the barred section, clearing or evading guards. From the central hall, choose the left or right wing to gather both weapons.",
    media: [
      image("56962bba66e1353c445a3ce12029c611.png", "Grand Arsenal Hall route"),
      image("0aeff7a108bf93d78abfbced080bc019.png", "Choose either wing from the central arsenal hall"),
    ],
  },
  {
    title: "Retrieve the long weapon (left wing)",
    text: "Go left first and pick up the long weapon to satisfy the statue's requirement.",
    media: [
      image("be105baf134b6032d8f23f4b568795a9.png", "Stairs before the left wing"),
      video("726a2844c6087d8f974afa1be19d5fbf.mp4", "726a2844c6087d8f974afa1be19d5fbf.jpg", "Enter the hall with two doors"),
      video("f933aa2d44cc82981aa6ea2c1c97565b.mp4", "f933aa2d44cc82981aa6ea2c1c97565b.jpg", "Pull the lever and advance on the left side"),
      video("85f0ed1a35679cf702db0f8da7e869be.mp4", "85f0ed1a35679cf702db0f8da7e869be.jpg", "Interact with the jade node"),
      video("e84b11e5ee81ad54656b3aef06a414df.mp4", "e84b11e5ee81ad54656b3aef06a414df.jpg", "Retrieve the long weapon"),
      image("14633ac62c24cf256da429096922bd2b.png", "Obtain the long weapon"),
      image("a6fcfadddcc593de1afa69fef03facd1.png", "Spike-pit section on the left-wing route"),
      image("9063c1e4f9503467bec0866d8aa47678.png", "Additional left-wing route detail"),
    ],
  },
  {
    title: "Retrieve the short weapon (right wing)",
    text: "Head to the right wing and collect the short weapon so both slots are filled.",
    media: [
      image("307d66a8d144cff4e0caa3772b10c0c7.png", "Right-wing weapon chest"),
      video("cf3efe428140415bb06cba02dc1ed0dc.mp4", "cf3efe428140415bb06cba02dc1ed0dc.jpg", "Right-wing progression"),
      video("27f2e32e3d1be0d6b75afec9c36307d4.mp4", "27f2e32e3d1be0d6b75afec9c36307d4.jpg", "Narrow corridor encounter"),
      image("f02bf4a4c3348c91a4d1a9ee2c7c10c9.png", "Right-wing passage detail"),
      image("a9ed74b69494bbe8f81bad489dd041d2.png", "Final right-wing route"),
      image("a387a2def1d9ba5a646840901bf91382.png", "Short weapon returned to its slot"),
    ],
  },
  {
    title: "Enter the revealed door",
    text: "With both weapons placed, proceed through the newly opened door and continue deeper.",
    media: [image("9f122b59da74824e9f288b723d9108f6.png", "Path revealed after returning both weapons")],
  },
  {
    title: "Enter the boss arena",
    text: "Head into the final chamber and get ready for Shi Zhen before crossing into the boss arena.",
    media: [
      video(
        "f73ac50bd768174d224cebcc24e0f2e8.mp4",
        "f73ac50bd768174d224cebcc24e0f2e8.jpg",
        "Shi Zhen boss-arena approach",
      ),
    ],
  },
  {
    title: "Defeat Shi Zhen and minions",
    text: "Enter the final chamber and fight Shi Zhen with his helpers. Drop the banner carriers first to reduce pressure, then finish the boss.",
    media: [image("3d7598fbc5a586d66d477e6807b5d655.png", "Shi Zhen and minions boss fight")],
  },
  {
    title: "Meet the Mysterious Painter again",
    text: "After the fight and dialogue, return to the Mysterious Painter to complete the quest and collect rewards.",
    media: [image("fc5a46957dffe3e077df5d4219f6cf18.png", "Speak with the Mysterious Painter again")],
  },
];

const stuckFixes = [
  "Fire arrows not lighting braziers: Equip fire arrows specifically—standard arrows do nothing. Craft or buy a few extras before climbing.",
  "Can't find the Mysterious Painter: He's inside the Martial Temple at Jadewood Court. Swap channels or rest until he spawns.",
  "Spike trap hallway is brutal: Observe the spike rhythm, move one segment at a time, and heal up first. There is no timer, so patience works.",
  "Doors stay locked: The interaction only appears with Meridian Touch equipped. Other skills won't open the seals.",
  "Missing weapon hand-in: Pick up weapons from both the left and right wings. If you dismantled them earlier, re-enter or change channel to try to respawn the racks before the statue prompt.",
  "Guards hit too hard: Sprint past most patrols by following quest markers. You only need to fight in the final chamber.",
  "Quest didn't advance after braziers: Return to the rooftop platform and play the 'An Unholy Prophecy' emote from the Puzzle tab (F2).",
];

const faq = [
  {
    q: "Where do I start An Unholy Prophecy in Where Winds Meet?",
    a: "Go to the Martial Temple in Jadewood Court (Kaifeng) and speak with the Mysterious Painter to unlock Jianghu Legacy 07.",
  },
  {
    q: "What do I need to bring for An Unholy Prophecy?",
    a: "Fire arrows are mandatory for the braziers and Meridian Touch is required for the sealed doors. A solid combat setup helps for the Shi Zhen fight.",
  },
  {
    q: "How do I get fire arrows for this quest?",
    a: "Buy or craft fire arrows in town. Carry at least three before stepping onto the rooftops, and a spare or two in case you miss.",
  },
  {
    q: "Spike hall keeps killing me—any shortcut?",
    a: "There's no shortcut. Watch the spike rhythm, move one segment at a time, and heal up first. If latency spikes, lower graphics and retry.",
  },
  {
    q: "Quest stalled after vines/traps—what fixes it?",
    a: "Use fire on the vines at the trap, ensure Meridian Touch is equipped on the knocker, then swap channel if prompts fail to appear.",
  },
  {
    q: "Where is the 'An Unholy Prophecy' emote?",
    a: "Open the Puzzle tab (F2) and look for the emote with the same name. Use it on the rooftop platform after all three braziers are lit.",
  },
  {
    q: "Can I skip the spike trap corridor?",
    a: "No. You must pass through it, but there's no timer. Wait for the safe timing and move in short bursts.",
  },
  {
    q: "Is Meridian Touch required to complete the quest?",
    a: "Yes. The locked doors won't open without Meridian Touch equipped, so learn and slot it before entering.",
  },
  {
    q: "What rewards do I get for completing An Unholy Prophecy?",
    a: "Reported rewards include the Fame and Fortune Hanging Scroll, Custom Chest x5, Medicinal Tales, Lv. 3 Ebon Iron x4, Echo Jade x30, Kaifeng Exploration x50, 100 Enlightenment Points, plus 20,000 Character EXP and 20,000 Coins.",
  },
  {
    q: "How long does the An Unholy Prophecy quest take to complete?",
    a: "About 15–20 minutes with the route memorized. First attempts can stretch to 20–30 minutes, mainly because of the spike hallway.",
  },
  {
    q: "Related quests if I enjoyed this one?",
    a: "Try Woven with Malice (Lost Chapter) and One Leaf One Life. For future changes, watch the roadmap on the news page.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${baseUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${baseUrl}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "An Unholy Prophecy",
      item: `${baseUrl}/guides/unholy-prophecy`,
    },
  ],
};

export default function UnholyProphecyPage() {
  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-purple-900/30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-200">
              Jianghu Legacy 07
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Updated Jan 2025 · TL;DR below
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Where Winds Meet An Unholy Prophecy quest walkthrough
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              Rewritten An Unholy Prophecy guide for Where Winds Meet: start at the Martial Temple in Jadewood Court,
              light all rooftop braziers with fire arrows, use Meridian Touch to get through sealed doors, cross the spike hallway,
              and beat Shi Zhen. Every step is spelled out so players searching “An Unholy Prophecy Where Winds Meet” can finish without stalls.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR: Fire braziers → rooftop emote → Meridian Touch bell/door → spike hall → Shi Zhen (focus adds/banners).</li>
              <li>• Common fixes: set time correctly, use Meridian Touch on the knocker, burn trap vines with fire; if stuck, swap channel.</li>
              <li>• Related quests: One Leaf One Life · Woven with Malice · Roadmap/next update for future tweaks.</li>
            </ul>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-purple-400/40">
                Fire arrows required
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-cyan-400/30">
                Meridian Touch needed
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">
                13 quest steps
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                ← Back to Guides
              </Link>
              <Link
                href="/news#roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-emerald-300/60"
              >
                📅 Roadmap / next update
              </Link>
              <Link
                href="/guides/woven-with-malice"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100 transition hover:border-sky-300/80 hover:text-sky-50"
              >
                🧶 Woven with Malice
              </Link>
              <Link
                href="/guides/one-leaf-one-life"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                🍂 One Leaf, One Life
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-inner shadow-slate-900/60">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-200">Quick facts</h2>
            <div className="mt-4 grid gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                >
                  <span className="text-lg">{fact.icon}</span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">{fact.label}</div>
                    <div className="text-sm text-slate-100">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <figure className="mt-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
              <div className="relative aspect-video">
                <CdnImage
                  src={`${game8MediaBase}/b6847fd4b9fd993041db58e258ecd4c9.png`}
                  alt="An Unholy Prophecy start location at Martial Temple, Jadewood Court"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority={false}
                />
              </div>
              <figcaption className="p-3 text-xs leading-5 text-slate-300">
                Start-location reference from the authorized Game8 walkthrough; verify the current quest marker in your client.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          What this An Unholy Prophecy quest guide covers
        </h2>
        <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <p className="text-base leading-relaxed text-slate-200">
            An Unholy Prophecy layers traversal, puzzles, and a boss fight into one Jianghu Legacy. This guide walks all 13
            objectives in order so you know when to use fire arrows, when to slot Meridian Touch, and how to clear the spike hall
            without wasting tries.
          </p>
          <p className="text-base leading-relaxed text-slate-200">
            If you searched &quot;An Unholy Prophecy where winds meet&quot; after getting stuck at the traps or the door seals, follow
            the breakdown below. Each section calls out the exact mechanic—braziers, emote timing, Meridian Touch, and the Shi
            Zhen fight—so you don&apos;t miss a trigger.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Fire arrow mechanics</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Only fire arrows count for the three rooftop braziers—normal arrows won&apos;t trigger them, so bring extras.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Puzzle solving</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              The sealed doors require Meridian Touch. The emote trigger lives in the Puzzle tab (F2) and must be used after the braziers.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Combat & Traps</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Pace the spike hall instead of rushing, grab both weapon caches, then focus adds before finishing Shi Zhen.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Fast route (TL;DR)
          </h2>
          <Link
            href="/guides"
            className="text-sm text-purple-300 underline underline-offset-4 hover:text-purple-200"
          >
            Back to Guides
          </Link>
        </div>
        <ol className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {fastRoute.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-200 ring-1 ring-purple-400/40">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-slate-400">
          If you landed here from searches like &quot;An Unholy Prophecy where winds meet,&quot; save this TL;DR to jump back to any step quickly.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Full walkthrough with details
        </h2>
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm leading-relaxed text-emerald-50">
          <p>
            Site owner confirmed reuse authorization on August 29, 2026 for the locally hosted Game8 walkthrough screenshots and clips. Videos remain click-to-load so the initial page does not download every MP4.
          </p>
          <a
            href={game8Source}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex font-semibold text-emerald-200 underline underline-offset-4 hover:text-emerald-100"
          >
            Open the original Game8 An Unholy Prophecy walkthrough ↗
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {walkthrough.map((step, idx) => (
            <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200 ring-1 ring-purple-400/40">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{step.text}</p>
                </div>
              </div>
              {step.media?.length ? (
                <div className="mt-5 grid gap-4">
                  {step.media.map((item, mediaIndex) => {
                    const mediaKey = `${step.title}-${item.file}`;
                    return (
                      <figure key={mediaKey} className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                        <figcaption className="mb-2 text-[11px] leading-5 text-slate-400">
                          {item.type === "image" ? item.alt : item.label}
                          {step.media && step.media.length > 1 ? ` · ${mediaIndex + 1}/${step.media.length}` : ""}
                        </figcaption>
                        {item.type === "image" ? (
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-950">
                            <CdnImage
                              src={`${game8MediaBase}/${item.file}`}
                              alt={item.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 560px"
                              priority={false}
                            />
                          </div>
                        ) : (
                          <LiteMp4Embed
                            src={`${game8MediaBase}/${item.file}`}
                            poster={`${game8MediaBase}/${item.poster}`}
                            title={item.label}
                            analytics={{
                              eventName: "guide_clip_play",
                              params: { guide: "unholy-prophecy", step: idx + 1 },
                            }}
                          />
                        )}
                      </figure>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Stuck? Try these fixes</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {stuckFixes.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60"
            >
              <div className="text-sm font-semibold text-purple-200">Q. {item.q}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-200">A. {item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Video guide
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-slate-200">
            Prefer to watch the route? This video shows the same braziers, emote trigger, spike hall timing, and boss finish:
          </p>
          <LiteYouTubeEmbed
            videoId="3yLD1u_M5RY"
            title="An Unholy Prophecy Quest Guide Video"
            poster="/background/bg4.webp"
            analytics={{ eventName: "guide_video_play", params: { guide: "unholy-prophecy", locale: "en" } }}
          />
          <a
            href="https://www.youtube.com/watch?v=3yLD1u_M5RY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Open the original video on YouTube
          </a>
          <p className="text-sm text-slate-400">
            Use it alongside the written steps to match positions, spike timing, and the Shi Zhen fight pacing.
          </p>
        </div>
      </section>
    </article>
  );
}
