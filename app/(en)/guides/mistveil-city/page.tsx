import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBaseUrl = (process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org").replace(/\/+$/, "");
const heroImagePath = "/guides/mistveil-city/allthings/Screenshot-2026-01-10-100403-1.png";
const heroImageForMeta = `${cdnBaseUrl}${heroImagePath}`;

export const metadata: Metadata = {
  title: "Mistveil City Where Winds Meet: Unlock Date & Lock",
  description:
    "Mistveil city where winds meet: why Mistveil City is locked, unlock dates (Jan 22 vs Jan 26, 2026), and Ephemeral Blight prep in Mistveil Forest.",
  alternates: buildHreflangAlternates("/guides/mistveil-city"),
  openGraph: {
    title: "Mistveil City Where Winds Meet: Unlock Date & Lock",
    description:
      "Mistveil City is currently time-gated for many players. Learn what the lock means, when it may open, and how to clear Ephemeral Blight in Mistveil Forest.",
    url: `${baseUrl}/guides/mistveil-city`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: heroImageForMeta,
        width: 1206,
        height: 678,
        alt: "Mistveil region fog screenshot in Where Winds Meet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mistveil City Where Winds Meet: Unlock Date & Lock",
    description:
      "Why Mistveil City is locked, the reported unlock dates (Jan 22 vs Jan 26, 2026), and what to do in Mistveil Forest while you wait.",
    images: [
      {
        url: heroImageForMeta,
        alt: "Mistveil region fog screenshot in Where Winds Meet",
      },
    ],
  },
};

const lastUpdated = "January 15, 2026";

const tlDr = [
  "If you searched mistveil city where winds meet, Mistveil City may be blocked: the game shows a “not yet open / come back later” message and teleports you out after a short countdown.",
  "Community reports point to a time gate (not a hidden unlock). Two dates show up in discussion: Jan 22, 2026 and Jan 26, 2026 — use the exact date your client shows.",
  "Clearing Ephemeral Blight and collecting Mistveil Forest Cures unlocks Mistveil Forest exploration, but it may not remove the Mistveil City gate until the scheduled date.",
  "Best use of time: finish Ephemeral Blight, grab all three cures, unlock Mistveil Forest teleports/bosses, and be ready to start Mistveil City the moment it opens.",
];

const faq = [
  {
    q: "Why is Mistveil City locked in Where Winds Meet?",
    a: "Players report a hard boundary near Mistveil City that triggers a “This area is not yet open. Please come back later” message (with a short countdown) and teleports you out. This behaves like a scheduled time gate rather than a puzzle or a missing quest item.",
  },
  {
    q: "Do I need to join Nine Mortal Ways to enter Mistveil City?",
    a: "Community discussion suggests no. The lock appears regardless of sect choice or progress, and players suspect Mistveil City is tied to a calendar unlock instead of a faction requirement.",
  },
  {
    q: "When does Mistveil City open?",
    a: "As of January 15, 2026, players cite two different dates: January 22, 2026 and January 26, 2026. The safest answer is to follow the exact date shown in your own in-game message and keep an eye on official patch notes/announcements.",
  },
  {
    q: "Does clearing Ephemeral Blight unlock Mistveil City?",
    a: "Clearing Ephemeral Blight removes the Dawn-to-Dusk mist over Mistveil Forest and unlocks more exploration there. However, reports indicate Mistveil City can remain locked until the scheduled open date.",
  },
  {
    q: "What are the Mistveil Forest Cures (and why do they matter)?",
    a: "They’re three quest documents used to help Zhai Xu craft the antidote for Mistveil Forest: Wishing Cove (from Zhai Xu’s house), Hollow Abode, and Aureate Pavilion. Turning them in is the core requirement to clear the region’s mist via Ephemeral Blight.",
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
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
    { "@type": "ListItem", position: 3, name: "Mistveil City", item: `${baseUrl}/guides/mistveil-city` },
  ],
};

const allThingsImages = {
  mistveilCover: {
    src: "/guides/mistveil-city/allthings/image-1048-1.webp",
    caption: "Mistveil region fog boundary screenshot. Screenshots: NetEase (via YouTube/@100% Guides).",
    alt: "Mistveil region scene",
  },
  talkToZhaiXu: {
    src: "/guides/mistveil-city/allthings/image-1049-1-1.webp",
    caption: "Speak with Zhai Xu to ask about the pendant and the poisonous mist.",
    alt: "Talking to Zhai Xu about the pendant and mist",
  },
  meridianTouchChime: {
    src: "/guides/mistveil-city/allthings/image-1050.webp",
    caption: "Use Meridian Touch on the wind chime hanging outside.",
    alt: "Using Meridian Touch on a wind chime",
  },
  readThousandWish: {
    src: "/guides/mistveil-city/allthings/image-1051-1.webp",
    caption: "Open your Bag (B), switch to the quest items tab, and read the Thousand-Wish Amendment.",
    alt: "Reading Thousand-Wish Amendment in quest items",
  },
  postStation: {
    src: "/guides/mistveil-city/allthings/image-1052-1.webp",
    caption: "Travel to the Soulshade Umbrella - Post Station.",
    alt: "Soulshade Umbrella Post Station location",
  },
  stealthGuard: {
    src: "/guides/mistveil-city/allthings/image-1053-1.webp",
    caption: "Get rid of the guard quietly.",
    alt: "Stealth takedown of a guard",
  },
  aureateOutpost: {
    src: "/guides/mistveil-city/allthings/image-1054-1.webp",
    caption: "Travel to the Aureate Pavilion outpost.",
    alt: "Aureate Pavilion outpost location",
  },
  aureateCure: {
    src: "/guides/mistveil-city/allthings/image-1055-1.webp",
    caption: "Get the Aureate Pavilion Mistveil Forest cure from the Central Hut.",
    alt: "Finding the Aureate Pavilion cure in the central hut",
  },
  turnInCures: {
    src: "/guides/mistveil-city/allthings/image-1056-1.webp",
    caption: "Talk to Zhai Xu and hand over the items.",
    alt: "Handing items to Zhai Xu",
  },
  receiveMedicine: {
    src: "/guides/mistveil-city/allthings/image-1057-1.webp",
    caption: "Speak with Zhai Xu to receive medicine near the forest.",
    alt: "Receiving medicine from Zhai Xu near the forest",
  },
  forestGuards: {
    src: "/guides/mistveil-city/allthings/image-1058-1.webp",
    caption: "Get rid of the Aureate Pavilion guards in the forest.",
    alt: "Fighting guards in Mistveil Forest",
  },
  burnBloomsPendant: {
    src: "/guides/mistveil-city/allthings/image-1059-1.webp",
    caption: "Use fire arrows to burn the blooms before picking up the jade pendant.",
    alt: "Burning toxic blooms with fire arrows",
  },
  pathUnderground: {
    src: "/guides/mistveil-city/allthings/image-1060-1.webp",
    caption: "Follow the path to the underground layer.",
    alt: "Path leading underground",
  },
  deductionInterface: {
    src: "/guides/mistveil-city/allthings/image-1061-1.webp",
    caption: "Open the deduction interface and start pairing the clues.",
    alt: "Deduction interface with clue pairing",
  },
  followPuppet: {
    src: "/guides/mistveil-city/allthings/image-1062-1.webp",
    caption: "Follow the Sleeping Puppet through the cave system.",
    alt: "Following the Sleeping Puppet in the cave",
  },
} as const;

type WalkthroughImage = (typeof allThingsImages)[keyof typeof allThingsImages];

type WalkthroughStep = {
  title: string;
  detail: string;
  images?: WalkthroughImage[];
};

type WalkthroughSection = {
  title: string;
  steps: WalkthroughStep[];
};

const walkthroughSections: WalkthroughSection[] = [
  {
    title: "Starting Ephemeral Blight in Mistveil Forest",
    steps: [
      {
        title: "Enter the mist and get rescued",
        detail:
          "Walk into Mistveil Forest (east of Kaifeng City) until the Dawn-to-Dusk mist overwhelms you. A cutscene triggers and Zhai Xu rescues you to Wishing Cove.",
      },
      {
        title: "Wake up at Wishing Cove and talk to Zhai Xu",
        detail:
          "Pick up the jade pendant beside the bed, then speak with Zhai Xu about the pendant and the poison mist to start the cure chain.",
        images: [allThingsImages.talkToZhaiXu],
      },
      {
        title: "Use Wind Sense, then distract him with Meridian Touch",
        detail:
          "Inside the house, use Wind Sense to spot the two books on the table—but Zhai Xu warns you not to meddle. Stand by the window above the table and use Meridian Touch on the wind chime to draw him outside.",
        images: [allThingsImages.meridianTouchChime],
      },
      {
        title: "Read the books and unlock the 3-cure objective",
        detail:
          "While Zhai Xu is out, read both books (the Wishing Cove cure + the Thousand-Wish Amendment). Then open Bag → Quest Items and read the Amendment: it lists the three Mistveil Forest Cures you need (Wishing Cove, Hollow Abode, Aureate Pavilion).",
        images: [allThingsImages.readThousandWish],
      },
    ],
  },
  {
    title: "Finding the Hollow Abode Mistveil Forest cure",
    steps: [
      {
        title: "Go to Soulshade Umbrella – Post Station (Skill Theft dungeon)",
        detail:
          "Travel southwest of Mistveil Forest to Soulshade Umbrella – Post Station. Your goal is only the cure document—you don’t need to finish the entire dungeon.",
        images: [allThingsImages.postStation],
      },
      {
        title: "Stealth route: vines → window → stairs",
        detail:
          "Use Wind Sense (V) to watch vision cones, climb the vines to the second floor, enter through the window, and locate the stairs down.",
      },
      {
        title: "Use Touch of Death on the guard, then loot the cure",
        detail:
          "Wait for the guard’s patrol to turn away, eliminate them quietly with Touch of Death, then find the green-candle side room and grab the Hollow Abode cure from the table.",
        images: [allThingsImages.stealthGuard],
      },
    ],
  },
  {
    title: "Finding the Aureate Pavilion Mistveil Forest cure",
    steps: [
      {
        title: "Travel to the Aureate Pavilion outpost (north of the mist)",
        detail:
          "Head around the edge of Mistveil Forest to the Aureate Pavilion outpost. If you’ve unlocked a nearby teleporter, use it to shorten the trip.",
        images: [allThingsImages.aureateOutpost],
      },
      {
        title: "Grab the cure from the central hut (near the mummified body)",
        detail:
          "Your target is the main hut at the center of the outpost. Either fight through or sneak in with movement skills; inside, the cure sits on a table beside a mummified body.",
        images: [allThingsImages.aureateCure],
      },
    ],
  },
  {
    title: "Returning to Zhai Xu and preparing the antidote",
    steps: [
      {
        title: "Hand in all three cures at Wishing Cove",
        detail: "Return to Zhai Xu and hand over the three cure notes so he can begin preparing the antidote.",
        images: [allThingsImages.turnInCures],
      },
      {
        title: "Advance time by two full in-game days",
        detail:
          "Leave the cove and let two in-game days pass. After that, return to Wishing Cove—Zhai Xu should be gone and a note will point you to the northern shore of Mistveil Forest.",
      },
      {
        title: "Meet Zhai Xu at the northern shore and follow the fires",
        detail:
          "Follow the quest marker to the northern edge, talk to Zhai Xu to receive the medicine, then push forward while staying close to the fires along the route (they act as temporary safe zones).",
        images: [allThingsImages.receiveMedicine],
      },
    ],
  },
  {
    title: "Venturing deeper and destroying Dawn-to-Dusk blooms",
    steps: [
      {
        title: "Clear the guards and reach the bloom-blocked path",
        detail:
          "Advance deeper into the forest; you’ll run into more Aureate Pavilion guards. Clear them to secure the area and reach a path blocked by Dawn-to-Dusk blooms.",
        images: [allThingsImages.forestGuards],
      },
      {
        title: "Burn the blooms, then search the hanging-corpse tree area",
        detail:
          "Equip Fire Arrows and burn the toxin blooms to open the way. Continue until you find the huge tree with hanging corpses; destroy the three blooms there, defeat the Sleeping Puppets that wake up, and pick up the half jade pendant that drops near the tree.",
        images: [allThingsImages.burnBloomsPendant],
      },
    ],
  },
  {
    title: "Solving Sun Buqi’s deductions and ending Ephemeral Blight",
    steps: [
      {
        title: "Follow the Silver Needle shadow figure underground",
        detail:
          "After you pick up the pendant, a shadowy figure appears and retreats. Follow the quest path to an underground lair that ends at a room with a mummified body.",
        images: [allThingsImages.pathUnderground],
      },
      {
        title: "Read Sun Buqi’s notes and start deductions",
        detail:
          "Search the room, read Sun Buqi’s Notes and nearby documents, then open the deduction interface and pair the clues into a coherent story.",
        images: [allThingsImages.deductionInterface],
      },
      {
        title: "Follow the Sleeping Puppet and destroy the final blooms",
        detail:
          "After confirming the deductions, interact with the unusual Sleeping Puppet near the mummy. Follow it through the caves to the mist source and destroy the three large blooms maintaining the fog, then return to Zhai Xu to finish Ephemeral Blight and clear Mistveil Forest permanently.",
        images: [allThingsImages.followPuppet],
      },
    ],
  },
];

export default function MistveilCityPage() {
  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src={heroImagePath}
            alt="Mistveil City region preview"
            fill
            className="object-cover opacity-45"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Updated {lastUpdated} · Mistveil City unlock
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Mistveil City Where Winds Meet: unlock guide.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            If you searched “mistveil city where winds meet” because your Exploration quest points to Mistveil City but the game won’t let you enter,
            you’re not alone. Players report an “area not yet open” boundary that forces you back out after a short timer, even if you dash past it with
            movement skills.
          </p>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            This mistveil city where winds meet page explains what the lock means, the two unlock dates people are seeing (January 22 vs January 26, 2026),
            and what you can do now — mainly clearing Ephemeral Blight and collecting Mistveil Forest Cures so you’re ready when Mistveil City goes live.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/50">Unlock date: Jan 22 vs Jan 26</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-slate-400/40">Time gate, not a puzzle</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/40">Ephemeral Blight + cures</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">TL;DR</h2>
        </div>
        <ul className="space-y-2 text-sm text-slate-200">
          {tlDr.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Why Mistveil City is locked (and what the message means).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The key detail: the Mistveil City lock is not the same thing as Mistveil Forest progression. Even after you clear the Dawn-to-Dusk mist in
          Mistveil Forest, Mistveil City can still show as “not yet open” and kick you out.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          That behavior matches how Where Winds Meet handles scheduled content gates: the quest exists, the location label exists, but the boundary stays
          hard-locked until the developers flip it on. This also explains why players with very different builds, sect choices, and quest progress report
          the same forced-teleport countdown near the Mistveil City entrance.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          In practice, this is what most mistveil city where winds meet searches are about: a simple “come back later” lock, not a hidden quest step.
        </p>
        <figure className="rounded-2xl border border-slate-800 bg-slate-900/30 p-3">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src={allThingsImages.mistveilCover.src}
              alt={allThingsImages.mistveilCover.alt}
              loading="lazy"
              width={1133}
              height={637}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>
          <figcaption className="mt-2 text-[11px] leading-relaxed text-slate-300">
            {allThingsImages.mistveilCover.caption}
          </figcaption>
        </figure>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-semibold text-slate-50">Practical takeaway</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            Treat Mistveil City as a time-gated zone. Don’t waste hours trying to brute-force the boundary — prepare your account and come back when the
            in-game date gate disappears.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Mistveil City unlock date: January 22 vs January 26 (2026).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If your mistveil city where winds meet question is “when does Mistveil City open?”, here’s what players are seeing. As of{" "}
          <strong>{lastUpdated}</strong>, community discussion and guides mention two different unlock dates: <strong>January 22, 2026</strong> and{" "}
          <strong>January 26, 2026</strong>. It may depend on server/region timing or a patch schedule shift.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The safest approach is simple: rely on the exact date your own client shows when it blocks you (and check official notes). If you want a quick
          place to monitor update windows, keep an eye on our{" "}
          <Link href="/guides/patch-notes" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            patch notes guide
          </Link>{" "}
          and the{" "}
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            news page
          </Link>
          .
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          What to do now: clear Ephemeral Blight and collect Mistveil Forest Cures.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Even if Mistveil City is time-gated, you can still make meaningful progress in the Mistveil region. This mistveil city where winds meet guide
          focuses on the main prerequisite you’ll want done: <strong>Ephemeral Blight</strong>, which permanently clears the Dawn-to-Dusk mist in Mistveil
          Forest once you help Zhai Xu craft the antidote.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">1) Start Ephemeral Blight</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Walk into Mistveil Forest (east of Kaifeng) until the toxin knocks you out. Zhai Xu rescues you to Wishing Cove and the cure chain begins.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">2) Collect all three cures</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Wishing Cove (Zhai Xu’s house), Hollow Abode (a Skill Theft dungeon), and Aureate Pavilion (a hostile outpost).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">3) Turn them in</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Bring the cures back to Zhai Xu so he can craft the antidote and lift the Mistveil Forest fog for good.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The Hollow Abode cure is tied to a{" "}
          <Link href="/guides/skill-theft" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Skill Theft
          </Link>{" "}
          dungeon route. After you clear the mist, you can also tackle Mistveil’s tomb content — see{" "}
          <Link href="/guides/mist-shrouded-prison" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Mist-Shrouded Prison
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">🖼️</span>
          <h2 className="text-2xl font-bold text-slate-50">Ephemeral Blight walkthrough (with screenshots)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you’re here from a mistveil city where winds meet search, use the steps below to finish Ephemeral Blight and clear Mistveil Forest while you
          wait. This walkthrough is organized like the original guide: cures first, then the mist-clearing objective.
        </p>
        <div className="space-y-6">
          {walkthroughSections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-black/25 space-y-4"
            >
              <h3 className="text-lg font-semibold text-slate-50">{section.title}</h3>
              <ol className="space-y-4">
                {section.steps.map((step, index) => (
                  <li key={`${section.title}-${step.title}`} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Step {index + 1}</p>
                    <p className="text-sm font-semibold text-slate-100">{step.title}</p>
                    <p className="text-sm leading-relaxed text-slate-200">{step.detail}</p>
                    {step.images ? (
                      <div className={step.images.length > 1 ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" : "space-y-3"}>
                        {step.images.map((image) => (
                          <figure key={image.src} className="rounded-xl border border-slate-800 bg-slate-900/60 p-2">
                            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60">
                              <CdnImage
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                width={1600}
                                height={900}
                                className="h-auto w-full"
                                sizes="(max-width: 1024px) 100vw, 520px"
                              />
                            </div>
                            <figcaption className="mt-2 text-[11px] leading-relaxed text-slate-300">{image.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
          Important: after turning in all three cures, the quest can require waiting about two full in-game days before Zhai Xu leaves a note and the
          “meet at the northern shore” objective becomes available.
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Mistveil City prep checklist.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Quick mistveil city where winds meet checklist: do these now, then re-check the boundary on your server after the unlock date your client shows.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Finish Ephemeral Blight and clear Mistveil Forest’s mist (Zhai Xu antidote).",
            "Collect all Mistveil Forest Cures: Wishing Cove, Hollow Abode, Aureate Pavilion.",
            "Unlock nearby teleport points and stock basic consumables for exploration.",
            "Keep a quest slot open if your journal has a strict active-quest limit.",
            "Re-check the Mistveil City boundary after the reported date on your server.",
          ].map((item) => (
            <li key={item} className="flex gap-2 rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
              <span className="mt-0.5 text-emerald-300">✓</span>
              <span className="text-sm leading-relaxed text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Mistveil City FAQ</h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          These are the most common mistveil city where winds meet questions — especially about the lock message and the unlock date.
        </p>
        <div className="divide-y divide-slate-800">
          {faq.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-100">
                {item.q}
                <span className="float-right text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
