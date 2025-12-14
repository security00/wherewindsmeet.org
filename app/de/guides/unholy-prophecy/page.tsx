import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "Where Winds Meet An Unholy Prophecy Guide (DE, 2025)",
  description:
    "Jan 2025: Vollständiger An Unholy Prophecy Walkthrough auf Deutsch – Dach-Feuerstellen, Rätsel-Emote, Meridian Touch für Glocke/Tür, Stachelgang, Shi-Zhen-Kampf und Bugfixes.",
  alternates: buildHreflangAlternates("/guides/unholy-prophecy", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet An Unholy Prophecy Guide (DE, 2025)",
    description:
      "Komplette Lösung: Start im Martial Temple, Feuerpfeile für Dach-Fackeln, Meridian Touch an der Glocke und Tür, Stachelhalle, Shi Zhen besiegen, plus häufige Fixes.",
    url: `${baseUrl}/de/guides/unholy-prophecy`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/unholy-prophecy/header.png"),
        width: 1200,
        height: 675,
        alt: "An Unholy Prophecy Szene in Where Winds Meet",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet An Unholy Prophecy Guide (DE, 2025)",
    description:
      "Kurz & lang: Feuerstellen, Emote, Meridian Touch, Stachelhalle, Shi Zhen – plus Workarounds bei Bugs.",
    images: [cdn("/guides/unholy-prophecy/header.png")],
  },
};

const quickFacts = [
  { label: "Region", value: "Kaifeng — Martial Temple (Jadewood Court)", icon: "🧭" },
  { label: "Questtyp", value: "Jianghu Legacy 07 Nebenquest", icon: "📜" },
  { label: "Start-Trigger", value: "Mit der Mysteriösen Malerin im Tempel sprechen", icon: "🗣️" },
  { label: "Kernschritte", value: "Dachklettern → Feuerpfeil-Fackeln → Emote → Stachelhalle → Boss", icon: "⚔️" },
  { label: "Benötigte Werkzeuge", value: "Feuerpfeile + Meridian Touch für versiegelte Türen", icon: "🔥" },
  { label: "Laufzeit", value: "Ca. 15–20 Minuten mit Route", icon: "⏱️" },
];

const fastRoute = [
  "Sprich mit der Mysteriösen Malerin im Martial Temple (Jadewood Court), um die Quest zu markieren.",
  "Finde den Zugang über den westlichen Dachvorsprung des Tempels und klettere hinauf.",
  "Schieße die hängenden Feuerkörbe auf den Dächern mit Feuerpfeilen an.",
  "Führe auf der Dachplattform das Emote „An Unholy Prophecy“ aus.",
  "Geh in den Flur gegenüber dem vergitterten Bereich; schleiche vorbei oder räume die Wachen.",
  "Schlage die Glocke und benutze Meridian Touch am Türklopfer, um den Weg zu öffnen.",
  "Bekämpfe die Wachen in der Arsenalhalle und wähle einen Flügel.",
  "Gehe in einen der beiden Flügel der Halle.",
  "Hole die Langwaffe im linken Flügel.",
  "Hole die Kurzwaffe im rechten Flügel.",
  "Betrete die freigeschaltete Tür und gehe weiter hinein.",
  "Betritt die Boss-Arena und bereite dich vor.",
  "Besiege Shi Zhen und seine Helfer; erst Adds/Banner, dann Boss.",
  "Triff die Mysteriöse Malerin erneut, um die Quest abzuschließen.",
];

export type WalkthroughStep = {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
  extraImages?: {
    src: string;
    alt: string;
  }[];
  video?: {
    src: string;
    poster?: string;
    label?: string;
  };
  videos?: {
    src: string;
    poster?: string;
    label?: string;
  }[];
  // Wenn gesetzt, erscheinen extraImages nach den ersten N Videos statt direkt nach dem Hauptbild.
  extraImagesAfterVideos?: number;
  // Wenn true, werden Videos vor Bildern gerendert.
  videosFirst?: boolean;
  // Bilder, die nach allen Medien angehängt werden.
  extraImagesAfterMedia?: {
    src: string;
    alt: string;
  }[];
};

const walkthrough: WalkthroughStep[] = [
  {
    title: "Mit der Mysteriösen Malerin sprechen",
    text: "Reise zum Martial Temple in Jadewood Court (Kaifeng) und sprich mit der Mysteriösen Malerin, um An Unholy Prophecy (Jianghu Legacy 07) zu starten.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/09e38cc673e78b1672132d3572098067.png"),
      alt: "Where Winds Meet – Sprich mit der Mysteriösen Malerin",
    },
  },
  {
    title: "Eingang über den westlichen Dachvorsprung",
    text: "Folge den Questmarkierungen über den westlichen Dachvorsprung des Martial Temple und auf die Dächer, um den Pfad zu erreichen.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/f96b6f737b455cf08d82d02e120f0205.png"),
      alt: "Where Winds Meet – Auf das Dach klettern",
    },
  },
  {
    title: "Hängende Feuerkörbe anzünden",
    text: "Rüste Feuerpfeile aus und entzünde alle drei hängenden Feuerkörbe auf der Dachroute. Normale Pfeile zählen hier nicht.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/3662de73207315d3e2b3483081826783.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/3662de73207315d3e2b3483081826783.jpg"),
      label: "Folge dem Dach-Marker und zünde die Feuerkörbe",
    },
  },
  {
    title: "Quest-Emote ausführen",
    text: "Nachdem die Feuerkörbe brennen, öffne den Puzzle-Tab (F2) und führe auf der Dachplattform das Emote „An Unholy Prophecy“ aus.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/27e4c791d5143760bdb150b7758187d7.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/27e4c791d5143760bdb150b7758187d7.jpg"),
      label: "Plattform anlaufen und Emote triggern",
    },
  },
  {
    title: "Flur gegenüber dem Gitter nehmen",
    text: "Lass dich ins Innere fallen und nimm den Flur gegenüber des vergitterten Bereichs. Schleiche oder kämpfe dich vor.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/37d7a9d5f22c4ffafeacb6bcd2697a44.png"),
      alt: "Where Winds Meet – In den Tempelflur und an Wachen vorbei",
    },
  },
  {
    title: "Glocke schlagen & Meridian Touch nutzen",
    text: "Interagiere mit der Glocke/dem Klopfer und setze Meridian Touch ein, um den Weg nach vorn zu öffnen.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/31c4cd8070b9e6f5c228f994d78d39cf.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/31c4cd8070b9e6f5c228f994d78d39cf.jpg"),
      label: "Jade-Glocke und Klopfer mit Meridian Touch",
    },
  },
  {
    title: "Wachen in der Arsenalhalle räumen",
    text: "Dringe durch die Arsenalhalle gegenüber dem Gitter vor, räume oder umfahre die Wachen auf dem Weg zu den Flügeln.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/56962bba66e1353c445a3ce12029c611.png"),
      alt: "Where Winds Meet – Arsenalhalle von An Unholy Prophecy",
    },
  },
  {
    title: "Einen Flügel wählen",
    text: "Von der zentralen Halle kannst du links oder rechts gehen, um Waffen zu holen, bevor es weitergeht.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/0aeff7a108bf93d78abfbced080bc019.png"),
      alt: "Where Winds Meet – Von der Arsenalhalle in die Flügel",
    },
  },
  {
    title: "Langwaffe holen (linker Flügel)",
    text: "Geh zuerst links und nimm die Langwaffe, um die Statue zu erfüllen.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/be105baf134b6032d8f23f4b568795a9.png"),
      alt: "Where Winds Meet – Treppe vor dem linken Flügel",
    },
    extraImagesAfterVideos: 4,
    videos: [
      {
        src: cdn("/guides/unholy-prophecy/game8/726a2844c6087d8f974afa1be19d5fbf.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/726a2844c6087d8f974afa1be19d5fbf.jpg"),
        label: "Halle mit zwei Türen betreten (linker Weg)",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/f933aa2d44cc82981aa6ea2c1c97565b.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/f933aa2d44cc82981aa6ea2c1c97565b.jpg"),
        label: "Hebel ziehen und weitergehen (links)",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/85f0ed1a35679cf702db0f8da7e869be.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/85f0ed1a35679cf702db0f8da7e869be.jpg"),
        label: "Mit dem Jade-Knoten interagieren",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/e84b11e5ee81ad54656b3aef06a414df.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/e84b11e5ee81ad54656b3aef06a414df.jpg"),
        label: "Die Langwaffe aufnehmen",
      },
    ],
    extraImages: [
      {
        src: cdn("/guides/unholy-prophecy/game8/14633ac62c24cf256da429096922bd2b.png"),
        alt: "Where Winds Meet – Speer/Waffe aufnehmen",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/a6fcfadddcc593de1afa69fef03facd1.png"),
        alt: "Where Winds Meet – Stachelgraben-Sektion links",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/9063c1e4f9503467bec0866d8aa47678.png"),
        alt: "Where Winds Meet – Weitere Detailansicht linker Weg",
      },
    ],
  },
  {
    title: "Kurzwaffe holen (rechter Flügel)",
    text: "Geh in den rechten Flügel und sammle die Kurzwaffe, damit beide Slots gefüllt sind.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/307d66a8d144cff4e0caa3772b10c0c7.png"),
      alt: "Where Winds Meet – Truhe im rechten Flügel",
    },
    extraImagesAfterVideos: 1,
    videosFirst: true,
    video: {
      src: cdn("/guides/unholy-prophecy/game8/cf3efe428140415bb06cba02dc1ed0dc.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/cf3efe428140415bb06cba02dc1ed0dc.jpg"),
      label: "Fortschritt im rechten Flügel",
    },
    videos: [
      {
        src: cdn("/guides/unholy-prophecy/game8/27f2e32e3d1be0d6b75afec9c36307d4.mp4"),
        poster: cdn("/guides/unholy-prophecy/game8/27f2e32e3d1be0d6b75afec9c36307d4.jpg"),
        label: "Schmaler Korridor-Kampf",
      },
    ],
    extraImages: [
      {
        src: cdn("/guides/unholy-prophecy/game8/f02bf4a4c3348c91a4d1a9ee2c7c10c9.png"),
        alt: "Where Winds Meet – Durchgang im rechten Flügel",
      },
      {
        src: cdn("/guides/unholy-prophecy/game8/a9ed74b69494bbe8f81bad489dd041d2.png"),
        alt: "Where Winds Meet – Letzter Abschnitt rechter Weg",
      },
    ],
    extraImagesAfterMedia: [
      {
        src: cdn("/guides/unholy-prophecy/game8/a387a2def1d9ba5a646840901bf91382.png"),
        alt: "Where Winds Meet – Kurzwaffe abgegeben",
      },
    ],
  },
  {
    title: "Durch die geöffnete Tür gehen",
    text: "Sobald beide Waffen platziert sind, geh durch die neu geöffnete Tür und tiefer hinein.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/9f122b59da74824e9f288b723d9108f6.png"),
      alt: "Where Winds Meet – Freigeschalteter Pfad",
    },
  },
  {
    title: "Boss-Arena betreten",
    text: "Betritt die letzte Kammer und bereite dich auf Shi Zhen vor. Das Video zeigt den Anlauf direkt vor dem Kampf.",
    video: {
      src: cdn("/guides/unholy-prophecy/game8/f73ac50bd768174d224cebcc24e0f2e8.mp4"),
      poster: cdn("/guides/unholy-prophecy/game8/f73ac50bd768174d224cebcc24e0f2e8.jpg"),
      label: "Zugang zur Boss-Arena",
    },
  },
  {
    title: "Shi Zhen und Helfer besiegen",
    text: "Kämpfe gegen Shi Zhen und seine Helfer. Eliminier zuerst Bannerträger/Adds, um den Druck zu senken, dann den Boss.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/3d7598fbc5a586d66d477e6807b5d655.png"),
      alt: "Where Winds Meet – Bosskampf Shi Zhen",
    },
  },
  {
    title: "Erneut zur Mysteriösen Malerin",
    text: "Nach Kampf und Dialog kehre zur Mysteriösen Malerin zurück, um die Quest abzuschließen und Belohnungen zu holen.",
    image: {
      src: cdn("/guides/unholy-prophecy/game8/fc5a46957dffe3e077df5d4219f6cf18.png"),
      alt: "Where Winds Meet – Wieder mit der Malerin sprechen",
    },
  },
];

const stuckFixes = [
  "Feuerpfeile zünden nicht: Wirklich Feuerpfeile ausrüsten – Standardpfeile zählen nicht. Vor dem Aufstieg ein paar extra craften/kaufen.",
  "Malerin nicht da: Sie steht im Martial Temple in Jadewood Court. Kanal wechseln oder rasten, bis sie spawnt.",
  "Stachelhalle brutal: Takt der Stacheln beobachten, segmentweise laufen, vorher heilen. Kein Timer – Geduld hilft.",
  "Türen bleiben zu: Der Prompt erscheint nur, wenn Meridian Touch ausgerüstet ist. Andere Skills öffnen das Siegel nicht.",
  "Waffen-Abgabe fehlt: Hol die Waffen aus linkem und rechtem Flügel. Falls zerlegt, neu betreten oder Kanal wechseln, damit die Waffenständer respawnen.",
  "Wachen schlagen zu hart: Sprint an den meisten Patrouillen vorbei und folge den Markern. Pflichtkampf nur in der Endkammer.",
  "Quest hängt nach Feuerkörben: Zur Dachplattform zurück und das Emote „An Unholy Prophecy“ im Puzzle-Tab (F2) abspielen.",
];

const faq = [
  {
    q: "Wo startet An Unholy Prophecy?",
    a: "Im Martial Temple von Jadewood Court (Kaifeng). Sprich dort mit der Mysteriösen Malerin, um Jianghu Legacy 07 zu erhalten.",
  },
  {
    q: "Was muss ich mitbringen?",
    a: "Feuerpfeile sind Pflicht für die Feuerkörbe, Meridian Touch ist nötig für die versiegelten Türen. Ein solides Kampfssetup hilft für Shi Zhen.",
  },
  {
    q: "Wie bekomme ich Feuerpfeile?",
    a: "In der Stadt kaufen oder craften. Nimm mindestens drei plus Reserve mit, falls du verfehlst.",
  },
  {
    q: "Stachelgang tötet mich ständig – Abkürzung?",
    a: "Keine Abkürzung. Rhythmus anschauen, in kurzen Schüben laufen, vorher heilen. Bei Lag Grafik senken und erneut versuchen.",
  },
  {
    q: "Quest hängt nach Ranken/Fallen – was tun?",
    a: "Ranken mit Feuer beseitigen, Meridian Touch am Klopfer ausrüsten und nutzen, danach ggf. Kanal wechseln, wenn Prompts fehlen.",
  },
  {
    q: "Wo finde ich das Emote „An Unholy Prophecy“?",
    a: "Im Puzzle-Tab (F2). Nach allen drei Feuerkörben auf der Dachplattform abspielen.",
  },
  {
    q: "Kann ich den Stachelgang überspringen?",
    a: "Nein. Es gibt keinen Skip, aber auch keinen Timer – langsam und im Takt laufen.",
  },
  {
    q: "Ist Meridian Touch zwingend?",
    a: "Ja. Die versiegelten Türen öffnen sich nur mit ausgerüstetem Meridian Touch.",
  },
  {
    q: "Welche Belohnungen gibt es?",
    a: "Berichtet werden u. a.: Fame and Fortune Hanging Scroll, 5× Custom Chest, Medicinal Tales, 4× Lv. 3 Ebon Iron, 30× Echo Jade, 50× Kaifeng Exploration, 100 Enlightenment Points sowie 20.000 Charakter‑EP und 20.000 Münzen. (Itemnamen können je Region abweichen.)",
  },
  {
    q: "Wie lange dauert die Quest?",
    a: "Mit Route etwa 15–20 Minuten. Beim ersten Mal eher 20–30, hauptsächlich wegen der Stachelhalle.",
  },
  {
    q: "Ähnliche Quests?",
    a: "Probier Woven with Malice (Lost Chapter) und One Leaf One Life. Für Änderungen: Roadmap im News-Bereich beobachten.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Start",
      item: `${baseUrl}/de`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${baseUrl}/de/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "An Unholy Prophecy",
      item: `${baseUrl}/de/guides/unholy-prophecy`,
    },
  ],
};

export default function UnholyProphecyDePage() {
  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-purple-900/30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-200">
              Jianghu Legacy 07
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Aktualisiert Jan 2025 · TL;DR unten
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Where Winds Meet „An Unholy Prophecy“ Walkthrough
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              Neu geschriebener Guide: Start im Martial Temple in Jadewood Court, alle Dach-Feuerkörbe mit Feuerpfeilen entzünden,
              Meridian Touch für versiegelte Türen nutzen, die Stachelhalle passieren und Shi Zhen bezwingen. Alle Schritte sind
              abgedeckt, damit niemand bei „An Unholy Prophecy Where Winds Meet“ mehr stecken bleibt.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR: Feuerkörbe → Dach-Emote → Meridian Touch Glocke/Tür → Stachelhalle → Shi Zhen (erst Adds/Banner).</li>
              <li>• Häufige Fixes: Zeit richtig einstellen, Meridian Touch am Klopfer, Fallen-Ranken mit Feuer entfernen; wenn festhängt, Kanal wechseln.</li>
              <li>• Verwandte Quests: One Leaf One Life · Woven with Malice · Roadmap/Nächstes Update.</li>
            </ul>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-purple-400/40">
                Feuerpfeile Pflicht
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-cyan-400/30">
                Meridian Touch nötig
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">
                13 Quest-Schritte
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/de/guides"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                ← Zurück zu Guides
              </Link>
              <Link
                href="/de/news#roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-emerald-300/60"
              >
                📅 Roadmap / nächstes Update
              </Link>
              <Link
                href="/de/guides/woven-with-malice"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100 transition hover:border-sky-300/80 hover:text-sky-50"
              >
                🧶 Woven with Malice
              </Link>
              <Link
                href="/de/guides/one-leaf-one-life"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                🍂 One Leaf, One Life
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-inner shadow-slate-900/60">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-200">Schnellinfos</h2>
            <div className="mt-4 grid gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                >
                  <span className="text-lg">{fact.icon}</span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">{fact.label}</div>
                    <div className="text-sm text-slate-100">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/80 p-3">
              <div className="text-xs uppercase tracking-wide text-slate-400">Start-Position Karte</div>
              <div className="relative mt-2 aspect-video overflow-hidden rounded-lg bg-slate-950">
                <Image
                  src={cdn("/guides/unholy-prophecy/game8/b6847fd4b9fd993041db58e258ecd4c9.png")}
                  alt="Startpunkt von An Unholy Prophecy im Martial Temple, Jadewood Court"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Was dieser Guide abdeckt
        </h2>
        <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <p className="text-base leading-relaxed text-slate-200">
            An Unholy Prophecy kombiniert Traversal, Rätsel und Bosskampf. Dieser Guide geht alle 13 Ziele in Reihenfolge durch,
            zeigt, wann du Feuerpfeile brauchst, wann Meridian Touch, und wie du die Stachelhalle ohne Frust schaffst.
          </p>
          <p className="text-base leading-relaxed text-slate-200">
            Wenn du nach „An Unholy Prophecy Where Winds Meet“ suchst, weil du an Fallen oder Siegeln hängst, folge den Abschnitten
            unten. Jede Phase nennt das exakte Mechanik-Triggern – Feuerkörbe, Emote-Timing, Meridian Touch und der Shi-Zhen-Kampf –
            damit kein Schritt fehlt.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Feuerpfeil-Mechanik</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Nur Feuerpfeile zählen für die drei Dach-Feuerkörbe – normale Pfeile triggern sie nicht. Bring Reserve mit.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Rätsel-Lösungen</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Versiegelte Türen verlangen Meridian Touch. Das Emote steckt im Puzzle-Tab (F2) und muss nach den Feuerkörben gespielt werden.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Kampf & Fallen</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Geh den Stachelgang ruhig an, hol beide Waffen-Caches, dann Adds zuerst, bevor du Shi Zhen finisht.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Fast Route (TL;DR)
          </h2>
          <Link
            href="/de/guides"
            className="text-sm text-purple-300 underline underline-offset-4 hover:text-purple-200"
          >
            Zurück zu Guides
          </Link>
        </div>
        <ol className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {fastRoute.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-200 ring-1 ring-purple-400/40">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-slate-400">
          Falls du über die Suche „An Unholy Prophecy Where Winds Meet“ hier gelandet bist: Speichere dir das TL;DR, um schnell zu jedem Schritt zu springen.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Vollständiger Walkthrough
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {walkthrough.flatMap((step, idx) => {
            const baseNum = idx + 1;
            const primaryImage = step.image ? [{ ...step.image, type: "image" as const }] : [];
            const extraImages = Array.isArray(step.extraImages)
              ? step.extraImages.map((img) => ({ ...img, type: "image" as const }))
              : [];
            const combinedVideos = [
              ...(step.video ? [{ ...step.video, type: "video" as const }] : []),
              ...(Array.isArray(step.videos)
                ? step.videos.map((vid) => ({ ...vid, type: "video" as const }))
                : []),
            ];

            const splitIndex =
              typeof step.extraImagesAfterVideos === "number" ? step.extraImagesAfterVideos : null;
            const videosFirst = step.videosFirst === true;

            const media =
              splitIndex !== null
                ? videosFirst
                  ? [
                      ...combinedVideos.slice(0, splitIndex),
                      ...primaryImage,
                      ...extraImages,
                      ...combinedVideos.slice(splitIndex),
                    ]
                  : [
                      ...primaryImage,
                      ...combinedVideos.slice(0, splitIndex),
                      ...extraImages,
                      ...combinedVideos.slice(splitIndex),
                    ]
                : videosFirst
                  ? [...combinedVideos, ...primaryImage, ...extraImages]
                  : [...primaryImage, ...extraImages, ...combinedVideos];
            const tailImages = Array.isArray(step.extraImagesAfterMedia)
              ? step.extraImagesAfterMedia.map((img) => ({ ...img, type: "image" as const }))
              : [];

            const combinedMedia = [...media, ...tailImages];
            const mediaCards = combinedMedia.length
              ? combinedMedia.map((item, mIdx) => ({
                  key: `${idx}-media-${mIdx}`,
                  content: (
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200 ring-1 ring-purple-400/40">
                          {combinedMedia.length > 1 ? `${baseNum}.${mIdx + 1}` : baseNum}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-200">
                            {step.text}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-3 space-y-2">
                        <span className="text-[11px] text-slate-400 block">
                          {item.type === "image"
                            ? item.alt ?? step.title
                            : item.label ?? step.title}
                        </span>
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-950">
                          {item.type === "image" ? (
                            <Image
                              src={item.src}
                              alt={item.alt ?? `${step.title} – Schritt ${baseNum}`}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          ) : (
                            <video
                              src={item.src}
                              poster={item.poster}
                              controls
                              preload="metadata"
                              className="h-full w-full"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ),
                }))
              : [
                  {
                    key: `${idx}-nomedia`,
                    content: (
                      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200 ring-1 ring-purple-400/40">
                            {baseNum}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-200">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ];
            return mediaCards;
          }).map((card) => (
            <div key={card.key}>{card.content}</div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Festgefahren? Probier diese Fixes</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {stuckFixes.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60"
            >
              <div className="text-sm font-semibold text-purple-200">F. {item.q}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-200">A. {item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Video-Guide
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-slate-200">
            Lieber schauen? Dieses Video zeigt denselben Ablauf mit Feuerkörben, Emote-Trigger, Stachelhalle-Timing und Bosskill:
          </p>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3yLD1u_M5RY"
              title="An Unholy Prophecy Quest Guide Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
          <p className="text-sm text-slate-400">
            Nutze das Video parallel zu den Textschritten, um Positionen, Stachel-Timing und den Shi-Zhen-Fight abzugleichen.
          </p>
        </div>
      </section>
    </article>
  );
}
