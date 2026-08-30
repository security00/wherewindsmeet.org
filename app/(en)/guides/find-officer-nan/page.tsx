import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const guidePath = "/guides/find-officer-nan";
const heroImagePath = `${guidePath}/hero.webp`;
const heroImage = `${cdnBase}${heroImagePath}`;

const metaTitle = "Find Officer Nan Where Winds Meet - The Gilded Chase";
const metaDescription =
  "Find Officer Nan where winds meet: exact \"find officer nan where winds meet\" answer + Harvestfall docks and Mirage Boat deck locations, fast.";

const publishedDate = "2026-01-20";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: buildHreflangAlternates(guidePath),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${baseUrl}${guidePath}`,
    siteName: "Where Winds Meet Hub",
    images: [{ url: heroImage, width: 1200, height: 675, alt: "Officer Nan on the Mirage Boat deck" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [{ url: heroImage, alt: "Find Officer Nan in Where Winds Meet" }],
  },
};

const quickAnswers = [
  { label: "Quest", value: "The Gilded Chase questline.", icon: "🧾" },
  {
    label: "Harvestfall Village",
    value: "Officer Nan is inside the building directly across from the Zither Keeper at the docks.",
    icon: "🏮",
  },
  {
    label: "Mirage Boat",
    value: "He stands by the railing to the left of the mahjong area when you face the boat.",
    icon: "🛶",
  },
  {
    label: "Bug fix",
    value: "If the waypoint sits under the boat, jump off and choose “Return to nearby quest objective.”",
    icon: "🧭",
  },
];

const locations = [
  {
    title: "Harvestfall Village dock (first time you meet him)",
    text: "Head to the dock and speak with the Zither Keeper. She tells you an invitation is required, then sends you to Officer Nan. He is inside the building across from her and gives you the job posting after you help with the swarm of fish.",
  },
  {
    title: "Mirage Boat deck (Find Nan objective)",
    text: "After the meeting, go down to the deck and look by the railing on the left side of the mahjong area if you are facing the boat.",
  },
];

const walkthroughSteps = [
  "Map location",
  "Examine the bounty board",
  "Talk to Old Jin",
  "Talk to the Zither Keeper",
  "Prove your skill",
  "Investigate the dock",
  "Find out the old man",
  "Board the Mirage Boat",
  "Find Nan",
  "Get intel",
  "Eavesdrop on the maids",
  "Report to Officer Nan",
  "Old Jin confesses",
  "Chase Old Jin",
  "Defeat Old Jin",
  "Look for clues",
  "The fake boat",
  "Follow the voice",
  "Nan at the dock",
  "Defeat the Phantom Thief",
  "The End",
];

const walkthroughImageFiles = [
  "map-location.webp",
  "examine-the-bounty-board.webp",
  "talk-to-old-jin.webp",
  "talk-to-the-zither-keeper.webp",
  "prove-your-skill.webp",
  "investigate-the-dock.webp",
  "find-out-the-old-man.webp",
  "board-the-mirage-boat.webp",
  "find-nan.webp",
  "get-intel.webp",
  "eavesdrop-on-the-maids.webp",
  "report-to-officer-nan.webp",
  "old-jin-confesses.webp",
  "chase-old-jin.webp",
  "defeat-old-jin.webp",
  "look-for-clues.webp",
  "the-fake-boat.webp",
  "follow-the-voice.webp",
  "nan-at-the-dock.webp",
  "defeat-the-phantom-thief.webp",
  "the-end.webp",
] as const;

const faq = [
  {
    q: "Find officer nan where winds meet — where is he?",
    a: "He appears at the Harvestfall Village docks first, then later on the Mirage Boat deck. Use the sections below for exact spots.",
  },
  {
    q: "Where is Officer Nan in Harvestfall Village?",
    a: "He is inside the building directly across from the Zither Keeper at the docks. Speak to her first, then enter the building and talk to Officer Nan (the Southern Wayfarer).",
  },
  {
    q: "Where is Officer Nan during the ‘Find Nan’ objective on the Mirage Boat?",
    a: "He stands by the railing to the left of the mahjong area when you are facing the boat deck.",
  },
  {
    q: "My waypoint is stuck under the boat — what do I do?",
    a: "Jump off the boat and choose “Return to nearby quest objective” to reset the marker.",
  },
];

const relatedLinks = [
  {
    title: "One Leaf, One Life (Lost Chapter route)",
    href: "/guides/one-leaf-one-life",
  },
  {
    title: "Woven with Malice (Lost Chapter route)",
    href: "/guides/woven-with-malice",
  },
  {
    title: "Mist-Shrouded Prison (tomb route)",
    href: "/guides/mist-shrouded-prison",
  },
];

export default function FindOfficerNanPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${baseUrl}${guidePath}#webpage`,
      name: metaTitle,
      description: metaDescription,
      url: `${baseUrl}${guidePath}`,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${baseUrl}${guidePath}#article`,
      headline: metaTitle,
      description: metaDescription,
      url: `${baseUrl}${guidePath}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}${guidePath}` },
      image: heroImage,
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@type": "Organization", name: "Where Winds Meet Hub" },
      publisher: {
        "@type": "Organization",
        name: "Where Winds Meet Hub",
        logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.ico` },
      },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}${guidePath}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Find Officer Nan", item: `${baseUrl}${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${baseUrl}${guidePath}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage src={heroImagePath} alt="Officer Nan on the Mirage Boat deck" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
        </div>
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Quest: The Gilded Chase
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">Find Officer Nan Where Winds Meet</h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              If you searched “find officer nan where winds meet”, this guide covers both locations in{" "}
              <span className="font-semibold text-slate-100">The Gilded Chase</span>. One is at the Harvestfall Village dock (to get your invitation), and the
              other is on the Mirage Boat deck. Use the quick answer below to jump to the right spot.
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80" id="answer">
              <p className="font-semibold text-amber-100">TL;DR (fast answer)</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Harvestfall docks: Officer Nan is inside the building across from the Zither Keeper.</li>
                <li>• Mirage Boat: go to the deck and check the left-side railing near the mahjong area.</li>
                <li>• If the waypoint is under the boat, jump off and choose “Return to nearby quest objective.”</li>
                <li>• Search query: find officer nan where winds meet.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-100">
              <Link
                href="#locations"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Officer Nan locations
              </Link>
              <Link
                href="#steps"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Quest sequence
              </Link>
              <Link
                href="#fixes"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Bug fix
              </Link>
              <Link
                href="#faq"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {quickAnswers.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="text-lg leading-none">{item.icon}</div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="text-sm text-slate-200">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <h2 className="text-2xl font-bold text-slate-50">Two places to find Officer Nan</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {locations.map((location, index) => (
            <article
              key={location.title}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-slate-50">{location.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{location.text}</p>
              </div>
              <figure className="border-t border-slate-800/80">
                <div className="relative aspect-video">
                  <CdnImage
                    src={`${guidePath}/${index === 0 ? "prove-your-skill.webp" : "find-nan.webp"}`}
                    alt={`${location.title} location screenshot in Where Winds Meet`}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-300">
                  {location.title}. Source publisher: Game8.
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section id="fixes" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧯</span>
          <h2 className="text-2xl font-bold text-slate-50">Stuck? Quick fix</h2>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-sm text-emerald-100">
          If the quest marker is bugged and points under the boat, jump off the Mirage Boat and select “Return to nearby quest
          objective” to reload the target.
        </div>
      </section>

      <section id="steps" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Quest sequence</h2>
        </div>
        <p className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm leading-6 text-emerald-100">
          Source publisher: Game8. Reuse authorization confirmed by site owner 2026-08-29. Screenshots are provided as visual
          checkpoints; verify objective wording in the current game build.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {walkthroughSteps.map((step, idx) => (
            <article
              key={step}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Step {idx + 1}</p>
                  <h3 className="text-base font-semibold text-slate-50">{step}</h3>
                </div>
              </div>
              <figure className="border-t border-slate-800/80">
                <div className="relative aspect-video">
                  <CdnImage
                    src={`${guidePath}/${walkthroughImageFiles[idx]}`}
                    alt={`${step} walkthrough screenshot for The Gilded Chase`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-300">
                  Step {idx + 1}: {step}. Source publisher: Game8.
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-50">Related guides</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          {relatedLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="underline underline-offset-4 hover:text-emerald-100">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
