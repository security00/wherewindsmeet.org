import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const guidePath = "/guides/which-faction-controls-ghost-revelry-hall";
const heroImagePath = `${guidePath}/hero.webp`;
const ogImage = cdn(heroImagePath);

const metaTitle = "Which Faction Controls Ghost Revelry Hall in Where Winds Meet? (Answer)";
const metaDescription =
  "Which faction controls Ghost Revelry Hall in Where Winds Meet? It’s not a joinable sect base — in story context it’s controlled by criminal gangs and haunted forces. Short answer + route screenshots + top YouTube result.";

const publishedDate = "2025-12-31";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: buildHreflangAlternates(guidePath),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${baseUrl}${guidePath}`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: "Ghost Revelry Hall screenshot (Where Winds Meet)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        width: 1200,
        height: 675,
        alt: "Ghost Revelry Hall screenshot (Where Winds Meet) (fallback)",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: ogImage,
        alt: "Which faction controls Ghost Revelry Hall? (Where Winds Meet)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        alt: "Which faction controls Ghost Revelry Hall? (Where Winds Meet) (fallback)",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Short answer", value: "No official sect. Criminal gangs + haunted forces.", icon: "✅" },
  { label: "Where you see the question", value: "World’s Digest Prize Quiz + Unbound Cavern objective UI", icon: "🧭" },
  { label: "What you do there", value: "Fight through waves and rescue Little Fu.", icon: "⚔️" },
  { label: "Joinable faction?", value: "No — it’s a hostile story dungeon/location.", icon: "🚫" },
  { label: "Key item", value: "A key from the Nine Mortal Ways Disciple.", icon: "🗝️" },
  { label: "Common confusion", value: "It’s not a sect base like Nine Mortal Ways.", icon: "🧩" },
];

const videos = [
  {
    id: "48y4lAQvFl8",
    title: "Where Winds Meet - Which Faction Controls Ghost Revelry Hall? (World's Digest Prize Quiz)",
    note: "This is the YouTube clip that often ranks #1 for this exact query.",
    uploadDate: "2025-12-25T13:27:10-08:00",
  },
];

const steps = [
  {
    title: "Advance the Unbound Cavern questline",
    text: "Follow the Unbound Cavern Campaign objectives and clear the early fights against Unbound Cavern Members.",
    image: `${guidePath}/step-1-defeat-unbound-cavern-members.webp`,
    alt: "Where Winds Meet: Unbound Cavern Members encounter (quest progression)",
    caption: "Unbound Cavern Members (screenshot)",
  },
  {
    title: "Rescue the Nine Mortal Ways Disciple and get the key",
    text: "During the chain, you’ll free a Nine Mortal Ways Disciple. He points you to Ghost Revelry Hall and provides the key.",
    image: `${guidePath}/step-2-free-nine-mortal-ways-disciple.webp`,
    alt: "Where Winds Meet: The Nine Mortal Ways Disciple after being rescued",
    caption: "Nine Mortal Ways Disciple (screenshot)",
  },
  {
    title: "Enter Ghost Revelry Hall and clear the waves",
    text: "At the entrance, expect multiple waves of enemies. Clear them to push deeper and progress the objective tied to Little Fu.",
    image: `${guidePath}/step-3-enter-ghost-revelry-hall.webp`,
    alt: "Where Winds Meet: Ghost Revelry Hall interior fight",
    caption: "Ghost Revelry Hall (screenshot)",
  },
];

const faq = [
  {
    q: "Which faction controls Ghost Revelry Hall in Where Winds Meet?",
    a: "There isn’t a canonical joinable faction that “owns” it. In the story context, Ghost Revelry Hall is effectively taken over by criminal gangs and haunted forces you fight during the Unbound Cavern questline.",
  },
  {
    q: "Is Ghost Revelry Hall a sect base (like Nine Mortal Ways / Velvet Shade)?",
    a: "No. It’s a hostile location used for story combat, not a sect headquarters you can join or align with.",
  },
  {
    q: "How do I get the key to Ghost Revelry Hall?",
    a: "Progress the Unbound Cavern Campaign until you rescue the Nine Mortal Ways Disciple — he tells you about the Hall and gives the key as part of the objective chain.",
  },
  {
    q: "Why does this question keep showing up on Google Trends?",
    a: "Players often search it when they see the question in World’s Digest Prize Quiz or spot the location name in the Unbound Cavern objective UI and assume it must be tied to a major joinable faction — but the Hall is a narrative dungeon controlled by hostile forces.",
  },
];

const relatedLinks = [
  {
    title: "Where Winds Meet Sects (factions) overview",
    href: "/guides/sects",
    note: "If you were trying to map the Hall to a joinable sect, start here.",
  },
  {
    title: "Woven with Malice (Lost Chapter route)",
    href: "/guides/woven-with-malice",
    note: "Another Lost Chapter chain guide with a step-by-step flow.",
  },
  {
    title: "Mist-Shrouded Prison (tomb route)",
    href: "/guides/mist-shrouded-prison",
    note: "If you like dungeon routes: chests, loops, and clear navigation.",
  },
];

export default function GhostRevelryHallFactionControlPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${baseUrl}${guidePath}#webpage`,
      name: metaTitle,
      description: metaDescription,
      url: `${baseUrl}${guidePath}`,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${baseUrl}${guidePath}#article`,
      headline: metaTitle,
      description: metaDescription,
      url: `${baseUrl}${guidePath}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}${guidePath}` },
      image: [ogImage, `${baseUrl}${heroImagePath}`],
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@type": "Organization", name: "Where Winds Meet Hub" },
      publisher: {
        "@type": "Organization",
        name: "Where Winds Meet Hub",
        logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.ico` },
      },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}${guidePath}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Ghost Revelry Hall", item: `${baseUrl}${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}${guidePath}#howto`,
      name: "How to reach Ghost Revelry Hall (Where Winds Meet)",
      description: "Progress the Unbound Cavern Campaign, rescue the Nine Mortal Ways Disciple, and use the key to enter Ghost Revelry Hall.",
      totalTime: "PT5M",
      image: ogImage,
      step: steps.map((step, idx) => ({
        "@type": "HowToStep",
        name: `Step ${idx + 1}: ${step.title}`,
        text: step.text,
        url: `${baseUrl}${guidePath}#step-${idx + 1}`,
        image: cdn(step.image),
      })),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${baseUrl}${guidePath}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    ...videos.map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.title,
      description: `${video.note} (Embedded on wherewindsmeet.org)`,
      thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: video.uploadDate,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    })),
  ];

  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src={heroImagePath}
            alt="Ghost Revelry Hall cinematic screenshot (Where Winds Meet)"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Unbound Cavern quest location
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Which faction controls Ghost Revelry Hall in Where Winds Meet?
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              This Google Trends query spikes when the game surfaces <span className="font-semibold text-slate-100">Ghost Revelry Hall</span> — either as a{" "}
              <span className="font-semibold text-slate-100">World’s Digest Prize Quiz</span> prompt or in the Unbound Cavern objective text. The answer is
              simpler than it sounds: it isn’t a joinable sect base. Here is the clean answer, plus the fastest way to reach the location (screenshots included).
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80" id="answer">
              <p className="font-semibold text-amber-100">TL;DR (fast answer)</p>
              <p className="mt-1">
                There is <span className="font-semibold text-amber-50">no official sect/faction</span> that controls Ghost Revelry Hall. In the quest narrative,
                it’s taken over by <span className="font-semibold text-amber-50">criminal gangs and haunted forces</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-100">
              <Link
                href="#video"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Watch the top video
              </Link>
              <Link
                href="#how-to-get"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                How to get there (screenshots)
              </Link>
              <Link
                href="#faq"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                FAQ
              </Link>
              <Link
                href="/guides/sects"
                className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-purple-200 hover:border-purple-400 hover:text-purple-50"
              >
                Sects overview
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 shadow-inner">
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                    <CdnImage
                      src={`${guidePath}/step-3-enter-ghost-revelry-hall.webp`}
                      alt="Ghost Revelry Hall location screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Answer</p>
                    <p className="text-sm font-semibold text-slate-100">Not a joinable faction base</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-200">
                    Control is framed as: <span className="font-semibold text-slate-50">gangs + ghosts</span> inside the Unbound Cavern chain.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Screenshot note: used with permission. The goal here is to show the in-game UI players see when the query spikes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {quickAnswers.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="text-lg leading-none">{item.icon}</div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                    <p className="text-sm text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">👻</span>
          <h2 className="text-2xl font-bold text-slate-50">What is Ghost Revelry Hall?</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Ghost Revelry Hall is a quest-driven combat location. It’s portrayed as a grim underworld venue tied to smuggling/trafficking lore and supernatural
          fallout — which is why you see both ordinary ruffians and unsettling “ghost” victims during the chain.
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          That framing matters because many players read the location name and assume it’s a political territory controlled by a major sect. In practice, it’s a
          hostile dungeon segment in the Unbound Cavern arc.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏴‍☠️</span>
          <h2 className="text-2xl font-bold text-slate-50">So… which faction controls it?</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="relative aspect-video">
              <CdnImage
                src={`${guidePath}/step-4-ruffians-and-gangs.webp`}
                alt="Where Winds Meet: Unbound Cavern ruffians / gang enemies"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">In-game enemies</p>
              <p className="mt-1 text-sm text-slate-200">Expect gangs/ruffians as the “human” side of the Hall’s control.</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">Not a sect you can join</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                There is no official “Ghost Revelry Hall faction” to ally with. It’s a hostile stronghold in the narrative — so the “controlling faction” is best
                understood as the enemies occupying it.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">Control = criminal activity + haunted forces</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Within the Unbound Cavern arc, the Hall is treated as a base for illicit operations, and its ghostly presence is part of the chain’s horror tone.
                That is why guides summarize it as “controlled by gangs and haunted forces” rather than a named joinable sect.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              If you’re specifically looking for joinable factions, see{" "}
              <Link href="/guides/sects" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                Where Winds Meet Sects
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="video" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Top YouTube result for this query</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          If you want a quick confirmation instead of reading: this is the video Google often ranks first for{" "}
          <span className="font-semibold text-slate-100">“which faction controls ghost revelry hall”</span>.
        </p>

        {videos.map((video) => (
          <article key={video.id} className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
              <div className="aspect-video bg-slate-950/80">
                <iframe
                  title={video.title}
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
            <h3 className="text-sm font-medium text-slate-100">{video.title}</h3>
            <p className="text-xs leading-relaxed text-slate-300">{video.note}</p>
          </article>
        ))}
      </section>

      <section id="how-to-get" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">How to get to Ghost Revelry Hall (screenshots)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          The exact objective wording varies by translation, but the route is consistent: progress the Unbound Cavern chain, rescue the disciple for the key, then
          clear the entrance waves.
        </p>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              id={`step-${index + 1}`}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-start">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                  <div className="relative aspect-video bg-slate-950/80">
                    <CdnImage src={step.image} alt={step.alt} fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-2 p-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{`Step ${index + 1}`}</p>
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{step.text}</p>
                  <p className="text-xs text-slate-400">{step.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
              <h3 className="text-sm font-semibold text-slate-100">{item.q}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧩</span>
          <h2 className="text-2xl font-bold text-slate-50">More Where Winds Meet guides</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">{item.title}</h3>
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
