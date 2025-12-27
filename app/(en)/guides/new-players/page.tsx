import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Beginner Guide & First Week Roadmap",
  description:
    "A practical Where Winds Meet beginner guide that walks you from first launch to your first weekly reset with smart settings, priorities, and resource tips.",
  alternates: buildHreflangAlternates("/guides/new-players"),
  openGraph: {
    title: "Where Winds Meet Beginner Guide & First Week Roadmap",
    description:
      "A practical Where Winds Meet beginner guide that walks you from first launch to your first weekly reset with smart settings, priorities, and resource tips.",
    url: `${baseUrl}/guides/new-players`,
  },
  twitter: {
    title: "Where Winds Meet Beginner Guide & First Week Roadmap",
    description:
      "A practical Where Winds Meet beginner guide that walks you from first launch to your first weekly reset with smart settings, priorities, and resource tips.",
  },
};

const chapters = [
  {
    id: "setup",
    title: "Setup & Controls",
    image: "/illustrations/settings.png",
    steps: [
      {
        id: "step-1",
        title: "Tune your opening settings",
        content: (
          <>
            <p className="text-slate-300 mb-4">
              Where Winds Meet opens with a string of setup screens. Starting from a strong baseline means fewer restarts.
            </p>
            <div className="space-y-2">
              <details className="group rounded-lg border border-slate-800 bg-slate-950/50 open:bg-slate-900/50">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200 transition hover:text-emerald-400">
                  <span>Recommended Settings Checklist</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-300 space-y-2 border-t border-slate-800/50 pt-2">
                  <p><span className="text-emerald-400 font-semibold">Guidance:</span> Detailed (Keep markers visible)</p>
                  <p><span className="text-emerald-400 font-semibold">Control Mode:</span> ARPG (Camera follows movement)</p>
                  <p><span className="text-emerald-400 font-semibold">Difficulty:</span> Recommended (Balanced baseline)</p>
                  <p><span className="text-emerald-400 font-semibold">Social:</span> Shared Journey (Enables co-op)</p>
                </div>
              </details>
            </div>
          </>
        ),
      },
      {
        id: "step-2",
        title: "Combat Setup",
        content: (
          <>
            <p className="text-slate-300 mb-4">
              Put <span className="text-emerald-400">defense on the mouse</span> and <span className="text-red-400">offense on the keyboard</span>.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Mouse</div>
                <div className="flex justify-between"><span className="text-slate-300">LMB</span> <span className="text-slate-50">Light Attack</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Side 1</span> <span className="text-emerald-400">Parry</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Side 2</span> <span className="text-emerald-400">Dodge</span></div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Keyboard</div>
                <div className="flex justify-between"><span className="text-slate-300">Q / E</span> <span className="text-red-400">Skills</span></div>
                <div className="flex justify-between"><span className="text-slate-300">1 - 4</span> <span className="text-purple-400">Mystic Arts</span></div>
                <div className="flex justify-between"><span className="text-slate-300">F</span> <span className="text-blue-400">Movement</span></div>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "basics",
    title: "Core Basics",
    image: "/illustrations/combat.png",
    steps: [
      {
        id: "step-3",
        title: "Character Creation",
        content: (
          <p className="text-slate-300">
            Pick an <span className="text-ink-gold font-serif">Aspiration Talent</span> that matches your curiosity (e.g., Drunken Precision for mini-games). Don&apos;t stress about min-maxing here.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "Reading the HUD",
        content: (
          <ul className="space-y-2 text-sm text-slate-300 list-disc pl-4 marker:text-emerald-500">
            <li><strong className="text-slate-100">Qi Bar:</strong> If it breaks, you can&apos;t block. Back off.</li>
            <li><strong className="text-slate-100">Enemy Qi:</strong> Break this to trigger an Execution.</li>
            <li><strong className="text-slate-100">Mystic Arts:</strong> Flexible abilities for CC or puzzles.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "journey",
    title: "The Journey",
    image: "/illustrations/exploration.png",
    steps: [
      {
        id: "step-5",
        title: "Main Story First",
        content: (
          <div className="bg-emerald-950/30 border-l-2 border-emerald-500 p-4 text-sm text-emerald-100/80">
            <strong className="block text-emerald-400 mb-1">Golden Rule</strong>
            Follow the main quest until you hit a level cap. Only then detour into side quests. This ensures you unlock key systems like Breakthroughs on time.
          </div>
        ),
      },
      {
        id: "step-9",
        title: "Exploration Habits",
        content: (
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🗿</span>
              <span>Unlock <strong className="text-slate-100">Boundary Stones</strong> early for fast travel.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🔥</span>
              <span>Talk to Wayfarers at <strong className="text-slate-100">Campfires</strong> to reveal the map.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🎒</span>
              <span>Pick up everything. Herbs and ores become bottlenecks later.</span>
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "routine",
    title: "Growth & Routine",
    image: "/illustrations/growth.png",
    steps: [
      {
        id: "step-6",
        title: "Daily Checklist",
        content: (
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">Claim <strong className="text-slate-100">Xiake Journey</strong> rewards</div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">Clear 3 fast <strong className="text-slate-100">Jianghu Orders</strong></div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">Spend <strong className="text-slate-100">Mental Energy & Stamina</strong></div>
            </div>
          </div>
        ),
      },
      {
        id: "step-7",
        title: "Weekly Priorities",
        content: (
          <p className="text-slate-300 text-sm">
            Caps matter more than errands. Prioritize <span className="text-ink-gold">Weekly Dungeons</span> and buying out limited shop items (Internal Arts, Upgrade Boxes).
          </p>
        ),
      },
      {
        id: "step-8",
        title: "Resource Habits",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded bg-slate-900/30 border border-slate-800">
              <div className="text-emerald-400 font-serif font-bold mb-1">Recycle Gear</div>
              <p className="text-xs text-slate-400">Dismantling unused gear gives permanent account power.</p>
            </div>
            <div className="p-3 rounded bg-slate-900/30 border border-slate-800">
              <div className="text-emerald-400 font-serif font-bold mb-1">Don&apos;t Hoard</div>
              <p className="text-xs text-slate-400">Use materials to upgrade. Power now = faster farming later.</p>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function NewPlayersGuidePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/new-players`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
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
          name: "Beginner Guide",
          item: `${baseUrl}/guides/new-players`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <CdnImage
            src="/background/30.webp"
            alt="Where Winds Meet beginner guide background art"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end pb-20 px-6 sm:px-12 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Updated for Launch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 font-serif mb-6 text-shadow-lg">
              Where Winds Meet <span className="text-ink-gold">Beginner Guide</span>
            </h1>
            <p className="text-lg text-slate-200/90 leading-relaxed max-w-xl">
              From your first login to your first weekly reset. A first-week roadmap for smart settings, priorities, and resource habits—without the confusion.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <section className="mb-10 rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/60">
          Searching for the official Where Winds Meet roadmap? This page is a{" "}
          <span className="font-semibold">beginner progression roadmap</span>. For announcements and release updates, check{" "}
          <Link href="/news" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            news & updates
          </Link>
          .
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">

          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/60 backdrop-blur-md shadow-xl">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
                  On This Page
                </h3>
                <nav className="space-y-1">
                  {chapters.map((chapter) => (
                    <a
                      key={chapter.id}
                      href={`#${chapter.id}`}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-900/50 rounded-lg transition-colors"
                    >
                      {chapter.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-900/20 to-slate-900/50 border border-emerald-500/20">
                <p className="text-xs text-emerald-200/80 italic">
                  &ldquo;A journey of a thousand miles begins with a single step.&rdquo;
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-16">
            {chapters.map((chapter, index) => (
              <section key={chapter.id} id={chapter.id} className="scroll-mt-24">
                {/* Chapter Header */}
                <div className="relative h-48 rounded-3xl overflow-hidden mb-8 border border-slate-800 shadow-2xl group">
                  <CdnImage
                    src={chapter.image}
                    alt={chapter.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-6xl font-serif text-slate-700/20 font-bold absolute -top-4 -left-2 select-none">
                      0{index + 1}
                    </span>
                    <h2 className="relative text-3xl font-bold text-slate-50 font-serif">
                      {chapter.title}
                    </h2>
                  </div>
                </div>

                {/* Steps Timeline */}
                <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pb-4">
                  {chapter.steps.map((step) => (
                    <div key={step.id} className="relative pl-8 sm:pl-12">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950 ring-4 ring-slate-950 group-hover:border-emerald-500 transition-colors"></div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-3">
                          <span className="text-emerald-500/50 font-serif italic">#</span>
                          {step.title}
                        </h3>
                        <div className="prose prose-invert prose-slate max-w-none bg-slate-950/40 p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition-colors">
                          {step.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Final CTA */}
            <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/background/noise.png')] opacity-5 mix-blend-overlay"></div>
              <h2 className="text-2xl font-serif text-slate-50 mb-4 relative z-10">Ready for the next step?</h2>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto relative z-10">
                Once you&apos;ve mastered the basics, check out the Tier List to plan your endgame build.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link
                  href="/guides/pvp-tier-list"
                  className="px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                >
                  View Tier List
                </Link>
                <Link
                  href="/guides/builds"
                  className="px-6 py-3 rounded-full bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
                >
                  Explore Builds
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
