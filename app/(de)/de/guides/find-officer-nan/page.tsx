import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const guidePath = "/guides/find-officer-nan";
const heroImagePath = `${guidePath}/hero.webp`;
const heroImage = `${cdnBase}${heroImagePath}`;

const metaTitle = "WWM: Officer Nan finden (The Gilded Chase)";
const metaDescription =
  "Officer Nan schnell finden in The Gilded Chase: Harvestfall-Dock (Gebäude gegenüber der Zither Keeper) + Mirage-Boat-Deck (Geländer links beim Mahjong).";

const publishedDate = "2026-01-20";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: buildHreflangAlternates(guidePath, { canonicalLanguage: "de" }),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${baseUrl}/de${guidePath}`,
    siteName: "Where Winds Meet Hub",
    images: [{ url: heroImage, width: 1200, height: 675, alt: "Officer Nan auf dem Mirage-Boat-Deck" }],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [{ url: heroImage, alt: "Officer Nan in Where Winds Meet finden" }],
  },
};

const quickAnswers = [
  { label: "Quest", value: "The Gilded Chase-Questline.", icon: "🧾" },
  {
    label: "Harvestfall Village",
    value: "Officer Nan steht im Gebäude direkt gegenüber der Zither Keeper am Dock.",
    icon: "🏮",
  },
  {
    label: "Mirage Boat",
    value: "Er steht am Geländer links vom Mahjong-Bereich, wenn du aufs Boot schaust.",
    icon: "🛶",
  },
  {
    label: "Bug-Fix",
    value: "Wenn der Marker unter dem Boot hängt: runterspringen und „Zur nahegelegenen Questaufgabe zurückkehren“.",
    icon: "🧭",
  },
];

const locations = [
  {
    title: "Harvestfall Village Dock (erstes Treffen)",
    text: "Geh zum Dock und sprich mit der Zither Keeperin. Sie sagt, dass du eine Einladung brauchst, und schickt dich zu Officer Nan. Er ist im Gebäude direkt gegenüber und gibt dir das Job-Posting, nachdem du beim Fischschwarm geholfen hast.",
  },
  {
    title: "Mirage Boat Deck (Find Nan-Ziel)",
    text: "Nach dem Meeting aufs Deck gehen und am Geländer links vom Mahjong-Bereich suchen, wenn du aufs Boot schaust.",
  },
];

const walkthroughSteps = [
  "Kartenposition",
  "Kopfgeldtafel prüfen",
  "Mit Old Jin sprechen",
  "Mit der Zither Keeper sprechen",
  "Beweise dein Können",
  "Dock untersuchen",
  "Den alten Mann finden",
  "Mirage Boat betreten",
  "Nan finden",
  "Informationen sammeln",
  "Mägde belauschen",
  "An Officer Nan berichten",
  "Old Jin gesteht",
  "Old Jin verfolgen",
  "Old Jin besiegen",
  "Hinweise suchen",
  "Das falsche Boot",
  "Der Stimme folgen",
  "Nan am Dock",
  "Phantomdieb besiegen",
  "Das Ende",
];

const walkthroughImageFiles = [
  "map-location.webp",
  "examine-the-bounty-board.webp",
  "talk-to-old-jin.webp",
  "talk-to-the-zither-keeper.webp",
  "prove-your-skill.webp",
  "investigate-the-dock.webp",
  "find-out-the-old-man.webp",
  "board-the-mirage-boat.webp",
  "find-nan.webp",
  "get-intel.webp",
  "eavesdrop-on-the-maids.webp",
  "report-to-officer-nan.webp",
  "old-jin-confesses.webp",
  "chase-old-jin.webp",
  "defeat-old-jin.webp",
  "look-for-clues.webp",
  "the-fake-boat.webp",
  "follow-the-voice.webp",
  "nan-at-the-dock.webp",
  "defeat-the-phantom-thief.webp",
  "the-end.webp",
] as const;

const faq = [
  {
    q: "Wo ist Officer Nan in Harvestfall Village?",
    a: "Im Gebäude direkt gegenüber der Zither Keeper am Dock. Sprich zuerst mit ihr, geh dann hinein und rede mit Officer Nan (Southern Wayfarer).",
  },
  {
    q: "Wo steht Officer Nan beim Ziel „Find Nan“ auf dem Mirage Boat?",
    a: "Am Geländer links vom Mahjong-Bereich, wenn du auf das Boot schaust.",
  },
  {
    q: "Mein Marker hängt unter dem Boot – was tun?",
    a: "Spring ins Wasser und wähle „Zur nahegelegenen Questaufgabe zurückkehren“, um den Marker zurückzusetzen.",
  },
];

const relatedLinks = [
  {
    title: "One Leaf, One Life (Lost Chapter-Route)",
    href: "/de/guides/one-leaf-one-life",
  },
  {
    title: "Woven with Malice (Lost Chapter-Route)",
    href: "/de/guides/woven-with-malice",
  },
  {
    title: "Nebelverhangenes Gefängnis (Gruft-Route)",
    href: "/de/guides/mist-shrouded-prison",
  },
];

export default function FindOfficerNanPageDE() {
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
      image: heroImage,
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
        { "@type": "ListItem", position: 3, name: "Officer Nan finden", item: `${baseUrl}/de${guidePath}` },
      ],
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
  ];

  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage src={heroImagePath} alt="Officer Nan auf dem Mirage-Boat-Deck" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
        </div>
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Quest: The Gilded Chase
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">Officer Nan finden in Where Winds Meet</h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Wenn du nach „find officer nan where winds meet“ suchst, findest du hier beide Positionen in{" "}
              <span className="font-semibold text-slate-100">The Gilded Chase</span>: einmal am Dock von Harvestfall Village (für die Einladung) und später auf
              dem Mirage-Boat-Deck. Nutze die schnelle Antwort, um direkt zum richtigen Ort zu springen.
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80" id="answer">
              <p className="font-semibold text-amber-100">TL;DR (Kurzantwort)</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Harvestfall-Docks: Officer Nan im Gebäude gegenüber der Zither Keeper.</li>
                <li>• Mirage Boat: Deck, Geländer links neben dem Mahjong-Bereich.</li>
                <li>• Marker unter dem Boot? Runterspringen und „Zur nahegelegenen Questaufgabe zurückkehren“.</li>
                <li>• Suchbegriff: find officer nan where winds meet.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-100">
              <Link
                href="#locations"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Officer-Nan-Positionen
              </Link>
              <Link
                href="#steps"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Quest-Abfolge
              </Link>
              <Link
                href="#fixes"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Bug-Fix
              </Link>
              <Link
                href="#faq"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                FAQ
              </Link>
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
      </section>

      <section id="locations" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <h2 className="text-2xl font-bold text-slate-50">Zwei Orte, an denen Officer Nan steht</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {locations.map((location, index) => (
            <article
              key={location.title}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-slate-50">{location.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{location.text}</p>
              </div>
              <figure className="border-t border-slate-800/80">
                <div className="relative aspect-video">
                  <CdnImage
                    src={`${guidePath}/${index === 0 ? "prove-your-skill.webp" : "find-nan.webp"}`}
                    alt={`${location.title} – Fundort in Where Winds Meet`}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-300">
                  {location.title}. Source publisher: Game8.
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section id="fixes" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧯</span>
          <h2 className="text-2xl font-bold text-slate-50">Festhängend? Schnellfix</h2>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-sm text-emerald-100">
          Wenn der Questmarker unter dem Boot hängt, spring ins Wasser und wähle „Zur nahegelegenen Questaufgabe zurückkehren“, um
          das Ziel neu zu laden.
        </div>
      </section>

      <section id="steps" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Quest-Abfolge</h2>
        </div>
        <p className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm leading-6 text-emerald-100">
          Source publisher: Game8. Reuse authorization confirmed by site owner 2026-08-29. Die Screenshots dienen als visuelle
          Kontrollpunkte; prüfe die genaue Zielbeschreibung im aktuellen Spiel-Build.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {walkthroughSteps.map((step, idx) => (
            <article
              key={step}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Step {idx + 1}</p>
                  <h3 className="text-base font-semibold text-slate-50">{step}</h3>
                </div>
              </div>
              <figure className="border-t border-slate-800/80">
                <div className="relative aspect-video">
                  <CdnImage
                    src={`${guidePath}/${walkthroughImageFiles[idx]}`}
                    alt={`${step} – Walkthrough-Screenshot für The Gilded Chase`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-300">
                  Schritt {idx + 1}: {step}. Source publisher: Game8.
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-50">Ähnliche Guides</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          {relatedLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="underline underline-offset-4 hover:text-emerald-100">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
