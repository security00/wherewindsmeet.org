import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bosses } from "@/lib/bosses";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Bosses – Boss List & Encounter Overviews",
  description:
    "Spoiler-light boss list for Where Winds Meet (WWM) with quick themes, encounter types, and links to each boss overview—plus builds and weapon guides for prep.",
  alternates: buildHreflangAlternates("/guides/bosses"),
};

export default function BossesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/bosses`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Bosses", item: `${baseUrl}/guides/bosses` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet bosses",
      itemListOrder: "Unordered",
      numberOfItems: bosses.length,
      itemListElement: bosses.map((boss, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: boss.name,
        url: `${baseUrl}/guides/bosses/${boss.id}`,
      })),
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg4.webp"
            alt="Where Winds Meet bosses background art"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Boss list · Spoiler-light encounter overviews
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Meet the bosses and legends of Jianghu.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            This page gathers the major Where Winds Meet bosses and named foes in one place, focusing on encounter vibe, fight pacing, and
            which fights suit your current build. It is a spoiler-light boss list with links to each encounter overview so you can decide
            which legend to hunt next.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Use it alongside the{" "}
            <Link
              href="/guides/weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              weapons overview
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              build guides
            </Link>{" "}
            to pair each fight with a weapon and playstyle that matches its tone
            and your preferences.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/guides/bosses#faq"
              className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70"
            >
              Boss quick answers (FAQ)
            </Link>
            <Link
              href="/news"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Next update & boss changes
            </Link>
            <Link
              href="/guides/tier-list"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              China tier list perspective
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            All descriptions on this page are based on official Where Winds Meet
            material and general action RPG experience. They are written to set
            expectations about story tone and encounter feel, not to make hard
            claims about exact mechanics or balance. In game experience and
            patch notes always come first.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Boss gallery and quick themes.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bosses.map((boss) => (
            <article
              key={boss.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900/80">
                <video
                  src={boss.backgroundVideo}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  poster="/background/bg4.webp"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {boss.name}
                  </h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {boss.encounterType}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{boss.tagline}</p>
                <p className="text-[11px] text-slate-400">
                  Theme: {boss.theme}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/guides/bosses/${boss.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    View encounter overview
                  </Link>
                  <Link
                    href="/guides/builds"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Browse builds
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          General boss survival tips from high-difficulty runs.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Community guides written in Traditional Chinese for the highest
          difficulty settings repeatedly highlight the same handful of tools
          that make brutal encounters more forgiving. Even if you never look up
          specific “cheese” routes, understanding these patterns can turn
          frustrating bosses into fair challenges.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Do not solo out of pride:</span>{" "}
              story and Bloodbath bosses in Where Winds Meet are tuned assuming
              you may bring help. Summoned companions that act as tanks, healers
              or posture breakers can dramatically lower execution requirements,
              especially on three-phase “memory test” fights.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Lean on powerful qi arts:</span>{" "}
              several offensive and defensive qi arts offer longer i-frames than
              a standard guard or dodge, or can instantly interrupt key skills.
              Consider assigning at least one panic button art (for unavoidable
              bursts) and one proactive tool that lets you safely punish long
              animations.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">
                Use weapon pairings that cover your weaknesses:
              </span>{" "}
              a secondary fan can provide healing and stabilizing support, while
              heavy weapons like Mo Blade offer shields and super armor on
              charged swings. If you dislike parry timing, combine a sturdier
              weapon with supportive tools instead of forcing a pure glass
              cannon.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">
                Respect level scaling and invest sideways:
              </span>{" "}
              bosses scale with your level, so blindly leveling can make fights
              feel worse. If you are stuck, pause leveling and funnel resources
              into gear, martial arts, and inner arts upgrades instead; a
              slightly lower level with stronger tools often feels easier than a
              higher level with weak equipment.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-400 sm:text-sm">
          For players who want to go deeper, combine these principles with the{" "}
          <Link
            href="/guides/builds"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            builds section
          </Link>{" "}
          and weapon-specific pages like{" "}
          <Link
            href="/guides/weapons/mo-blade"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Mo Blade
          </Link>{" "}
          to design setups tuned for your reflexes and preferred difficulty
          rather than a single “correct” meta.
        </p>
      </section>

      <section
        id="faq"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg text-emerald-300">❓</span>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Boss quick answers
          </h2>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Which Where Winds Meet bosses should I start with?</p>
            <p className="mt-1 text-slate-300">
              Begin with story bosses tied to your current region, then try Bloodbath variants once you have a comfort weapon pair. Use builds with
              posture breaks (Mo Blade, Spear, Dual Blades) to shorten early fights.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Do bosses have notable weaknesses or rewards?</p>
            <p className="mt-1 text-slate-300">
              Exact weaknesses and rewards vary by boss and can shift with updates. This page stays spoiler-light, so for reliable rewards info,
              check the in-game reward preview (if available) and official patch notes. Use the encounter overviews here for story tone, pacing,
              and prep links to weapons/builds.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">What is the difference between story, Bloodbath, and world bosses?</p>
            <p className="mt-1 text-slate-300">
              Story bosses gate quests and scale with level; Bloodbath bosses add extra mechanics and tighter timings; world bosses are large open-field
              fights with shared rewards. Prep differently: more survivability for Bloodbath, more mobility for open-world bosses.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
