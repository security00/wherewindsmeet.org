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

const metaTitle = "WWM Purple-Star-Katastrophe Quiz-Antwort (Zhao-Brüder)";
const metaDescription =
  "Where Winds Meet (WWM) World’s Digest Prize Quiz: Purple-Star-Katastrophe. Antwort: The Zhao Brothers (Zhao Kuangyin + Zhao Guangyi). Menüpfad + Screenshots.";

const publishedDate = "2025-12-27";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: buildHreflangAlternates(guidePath, { canonicalLanguage: "de" }),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${baseUrl}/de${guidePath}`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: "Where Winds Meet Quiz-Antwort: Purple-Star-Katastrophe",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        width: 1200,
        height: 675,
        alt: "Where Winds Meet Quiz-Antwort: Purple-Star-Katastrophe (fallback)",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: ogImage,
        alt: "WWM Purple-Star-Katastrophe Quiz-Antwort (The Zhao Brothers)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        alt: "WWM Purple-Star-Katastrophe Quiz-Antwort (The Zhao Brothers) (fallback)",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Richtige Quiz-Antwort", value: "The Zhao Brothers", icon: "✅" },
  { label: "Volle Namen", value: "Zhao Kuangyin + Zhao Guangyi", icon: "👥" },
  { label: "Wo du es findest", value: "Wandering Paths → Eastern Herald → World’s Digest", icon: "🧭" },
  { label: "Quiz-Bereich", value: "Rechte Seite: Prize Quiz", icon: "📰" },
  { label: "Warum es trendet", value: "Tägliche Story-Check-Frage (Kaifeng)", icon: "📈" },
  { label: "Häufiger Irrtum", value: "Nicht der „purple robe“-NPC / Tian Ying", icon: "🧩" },
];

const steps = [
  {
    title: "Wandering Paths öffnen",
    text: "Öffne im Ingame-Menü „Wandering Paths“. Dort findest du den Eastern Herald für tägliche/wochentliche Inhalte.",
    image: `${guidePath}/step-1-wandering-paths.webp`,
    alt: "Where Winds Meet: Wandering Paths im Menü öffnen",
    caption: "Menü → Wandering Paths (Screenshot)",
  },
  {
    title: "Casual Co-op → Leisure",
    text: "In Wandering Paths: „Casual Co-op“ öffnen und in den Tab „Leisure“ wechseln, um die Zeitung/Events zu sehen.",
    image: `${guidePath}/step-2-casual-coop.webp`,
    alt: "Where Winds Meet: Casual Co-op und Leisure Tab",
    caption: "Casual Co-op → Leisure (Screenshot)",
  },
  {
    title: "Eastern Herald → Jianghu News → World’s Digest",
    text: "Wähle „Eastern Herald“, öffne „Jianghu News“ und gehe in „World’s Digest“ (die tägliche Zeitung).",
    image: `${guidePath}/step-3-worlds-digest.webp`,
    alt: "Where Winds Meet: World’s Digest (Jianghu News) Bildschirm",
    caption: "Eastern Herald → Jianghu News → World’s Digest (Screenshot)",
  },
  {
    title: "Nach rechts zum Prize Quiz und „The Zhao Brothers“ wählen",
    text: "In World’s Digest nach rechts scrollen bis „Prize Quiz“ sichtbar ist. Dann „The Zhao Brothers“ auswählen und Belohnung abholen.",
    image: `${guidePath}/step-4-prize-quiz-answer.webp`,
    alt: "Where Winds Meet: Prize Quiz Antwort (The Zhao Brothers)",
    caption: "Prize Quiz → The Zhao Brothers (Screenshot)",
  },
];

const videos = [
  {
    id: "ptEfn_79KGo",
    title: "Where Winds Meet - Who is Destined to Face the Purple Star Catastrophe? (World's Digest Prize Quiz)",
    note: "Sehr kurzer Bestätigungs-Clip (rankt oft #1 für dieses Keyword).",
    uploadDate: "2025-12-23T14:16:45-08:00",
  },
];

const faq = [
  {
    q: "Wer ist dazu bestimmt, die Purple-Star-Katastrophe zu erleiden (Where Winds Meet)?",
    a: "Für die World’s-Digest Prize-Quiz-Frage ist die richtige Auswahl: The Zhao Brothers.",
  },
  {
    q: "Welche Zhao-Brüder sind gemeint?",
    a: "In den meisten Erklärungen sind damit Zhao Kuangyin und Zhao Guangyi gemeint (Kaifeng-Story und Politik).",
  },
  {
    q: "Wo finde ich dieses Prize Quiz genau?",
    a: "Wandering Paths → Casual Co-op → Leisure → Eastern Herald → Jianghu News → World’s Digest → nach rechts zum Prize Quiz.",
  },
  {
    q: "Hat das etwas mit Purple-Star-Omen / Jin Zhongyuan zu tun?",
    a: "Anderer Kontext. Einige Lore-Artikel nutzen „Purple Star“ für Jianghu-Legacy-Quests, aber dieses Trend-Keyword meint fast immer das World’s-Digest Prize Quiz — dort ist „The Zhao Brothers“ die erwartete Antwort.",
  },
];

const relatedLinks = [
  {
    title: "Murong Yuan Adoptivvater (anderes Quiz-Keyword)",
    href: "/de/guides/murong-yuan-adoptive-father",
    note: "Gleicher Aufbau: schnelle Antwort + Erklärung zu Namensvarianten.",
  },
  {
    title: "An Unholy Prophecy (Jianghu Legacy Guide)",
    href: "/de/guides/unholy-prophecy",
    note: "Falls du wegen Omen-/Stern-Lore gesucht hast statt wegen des Quiz.",
  },
  {
    title: "Where Winds Meet Videos",
    href: "/de/videos",
    note: "Mehr schnelle Antworten als Video-Galerie.",
  },
];

export default function PurpleStarCatastropheQuizAnswerPageDe() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${baseUrl}/de${guidePath}#webpage`,
      name: metaTitle,
      description: metaDescription,
      url: `${baseUrl}/de${guidePath}`,
      inLanguage: "de-DE",
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${baseUrl}/de${guidePath}#article`,
      headline: metaTitle,
      description: metaDescription,
      url: `${baseUrl}/de${guidePath}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/de${guidePath}` },
      image: [ogImage, `${baseUrl}${heroImagePath}`],
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@type": "Organization", name: "Where Winds Meet Hub" },
      publisher: {
        "@type": "Organization",
        name: "Where Winds Meet Hub",
        logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.ico` },
      },
      inLanguage: "de-DE",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/de${guidePath}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Purple Star Catastrophe Quiz Answer", item: `${baseUrl}/de${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}/de${guidePath}#howto`,
      name: "So findest du das Prize Quiz (WWM) und beantwortest Purple Star Catastrophe",
      description: "World’s Digest (Eastern Herald) öffnen und im Prize Quiz „The Zhao Brothers“ wählen.",
      totalTime: "PT1M",
      image: ogImage,
      step: steps.map((step, idx) => ({
        "@type": "HowToStep",
        name: `Schritt ${idx + 1}: ${step.title}`,
        text: step.text,
        url: `${baseUrl}/de${guidePath}#step-${idx + 1}`,
        image: cdn(step.image),
      })),
      inLanguage: "de-DE",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${baseUrl}/de${guidePath}#faq`,
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
      description: `${video.note} (Eingebettet auf wherewindsmeet.org)`,
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
            alt="Where Winds Meet Prize Quiz Screenshot (Purple Star catastrophe)"
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
              World’s Digest Prize Quiz Antwort
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Wer ist dazu bestimmt, die Purple-Star-Katastrophe zu erleiden (Where Winds Meet)?
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Dieses Keyword trendet, wenn das Ingame-<span className="font-semibold text-slate-100">World’s Digest</span> (Eastern Herald) im täglichen{" "}
              <span className="font-semibold text-slate-100">Prize Quiz</span> fragt:{" "}
              <span className="font-semibold text-slate-100">&quot;Who is destined to face the Purple Star catastrophe?&quot;</span>
              . Unten bekommst du die richtige Auswahl – plus den exakten Klickpfad mit Screenshots, falls du das Quiz-Menü nicht findest.
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80">
              <p className="font-semibold text-amber-100">TL;DR (schnelle Antwort)</p>
              <p className="mt-1">
                Wähle: <span className="font-semibold text-amber-50">The Zhao Brothers</span>{" "}
                <span className="text-amber-200">(Zhao Kuangyin + Zhao Guangyi)</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-purple-100">
              <Link
                href="#answer"
                className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 hover:border-purple-400 hover:text-purple-50"
              >
                Zur Antwort
              </Link>
              <Link
                href="#where-to-find"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-purple-400 hover:text-purple-50"
              >
                Quiz finden (Screenshots)
              </Link>
              <Link
                href="#video"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Top-Video ansehen
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
                      alt="Prize Quiz Antwort Screenshot (The Zhao Brothers)"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Purple Star Catastrophe</p>
                    <p className="text-xs text-slate-400">World’s Digest · Prize Quiz · Kaifeng Lore</p>
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
              <p className="font-semibold text-slate-100">Warum diese Seite?</p>
              <p className="mt-2 leading-relaxed">
                Google rankt für dieses Quiz oft ein ultrakurzes YouTube-Video. Hier bekommst du die Antwort sofort – und zusätzlich den Klickpfad mit Screenshots,
                damit du die Belohnung ohne Menü-Suche abholen kannst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="answer" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h2 className="text-2xl font-bold text-slate-50">Quiz-Antwort: Purple Star Catastrophe</h2>
        </div>

        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/20 p-5">
          <p className="text-sm text-emerald-50/90 leading-relaxed">
            Die richtige Auswahl für die World’s-Digest Prize-Quiz-Frage{" "}
            <span className="font-semibold text-emerald-50">&quot;Who is destined to face the Purple Star catastrophe?&quot;</span>{" "}
            ist: <span className="font-semibold text-emerald-50">The Zhao Brothers</span>.
          </p>
          <p className="mt-2 text-xs text-emerald-100/80">
            Wenn die Option ausgeschrieben ist: Zhao Kuangyin / Zhao Guangyi. Wenn nur eine Option da ist: “The Zhao Brothers”.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Warum die Zhao-Brüder (spoiler-light)</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Das Prize Quiz prüft oft, ob du die Kaifeng-Story verfolgt hast. „Purple Star“ deutet auf Schicksal, Legitimität und Machtwechsel – daher zielt die
              Frage auf die Zhao-Brüder.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Häufiger Irrtum: „purple robe“ / Tian Ying</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Manche verwechseln „Purple Star“ mit anderen violetten Hinweisen (z. B. „purple robe“) und tippen Tian Ying. Für dieses Prize Quiz ist das nicht
              gemeint.
            </p>
          </div>
        </div>
      </section>

      <section id="where-to-find" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Wo finde ich das World’s Digest Prize Quiz? (Schritt-für-Schritt)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Der Quiz-Bereich wird leicht übersehen, weil er rechts im World’s-Digest-Panel sitzt. Mit diesen Schritten landest du direkt bei der Frage.
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
                  Schritt {idx + 1}: {step.title}
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
          <h2 className="text-2xl font-bold text-slate-50">„Catastrophe“ vs „Omen“ (warum manche Guides anders klingen)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Wenn du von Reddit kommst, brauchst du wahrscheinlich die Prize-Quiz-Auswahl. Manche Lore-Artikel benutzen ähnliche Formulierungen für Jianghu-Legacy
          Quests. Die klare Trennung:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Wenn du das tägliche Prize Quiz beantwortest</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Nimm die Multiple-Choice-Antwort: <span className="font-semibold text-slate-100">The Zhao Brothers</span>. Das Quiz ist ein Kaifeng-Story-Check.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Wenn du in Prophezeiungs-/Omen-Lore steckst</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              „Purple Star“ kann in Jianghu-Legacy-Ketten anders verwendet werden. Das ändert die Prize-Quiz-Lösung nicht – erklärt aber, warum manche Seiten andere
              Figuren erwähnen.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Related reading:{" "}
          <Link href="/de/guides/unholy-prophecy" className="text-purple-300 hover:text-purple-200 underline underline-offset-4">
            An Unholy Prophecy
          </Link>
          .
        </p>
      </section>

      <section id="video" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Top-YouTube-Ergebnis für dieses Keyword</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Wenn du lieber 20 Sekunden Video schaust: Das ist der Clip, den Google für dieses Keyword häufig ganz oben anzeigt.
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
          <h2 className="text-2xl font-bold text-slate-50">Weitere Where-Winds-Meet-Guides</h2>
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
