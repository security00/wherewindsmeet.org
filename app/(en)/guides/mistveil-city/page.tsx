import type { Metadata } from "next";
import Link from "next/link";
import MistveilCityAuthorizedMedia from "@/components/guides/MistveilCityAuthorizedMedia";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const allThingsSourceUrl =
  "https://allthings.how/where-winds-meet-mistveil-forest-cures-and-mistveil-city-unlock/";
const walkthroughSourceUrl =
  "https://www.youtube.com/results?search_query=Where+Winds+Meet+Ephemeral+Blight+100%25+Guides";
const mistveilHero = `${baseUrl}/guides/mistveil-city/allthings/Screenshot-2026-01-10-100403-1.png`;

export const metadata: Metadata = {
  title: "Mistveil City Where Winds Meet: Lock & Ephemeral Blight",
  description:
    "Mistveil City lock history, why the old Jan 22/26 dates are no longer current guidance, and a step-by-step Ephemeral Blight route through Mistveil Forest.",
  alternates: buildHreflangAlternates("/guides/mistveil-city"),
  openGraph: {
    title: "Mistveil City Where Winds Meet: Lock & Ephemeral Blight",
    description:
      "Review the historical Mistveil City lock reports and follow the Ephemeral Blight route without treating elapsed January 2026 dates as upcoming guidance.",
    url: `${baseUrl}/guides/mistveil-city`,
    siteName: "Where Winds Meet Hub",
    images: [{ url: mistveilHero, width: 1206, height: 678, alt: "Historical Mistveil City boundary capture" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mistveil City Where Winds Meet: Lock & Ephemeral Blight",
    description:
      "Historical Mistveil City lock context, the elapsed Jan 22/26 reports, and the Ephemeral Blight route through Mistveil Forest.",
    images: [mistveilHero],
  },
};

const lastUpdated = "August 26, 2026";

const tlDr = [
  "Archived January 2026 reports described a “not yet open / come back later” boundary that teleported players out after a short countdown.",
  "The reported January 22 and January 26 dates have passed. They are preserved only as rollout history and should not be presented as a current unlock schedule.",
  "Clearing Ephemeral Blight and collecting the three Mistveil Forest Cures advances Mistveil Forest exploration; archived reports treated City access as a separate check.",
  "If the boundary still appears in your client, record its exact message, verify region prerequisites and current official notes, and avoid relying on the old January dates.",
];

const faq = [
  {
    q: "Why is Mistveil City locked in Where Winds Meet?",
    a: "Archived January 2026 reports described a hard boundary with a “This area is not yet open” message and a forced teleport. That explains the historical search intent, but it does not prove the current cause of a lock shown by your client.",
  },
  {
    q: "Do I need to join Nine Mortal Ways to enter Mistveil City?",
    a: "Archived community reports did not consistently tie the old boundary to sect choice. If you are blocked now, use the current in-game objective and official support rather than treating those reports as a present-day requirement test.",
  },
  {
    q: "When does Mistveil City open?",
    a: "The January 22 and January 26, 2026 dates quoted by old guides have passed, so they are not a current answer. Follow the exact message and objective shown by your client and check current official patch notes or support for an account- or region-specific blocker.",
  },
  {
    q: "Does clearing Ephemeral Blight unlock Mistveil City?",
    a: "Clearing Ephemeral Blight removes the Dawn-to-Dusk mist over Mistveil Forest and advances exploration there. Archived reports treated City access as a separate check, so this guide does not promise that the quest alone resolves every current boundary message.",
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

type WalkthroughStep = {
  title: string;
  detail: string;
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
      },
      {
        title: "Use Wind Sense, then distract him with Meridian Touch",
        detail:
          "Inside the house, use Wind Sense to spot the two books on the table—but Zhai Xu warns you not to meddle. Stand by the window above the table and use Meridian Touch on the wind chime to draw him outside.",
      },
      {
        title: "Read the books and unlock the 3-cure objective",
        detail:
          "While Zhai Xu is out, read both books (the Wishing Cove cure + the Thousand-Wish Amendment). Then open Bag → Quest Items and read the Amendment: it lists the three Mistveil Forest Cures you need (Wishing Cove, Hollow Abode, Aureate Pavilion).",
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
      },
      {
        title: "Grab the cure from the central hut (near the mummified body)",
        detail:
          "Your target is the main hut at the center of the outpost. Either fight through or sneak in with movement skills; inside, the cure sits on a table beside a mummified body.",
      },
    ],
  },
  {
    title: "Returning to Zhai Xu and preparing the antidote",
    steps: [
      {
        title: "Hand in all three cures at Wishing Cove",
        detail: "Return to Zhai Xu and hand over the three cure notes so he can begin preparing the antidote.",
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
      },
      {
        title: "Burn the blooms, then search the hanging-corpse tree area",
        detail:
          "Equip Fire Arrows and burn the toxin blooms to open the way. Continue until you find the huge tree with hanging corpses; destroy the three blooms there, defeat the Sleeping Puppets that wake up, and pick up the half jade pendant that drops near the tree.",
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
      },
      {
        title: "Read Sun Buqi’s notes and start deductions",
        detail:
          "Search the room, read Sun Buqi’s Notes and nearby documents, then open the deduction interface and pair the clues into a coherent story.",
      },
      {
        title: "Follow the Sleeping Puppet and destroy the final blooms",
        detail:
          "After confirming the deductions, interact with the unusual Sleeping Puppet near the mummy. Follow it through the caves to the mist source and destroy the three large blooms maintaining the fog, then return to Zhai Xu to finish Ephemeral Blight and clear Mistveil Forest permanently.",
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/35 via-slate-950 to-slate-950" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Reviewed {lastUpdated} · historical gate context
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Mistveil City Where Winds Meet: lock history and Ephemeral Blight guide.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            If you searched “mistveil city where winds meet” after seeing a boundary message, this page separates archived January 2026 reports from the
            still-useful Ephemeral Blight walkthrough. It does not assume that an old rollout date explains a lock shown by your client today.
          </p>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            The January 22 and January 26 dates below are historical reports, not upcoming dates. The actionable part is the Mistveil Forest prerequisite
            route: clear Ephemeral Blight, collect all three cures, and compare any remaining boundary message with current official guidance.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/50">Jan 22/26 reports: historical</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-slate-400/40">Verify current client message</span>
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

      <section className="space-y-3 rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-amber-100">Source and media boundary</h2>
        <p className="text-sm leading-relaxed text-amber-50/90">
          This text route uses third-party community walkthrough material as a cross-check, not as official game guidance.
          Publisher: AllThings.How. Reuse authorization confirmed by site owner 2026-08-29. The captures document a
          January 2026 route and are not current-build proof; verify changing objectives in your current client and
          official patch notes.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={allThingsSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-amber-100 underline underline-offset-4 hover:text-amber-50">
            Read the AllThings.How source article →
          </a>
          <a href={walkthroughSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-amber-100 underline underline-offset-4 hover:text-amber-50">
            Find the credited 100% Guides walkthrough on YouTube →
          </a>
        </div>
      </section>

      <MistveilCityAuthorizedMedia locale="en" />

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          What the historical Mistveil City lock message meant.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The archived reports separated the Mistveil City boundary from Mistveil Forest progression. Players said the “not yet open” message could
          remain after clearing the Dawn-to-Dusk mist, which is why old search results discuss two different checks.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Those reports are useful history, not evidence that every current lock has the same cause. A present-day boundary could depend on client,
          account, region, quest progress, or a later update, so use the exact in-game wording and current official support when troubleshooting it.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          In practice, many historical searches were about the forced-teleport message rather than a hidden puzzle. This page keeps that distinction while
          avoiding an unsupported current unlock claim.
        </p>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-semibold text-slate-50">Practical takeaway</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            Do not waste hours trying to brute-force a boundary. Finish the documented forest prerequisites, capture the exact client message, and check
            current official notes or support; this page does not assign a new calendar date without an official source.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Archived January 2026 unlock-date reports.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Guides and community threads published in January 2026 cited two dates: <strong>January 22, 2026</strong> and{" "}
          <strong>January 26, 2026</strong>. Both dates have passed. They are retained here to explain old search results, not as a current schedule or a
          promise that a present-day boundary will clear automatically.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The safest approach is to rely on the exact message and objective shown by your current client, then check official notes. For a quick place to
          monitor update windows, use our{" "}
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
          Ephemeral Blight and the Mistveil Forest Cures route.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Regardless of the historical City gate, the documented Mistveil Forest route remains useful. This guide focuses on{" "}
          <strong>Ephemeral Blight</strong>, which clears the Dawn-to-Dusk mist in Mistveil Forest once you help Zhai Xu craft the antidote.
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
          <span className="text-lg">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Ephemeral Blight text walkthrough</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you’re here from a mistveil city where winds meet search, use the steps below to finish Ephemeral Blight and clear Mistveil Forest. This
          walkthrough is organized like the original guide: cures first, then the mist-clearing objective.
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
          Quick mistveil city where winds meet checklist: complete the documented prerequisites, then re-check the current client message and official notes.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Finish Ephemeral Blight and clear Mistveil Forest’s mist (Zhai Xu antidote).",
            "Collect all Mistveil Forest Cures: Wishing Cove, Hollow Abode, Aureate Pavilion.",
            "Unlock nearby teleport points and stock basic consumables for exploration.",
            "Keep a quest slot open if your journal has a strict active-quest limit.",
            "Re-check the Mistveil City boundary after the prerequisites and compare any message with current official guidance.",
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
          These are common mistveil city where winds meet questions about the historical lock message, elapsed date reports, and forest prerequisites.
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
