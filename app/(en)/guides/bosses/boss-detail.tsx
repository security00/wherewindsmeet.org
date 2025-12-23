import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import type { BossId } from "@/lib/bosses";
import { bosses } from "@/lib/bosses";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export function generateBossMetadata(id: BossId, canonicalLanguage: "en" | "de" = "en"): Metadata {
  const boss = bosses.find((b) => b.id === id);
  if (!boss) {
    return {};
  }

  return {
    title: `${boss.name} Boss Overview – Where Winds Meet`,
    description: `Spoiler-light overview for ${boss.name}: story tone, encounter feel, and links to weapons/builds for prep.`,
    alternates: buildHreflangAlternates(`/guides/bosses/${boss.id}`, { canonicalLanguage }),
  };
}

export function BossDetail({ bossId, localePrefix = "" }: { bossId: BossId; localePrefix?: string }) {
  const boss = bosses.find((b) => b.id === bossId);

  if (!boss) {
    return null;
  }
  const base = localePrefix || "";
  const canonicalBaseUrl = `${baseUrl}${base}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${boss.name} Boss Overview – Where Winds Meet`,
      description: boss.tagline,
      url: `${canonicalBaseUrl}/guides/bosses/${boss.id}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: canonicalBaseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${canonicalBaseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Bosses", item: `${canonicalBaseUrl}/guides/bosses` },
        { "@type": "ListItem", position: 4, name: boss.name, item: `${canonicalBaseUrl}/guides/bosses/${boss.id}` },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {boss.name} in Where Winds Meet.
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Encounter type: {boss.encounterType}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.tagline}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            This page is a spoiler-light companion to the{" "}
            <Link
              href="/guides/weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              weapons overview
            </Link>{" "}
            and the{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              build guides
            </Link>
            . Patch notes can change {boss.name}&apos;s mechanics, but the story tone and atmosphere usually remain recognizable.
          </p>
          <p className="text-xs text-slate-400">
            Notes: This page is based on official Where Winds Meet material and general ARPG experience. It aims to set expectations for vibe and pacing, not to claim exact mechanics. In-game experience and patch notes come first.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <video
              src={boss.backgroundVideo}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover opacity-75"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-10 w-40 sm:h-12 sm:w-48">
              <CdnImage
                src={boss.titleImage}
                alt={boss.name}
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
          </div>
          <p className="text-xs text-slate-400">
            The thumbnail above uses official Where Winds Meet boss showcase
            footage and title art. Exact visuals may change over time as the
            game evolves.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          How the fight tends to feel.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Think of {boss.name} as a vibe check: arena framing, music, camera behavior, and NPC dialogue all hint at whether you should expect a tight duel, a methodical battlefield, or something more psychological.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Preparation: weapons & builds.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Treat this page as a companion, not a strict script. Before {boss.name}, think about which weapons and builds have felt comfortable in similar situations, then use guides as reference points rather than a hard checklist.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Browse the{" "}
              <Link
                href={`${base}/guides/weapons`}
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                weapons overview
              </Link>{" "}
              and pick options whose rhythm matches how you handle sustained pressure, burst windows, or slower setups.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              In the{" "}
              <Link
                href={`${base}/guides/builds`}
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                build guides
              </Link>
              , choose archetypes with enough sustain and comfort to learn patterns. A calm, consistent build often beats fragile &quot;perfect&quot; setups while you are still learning.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Your first clears are scouting. Notice what stresses you most (camera, adds, burst windows) and adjust weapons/builds specifically around those pain points.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          If the fight later feels different in-game, trust your own observations. This page is an entry perspective, not a strict manual.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Watching {boss.name} in motion.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Official footage for {boss.name} is a great way to get a feel for
          pacing and mood without fast‑forwarding through someone else&apos;s
          full clear. Instead of trying to memorize every swing, focus on what
          it feels like to share an arena with them.
        </p>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          <video
            src={boss.backgroundVideo}
            controls
            muted
            loop
            className="h-full w-full"
          />
        </div>
        <div className="space-y-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
          <p>
            As you watch, you might pay attention to details like how the arena
            is framed, how quickly attacks chain together, and when the camera
            pulls back or closes in. Those cues tell you a lot about whether the
            encounter rewards patience, aggression, or careful movement.
          </p>
          <p>
            Video links reference official showcase footage. If a clip fails to
            load, it likely means the hosting URL has changed since this page
            was last updated.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Explore other Where Winds Meet bosses.
          </h2>
          <Link
            href={`${base}/guides/bosses`}
            className="text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            View all bosses →
          </Link>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you are jumping between encounters, these quick links keep you inside the same boss guide hub without having to backtrack through search results.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bosses
            .filter((other) => other.id !== boss.id)
            .map((other) => (
              <Link
                key={other.id}
                href={`${base}/guides/bosses/${other.id}`}
                className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">
                  {other.name}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Encounter type: {other.encounterType}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
}
