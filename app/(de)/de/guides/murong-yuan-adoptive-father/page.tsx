import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/murong-yuan-adoptive-father";
const ogImage = `${baseUrl}/guides/murong-yuan-adoptive-father/hero.jpg`;

const metaTitle = "Murong Yuan Adoptivvater (WWM Quiz-Antwort + Lore) | Where Winds Meet";
const metaDescription =
  "Du brauchst die Antwort auf „Murong Yuan adoptive father“ in Where Winds Meet / WWM? Im Quiz wird oft Li Jun erwartet (derselbe Name wie Li Yun / 李筠 in manchen Übersetzungen), während die Story später Murong Yanzhao als offiziellen Adoptivvater in der Song-Marine behandelt. Hier ist die klare Auflösung + Namens-Übersicht.";

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
        alt: "Murong Yuan Lore- und Quiz-Guide (Adoptivvater) für Where Winds Meet",
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
        alt: "Murong Yuan Adoptivvater – Quiz-Antwort und Lore-Guide",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Schnelle Quiz-Antwort", value: "Li Jun (李筠) — oft als Li Yun geschrieben", icon: "✅" },
  { label: "Story: „offizieller“ Adoptivvater", value: "Murong Yanzhao (慕容延钊)", icon: "⚓" },
  { label: "Warum es verwirrend ist", value: "Zwei Vaterfiguren + Übersetzungsvarianten", icon: "🧩" },
  { label: "Spoiler-Zone", value: "Jinming Pool Kampagne + Warship-Plot", icon: "⚠️" },
  { label: "Zugehöriger Boss", value: "Murong Yuan (Jinming Pool)", icon: "👹" },
  { label: "Häufige Schreibfehler", value: "Li Yun/Li Jun · Yanzhao/Yuanzhao", icon: "📝" },
];

const nameCheatsheet = [
  {
    label: "Erster Vormund / frühe Vaterfigur",
    variants: "Li Yun · Li Jun · 李筠",
    notes: "Zieht Murong Yuan als Kind groß und gibt ihr den Namen „Yuan“ (Kite/Milan).",
  },
  {
    label: "Zweiter Adoptivvater (Song-Marine)",
    variants: "Murong Yanzhao · 慕容延钊",
    notes: "Nimmt sie später auf; gilt in der Song-Militärwelt als ihr Adoptivvater.",
  },
  {
    label: "Typo / alternative Schreibweise",
    variants: "Murong Yuanzhao",
    notes: "Taucht oft in Community-Posts auf und meint meistens Murong Yanzhao.",
  },
];

const quizTips = [
  "Wenn du eine Ingame-Quiz/Trivia-Frage beantwortest, ist die erwartete Lösung häufig „Li Jun“.",
  "Wenn du „Murong Yanzhao“ gewählt hast und es war falsch, nutzt das Quiz wahrscheinlich die erste Vaterfigur (Li Yun/李筠) statt den späteren Song-Adoptivvater.",
  "Li Yun und Li Jun sind in vielen Übersetzungen dieselbe Person; als chinesischer Name wird oft 李筠 angezeigt.",
];

const storyBeats = [
  {
    title: "Warum gibt es überhaupt zwei Vaterfiguren?",
    text: "Murong Yuans Backstory basiert auf einer Übergabe: Ein Mann rettet und erzieht sie früh, ein anderer adoptiert sie später offiziell, als Politik gefährlich wird. Genau diese Trennung sorgt dafür, dass Spieler beim Begriff „Adoptivvater“ unterschiedliche Antworten geben.",
  },
  {
    title: "Li Yun / Li Jun (李筠): die erste Vaterfigur",
    text: "Viele Zusammenfassungen beschreiben, dass sie als Baby nach einer Rebellion gefunden und von General Li Yun (teils als Li Jun lokalisiert) aufgezogen wird. Er ist nicht ihr leiblicher Vater, aber praktisch ihr erster Adoptivvater: Er erzieht sie und benennt sie „Yuan“ – oft verbunden mit dem Kite/Milan-Motiv (鸢).",
  },
  {
    title: "Murong Yanzhao (慕容延钊): der spätere Adoptivvater in der Marine",
    text: "Als Li Yuns politische Lage zusammenbricht, vertraut er Murong Yuan seinem Verbündeten Murong Yanzhao an. Ab dann gilt Murong Yanzhao in der Song-Militärwelt als ihr offizieller Adoptivvater – deshalb nennen Lore-Threads rund um Jinming Pool meist ihn.",
  },
  {
    title: "Warum Jinming Pool die Verwirrung verstärkt (Spoiler)",
    text: "In Jinming Pool werden Murong Yuans Zorn und Missverständnisse sichtbar. Viele Spieler begegnen dort Murong Yanzhao und nehmen an, er sei der einzige Adoptivvater. Ihr früher Vormund (Li Yun/李筠) ist jedoch eine andere Person – und genau auf diese Beziehung zielen manche Quizfragen ab.",
  },
];

const videos = [
  {
    id: "LjJdbymBE1s",
    title: "Where Winds Meet - Who is Murong Yuan's Adoptive Father? (World's Digest Prize Quiz)",
    note: "Schneller Quiz-Clip; passt zur exakt trendenden Suche.",
  },
  {
    id: "AeEYkE0Jqwo",
    title: "Who is Murong Yuan's adoptive father?",
    note: "Zweiter kurzer Quiz-Check (hilft bei widersprüchlichen Antworten).",
  },
  {
    id: "YAkkRlICQ2s",
    title: "Where Winds Meet - Murong Yuan - Legend Difficulty",
    note: "Bosskampf-Showcase; nützlich, wenn du von Jinming Pool kommst.",
  },
  {
    id: "nn18UbzQZTA",
    title: "I swear Murong Yuan doesn’t let you breathe",
    note: "Kurzer Gameplay-Clip, der oft für Murong-Yuan-Queries rankt.",
  },
];

const faq = [
  {
    q: "Wer ist Murong Yuans Adoptivvater in Where Winds Meet?",
    a: "Kommt auf den Kontext an. In vielen Ingame-Quizfragen ist die erwartete Antwort „Li Jun“ (oft derselbe Charakter, der anderswo als Li Yun / 李筠 genannt wird). Im Story-Teil rund um Jinming Pool und die Song-Marine gilt Murong Yanzhao als ihr offizieller Adoptivvater.",
  },
  {
    q: "Ist Li Jun dasselbe wie Li Yun?",
    a: "Oft ja – viele Community-Posts behandeln „Li Jun“ und „Li Yun“ als Übersetzungsvarianten (häufig mit dem chinesischen Namen 李筠). Wenn dein Quiz Li Jun erwartet, nimm Li Jun, selbst wenn eine Lore-Zusammenfassung Li Yun schreibt.",
  },
  {
    q: "Warum steht manchmal Murong Yuanzhao?",
    a: "Das ist meistens eine Verwechslung/Fehlschreibung von Murong Yanzhao. Bei Übersetzungen aus dem Chinesischen werden die Namen in Fan-Threads schnell vermischt.",
  },
  {
    q: "Spoilert das die Hauptstory?",
    a: "Dieser Guide bleibt relativ „spoiler-light“, erwähnt aber den Jinming-Pool-Kontext, weil dort die meisten Spieler mit der Adoptivvater-Frage und den Warship-Plot-Threads konfrontiert werden.",
  },
];

const relatedLinks = [
  {
    title: "Murong Yuan Boss-Guide (Jinming Pool)",
    href: "/de/guides/bosses/murong-yuan",
    note: "Wenn du wegen des Kampfes hier bist: Mechaniken, Themen und Kontext.",
  },
  {
    title: "Sekt-Übersicht (Mo-Sect Kontext)",
    href: "/de/guides/sects",
    note: "Hintergrund, wenn du ihre Story mit Mo Sect / Lu School verbinden willst.",
  },
  {
    title: "Where Winds Meet Videos",
    href: "/de/videos",
    note: "Größere eingebettete Galerie, falls du lieber schaust als liest.",
  },
];

export default function MurongYuanAdoptiveFatherDePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metaTitle,
      description: metaDescription,
      url: `${baseUrl}/de${guidePath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Murong Yuan Adoptivvater", item: `${baseUrl}/de${guidePath}` },
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
      description: `${video.note} (Eingebettet auf wherewindsmeet.org)`,
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
            alt="Murong Yuan Hintergrundbild (Jinming Pool)"
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
              Quiz-Antwort + Lore-Übersicht
            </div>
            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Wer ist Murong Yuan&apos;s Adoptivvater in Where Winds Meet?
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Dieses Keyword steigt, wenn ein Trivia-Prompt <span className="font-semibold text-slate-100">&quot;Murong Yuan adoptive father&quot;</span> fragt.
              Das Problem: Spiel und Community-Summaries nutzen je nach Szene/Übersetzung zwei unterschiedliche Vaterfiguren. Hier bekommst du zuerst die schnelle Quiz-Antwort
              und danach die Story-Erklärung mit Namensvarianten.
            </p>
            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80">
              <p className="font-semibold text-amber-100">TL;DR (richtig klicken)</p>
              <p className="mt-1">
                Für die meisten Quizfragen: <span className="font-semibold text-amber-50">Li Jun</span>. Für Story/Jinming-Pool-Threads:{" "}
                <span className="font-semibold text-amber-50">Murong Yanzhao</span>. Wenn du nur einen Klick brauchst: nimm die Quiz-Antwort.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-200">
              <Link
                href="#quiz-answer"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
              >
                Zum Quiz-Schnellantwort
              </Link>
              <Link
                href="#name-variants"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
              >
                Namensvarianten
              </Link>
              <Link
                href="#videos"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Videos ansehen
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
                      alt="Murong Yuan Porträt"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Murong Yuan</p>
                    <p className="text-xs text-slate-400">Jinming Pool · Mechanistin · Warship-Arc</p>
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
              <p className="font-semibold text-slate-100">Warum dieser Guide?</p>
              <p className="mt-2 leading-relaxed">
                Google zeigt für diese Suche oft YouTube-Quizvideos zuerst. Wir bündeln die Antwort (damit du sofort weiter kannst) und halten den Kontext hier,
                falls du wegen Lokalisierung widersprüchliche Ergebnisse bekommst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz-answer" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h2 className="text-2xl font-bold text-slate-50">Quiz-Antwort: Murong Yuan Adoptivvater</h2>
        </div>
        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/20 p-5">
          <p className="text-sm text-emerald-50/90 leading-relaxed">
            Wenn du nur die Ein-Zeilen-Antwort für ein Quiz brauchst, wähle:{" "}
            <span className="font-semibold text-emerald-50">Li Jun</span>{" "}
            <span className="text-emerald-200">(oft derselbe Name wie Li Yun / 李筠)</span>.
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
          Tipp: Wenn du Quizpunkte farmst, nutze immer die Namensvariante, die dein Client erwartet. Dieser Guide erklärt die Lore- und Namensmismatch, nicht ein
          Regelwerk.
        </p>
      </section>

      <section id="name-variants" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📝</span>
          <h2 className="text-2xl font-bold text-slate-50">Namensvarianten (Li Yun vs Li Jun, Yanzhao vs Yuanzhao)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Wenn du das aus Google Trends heraus suchst, siehst du wahrscheinlich verschiedene Schreibweisen in Videos, Wikis und Reddit-Threads. Diese Tabelle mappt die
          Namen schnell:
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/80">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Rolle</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Namensvarianten</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Merke</th>
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
          <h2 className="text-2xl font-bold text-slate-50">Story-Erklärung (spoiler-light)</h2>
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
          Wenn du nur Kampf-Infos willst, spring zum{" "}
          <Link href="/de/guides/bosses/murong-yuan" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Murong-Yuan-Bossguide
          </Link>
          .
        </p>
      </section>

      <section id="videos" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Top-Videos, die für diese Suche ranken</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Für <span className="font-semibold text-slate-100">„where winds meet murong yuan adoptive father“</span> zeigt Google oft zuerst YouTube.
          Diese Embeds helfen, die Quiz-Antwort schnell zu prüfen und dann die Lore-Auflösung direkt hier zu lesen.
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
          <h2 className="text-2xl font-bold text-slate-50">Mehr Where Winds Meet Guides</h2>
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
