import type { Metadata } from "next";
import Link from "next/link";
import MistveilCityAuthorizedMedia from "@/components/guides/MistveilCityAuthorizedMedia";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const allThingsSourceUrl =
  "https://allthings.how/where-winds-meet-mistveil-forest-cures-and-mistveil-city-unlock/";
const walkthroughSourceUrl =
  "https://www.youtube.com/results?search_query=Where+Winds+Meet+Ephemeral+Blight+100%25+Guides";
const mistveilHero = `${baseUrl}/guides/mistveil-city/allthings/Screenshot-2026-01-10-100403-1.png`;

export const metadata: Metadata = {
  title: "Mistveil City: Freischaltdatum & Sperre | Where Winds Meet",
  description:
    "Warum Mistveil City in Where Winds Meet gesperrt ist, welche Daten (22. vs 26. Jan 2026) genannt werden, und Ephemeral Blight & Cures als Vorbereitung.",
  alternates: buildHreflangAlternates("/guides/mistveil-city", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Mistveil City: Freischaltdatum & Sperre | Where Winds Meet",
    description:
      "Mistveil City ist für viele Spieler aktuell zeitlich gesperrt. Erfahre, was die Sperre bedeutet, wann es öffnen könnte und wie du Ephemeral Blight in Mistveil Forest abschließt.",
    url: `${baseUrl}/de/guides/mistveil-city`,
    siteName: "Where Winds Meet Hub",
    images: [{ url: mistveilHero, width: 1206, height: 678, alt: "Historische Aufnahme der Mistveil-City-Sperre" }],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mistveil City: Freischaltdatum & Sperre | Where Winds Meet",
    description:
      "Warum Mistveil City gesperrt ist, welche Daten genannt werden (22. vs 26. Jan 2026) und was du in Mistveil Forest in der Zwischenzeit erledigen solltest.",
    images: [mistveilHero],
  },
};

const lastUpdated = "15. Januar 2026";

const tlDr = [
  "Mistveil City ist für viele Spieler aktuell blockiert: Das Spiel zeigt eine „not yet open / come back later“-Meldung und teleportiert dich nach einem kurzen Countdown heraus.",
  "Community-Berichte deuten auf ein Zeitgate hin (keine versteckte Freischaltung). Genannt werden zwei Daten: 22. Jan 2026 und 26. Jan 2026 — folge dem Datum, das dein Client anzeigt.",
  "Ephemeral Blight abschließen und Mistveil Forest Cures sammeln schaltet Mistveil Forest frei, hebt die Mistveil-City-Sperre aber ggf. erst zum Termin auf.",
  "Beste Nutzung der Zeit: Ephemeral Blight abschließen, alle drei Cures holen, Teleports/Bosse in Mistveil Forest freischalten und startklar sein, sobald Mistveil City öffnet.",
];

const faq = [
  {
    q: "Warum ist Mistveil City in Where Winds Meet gesperrt?",
    a: "Spieler berichten von einer harten Grenze bei Mistveil City, die eine „This area is not yet open. Please come back later“-Meldung (mit kurzem Countdown) auslöst und dich hinaus teleportiert. Das wirkt wie ein geplantes Zeitgate und nicht wie ein Rätsel oder ein fehlender Quest-Gegenstand.",
  },
  {
    q: "Muss ich Nine Mortal Ways beitreten, um Mistveil City zu betreten?",
    a: "Laut Community-Diskussion eher nicht. Die Sperre scheint unabhängig von Sekte/Progress zu sein — viele vermuten, dass Mistveil City per Kalender freigeschaltet wird, nicht über eine Fraktions-Anforderung.",
  },
  {
    q: "Wann öffnet Mistveil City?",
    a: "Stand 15. Januar 2026 werden zwei unterschiedliche Daten genannt: 22. Januar 2026 und 26. Januar 2026. Am sichersten ist, dem Datum zu folgen, das dein eigenes Spiel anzeigt, und offizielle Patchnotes/Ankündigungen zu prüfen.",
  },
  {
    q: "Schaltet Ephemeral Blight Mistveil City frei?",
    a: "Ephemeral Blight entfernt den Dawn-to-Dusk-Nebel über Mistveil Forest dauerhaft und schaltet dort mehr Erkundung frei. Berichte deuten aber darauf hin, dass Mistveil City trotzdem bis zum geplanten Öffnungsdatum gesperrt bleiben kann.",
  },
  {
    q: "Was sind die Mistveil Forest Cures (und warum sind sie wichtig)?",
    a: "Das sind drei Quest-Dokumente, mit denen du Zhai Xu hilfst, das Antidot für Mistveil Forest herzustellen: Wishing Cove (aus Zhai Xus Haus), Hollow Abode und Aureate Pavilion. Das Abgeben dieser Cures ist die Kernvoraussetzung, um den Regionsnebel via Ephemeral Blight zu entfernen.",
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
    { "@type": "ListItem", position: 1, name: "Startseite", item: `${baseUrl}/de` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
    { "@type": "ListItem", position: 3, name: "Mistveil City", item: `${baseUrl}/de/guides/mistveil-city` },
  ],
};

type WalkthroughStep = {
  title: string;
  detail: string;
};

type WalkthroughSection = {
  title: string;
  steps: WalkthroughStep[];
};

const walkthroughSections: WalkthroughSection[] = [
  {
    title: "Ephemeral Blight in Mistveil Forest starten",
    steps: [
      {
        title: "In den Nebel gehen und gerettet werden",
        detail:
          "Geh in den Mistveil Forest (östlich von Kaifeng City), bis dich der Dawn-to-Dusk-Nebel überwältigt. Eine Cutscene startet und Zhai Xu rettet dich nach Wishing Cove.",
      },
      {
        title: "In Wishing Cove aufwachen und mit Zhai Xu reden",
        detail:
          "Heb den Jadeanhänger neben dem Bett auf, dann sprich mit Zhai Xu über den Anhänger und den giftigen Nebel, um die Cure-Kette zu starten.",
      },
      {
        title: "Wind Sense nutzen, dann mit Meridian Touch ablenken",
        detail:
          "Im Haus nutzt du Wind Sense, um die zwei Bücher auf dem Tisch zu finden — aber Zhai Xu warnt dich, dich nicht einzumischen. Stell dich ans Fenster über dem Tisch und nutze Meridian Touch am Windspiel, um ihn nach draußen zu locken.",
      },
      {
        title: "Bücher lesen und das 3-Cure-Ziel freischalten",
        detail:
          "Während Zhai Xu draußen ist, lies beide Bücher (Wishing-Cove-Cure + Thousand-Wish Amendment). Öffne danach Beutel → Quest-Gegenstände und lies die Amendment: Sie listet die drei Mistveil-Forest-Cures, die du brauchst (Wishing Cove, Hollow Abode, Aureate Pavilion).",
      },
    ],
  },
  {
    title: "Hollow Abode Mistveil-Forest-Cure finden",
    steps: [
      {
        title: "Zur Soulshade Umbrella – Post Station (Skill-Theft-Dungeon)",
        detail:
          "Reise südwestlich von Mistveil Forest zur Soulshade Umbrella – Post Station. Dein Ziel ist nur das Cure-Dokument — du musst nicht den gesamten Dungeon abschließen.",
      },
      {
        title: "Schleichweg: Ranken → Fenster → Treppe",
        detail:
          "Nutze Wind Sense (V), um Sichtkegel zu sehen, klettere die Ranken in den zweiten Stock, geh durchs Fenster hinein und finde die Treppe nach unten.",
      },
      {
        title: "Touch of Death am Wächter, dann das Cure looten",
        detail:
          "Warte, bis die Patrouille wegschaut, schalte ihn leise mit Touch of Death aus, finde den Nebenraum mit der grünen Kerze und nimm den Hollow-Abode-Cure vom Tisch.",
      },
    ],
  },
  {
    title: "Aureate Pavilion Mistveil-Forest-Cure finden",
    steps: [
      {
        title: "Zum Außenposten Aureate Pavilion (nördlich des Nebels)",
        detail:
          "Geh am Rand von Mistveil Forest entlang zum Außenposten Aureate Pavilion. Wenn du einen nahegelegenen Teleporter freigeschaltet hast, nutze ihn, um den Weg abzukürzen.",
      },
      {
        title: "Cure aus der zentralen Hütte holen (bei der mumifizierten Leiche)",
        detail:
          "Dein Ziel ist die Haupthütte in der Mitte des Außenpostens. Kämpf dich durch oder schleiche mit Bewegungsskills hinein; drinnen liegt das Cure auf einem Tisch neben einer mumifizierten Leiche.",
      },
    ],
  },
  {
    title: "Zu Zhai Xu zurückkehren und das Antidot vorbereiten",
    steps: [
      {
        title: "Alle drei Cures in Wishing Cove abgeben",
        detail: "Kehre zu Zhai Xu zurück und gib die drei Cure-Notizen ab, damit er mit dem Antidot beginnen kann.",
      },
      {
        title: "Zeit um zwei volle In-Game-Tage vorspulen",
        detail:
          "Verlasse die Bucht und lass zwei In-Game-Tage vergehen. Kehre danach zurück nach Wishing Cove — Zhai Xu sollte verschwunden sein und eine Notiz schickt dich ans Nordufer von Mistveil Forest.",
      },
      {
        title: "Zhai Xu am Nordufer treffen und den Feuern folgen",
        detail:
          "Folge dem Questmarker an den Nordrand, sprich mit Zhai Xu, um die Medizin zu erhalten, und geh dann weiter, während du nahe bei den Feuern entlang der Route bleibst (sie wirken als temporäre sichere Zonen).",
      },
    ],
  },
  {
    title: "Tiefer hinein und Dawn-to-Dusk-Blüten zerstören",
    steps: [
      {
        title: "Wachen beseitigen und den blütenblockierten Pfad erreichen",
        detail:
          "Geh tiefer in den Wald; du triffst auf weitere Aureate-Pavilion-Wachen. Schalte sie aus, um das Gebiet zu sichern, und erreiche einen Pfad, der von Dawn-to-Dusk-Blüten blockiert ist.",
      },
      {
        title: "Blüten verbrennen, dann den Baum mit den hängenden Leichen durchsuchen",
        detail:
          "Rüste Feuerpfeile aus und verbrenne die Giftblüten, um den Weg zu öffnen. Geh weiter, bis du den riesigen Baum mit hängenden Leichen findest; zerstöre dort die drei Blüten, besiege die Sleeping Puppets, die aufwachen, und nimm den halben Jadeanhänger auf, der nahe beim Baum droppt.",
      },
    ],
  },
  {
    title: "Sun Buqis Deduktionen lösen und Ephemeral Blight beenden",
    steps: [
      {
        title: "Dem Schatten der Silver Needle in den Untergrund folgen",
        detail:
          "Nachdem du den Anhänger aufgenommen hast, erscheint eine Schattenfigur und zieht sich zurück. Folge dem Questpfad in ein unterirdisches Versteck, das in einem Raum mit einer mumifizierten Leiche endet.",
      },
      {
        title: "Sun Buqis Notizen lesen und Deduktionen starten",
        detail:
          "Durchsuche den Raum, lies Sun Buqi’s Notes und die Dokumente in der Nähe, öffne dann das Deduktions-Interface und kombiniere die Hinweise zu einer stimmigen Geschichte.",
      },
      {
        title: "Dem Sleeping Puppet folgen und die letzten Blüten zerstören",
        detail:
          "Nachdem du die Deduktionen bestätigt hast, interagiere mit dem ungewöhnlichen Sleeping Puppet bei der Mumie. Folge ihm durch die Höhlen zum Nebel-Ursprung und zerstöre die drei großen Blüten, die den Fog aufrechterhalten. Kehre danach zu Zhai Xu zurück, um Ephemeral Blight abzuschließen und Mistveil Forest dauerhaft zu klären.",
      },
    ],
  },
];

export default function MistveilCityPage() {
  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/35 via-slate-950 to-slate-950" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Aktualisiert {lastUpdated} · Mistveil City Freischaltung
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Mistveil City freischalten (Where Winds Meet).
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Wenn du „mistveil city where winds meet“ gesucht hast, weil deine Exploration-Quest auf Mistveil City zeigt, dich das Spiel aber nicht
            hineinlässt, bist du nicht allein. Spieler berichten von einer „area not yet open“-Grenze, die dich nach einem kurzen Timer wieder hinaus
            teleportiert – selbst wenn du mit Bewegungsskills darüber hinweg dashst.
          </p>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            Diese Seite erklärt, was die Sperre bedeutet, welche zwei Freischaltdaten viele sehen (22. vs 26. Januar 2026) und was du jetzt tun kannst —
            vor allem Ephemeral Blight abschließen und Mistveil Forest Cures sammeln, damit du startklar bist, sobald Mistveil City live geht.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/50">Freischaltdatum: 22. Jan vs 26. Jan</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-slate-400/40">Zeitgate, kein Rätsel</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/40">Ephemeral Blight + Cures</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Kurzfassung</h2>
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

      <section className="space-y-3 rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-amber-100">Quellen- und Mediengrenze</h2>
        <p className="text-sm leading-relaxed text-amber-50/90">
          Diese Text-Route nutzt Walkthroughs aus der Community nur zum Gegenprüfen, nicht als offizielle Spielanleitung.
          Publisher: AllThings.How. Reuse authorization confirmed by site owner 2026-08-29. Die Aufnahmen dokumentieren
          einen Ablauf vom Januar 2026 und sind kein Beleg für den aktuellen Build. Prüfe veränderliche Ziele im aktuellen
          Client und in offiziellen Patch Notes.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={allThingsSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-amber-100 underline underline-offset-4 hover:text-amber-50">
            Quellenartikel bei AllThings.How lesen →
          </a>
          <a href={walkthroughSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-amber-100 underline underline-offset-4 hover:text-amber-50">
            Genannten 100%-Guides-Walkthrough auf YouTube suchen →
          </a>
        </div>
      </section>

      <MistveilCityAuthorizedMedia locale="de" />

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Warum Mistveil City gesperrt ist (und was die Meldung bedeutet).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Das Wichtigste vorweg: Die Mistveil-City-Sperre ist nicht dasselbe wie dein Fortschritt in Mistveil Forest. Selbst nachdem du den
          Dawn-to-Dusk-Nebel in Mistveil Forest entfernt hast, kann Mistveil City weiterhin als „not yet open“ gelten und dich wieder hinauswerfen.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Dieses Verhalten passt zu geplanten Content-Gates in Where Winds Meet: Die Quest existiert, der Ortsname existiert — aber die Grenze bleibt hart
          gesperrt, bis die Entwickler sie freischalten. Das erklärt auch, warum Spieler mit sehr unterschiedlichen Builds, Sektenwahl und Quest-Fortschritt
          denselben Countdown mit Zwangsteleport am Mistveil-City-Eingang sehen.
        </p>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-semibold text-slate-50">Praktisches Fazit</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            Behandle Mistveil City als Zeitgate. Verschwende keine Stunden damit, die Grenze zu erzwingen — bereite deinen Account vor und komm zurück,
            wenn die In-Game-Sperre verschwindet.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Mistveil City Freischaltdatum: 22. vs 26. Januar (2026).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Stand <strong>{lastUpdated}</strong> nennen Community-Threads und Guides zwei unterschiedliche Freischaltdaten:{" "}
          <strong>22. Januar 2026</strong> und <strong>26. Januar 2026</strong>. Das kann an Server-/Region-Timing oder einem Patch-Schedule-Shift liegen.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Am sichersten ist es, dich an das Datum zu halten, das dein eigener Client beim Blocken anzeigt (und offizielle Notes zu prüfen). Wenn du
          Update-Fenster schnell im Blick behalten willst, schau in unseren{" "}
          <Link href="/de/guides/patch-notes" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Patch-Notes-Guide
          </Link>{" "}
          und auf die{" "}
          <Link href="/de/news" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            News-Seite
          </Link>
          .
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Was du jetzt tun kannst: Ephemeral Blight abschließen und Mistveil Forest Cures sammeln.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Auch wenn Mistveil City zeitlich gesperrt ist, kannst du in der Mistveil-Region trotzdem sinnvoll vorankommen. Die wichtigste Voraussetzung, die
          du erledigt haben willst, ist <strong>Ephemeral Blight</strong>: Damit wird der Dawn-to-Dusk-Nebel in Mistveil Forest dauerhaft entfernt, sobald
          du Zhai Xu hilfst, das Antidot herzustellen.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">1) Ephemeral Blight starten</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Geh in Mistveil Forest (östlich von Kaifeng), bis dich das Toxin außer Gefecht setzt. Zhai Xu rettet dich nach Wishing Cove und die
              Cure-Kette beginnt.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">2) Alle drei Cures sammeln</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Wishing Cove (Zhai Xus Haus), Hollow Abode (ein Skill-Theft-Dungeon) und Aureate Pavilion (ein feindlicher Außenposten).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">3) Abgeben</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Bring die Cures zurück zu Zhai Xu, damit er das Antidot herstellen und den Nebel in Mistveil Forest dauerhaft aufheben kann.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Der Hollow-Abode-Cure hängt mit einem{" "}
          <Link href="/de/guides/skill-theft" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Skill Theft
          </Link>{" "}
          Dungeon zusammen. Nachdem du den Nebel entfernt hast, kannst du auch Mistveils Gruft-Content angehen — siehe{" "}
          <Link href="/de/guides/mist-shrouded-prison" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Nebelverhangenes Gefängnis (Mist-Shrouded Prison)
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Ephemeral Blight als Text-Walkthrough</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Mistveil City kann zeitlich gesperrt sein, aber du kannst Ephemeral Blight trotzdem jetzt abschließen und Mistveil Forest dauerhaft klären. Dieser
          Schritt-für-Schritt-Guide ist wie im Original-Guide aufgebaut: erst die Cures, dann das Ziel, den Nebel zu entfernen.
        </p>
        <div className="space-y-6">
          {walkthroughSections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-black/25 space-y-4"
            >
              <h3 className="text-lg font-semibold text-slate-50">{section.title}</h3>
              <ol className="space-y-4">
                {section.steps.map((step, index) => (
                  <li key={`${section.title}-${step.title}`} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Schritt {index + 1}</p>
                    <p className="text-sm font-semibold text-slate-100">{step.title}</p>
                    <p className="text-sm leading-relaxed text-slate-200">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
          Wichtig: Nachdem du alle drei Cures abgegeben hast, kann die Quest verlangen, dass du etwa zwei volle In-Game-Tage wartest, bevor Zhai Xu eine
          Notiz hinterlässt und das Ziel „triff dich am Nordufer“ verfügbar wird.
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Mistveil City Vorbereitung – Checkliste.
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Ephemeral Blight abschließen und den Nebel in Mistveil Forest dauerhaft entfernen (Zhai Xus Antidot).",
            "Alle Mistveil-Forest-Cures sammeln: Wishing Cove, Hollow Abode, Aureate Pavilion.",
            "Nahe Teleportpunkte freischalten und Basis-Verbrauchsitems fürs Erkunden auffüllen.",
            "Falls dein Journal ein striktes Limit für aktive Quests hat: einen Quest-Slot frei lassen.",
            "Nach dem genannten Datum auf deinem Server die Mistveil-City-Grenze erneut prüfen.",
          ].map((item) => (
            <li key={item} className="flex gap-2 rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
              <span className="mt-0.5 text-emerald-300">✓</span>
              <span className="text-sm leading-relaxed text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Mistveil City FAQ</h2>
        <div className="divide-y divide-slate-800">
          {faq.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-100">
                {item.q}
                <span className="float-right text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
