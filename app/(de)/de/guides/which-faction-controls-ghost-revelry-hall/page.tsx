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

const metaTitle = "WWM: Welche Fraktion kontrolliert Ghost Revelry Hall? (Antwort)";
const metaDescription =
  "Welche Fraktion kontrolliert Ghost Revelry Hall in Where Winds Meet? Es ist keine beitretbare Sektenbasis — im Story-Kontext wird der Ort von kriminellen Banden und geisterhaften Kräften beherrscht. Kurzantwort + Screenshots + Top‑YouTube‑Video.";

const publishedDate = "2025-12-31";

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
        alt: "Ghost Revelry Hall Screenshot (Where Winds Meet)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        width: 1200,
        height: 675,
        alt: "Ghost Revelry Hall Screenshot (Where Winds Meet) (fallback)",
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
        alt: "Welche Fraktion kontrolliert Ghost Revelry Hall? (Where Winds Meet)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        alt: "Welche Fraktion kontrolliert Ghost Revelry Hall? (Where Winds Meet) (fallback)",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Kurzantwort", value: "Keine offizielle Sekte. Banden + geisterhafte Kräfte.", icon: "✅" },
  { label: "Wo die Frage auftaucht", value: "World’s Digest Prize Quiz + Unbound‑Cavern‑Quest‑UI", icon: "🧭" },
  { label: "Was du dort tust", value: "Wellen bekämpfen und Little Fu retten.", icon: "⚔️" },
  { label: "Beitretbare Fraktion?", value: "Nein — Story-Dungeon/Location.", icon: "🚫" },
  { label: "Schlüssel", value: "Key vom Nine Mortal Ways Disciple.", icon: "🗝️" },
  { label: "Häufige Verwechslung", value: "Keine Sektenbasis wie Nine Mortal Ways.", icon: "🧩" },
];

const videos = [
  {
    id: "48y4lAQvFl8",
    title: "Where Winds Meet - Which Faction Controls Ghost Revelry Hall? (World's Digest Prize Quiz)",
    note: "Dieses Video rankt bei Google häufig auf #1 für genau diese Suchanfrage.",
    uploadDate: "2025-12-25T13:27:10-08:00",
  },
];

const steps = [
  {
    title: "Unbound Cavern Questkette vorantreiben",
    text: "Folge den Unbound-Cavern-Zielen und räume die frühen Kämpfe gegen Unbound Cavern Members.",
    image: `${guidePath}/step-1-defeat-unbound-cavern-members.webp`,
    alt: "Where Winds Meet: Begegnung mit Unbound Cavern Members (Quest-Fortschritt)",
    caption: "Unbound Cavern Members (Screenshot)",
  },
  {
    title: "Nine Mortal Ways Disciple retten und Key erhalten",
    text: "In der Kette befreist du einen Nine Mortal Ways Disciple. Er erwähnt Ghost Revelry Hall und gibt dir den Key.",
    image: `${guidePath}/step-2-free-nine-mortal-ways-disciple.webp`,
    alt: "Where Winds Meet: Der Nine Mortal Ways Disciple nach der Rettung",
    caption: "Nine Mortal Ways Disciple (Screenshot)",
  },
  {
    title: "Ghost Revelry Hall betreten und Wellen clearen",
    text: "Am Eingang kommen mehrere Gegnerwellen. Besiege sie, um tiefer vorzudringen und das Ziel rund um Little Fu zu erfüllen.",
    image: `${guidePath}/step-3-enter-ghost-revelry-hall.webp`,
    alt: "Where Winds Meet: Kampf in Ghost Revelry Hall (Innenraum)",
    caption: "Ghost Revelry Hall (Screenshot)",
  },
];

const faq = [
  {
    q: "Welche Fraktion kontrolliert Ghost Revelry Hall in Where Winds Meet?",
    a: "Es gibt keine kanonische beitretbare Fraktion, die den Ort „besitzt“. In der Story wird Ghost Revelry Hall effektiv von kriminellen Banden und geisterhaften Kräften übernommen, die du in der Unbound-Cavern-Questkette bekämpfst.",
  },
  {
    q: "Ist Ghost Revelry Hall eine Sektenbasis (wie Nine Mortal Ways / Velvet Shade)?",
    a: "Nein. Es ist eine feindliche Quest-Location für Story-Kämpfe, keine Sektenzentrale zum Beitreten.",
  },
  {
    q: "Wie bekomme ich den Key für Ghost Revelry Hall?",
    a: "Spiele die Unbound-Cavern-Kampagne weiter, bis du den Nine Mortal Ways Disciple rettest — er erklärt den Ort und gibt dir den Key im Rahmen der Questziele.",
  },
  {
    q: "Warum trendet diese Frage auf Google so oft?",
    a: "Viele sehen die Frage im World’s Digest Prize Quiz oder den Ortsnamen in der Unbound‑Cavern‑Quest‑UI und vermuten ein Fraktionsgebiet. Tatsächlich ist es ein Story‑Dungeon, der von feindlichen Kräften kontrolliert wird.",
  },
];

const relatedLinks = [
  {
    title: "WWM Sekten/Fraktionen-Überblick",
    href: "/de/guides/sects",
    note: "Wenn du nach beitretbaren Fraktionen suchst, starte hier.",
  },
  {
    title: "Woven with Malice (Lost Chapter Route)",
    href: "/de/guides/woven-with-malice",
    note: "Eine weitere Lost-Chapter-Questkette als Schritt-für-Schritt-Guide.",
  },
  {
    title: "Mist-Shrouded Prison (Tomb Route)",
    href: "/de/guides/mist-shrouded-prison",
    note: "Wenn du Dungeon-Routen magst: Chests, Loops und klare Navigation.",
  },
];

export default function GhostRevelryHallFactionControlPageDE() {
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
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Ghost Revelry Hall", item: `${baseUrl}/de${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}/de${guidePath}#howto`,
      name: "So erreichst du Ghost Revelry Hall (Where Winds Meet)",
      description: "Unbound Cavern Campaign spielen, Nine Mortal Ways Disciple retten, Key nutzen und Ghost Revelry Hall betreten.",
      totalTime: "PT5M",
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
            alt="Ghost Revelry Hall Screenshot (Where Winds Meet)"
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
              Unbound Cavern Quest-Location
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Welche Fraktion kontrolliert Ghost Revelry Hall in Where Winds Meet?
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Die Frage trendet, wenn das Spiel <span className="font-semibold text-slate-100">Ghost Revelry Hall</span> einblendet — entweder als{" "}
              <span className="font-semibold text-slate-100">World’s Digest Prize Quiz</span>‑Prompt oder in der Unbound‑Cavern‑Quest‑UI. Die Antwort ist
              simpler als sie klingt: Es ist keine beitretbare Sektenbasis. Hier ist die klare Antwort plus der schnellste Weg zum Ort (mit Screenshots).
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80" id="answer">
              <p className="font-semibold text-amber-100">TL;DR (Kurzantwort)</p>
              <p className="mt-1">
                Es gibt <span className="font-semibold text-amber-50">keine offizielle Sekte/Fraktion</span>, die Ghost Revelry Hall kontrolliert. In der
                Quest-Story wird der Ort von <span className="font-semibold text-amber-50">kriminellen Banden und geisterhaften Kräften</span> beherrscht.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-100">
              <Link
                href="#video"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Top‑Video ansehen
              </Link>
              <Link
                href="#how-to-get"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Weg dorthin (Screenshots)
              </Link>
              <Link
                href="#faq"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                FAQ
              </Link>
              <Link
                href="/de/guides/sects"
                className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-purple-200 hover:border-purple-400 hover:text-purple-50"
              >
                Sekten-Übersicht
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
                      alt="Ghost Revelry Hall Screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Antwort</p>
                    <p className="text-sm font-semibold text-slate-100">Keine beitretbare Fraktion</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-200">
                    Kontrolle im Kontext der Quest: <span className="font-semibold text-slate-50">Banden + Geister</span>.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Screenshot-Hinweis: mit Erlaubnis genutzt, um die typische Quest-UI zu zeigen.
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
          <h2 className="text-2xl font-bold text-slate-50">Was ist Ghost Revelry Hall?</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Ghost Revelry Hall ist eine questgetriebene Kampf-Location. In der Darstellung geht es um Unterwelt-Deals (Schmuggel/Trafficking) und übernatürliche
          Folgen — daher wirken einige Gegner wie „normale“ Schläger, andere wie geisterhafte Opfer.
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          Genau deshalb ist die Google-Frage irreführend: Der Name klingt wie ein Fraktionsgebiet, aber praktisch ist es ein feindlicher Dungeon-Abschnitt in der
          Unbound-Cavern-Questkette.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏴‍☠️</span>
          <h2 className="text-2xl font-bold text-slate-50">Welche „Fraktion“ kontrolliert den Ort?</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="relative aspect-video">
              <CdnImage
                src={`${guidePath}/step-4-ruffians-and-gangs.webp`}
                alt="Where Winds Meet: Unbound-Cavern-Schläger/Banden"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Gegner-Typen</p>
              <p className="mt-1 text-sm text-slate-200">Du triffst auf Banden/Schläger als „menschliche“ Besatzer.</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">Keine Sekte zum Beitreten</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Es gibt keine offizielle „Ghost Revelry Hall“-Fraktion. Der Begriff „Kontrolle“ meint hier die feindlichen Gruppen, die den Ort besetzen.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">Kontrolle = Kriminalität + Geister</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                In der Unbound-Cavern-Story dient der Ort als Basis für illegale Aktivitäten, plus geisterhafte Präsenz als Horror-Element. Daher wird er oft als
                „von Banden und geisterhaften Kräften kontrolliert“ zusammengefasst.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              Für beitretbare Fraktionen siehe{" "}
              <Link href="/de/guides/sects" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                WWM Sekten-Übersicht
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="video" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Top‑YouTube‑Ergebnis zu dieser Frage</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Wenn du lieber ein 20‑Sekunden‑Video statt Text willst: Das ist der Clip, den Google oft ganz oben für{" "}
          <span className="font-semibold text-slate-100">„which faction controls ghost revelry hall“</span> zeigt.
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
          <h2 className="text-2xl font-bold text-slate-50">So kommst du zu Ghost Revelry Hall (Screenshots)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Die genaue Quest-Formulierung kann je nach Sprache variieren, aber der Weg ist gleich: Unbound Cavern spielen, Disciple retten (Key), dann die
          Eingangswellen clearen.
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{`Schritt ${index + 1}`}</p>
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
          <h2 className="text-2xl font-bold text-slate-50">Mehr Guides</h2>
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
