import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const guidePath = "/guides/who-is-destined-to-face-the-purple-star-catastrophe";
const heroImagePath = `${guidePath}/hero.webp`;
const ogImage = cdn(heroImagePath);

const metaTitle = "Purple Star Catastrophe Quiz Answer (Zhao Brothers)";
const metaDescription =
  "Who is destined to face the Purple Star catastrophe? WWM World’s Digest Prize Quiz answer: The Zhao Brothers (Zhao Kuangyin + Zhao Guangyi). Screenshots.";

const publishedDate = "2025-12-27";

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
        alt: "Where Winds Meet quiz answer: Who is destined to face the Purple Star catastrophe?",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        width: 1200,
        height: 675,
        alt: "Where Winds Meet quiz answer: Who is destined to face the Purple Star catastrophe? (fallback)",
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
        alt: "WWM Purple Star catastrophe quiz answer (The Zhao Brothers)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        alt: "WWM Purple Star catastrophe quiz answer (The Zhao Brothers) (fallback)",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Correct quiz answer", value: "The Zhao Brothers", icon: "✅" },
  { label: "Full names", value: "Zhao Kuangyin + Zhao Guangyi", icon: "👥" },
  { label: "Where to find it", value: "Wandering Paths → Eastern Herald → World’s Digest", icon: "🧭" },
  { label: "Quiz section", value: "Right side: Prize Quiz", icon: "📰" },
  { label: "Why it trends", value: "Daily story-check question tied to Kaifeng", icon: "📈" },
  { label: "Common confusion", value: "Not the “purple robe” NPC / Tian Ying", icon: "🧩" },
];

const steps = [
  {
    title: "Open Wandering Paths",
    text: "From the in-game menu, enter Wandering Paths. This is where the Eastern Herald lives for daily/weekly side content.",
    image: `${guidePath}/step-1-wandering-paths.webp`,
    alt: "Where Winds Meet: open Wandering Paths from the menu",
    caption: "Menu → Wandering Paths (screenshot)",
  },
  {
    title: "Go to Casual Co-op → Leisure",
    text: "Inside Wandering Paths, open Casual Co-op, then switch to the Leisure tab to access the newspaper-style activities.",
    image: `${guidePath}/step-2-casual-coop.webp`,
    alt: "Where Winds Meet: Casual Co-op and Leisure tab location",
    caption: "Casual Co-op → Leisure (screenshot)",
  },
  {
    title: "Choose Eastern Herald → Jianghu News → World’s Digest",
    text: "Select Eastern Herald, then open Jianghu News and enter World’s Digest (the daily paper page).",
    image: `${guidePath}/step-3-worlds-digest.webp`,
    alt: "Where Winds Meet: World’s Digest (Jianghu News) screen",
    caption: "Eastern Herald → Jianghu News → World’s Digest (screenshot)",
  },
  {
    title: "Scroll right to Prize Quiz and pick “The Zhao Brothers”",
    text: "On the World’s Digest page, move to the right until you see Prize Quiz. Select “The Zhao Brothers” to claim the best reward.",
    image: `${guidePath}/step-4-prize-quiz-answer.webp`,
    alt: "Where Winds Meet: Prize Quiz answer selection (The Zhao Brothers)",
    caption: "Prize Quiz → The Zhao Brothers (screenshot)",
  },
];

const videos = [
  {
    id: "ptEfn_79KGo",
    title: "Where Winds Meet - Who is Destined to Face the Purple Star Catastrophe? (World's Digest Prize Quiz)",
    note: "Short confirmation clip (the one that often ranks #1 for this exact query).",
    uploadDate: "2025-12-23T14:16:45-08:00",
  },
];

const faq = [
  {
    q: "Who is destined to face the Purple Star catastrophe in Where Winds Meet?",
    a: "For the World’s Digest Prize Quiz question, the correct pick is: The Zhao Brothers.",
  },
  {
    q: "Which Zhao brothers does the quiz mean?",
    a: "Most guides interpret it as Zhao Kuangyin and Zhao Guangyi (the two brothers tied to Kaifeng’s political storyline).",
  },
  {
    q: "Where exactly is this Prize Quiz located?",
    a: "Wandering Paths → Casual Co-op → Leisure tab → Eastern Herald → Jianghu News → World’s Digest → scroll right to Prize Quiz.",
  },
  {
    q: "Is this related to the Purple Star omen / Jin Zhongyuan?",
    a: "Different context. Some lore discussions use “Purple Star” for Jianghu Legacy questlines, but this trending query usually refers to the World’s Digest daily Prize Quiz — where “The Zhao Brothers” is the expected answer.",
  },
];

const relatedLinks = [
  {
    title: "Murong Yuan adoptive father (another trending quiz answer)",
    href: "/guides/murong-yuan-adoptive-father",
    note: "Same format: fast pick + why translations confuse people.",
  },
  {
    title: "An Unholy Prophecy (Jianghu Legacy guide)",
    href: "/guides/unholy-prophecy",
    note: "If you searched because of star/omen lore instead of the daily quiz.",
  },
  {
    title: "Where Winds Meet videos",
    href: "/videos",
    note: "A bigger gallery if you prefer quick answers in video form.",
  },
];

export default function PurpleStarCatastropheQuizAnswerPage() {
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
        { "@type": "ListItem", position: 3, name: "Purple Star Catastrophe Quiz Answer", item: `${baseUrl}${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}${guidePath}#howto`,
      name: "How to answer the Purple Star Catastrophe Prize Quiz (WWM)",
      description: "Find World’s Digest (Eastern Herald) and pick The Zhao Brothers in Prize Quiz.",
      totalTime: "PT1M",
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
            alt="Where Winds Meet Prize Quiz screenshot (Purple Star catastrophe)"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-100">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
              World’s Digest Prize Quiz answer
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Who is destined to face the Purple Star catastrophe in Where Winds Meet?
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              This query spikes when the in-game <span className="font-semibold text-slate-100">World’s Digest</span> (Eastern Herald) daily{" "}
              <span className="font-semibold text-slate-100">Prize Quiz</span> asks:{" "}
              <span className="font-semibold text-slate-100">&quot;Who is destined to face the Purple Star catastrophe?&quot;</span>
              . If you only want the correct choice, the answer is below — plus the exact menu path with screenshots if you cannot find the quiz panel.
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80">
              <p className="font-semibold text-amber-100">TL;DR (fast answer)</p>
              <p className="mt-1">
                Pick: <span className="font-semibold text-amber-50">The Zhao Brothers</span>{" "}
                <span className="text-amber-200">(Zhao Kuangyin + Zhao Guangyi)</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-purple-100">
              <Link
                href="#answer"
                className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 hover:border-purple-400 hover:text-purple-50"
              >
                Jump to answer
              </Link>
              <Link
                href="#where-to-find"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-purple-400 hover:text-purple-50"
              >
                Find the quiz (screenshots)
              </Link>
              <Link
                href="#video"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Watch the top video
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 shadow-inner">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                    <CdnImage
                      src="/guides/who-is-destined-to-face-the-purple-star-catastrophe/step-4-prize-quiz-answer.webp"
                      alt="Prize Quiz answer screenshot (The Zhao Brothers)"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Purple Star Catastrophe</p>
                    <p className="text-xs text-slate-400">World’s Digest · Prize Quiz · Kaifeng lore</p>
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
                Google often ranks a very short YouTube clip first for this question. This page gives the same answer instantly, then adds the exact click path
                (with screenshots) so you can claim your rewards without digging through menus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="answer" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h2 className="text-2xl font-bold text-slate-50">Quiz answer: Purple Star Catastrophe</h2>
        </div>

        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/20 p-5">
          <p className="text-sm text-emerald-50/90 leading-relaxed">
            The correct choice for the World’s Digest Prize Quiz prompt{" "}
            <span className="font-semibold text-emerald-50">&quot;Who is destined to face the Purple Star catastrophe?&quot;</span>{" "}
            is: <span className="font-semibold text-emerald-50">The Zhao Brothers</span>.
          </p>
          <p className="mt-2 text-xs text-emerald-100/80">
            If the quiz shows full names, look for Zhao Kuangyin / Zhao Guangyi. If it shows a single option, pick “The Zhao Brothers”.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Why it’s the Zhao brothers (spoiler-light)</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              The Prize Quiz often checks whether you followed the Kaifeng storyline. The “Purple Star” framing points toward fate, legitimacy, and who will carry
              the burden when power shifts — which is why the quiz targets the Zhao brothers.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Common wrong turn: “purple robe” / Tian Ying</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Some players mix up “Purple Star” with other purple-coded hints (like a “purple robe” figure) and answer Tian Ying. For this Prize Quiz question,
              that’s not the intended pick.
            </p>
          </div>
        </div>
      </section>

      <section id="where-to-find" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Where to find the World’s Digest Prize Quiz (step-by-step)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          The quiz panel is easy to miss because it sits on the right side of the World’s Digest page. Follow these steps and you’ll land on the correct question.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, idx) => (
            <article
              id={`step-${idx + 1}`}
              key={step.title}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-100">
                  Step {idx + 1}: {step.title}
                </h3>
                <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                  Screenshot
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">{step.text}</p>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <CdnImage
                  src={step.image}
                  alt={step.alt}
                  width={1280}
                  height={720}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-slate-400">{step.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🟣</span>
          <h2 className="text-2xl font-bold text-slate-50">Purple Star “catastrophe” vs Purple Star “omen” (why answers differ)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          If you came here from Reddit, you probably need the Prize Quiz pick. But some long-form lore pages use similar phrasing for Jianghu Legacy quests. Here’s
          the clean separation:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">If you are answering the daily Prize Quiz</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Use the multiple-choice answer: <span className="font-semibold text-slate-100">The Zhao Brothers</span>. The quiz is framed as a Kaifeng narrative
              check.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">If you are deep in omen/prophecy lore</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              You may see “Purple Star” used differently in Jianghu Legacy chains. That does not change the Prize Quiz solution — it just explains why some guides
              talk about other characters.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Related reading:{" "}
          <Link href="/guides/unholy-prophecy" className="text-purple-300 hover:text-purple-200 underline underline-offset-4">
            An Unholy Prophecy
          </Link>
          .
        </p>
      </section>

      <section id="video" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Top YouTube result for this query</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          If you prefer a 20-second confirmation over reading: this is the clip Google often ranks first for{" "}
          <span className="font-semibold text-slate-100">“who is destined to face the purple star catastrophe”</span>.
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

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
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
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">More Where Winds Meet guides</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-purple-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-purple-200 transition">{item.title}</h3>
                <span className="text-xs text-purple-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
