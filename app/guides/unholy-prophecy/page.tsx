import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "An Unholy Prophecy Quest Guide (Where Winds Meet)",
  description:
    "13-step An Unholy Prophecy (Jianghu Legacy 07) guide: start at Jadewood Court, light rooftop braziers, use Meridian Touch, clear spike traps, defeat Shi Zhen.",
  alternates: {
    canonical: `${baseUrl}/guides/unholy-prophecy`,
  },
  openGraph: {
    title: "An Unholy Prophecy Quest – Where Winds Meet Guide",
    description:
      "13-step An Unholy Prophecy (Jianghu Legacy 07) guide: start at Jadewood Court, light rooftop braziers, use Meridian Touch, clear spike traps, defeat Shi Zhen.",
    url: `${baseUrl}/guides/unholy-prophecy`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/unholy-prophecy/header.png"),
        width: 1200,
        height: 675,
        alt: "An Unholy Prophecy quest scene from Where Winds Meet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "An Unholy Prophecy Quest – Where Winds Meet Guide",
    description:
      "13-step An Unholy Prophecy (Jianghu Legacy 07) guide: start at Jadewood Court, light rooftop braziers, use Meridian Touch, clear spike traps, defeat Shi Zhen.",
    images: [cdn("/guides/unholy-prophecy/header.png")],
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
  "Fight the guards in the arsenal hall and choose a wing.",
  "Head to either left or right wing of the hall.",
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
  image?: {
    src: string;
    alt: string;
  };
  extraImages?: {
    src: string;
    alt: string;
  }[];
  video?: {
    src: string;
    poster?: string;
    label?: string;
  };
  videos?: {
    src: string;
    poster?: string;
    label?: string;
  }[];
  // When set, place extraImages after the first N videos instead of directly after the primary image.
  extraImagesAfterVideos?: number;
  // When true, render videos before images for this step.
  videosFirst?: boolean;
  // Images to append after all other media for this step.
  extraImagesAfterMedia?: {
    src: string;
    alt: string;
  }[];
};

const walkthrough: WalkthroughStep[] = [
  {
    title: "Speak with the Mysterious Painter",
    text: "Travel to the Martial Temple in Jadewood Court (Kaifeng) and talk to the Mysterious Painter to start An Unholy Prophecy, marked as Jianghu Legacy 07.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/09e38cc673e78b1672132d3572098067.png"),
      alt: "Where Winds Meet - Speak with Mysterious Painter",
    },
  },
  {
    title: "Find the western eaves entrance",
    text: "Follow the quest markers up the Martial Temple's western eaves and onto the rooftops to reach the quest path.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/f96b6f737b455cf08d82d02e120f0205.png"),
      alt: "Where Winds Meet - Climb the Rooftop",
    },
  },
  {
    title: "Shoot the hanging braziers",
    text: "Equip fire arrows and light all three hanging braziers on the rooftop route. Regular arrows won't count here.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/3662de73207315d3e2b3483081826783.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/3662de73207315d3e2b3483081826783.jpg"),
      label: "Follow the rooftop marker and light the braziers",
    },
  },
  {
    title: "Perform the quest emote",
    text: "After lighting the braziers, open the Puzzle tab (F2) and perform the 'An Unholy Prophecy' emote on the rooftop platform.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/27e4c791d5143760bdb150b7758187d7.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/27e4c791d5143760bdb150b7758187d7.jpg"),
      label: "Platform approach and emote trigger",
    },
  },
  {
    title: "Enter the hallway opposite the barred area",
    text: "Drop down inside and take the hallway opposite the barred section. Sneak or fight as you move forward.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/37d7a9d5f22c4ffafeacb6bcd2697a44.png"),
      alt: "Where Winds Meet - Enter the temple interior and guarded halls",
    },
  },
  {
    title: "Strike the bell and use Meridian Touch",
    text: "Interact with the bell/knocker and use Meridian Touch to open the way forward.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/31c4cd8070b9e6f5c228f994d78d39cf.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/31c4cd8070b9e6f5c228f994d78d39cf.jpg"),
      label: "Jade bell and knocker puzzle with Meridian Touch",
    },
  },
  {
    title: "Fight the guards in the arsenal hall",
    text: "Push forward through the arsenal hall opposite the barred section, clearing or evading guards as you move toward the wings.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/56962bba66e1353c445a3ce12029c611.png"),
      alt: "Where Winds Meet - An Unholy Prophecy Grand Arsenal Hall",
    },
  },
  {
    title: "Head to either wing",
    text: "From the central hall, you can choose the left or right wing to gather weapons before the fight ahead.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/0aeff7a108bf93d78abfbced080bc019.png"),
      alt: "Where Winds Meet - Head to either wing from the arsenal hall",
    },
  },
  {
    title: "Retrieve the long weapon (left wing)",
    text: "Go left first and pick up the long weapon to satisfy the statue's requirement.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/be105baf134b6032d8f23f4b568795a9.png"),
      alt: "Where Winds Meet - An Unholy Prophecy Stairs before the left wing",
    },
    extraImagesAfterVideos: 4,
    videos: [
      {
        src: cdn("/guides/unholy-prophecy/game8/726a2844c6087d8f974afa1be19d5fbf.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/726a2844c6087d8f974afa1be19d5fbf.jpg"),
        label: "Enter hall with two doors (left wing path)",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/f933aa2d44cc82981aa6ea2c1c97565b.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/f933aa2d44cc82981aa6ea2c1c97565b.jpg"),
        label: "Pull the lever and advance (left side)",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/85f0ed1a35679cf702db0f8da7e869be.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/85f0ed1a35679cf702db0f8da7e869be.jpg"),
        label: "Interact with the jade node",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/e84b11e5ee81ad54656b3aef06a414df.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/e84b11e5ee81ad54656b3aef06a414df.jpg"),
        label: "Retrieve the long weapon",
      },
    ],
    extraImages: [
      {
        src: cdn("/guides/unholy-prophecy/game8/14633ac62c24cf256da429096922bd2b.png"),
        alt: "Where Winds Meet - Obtain the spear/weapon",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/a6fcfadddcc593de1afa69fef03facd1.png"),
        alt: "Where Winds Meet - Unholy Prophecy spike pit section",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/9063c1e4f9503467bec0866d8aa47678.png"),
        alt: "Where Winds Meet - Additional left wing route detail",
      },
    ],
  },
  {
    title: "Retrieve the short weapon (right wing)",
    text: "Head to the right wing and collect the short weapon so both slots are filled.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/307d66a8d144cff4e0caa3772b10c0c7.png"),
      alt: "Where Winds Meet - An Unholy Prophecy right wing chest",
    },
    extraImagesAfterVideos: 1,
    videosFirst: true,
    video: {
      src: cdn("/guides/unholy-prophecy/game8/cf3efe428140415bb06cba02dc1ed0dc.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/cf3efe428140415bb06cba02dc1ed0dc.jpg"),
      label: "Right wing progression",
    },
    videos: [
      {
        src: cdn("/guides/unholy-prophecy/game8/27f2e32e3d1be0d6b75afec9c36307d4.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/27f2e32e3d1be0d6b75afec9c36307d4.jpg"),
        label: "Narrow corridor encounter",
      },
    ],
    extraImages: [
      {
        src: cdn("/guides/unholy-prophecy/game8/f02bf4a4c3348c91a4d1a9ee2c7c10c9.png"),
        alt: "Where Winds Meet - An Unholy Prophecy right wing passage detail",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/a9ed74b69494bbe8f81bad489dd041d2.png"),
        alt: "Where Winds Meet - An Unholy Prophecy final route",
      },
    ],
    extraImagesAfterMedia: [
      {
        src: cdn("/guides/unholy-prophecy/game8/a387a2def1d9ba5a646840901bf91382.png"),
        alt: "Where Winds Meet - An Unholy Prophecy Short Weapon Returned",
      },
    ],
  },
  {
    title: "Enter the revealed door",
    text: "With both weapons placed, proceed through the newly opened door and continue deeper.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/9f122b59da74824e9f288b723d9108f6.png"),
      alt: "Where Winds Meet - An Unholy Prophecy unlocked path",
    },
  },
  {
    title: "Enter the boss arena",
    text: "Head into the final chamber and get ready for Shi Zhen. This is the approach video right before the boss fight.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/f73ac50bd768174d224cebcc24e0f2e8.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/f73ac50bd768174d224cebcc24e0f2e8.jpg"),
      label: "Boss arena approach",
    },
  },
  {
    title: "Defeat Shi Zhen and minions",
    text: "Enter the final chamber and fight Shi Zhen with his helpers. Drop the banner carriers first to reduce pressure, then finish the boss.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/3d7598fbc5a586d66d477e6807b5d655.png"),
      alt: "Where Winds Meet - An Unholy Prophecy Boss Fight Shi Zhen",
    },
  },
  {
    title: "Meet the Mysterious Painter again",
    text: "After the fight and dialogue, return to the Mysterious Painter to complete the quest and collect rewards.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/fc5a46957dffe3e077df5d4219f6cf18.png"),
      alt: "Where Winds Meet - Speak with the Painter Again",
    },
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
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              An Unholy Prophecy quest walkthrough
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              Rewritten An Unholy Prophecy guide for Where Winds Meet: start at the Martial Temple in Jadewood Court,
              light all rooftop braziers with fire arrows, use Meridian Touch to get through sealed doors, cross the spike hallway,
              and beat Shi Zhen. Every step is spelled out so players searching 'An Unholy Prophecy Where Winds Meet' can finish without stalls.
            </p>
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
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/80 p-3">
              <div className="text-xs uppercase tracking-wide text-slate-400">Start location map</div>
              <div className="relative mt-2 aspect-video overflow-hidden rounded-lg bg-slate-950">
                <Image
                  src={cdn("/guides/unholy-prophecy/game8/b6847fd4b9fd993041db58e258ecd4c9.png")}
                  alt="An Unholy Prophecy start location at Martial Temple, Jadewood Court"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
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
            If you searched 'An Unholy Prophecy where winds meet' after getting stuck at the traps or the door seals, follow the
            breakdown below. Each section calls out the exact mechanic—braziers, emote timing, Meridian Touch, and the Shi Zhen
            fight—so you don't miss a trigger.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Fire arrow mechanics</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Only fire arrows count for the three rooftop braziers—normal arrows won't trigger them, so bring extras.
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
          If you landed here from searches like 'An Unholy Prophecy where winds meet,' save this TL;DR to jump back to any step quickly.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Full walkthrough with details
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {walkthrough.flatMap((step, idx) => {
            const baseNum = idx + 1;
            const primaryImage = step.image ? [{ ...step.image, type: "image" as const }] : [];
            const extraImages = Array.isArray(step.extraImages)
              ? step.extraImages.map((img) => ({ ...img, type: "image" as const }))
              : [];
            const combinedVideos = [
              ...(step.video ? [{ ...step.video, type: "video" as const }] : []),
              ...(Array.isArray(step.videos)
                ? step.videos.map((vid) => ({ ...vid, type: "video" as const }))
                : []),
            ];

            const splitIndex =
              typeof step.extraImagesAfterVideos === "number" ? step.extraImagesAfterVideos : null;
            const videosFirst = step.videosFirst === true;

            const media =
              splitIndex !== null
                ? videosFirst
                  ? [
                      ...combinedVideos.slice(0, splitIndex),
                      ...primaryImage,
                      ...extraImages,
                      ...combinedVideos.slice(splitIndex),
                    ]
                  : [
                      ...primaryImage,
                      ...combinedVideos.slice(0, splitIndex),
                      ...extraImages,
                      ...combinedVideos.slice(splitIndex),
                    ]
                : videosFirst
                  ? [...combinedVideos, ...primaryImage, ...extraImages]
                  : [...primaryImage, ...extraImages, ...combinedVideos];
            const tailImages = Array.isArray(step.extraImagesAfterMedia)
              ? step.extraImagesAfterMedia.map((img) => ({ ...img, type: "image" as const }))
              : [];

            const combinedMedia = [...media, ...tailImages];
            const mediaCards = combinedMedia.length
              ? combinedMedia.map((item, mIdx) => ({
                  key: `${idx}-media-${mIdx}`,
                  content: (
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200 ring-1 ring-purple-400/40">
                          {combinedMedia.length > 1 ? `${baseNum}.${mIdx + 1}` : baseNum}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-200">
                            {step.text}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-3 space-y-2">
                        <span className="text-[11px] text-slate-400 block">
                          {item.type === "image"
                            ? item.alt ?? step.title
                            : item.label ?? step.title}
                        </span>
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-950">
                          {item.type === "image" ? (
                            <Image
                              src={item.src}
                              alt={item.alt ?? `${step.title} – step ${baseNum}`}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          ) : (
                            <video
                              src={item.src}
                              poster={item.poster}
                              controls
                              preload="metadata"
                              className="h-full w-full"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ),
                }))
              : [
                  {
                    key: `${idx}-nomedia`,
                    content: (
                      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200 ring-1 ring-purple-400/40">
                            {baseNum}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-200">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ];
            return mediaCards;
          }).map((card) => (
            <div key={card.key}>{card.content}</div>
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
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3yLD1u_M5RY"
              title="An Unholy Prophecy Quest Guide Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
          <p className="text-sm text-slate-400">
            Use it alongside the written steps to match positions, spike timing, and the Shi Zhen fight pacing.
          </p>
        </div>
      </section>
    </article>
  );
}
