import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const heroImage = cdn("/guides/one-leaf-one-life/one-leaf-one-life.jpg");
const images = {
  start: cdn("/guides/one-leaf-one-life/one-leaf-one-life-start.jpg"),
  feast1: cdn("/guides/one-leaf-one-life/feast-of-leaves-volume-1-start.jpg"),
  foodInspection: cdn("/guides/one-leaf-one-life/food-inspection.jpg"),
  tale1: cdn("/guides/one-leaf-one-life/tale-of-gold-leaves-volume-1-start.jpg"),
  feast2: cdn("/guides/one-leaf-one-life/feast-of-leaves-volume-2-start.jpg"),
  tale2: cdn("/guides/one-leaf-one-life/tale-of-gold-leaves-vol-2-start.jpg"),
  epilogue: cdn("/guides/one-leaf-one-life/epilogue.jpg"),
};

export const metadata: Metadata = {
  title: "Where Winds Meet One Leaf One Life Guide (2025)",
  description:
    "Jan 2025: One Leaf One Life walkthrough—start trigger, white leaf farming, Feast/Tale of Gold Leaves steps, time gates, puzzle answers, and Huang Liang epilogue rewards.",
  alternates: buildHreflangAlternates("/guides/one-leaf-one-life"),
  openGraph: {
    title: "Where Winds Meet One Leaf One Life Guide (2025)",
    description:
      "Complete One Leaf One Life: Hopewell Academy trigger, white leaf requirements, time/leaf gates, all side stories, puzzles, and the Gold Leaf reward epilogue.",
    url: `${baseUrl}/guides/one-leaf-one-life`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 675,
        alt: "One Leaf, One Life quest start in Where Winds Meet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet One Leaf One Life Guide (2025)",
    description:
      "All phases, time gates, white leaves, side stories, and puzzle answers for One Leaf One Life in Where Winds Meet.",
    images: [
      {
        url: heroImage,
        alt: "One Leaf, One Life quest start in Where Winds Meet",
      },
    ],
  },
};

const quickFacts = [
  { label: "Where", value: "Kaifeng City — Hopewell Academy boundary stone", icon: "🧭" },
  { label: "Quest type", value: "Lost Chapter / Epilogue with 3 phases", icon: "📜" },
  { label: "Leaf gates", value: "Phase 1: 6 white leaves; Phase 2: 5 of 7; Phase 3: all 7", icon: "🍃" },
  { label: "Key hours", value: "Wu (dock), You (tree/feast), Zi (lamp), Chen (Willow Bank)", icon: "⏱️" },
  { label: "Rewards", value: "Gold Leaf accessory + Gold Leaf Warrior title", icon: "🎁" },
];

const tlDr = [
  "Start at the burning shop by Hopewell Academy, then follow Feast/Tale of Gold Leaves volumes in order.",
  "Use side stories to farm the required white leaves between volumes; you need six in Phase 1, five in Phase 2, all seven in Phase 3.",
  "Puzzle solutions are below—combine the listed phrases so you can keep moving without retries.",
  "Final epilogue is Huang Liang at Every Hearth after To Feast and Forget, awarding the Gold Leaf accessory and title.",
];

const phase1Puzzle = [
  {
    question: "What lies did Lu San'er and his people tell? Why?",
    answer: "A sign that killed + Brothers died after eating at the diner.",
  },
  {
    question: "Where did those things come from? How did bad ingredients reach the kitchen?",
    answer: "Lu San'er helped with hosting a feast + A benefactor went missing.",
  },
  {
    question: "How did this diner last so long?",
    answer: "It was his mother's shop and had a good reputation + A neighborhood staple with longtime patrons.",
  },
  {
    question: "How is the diner doing after the rumors and the trap?",
    answer: "Every connection was used to lure others into this + Everything happened to gather people at noon.",
  },
  {
    question: "What did Lu San'er and his people want?",
    answer: "The regulars all came + The diner must be brought down before it can be seized.",
  },
];

const phase2Puzzle = [
  {
    question: "Why didn't anyone find the hero with the leaves?",
    answer: "Leaves everywhere, but the warrior remained out of sight + The leaves were woven differently.",
  },
  {
    question: "Why was the Immortal Hero immortal? Who were they?",
    answer: "The warrior appeared differently each time + The warrior was once caught, but another took their place the next day.",
  },
  {
    question: "Find out the real story.",
    answer: "There was no single warrior + There were more than one leaf.",
  },
];

const phase1SideStories = [
  { name: "Peeking on the Wall", tip: "Use Meridian Touch to pull the thief down." },
  { name: "Trouble at Every Turn", tip: "Defeat two thugs, then heal Fu Wenshu in the mini-game." },
  { name: "Peril at the Pier", tip: "Beat the thugs or win Gift of Gab." },
  { name: "No Rest for the Righteous", tip: "Survive three waves of thugs." },
  { name: "The Helping Hand", tip: "Trail the thief, freeze with Meridian Touch, return stolen goods, escort the girl home." },
  { name: "Heart of Malice", tip: "Wind Sense the footprints, beat the thugs, bring the girl back." },
];

const phase2SideStories = [
  { name: "A Step Above", tip: "Talk to Aunt Zhou and donate 1,000 coins." },
  { name: "The Watchful Eye", tip: "Speak to Zhou Qiqi, trail Tang Yue, then talk to the family." },
  { name: "Second Wind", tip: "Spam Meridian Touch to stop Chen Cheng from jumping." },
  { name: "Storybook", tip: "Drive off the thugs, feed Jiang Zhaoyue, and return." },
  { name: "Raw Leaf Porridge", tip: "Talk to Zhen Ping'an, get the prescription from Fu Wenshu in Willow Bank, return it near Hopewell Academy." },
  { name: "A Lamp and a Promise", tip: "Enter via the back window, read the diary, wait for Zi hour, then light the lamp." },
  { name: "Reflections on a Life", tip: "Read the stone tablet and shoot the four bells with your bow." },
];

const phase3SideStories = [
  { name: "Whispers of the Lotus Pastry", tip: "Speak to the bookkeeper." },
  { name: "Cuju", tip: "Talk to Ren Xiaoping and finish the minigame." },
  { name: "Return to Sender", tip: "Talk to Zhao Ya and read his letters aloud." },
  { name: "Feast of Fulfillment", tip: "Chat with Xu Yan and hand over the recipe book." },
  { name: "Heart Stealer", tip: "Talk to Zhou Ergou, use the Praise emote on Granny Chen, then report back." },
  { name: "Pear Blossoms of Yore", tip: "Talk to Wu Caifeng and give her a Hemostatic Powder." },
  { name: "A Tearless Farewell", tip: "Speak to Chen Mei, use Celestial Seize to steal the blush, give it to Zhong Wenping, then talk again." },
];

export default function OneLeafOneLifeGuide() {
  return (
    <div className="min-h-screen bg-ink-wash text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800/60 bg-slate-950/70">
        <div className="absolute inset-0">
          <CdnImage
            src={heroImage}
            alt="One Leaf, One Life quest banner art"
            fill
            className="object-cover object-center opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-900/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 lg:py-16">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-emerald-200">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-wide hover:border-emerald-400"
            >
              ← Back to Guides
            </Link>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-emerald-100 ring-1 ring-emerald-400/40">
              Lost Chapter
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-emerald-100 ring-1 ring-sky-400/40">
              Kaifeng City
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-emerald-100 ring-1 ring-amber-400/40">
              Gold Leaf Reward
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100 ring-1 ring-emerald-400/40">
              Updated Jan 2025 · TL;DR below
            </span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr,0.9fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-wide text-emerald-200">One Leaf, One Life walkthrough</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl">
                One Leaf, One Life quest guide: every phase, side story, and puzzle answer
              </h1>
              <p className="text-lg leading-relaxed text-slate-200">
                Clear the One Leaf, One Life Lost Chapter in Kaifeng without backtracking. This guide covers the trigger,
                Feast of Leaves and Tale of Gold Leaves volumes, all white-leaf side stories, puzzle solutions, and the
                Huang Liang epilogue rewards so you can sprint to the Gold Leaf accessory and Gold Leaf Warrior title.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                If you searched for the Where Winds Meet One Leaf One Life quest or its epilogue, this walkthrough keeps every
                time gate, side quest, and puzzle answer in one place.
              </p>
              <ul className="text-xs text-emerald-200 space-y-1">
                <li>• TL;DR: Start at Hopewell Academy → follow Feast/Tale of Gold Leaves volumes → farm white leaves per phase → finish Huang Liang epilogue.</li>
                <li>• Time gates: Wu/You/Zi/Chen hours; leaf requirements 6/5/7 by phase.</li>
                <li>• Related quests: Woven with Malice · An Unholy Prophecy · check Roadmap for future tuning.</li>
              </ul>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/40">White leaf farming</span>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-sky-400/30">Puzzle solutions</span>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">Time-gated steps</span>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-inner shadow-slate-900/60">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Quick facts</h2>
              <div className="grid gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-3"
                  >
                    <span className="text-lg">{fact.icon}</span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-400">{fact.label}</div>
                      <div className="text-sm text-slate-100">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                <div className="text-sm font-semibold text-emerald-100">TL;DR</div>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-100">
                  {tlDr.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-xs leading-relaxed text-slate-200">
                Covers the queries players search most: “Where Winds Meet One Leaf One Life”, “One Leaf One Life walkthrough”,
                “One Leaf One Life epilogue rewards”, and “One Leaf One Life Kaifeng side quests”.
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-10 lg:py-12">
        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50 lg:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50">How to start One Leaf, One Life</h2>
            <p className="text-base leading-relaxed text-slate-200">
              In Where Winds Meet, go to the Hopewell Academy boundary stone in Kaifeng City. A burning shop and onlookers
              mark the trigger—talk to them to start Feast of Leaves: Volume 1. The chain splits into three phases and
              alternates between Feast and Tale of Gold Leaves volumes; between volumes you must gather white leaves from
              side stories to unlock the next step.
            </p>
            <p className="text-base leading-relaxed text-slate-200">
              Keep an eye on the in-game clock: Wu and You hours gate major objectives, Zi hour gates a lamp side story, and
              Chen hour shows up later in Phase 2. Set the time manually to avoid stalls.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-slate-800">
            <CdnImage
              src={images.start}
              alt="Hopewell Academy boundary stone and burning shop starting One Leaf, One Life"
              width={1650}
              height={928}
              className="h-full w-full object-cover"
              unoptimized
            />
            <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
              Start the chain at Hopewell Academy&apos;s boundary stone in Kaifeng.
            </figcaption>
          </figure>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-200">Phase 1</p>
              <h3 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Strife in Every Corner (Where Winds Meet One Leaf One Life)
              </h3>
              <p className="text-sm text-slate-300">Complete both volumes, farm 6 white leaves, then finish the Strife finale.</p>
            </div>
            <div className="rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40">
              Leaves needed: 6
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Feast of Leaves: Volume 1</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">Wu hour (next day)</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Talk to the arguing couple by the burning shop, listen to nearby gossip, then eavesdrop on the shady broker.</li>
                  <li>• Agree to the job, head to Tianjing Dock, and set the clock to Wu hour of the next day; talk to the foreman and follow the crew.</li>
                  <li>• Inspect the spoiled food, examine the &quot;body,&quot; follow the paper trail to the mourners, expose them, and defeat the four criminals.</li>
                  <li>• Drag Lu San&apos;er through town so he confesses, then debrief with Zhang Ankang before solving the dialogue puzzle below.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
                <div className="text-sm font-semibold text-emerald-100">Feast puzzle answers</div>
                <div className="mt-3 divide-y divide-slate-800 border border-slate-800/80 rounded-xl bg-slate-950/70">
                  {phase1Puzzle.map((row) => (
                    <div key={row.question} className="grid gap-3 px-3 py-3 md:grid-cols-[1.1fr,0.9fr]">
                      <div className="text-sm font-semibold text-slate-100">{row.question}</div>
                      <div className="text-sm text-slate-200">{row.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Tale of Gold Leaves: Volume 1</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">Immortal Tree</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Find the blind girl with three kids east of South Gate Avenue; talk to Zheng Ran and follow her home.</li>
                  <li>• Ask neighbors about her father, return to Zheng Ran, then visit the Immortal Tree and read the placard.</li>
                  <li>• Chase the rooftop thief until he tires, question the boy about the gold leaf, report to Zhou Ergou, then speak with the elder at the tree.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">Strife in Every Corner (final)</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Head to the Elder Host&apos;s home, listen to the exchange, attempt to return the coin bag to Zhang Ankang, then
                  report back to the home to close Phase 1.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <CdnImage
                  src={images.feast1}
                  alt="Starting Feast of Leaves Volume 1"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Feast of Leaves: Volume 1 kicks off Phase 1.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <CdnImage
                  src={images.foodInspection}
                  alt="Inspecting spoiled food during Feast of Leaves Volume 1"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Inspect the food, expose the fake mourners, then solve the puzzle.
                </figcaption>
              </figure>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    Side stories for white leaves (6)
                  </h4>
                  <span className="text-xs text-slate-400">Complete any six listed</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  {phase1SideStories.map((story) => (
                    <li key={story.name} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>
                        <strong className="text-slate-100">{story.name}:</strong> {story.tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-200">Phase 2</p>
              <h3 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Lights Flicker in Every Home (One Leaf One Life)
              </h3>
              <p className="text-sm text-slate-300">Two new volumes, five of seven side stories, and the Lights Flicker finale.</p>
            </div>
            <div className="rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40">
              Leaves needed: 5 (you will do all 7 eventually)
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Feast of Leaves: Volume 2</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">You hour</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Revisit Zhang&apos;s Eatery, talk to Liu Xian, then meet Zhang Ankang at Tianjing Dock; follow him and return the coin bag.</li>
                  <li>• Help cook Locust Leaf Noodles in the kitchen, inspect the recipe, then consult Wu Caifeng at Hopewell Academy.</li>
                  <li>• Visit the Locust Tree at You hour to pick a leaf, return to Zhang, then find Lu San&apos;er and beat his thugs.</li>
                  <li>• Pay Zhou Juan for her story, brief Liu Xian, visit Jin&apos;s Jewelry for details, then report back to Zhang to wrap the volume.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
                <div className="text-sm font-semibold text-emerald-100">Tale of Gold Leaves: Volume 2</div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Start at Jiang&apos;s Teahouse with Pinggu Wen, read the storybook, then find Chen Xuewu at Hopewell Academy.</li>
                  <li>• Locate the missing students: Zhen Lele and Hu Qiaoqiao in a west alley, Xu Xuan next door, Chen Wenwen in the building to the left.</li>
                  <li>• Wait until night, sneak into the Patrol and Inspection Agency via the roof, use Wind Sense to avoid guards, gather the three clues.</li>
                  <li>• Solve the puzzle below, then eavesdrop on Zheng Ran and Granny Liu in the east, wait until Chen hour, head to Willow Bank, use Tai Chi to get the leaf, and talk to finish.</li>
                </ul>
                <div className="mt-3 divide-y divide-slate-800 border border-slate-800/80 rounded-xl bg-slate-950/70">
                  {phase2Puzzle.map((row) => (
                    <div key={row.question} className="grid gap-3 px-3 py-3 md:grid-cols-[1.1fr,0.9fr]">
                      <div className="text-sm font-semibold text-slate-100">{row.question}</div>
                      <div className="text-sm text-slate-200">{row.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">Lights Flicker in Every Home (final)</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Set time to You hour, listen to Liu Fen, follow the group to Zheng Ran, cook Locust Leaf Noodles while Liu Xian
                  and Zhang Ankang talk, then speak with Zheng Ran to finish Phase 2.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <CdnImage
                  src={images.feast2}
                  alt="Feast of Leaves Volume 2 start"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Feast of Leaves: Volume 2 revisits Zhang&apos;s Eatery and the Locust Tree.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <CdnImage
                  src={images.tale2}
                  alt="Tale of Gold Leaves Volume 2 start"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Tale of Gold Leaves: Volume 2 involves stealth in the Patrol and Inspection Agency.
                </figcaption>
              </figure>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    Side stories for white leaves (5 of 7)
                  </h4>
                  <span className="text-xs text-slate-400">Do all seven to prep the epilogue</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  {phase2SideStories.map((story) => (
                    <li key={story.name} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>
                        <strong className="text-slate-100">{story.name}:</strong> {story.tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-200">Phase 3</p>
              <h3 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Huang Liang at Every Hearth (One Leaf One Life epilogue)
              </h3>
              <p className="text-sm text-slate-300">Finish all seven side stories, then close with the feast and epilogue.</p>
            </div>
            <div className="rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40">
              Leaves needed: 7 (all of them)
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Side stories (complete all 7)</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">Do these first</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  {phase3SideStories.map((story) => (
                    <li key={story.name} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>
                        <strong className="text-slate-100">{story.name}:</strong> {story.tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">To Feast and Forget</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Return to Zhang&apos;s Eatery, talk to Zhang Ankang and Zheng Ran, then skip to You hour on the next day. Go to
                  the feast at Tianjing Dock, defeat the thugs that arrive, and let the cutscene play out.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">Huang Liang at Every Hearth (epilogue)</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Visit Zheng Ran&apos;s house and eavesdrop, then head back to the Immortal Tree to listen to Ren Xiaoping. This
                  closes One Leaf, One Life and awards the <span className="font-semibold text-emerald-200">Gold Leaf accessory</span> and the
                  <span className="font-semibold text-emerald-200"> Gold Leaf Warrior</span> title.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <CdnImage
                  src={images.epilogue}
                  alt="Epilogue of One Leaf, One Life quest"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Phase 3 lets you finish every side story before the final feast and epilogue.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Next up</div>
            <p className="text-base text-slate-100">
              Want more Lost Chapters? This Where Winds Meet One Leaf One Life guide pairs well with the Woven with Malice
              walkthrough, plus our tier lists and builds.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guides/woven-with-malice"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              Woven with Malice guide
            </Link>
            <Link
              href="/guides"
              className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400"
            >
              All guides
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
