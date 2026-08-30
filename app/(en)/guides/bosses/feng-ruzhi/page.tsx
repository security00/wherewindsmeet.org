import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import LiteMp4Embed from "@/components/LiteMp4Embed";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { getImageUrl } from "@/lib/image-utils";

const baseUrl = "https://wherewindsmeet.org";
const slug = "/guides/bosses/feng-ruzhi";

const heroPath = "/guides/bosses/feng-ruzhi/hero.webp";
const mapPath = "/guides/bosses/feng-ruzhi/map.webp";
const heavenfallPath = "/guides/bosses/feng-ruzhi/heavenfall.webp";
const game8VideoBase = "/guides/bosses/feng-ruzhi/game8";
const game8PosterBase = "/guides/bosses/feng-ruzhi/game8/posters";
const rubyVideo = "/guides/bosses/feng-ruzhi/preview.mp4";
const game8Source = "https://game8.co/games/Where-Winds-Meet/archives/570793";

const heroOgImage = getImageUrl(heroPath);

export const metadata: Metadata = {
  title: "Where Winds Meet Feng Ruzhi – Location, Unlock & Boss Guide",
  description:
    "Where Winds Meet Feng Ruzhi guide: reported Heavenfall unlock, Roaring Sands / Verdant Hill Village location, Silk Ball fail condition, evidence limits, and safer practice habits.",
  keywords: [
    "where winds meet feng ruzhi",
    "where winds meet feng ruzhi location",
    "where winds meet feng ruzhi unlock",
    "where winds meet feng ruzhi silk ball",
    "feng ruzhi boss guide",
    "where winds meet bosses",
    "where winds meet heavenfall",
    "verdant hill village boss",
    "roaring sands boss",
    "where winds meet world boss",
  ],
  alternates: buildHreflangAlternates(slug),
  openGraph: {
    title: "Where Winds Meet Feng Ruzhi – Location, Unlock & Boss Guide",
    description:
      "Reported Feng Ruzhi unlock and location route, the Silk Ball fail condition, evidence limits, and safer practice habits.",
    url: `${baseUrl}${slug}`,
    siteName: "Where Winds Meet Hub",
    images: [
      { url: heroOgImage, width: 728, height: 370, alt: "Feng Ruzhi boss guide cover" },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Feng Ruzhi – Location, Unlock & Boss Guide",
    description:
      "Where Winds Meet Feng Ruzhi: unlock via Heavenfall, location in Roaring Sands / Verdant Hill Village, and how the Silk Ball steal works.",
    images: [heroOgImage],
  },
};

const quickFacts = [
  { label: "Top search query", value: "where winds meet feng ruzhi" },
  { label: "Boss type", value: "World Boss (also appears in the Heavenfall campaign)" },
  { label: "Region", value: "Kaifeng → Roaring Sands → Verdant Hill Village" },
  { label: "Unlock requirement", value: "Complete the Heavenfall campaign (Update 1.1 era)" },
  { label: "Fail condition", value: "Community reports describe a short Silk Ball recovery window; verify the timer in your current build" },
  { label: "What to watch", value: "Yellow-glint steal/grab attempts and combo finishers you can parry" },
];

const faq = [
  {
    q: "How do you unlock the Feng Ruzhi boss fight in Where Winds Meet?",
    a: "You first encounter Feng Ruzhi during the Heavenfall campaign in Roaring Sands (Kaifeng). After finishing Heavenfall, she becomes available as a world boss in Verdant Hill Village.",
  },
  {
    q: "Where is Feng Ruzhi located?",
    a: "Feng Ruzhi spawns as a world boss in Verdant Hill Village (Roaring Sands) in the Kaifeng region once Heavenfall is completed.",
  },
  {
    q: "How long do you have to recover the Silk Ball?",
    a: "This is a community-reported short recovery window. Treat the visible in-game timer as authoritative and verify the current build rather than relying on an old exact number.",
  },
  {
    q: "Why did I instantly fail the fight?",
    a: "Feng Ruzhi can steal your Silk Ball on specific yellow-glint attacks. Community reports describe a short recovery window; follow the visible timer in your current build.",
  },
  {
    q: "What should I do when my Silk Ball gets stolen?",
    a: "Treat it like an objective: stop trading hits with Feng Ruzhi, sprint to the stolen ball, and burst down the guard holding it before the timer runs out.",
  },
  {
    q: "Is Feng Ruzhi’s grab unblockable?",
    a: "Players widely report a quick yellow-glint grab that cannot be blocked reliably. Plan to dodge/escape instead of trying to tank it.",
  },
  {
    q: "Why won’t Where Winds Meet Feng Ruzhi spawn at Verdant Hill Village?",
    a: "Most of the time it means the Heavenfall campaign isn’t completed on that character/server yet. Finish Heavenfall first, then return to Verdant Hill Village for the world boss version.",
  },
  {
    q: "Does Where Winds Meet Feng Ruzhi appear before you finish Heavenfall?",
    a: "You can meet her during the Heavenfall campaign, but the repeatable world boss version is typically tied to completing Heavenfall first.",
  },
  {
    q: "What does the yellow-glint attack mean in Where Winds Meet Feng Ruzhi?",
    a: "Many players associate the yellow glint with the Silk Ball steal/grab attempts. Save stamina and prioritize dodging/escaping instead of trying to block through it.",
  },
  {
    q: "Is there a safe learning build for Where Winds Meet Feng Ruzhi?",
    a: "While you’re learning, a sustain-first setup is usually safer: more survivability, stamina comfort, and consistent damage. Once you’re consistent on Silk Ball recovery, you can swap into higher damage.",
  },
  {
    q: "How can I practice Where Winds Meet Feng Ruzhi efficiently?",
    a: "Treat early attempts like drills: learn the yellow-glint cues, then practice immediately recovering the Silk Ball. Damage optimization comes after consistency on the fail condition.",
  },
];

export default function FengRuzhiBossGuidePage() {
  const practiceTips = [
    {
      title: "Recover the Silk Ball during the reported short window",
      description:
        "If the ball gets stolen, stop “dueling” immediately. Sprint straight to the stolen ball, delete the holder, then reset back to neutral.",
      video: `${game8VideoBase}/retrieve-silk-ball.mp4`,
      poster: `${game8PosterBase}/retrieve-silk-ball.jpg`,
    },
    {
      title: "Dodge the yellow-glint grab by dashing forward",
      description:
        "A common wipe moment is a fast, unblockable-looking yellow-glint grab. Many players find a forward dash under/through her path is more consistent than backing away.",
      video: `${game8VideoBase}/dash-forward-grab.mp4`,
      poster: `${game8PosterBase}/dash-forward-grab.jpg`,
    },
    {
      title: "Win with parry pressure, not only dodge spam",
      description:
        "Several strings end with a clear finisher window. If you can parry those enders, you chunk her Qi/stance and open faster execute opportunities.",
      video: `${game8VideoBase}/parry-pressure.mp4`,
      poster: `${game8PosterBase}/parry-pressure.jpg`,
    },
  ] as const;

  const reportedMoves = [
    {
      name: "Rapid Strikes",
      response: "Fast melee flurry. Dodge sideways/through and punish after the sequence ends.",
      video: `${game8VideoBase}/move-rapid-strikes.mp4`,
      poster: `${game8PosterBase}/move-rapid-strikes.jpg`,
    },
    {
      name: "Javelin Throw",
      response: "Ranged throw. Time a dodge or parry if your build is comfortable with it.",
      video: `${game8VideoBase}/move-javelin-throw.mp4`,
      poster: `${game8PosterBase}/move-javelin-throw.jpg`,
    },
    {
      name: "Falcon Strike",
      response: "A quick gap close. Keep stamina for the first dodge, then counter when she lands.",
      video: `${game8VideoBase}/move-falcon-strike.mp4`,
      poster: `${game8PosterBase}/move-falcon-strike.jpg`,
    },
    {
      name: "Omnislash",
      response: "Multi-hit sequence. Don’t panic-roll early—dodge on rhythm or parry the clean ender if you see it.",
      video: `${game8VideoBase}/move-omnislash.mp4`,
      poster: `${game8PosterBase}/move-omnislash.jpg`,
    },
    {
      name: "Aerial Takedown",
      response: "Jump-in slam that can knock you down. Side-dodge late, then punish the recovery.",
      video: `${game8VideoBase}/move-aerial-takedown.mp4`,
      poster: `${game8PosterBase}/move-aerial-takedown.jpg`,
    },
    {
      name: "Wind Slashes",
      response: "Ranged wind blades. Can often be dodged or parried; don’t let it pin your camera.",
      video: `${game8VideoBase}/move-wind-slashes.mp4`,
      poster: `${game8PosterBase}/move-wind-slashes.jpg`,
    },
    {
      name: "Bloody Boomerang",
      response: "Thrown weapon that returns quickly. Watch the second hit timing (return path).",
      video: `${game8VideoBase}/move-bloody-boomerang.mp4`,
      poster: `${game8PosterBase}/move-bloody-boomerang.jpg`,
    },
    {
      name: "Falcon Kicks",
      response: "Rapid kick combo. Dodge once, then look for a parryable ender or reset spacing.",
      video: `${game8VideoBase}/move-falcon-kicks.mp4`,
      poster: `${game8PosterBase}/move-falcon-kicks.jpg`,
    },
  ] as const;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Bosses", item: `${baseUrl}/guides/bosses` },
        { "@type": "ListItem", position: 4, name: "Feng Ruzhi", item: `${baseUrl}${slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
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
          <CdnImage
            src={heroPath}
            alt="where winds meet feng ruzhi boss guide hero image"
            fill
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            World Boss guide · Location · Silk Ball mechanic
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Feng Ruzhi: location, unlock, and how to beat the fight.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            If you came here from the query <span className="font-semibold">where winds meet feng ruzhi</span>, this page is the fast answer.{" "}
            Feng Ruzhi is one of the most searched new bosses because the fight has a unique lose condition: you carry a{" "}
            <span className="font-semibold">Silk Ball</span>, and if it gets stolen you must recover it quickly or the run ends. This page
            focuses on the practical stuff Google searchers want: where she spawns, how to unlock her, and the safest way to handle the Silk
            Ball pressure.
          </p>
          <p className="text-xs text-slate-400">
            Evidence boundary: route, move names, and timer language are community-reported and were reviewed on August 28, 2026. Site owner confirmed reuse authorization on August 29, 2026 for the locally hosted Game8 screenshots and clips. Trust the current in-game journal and reward preview first. Source: {" "}
            <a href={game8Source} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-200 underline underline-offset-4 hover:text-sky-100">
              Game8 Feng Ruzhi guide
            </a>
            .
          </p>
        </div>
      </section>

      <section
        id="quick-facts"
        className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-2"
      >
	        <div className="space-y-3">
	          <h2 className="text-xl font-semibold tracking-tight text-slate-50">Quick facts</h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            If you&apos;re here from <span className="font-semibold">where winds meet feng ruzhi</span>, this is the fastest summary: unlock route,
            spawn area, and the one mechanic that ends runs.
          </p>
	          <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
	            {quickFacts.map((item) => (
	              <li key={item.label} className="flex gap-3">
	                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
	                <span>
                  <span className="font-semibold text-slate-100">{item.label}:</span>{" "}
                  <span className="text-slate-200">{item.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
          <div className="relative aspect-video">
            <CdnImage
              src={mapPath}
              alt="Feng Ruzhi location reference in Roaring Sands"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority={false}
            />
          </div>
          <figcaption className="p-3 text-xs leading-5 text-slate-300">
            Game8 route reference, republished with confirmed reuse authorization; verify the current in-game marker because patches can move or rename objectives.
          </figcaption>
        </figure>
      </section>

	      <section
        id="location"
        className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
	        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
	          Where Winds Meet Feng Ruzhi location: Roaring Sands (Heavenfall) → Verdant Hill Village (world boss).
	        </h2>
	        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
	          If you&apos;re searching “where winds meet feng ruzhi location”, here is the clean version: you meet Feng Ruzhi during{" "}
          <span className="font-semibold">Heavenfall</span> in <span className="font-semibold">Roaring Sands</span> (Kaifeng), and once the
          Heavenfall campaign is complete she shows up as a repeatable world boss in{" "}
          <span className="font-semibold">Verdant Hill Village</span>.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Unlock steps (fast)</h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Progress the <span className="font-semibold">Heavenfall</span> campaign in Roaring Sands (Kaifeng).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Defeat her as part of the campaign encounter (first time).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  After completion, head to <span className="font-semibold">Verdant Hill Village</span> to challenge the world boss version.
                </span>
              </li>
            </ol>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
            <div className="relative aspect-video">
              <CdnImage
                src={heavenfallPath}
                alt="Feng Ruzhi Heavenfall encounter reference in Roaring Sands"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority={false}
              />
            </div>
            <figcaption className="p-3 text-xs leading-5 text-slate-300">
              Heavenfall route reference from the authorized Game8 media set; confirm the active objective in your current build.
            </figcaption>
          </figure>
        </div>

        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
          If Feng Ruzhi doesn&apos;t spawn at Verdant Hill Village yet, it usually means Heavenfall isn&apos;t finished on that character/server.
          Double-check your campaign progress first.
        </div>
      </section>

	      <section
        id="how-to-beat"
        className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
	        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
	          How to beat Feng Ruzhi: Silk Ball pressure + punish windows.
	        </h2>
	        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
	          Most “no hit” clips make the fight look like pure execution, but the real reason many attempts fail is the objective layer. In the Feng
	          Ruzhi fight, you effectively have <span className="font-semibold">two health bars</span>: your HP, and your ability to keep (or recover)
	          the Silk Ball before the timer runs out. If you searched{" "}
	          <span className="font-semibold">where winds meet feng ruzhi</span> because the fight feels unfair, this is the part to master first.
	        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div id="silk-ball" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-50">Silk Ball mechanic (plain English)</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Certain <span className="font-semibold">yellow-glint</span> attacks can steal your Silk Ball.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                      When it&apos;s stolen, community guides report a short recovery window. Follow the visible timer and verify the current build rather than memorizing an old exact value.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  The simplest recovery plan: rush the ball and burst down the guard holding it, then reset to neutral.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-50">Big mistake to avoid</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Don&apos;t keep “dueling” Feng Ruzhi after the ball is stolen. Even if you&apos;re winning the DPS race, you&apos;ll still lose if the
              recovery timer expires. Treat it like a capture-the-flag moment and disengage.
            </p>
            <p className="text-xs text-slate-400">
              If you&apos;re learning the fight, it&apos;s worth practicing the ball recovery route more than optimizing your damage rotation.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {practiceTips.map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">{tip.title}</h3>
              <LiteMp4Embed
                src={tip.video}
                poster={tip.poster}
                title={tip.title}
                analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", section: "tips" } }}
              />
              <p className="text-sm text-slate-200 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
            <h3 className="text-sm font-semibold text-slate-50">Recommended companion: Ruby (revive safety)</h3>
            <LiteMp4Embed
              src={rubyVideo}
              poster={`${game8PosterBase}/ruby.jpg`}
              title="Ruby companion showcase clip"
              analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", section: "companion" } }}
            />
            <p className="text-sm text-slate-200 leading-relaxed">
              If you&apos;re learning Legend/Abyss clears, a revive-style companion like <span className="font-semibold">Ruby</span> can turn one mistake into a recovery instead of a full reset.
              If companions behave weirdly in your version, assume it&apos;s patch-specific and treat this as a convenience tip, not a rule.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Extra safe-clear habits</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Save stamina for <span className="font-semibold">repositioning</span>. The ball recovery sprint matters more than one extra greedy combo.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  In co-op, assign one player to “ball duty” so the team doesn&apos;t hesitate when it gets stolen.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  If you struggle with parry timing, keep it simple: dodge first, then punish only the cleanest windows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  If you&apos;re stuck, swap to a comfort build (more sustain, more i-frames) while you learn. See our{" "}
                  <Link href="/guides/builds" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    builds guide
                  </Link>
                  .
                </span>
              </li>
            </ul>
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <h4 className="text-sm font-semibold text-slate-50">Weapon approach (no math, just comfort)</h4>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                Feng Ruzhi punishes tunnel vision. Pick a weapon pairing that helps you stay calm: something with reliable mobility for resets, and
                something with sustain/utility for recovery moments. If you want a refresher, open the{" "}
                <Link href="/guides/weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                  weapons overview
                </Link>{" "}
                and choose what matches your execution level, not what a tier list says.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="moveset"
        className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Where Winds Meet Feng Ruzhi moveset clips (what the attacks look like).
        </h2>
	        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
	          If you&apos;re searching <span className="font-semibold">where winds meet feng ruzhi</span> to identify specific attacks, don&apos;t try to
	          memorize everything. Instead, learn the <span className="font-semibold">tell</span>, choose a response (dodge or parry), then reset back
	          to neutral. The short clips below are from the authorized Game8 media set and load only after you click; use them as visual references, then verify timings in your current build.
	        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {reportedMoves.map((move) => (
            <div key={move.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-50">{move.name}</h3>
              </div>
              <LiteMp4Embed
                src={move.video}
                poster={move.poster}
                title={move.name}
                analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", section: "moveset" } }}
              />
              <p className="text-sm text-slate-200 leading-relaxed">{move.response}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          If your version shows different timings or different names, it&apos;s likely a patch/region difference. Use the animations and glint colors as your real cues.
        </p>
      </section>

      <section
        id="rewards"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Feng Ruzhi reward verification.
        </h2>
	        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
	          If you searched <span className="font-semibold">where winds meet feng ruzhi</span> for the reward list, here&apos;s the simple version:
	          Feng Ruzhi is reported as part of Heavenfall progression and a repeatable world-boss route. We are not publishing an exact reward table because the previous list lacked a dated, traceable current-build source.
	        </p>
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm leading-6 text-emerald-50">Open the encounter&apos;s in-game reward preview immediately before spending stamina or attempts. Record the platform, server, difficulty, and build date before reporting a difference.</div>
      </section>

      <section
        id="video"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Third-party creator walkthrough: Feng Ruzhi run.
        </h2>
	        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
	          If you searched <span className="font-semibold">where winds meet feng ruzhi</span> for a “no hit” reference, watching a clean run is the
	          fastest way to see the difference between “safe neutral” and “punish windows”. Focus on how the player resets spacing after dodges, and
	          how quickly they swap priorities when the ball mechanic triggers.
	        </p>
        <LiteYouTubeEmbed
          videoId="ImGcZ7vtI_g"
          title="Feng Ruzhi guide (Legend/Abyss) – Where Winds Meet"
          poster={heroPath}
          analytics={{ eventName: "play_video", params: { page: "feng-ruzhi" } }}
        />
        <p className="text-xs text-slate-400">
          Third-party creator walkthrough, not official mechanics documentation. The player loads only after a click and uses YouTube privacy-enhanced mode. Video availability can change if the creator removes or region-locks it.
        </p>
        <a href="https://www.youtube.com/watch?v=ImGcZ7vtI_g" target="_blank" rel="noopener noreferrer" className="inline-flex text-xs font-semibold text-sky-200 hover:text-sky-100">Open the attributed YouTube source ↗</a>
      </section>

      <section id="faq" className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">FAQ</h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Answers to the most common <span className="font-semibold">where winds meet feng ruzhi</span> questions: unlock route, location, Silk Ball
          timer, and what to do when the fight ends “instantly”.
        </p>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Related pages (keep your route internal)
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/guides/bosses"
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Boss list hub</p>
            <p className="mt-1 text-xs text-slate-400">Browse all bosses and encounter overviews.</p>
          </Link>
          <Link
            href="/guides/patch-notes"
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Patch notes</p>
            <p className="mt-1 text-xs text-slate-400">If mechanics change, this is where to verify.</p>
          </Link>
          <Link
            href="/guides/weapons"
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Weapons overview</p>
            <p className="mt-1 text-xs text-slate-400">Pick comfort weapons for high-pressure fights.</p>
          </Link>
          <Link
            href="/guides/builds"
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Builds guide</p>
            <p className="mt-1 text-xs text-slate-400">Sustain-first setups while you learn patterns.</p>
          </Link>
          <Link
            href="/news"
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">News</p>
            <p className="mt-1 text-xs text-slate-400">Version updates, new bosses, and events.</p>
          </Link>
          <Link
            href="/videos"
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Video gallery</p>
            <p className="mt-1 text-xs text-slate-400">Binge curated Where Winds Meet clips.</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
