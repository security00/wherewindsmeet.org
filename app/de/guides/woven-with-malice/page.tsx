import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WalkthroughGallery from "./WalkthroughGallery";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "Where Winds Meet Woven with Malice Guide (DE, 2025)",
  description:
    "Jan 2025: Vollständiger Woven with Malice Guide – Zi-/Chou-Zeitfenster, Farbstoffe, Mönchsduell, Falle + Bambusschweif, sowie Bugfixes für festhängende Schritte.",
  alternates: buildHreflangAlternates("/guides/woven-with-malice", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Woven with Malice Guide (DE, 2025)",
    description:
      "Zi-Stunde triggern, Farbstoffe sammeln, Mönch stellen, Falle zünden und fertigstellen – inklusive Bugfixes (Zeit setzen, Ranken mit Feuer) bei festgefahrenen Quests.",
    url: `${baseUrl}/de/guides/woven-with-malice`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/woven-with-malice/header-01.png"),
        width: 1200,
        height: 675,
        alt: "Woven with Malice Quest-Glocke in Where Winds Meet",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Woven with Malice Guide (DE, 2025)",
    description:
      "Zeitgates, Falle und Bugfixes für Woven with Malice – Quest abschließen, selbst wenn sie feststeckt.",
    images: [cdn("/guides/woven-with-malice/header-01.png")],
  },
};

const quickFacts = [
  { label: "Region", value: "Qinghe – bei Buddha Fort (Sundara Land)", icon: "🧭" },
  { label: "Quest-Typ", value: "Encounter / Lost Chapter", icon: "📜" },
  { label: "Zeitfenster", value: "Start bei Zi-Stunde; Gewand-Abholung bei Chou-Stunde", icon: "⏱️" },
  { label: "Kernaktionen", value: "Farbstoffe → Taschentuch-Hinweise → Mönchsduell → Falle → Bambus-Verfolgung", icon: "🧶" },
  { label: "Typischer Fehler", value: "Fortschritt stoppt, wenn Zeit nicht gesetzt oder Falle nicht mit Feuer verbrannt wird", icon: "⚠️" },
  { label: "Berichtete Belohnungen", value: "Echo Jade, Lingering Melody, Münzen, EP, Jade Fish", icon: "🎁" },
];

const fastRoute = [
  "Zeit auf Zi-Stunde stellen, mit dem Gelehrten in der Glocke sprechen.",
  "Das Mädchen am Stickerei-Platz treffen; roten, blauen und schwarzen Farbstoff sammeln und abgeben.",
  "Einen Ingame-Tag vorspulen → Chou-Stunde setzen → Celestial Silk Garment abholen.",
  "Zur Glocke zurück, lauschen, Gelehrten tot finden, erstes Taschentuch aufheben.",
  "Mönch Tranquillus stellen und kämpfen; zweites Taschentuch erhalten („mit Leben vergelten“).",
  "Fallenplatz wählen, tote Ranken mit Feuer verbrennen, Mädchen verstecken; Seidenraupenfrau erscheint und flieht.",
  "Ihr folgen, dann den Mönch sehen, wie er in seiner eigenen Falle hängt.",
  "Zum Bambushain, mit dem Mädchen sprechen, dann den Besitzer des Stickereipavillons verhören.",
  "Seinen Wagen prüfen, Schutt in nahegelegenen Ruinen räumen (Q + Sprung) und die Steinwand inspizieren.",
  "Wind Sense im Bambuswald nutzen, zwei Männer belauschen, Besitzer hinter dem Pavillon abfangen.",
  "Gas einatmen, Rettungs-Cutscene ansehen, mit dem Mädchen sprechen – Quest abgeschlossen.",
];

export type WalkthroughStep = {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
};

const walkthrough: WalkthroughStep[] = [
  {
    title: "Zeit auf Zi-Stunde stellen",
    text: "Uhr öffnen und vor Annäherung an die Glocke auf Zi-Stunde setzen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-02-time-zi.png"),
      alt: "Zeit auf Zi-Stunde einstellen",
    },
  },
  {
    title: "Gelehrten in der Glocke erreichen",
    text: "Zum Buddha Fort (Qinghe) reisen und die Glocke mit dem gefangenen Gelehrten untersuchen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-01-bell.png"),
      alt: "Ankunft bei der Glocke mit dem gefangenen Gelehrten",
    },
  },
  {
    title: "Dialog starten",
    text: "Mit dem Gelehrten in der Glocke sprechen, um Woven with Malice offiziell zu beginnen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-03-bell-talk.png"),
      alt: "Gespräch mit dem Gelehrten in der Glocke",
    },
  },
  {
    title: "Zu den Stickerinnen gehen",
    text: "Dem Marker zum Stickerei-Platz folgen, um die Quest fortzusetzen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-04-embroidery-ladies.png"),
      alt: "Unterwegs zum Stickerei-Platz",
    },
  },
  {
    title: "Mit dem kleinen Mädchen sprechen",
    text: "Das Mädchen bei den Stickerinnen finden und ihre Bitte anhören.",
    image: {
      src: cdn("/guides/woven-with-malice/step-05-little-girl.png"),
      alt: "Gespräch mit dem Mädchen bei den Stickerinnen",
    },
  },
  {
    title: "Roten und blauen Farbstoff sammeln",
    text: "Die roten und blauen Farbstoffe in den Hofbehältern aufheben.",
    image: {
      src: cdn("/guides/woven-with-malice/step-06-red-blue-dye.png"),
      alt: "Rote und blaue Farbe einsammeln",
    },
  },
  {
    title: "Schwarzen Farbstoff holen",
    text: "Den schwarzen Farbstoff aus dem Kohlebecken nehmen, um das Set zu vervollständigen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-07-black-dye.png"),
      alt: "Schwarze Farbe aus dem Kohlebecken holen",
    },
  },
  {
    title: "Farben abgeben und einen Tag warten",
    text: "Farben dem Mädchen geben, dann einen Ingame-Tag vorspulen und auf Chou-Stunde stellen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-08-wait-chou.png"),
      alt: "Zeit auf Chou-Stunde vor dem Abholen stellen",
    },
  },
  {
    title: "An der Glocke lauschen",
    text: "Zur Glocke zurückkehren und das Gespräch zwischen Gelehrtem und Frau belauschen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-09-eavesdrop.png"),
      alt: "Lauschen an der Glocke",
    },
  },
  {
    title: "Gelehrten tot finden",
    text: "Die Glocke erneut prüfen und den toten Gelehrten finden.",
    image: {
      src: cdn("/guides/woven-with-malice/step-10-scholar-dead.png"),
      alt: "Der Gelehrte wurde getötet",
    },
  },
  {
    title: "Erstes Taschentuch lesen",
    text: "Das Taschentuch am Boden aufheben und den Inhalt lesen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-11-handkerchief-1.png"),
      alt: "Erster Taschentuch-Hinweis",
    },
  },
  {
    title: "Mönch Tranquillus finden",
    text: "Zum Mönch gehen, Silkworm Lady erwähnen und ihn ausfragen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-12-monk.png"),
      alt: "Gespräch mit Mönch Tranquillus",
    },
  },
  {
    title: "Mit dem Mönch raufen",
    text: "Gegen den Mönch kämpfen, damit er die Wahrheit sagt und die Quest weitergeht.",
    image: {
      src: cdn("/guides/woven-with-malice/step-13-spar.png"),
      alt: "Sparring mit dem Mönch",
    },
  },
  {
    title: "Zweites Taschentuch erhalten",
    text: "Das zweite Taschentuch mit dem Hinweis „mit Leben vergelten“ bekommen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-14-handkerchief-2.png"),
      alt: "Zweiter Taschentuch-Hinweis vom Mönch",
    },
  },
  {
    title: "Mit dem Mädchen debriefen",
    text: "Das neue Indiz mit dem Mädchen besprechen, um den nächsten Schritt zu setzen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-15-talk-girl.png"),
      alt: "Besprechung mit dem Mädchen",
    },
  },
  {
    title: "Hinterhalt-Ort wählen",
    text: "Den Fallenplatz laut Questmarker auswählen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-16-trap-spot.png"),
      alt: "Fallenplatz auswählen",
    },
  },
  {
    title: "Tote Ranken verbrennen",
    text: "Feuerpfeile oder Feuer-Skills nutzen, um die Ranken an der Falle zu verbrennen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-17-burn-vines.png"),
      alt: "Ranken mit Feuer entfernen",
    },
  },
  {
    title: "Mädchen verstecken",
    text: "Das Mädchen sicher positionieren, bevor der Encounter startet.",
    image: {
      src: cdn("/guides/woven-with-malice/step-18-hide-girl.png"),
      alt: "Mädchen in Sicherheit bringen",
    },
  },
  {
    title: "Seidenraupenfrau erscheint",
    text: "Warten, bis die Silkworm Lady auftaucht, wenn der Mönch ruft.",
    image: {
      src: cdn("/guides/woven-with-malice/step-19-silkworm-lady-appears.png"),
      alt: "Silkworm Lady erscheint bei der Falle",
    },
  },
  {
    title: "Fliehendes Ziel verfolgen",
    text: "Ihr nachsetzen und in Marker-Nähe bleiben, damit die Sequenz aktiv bleibt.",
    image: {
      src: cdn("/guides/woven-with-malice/step-20-follow.png"),
      alt: "Verfolgung der Silkworm Lady",
    },
  },
  {
    title: "Mönch in eigener Falle",
    text: "Zurückkehren und sehen, wie der Mönch in seiner Falle feststeckt.",
    image: {
      src: cdn("/guides/woven-with-malice/step-21-monk-trapped.png"),
      alt: "Mönch steckt in der Falle",
    },
  },
  {
    title: "Mädchen im Bambushain treffen",
    text: "Zum Bambushain gehen und mit dem Mädchen sprechen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-22-bamboo-grove.png"),
      alt: "Treffen im Bambushain",
    },
  },
  {
    title: "Mit dem Stickerei-Besitzer reden",
    text: "Den Besitzer des Stickereipavillons finden und Dialog abschließen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-23-embroidery-owner.png"),
      alt: "Stickerei-Besitzer befragen",
    },
  },
  {
    title: "Wagen untersuchen",
    text: "Den Wagen des Besitzers prüfen, bevor es weitergeht.",
    image: {
      src: cdn("/guides/woven-with-malice/step-24-cart.png"),
      alt: "Wagen des Besitzers inspizieren",
    },
  },
  {
    title: "Schutt in den Ruinen räumen",
    text: "Bei den nahen Ruinen mit Q + Sprung Geröll entfernen und eintreten.",
    image: {
      src: cdn("/guides/woven-with-malice/step-25-ruins.jpg"),
      alt: "Geröll in den Ruinen beseitigen",
    },
  },
  {
    title: "Steinwand untersuchen",
    text: "Drinnen die Steinwand inspizieren, um weitere Hinweise zu finden.",
    image: {
      src: cdn("/guides/woven-with-malice/step-26-stone-wall.png"),
      alt: "Steinwand in den Ruinen ansehen",
    },
  },
  {
    title: "Wind Sense einsetzen",
    text: "Wind Sense im Bambuswald aktivieren und langsam gehen, bis Anomalien erscheinen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-27-wind-sense.png"),
      alt: "Wind Sense im Bambuswald nutzen",
    },
  },
  {
    title: "Zwei Männer belauschen",
    text: "Der Anomalie folgen und zwei Männer über den Plan sprechen hören.",
    image: {
      src: cdn("/guides/woven-with-malice/step-28-eavesdrop.png"),
      alt: "Gespräch zweier Männer belauschen",
    },
  },
  {
    title: "Besitzer abfangen",
    text: "Den Stickerei-Besitzer abfangen, um das Mädchen zu warnen – er setzt Schlafgas ein.",
    image: {
      src: cdn("/guides/woven-with-malice/step-29-ambush.png"),
      alt: "Hinterhalt auf den Stickerei-Besitzer",
    },
  },
  {
    title: "Rettungs-Cutscene",
    text: "Du wirst vergast; zwei Kampfkünstler kommen in der Zwischensequenz zur Rettung.",
    image: {
      src: cdn("/guides/woven-with-malice/step-30-rescue.png"),
      alt: "Cutscene mit den Rettern",
    },
  },
  {
    title: "Letztes Gespräch mit dem Mädchen",
    text: "Nach dem Aufwachen mit dem Mädchen sprechen, um Woven with Malice abzuschließen.",
    image: {
      src: cdn("/guides/woven-with-malice/step-31-finish.png"),
      alt: "Abschließendes Gespräch zum Questende",
    },
  },
];

const stuckFixes = [
  "Quest startet nicht: Zeit auf Zi-Stunde setzen, mit dem Glocken-Gelehrten sprechen; bei Ausbleiben neu einloggen oder Channel wechseln.",
  "Ranken brennen nicht: Nur Feuerpfeile oder Feuer-Skills zählen; andere Schadensarten entfernen die Ranken nicht.",
  "Verfolgung bricht ab: In Marker-Reichweite bleiben, nicht lange gleiten oder Mount nutzen; bei Abbruch den Schritt davor wiederholen.",
  "Wind Sense zeigt nichts: Langsam durch den Bambuswald gehen, Wind Sense erneut wirken, bis Anomalien auf der Minimap auftauchen.",
  "Dialog-Schleife: Nach dem Sparring mit dem Mönch erneut ansprechen; wenn fest, reloggen und den letzten Knoten wiederholen.",
];

const faq = [
  {
    q: "Welche Zeit brauche ich für Woven with Malice?",
    a: "Zi-Stunde zum Start beim Glocken-Gelehrten, Chou-Stunde für das Celestial Silk Garment. Wenn nichts triggert: Zeit neu setzen, reloggen oder Channel wechseln.",
  },
  {
    q: "Wie verbrenne ich die toten Ranken an der Falle?",
    a: "Mit Feuerpfeilen oder einem Feuer-Element-Skill. Andere Schadensquellen zählen nicht – ohne Feuer geht es nicht weiter.",
  },
  {
    q: "Die Seidenraupenfrau verschwindet / Verfolgung bricht ab – was tun?",
    a: "Nah am Pfad bleiben, große Sprünge/Flüge vermeiden, Schritt erneut spielen. Channel-Wechsel kann helfen.",
  },
  {
    q: "Wind Sense markiert nichts im Bambuswald.",
    a: "Wind Sense mehrfach wirken und langsam laufen, bis Anomalien erscheinen; dann nähern, um das Belauschen auszulösen.",
  },
  {
    q: "Muss ich den Mönch wirklich bekämpfen?",
    a: "Ja. Der Kampf zwingt ihn, den zweiten Taschentuch-Hinweis preiszugeben und die Quest fortzusetzen.",
  },
  {
    q: "Wie lange dauert Woven with Malice?",
    a: "Etwa 15–20 Minuten, wenn Zi- und Chou-Stunde korrekt gesetzt sind; Wiederholungen verlängern es. Folge der TL;DR-Liste, um auf Kurs zu bleiben.",
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
      name: "Woven with Malice",
      item: `${baseUrl}/de/guides/woven-with-malice`,
    },
  ],
};

export default function WovenWithMaliceDePage() {
  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-emerald-900/30">
        <div className="absolute inset-0">
          <Image
            src={cdn("/guides/woven-with-malice/header-02.png")}
            alt="Woven with Malice Artwork"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Encounter / Lost Chapter
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Woven with Malice Quest Walkthrough
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              31-Schritte-Guide für Woven with Malice: Zi-Stunde triggern, Farbstoffe holen, den Mönch stellen, Falle setzen,
              Bambus-Verfolgung, Rettungsszene – plus Fixes, falls die Quest bockt. Für Suchanfragen wie „where winds meet woven
              with malice quest“ oder „woven with malice where winds meet“ findest du hier alle Schritte mit zoombaren Screenshots,
              damit du keine Details raten musst.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/40">
                Start bei Zi-Stunde
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-sky-400/30">
                Feuer für die Falle nötig
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">
                Wind Sense im Bambus
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-inner shadow-slate-900/60">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Kurzinfos</h2>
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
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Was dieser Guide abdeckt
        </h2>
        <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <p className="text-base leading-relaxed text-slate-200">
            Woven with Malice kombiniert Zeitziele, ein Duell, eine Verfolgung und eine Rettung. Dieser Guide reiht alles so, dass
            du die Quest ohne Neustarts oder Server-Resets abschließen kannst.
          </p>
          <p className="text-base leading-relaxed text-slate-200">
            Wenn Woven with Malice buggt – meist wegen fehlender Zi-/Chou-Stunde, unverkohlter Ranken oder verlorener Bambus-Verfolgung – nutze
            die Fixes unten und die Screenshots, um jeden Checkpoint zu verifizieren, bevor du weitergehst.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-emerald-200">Zeitfenster</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Zi-Stunde startet die Quest, Chou-Stunde gibt das Gewand – ohne diese bleibt die Quest hängen.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-emerald-200">Fallen-Setup</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Feuer-Schaden ist Pflicht, um die Ranken zu verbrennen, damit die Silkworm Lady spawnt und die Quest weitergeht.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-emerald-200">Verfolgung & Rettung</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Nah an der Bambus-Verfolgung bleiben und die Gas-Cutscene spielen lassen – sie schließt die Quest ohne Schleifen ab.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Schnellroute (TL;DR)
          </h2>
          <Link
            href="/de/guides"
            className="text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Zurück zu Guides
          </Link>
        </div>
        <ol className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {fastRoute.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-200 ring-1 ring-emerald-400/40">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-slate-400">
          Dieser Walkthrough existiert, weil „where winds meet woven with malice quest“ genau die Suche ist, wenn die Quest softlocked. Setz dir das TL;DR als Bookmark, falls du nach einem Crash Schritte wiederholen musst.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Vollständiger Walkthrough mit Screenshots
        </h2>
        <WalkthroughGallery steps={walkthrough} />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Fest? Probier diese Fixes</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {stuckFixes.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
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
              <div className="text-sm font-semibold text-emerald-200">F. {item.q}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-200">A. {item.a}</div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
