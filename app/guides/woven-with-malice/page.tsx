import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WalkthroughGallery from "./WalkthroughGallery";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "Woven with Malice Guide (Where Winds Meet)",
  description:
    "31-step Woven with Malice quest guide for Where Winds Meet: Zi/Chou times, dyes, monk duel, trap and bamboo tail, plus bug fixes and zoomable screenshots.",
  alternates: {
    canonical: `${baseUrl}/guides/woven-with-malice`,
  },
  openGraph: {
    title: "Woven with Malice – Where Winds Meet Guide",
    description:
      "Trigger Zi hour, collect dyes, confront the monk, set the trap, and finish Woven with Malice fast. Includes bug fixes and zoomable screenshots.",
    url: `${baseUrl}/guides/woven-with-malice`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/woven-with-malice/header-01.png"),
        width: 1200,
        height: 675,
        alt: "Woven with Malice quest bell scene in Where Winds Meet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woven with Malice – Where Winds Meet Guide",
    description:
      "Step-by-step route, time gates, trap setup, and fixes for Woven with Malice in Where Winds Meet.",
    images: [cdn("/guides/woven-with-malice/header-01.png")],
  },
};

const quickFacts = [
  { label: "Region", value: "Qinghe – near Buddha Fort (Sundara Land)", icon: "🧭" },
  { label: "Quest type", value: "Encounter / Lost Chapter", icon: "📜" },
  { label: "Time gates", value: "Start at Zi hour; garment pickup at Chou hour", icon: "⏱️" },
  { label: "Core actions", value: "Dyes → handkerchief clues → monk duel → trap → bamboo trail", icon: "🧶" },
  { label: "Common issue", value: "Progress stalls if time not set or trap not burned with fire", icon: "⚠️" },
  { label: "Reported rewards", value: "Echo Jade, Lingering Melody, Coins, EXP, Jade Fish", icon: "🎁" },
];

const fastRoute = [
  "Set time to Zi hour, talk to the scholar trapped in the bell.",
  "Meet the little girl at the embroidery spot; collect red, blue, and black dyes and hand them in.",
  "Advance one in-game day → set Chou hour → pick up the Celestial Silk Garment.",
  "Return to the bell, eavesdrop, find the scholar dead, and loot the first handkerchief.",
  "Confront Monk Tranquillus and spar; get the second handkerchief clue (“repay with life”).",
  "Choose a trap spot, burn dead vines with fire, and hide the girl; silkworm lady appears then flees.",
  "Tail her, then find the monk stuck in his own trap.",
  "Go to the bamboo grove, talk to the girl, then interrogate the embroidery pavilion owner.",
  "Inspect his cart, clear rubble in nearby ruins (Q + Jump), and check the stone wall.",
  "Use Wind Sense in the bamboo forest, eavesdrop on two men, then ambush the owner.",
  "Get gassed, see the rescue cutscene, talk to the girl, and the quest completes.",
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
    title: "Set time to Zi hour",
    text: "Open the clock and set in-game time to Zi hour before approaching the bell.",
    image: {
      src: cdn("/guides/woven-with-malice/step-02-time-zi.png"),
      alt: "Setting time to Zi hour for the quest",
    },
  },
  {
    title: "Reach the bell scholar",
    text: "Head to Buddha Fort (Qinghe) and check the bell with the trapped scholar.",
    image: {
      src: cdn("/guides/woven-with-malice/step-01-bell.png"),
      alt: "Arriving at the bell with the trapped scholar",
    },
  },
  {
    title: "Talk to start the quest",
    text: "Speak to the scholar inside the bell to formally start Woven with Malice.",
    image: {
      src: cdn("/guides/woven-with-malice/step-03-bell-talk.png"),
      alt: "Talking to the scholar in the bell to begin",
    },
  },
  {
    title: "Go to the embroiderers",
    text: "Follow the marker toward the embroidery spot to continue the quest.",
    image: {
      src: cdn("/guides/woven-with-malice/step-04-embroidery-ladies.png"),
      alt: "Walking toward the embroiderers' location",
    },
  },
  {
    title: "Speak to the little girl",
    text: "Find the little girl at the embroiderers and hear her request.",
    image: {
      src: cdn("/guides/woven-with-malice/step-05-little-girl.png"),
      alt: "Talking to the little girl near the embroiderers",
    },
  },
  {
    title: "Collect red and blue dyes",
    text: "Pick up the red and blue dyes from the nearby courtyard containers.",
    image: {
      src: cdn("/guides/woven-with-malice/step-06-red-blue-dye.png"),
      alt: "Gathering red and blue dye for the garment",
    },
  },
  {
    title: "Collect black dye",
    text: "Grab the black dye from the charcoal basin to finish the set.",
    image: {
      src: cdn("/guides/woven-with-malice/step-07-black-dye.png"),
      alt: "Picking up black dye from the charcoal basin",
    },
  },
  {
    title: "Hand in dyes and wait a day",
    text: "Return dyes to the girl, then advance one in-game day and set time to Chou hour.",
    image: {
      src: cdn("/guides/woven-with-malice/step-08-wait-chou.png"),
      alt: "Advancing time to Chou hour after handing in dyes",
    },
  },
  {
    title: "Eavesdrop by the bell",
    text: "Return to the bell and listen to the conversation between the scholar and the woman.",
    image: {
      src: cdn("/guides/woven-with-malice/step-09-eavesdrop.png"),
      alt: "Eavesdropping on the conversation at the bell",
    },
  },
  {
    title: "Find the scholar dead",
    text: "Check the bell again to find the scholar dead inside.",
    image: {
      src: cdn("/guides/woven-with-malice/step-10-scholar-dead.png"),
      alt: "Discovering the scholar has died",
    },
  },
  {
    title: "Read the first handkerchief",
    text: "Pick up the handkerchief on the ground and read its contents.",
    image: {
      src: cdn("/guides/woven-with-malice/step-11-handkerchief-1.png"),
      alt: "First handkerchief clue on the ground",
    },
  },
  {
    title: "Find Monk Tranquillus",
    text: "Go to the monk, mention the Silkworm Lady, and question him.",
    image: {
      src: cdn("/guides/woven-with-malice/step-12-monk.png"),
      alt: "Talking to Monk Tranquillus",
    },
  },
  {
    title: "Spar with the monk",
    text: "Fight the monk to make him tell the truth and progress the quest.",
    image: {
      src: cdn("/guides/woven-with-malice/step-13-spar.png"),
      alt: "Sparring with the monk to advance the story",
    },
  },
  {
    title: "Get the second handkerchief",
    text: "Receive the second handkerchief with the clue “repay with life.”",
    image: {
      src: cdn("/guides/woven-with-malice/step-14-handkerchief-2.png"),
      alt: "Second handkerchief clue from the monk",
    },
  },
  {
    title: "Debrief with the girl",
    text: "Discuss the new clue with the little girl to set up the next move.",
    image: {
      src: cdn("/guides/woven-with-malice/step-15-talk-girl.png"),
      alt: "Talking with the girl about the second clue",
    },
  },
  {
    title: "Pick an ambush spot",
    text: "Choose the trap location as directed by the quest marker.",
    image: {
      src: cdn("/guides/woven-with-malice/step-16-trap-spot.png"),
      alt: "Selecting the trap site",
    },
  },
  {
    title: "Burn the dead vines",
    text: "Use fire arrows or fire-element skills to burn away the vines at the trap.",
    image: {
      src: cdn("/guides/woven-with-malice/step-17-burn-vines.png"),
      alt: "Burning the vines to prep the trap",
    },
  },
  {
    title: "Hide the girl safely",
    text: "Position the little girl out of harm’s way before the encounter.",
    image: {
      src: cdn("/guides/woven-with-malice/step-18-hide-girl.png"),
      alt: "Hiding the little girl near the trap",
    },
  },
  {
    title: "Silkworm Lady arrives",
    text: "Wait for the Silkworm Lady to appear when the monk calls out.",
    image: {
      src: cdn("/guides/woven-with-malice/step-19-silkworm-lady-appears.png"),
      alt: "Silkworm Lady showing up at the trap",
    },
  },
  {
    title: "Follow the fleeing target",
    text: "Tail her as she runs—stay within range to keep the sequence alive.",
    image: {
      src: cdn("/guides/woven-with-malice/step-20-follow.png"),
      alt: "Following the fleeing Silkworm Lady",
    },
  },
  {
    title: "Monk trapped by his own device",
    text: "Return to see the monk caught in his own trap after the chase.",
    image: {
      src: cdn("/guides/woven-with-malice/step-21-monk-trapped.png"),
      alt: "Monk stuck in his trap",
    },
  },
  {
    title: "Meet the girl in the bamboo grove",
    text: "Head to the bamboo grove and talk with the girl to continue.",
    image: {
      src: cdn("/guides/woven-with-malice/step-22-bamboo-grove.png"),
      alt: "Meeting the girl in the bamboo grove",
    },
  },
  {
    title: "Talk to the embroidery owner",
    text: "Find the embroidery pavilion owner and complete his dialogue.",
    image: {
      src: cdn("/guides/woven-with-malice/step-23-embroidery-owner.png"),
      alt: "Questioning the embroidery pavilion owner",
    },
  },
  {
    title: "Inspect the cart",
    text: "Check the owner’s cart for clues before moving on.",
    image: {
      src: cdn("/guides/woven-with-malice/step-24-cart.png"),
      alt: "Inspecting the embroidery owner’s cart",
    },
  },
  {
    title: "Clear rubble in the ruins",
    text: "At the nearby ruins, use Q + Jump to clear debris and enter.",
    image: {
      src: cdn("/guides/woven-with-malice/step-25-ruins.jpg"),
      alt: "Clearing debris to enter the ruins",
    },
  },
  {
    title: "Inspect the stone wall",
    text: "Inside, examine the stone wall for more evidence.",
    image: {
      src: cdn("/guides/woven-with-malice/step-26-stone-wall.png"),
      alt: "Inspecting the stone wall inside the ruins",
    },
  },
  {
    title: "Sweep with Wind Sense",
    text: "Activate Wind Sense in the bamboo forest and move slowly until anomalies appear.",
    image: {
      src: cdn("/guides/woven-with-malice/step-27-wind-sense.png"),
      alt: "Using Wind Sense in the bamboo forest",
    },
  },
  {
    title: "Eavesdrop on two men",
    text: "Follow the anomaly to overhear two men talking about the plot.",
    image: {
      src: cdn("/guides/woven-with-malice/step-28-eavesdrop.png"),
      alt: "Eavesdropping on two men in the bamboo grove",
    },
  },
  {
    title: "Ambush the owner",
    text: "Intercept the embroidery owner to warn the girl, but he uses sleeping smoke.",
    image: {
      src: cdn("/guides/woven-with-malice/step-29-ambush.png"),
      alt: "Ambushing the embroidery owner",
    },
  },
  {
    title: "Rescue cutscene",
    text: "You’re gassed; two martial artists arrive and save you in the cutscene.",
    image: {
      src: cdn("/guides/woven-with-malice/step-30-rescue.png"),
      alt: "Cutscene where rescuers intervene",
    },
  },
  {
    title: "Final talk with the girl",
    text: "Speak with the girl after waking up to close out Woven with Malice.",
    image: {
      src: cdn("/guides/woven-with-malice/step-31-finish.png"),
      alt: "Talking to the girl to complete the quest",
    },
  },
];

const stuckFixes = [
  "Quest won’t start: set time to Zi hour, talk to the bell scholar, then relog or change channel if it still doesn’t trigger.",
  "Vines don’t burn: only fire arrows or fire-element skills work; other damage types won’t clear them.",
  "Tail breaks: stay grounded and within the marker radius; avoid long glides or mounts during the chase.",
  "Wind Sense shows nothing: walk the bamboo grove slowly and re-cast Wind Sense until anomalies pop on the mini-map.",
  "Dialogue loops: re-initiate conversation after sparring the monk; if stuck, relog and repeat the previous node.",
];

const faq = [
  {
    q: "What time do I need for Woven with Malice in Where Winds Meet?",
    a: "Zi hour to start with the bell scholar, and Chou hour to pick up the Celestial Silk Garment. If nothing triggers, re-set the time, relog, or change channel.",
  },
  {
    q: "How do I burn the dead vines at the trap?",
    a: "Use fire arrows or any fire-element skill. Other damage sources won’t clear the vines.",
  },
  {
    q: "The silkworm lady disappears or the tail breaks—what do I do?",
    a: "Stay close to the route, avoid flying too far, and retry from the step before the tail. Changing channel can also help.",
  },
  {
    q: "Wind Sense isn’t highlighting anything.",
    a: "Recast Wind Sense while moving slowly through the bamboo grove until anomalies appear on the mini-map, then approach to trigger the eavesdrop.",
  },
  {
    q: "Does sparring the monk matter?",
    a: "Yes. You must spar to force him to reveal the second handkerchief clue and advance the quest.",
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
      name: "Woven with Malice",
      item: `${baseUrl}/guides/woven-with-malice`,
    },
  ],
};

export default function WovenWithMalicePage() {
  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-emerald-900/30">
        <div className="absolute inset-0">
          <Image
            src={cdn("/guides/woven-with-malice/header-02.png")}
            alt="Woven with Malice key art"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Encounter / Lost Chapter
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Woven with Malice quest walkthrough
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              31-step Woven with Malice quest guide for Where Winds Meet: trigger Zi hour, collect dyes, confront the monk,
              set the trap, tail through the bamboo forest, and apply fixes if Woven with Malice is bugged. For anyone
              searching “where winds meet woven with malice quest” or “woven with malice where winds meet,” this page keeps
              everything in one place with zoomable screenshots so you can spot details without guesswork.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/40">
                Start at Zi hour
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-sky-400/30">
                Fire needed for trap
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">
                Wind Sense in bamboo
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-inner shadow-slate-900/60">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Quick facts</h2>
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

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Fast route (TL;DR)
          </h2>
          <Link
            href="/guides"
            className="text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Back to Guides
          </Link>
        </div>
        <ol className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {fastRoute.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-200 ring-1 ring-emerald-400/40">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-slate-400">
          This walkthrough exists because “where winds meet woven with malice quest” and “woven with malice where winds meet”
          are the exact problems players search when the quest softlocks or stalls.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Full walkthrough with screenshots
        </h2>
        <WalkthroughGallery steps={walkthrough} />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Stuck? Try these fixes</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {stuckFixes.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
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
              <div className="text-sm font-semibold text-emerald-200">Q. {item.q}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-200">A. {item.a}</div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
