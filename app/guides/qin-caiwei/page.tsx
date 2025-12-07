import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";
const ogImage = `${baseUrl}/guides/qin-caiwei/hero.jpg`;

export const metadata: Metadata = {
  title: "Befriend Qin Caiwei Fast (2025) | Where Winds Meet AI Chat",
  description:
    "How to befriend Qin Caiwei in Where Winds Meet: 3-line script, why she loops, bracketed AI Chat lines, resets, and farewells that trigger Old Friends rewards.",
  alternates: {
    canonical: `${baseUrl}/guides/qin-caiwei`,
  },
  openGraph: {
    title: "Befriend Qin Caiwei Fast (2025) | Where Winds Meet AI Chat",
    description:
      "Stuck on the Qin Caiwei chat? Use this Jan 2025 update: quick script, bracketed lines, and reset steps to break the loop and reach Friend fast.",
    url: `${baseUrl}/guides/qin-caiwei`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: "Qin Caiwei AI Chat scene in Where Winds Meet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Befriend Qin Caiwei Fast (2025) | Where Winds Meet AI Chat",
    description:
      "Copy-paste script to befriend Qin Caiwei, fix the AI Chat loop, and collect Old Friends rewards quickly.",
    images: [
      {
        url: ogImage,
        alt: "Qin Caiwei AI Chat scene showing dialogue options in Where Winds Meet",
      },
    ],
  },
};

const quickFacts = [
  { label: "NPC type", value: "AI Chat (Old Friends)", icon: "💬" },
  { label: "Where to meet", value: "Qinghe region, Old Friends list", icon: "🧭" },
  { label: "Common blocker", value: "Loops if you skip her story beats", icon: "♻️" },
  { label: "What she needs", value: "You to listen, summarize, and resolve her feelings", icon: "🧭" },
  { label: "Outcome", value: "Friendship tier + weekly gifts + Old Friends entry", icon: "🎁" },
  { label: "Time to finish", value: "3-6 lines when done right", icon: "⏱️" },
];

const stubbornReasons = [
  {
    title: "Story-first logic",
    detail: "She expects you to sit through her perspective before accepting friendship.",
  },
  {
    title: "Rejects forceful lines",
    detail: 'Straight "we are friends now" commands often trigger "we are not at this point yet."',
  },
  {
    title: "Needs closure",
    detail: "She wants you to mirror her emotions and narrate a believable resolution.",
  },
];

const locationNotes = [
  "Find Qin Caiwei in Qinghe; she shows up in your Old Friends list once you meet her.",
  "Interact via the AI Chat option (not standard dialogue).",
  "No special items required; just clear inventory space for weekly gifts once befriended.",
];

const playbookSteps = [
  {
    title: "Reset & read the hint",
    text: "If she feels stuck, hit the refresh icon to clear the thread, then read the short hint above the chat box so you know her desired outcome.",
  },
  {
    title: "Invite her to talk",
    text: 'Use short nudges like "go on" / "tell me more" so she delivers the core of her story before you steer the chat.',
  },
  {
    title: "Describe the resolution in brackets",
    text: "Use stage directions to solve her problem in-world: (helped her face the past and find peace), (she feels understood and lets go).",
  },
  {
    title: "State the relationship clearly",
    text: 'Follow with a relationship cue the system can score: (we become trusted friends), "I will remember your story, friend."',
  },
  {
    title: "Exit gracefully",
    text: 'Close politely to trigger the affinity bump: "Farewell (bows and leaves)." If it does not stick, reset and vary the wording slightly.',
  },
];

const dialogueRoutes = [
  {
    title: "Route A (empathetic, safest)",
    steps: [
      "Warm-up: Tell me your story. I am listening.",
      "Let her talk: Go on, what is troubling you?",
      "Resolve in brackets: (helps her face the past and accept what cannot be changed)",
      "Relationship cue: (we become close friends and trust each other)",
      "Exit: Farewell (bows and leaves).",
    ],
  },
  {
    title: "Route B (direct, faster)",
    steps: [
      "Warm-up: I understand your dilemma.",
      "Mirror: You regret what happened; you want closure.",
      "Resolve in brackets: (she feels understood and lets go of the burden)",
      "Relationship cue: From now on, we are honest friends.",
      "Exit: (bows respectfully and leaves as an old friend)",
    ],
  },
];

const sampleScripts = [
  {
    stage: "Warm up & listen",
    lines: [
      "Tell me your story. I'm listening.",
      "Go on, what's still weighing on you?",
      "I understand. Please continue.",
    ],
  },
  {
    stage: "Resolution (brackets)",
    lines: [
      "(helps her confront the past and accept what cannot be changed)",
      "(she feels understood, breathes out, and finds peace)",
      "(we settle the matter she was worried about)",
    ],
  },
  {
    stage: "Relationship cue",
    lines: [
      "(we become close friends and trust each other)",
      "Farewell, friend. I'll remember your story.",
      "(bows respectfully and leaves as an old friend)",
    ],
  },
  {
    stage: "If she loops",
    lines: [
      "Let's start over. I want to hear everything.",
      "(resets the chat and listens carefully)",
      "We haven't reached that point yet - tell me the rest.",
    ],
  },
];

const donts = [
  'One-line mind control: "(you are convinced we are best friends)" without context.',
  "Skipping her monologue; she wants to recount key memories before moving on.",
  'Vague comfort ("you will be fine") that ignores the specific issue shown in the hint text.',
  "Dragging a dead-end thread - reset instead of arguing for 20 lines.",
];

const aiChatBasics = [
  "Affinity jumps happen when the game thinks you satisfied the on-screen hint or resolved their situation.",
  "Bracketed actions are treated like stage directions; the system often treats them as facts.",
  "Some NPCs just need polite agreement; others need you to roleplay a full resolution - Qin Caiwei is the latter.",
  "Short, clear farewells can be the trigger that ends the chat and awards friendship.",
];

const stuckFixes = [
  "Reset the thread and change bracket wording: (helps her forgive herself) -> (helps her accept what happened).",
  "Keep one empathy line before brackets; jumping straight to commands often fails.",
  "Swap farewells: try I will remember your story or (we part ways as trusted friends).",
  "If she keeps reintroducing herself, restate her problem plainly before resolving it.",
];

const successLines = [
  "Route A combo: Go on, what is troubling you? -> (helps her face the past) -> (we become close friends) -> Farewell (bows and leaves).",
  "Route B combo: I understand your dilemma. -> (she feels understood and lets go) -> From now on, we are honest friends. -> (bows respectfully and leaves as an old friend)",
  "Short exit triggers: Farewell, friend. I will remember your story. / (we part ways as trusted friends).",
];

const failLines = [
  'One-line command: "(you are convinced we are best friends)" without listening first.',
  "Vague comfort: You will be fine. (no mention of her specific regret).",
  "Arguing 20 lines in one thread without reset; the AI marks the thread as noisy.",
  "Skipping the hint text above the chat box; you never address her actual concern.",
];

const fullScript = [
  "Tell me your story. I am listening.",
  "Go on, what is troubling you?",
  "(helps her face the past and accept what cannot be changed)",
  "(we become close friends and trust each other)",
  "Farewell (bows and leaves).",
];

const rewards = [
  "Weekly gifts (currency/materials) once she is on your Old Friends list.",
  "One-time items or small story payoffs tied to her quest line.",
  "Old Friends completion progress for the region.",
];

const faq = [
  {
    q: "Do I need Gift of Gab cards to befriend Qin Caiwei?",
    a: "No. She is an AI Chat NPC; bracketed narration and polite farewells are enough.",
  },
  {
    q: "Why is my Where Winds Meet Qin Caiwei chat stuck?",
    a: "You likely skipped her hint or ended without a clear resolution. Add one empathy line, one bracketed solution, then a farewell.",
  },
  {
    q: "Can I brute force with one command?",
    a: "One-line mind control rarely works on her. She needs you to mirror her story, then describe closure.",
  },
];

const supportLinks = [
  {
    title: "Gift of Gab",
    href: "/guides/gift-of-gab",
    note: "Card-based persuasion primer if you want more dialogue tools.",
  },
  {
    title: "Wall Puzzle Solution",
    href: "/guides/wall-puzzle",
    note: "Another common search - exact presses for Echoes of Old Battles.",
  },
  {
    title: "Woven with Malice",
    href: "/guides/woven-with-malice",
    note: "Lost Chapter walkthrough if you like narrative-heavy encounters.",
  },
];

export default function QinCaiweiPage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-950/60 to-slate-950" />
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Updated Jan 2025 · 3-line script inside
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Qin Caiwei Friendship Guide (AI Chat)
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Qin Caiwei is one of the toughest AI Chat NPCs to win over. If your Where Winds Meet Qin Caiwei chat is stuck or the befriend task will not progress, use this guide: she loops if you rush, rejects blunt "we are friends" lines, and only moves when you listen, summarize her story, and describe a specific resolution. Use this five-step playbook and the copy-paste lines below to push her to Friend status quickly.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR script: “Go on” → (helps her accept the past) → (we become close friends) → Farewell (bows and leaves).</li>
              <li>• If she loops: reset thread, restate her hint once, then bracket a closure + farewell.</li>
              <li>• Works for queries: “how to befriend qin caiwei”, “qin caiwei loop”, “old friends chat stuck”.</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/guides/gift-of-gab"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                💬 Dialogue help: Gift of Gab
              </Link>
              <Link
                href="/guides/woven-with-malice"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                🧶 Narrative quest: Woven with Malice
              </Link>
              <Link
                href="/guides/npc-list"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-emerald-300/60"
              >
                🗺️ Old Friends map
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/40">
              <Image
                src="/guides/qin-caiwei/hero.jpg"
                alt="Qin Caiwei AI Chat dialogue portrait in Where Winds Meet"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">Image source: reference capture from allthings.how</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">Quick facts (Qin Caiwei)</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-inner shadow-black/20"
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

        <div className="space-y-4 rounded-3xl border border-amber-800/50 bg-amber-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <h3 className="text-2xl font-bold text-amber-100">Why she feels stubborn</h3>
          </div>
          <div className="space-y-3">
            {stubbornReasons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-700/40 bg-amber-900/20 p-4">
                <p className="text-sm font-semibold text-amber-100">{item.title}</p>
                <p className="text-sm text-amber-50/80 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <h2 className="text-2xl font-bold text-slate-50">Where to find and start the chat</h2>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {locationNotes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">-</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚀</span>
          <h2 className="text-2xl font-bold text-slate-50">5-step playbook to befriend Qin Caiwei</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {playbookSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-emerald-700/40 bg-emerald-900/20 p-4 shadow-md"
            >
              <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200 text-sm font-bold border border-emerald-500/40">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-emerald-100 pl-8">{step.title}</h3>
              <p className="mt-2 text-xs text-emerald-50/80 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧩</span>
          <h3 className="text-2xl font-bold text-slate-50">How the AI Chat scoring works for Qin Caiwei</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Where Winds Meet uses a light pattern match for AI Chat NPCs like Qin Caiwei. The system checks whether you acknowledged the on-screen hint,
          mirrored her feelings, and described a plausible resolution. If the thread feels noisy or off-topic, the game stalls the friendship flag and
          you stay stuck at Stranger. Keeping one empathy line, one bracketed action, and one farewell keeps the pattern clean enough to trigger the
          affinity bump. This also prevents keyword stuffing in chat; you are aiming for clarity, not repetition.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Hint text describes the win condition; restate it once.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Bracketed narration counts as an action; keep it specific to Qin Caiwei.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Farewell lines act as closure signals that end the chat cleanly.</span></li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎙️</span>
          <h2 className="text-2xl font-bold text-slate-50">Two ready-to-run dialogue routes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {dialogueRoutes.map((route) => (
            <div key={route.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
              <p className="text-sm font-semibold text-slate-100">{route.title}</p>
              <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside">
                {route.steps.map((step) => (
                  <li key={step} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⌨️</span>
            <h2 className="text-2xl font-bold text-slate-50">Copy-paste lines that work (befriend Qin Caiwei fast)</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {sampleScripts.map((block) => (
              <div key={block.stage} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                <p className="text-sm font-semibold text-slate-100">{block.stage}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {block.lines.map((line) => (
                    <li
                      key={line}
                      className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 font-mono text-[11px] text-emerald-200/90"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-rose-800/40 bg-rose-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <h3 className="text-2xl font-bold text-rose-100">What stalls her affinity</h3>
          </div>
          <ul className="space-y-3">
            {donts.map((item) => (
              <li key={item} className="rounded-xl border border-rose-700/40 bg-rose-900/20 p-3 text-sm text-rose-50/90 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">✅</span>
          <h3 className="text-2xl font-bold text-slate-50">What works vs what fails</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/20 p-4 space-y-2">
            <p className="text-sm font-semibold text-emerald-100">Effective lines</p>
            <ul className="space-y-2 text-xs text-emerald-50/90">
              {successLines.map((line) => (
                <li key={line} className="rounded-lg border border-emerald-800/60 bg-emerald-900/30 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-700/40 bg-rose-900/20 p-4 space-y-2">
            <p className="text-sm font-semibold text-rose-100">Common fails</p>
            <ul className="space-y-2 text-xs text-rose-50/90">
              {failLines.map((line) => (
                <li key={line} className="rounded-lg border border-rose-800/60 bg-rose-900/30 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📋</span>
          <h3 className="text-2xl font-bold text-slate-50">Copy-ready full script</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
            {fullScript.map((line) => (
              <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                {line}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Old Friends rewards and why to finish now</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Befriending Qin Caiwei is not just for completionists. Old Friends slots unlock weekly gifts, small story beats, and steady currency.
          Where Winds Meet also tracks Old Friends for exploration goals, so raising her affinity early keeps your account on pace with region progress.
          Because her AI Chat can feel stubborn, finishing her now prevents you from revisiting a stalled chat later when you want to speed-run quests.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Weekly gift chance: coins, materials, or flavor items.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Counts toward Old Friends checklists in Qinghe.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Avoids future backtracking when you focus on endgame builds.</span></li>
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <h3 className="text-2xl font-bold text-slate-50">AI Chat basics (quick refresher)</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {aiChatBasics.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-emerald-300">-</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 rounded-3xl border border-amber-700/40 bg-amber-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎁</span>
            <h3 className="text-2xl font-bold text-amber-100">What you gain for befriending her</h3>
          </div>
          <ul className="space-y-2 text-sm text-amber-50/90">
            {rewards.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-amber-300">-</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-amber-200/80">
            Note: rewards are flavor and collection focused, not mandatory power spikes - perfect for players who enjoy roleplay and completion.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧰</span>
          <h3 className="text-2xl font-bold text-slate-50">If the chat is still stuck</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {stuckFixes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">-</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h3 className="text-2xl font-bold text-slate-50">FAQ</h3>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h3 className="text-2xl font-bold text-slate-50">More help while you are here</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {supportLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
