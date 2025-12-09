import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "./ZoomableImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Wall Puzzle Guide",
  description:
    "Echoes of Old Battles wall puzzle guide: light all braziers, use Yanyun Oath, press wall tiles 移/百/漂, and grab Touch of Death with map callouts and fixes.",
  alternates: buildHreflangAlternates("/guides/wall-puzzle"),
  openGraph: {
    title: "Where Winds Meet Wall Puzzle Guide",
    description:
      "Echoes of Old Battles wall puzzle guide: light all braziers, use Yanyun Oath, press wall tiles 移/百/漂, and grab Touch of Death with map callouts and fixes.",
    url: "https://wherewindsmeet.org/guides/wall-puzzle",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/guides/wall-puzzle/wall-tiles-right.webp",
        width: 1650,
        height: 928,
        alt: "Pressing 移 and 百 on the right wall in the Echoes of Old Battles puzzle",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Wall Puzzle Guide",
    description:
      "Echoes of Old Battles wall puzzle guide: light all braziers, use Yanyun Oath, press wall tiles 移/百/漂, and grab Touch of Death with map callouts and fixes.",
    images: ["https://wherewindsmeet.org/guides/wall-puzzle/wall-tiles-right.webp"],
  },
};

const quickAnswers = [
  {
    label: "Quest",
    value: "Echoes of Old Battles (Qinghe, Verdant Wilds)",
    color: "text-emerald-300",
    icon: "🧭",
  },
  {
    label: "Wall puzzle answer",
    value: "Press 移 + 百 on the right wall, then 漂 on the left wall.",
    color: "text-amber-300",
    icon: "🧩",
  },
  {
    label: "Key reward",
    value: "Touch of Death Assassin Mystic Skill + chest loot",
    color: "text-rose-300",
    icon: "🎁",
  },
  {
    label: "Total time",
    value: "≈10–15 minutes if you know the route",
    color: "text-sky-300",
    icon: "⏱️",
  },
];

const heroImages = [
  {
    src: "/guides/wall-puzzle/fire-contraptions-map.webp",
    alt: "Fire contraptions locations around the ruined castle in Qinghe",
    caption: "Fire contraptions map: light all four braziers to unlock the tunnel.",
  },
  {
    src: "/guides/wall-puzzle/pose-yanyun-oath.webp",
    alt: "Using the Yanyun Oath pose to start the wall puzzle",
    caption: "Trigger: use the Yanyun Oath pose at the giant statue to start the wall puzzle.",
  },
  {
    src: "/guides/wall-puzzle/wall-tiles-right.webp",
    alt: "Pressing the 移 and 百 stone blocks on the right wall",
    caption: "Wall solution: right wall press 移 and 百, left wall press 漂 to open.",
  },
];

const fireContraptions = [
  {
    title: "Training ground",
    detail: "Light the brazier in the arena where you defeat Zhang Bao and grab the puzzle map.",
  },
  {
    title: "Castle entrance",
    detail: "Face the gate, climb the left ruins, and the contraption there should already be lit.",
  },
  {
    title: "Upper rampart",
    detail: "Follow the broken wall path upward; light the brazier at the top ledge.",
  },
  {
    title: "Lower east ledge",
    detail: "Drop or climb down to the lower platform to the east and light the final brazier.",
  },
];

const wallSolution = [
  {
    title: "Get the pose",
    text: "Borrow the 'Yanyun Oath' pose from the soldier statue just before the large underground hall.",
  },
  {
    title: "Trigger the puzzle",
    text: "Stand in front of the giant statue and perform Yanyun Oath to wake up the wall mechanism.",
  },
  {
    title: "Press the right wall",
    text: "On your right-hand wall, press the stones marked 移 and 百.",
  },
  {
    title: "Press the left wall",
    text: "On the left wall, press the stone marked 漂 to finish the sequence.",
  },
  {
    title: "Finish",
    text: "The door opens—jump the gap, pull the lever behind the waterfall, and loot the chest.",
  },
];

const unlockSteps = [
  {
    title: "Start the quest at the Qinghe ruins",
    text: "Speak to Lie Bujin outside the ruins to start Echoes of Old Battles in Qinghe (Verdant Wilds).",
    image: {
      src: "/guides/wall-puzzle/game8/4331081-57e94f6bf21d69927689e378eb0358fd.webp",
      alt: "Echoes of Old Battles quest marker on the map",
      caption: "Quest marker: Qinghe ruins, Verdant Wilds.",
    },
  },
  {
    title: "Eavesdrop, blow the barrels, clear mobs",
    text: "Eavesdrop near the barrels, shoot the fire barrels to wipe enemies, then defeat Zhang Bao to loot the brazier map from the arena chest.",
    image: {
      src: "/guides/wall-puzzle/game8/4331075-caa01c4ee0d88da905e52717793aa762.webp",
      alt: "Eavesdrop and explosive barrels spot",
      caption: "Listen first, then fire-arrow the barrels to clear the first wave.",
    },
  },
  {
    title: "Light four braziers",
    text: "Use the map to light all braziers (any order): left of the entrance, upper broken wall, lower east platform, and inside the arena.",
    image: {
      src: "/guides/wall-puzzle/game8/4331076-f79e5957d1551183859b4e5d3e86d414.webp",
      alt: "Lighting the correct fire contraption",
      caption: "All four correct braziers must be lit or the underground door stays shut.",
    },
  },
  {
    title: "Stomp the plate, head underground",
    text: "After all braziers are lit, a plate appears in the arena; use Mighty Drop to press it and open the tunnel.",
    image: {
      src: "/guides/wall-puzzle/game8/4331077-e5a535c018ecb105709d9d47994d8b12.webp",
      alt: "Entrance to the underground tunnel",
      caption: "Stomp the plate to reveal the underground entrance.",
    },
  },
  {
    title: "Borrow the Yanyun Oath pose",
    text: "Copy the Yanyun Oath pose from the soldier statue, then use it facing the giant statue to activate the wall puzzle.",
    image: {
      src: "/guides/wall-puzzle/game8/4331078-7e11bf6db03c83463d137fe7e8d188aa.webp",
      alt: "Using the Yanyun Oath pose to start the mechanism",
      caption: "You must use the pose before interacting; otherwise the wall stays inert.",
    },
  },
  {
    title: "Press the wall tiles (core step)",
    text: "Right wall: press 移 and 百. Left wall: press 漂. Order is flexible—just hit all three to open the door.",
    image: {
      src: "/guides/wall-puzzle/wall-tiles-right.webp",
      alt: "Pressing 移 and 百 on the right wall",
      caption: "Right wall: 移 + 百; left wall: 漂.",
    },
  },
  {
    title: "Pull the waterfall lever",
    text: "After the door opens, jump across and pull the lever behind the waterfall to advance.",
    image: {
      src: "/guides/wall-puzzle/game8/4331080-4a13e0a7c62d5ea365fce67df363dbe1.webp",
      alt: "Lever hidden behind the waterfall",
      caption: "The lever opens the path to the treasure room.",
    },
  },
  {
    title: "Open the chest for Touch of Death",
    text: "Final room reward: Touch of Death Assassin Mystic Skill plus extra loot; completes the story beat.",
    image: {
      src: "/guides/wall-puzzle/game8/4331079-8c8f3f163d873516d57b4e93078f2a7b.webp",
      alt: "Treasure chest reward: Touch of Death",
      caption: "Grab the Assassin Mystic Skill: Touch of Death.",
    },
  },
];

const ignReferences = [
  {
    src: "/guides/wall-puzzle/ign/1.webp",
    alt: "Wall puzzle chamber overview with central statue",
    caption: "IGN capture: the chamber layout before interacting.",
  },
  {
    src: "/guides/wall-puzzle/ign/2.webp",
    alt: "Signpost clue on the floor near the statue",
    caption: "IGN capture: the anonymous signpost hinting at which characters belong.",
  },
  {
    src: "/guides/wall-puzzle/ign/3.webp",
    alt: "Right wall with four interactable blocks before solving",
    caption: "IGN capture: right wall blocks—press the 1st and 3rd (移, 百).",
  },
  {
    src: "/guides/wall-puzzle/ign/4.webp",
    alt: "Left wall with two interactable blocks before solving",
    caption: "IGN capture: left wall blocks—press the 2nd (漂).",
  },
  {
    src: "/guides/wall-puzzle/ign/5.webp",
    alt: "Right wall after pressing the correct blocks",
    caption: "IGN capture: solved right wall state.",
  },
  {
    src: "/guides/wall-puzzle/ign/6.webp",
    alt: "Left wall after pressing the correct block",
    caption: "IGN capture: solved left wall state.",
  },
];

export default function WallPuzzleGuidePage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/13.webp"
            alt="Ruined walls in Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/20" />
        </div>

        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-emerald-300">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-900/30 px-3 py-1">Echoes of Old Battles</span>
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-slate-200">Wall puzzle guide</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-bold text-slate-50 sm:text-5xl">
              Where Winds Meet Wall Puzzle Solution
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              This guide shows the fastest way to clear the Echoes of Old Battles side story in Qinghe—lighting every fire contraption, solving the wall puzzle (移 / 百 / 漂), and grabbing the Touch of Death Mystic Skill without wandering in circles.
            </p>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Stuck on another Encounter? Try the new{" "}
              <Link href="/guides/woven-with-malice" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                Woven with Malice quest guide
              </Link>{" "}
              (time gates, dyes, monk duel, trap, bamboo tail, and bug fixes).
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickAnswers.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/40"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <p className={`mt-2 text-sm font-medium ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <h2 className="text-xl font-bold text-slate-50">Need-to-see visuals</h2>
          <p className="text-xs text-slate-500">Source: GameRant (stored locally)</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {heroImages.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-inner shadow-slate-950/40"
            >
              <ZoomableImage
                src={img.src}
                alt={img.alt}
                width={1650}
                height={928}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <figcaption className="px-3 py-2 text-xs text-slate-300/90 border-t border-slate-800/80">
                {img.caption} (click to enlarge)
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-50">Quest flow at a glance</h2>
          <ol className="space-y-4 text-sm text-slate-300 list-decimal list-inside">
            <li>
              <strong>Start in Qinghe, Verdant Wilds.</strong> Talk to Lie Bujin at the ruined castle entrance to accept <em>Echoes of Old Battles</em>.
            </li>
            <li>
              <strong>Clear the courtyard.</strong> Eavesdrop on the bandits by the explosive barrels, shoot them with a fire arrow, and defeat the waves plus the boss Zhang Bao.
            </li>
            <li>
              <strong>Grab the puzzle map.</strong> Open the chest in the training ground; it marks every fire contraption you must light.
            </li>
            <li>
              <strong>Light all four fire contraptions.</strong> See the exact spots below—any order works.
            </li>
            <li>
              <strong>Stomp the pressure plate.</strong> A plate appears in the arena; use Mighty Drop to open the underground path.
            </li>
            <li>
              <strong>Use Yanyun Oath at the statue.</strong> Borrow the pose from a nearby soldier statue, then perform it in front of the giant figure to activate the wall puzzle.
            </li>
            <li>
              <strong>Press the correct tiles.</strong> Right wall: 移 then 百. Left wall: 漂. The secret door opens to the reward room.
            </li>
          </ol>
        </div>

        <div className="space-y-4 rounded-3xl border border-emerald-700/30 bg-emerald-950/20 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-emerald-200">Fire contraptions checklist</h3>
          <p className="text-sm text-emerald-100/80">
            Light all four braziers to reveal the underground lever sequence. Any order is fine—just ensure the correct braziers are ignited.
          </p>
          <div className="space-y-3">
            {fireContraptions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-emerald-800/40 bg-emerald-900/30 p-4">
                <p className="text-sm font-semibold text-emerald-100">{item.title}</p>
                <p className="text-xs text-emerald-100/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-amber-500/30 bg-amber-900/20 px-3 py-1 text-xs font-semibold text-amber-200">
            Wall puzzle answer
          </span>
          <p className="text-sm text-slate-400">Press three tiles in this order to open the door.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {wallSolution.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-slate-950/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Step {index + 1}</p>
                  <h3 className="text-base font-bold text-slate-50">{step.title}</h3>
                </div>
                <span className="text-slate-500 text-xs font-mono bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/70">
                  {index + 1}/5
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 text-sm text-slate-300">
          <p>
            If the wall does not respond, re-equip the pose and interact again with the statue. Make sure the pressure plate
            upstairs was activated; the underground area stays locked until all four fire contraptions are lit. The nearby signpost
            simply hints to match the inscription characters—press the tiles with 移, 百, 漂 and ignore the rest.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-xl font-bold text-slate-50">Unlock steps + local screenshots</h3>
          <p className="text-xs text-slate-500">Images from Game8 and GameRant, stored locally for clarity.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {unlockSteps.map((step, idx) => (
            <article
              key={step.title}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Step {idx + 1}</p>
                  <h4 className="text-base font-semibold text-slate-50">{step.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.text}</p>
                </div>
                <span className="text-[11px] text-slate-500 font-mono bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/70">
                  {idx + 1}/8
                </span>
              </div>
              <figure className="border-t border-slate-800/80">
                <ZoomableImage
                  src={step.image.src}
                  alt={step.image.alt}
                  width={1650}
                  height={928}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption className="px-4 py-3 text-xs text-slate-300/90 border-t border-slate-800/80">
                  {step.image.caption} (click to enlarge)
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl font-bold text-slate-50">IGN visual references (local)</h3>
          <p className="text-xs text-slate-500">Mirrored from your IGN copy for extra clarity.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ignReferences.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-inner shadow-slate-950/40"
            >
              <ZoomableImage
                src={img.src}
                alt={img.alt}
                width={1650}
                height={928}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="px-3 py-2 text-xs text-slate-300/90 border-t border-slate-800/80">
                {img.caption} (click to enlarge)
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-50">Rewards and why it matters</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>✓ Unlocks the hidden chamber chest containing the <strong>Touch of Death</strong> Assassin Mystic Skill.</li>
            <li>✓ Extra loot from the chamber plus quest XP, making this one of the best early side stories in Qinghe.</li>
            <li>✓ The Mighty Drop plate and wall puzzle teach traversal tricks used in later ruins—worth practicing now.</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-50">Troubleshooting</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              • <strong>Pose missing?</strong> The Yanyun Oath pose is taken from the soldier statue before the wall chamber; interact to copy it.
            </li>
            <li>
              • <strong>Door still closed?</strong> Re-check that all four braziers are lit and that you stomped the arena plate with Mighty Drop.
            </li>
            <li>
              • <strong>Stuck climbing?</strong> Use grapples or wall-running along the crumbled ramparts to reach the upper fire contraptions quickly.
            </li>
          </ul>
          <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/30 p-4 text-xs text-emerald-100">
            Need more context? Try the{" "}
            <Link href="/guides/new-players" className="text-emerald-200 underline underline-offset-4 hover:text-emerald-100">
              new player movement tips
            </Link>{" "}
            for wall-running and grapple timing.
          </div>
        </div>
      </section>
    </article>
  );
}
