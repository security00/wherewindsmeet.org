import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/murong-yuan-adoptive-father";
const ogImage = `${baseUrl}/guides/murong-yuan-adoptive-father/hero.jpg`;

const metaTitle = "Murong Yuan Adoptive Father (WWM Quiz Answer + Lore) | Where Winds Meet";
const metaDescription =
  "Need the answer to “Murong Yuan adoptive father” in Where Winds Meet / WWM? The quiz often expects Li Jun (same as Li Yun / 李筠 in some translations), while the story later treats Murong Yanzhao as her official adoptive father in the Song navy. Here is the clean breakdown and name-variant cheat sheet.";

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
        alt: "Murong Yuan lore and quiz answer guide (adoptive father) for Where Winds Meet",
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
        alt: "Murong Yuan adoptive father quiz answer and lore guide for Where Winds Meet",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Fast quiz answer", value: "Li Jun (李筠) — often spelled Li Yun", icon: "✅" },
  { label: "Story “official” adoptive father", value: "Murong Yanzhao (慕容延钊)", icon: "⚓" },
  { label: "Why it is confusing", value: "Two father figures + translation variants", icon: "🧩" },
  { label: "Spoiler zone", value: "Jinming Pool campaign + warship plot", icon: "⚠️" },
  { label: "Related boss fight", value: "Murong Yuan (Jinming Pool)", icon: "👹" },
  { label: "Common misspellings", value: "Li Yun/Li Jun · Yanzhao/Yuanzhao", icon: "📝" },
];

const nameCheatsheet = [
  {
    label: "First guardian / early adoptive father",
    variants: "Li Yun · Li Jun · 李筠",
    notes: "Raised Murong Yuan as a child and gave her the name “Yuan” (kite).",
  },
  {
    label: "Second adoptive father (Song navy)",
    variants: "Murong Yanzhao · 慕容延钊",
    notes: "Takes her in later; treated as her adoptive father in the Song military orbit.",
  },
  {
    label: "Common typo / alt spelling",
    variants: "Murong Yuanzhao",
    notes: "Often shows up in community posts; usually refers to Murong Yanzhao.",
  },
];

const quizTips = [
  "If you are answering an in-game quiz/trivia prompt, the expected answer is commonly “Li Jun”.",
  "If you answered “Murong Yanzhao” and it marked you wrong, the quiz is likely using the first father figure (Li Yun/李筠) rather than the later Song adoptive father.",
  "Li Yun and Li Jun are often the same person across translations; the Chinese name you may see is 李筠.",
];

const storyBeats = [
  {
    title: "Why two father figures exist at all",
    text: "Murong Yuan’s backstory is built around a hand-off: one man rescues and raises her early, and another man formally adopts her later when politics turn dangerous. That split is the core reason players disagree on who “counts” as her adoptive father.",
  },
  {
    title: "Li Yun / Li Jun (李筠): the first father figure",
    text: "Most summaries describe her being found as an infant after a rebellion, then raised by General Li Yun (sometimes localized as Li Jun). He is not her biological father, but he functions as her first adoptive father in practice — raising her and naming her “Yuan”, often tied to the kite motif (鸢).",
  },
  {
    title: "Murong Yanzhao (慕容延钊): the later adoptive father in the navy",
    text: "When Li Yun’s political situation collapses, he entrusts Murong Yuan to his ally Murong Yanzhao. From that point, Murong Yanzhao is treated as her official adoptive father in the Song military world, which is why lore discussions around Jinming Pool usually point to him.",
  },
  {
    title: "Why the Jinming Pool plot amplifies the confusion (spoilers)",
    text: "Jinming Pool is where Murong Yuan’s resentment and misunderstanding come to the surface. Many players meet Murong Yanzhao in that arc and assume he must be the only adoptive father, but her earlier guardian (Li Yun/李筠) is a different person — and quizzes sometimes key off that earlier relationship.",
  },
];

const videos = [
  {
    id: "LjJdbymBE1s",
    title: "Where Winds Meet - Who is Murong Yuan's Adoptive Father? (World's Digest Prize Quiz)",
    note: "Fast quiz-focused clip; matches the exact trending search.",
  },
  {
    id: "AeEYkE0Jqwo",
    title: "Who is Murong Yuan's adoptive father?",
    note: "Another short quiz answer video (useful if you want a second confirmation).",
  },
  {
    id: "YAkkRlICQ2s",
    title: "Where Winds Meet - Murong Yuan - Legend Difficulty",
    note: "Boss fight showcase; helpful if you found this page from Jinming Pool.",
  },
  {
    id: "nn18UbzQZTA",
    title: "I swear Murong Yuan doesn’t let you breathe",
    note: "Short gameplay clip that frequently ranks for Murong Yuan queries.",
  },
];

const faq = [
  {
    q: "Who is Murong Yuan’s adoptive father in Where Winds Meet?",
    a: "It depends on context. For many in-game quizzes, the expected answer is “Li Jun” (often the same character described elsewhere as Li Yun / 李筠). In the story arc tied to Jinming Pool and the Song navy, Murong Yanzhao is treated as her official adoptive father.",
  },
  {
    q: "Is Li Jun the same as Li Yun?",
    a: "Often, yes — many community posts treat “Li Jun” and “Li Yun” as translation variants for the same name (commonly shown as 李筠). If your quiz expects Li Jun, pick Li Jun even if a lore summary says Li Yun.",
  },
  {
    q: "Why do some sources say Murong Yuanzhao?",
    a: "It is usually a misspelling/variant of Murong Yanzhao. The two names get mixed in fan discussions, especially when translating from Chinese.",
  },
  {
    q: "Does this spoil the main story?",
    a: "This page stays “spoiler-light” but it does reference the Jinming Pool campaign context, since that is where most players encounter the adoptive father question and the warship plot threads.",
  },
];

const relatedLinks = [
  {
    title: "Murong Yuan boss guide (Jinming Pool)",
    href: "/guides/bosses/murong-yuan",
    note: "If you came here from the fight: mechanics, themes, and encounter context.",
  },
  {
    title: "Sects overview (Mo Sect context)",
    href: "/guides/sects",
    note: "Background reading if you are connecting her story to Mo Sect / Lu School themes.",
  },
  {
    title: "Where Winds Meet videos",
    href: "/videos",
    note: "A bigger embedded gallery if you prefer watching over reading.",
  },
];

export default function MurongYuanAdoptiveFatherPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metaTitle,
      description: metaDescription,
      url: `${baseUrl}${guidePath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Murong Yuan Adoptive Father", item: `${baseUrl}${guidePath}` },
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
    ...videos.map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.title,
      description: `${video.note} (Embedded on wherewindsmeet.org)`,
      thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: "2025-01-01",
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    })),
  ];

  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/guides/murong-yuan-adoptive-father/hero.jpg"
            alt="Murong Yuan and Jinming Pool themed background image"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Quiz answer + lore cheat sheet
            </div>
            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Who is Murong Yuan&apos;s adoptive father in Where Winds Meet?
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              This keyword spikes when a trivia prompt asks <span className="font-semibold text-slate-100">&quot;Murong Yuan adoptive father&quot;</span>.
              The problem: the game and community summaries use two different father figures depending on the scene and translation. This page gives you the fast quiz pick,
              then the story explanation (with name variants) so you do not get baited by localization.
            </p>
            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80">
              <p className="font-semibold text-amber-100">TL;DR (pick the right answer)</p>
              <p className="mt-1">
                For most quizzes: <span className="font-semibold text-amber-50">Li Jun</span>. For story / Jinming Pool discussions:{" "}
                <span className="font-semibold text-amber-50">Murong Yanzhao</span>. If you only need one click, use the quiz answer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-200">
              <Link
                href="#quiz-answer"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
              >
                Jump to quiz answer
              </Link>
              <Link
                href="#name-variants"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
              >
                Name variants cheat sheet
              </Link>
              <Link
                href="#videos"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Watch videos
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 shadow-inner">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                    <Image
                      src="/guides/murong-yuan-adoptive-father/murong-yuan.jpg"
                      alt="Murong Yuan portrait"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Murong Yuan</p>
                    <p className="text-xs text-slate-400">Jinming Pool · mechanist · warship arc</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-4 pt-0 sm:grid-cols-2">
                {quickAnswers.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-inner shadow-black/20"
                  >
                    <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                      <span>{item.icon}</span>
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Why this page exists</p>
              <p className="mt-2 leading-relaxed">
                Google often surfaces YouTube quiz videos for this query. We condense the answer (so you can move on) and keep the extra context here for players
                who got inconsistent results because of localization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz-answer" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h2 className="text-2xl font-bold text-slate-50">Quiz answer: Murong Yuan adoptive father</h2>
        </div>
        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/20 p-5">
          <p className="text-sm text-emerald-50/90 leading-relaxed">
            If you only need the one-line answer for a quiz prompt, pick:{" "}
            <span className="font-semibold text-emerald-50">Li Jun</span>{" "}
            <span className="text-emerald-200">(often the same name shown elsewhere as Li Yun / 李筠)</span>.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {quizTips.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">-</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Tip: if you are farming quiz points, always use the name variant that your client language expects. This guide is about the lore + naming mismatch, not a rulebook.
        </p>
      </section>

      <section id="name-variants" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📝</span>
          <h2 className="text-2xl font-bold text-slate-50">Name variants cheat sheet (Li Yun vs Li Jun, Yanzhao vs Yuanzhao)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          If you are searching this from Google Trends, you are likely seeing different spellings across videos, wikis, and Reddit threads. Use this table to map
          the names quickly:
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/80">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Role</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Name variants</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">What to remember</th>
              </tr>
            </thead>
            <tbody className="bg-slate-950/60">
              {nameCheatsheet.map((row) => (
                <tr key={row.label} className="border-t border-slate-800">
                  <td className="px-4 py-3 text-slate-100 font-semibold">{row.label}</td>
                  <td className="px-4 py-3 text-slate-200">{row.variants}</td>
                  <td className="px-4 py-3 text-slate-300">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📚</span>
          <h2 className="text-2xl font-bold text-slate-50">Story explanation (spoiler-light)</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {storyBeats.map((beat) => (
            <div key={beat.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold text-slate-100">{beat.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{beat.text}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          If you want combat-only info instead of lore, jump to the{" "}
          <Link href="/guides/bosses/murong-yuan" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Murong Yuan boss guide
          </Link>
          .
        </p>
      </section>

      <section id="videos" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Top videos ranking for this query</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          The current SERP often shows YouTube first for <span className="font-semibold text-slate-100">“where winds meet murong yuan adoptive father”</span>.
          These embeds let players confirm the quiz answer fast, then continue reading the lore clarification on the same page.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
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
              <p className="text-sm font-medium text-slate-100">{video.title}</p>
              <p className="text-xs leading-relaxed text-slate-300">{video.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
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
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">{item.title}</p>
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
