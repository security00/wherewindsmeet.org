import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const heroImagePath = "/guides/mist-shrouded-prison/youtube-cover.jpg";
const heroImage = `${cdnBase}${heroImagePath}`;
const cdn = (path: string) => `${cdnBase}${path}`;
const walkthrough = [
  {
    title: "Find the Mist-Shrouded Prison entrance",
    detail:
      "Complete The Ephemeral Blight, deliver all Mistveil Forest Cures to Zhai Xu for the antidote, then ride the elevator near Central Mistveil Forest. Burn the first blue bud with a fire arrow to open the tomb.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-tomb-location-in-wwm-where-winds-meet.jpg"), alt: "Mist-Shrouded Prison tomb entrance location" },
  },
  {
    title: "Loop 1 start: veined door on the right",
    detail: "From the entrance, a room on the right is sealed by veins from a blue flower bud—ignore it now. Climb the ladder on the left; this tomb will loop three times.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/loop-1-mist-shrouded-prison-chest-1-location-in-wwm-where-winds-meet.jpg"), alt: "Loop 1 hall overview" },
  },
  {
    title: "Chest 1 (red room with the red lady)",
    detail: "Enter the red-lit room ahead; the red lady stands inside during loop 1. Loot the first chest beside her.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-1-location-in-wwm-where-winds-meet.jpg"), alt: "Mist-Shrouded Prison chest 1 location" },
  },
  {
    title: "Frost Fungus corridor and bud",
    detail: "Leave the room, push through the Frost Fungus Poison corridor, and burn the blue bud on the far side with a fire arrow to keep moving.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/loop-1-destroy-bud-with-fire-in-wwm-where-winds-meet.jpg"), alt: "Burn the bud to progress" },
  },
  {
    title: "Chest 2 (ceiling spikes trigger)",
    detail: "Keep going to chest 2; opening it drops a spike trap from the roof, so open then step back toward the entrance.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-2-location-in-wwm-where-winds-meet.jpg"), alt: "Mist-Shrouded Prison chest 2 location" },
  },
  {
    title: "Chest 3 (left corridor via spikes)",
    detail: "Jump onto the rising spikes, then angle left into the small corridor to claim chest 3.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-3-location-in-wwm-where-winds-meet.jpg"), alt: "Mist-Shrouded Prison chest 3 location" },
  },
  {
    title: "Cross the spikes and climb up",
    detail: "Use the spikes again to reach the opposite side and climb the ladder toward the upper path.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest.png"),
      alt: "Mist-Shrouded Prison spike room overview",
    },
  },
  {
    title: "Step on the pressure plate",
    detail: "Hit the pressure plate to send the horizontal spikes moving; head back toward the entrance to follow them.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/press-the-pressure-plate-to-activate-spikes-in-wwm-where-winds-meet.jpg"),
      alt: "Pressure plate for spikes",
    },
  },
  {
    title: "Chest 4 (behind the moving spikes)",
    detail: "When the spikes slide forward, run right behind them to pick up chest 4 safely.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-4-location-in-wwm-where-winds-meet.jpg"),
      alt: "Mist-Shrouded Prison chest 4 location",
    },
  },
  {
    title: "Drop to start Loop 2",
    detail: "Head through the gate and drop into the familiar first room. The red lady beside the ladder signals loop 2.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/how-to-enter-loop-2-in-wwm-where-winds-meet.jpg"),
      alt: "Enter loop 2 via drop",
    },
  },
  {
    title: "Repeat the spike room in Loop 2",
    detail: "Cross the corridor into the spike room again, climb the ladder, press the plate, and move forward to push the layout into the final loop.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/step-11.png"),
      alt: "Loop 2 spike reset",
    },
  },
  {
    title: "Enter Loop 3",
    detail: "After the repeat, you're now in loop 3—the last rotation through the tomb.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/enter-loop-3-in-wwm-where-winds-meet.jpg"),
      alt: "Entering loop 3 section",
    },
  },
  {
    title: "Red lady in the blue-flower corridor",
    detail: "Climb the ladder and turn right; the corridor lined with blue flowers now holds the red lady, confirming loop 3.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/loop-3-in-wwm-where-winds-meet.jpg"),
      alt: "Loop 3 corridor with blue flowers",
    },
  },
  {
    title: "Chest 5 (poison corridor)",
    detail: "Push through the poison here without stopping and open the fifth chest along the hall.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-5-location-in-wwm-where-winds-meet.jpg"),
      alt: "Mist-Shrouded Prison chest 5 location",
    },
  },
  {
    title: "Destroy the second blue bud",
    detail: "Exit the corridor, burn the blue bud ahead, and continue to the room with the note on the table.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/destroy-blue-bud-2-in-wwm-where-winds-meet.jpg"),
      alt: "Destroy blue bud after chest 5",
    },
  },
  {
    title: "Drop onto the moving spikes",
    detail: "From the note room, look down the hole and wait for the horizontal spikes from loop 2 to line up; drop onto them.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/jump-onto-the-moving-spikes-in-wwm-where-winds-meet.jpg"),
      alt: "Jumping onto the moving spikes",
    },
  },
  {
    title: "Ride to the corner and clear the ambush",
    detail: "As the spikes near the edge, hop off and defeat the enemy hiding nearby.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/step-17.png"),
      alt: "Corner ambush near the spikes",
    },
  },
  {
    title: "Chest 6 (loop 3 reward)",
    detail: "Open chest 6 in this section once the ambush is clear.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-6-location-in-wwm-where-winds-meet.jpg"),
      alt: "Mist-Shrouded Prison chest 6 location",
    },
  },
  {
    title: "Drop toward the earlier halls",
    detail: "Continue forward and fall through the long hole to land near chest 3's spot from loop 1.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/drop-from-chest-6-location-to-return-to-loop-1-in-wwm-where-winds-meet.jpg"),
      alt: "Drop from chest 6 spot to loop 1",
    },
  },
  {
    title: "Return via the spike trap path",
    detail: "Head to the spike room, climb the moving spikes, jump left into the small corridor, then drop through the two holes to the wide corridor.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/frop-down-from-chest-in-loop-2-in-wwm-where-winds-meet.jpg"),
      alt: "Return path through spike trap room",
    },
  },
  {
    title: "Clear the bud at the corridor's end",
    detail: "Burn the blue bud at the end with a fire arrow and pass through the gate back to the original room.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/remove-the-bud-to-open-the-final-door-in-wwm-where-winds-meet.jpg"),
      alt: "Remove bud for final door",
    },
  },
  {
    title: "Final treasure chest",
    detail: "Enter the once-veined room from loop 1 and open the final treasure chest at the back.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/final-treasure-wide.jpg"),
      alt: "Final treasure wide angle view",
    },
  },
  {
    title: "Rest in Peace",
    detail: "Pay respect at the marker to finish the Mist-Shrouded Prison tomb.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/pray-to-red-lady-in-wwm-where-winds-meet.jpg"),
      alt: "Pray to Red Lady interaction",
    },
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet: Mist-Shrouded Prison – 6 Chests & Final Treasure",
  description:
    "Where Winds Meet Mist-Shrouded Prison tomb guide: unlock after Ephemeral Blight, follow loops 1–3 via red lady markers, and grab six chests and final treasure.",
  alternates: buildHreflangAlternates("/guides/mist-shrouded-prison"),
  openGraph: {
    title: "Where Winds Meet: Mist-Shrouded Prison – 6 Chests & Final Treasure",
    description:
      "Where Winds Meet Mist-Shrouded Prison tomb guide: unlock after Ephemeral Blight, follow loops 1–3 via red lady markers, and grab six chests and final treasure.",
    url: `${baseUrl}/guides/mist-shrouded-prison`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: heroImage,
        width: 1280,
        height: 720,
        alt: "Mist-Shrouded Prison treasure route preview in Where Winds Meet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet: Mist-Shrouded Prison – 6 Chests & Final Treasure",
    description:
      "Where Winds Meet Mist-Shrouded Prison tomb guide: unlock after Ephemeral Blight, follow loops 1–3 via red lady markers, and grab six chests and final treasure.",
    images: [
      {
        url: heroImage,
        alt: "Mist-Shrouded Prison treasure route preview in Where Winds Meet",
      },
    ],
  },
};

const quickFacts = [
  { label: "Location", value: "Mistveil Forest tomb (after clearing mist with Zhai Xu's antidote)", icon: "🧭" },
  { label: "Loop markers", value: "Red lady: red room → beside ladder → blue-flower corridor", icon: "👁️" },
  { label: "Chests", value: "6 loop chests + final treasure behind the veined door", icon: "🎁" },
  { label: "Hazards", value: "Frost Fungus Poison, moving spikes, blue flower buds", icon: "⚠️" },
  { label: "Prep", value: "Finish The Ephemeral Blight, collect cures, ride the elevator near Central Mistveil Forest", icon: "🧪" },
];

const tlDr = [
  "Finish The Ephemeral Blight: gather all Mistveil Forest Cures, hand them to Zhai Xu for the antidote, clear the mist, ride the elevator by Central Mistveil Forest, and burn the first blue bud to enter the Where Winds Meet Mist-Shrouded Prison tomb.",
  "Loop 1 in the Where Winds Meet tomb: ignore the veined door, climb the left ladder, and loot chest 1 in the red room with the red lady. Push through the poison corridor to burn the bud; chest 2 drops ceiling spikes, then ride the moving spikes to reach chest 3.",
  "Step on the plate above the spikes, trail the horizontal trap to grab chest 4, and drop past the gate—red lady by the ladder marks loop 2. Repeat the spike-room plate to drive the Mist-Shrouded Prison into loop 3.",
  "Loop 3: turn right to see the red lady in the blue-flower hall, take the poison to chest 5, burn the next bud, drop onto the moving spikes from the note room, clear the ambush for chest 6, then follow the drop path to clear the last bud and open the final treasure before pressing Rest in Peace.",
];

const steps = [
  {
    title: "Unlock the dungeon",
    detail:
      "Complete The Ephemeral Blight, deliver every Mistveil Forest Cure to Zhai Xu to get the antidote, ride the elevator near Central Mistveil Forest, and burn the initial bud to access the Where Winds Meet Mist-Shrouded Prison tomb.",
  },
  {
    title: "Track the loops",
    detail:
      "The layout repeats three times. The red lady shows your loop: red room (loop 1), beside the ladder after the drop (loop 2), and in the blue-flower corridor to the right (loop 3). Leave the veined door until the end so the Mist-Shrouded Prison tomb stays in sync.",
  },
  {
    title: "Loop 1: Chests 1–4",
    detail:
      "Climb the left ladder; chest 1 sits with the red lady. Push through Frost Fungus Poison and burn the bud. Chest 2 triggers ceiling spikes; ride the moving spikes to chest 3. Hit the plate above and trail the horizontal spikes to chest 4 inside the Where Winds Meet tomb.",
  },
  {
    title: "Loop 2 transition",
    detail:
      "Proceed past the gate and drop to the start; the red lady by the ladder confirms loop 2. Cross the corridor to the spike room again, climb, press the plate, and move forward to force the final loop in Mist-Shrouded Prison.",
  },
  {
    title: "Loop 3: Chests 5–6",
    detail:
      "Turn right after the ladder for the blue-flower hall. Endure poison to open chest 5, burn the next bud, drop onto the moving spikes when aligned, clear the corner ambush, and open chest 6 to finish the main Where Winds Meet tomb loop.",
  },
  {
    title: "Final treasure and exit",
    detail:
      "From chest 6, drop to the earlier hall, use the spike trap to reach the double holes and wide corridor, burn the last bud, return to the veined room for the final chest, then press Rest in Peace to finish the Mist-Shrouded Prison tomb.",
  },
];

const faq = [
  {
    q: "How do I start Mist-Shrouded Prison?",
    a: "Finish The Ephemeral Blight, gather all Mistveil Forest Cures, deliver them to Zhai Xu for the antidote, clear the mist, ride the elevator near Central Mistveil Forest, and burn the first bud to enter.",
  },
  {
    q: "How can I tell which loop I'm in?",
    a: "By the red lady's spot: red room (loop 1), beside the ladder after the first drop (loop 2), and in the blue-flower corridor to the right (loop 3).",
  },
  {
    q: "Where are all the chests?",
    a: "Chest 1 is in the red room; chest 2 is after the poison corridor and triggers ceiling spikes; chest 3 is left via the moving spikes; chest 4 sits behind the horizontal spikes; chest 5 is in the loop 3 poison corridor; chest 6 follows the spike drop from the note room; the final chest is behind the veined door from loop 1.",
  },
  {
    q: "Any tips for Frost Fungus Poison and traps?",
    a: "Keep moving through poison, heal after chests, and time the moving spikes—ride them up, then hop off toward the left corridor or the ambush corner.",
  },
  {
    q: "What completes the tomb?",
    a: "Burn the last bud to reopen the veined room from loop 1, open the final treasure chest, then press Rest in Peace at the marker to finish.",
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
      name: "Mist-Shrouded Prison",
      item: `${baseUrl}/guides/mist-shrouded-prison`,
    },
  ],
};

const related = [
  { href: "/guides/unholy-prophecy", title: "An Unholy Prophecy (braziers, Meridian Touch)" },
  { href: "/guides/woven-with-malice", title: "Woven with Malice (time gates, traps)" },
  { href: "/guides/one-leaf-one-life", title: "One Leaf One Life (Lost Chapter walkthrough)" },
  { href: "/news#roadmap", title: "Roadmap / next updates" },
];

export default function MistShroudedPrisonPage() {
  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src={heroImage}
            alt="Mist-Shrouded Prison route preview"
            fill
            className="object-cover opacity-45"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>
        <div className="relative space-y-4 z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Updated Jan 2025 · TL;DR below
          </div>
          <h1 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Mist-Shrouded Prison guide – all chests (including the last one)
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Mist-Shrouded Prison walkthrough for Where Winds Meet: unlock it after clearing Mistveil Forest with Zhai Xu’s antidote, use the red lady
            to read the loops, handle blue buds, poison, and spike traps, and grab all six chests plus the final treasure. This page keeps repeating
            “Where Winds Meet Mist-Shrouded Prison tomb” naturally so players searching for the tomb route find it quickly.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            If you need a concise Where Winds Meet tomb Mist-Shrouded Prison overview: it is a three-loop dungeon with six core chests and one final
            treasure; follow the red lady markers, burn every blue bud, and clear the spike rooms in order to finish cleanly.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/50">All 6 chests + final</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-slate-400/40">Loop markers</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/40">Spikes & blue buds</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">TL;DR route</h2>
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

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">Quick facts</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-inner shadow-black/20"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{fact.icon}</span>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-emerald-700/40 bg-emerald-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <h3 className="text-2xl font-bold text-emerald-100">Route overview</h3>
          </div>
          <ol className="space-y-2 text-sm text-emerald-50/90 list-decimal list-inside">
            {steps.map((step) => (
              <li key={step.title} className="rounded-xl border border-emerald-700/40 bg-emerald-900/20 px-3 py-2 leading-relaxed">
                <p className="font-semibold text-emerald-50">{step.title}</p>
                <p className="text-emerald-100/90 text-xs">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📜</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Clue note (loop 3 table)</h2>
        </div>
        <p className="text-sm text-slate-300 mb-3">
          You&apos;ll see this note after burning the second bud in loop 3, before dropping onto the moving spikes. Read it, then continue the steps in
          order so the Where Winds Meet Mist-Shrouded Prison tomb flow stays intact.
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-inner shadow-black/25">
          <CdnImage
            src={cdn("/guides/mist-shrouded-prison/gr/read-note-in-prison-in-wwm-where-winds-meet.jpg")}
            alt="Prison note clue in Mist-Shrouded Prison"
            width={1600}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">🖼️</span>
          <h2 className="text-2xl font-bold text-slate-50">Illustrated walkthrough</h2>
        </div>
        <ol className="space-y-5">
          {walkthrough.map((step, index) => (
            <li
              key={step.title}
              className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-black/25"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Step {index + 1}</p>
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">{step.detail}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
                <CdnImage
                  src={step.image.src}
                  alt={step.image.alt}
                  loading="lazy"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
          If you lose track: the red lady marks each loop (red room → ladder → blue-flower corridor). After chest 6, drop near chest 3, ride the spike
          trap to the wide corridor, burn the last bud, then the veined room from loop 1 will open for the final chest and Rest in Peace prompt.
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">❓</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔗</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Related guides</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎥</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Video guide (YouTube)</h2>
        </div>
        <p className="text-sm text-slate-300">
          If the illustrated steps are still unclear, watch this video walkthrough for the full Mist-Shrouded Prison route.
        </p>
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-inner shadow-black/25" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/dHDy9nzQsd4"
            title="Mist-Shrouded Prison walkthrough video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </article>
  );
}
