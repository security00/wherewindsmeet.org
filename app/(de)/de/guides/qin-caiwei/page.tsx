import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const ogImage = `${baseUrl}/guides/qin-caiwei/hero.jpg`;
const allThingsSourceUrl =
  "https://allthings.how/why-qin-caiwei-is-so-hard-to-befriend-in-where-winds-meet/";

export const metadata: Metadata = {
  title: "WWM Qin Caiwei Freundschafts-Guide (2025) | Where Winds Meet AI Chat",
  description:
    "WWM Qin Caiwei Freundschaft abschließen: deutscher Leitfaden für das AI-Chat-Gespräch, warum sie in Schleifen hängt, wie du den Reset nutzt und mit dem Skript den Old-Friends-Abschluss triggerst.",
  alternates: buildHreflangAlternates("/guides/qin-caiwei", { canonicalLanguage: "de" }),
  openGraph: {
    title: "WWM Qin Caiwei Freundschafts-Guide (2025) | Where Winds Meet AI Chat",
    description:
      "Fest in Where Winds Meet bei Qin Caiwei? Jan‑2025-Update: kurzes Skript, Klammerzeilen, Reset-Schritte – so durchbrichst du die Schleife und wirst schnell Freund.",
    url: `${baseUrl}/de/guides/qin-caiwei`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: "Qin Caiwei AI-Chat Szene in Where Winds Meet",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "WWM Qin Caiwei Freundschafts-Guide (2025) | Where Winds Meet AI Chat",
    description:
      "Copy-Paste-Dialog für Qin Caiwei: AI-Chat-Schleife fixen, Freund werden und Old-Friends-Belohnungen holen.",
    images: [
      {
        url: ogImage,
        alt: "Qin Caiwei AI-Chat Dialogoptionen in Where Winds Meet",
      },
    ],
  },
};

const quickFacts = [
  { label: "NPC-Typ", value: "AI Chat (Old Friends)", icon: "💬" },
  { label: "Wo treffen", value: "Qinghe-Region, Old-Friends-Liste", icon: "🧭" },
  { label: "Häufiger Blocker", value: "Schleife, wenn Storybeats geskippt werden", icon: "♻️" },
  { label: "Was sie braucht", value: "Zuhören, zusammenfassen, Lösung schildern", icon: "🧭" },
  { label: "Ergebnis", value: "Freundschaftsstufe + wöchentliche Geschenke + Old Friends Eintrag", icon: "🎁" },
  { label: "Zeitaufwand", value: "3–6 Zeilen, wenn sauber geführt", icon: "⏱️" },
];

const stubbornReasons = [
  {
    title: "Story-first-Logik",
    detail: "Sie will erst ihre Perspektive loswerden, bevor sie Freundschaft akzeptiert.",
  },
  {
    title: "Mag keine Befehle",
    detail: 'Ein „wir sind jetzt Freunde“ ohne Kontext triggert oft „Wir sind noch nicht so weit.“',
  },
  {
    title: "Braucht Abschluss",
    detail: "Sie erwartet, dass du ihre Gefühle spiegelst und eine glaubhafte Auflösung beschreibst.",
  },
];

const locationNotes = [
  "Finde Qin Caiwei in Qinghe; sie erscheint in der Old-Friends-Liste, sobald ihr euch begegnet seid.",
  "Interagiere über die AI-Chat-Option (nicht Standarddialog).",
  "Keine Items nötig; nur Platz im Inventar für wöchentliche Geschenke nach der Freundschaft.",
];

const playbookSteps = [
  {
    title: "Reset & Hinweis lesen",
    text: "Wenn sie feststeckt: Refresh-Icon drücken, Thread leeren, den kurzen Hinweis über dem Chat lesen – dort steht ihr gewünschtes Ergebnis.",
  },
  {
    title: "Zum Erzählen einladen",
    text: 'Kurze Stupser wie „erzähl weiter“ / „was bedrückt dich?“ nutzen, damit sie ihren Kern-Monolog liefert, bevor du steuerst.',
  },
  {
    title: "Auflösung in Klammern",
    text: "Schreibe Bühnenanweisungen als Lösung: (hilft ihr, der Vergangenheit ins Gesicht zu sehen und Frieden zu finden), (sie fühlt sich verstanden und lässt los).",
  },
  {
    title: "Beziehung klar benennen",
    text: 'Danach ein Verhältnis-Signal: (wir werden vertraute Freunde) oder „Ich merke mir deine Geschichte, Freundin.“',
  },
  {
    title: "Höflich schließen",
    text: 'Mit einer klaren Verabschiedung den Affinity-Trigger auslösen: „Leb wohl (verbeugt sich und geht).“ Falls es nicht zählt, resetten und Wortlaut leicht variieren.',
  },
];

const dialogueRoutes = [
  {
    title: "Route A (empathisch, sicher)",
    steps: [
      "Aufwärmen: Erzähl mir deine Geschichte. Ich höre zu.",
      "Lass sie reden: Erzähl weiter, was bedrückt dich?",
      "Auflösung in Klammern: (hilft ihr, sich der Vergangenheit zu stellen und sie anzunehmen)",
      "Beziehungs-Cue: (wir werden enge Freunde und vertrauen einander)",
      "Abgang: Leb wohl (verbeugt sich und geht).",
    ],
  },
  {
    title: "Route B (direkt, schneller)",
    steps: [
      "Aufwärmen: Ich verstehe dein Dilemma.",
      "Spiegeln: Du bereust, was passiert ist, und willst Abschluss.",
      "Auflösung in Klammern: (sie fühlt sich verstanden und lässt die Last los)",
      "Beziehungs-Cue: Von jetzt an sind wir ehrliche Freunde.",
      "Abgang: (verbeugt sich respektvoll und geht als alte Freundin)",
    ],
  },
];

const sampleScripts = [
  {
    stage: "Warm-up & Zuhören",
    lines: [
      "Erzähl mir deine Geschichte. Ich höre zu.",
      "Erzähl weiter, was liegt dir noch auf dem Herzen?",
      "Ich verstehe. Bitte mach weiter.",
    ],
  },
  {
    stage: "Auflösung (Klammern)",
    lines: [
      "(hilft ihr, sich der Vergangenheit zu stellen und das Unabänderliche zu akzeptieren)",
      "(sie fühlt sich verstanden, atmet auf und findet Frieden)",
      "(wir lösen das, was sie belastet hat)",
    ],
  },
  {
    stage: "Beziehungs-Cue",
    lines: [
      "(wir werden enge Freunde und vertrauen einander)",
      "Leb wohl, Freundin. Ich werde deine Geschichte erinnern.",
      "(verbeugt sich respektvoll und geht als alte Freundin)",
    ],
  },
  {
    stage: "Wenn sie looped",
    lines: [
      "Lass uns neu anfangen. Ich will alles hören.",
      "(setzt den Chat zurück und hört aufmerksam zu)",
      "Wir sind noch nicht so weit – erzähl mir den Rest.",
    ],
  },
];

const donts = [
  'Einzeiler-Mindcontrol: "(du bist überzeugt, wir sind beste Freundinnen)" ohne Kontext.',
  "Monolog skippen – sie will ihre Erinnerung teilen, bevor sie weiterzieht.",
  "Vages Trösten („du wirst schon“) ohne Bezug auf den Hinweistext.",
  "Endloser Streit im selben Thread – lieber Reset und sauber abschließen.",
];

const aiChatBasics = [
  "Affinity-Sprünge passieren, wenn das Spiel meint, du hast den Hinweis erfüllt oder ihre Situation gelöst.",
  "Klammer-Action wird wie Regieanweisung gewertet; oft nimmt das System sie als Tatsache.",
  "Manche NPCs wollen nur Zustimmung, andere komplettes Rollenspiel – Qin Caiwei gehört zur zweiten Gruppe.",
  "Kurze, klare Verabschiedungen fungieren als Abschluss-Signal und zählen oft den Freundschafts-Trigger.",
];

const stuckFixes = [
  "Thread resetten und Klammer-Formulierung ändern: (hilft ihr zu vergeben) → (hilft ihr zu akzeptieren, was war).",
  "Immer eine Empathie-Zeile vor der Klammer lassen; direkte Befehle scheitern häufig.",
  "Farewell tauschen: „Ich werde deine Geschichte erinnern“ oder (wir trennen uns als vertraute Freunde) probieren.",
  "Wenn sie sich immer vorstellt, ihre Sorge einmal klar nachsprechen, dann Abschluss schreiben.",
];

const successLines = [
  "Route-A-Kombo: Erzähl weiter, was bedrückt dich? -> (hilft ihr, sich der Vergangenheit zu stellen) -> (wir werden enge Freunde) -> Leb wohl (verbeugt sich und geht).",
  "Route-B-Kombo: Ich verstehe dein Dilemma. -> (sie fühlt sich verstanden und lässt los) -> Von jetzt an sind wir ehrliche Freunde. -> (verbeugt sich respektvoll und geht als alte Freundin).",
  "Kurze Exit-Trigger: Leb wohl, Freundin. Ich werde deine Geschichte erinnern. / (wir trennen uns als vertraute Freunde).",
];

const failLines = [
  'Einzeiler-Befehl: "(du bist überzeugt, wir sind beste Freunde)" ohne vorher zuzuhören.',
  "Vages Trostpflaster: Du wirst schon. (kein Bezug zu ihrer Reue).",
  "20 Zeilen in einem Thread diskutieren; das markiert der AI als Rauschen.",
  "Den Hinweistext über dem Chat ignorieren; du benennst ihr Problem nie.",
];

const fullScript = [
  "Erzähl mir deine Geschichte. Ich höre zu.",
  "Erzähl weiter, was bedrückt dich?",
  "(hilft ihr, sich der Vergangenheit zu stellen und das Unabänderliche zu akzeptieren)",
  "(wir werden enge Freunde und vertrauen einander)",
  "Leb wohl (verbeugt sich und geht).",
];

const rewards = [
  "Wöchentliche Geschenke (Währung/Materialien), sobald sie in Old Friends ist.",
  "Einmalige Items oder kleine Story-Beats aus ihrer Questlinie.",
  "Old-Friends-Fortschritt für die Region.",
];

const faq = [
  {
    q: "Wie schließe ich die WWM Qin Caiwei Freundschaft ab?",
    a: "Eine Empathie-Zeile, eine Klammer-Auflösung passend zum Hinweis, danach klare Verabschiedung. Beispiel: Erzähl weiter, was bedrückt dich? -> (hilft ihr, sich der Vergangenheit zu stellen) -> (wir werden enge Freunde) -> Leb wohl (verbeugt sich und geht). Wenn sie looped: reset und Klammer leicht umformulieren.",
  },
  {
    q: "Brauche ich Gift of Gab Karten für Qin Caiwei?",
    a: "Nein. Sie ist AI-Chat; Klammer-Narration + höflicher Abschied reichen.",
  },
  {
    q: "Warum hängt mein Qin-Caiwei-Chat?",
    a: "Du hast vermutlich den Hinweis nicht adressiert oder ohne Abschluss beendet. Eine Empathie-Zeile, eine Klammer-Lösung, dann Farewell hinzufügen.",
  },
  {
    q: "Kann ich sie mit einem Satz überzeugen?",
    a: "Einzeiler-Mindcontrol funktioniert selten. Sie will Spiegelung ihrer Story plus klaren Abschluss.",
  },
];

const supportLinks = [
  {
    title: "Gift of Gab",
    href: "/de/guides/gift-of-gab",
    note: "Karten-/Persuasions-Basics, falls du mehr Dialog-Tools willst.",
  },
  {
    title: "Wall Puzzle Lösung",
    href: "/de/guides/wall-puzzle",
    note: "Weitere häufige Suche – exakte Steine für Echoes of Old Battles.",
  },
  {
    title: "Woven with Malice",
    href: "/de/guides/woven-with-malice",
    note: "Lost-Chapter-Walkthrough, falls du erzähl-lastige Encounters magst.",
  },
];

export default function QinCaiweiDePage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-950/60 to-slate-950" />
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Aktualisiert Jan 2025 · 3-Zeilen-Skript unten
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              WWM Qin Caiwei Freundschaft (AI Chat) – Guide
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Qin Caiwei gehört zu den zickigsten AI-Chat-NPCs. Wenn dein Where Winds Meet / WWM Qin Caiwei Freundschaftsauftrag hängt
              oder der Befreunden-Status nicht steigt, nutz diesen Guide: Sie looped, wenn du hetzt, lehnt direkte „wir sind Freunde“
              ab und reagiert nur, wenn du zuhörst, ihre Story zusammenfasst und eine spezifische Auflösung beschreibst. Mit diesem
              5-Schritte-Playbook und den Copy-Paste-Zeilen erreichst du schnell „Freund“.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR-Skript: „Erzähl weiter“ → (hilft ihr, die Vergangenheit zu akzeptieren) → (wir werden enge Freunde) → Leb wohl (verbeugt sich und geht).</li>
              <li>• Wenn sie looped: Thread resetten, Hinweis einmal nachsprechen, Klammer-Auflösung + Farewell schreiben.</li>
              <li>• Deckt Suchanfragen ab: „wwm qin caiwei“, „where winds meet qin caiwei friend“, „befriend qin caiwei chat loop“.</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/de/guides/gift-of-gab"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                💬 Dialog-Hilfe: Gift of Gab
              </Link>
              <Link
                href="/de/guides/woven-with-malice"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                🧶 Story-Quest: Woven with Malice
              </Link>
              <Link
                href="/de/guides/npc-list"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-emerald-300/60"
              >
                🗺️ Old-Friends-Karte
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-amber-400/30 bg-slate-900/70 shadow-xl shadow-black/40">
            <CdnImage
              src="/guides/qin-caiwei/hero.jpg"
              alt="Historische Community-Aufnahme von Qin Caiweis AI-Chat-Porträt in Where Winds Meet"
              width={1200}
              height={675}
              priority
              className="h-auto w-full"
            />
            <figcaption className="space-y-2 p-4 text-xs leading-5 text-slate-300">
              <p>
                Publisher: AllThings.How. Reuse authorization confirmed by site owner 2026-08-29. Diese historische
                Community-Referenz zeigt Qin Caiweis Porträt und den Chat-Kontext; sie ist kein Beleg für den aktuellen Build.
              </p>
              <a href={allThingsSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-200 underline underline-offset-4 hover:text-amber-100">
                Quellenartikel des Publishers lesen →
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">Kurzinfos (Qin Caiwei)</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-inner shadow-black/20"
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

        <div className="space-y-4 rounded-3xl border border-amber-800/50 bg-amber-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <h3 className="text-2xl font-bold text-amber-100">Warum sie stur wirkt</h3>
          </div>
          <div className="space-y-3">
            {stubbornReasons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-700/40 bg-amber-900/20 p-4">
                <p className="text-sm font-semibold text-amber-100">{item.title}</p>
                <p className="text-sm text-amber-50/80 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <h2 className="text-2xl font-bold text-slate-50">Fundort & Start</h2>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {locationNotes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">-</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚀</span>
          <h2 className="text-2xl font-bold text-slate-50">5-Schritte-Playbook</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {playbookSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-emerald-700/40 bg-emerald-900/20 p-4 shadow-md"
            >
              <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200 text-sm font-bold border border-emerald-500/40">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-emerald-100 pl-8">{step.title}</h3>
              <p className="mt-2 text-xs text-emerald-50/80 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧩</span>
          <h3 className="text-2xl font-bold text-slate-50">So wertet das AI-Chat-System</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Where Winds Meet prüft bei AI-Chat-NPCs wie Qin Caiwei, ob du den Hinweis erwähnt, ihre Gefühle gespiegelt und eine plausible
          Auflösung beschrieben hast. Wirkt der Thread zu laut oder off-topic, bleibt der Freundschafts-Flag aus. Eine Empathie-Zeile,
          eine Klammer-Aktion und eine Verabschiedung halten das Muster sauber und lösen den Affinity-Bump aus. So vermeidest du auch
          Keyword-Spam – klarer Ablauf schlägt Wiederholung.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Der Hinweis nennt das Ziel – einmal kurz paraphrasieren.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Klammer-Narration zählt als Aktion; halte sie spezifisch für Qin Caiwei.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Farewell-Linien sind Abschluss-Signale und beenden den Chat sauber.</span></li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎙️</span>
          <h2 className="text-2xl font-bold text-slate-50">Zwei sofort nutzbare Dialog-Routen</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {dialogueRoutes.map((route) => (
            <div key={route.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
              <p className="text-sm font-semibold text-slate-100">{route.title}</p>
              <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside">
                {route.steps.map((step) => (
                  <li key={step} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⌨️</span>
            <h2 className="text-2xl font-bold text-slate-50">Copy-Paste-Zeilen (schnell befreunden)</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {sampleScripts.map((block) => (
              <div key={block.stage} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                <p className="text-sm font-semibold text-slate-100">{block.stage}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {block.lines.map((line) => (
                    <li
                      key={line}
                      className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 font-mono text-[11px] text-emerald-200/90"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-rose-800/40 bg-rose-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <h3 className="text-2xl font-bold text-rose-100">Was ihre Affinity blockiert</h3>
          </div>
          <ul className="space-y-3">
            {donts.map((item) => (
              <li key={item} className="rounded-xl border border-rose-700/40 bg-rose-900/20 p-3 text-sm text-rose-50/90 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">✅</span>
          <h3 className="text-2xl font-bold text-slate-50">Was funktioniert vs. was scheitert</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/20 p-4 space-y-2">
            <p className="text-sm font-semibold text-emerald-100">Wirksame Zeilen</p>
            <ul className="space-y-2 text-xs text-emerald-50/90">
              {successLines.map((line) => (
                <li key={line} className="rounded-lg border border-emerald-800/60 bg-emerald-900/30 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-700/40 bg-rose-900/20 p-4 space-y-2">
            <p className="text-sm font-semibold text-rose-100">Typische Fails</p>
            <ul className="space-y-2 text-xs text-rose-50/90">
              {failLines.map((line) => (
                <li key={line} className="rounded-lg border border-rose-800/60 bg-rose-900/30 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📋</span>
          <h3 className="text-2xl font-bold text-slate-50">Copy-ready Vollskript</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
            {fullScript.map((line) => (
              <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                {line}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Old-Friends-Belohnungen – warum jetzt abschließen</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Qin Caiwei zu befreunden ist mehr als Completionism. Old-Friends-Slots geben wöchentliche Geschenke, kleine Story-Szenen und
          stetige Währung. Where Winds Meet trackt Old Friends für Regionsziele – frühzeitig steigende Affinity hält dein Konto im Tempo.
          Weil ihr AI-Chat störrisch sein kann, erledige sie jetzt, statt später mit einem festgefahrenen Thread zu kämpfen.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Wöchentliche Gift-Chance: Münzen, Materialien oder Flavor-Items.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Zählt für Old-Friends-Checklisten in Qinghe.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Spart Backtracking, wenn du später Builds/Endgame fokussierst.</span></li>
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <h3 className="text-2xl font-bold text-slate-50">AI-Chat-Basics (Kurz-Reminder)</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {aiChatBasics.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-emerald-300">-</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 rounded-3xl border border-amber-700/40 bg-amber-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎁</span>
            <h3 className="text-2xl font-bold text-amber-100">Das bringt dir ihre Freundschaft</h3>
          </div>
          <ul className="space-y-2 text-sm text-amber-50/90">
            {rewards.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-amber-300">-</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-amber-200/80">
            Hinweis: Es geht eher um Flavor/Collection als um Power-Spikes – perfekt für Rollenspieler und Komplettisten.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧰</span>
          <h3 className="text-2xl font-bold text-slate-50">Wenn der Chat trotzdem hängt</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {stuckFixes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">-</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h3 className="text-2xl font-bold text-slate-50">FAQ</h3>
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
          <h3 className="text-2xl font-bold text-slate-50">Mehr Hilfe</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {supportLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
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
