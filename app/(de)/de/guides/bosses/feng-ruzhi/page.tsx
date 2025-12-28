import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import LiteMp4Embed from "@/components/LiteMp4Embed";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { getImageUrl } from "@/lib/image-utils";

const baseUrl = "https://wherewindsmeet.org";
const base = "/de";
const routePath = "/guides/bosses/feng-ruzhi";

const heroPath = "/guides/bosses/feng-ruzhi/hero.webp";
const mapPath = "/guides/bosses/feng-ruzhi/map.webp";
const heavenfallPath = "/guides/bosses/feng-ruzhi/heavenfall.webp";

const game8VideoBase = "/guides/bosses/feng-ruzhi/game8";
const game8PosterBase = "/guides/bosses/feng-ruzhi/game8/posters";
const rubyVideo = "/guides/bosses/feng-ruzhi/preview.mp4";

const heroOgImage = getImageUrl(heroPath);

export const metadata: Metadata = {
  title: "Feng Ruzhi Fundort & Boss-Guide – Where Winds Meet",
  description:
    "Where Winds Meet Feng Ruzhi Guide (DE): Freischalten (Heavenfall), Fundort in Roaring Sands / Verdant Hill Village, Silk Ball-Diebstahl (≈15 Sekunden zurückholen) und sichere Tipps.",
  keywords: [
    "where winds meet feng ruzhi",
    "feng ruzhi fundort",
    "feng ruzhi freischalten",
    "feng ruzhi world boss",
    "roaring sands boss",
    "verdant hill village boss",
    "heavenfall kampagne",
    "silk ball mechanic",
    "where winds meet boss guide",
  ],
  alternates: buildHreflangAlternates(routePath, { canonicalLanguage: "de" }),
  openGraph: {
    title: "Feng Ruzhi Fundort & Boss-Guide – Where Winds Meet",
    description:
      "Schalte Feng Ruzhi über Heavenfall frei, finde sie in Roaring Sands / Verdant Hill Village und verstehe die Silk-Ball-Mechanik, damit du nicht plötzlich verlierst.",
    url: `${baseUrl}${base}${routePath}`,
    siteName: "Where Winds Meet Hub",
    images: [
      { url: heroOgImage, width: 728, height: 370, alt: "Feng Ruzhi Boss-Guide Cover" },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feng Ruzhi Fundort & Boss-Guide – Where Winds Meet",
    description:
      "Feng Ruzhi: Freischalten via Heavenfall, Fundort in Roaring Sands / Verdant Hill Village und wie der Silk-Ball-Diebstahl funktioniert.",
    images: [heroOgImage],
  },
};

const quickFacts = [
  { label: "Boss-Typ", value: "World Boss (taucht auch in der Heavenfall-Kampagne auf)" },
  { label: "Region", value: "Kaifeng → Roaring Sands → Verdant Hill Village" },
  { label: "Freischalten", value: "Heavenfall-Kampagne abschließen (Update-1.1-Ära)" },
  { label: "Fail-Bedingung", value: "Wenn der Silk Ball gestohlen wird und du ihn nicht in ~15 Sekunden zurückholst" },
  { label: "Wichtig", value: "Yellow-Glint-Diebstahl/Grab + Combo-Finisher, die man parrieren kann" },
];

const faq = [
  {
    q: "Wie schalte ich den Feng-Ruzhi-Bosskampf in Where Winds Meet frei?",
    a: "Du triffst Feng Ruzhi zuerst in der Heavenfall-Kampagne in Roaring Sands (Kaifeng). Nach dem Abschluss von Heavenfall ist sie als World Boss in Verdant Hill Village verfügbar.",
  },
  {
    q: "Wo ist Feng Ruzhi (Fundort)?",
    a: "Als World Boss spawnt Feng Ruzhi in Verdant Hill Village (Roaring Sands) in der Kaifeng-Region – aber erst, nachdem Heavenfall abgeschlossen ist.",
  },
  {
    q: "Wie viel Zeit habe ich, um den Silk Ball zurückzuholen?",
    a: "Viele Guides und Spielerberichte nennen ein sehr kurzes Zeitfenster – ungefähr 15 Sekunden. Wenn du es verpasst, endet der Versuch, auch wenn du noch viel HP hast.",
  },
  {
    q: "Warum habe ich ‚instant‘ verloren, obwohl ich noch HP hatte?",
    a: "Feng Ruzhi kann deinen Silk Ball bei bestimmten Yellow-Glint-Angriffen stehlen. Wenn du ihn nicht sehr schnell zurückholst (oft als ~15 Sekunden beschrieben), wird der Versuch als Niederlage gewertet.",
  },
  {
    q: "Was mache ich, wenn der Silk Ball gestohlen wurde?",
    a: "Behandle es wie ein Zielobjekt: brich den Schlagabtausch ab, sprint zum gestohlenen Ball und burst den Wächter weg, bevor der Timer abläuft.",
  },
  {
    q: "Ist Feng Ruzhis Greifattacke unblockbar?",
    a: "Eine schnelle Yellow-Glint-Greifattacke gilt als unblockbar und ist schwer zu reagieren. Plane lieber Ausweichen/Entkommen statt Blocken ein.",
  },
];

export default function FengRuzhiBossGuideDePage() {
  const tipClips = [
    {
      title: "Silk Ball schnell zurückholen (≈15s)",
      description:
        "Wenn der Ball gestohlen wird, sofort abbrechen: sprint direkt zum Ball, lösche den Träger, dann zurück in Neutral und wieder sauber spielen.",
      video: `${game8VideoBase}/retrieve-silk-ball.mp4`,
      poster: `${game8PosterBase}/retrieve-silk-ball.jpg`,
    },
    {
      title: "Yellow-Glint-Grab: nach vorn dashen",
      description:
        "Ein häufiger Wipe ist ein sehr schneller, unblockbar wirkender Yellow-Glint-Grab. Viele Spieler finden: nach vorn dashen (unter/durch die Linie) ist konstanter als zurückzuweichen.",
      video: `${game8VideoBase}/dash-forward-grab.mp4`,
      poster: `${game8PosterBase}/dash-forward-grab.jpg`,
    },
    {
      title: "Mit Parry-Druck gewinnen (Qi/Stand brechen)",
      description:
        "Mehrere Strings enden mit einem klaren Fenster. Parrierst du die Ender, ziehst du ihre Qi-/Stand-Leiste runter und kommst schneller zu Executes.",
      video: `${game8VideoBase}/parry-pressure.mp4`,
      poster: `${game8PosterBase}/parry-pressure.jpg`,
    },
  ] as const;

  const moveClips = [
    {
      name: "Rapid Strikes",
      response: "Schnelle Nahkampf-Folge. Seitlich/through dodgen und erst nach dem Ende punishen.",
      video: `${game8VideoBase}/move-rapid-strikes.mp4`,
      poster: `${game8PosterBase}/move-rapid-strikes.jpg`,
    },
    {
      name: "Javelin Throw",
      response: "Ranged Throw. Dodge timen – oder parry, wenn du das Timing sicher hast.",
      video: `${game8VideoBase}/move-javelin-throw.mp4`,
      poster: `${game8PosterBase}/move-javelin-throw.jpg`,
    },
    {
      name: "Falcon Strike",
      response: "Schneller Gap-Close. Stamina für den ersten Dodge sparen, dann im Landing punishen.",
      video: `${game8VideoBase}/move-falcon-strike.mp4`,
      poster: `${game8PosterBase}/move-falcon-strike.jpg`,
    },
    {
      name: "Omnislash",
      response: "Multi-Hit-Sequence. Nicht zu früh panic-rollen – dodge im Rhythmus oder den klaren Ender parrieren.",
      video: `${game8VideoBase}/move-omnislash.mp4`,
      poster: `${game8PosterBase}/move-omnislash.jpg`,
    },
    {
      name: "Aerial Takedown",
      response: "Sprung-Slam mit Knockdown. Spät seitlich dodgen, dann Recovery punishen.",
      video: `${game8VideoBase}/move-aerial-takedown.mp4`,
      poster: `${game8PosterBase}/move-aerial-takedown.jpg`,
    },
    {
      name: "Wind Slashes",
      response: "Wind-Blades auf Range. Oft dodge- oder parrybar – Kamera ruhig halten.",
      video: `${game8VideoBase}/move-wind-slashes.mp4`,
      poster: `${game8PosterBase}/move-wind-slashes.jpg`,
    },
    {
      name: "Bloody Boomerang",
      response: "Waffe wird geworfen und kommt schnell zurück. Achte auf das Timing des Rückwegs (2. Hit).",
      video: `${game8VideoBase}/move-bloody-boomerang.mp4`,
      poster: `${game8PosterBase}/move-bloody-boomerang.jpg`,
    },
    {
      name: "Falcon Kicks",
      response: "Schnelle Kick-Combo. Einmal dodgen, dann Ender lesen (parrybar) oder Abstand resetten.",
      video: `${game8VideoBase}/move-falcon-kicks.mp4`,
      poster: `${game8PosterBase}/move-falcon-kicks.jpg`,
    },
  ] as const;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}${base}${routePath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}${base}` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}${base}/guides` },
        { "@type": "ListItem", position: 3, name: "Bosse", item: `${baseUrl}${base}/guides/bosses` },
        { "@type": "ListItem", position: 4, name: "Feng Ruzhi", item: `${baseUrl}${base}${routePath}` },
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
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src={heroPath}
            alt="Feng Ruzhi Boss-Guide Hero"
            fill
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            World-Boss-Guide · Fundort · Silk-Ball-Mechanik
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Feng Ruzhi: Fundort, Freischalten und sichere Tipps für den Sieg.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Feng Ruzhi ist einer der meistgesuchten neuen Bosse, weil der Kampf eine besondere Fail-Bedingung hat: Du trägst einen{" "}
            <span className="font-semibold">Silk Ball</span> – wird er gestohlen, musst du ihn schnell zurückholen, sonst ist der Run vorbei.
            Diese Seite fasst zusammen, was Google-Sucher wirklich brauchen: Spawn/Location, Unlock-Route und wie du den Silk-Ball-Druck sauber spielst.
          </p>
          <p className="text-xs text-slate-400">
            Hinweis: Exakte Mechaniken und Rewards können sich je nach Patch/Server ändern. Wenn dein Ingame-Stand anders ist, zählt das Spiel zuerst.
          </p>
        </div>
      </section>

      <section className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">Quick Facts</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
            {quickFacts.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold text-slate-100">{item.label}:</span>{" "}
                  <span className="text-slate-200">{item.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
          <CdnImage
            src={mapPath}
            alt="Feng Ruzhi Karte: Verdant Hill Village (Roaring Sands, Kaifeng)"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
            Verdant Hill Village (Roaring Sands) ist ihr World-Boss-Spawn nach Heavenfall.
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Fundort: Roaring Sands (Heavenfall) → Verdant Hill Village (World Boss).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Wenn du “where winds meet feng ruzhi location” suchst, hier die klare Route: Du begegnest Feng Ruzhi zuerst in{" "}
          <span className="font-semibold">Heavenfall</span> in <span className="font-semibold">Roaring Sands</span> (Kaifeng). Nach Abschluss
          von Heavenfall erscheint sie als wiederholbarer World Boss in <span className="font-semibold">Verdant Hill Village</span>.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Unlock-Schritte (kurz)</h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Heavenfall-Kampagne in Roaring Sands (Kaifeng) vorantreiben.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Sie im Kampagnen-Encounter besiegen (erstes Mal).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Danach nach <span className="font-semibold">Verdant Hill Village</span>, um die World-Boss-Version zu starten.
                </span>
              </li>
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
            <CdnImage
              src={heavenfallPath}
              alt="Heavenfall Kampagne in Roaring Sands (Kaifeng)"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
              Erstes Aufeinandertreffen in Heavenfall (Roaring Sands).
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
          Wenn Feng Ruzhi in Verdant Hill Village noch nicht spawnt, ist Heavenfall auf dem Charakter meist noch nicht abgeschlossen. Prüfe zuerst deinen Kampagnen-Fortschritt.
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          So besiegst du Feng Ruzhi: Silk-Ball-Druck + Punish-Fenster.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Viele “No Hit”-Clips wirken wie reine Execution – aber die häufigste Niederlage kommt vom Ziel-Element. In diesem Fight hast du praktisch{" "}
          <span className="font-semibold">zwei Zustände</span>: deine HP und die Frage, ob du den Silk Ball hältst (oder ihn zurückholst, bevor der Timer ausläuft).
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-50">Silk-Ball-Mechanik (einfach erklärt)</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Bestimmte <span className="font-semibold">Yellow-Glint</span>-Angriffe können deinen Silk Ball stehlen.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Danach hast du nur ein kurzes Zeitfenster (oft als ca. <span className="font-semibold">15 Sekunden</span> beschrieben), um ihn zurückzuholen – sonst gilt es als Niederlage.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Simpelster Plan: zum Ball sprinten, den Wächter bursten, Reset in Neutral.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-50">Größter Fehler</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Nicht weiter “duellieren”, wenn der Ball weg ist. Selbst wenn du DPS-mäßig vorne liegst, verlierst du trotzdem, wenn der Timer ausläuft.
              Denk an Capture-the-Flag: disengage, Objekt sichern, dann zurück in den Fight.
            </p>
            <p className="text-xs text-slate-400">
              Übe das Rückholen des Balls – das bringt mehr als Damage-Optimierung, solange du noch lernst.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {tipClips.map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">{tip.title}</h3>
              <LiteMp4Embed
                src={tip.video}
                poster={tip.poster}
                title={tip.title}
                analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", lang: "de", section: "tips" } }}
              />
              <p className="text-sm text-slate-200 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
            <h3 className="text-sm font-semibold text-slate-50">Empfohlener Companion: Ruby (Revive-Safety)</h3>
            <LiteMp4Embed
              src={rubyVideo}
              poster={`${game8PosterBase}/ruby.jpg`}
              title="Ruby Companion Clip"
              analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", lang: "de", section: "companion" } }}
            />
            <p className="text-sm text-slate-200 leading-relaxed">
              Wenn du Legend/Abyss lernst, kann ein Revive-Companion wie <span className="font-semibold">Ruby</span> einen Fehler in eine Rettung verwandeln statt in einen kompletten Reset.
              Wenn Companions in deinem Patch komisch funktionieren, sieh das als Komfort-Tipp – nicht als harte Regel.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Extra-Habits für sichere Clears</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Stamina für <span className="font-semibold">Repositioning</span> sparen. Der Sprint für den Ball ist wichtiger als ein extra greedy Combo-Ende.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Im Co-op: eine Person übernimmt “Ball-Duty”, damit es kein Zögern gibt, wenn der Diebstahl passiert.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Wenn Parry-Timing nicht sitzt: dodge zuerst, punish nur die klarsten Fenster.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Wenn du festhängst: ein Komfort-Build (Sustain + i-frames) hilft beim Lernen. Schau in unsere{" "}
                  <Link href={`${base}/guides/builds`} className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    Build-Guides
                  </Link>
                  .
                </span>
              </li>
            </ul>
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <h4 className="text-sm font-semibold text-slate-50">Waffen-Ansatz (kein Math, nur Komfort)</h4>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                Feng Ruzhi bestraft Tunnelblick. Nimm ein Weapon-Pairing, das dich ruhig hält: eins für Mobility/Resets und eins für Sustain/Utility, damit
                Ball-Recoveries nicht chaotisch werden. Zur Orientierung:{" "}
                <Link href={`${base}/guides/weapons`} className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                  Waffen-Übersicht
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Moveset-Clips (so sehen die Angriffe aus).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Du musst nicht alles auswendig lernen. Erkenn den <span className="font-semibold">Tell</span>, wähle eine Antwort (dodge oder parry) und
          reset zurück in Neutral. Die Clips helfen, Namen mit Animationen zu verbinden.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {moveClips.map((move) => (
            <div key={move.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">{move.name}</h3>
              <LiteMp4Embed
                src={move.video}
                poster={move.poster}
                title={move.name}
                analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", lang: "de", section: "moveset" } }}
              />
              <p className="text-sm text-slate-200 leading-relaxed">{move.response}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Wenn Timing/Namen in deinem Patch anders sind, ist das meist Region/Server/Patch-abhängig. Verlass dich auf Animationen und Glint-Farben als echte Cues.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Rewards: Warum Feng Ruzhi gefarmt wird.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Feng Ruzhi hängt an Heavenfall-Progression und hat als World Boss eigene Drops. Rewards können je nach Patch/Difficulty variieren, aber typisch
          sind Materialien (z. B. <span className="font-semibold">Crimson Silk</span>) plus Currency/XP.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Heavenfall-Abschluss (Kampagne)</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-200">
              <li>Medicinal Tales</li>
              <li>Oscillating Jade × 5</li>
              <li>Echo Jade × 60</li>
              <li>Kaifeng Exploration × 110</li>
              <li>Enlightenment Point × 100</li>
              <li>Character EXP × 50.000</li>
              <li>Coin × 50.000</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">World-Boss-Drops (wiederholbar)</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-200">
              <li>Custom Note Chest × 5</li>
              <li>Medical Tales × 3</li>
              <li>Crimson Silk</li>
              <li>Echo Jade × 20</li>
              <li>Kaifeng Exploration × 50</li>
              <li>Character EXP × 8.000</li>
              <li>Coin × 8.000</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Wenn deine Reward-Liste abweicht, kann das an Region/Server-Balancing oder an einem neueren Patch liegen.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Video: Feng Ruzhi (Legend/Abyss) – No-Hit-Style-Runs.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Ein sauberer Run zeigt am schnellsten den Unterschied zwischen “sicherer Neutral” und “Punish-Fenstern”. Achte darauf, wie nach Dodges Abstand
          resettet wird – und wie schnell bei Ball-Mechanik die Priorität wechselt.
        </p>
        <LiteYouTubeEmbed
          videoId="ImGcZ7vtI_g"
          title="Feng Ruzhi Guide (Legend/Abyss) – Where Winds Meet"
          poster={heroPath}
          analytics={{ eventName: "play_video", params: { page: "feng-ruzhi", lang: "de" } }}
        />
        <p className="text-xs text-slate-400">
          Embed nutzt YouTube Privacy-Mode (<span className="font-semibold">youtube-nocookie.com</span>). Verfügbarkeit kann sich ändern, wenn Creator Videos entfernen oder region-locken.
        </p>
      </section>

      <section id="faq" className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Verwandte Seiten (im Hub bleiben)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href={`${base}/guides/bosses`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Bossliste</p>
            <p className="mt-1 text-xs text-slate-400">Alle Bosse und kurze Overviews.</p>
          </Link>
          <Link
            href={`${base}/guides/patch-notes`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Patch Notes</p>
            <p className="mt-1 text-xs text-slate-400">Mechaniken prüfen, wenn sich etwas geändert hat.</p>
          </Link>
          <Link
            href={`${base}/guides/weapons`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Waffen</p>
            <p className="mt-1 text-xs text-slate-400">Komfort-Waffen für Stress-Fights.</p>
          </Link>
          <Link
            href={`${base}/guides/builds`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Builds</p>
            <p className="mt-1 text-xs text-slate-400">Sustain-first, solange du Pattern lernst.</p>
          </Link>
          <Link
            href={`${base}/news`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">News</p>
            <p className="mt-1 text-xs text-slate-400">Updates, neue Bosse und Events.</p>
          </Link>
          <Link
            href={`${base}/videos`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Videos</p>
            <p className="mt-1 text-xs text-slate-400">Kuratiertes Video-Archiv im Hub.</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
