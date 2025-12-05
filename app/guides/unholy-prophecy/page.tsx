import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "An Unholy Prophecy Quest Guide (Where Winds Meet)",
  description:
    "Complete An Unholy Prophecy (Jianghu Legacy 07) walkthrough for Where Winds Meet: unlock at Jadewood Court, climb rooftops, solve bell-knocker puzzles, dodge spikes, and defeat Shi Zhen. Includes all 13 steps with detailed instructions.",
  alternates: {
    canonical: `${baseUrl}/guides/unholy-prophecy`,
  },
  openGraph: {
    title: "An Unholy Prophecy Quest – Where Winds Meet Guide",
    description:
      "13-step An Unholy Prophecy Jianghu Legacy 07 guide: Fire arrows, Meridian Touch, spike traps, combat tips, and full walkthrough for Where Winds Meet.",
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
      "Complete walkthrough for An Unholy Prophecy Jianghu Legacy 07 in Where Winds Meet with all quest steps and rewards.",
    images: [cdn("/guides/unholy-prophecy/header.png")],
  },
};

const quickFacts = [
  { label: "Region", value: "Kaifeng – Jadewood Court", icon: "🧭" },
  { label: "Quest Type", value: "Jianghu Legacy 07", icon: "📜" },
  { label: "Unlock Method", value: "Talk to Mysterious Painter at Martial Temple", icon: "🗣️" },
  { label: "Core Actions", value: "Rooftop climbing → Fire arrows → Puzzles → Combat", icon: "⚔️" },
  { label: "Key Skills", value: "Fire arrows required for braziers", icon: "🔥" },
  { label: "Quest Duration", value: "Approximately 15-20 minutes", icon: "⏱️" },
];

const fastRoute = [
  "Speak with the Mysterious Painter at Martial Temple in Jadewood Court, Kaifeng region to unlock the quest.",
  "Climb the rooftops as indicated by the quest markers.",
  "Use fire arrows to shoot three braziers on the rooftops.",
  "Perform the 'An Unholy Prophecy' emote from the Puzzle tab (press F2).",
  "Navigate through the hallways while avoiding or evading guards.",
  "Use Meridian Touch to unlock the doors blocking your path.",
  "Traverse the corridor filled with spike traps by carefully timing your dodges.",
  "Retrieve weapons from the left wing.",
  "Retrieve weapons from the right wing.",
  "Defeat Shi Zhen and his minions in combat.",
  "Complete the post-combat dialogue sequence.",
  "Collect your quest rewards including Fame and Fortune Hanging Scroll.",
  "Quest complete!",
];

export type WalkthroughStep = {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
};

const walkthrough: WalkthroughStep[] = [
  {
    title: "Unlock the Quest",
    text: "Travel to the Martial Temple in Jadewood Court, Kaifeng region. Speak with the Mysterious Painter to unlock An Unholy Prophecy and trigger the quest.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-01-placeholder.png"),
      alt: "Speaking to the Mysterious Painter to unlock the quest",
    },
  },
  {
    title: "Begin the Rooftop Journey",
    text: "Exit the temple and head toward the rooftops as indicated by the quest marker. You'll need to climb and traverse the buildings of Kaifeng.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-02-placeholder.png"),
      alt: "Climbing rooftops in Kaifeng",
    },
  },
  {
    title: "Find the First Brazier",
    text: "Navigate to the first brazier location on the rooftop. Equip fire arrows and prepare to shoot.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-03-placeholder.png"),
      alt: "First brazier on the rooftop",
    },
  },
  {
    title: "Shoot the First Brazier",
    text: "Use your fire arrows to hit the first brazier. This will light it and trigger a visual effect.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-04-placeholder.png"),
      alt: "Shooting the first brazier with fire arrows",
    },
  },
  {
    title: "Find and Shoot Second Brazier",
    text: "Continue along the rooftop path to locate the second brazier. Repeat the fire arrow attack.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-05-placeholder.png"),
      alt: "Second brazier location",
    },
  },
  {
    title: "Find and Shoot Third Brazier",
    text: "Navigate to the third and final brazier. Make sure you're equipped with enough fire arrows before shooting.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-06-placeholder.png"),
      alt: "Third brazier ready to be lit",
    },
  },
  {
    title: "Perform the Emote",
    text: "After lighting all three braziers, open your Puzzle tab (F2 by default) and select the 'An Unholy Prophecy' emote to perform it.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-07-placeholder.png"),
      alt: "Performing the An Unholy Prophecy emote",
    },
  },
  {
    title: "Navigate Guarded Hallways",
    text: "Enter the temple interior and move through the hallways. You may encounter guards—avoid them or engage if necessary according to your preferred playstyle.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-08-placeholder.png"),
      alt: "Moving through the temple hallways",
    },
  },
  {
    title: "Unlock Doors with Meridian Touch",
    text: "Approach locked doors and use the Meridian Touch mystic skill to unlock them. This skill is essential for progressing through the temple.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-09-placeholder.png"),
      alt: "Using Meridian Touch to unlock doors",
    },
  },
  {
    title: "Navigate Spike Trap Corridor",
    text: "Enter the corridor filled with spike traps. Time your movement carefully—watch the patterns and dodge through the gaps. Be patient and don't rush.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-10-placeholder.png"),
      alt: "Navigating through spike trap corridor",
    },
  },
  {
    title: "Retrieve Left Wing Weapons",
    text: "Exit the spike trap corridor and head to the left wing. Retrieve the weapons stored there as they'll be useful for the upcoming boss fight.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-11-placeholder.png"),
      alt: "Retrieving weapons from left wing",
    },
  },
  {
    title: "Retrieve Right Wing Weapons",
    text: "Now navigate to the right wing and collect the remaining weapons. Having full equipment will improve your combat effectiveness.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-12-placeholder.png"),
      alt: "Collecting weapons from right wing",
    },
  },
  {
    title: "Defeat Shi Zhen and Minions",
    text: "Proceed to the final chamber where you'll face Shi Zhen and his minions. Use the weapons you've collected and your combat skills to defeat them. Focus on the banner-bearer enemies first if multiple opponents are present.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-13-placeholder.png"),
      alt: "Battle with Shi Zhen and minions",
    },
  },
];

const stuckFixes = [
  "Fire arrows not igniting braziers: Make sure you have fire arrows equipped. Regular arrows won't work. Check your inventory and equip fire arrows specifically.",
  "Can't find Mysterious Painter: The Mysterious Painter appears at Martial Temple in Jadewood Court, Kaifeng. Try changing channels or advancing time if they don't appear.",
  "Spike trap corridor is too difficult: Take your time and watch the spike patterns. You don't need to rush—many players die by moving too quickly. Wait for gaps and move methodically.",
  "Locked doors won't open: Make sure you have Meridian Touch mystic skill learned and equipped. You must use this specific skill to unlock the special doors.",
  "Guards are too strong: You can run past most guards by staying focused on the quest markers. Combat isn't required for progression unless necessary.",
  "Forgot to perform the emote: Return to the brazier area and perform the 'An Unholy Prophecy' emote from your Puzzle tab if the progression stalls.",
];

const faq = [
  {
    q: "Where do I unlock An Unholy Prophecy quest in Where Winds Meet?",
    a: "Travel to the Martial Temple in Jadewood Court, Kaifeng region and speak with the Mysterious Painter. This will unlock the An Unholy Prophecy Jianghu Legacy 07 quest.",
  },
  {
    q: "What are the requirements for An Unholy Prophecy quest?",
    a: "You need fire arrows to shoot the braziers and the Meridian Touch mystic skill to unlock doors. Having decent combat skills for the final boss fight is also recommended.",
  },
  {
    q: "How do I get fire arrows for this quest?",
    a: "Fire arrows are craftable or purchasable in most towns. Make sure to have at least 3 fire arrows equipped before starting the rooftop section of the quest.",
  },
  {
    q: "What is the 'An Unholy Prophecy' emote and where do I find it?",
    a: "The emote is found in your Puzzle tab (press F2). You must perform this emote after lighting all three braziers on the rooftop to progress the quest.",
  },
  {
    q: "Can I skip the spike trap corridor?",
    a: "No, the spike trap corridor is mandatory to progress. However, you can take your time navigating it—there's no time limit, just patience and careful dodging.",
  },
  {
    q: "Is Meridian Touch required to complete the quest?",
    a: "Yes, Meridian Touch is required to unlock the special doors in the temple. Make sure this skill is learned and equipped before attempting the quest.",
  },
  {
    q: "What rewards do I get for completing An Unholy Prophecy?",
    a: "Rewards include Fame and Fortune Hanging Scroll, Custom Chest x5, Medicinal Tales, Lv. 3 Ebon Iron x4, Echo Jade x30, Kaifeng Exploration x50, Enlightenment Point x100, 20,000 Character EXP, and 20,000 Coins.",
  },
  {
    q: "How long does the An Unholy Prophecy quest take to complete?",
    a: "Most players complete it in 15-20 minutes once they understand the mechanics. First-time players may take 20-30 minutes due to the spike trap section.",
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
              Complete An Unholy Prophecy Jianghu Legacy 07 guide for Where Winds Meet: unlock with Mysterious Painter,
              master rooftop fire arrow sections, solve puzzles with Meridian Touch, navigate spike trap corridor,
              and defeat Shi Zhen. Includes all 13 steps with detailed instructions for completing the quest without getting stuck.
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
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          What this An Unholy Prophecy quest guide covers
        </h2>
        <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <p className="text-base leading-relaxed text-slate-200">
            An Unholy Prophecy is a Jianghu Legacy questline that tests your combat skills, platforming abilities, and
            puzzle-solving knowledge. This guide breaks down all 13 steps so you can complete the quest efficiently without
            wasting time on trial-and-error or getting stuck on the notorious spike trap corridor.
          </p>
          <p className="text-base leading-relaxed text-slate-200">
            If you're searching "An Unholy Prophecy where winds meet" or stuck at the spike traps, this guide has you covered.
            We provide detailed instructions for each section including rooftop fire arrow mechanics, Meridian Touch door unlocking,
            and the final Shi Zhen boss encounter.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Fire arrow mechanics</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              You must use fire arrows to light the three braziers on the rooftop section. Regular arrows won't work.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Puzzle solving</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Use Meridian Touch to unlock locked doors in the temple. The emote requirement also tests your knowledge of the Puzzle tab.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Combat & Traps</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Navigate spike traps with careful timing, collect weapons, and defeat Shi Zhen in the final boss encounter.
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
          This walkthrough exists to help players searching "An Unholy Prophecy where winds meet" or stuck at specific sections.
          Bookmark this TL;DR if you need to reference specific steps.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Full walkthrough with details
        </h2>
        <div className="grid gap-6">
          {walkthrough.map((step, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200 ring-1 ring-purple-400/40">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{step.text}</p>
                </div>
              </div>
              {step.image && (
                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-400 mb-2">{step.image.alt}</p>
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-950">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              )}
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
            For a visual walkthrough of the An Unholy Prophecy quest, check out this comprehensive video guide:
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
            This video provides a visual walkthrough showing the exact paths, combat strategies, and timing for each section of the quest.
          </p>
        </div>
      </section>
    </article>
  );
}
