import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const heroImagePath = "/guides/mist-shrouded-prison/youtube-cover.jpg";
const heroImage = `${cdnBase}${heroImagePath}`;
const cdn = (path: string) => `${cdnBase}${path}`;

const walkthrough = [
  {
    title: "Eingang zur Mist-Shrouded Prison finden",
    detail:
      "Schließe „The Ephemeral Blight“ ab, liefere alle Mistveil Forest Cures bei Zhai Xu ab, um das Antidot zu erhalten, nimm den Aufzug nahe Central Mistveil Forest und verbrenne die erste blaue Knospe mit einem Feuerpfeil, um die Gruft zu öffnen.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-tomb-location-in-wwm-where-winds-meet.jpg"), alt: "Eingang der Mist-Shrouded Prison Gruft" },
  },
  {
    title: "Loop 1 Start: geäderte Tür rechts",
    detail: "Vom Eingang aus ist rechts ein Raum mit Adern einer blauen Knospe versiegelt – jetzt ignorieren. Links die Leiter hoch; diese Gruft dreht drei Loops.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/loop-1-mist-shrouded-prison-chest-1-location-in-wwm-where-winds-meet.jpg"), alt: "Loop-1-Flur Übersicht" },
  },
  {
    title: "Truhe 1 (roter Raum mit der roten Dame)",
    detail: "Geh in den rot beleuchteten Raum; dort steht in Loop 1 die rote Dame. Truhe 1 liegt neben ihr.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-1-location-in-wwm-where-winds-meet.jpg"), alt: "Fundort Truhe 1 Mist-Shrouded Prison" },
  },
  {
    title: "Frostpilz-Korridor und Knospe",
    detail: "Verlasse den Raum, geh durch den Frostpilz-Giftkorridor und verbrenne die blaue Knospe dahinter mit einem Feuerpfeil, um weiterzukommen.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/loop-1-destroy-bud-with-fire-in-wwm-where-winds-meet.jpg"), alt: "Knospe mit Feuer verbrennen" },
  },
  {
    title: "Truhe 2 (Deckenstachel-Trigger)",
    detail: "Weiter zu Truhe 2; beim Öffnen fallen Stacheln von oben. Öffnen und kurz zurücktreten.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-2-location-in-wwm-where-winds-meet.jpg"), alt: "Fundort Truhe 2" },
  },
  {
    title: "Truhe 3 (linker Gang über Stacheln)",
    detail: "Auf die anhebenden Stacheln springen, dann links in den kleinen Gang abbiegen, um Truhe 3 zu holen.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-3-location-in-wwm-where-winds-meet.jpg"), alt: "Fundort Truhe 3" },
  },
  {
    title: "Über die Stacheln auf die andere Seite",
    detail: "Nutze die Stacheln erneut, um auf die Gegenseite zu gelangen, und klettere die Leiter zum oberen Pfad.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest.png"),
      alt: "Stachelraum Übersicht",
    },
  },
  {
    title: "Druckplatte aktivieren",
    detail: "Auf die Platte treten, damit die horizontalen Stacheln losfahren; zurück Richtung Eingang und ihnen folgen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/press-the-pressure-plate-to-activate-spikes-in-wwm-where-winds-meet.jpg"),
      alt: "Druckplatte für Stacheln",
    },
  },
  {
    title: "Truhe 4 (hinter den fahrenden Stacheln)",
    detail: "Wenn die Stacheln nach vorn rollen, direkt dahinter entlanglaufen und Truhe 4 einsammeln.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-4-location-in-wwm-where-winds-meet.jpg"),
      alt: "Fundort Truhe 4",
    },
  },
  {
    title: "Hinabfallen für Loop 2",
    detail: "Durch das Tor gehen und in den ersten Raum hinunterfallen. Die rote Dame neben der Leiter signalisiert Loop 2.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/how-to-enter-loop-2-in-wwm-where-winds-meet.jpg"),
      alt: "Einstieg in Loop 2",
    },
  },
  {
    title: "Stachelraum in Loop 2 wiederholen",
    detail: "Korridor überqueren, Stachelraum erneut lösen, Leiter hoch, Platte drücken, weiter – so schiebst du das Layout in den letzten Loop.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/step-11.png"),
      alt: "Loop-2-Reset im Stachelraum",
    },
  },
  {
    title: "Loop 3 betreten",
    detail: "Nach der Wiederholung befindest du dich in Loop 3 – der letzten Rotation.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/enter-loop-3-in-wwm-where-winds-meet.jpg"),
      alt: "Eingang zu Loop 3",
    },
  },
  {
    title: "Rote Dame im Blau-Blumen-Korridor",
    detail: "Leiter hoch, rechts abbiegen: Im blau besäumten Gang steht nun die rote Dame – Bestätigung für Loop 3.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/loop-3-in-wwm-where-winds-meet.jpg"),
      alt: "Loop-3-Korridor mit blauen Blumen",
    },
  },
  {
    title: "Truhe 5 (Giftkorridor)",
    detail: "Durch das Gift durchlaufen und Truhe 5 im Gang öffnen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-5-location-in-wwm-where-winds-meet.jpg"),
      alt: "Fundort Truhe 5",
    },
  },
  {
    title: "Zweite blaue Knospe zerstören",
    detail: "Korridor verlassen, nächste blaue Knospe verbrennen und zum Raum mit dem Zettel weitergehen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/destroy-blue-bud-2-in-wwm-where-winds-meet.jpg"),
      alt: "Zweite Knospe verbrennen",
    },
  },
  {
    title: "Auf die fahrenden Stacheln fallen",
    detail: "Im Zettelraum nach unten schauen, warten bis die horizontalen Stacheln aus Loop 2 ausrichten, dann auf sie hinabspringen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/jump-onto-the-moving-spikes-in-wwm-where-winds-meet.jpg"),
      alt: "Sprung auf die beweglichen Stacheln",
    },
  },
  {
    title: "Zur Ecke fahren und Hinterhalt räumen",
    detail: "Wenn die Stacheln sich der Kante nähern, abspringen und den Gegner im Hinterhalt besiegen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/step-17.png"),
      alt: "Hinterhalt nahe den Stacheln",
    },
  },
  {
    title: "Truhe 6 (Loop-3-Belohnung)",
    detail: "Truhe 6 in diesem Abschnitt öffnen, sobald der Hinterhalt geklärt ist.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-6-location-in-wwm-where-winds-meet.jpg"),
      alt: "Fundort Truhe 6",
    },
  },
  {
    title: "Zu den früheren Hallen absteigen",
    detail: "Weitergehen und durch das lange Loch fallen, um nahe dem Ort von Truhe 3 aus Loop 1 zu landen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/drop-from-chest-6-location-to-return-to-loop-1-in-wwm-where-winds-meet.jpg"),
      alt: "Abstieg zurück Richtung Loop 1",
    },
  },
  {
    title: "Über den Stachelpfad zurück",
    detail: "Zum Stachelraum, die beweglichen Stacheln hinauf, links in den kleinen Gang springen, dann durch die zwei Löcher in den breiten Korridor fallen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/frop-down-from-chest-in-loop-2-in-wwm-where-winds-meet.jpg"),
      alt: "Rückweg über den Stachelraum",
    },
  },
  {
    title: "Knospe am Korridorende entfernen",
    detail: "Am Ende die blaue Knospe mit Feuerpfeil verbrennen und durch das Tor zurück in den Startraum gehen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/remove-the-bud-to-open-the-final-door-in-wwm-where-winds-meet.jpg"),
      alt: "Letzte Knospe verbrennen",
    },
  },
  {
    title: "Letzte Schatztruhe",
    detail: "Den ehemals geäderten Raum aus Loop 1 betreten und die finale Truhe hinten öffnen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/final-treasure-wide.jpg"),
      alt: "Letzte Schatztruhe in der Gruft",
    },
  },
  {
    title: "Rest in Peace",
    detail: "Am Marker Respekt zollen, um die Mist-Shrouded Prison abzuschließen.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/pray-to-red-lady-in-wwm-where-winds-meet.jpg"),
      alt: "Interaktion 'Rest in Peace'",
    },
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet: Mist-Shrouded Prison – 6 Truhen & Endschatz (DE)",
  description:
    "Mist-Shrouded Prison Guide: nach Ephemeral Blight freischalten, Loops 1–3 über die rote Dame lesen und alle sechs Truhen plus Endschatz holen.",
  alternates: buildHreflangAlternates("/guides/mist-shrouded-prison", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet: Mist-Shrouded Prison – 6 Truhen & Endschatz",
    description:
      "Mist-Shrouded Prison Guide: nach Ephemeral Blight freischalten, Loops 1–3 über die rote Dame lesen und alle sechs Truhen plus Endschatz holen.",
    url: `${baseUrl}/de/guides/mist-shrouded-prison`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: heroImage,
        width: 1280,
        height: 720,
        alt: "Mist-Shrouded Prison Schatzroute in Where Winds Meet",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet: Mist-Shrouded Prison – 6 Truhen & Endschatz",
    description:
      "Guide zur Mist-Shrouded Prison: nach Ephemeral Blight betreten, Loops lesen, alle 6 Truhen + finale Truhe holen.",
    images: [
      {
        url: heroImage,
        alt: "Mist-Shrouded Prison Schatzroute in Where Winds Meet",
      },
    ],
  },
};

const quickFacts = [
  { label: "Ort", value: "Mistveil Forest Gruft (nach Antidot von Zhai Xu)", icon: "🧭" },
  { label: "Loop-Marker", value: "Rote Dame: roter Raum → neben Leiter → Blau-Blumen-Korridor", icon: "👁️" },
  { label: "Truhen", value: "6 Loop-Truhen + Endschatz hinter der geäderten Tür", icon: "🎁" },
  { label: "Gefahren", value: "Frostpilz-Gift, bewegliche Stacheln, blaue Knospen", icon: "⚠️" },
  { label: "Vorbereitung", value: "The Ephemeral Blight abschließen, Cures sammeln, Aufzug am Central Mistveil Forest nehmen", icon: "🧪" },
];

const tlDr = [
  "The Ephemeral Blight abschließen: alle Mistveil Forest Cures einsammeln, bei Zhai Xu abgeben für das Antidot, Nebel lichten, Aufzug bei Central Mistveil Forest nehmen und die erste blaue Knospe verbrennen, um die Mist-Shrouded Prison zu betreten.",
  "Loop 1: geäderte Tür ignorieren, Leiter links hoch, Truhe 1 im roten Raum bei der roten Dame. Durch Giftkorridor, Knospe verbrennen; Truhe 2 löst Deckenstacheln aus, dann die beweglichen Stacheln reiten, um Truhe 3 zu holen.",
  "Oben die Platte drücken, den horizontalen Stacheln folgen und Truhe 4 nehmen, dann durchs Tor fallen – rote Dame an der Leiter markiert Loop 2. Stachelraum/Platte wiederholen, um die Mist-Shrouded Prison in Loop 3 zu schieben.",
  "Loop 3: rechts in den Blau-Blumen-Gang (rote Dame), Giftkorridor zu Truhe 5, nächste Knospe verbrennen, von der Zettelkammer auf die beweglichen Stacheln springen, Hinterhalt klären für Truhe 6, dann den Drop-Pfad nutzen, letzte Knospe verbrennen, Endschatz öffnen und „Rest in Peace“ drücken.",
];

const steps = [
  {
    title: "Dungeon freischalten",
    detail:
      "The Ephemeral Blight beenden, alle Mistveil Forest Cures bei Zhai Xu abgeben, Antidot nutzen, Aufzug bei Central Mistveil Forest nehmen und die erste Knospe verbrennen, um die Mist-Shrouded Prison zu betreten.",
  },
  {
    title: "Loops lesen",
    detail:
      "Layout wiederholt sich dreimal. Die rote Dame zeigt den Loop: roter Raum (Loop 1), neben Leiter nach dem Drop (Loop 2), Blau-Blumen-Korridor rechts (Loop 3). Geäderte Tür bis zum Ende geschlossen lassen.",
  },
  {
    title: "Loop 1: Truhen 1–4",
    detail:
      "Leiter links hoch; Truhe 1 bei der roten Dame. Durch Frostpilz-Gift, Knospe verbrennen. Truhe 2 triggert Deckenstacheln; bewegliche Stacheln reiten zu Truhe 3. Platte über den Stacheln drücken, den horizontalen Stacheln folgen zu Truhe 4.",
  },
  {
    title: "Loop-2-Übergang",
    detail:
      "Durch das Tor und runterfallen; rote Dame an der Leiter bestätigt Loop 2. Korridor kreuzen, Stachelraum wiederholen, Platte drücken, weiterlaufen, um Loop 3 zu erzwingen.",
  },
  {
    title: "Loop 3: Truhen 5–6",
    detail:
      "Nach der Leiter rechts in den Blau-Blumen-Gang. Gift ertragen und Truhe 5 öffnen, nächste Knospe verbrennen, auf die beweglichen Stacheln fallen, Hinterhalt räumen, Truhe 6 öffnen.",
  },
  {
    title: "Endschatz & Abschluss",
    detail:
      "Von Truhe 6 zurück zu den frühen Hallen fallen, Stachelpfad nutzen, letzte Knospe verbrennen, geäderten Raum aus Loop 1 öffnen, Endschatz looten, „Rest in Peace“ drücken.",
  },
];

const faq = [
  {
    q: "Wie starte ich Mist-Shrouded Prison?",
    a: "The Ephemeral Blight abschließen, alle Mistveil Forest Cures bei Zhai Xu abgeben, Antidot nutzen, Aufzug bei Central Mistveil Forest nehmen, erste Knospe verbrennen.",
  },
  {
    q: "Woran erkenne ich den aktuellen Loop?",
    a: "Am Standort der roten Dame: roter Raum (Loop 1), neben Leiter nach dem Drop (Loop 2), Blau-Blumen-Korridor rechts (Loop 3).",
  },
  {
    q: "Wo sind alle Truhen?",
    a: "Truhe 1 im roten Raum; Truhe 2 nach Giftkorridor mit Deckenstacheln; Truhe 3 links über bewegliche Stacheln; Truhe 4 hinter den horizontalen Stacheln; Truhe 5 im Giftgang von Loop 3; Truhe 6 nach dem Stachel-Drop aus dem Zettelraum; Endschatz hinter der geäderten Tür aus Loop 1.",
  },
  {
    q: "Tipps für Gift & Fallen?",
    a: "Im Gift weiterlaufen, Heilung erst nach den Truhen. Bewegliche Stacheln timen: hochfahren lassen, abspringen Richtung linker Gang oder Hinterhalt-Ecke.",
  },
  {
    q: "Was beendet die Gruft?",
    a: "Letzte Knospe verbrennen, geäderten Raum öffnen, Endschatz looten, „Rest in Peace“ drücken.",
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
      name: "Mist-Shrouded Prison",
      item: `${baseUrl}/de/guides/mist-shrouded-prison`,
    },
  ],
};

const related = [
  { href: "/de/guides/unholy-prophecy", title: "An Unholy Prophecy (Fackeln, Meridian Touch)" },
  { href: "/de/guides/woven-with-malice", title: "Woven with Malice (Zeitfenster, Fallen)" },
  { href: "/de/guides/one-leaf-one-life", title: "One Leaf One Life (Lost Chapter Walkthrough)" },
  { href: "/de/news#roadmap", title: "Roadmap / nächste Updates" },
];

export default function MistShroudedPrisonDePage() {
  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={heroImage}
            alt="Mist-Shrouded Prison Routen-Vorschau"
            fill
            className="object-cover opacity-45"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>
        <div className="relative space-y-4 z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Aktualisiert Jan 2025 · TL;DR unten
          </div>
          <h1 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Mist-Shrouded Prison Guide – alle Truhen (inkl. Endschatz)
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Walkthrough für die Mist-Shrouded Prison in Where Winds Meet: nach Zhai Xus Antidot freischalten, rote Dame als Loop-Indikator nutzen,
            blaue Knospen, Gift- und Stachelfallen meistern, alle sechs Truhen plus Endschatz greifen. Enthält bewusst „Where Winds Meet
            Mist-Shrouded Prison“-Formulierungen, damit Suchende die Route sofort finden.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Kurzfassung: dreifacher Loop-Dungeon mit sechs Kerntruhen und einer finalen Truhe; folge der roten Dame, verbrenne jede blaue Knospe,
            löse die Stachelräume der Reihe nach – dann ist die Gruft sauber abgeschlossen.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/50">Alle 6 Truhen + Endschatz</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-slate-400/40">Loop-Marker</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/40">Stacheln & blaue Knospen</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">TL;DR Route</h2>
        </div>
        <ul className="space-y-2 text-sm text-slate-200">
          {tlDr.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">Kurzinfos</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-inner shadow-black/20"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{fact.icon}</span>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-emerald-700/40 bg-emerald-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <h3 className="text-2xl font-bold text-emerald-100">Routen-Überblick</h3>
          </div>
          <ol className="space-y-2 text-sm text-emerald-50/90 list-decimal list-inside">
            {steps.map((step) => (
              <li key={step.title} className="rounded-xl border border-emerald-700/40 bg-emerald-900/20 px-3 py-2 leading-relaxed">
                <p className="font-semibold text-emerald-50">{step.title}</p>
                <p className="text-emerald-100/90 text-xs">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📜</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Hinweis-Zettel (Tisch in Loop 3)</h2>
        </div>
        <p className="text-sm text-slate-300 mb-3">
          Diesen Zettel siehst du nach der zweiten Knospe in Loop 3, bevor du auf die beweglichen Stacheln springst. Lesen, dann die Schritte in
          Reihenfolge halten, damit der Mist-Shrouded-Prison-Fluss konsistent bleibt.
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-inner shadow-black/25">
          <Image
            src={cdn("/guides/mist-shrouded-prison/gr/read-note-in-prison-in-wwm-where-winds-meet.jpg")}
            alt="Hinweiszettel in der Mist-Shrouded Prison"
            width={1600}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">🖼️</span>
          <h2 className="text-2xl font-bold text-slate-50">Illustrierter Walkthrough</h2>
        </div>
        <ol className="space-y-5">
          {walkthrough.map((step, index) => (
            <li
              key={step.title}
              className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-black/25"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Schritt {index + 1}</p>
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">{step.detail}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  loading="lazy"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
          Wenn du die Orientierung verlierst: Die rote Dame markiert jeden Loop (roter Raum → Leiter → Blau-Blumen-Korridor). Nach Truhe 6 nahe Truhe 3
          landen, Stacheltraverse nutzen, letzte Knospe verbrennen, geäderten Raum öffnen, Endschatz holen, „Rest in Peace“ drücken.
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">❓</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔗</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Verwandte Guides</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎥</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Video-Guide (YouTube)</h2>
        </div>
        <p className="text-sm text-slate-300">
          Wenn du die Route lieber sehen willst: Dieses Video zeigt die komplette Mist-Shrouded-Prison-Linie mit allen Loops, Knospen und Truhen.
        </p>
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-inner shadow-black/25"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/dHDy9nzQsd4"
            title="Mist-Shrouded Prison Video-Walkthrough"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </article>
  );
}
