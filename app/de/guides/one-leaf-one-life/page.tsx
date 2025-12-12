import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (p: string) => `${cdnBase}${p}`;

const heroImage = cdn("/guides/one-leaf-one-life/one-leaf-one-life.jpg");
const images = {
  start: cdn("/guides/one-leaf-one-life/one-leaf-one-life-start.jpg"),
  feast1: cdn("/guides/one-leaf-one-life/feast-of-leaves-volume-1-start.jpg"),
  foodInspection: cdn("/guides/one-leaf-one-life/food-inspection.jpg"),
  tale1: cdn("/guides/one-leaf-one-life/tale-of-gold-leaves-volume-1-start.jpg"),
  feast2: cdn("/guides/one-leaf-one-life/feast-of-leaves-volume-2-start.jpg"),
  tale2: cdn("/guides/one-leaf-one-life/tale-of-gold-leaves-vol-2-start.jpg"),
  epilogue: cdn("/guides/one-leaf-one-life/epilogue.jpg"),
};

export const metadata: Metadata = {
  title: "One Leaf, One Life Guide (DE) | Where Winds Meet",
  description:
    "Vollständiger One Leaf, One Life Walkthrough auf Deutsch: Start-Trigger, weiße Blätter sammeln, Feast/Tale of Gold Leaves Bände, Zeitfenster, Rätsellösungen, Side-Stories und Gold Leaf Epilog.",
  alternates: buildHreflangAlternates("/guides/one-leaf-one-life", { canonicalLanguage: "de" }),
  openGraph: {
    title: "One Leaf, One Life Guide (DE) | Where Winds Meet",
    description:
      "Trigger bei Hopewell Academy, alle weißen Blätter, Rätsel-Antworten, Side-Stories und Epilog für Gold Leaf Accessoire + Titel.",
    url: `${baseUrl}/de/guides/one-leaf-one-life`,
    images: [{ url: heroImage, width: 1200, height: 675, alt: "One Leaf, One Life Start" }],
  },
  twitter: {
    title: "One Leaf, One Life (DE) – kompletter Walkthrough",
    description: "Alle Phasen, Zeitfenster, Side-Stories und Rätsellösungen ohne Hängenbleiben.",
    images: [{ url: heroImage, alt: "One Leaf, One Life Start" }],
  },
};

const quickFacts = [
  { label: "Ort", value: "Kaifeng – Hopewell Academy Grenzstein", icon: "🧭" },
  { label: "Quest-Typ", value: "Lost Chapter · 3 Phasen", icon: "📜" },
  { label: "Blätter-Gates", value: "Phase 1: 6 weiße · Phase 2: 5/7 · Phase 3: alle 7", icon: "🍃" },
  { label: "Schlüsselzeiten", value: "Wu (Dock) · You (Baum/Fest) · Zi (Lampe) · Chen (Willow Bank)", icon: "⏱️" },
  { label: "Belohnung", value: "Gold Leaf Accessoire + Titel „Gold Leaf Warrior“", icon: "🎁" },
];

const tlDr = [
  "Start am brennenden Laden bei Hopewell Academy → Feast of Leaves Vol. 1.",
  "Zwischen Feast/Tale-Bänden immer weiße Blätter über Side-Stories sammeln: 6 / 5 / 7.",
  "Zeitfenster strikt beachten (Wu / You / Zi / Chen); nutze Feuerstellen, um vorzuspulen.",
  "Epilog „Huang Liang“ abschließen für Accessoire + Titel.",
];

const phase1Puzzle = [
  {
    question: "Welche Lügen erzählten Lu San'er & Co., warum?",
    answer: "„Ein Schild tötete“ + „Brüder starben nach dem Essen im Diner.“",
  },
  {
    question: "Woher kamen die verdorbenen Zutaten?",
    answer: "„Lu San'er half beim Fest“ + „Ein Gönner verschwand.“",
  },
  {
    question: "Warum hielt das Diner so lange?",
    answer: "„Mutter führte den Laden, guter Ruf“ + „Stammlokal der Nachbarschaft.“",
  },
  {
    question: "Wie ging es nach Gerüchten/Falle weiter?",
    answer: "„Alle Kontakte genutzt, um mittags zu locken.“",
  },
  {
    question: "Was wollten sie?",
    answer: "„Stammkunden kamen alle“ + „Laden stürzen, bevor er übernommen wird.“",
  },
];

const phase2Puzzle = [
  {
    question: "Warum fand niemand den Helden mit den Blättern?",
    answer: "„Blätter überall, Held blieb unsichtbar“ + „Blätter wurden anders gewebt.“",
  },
  {
    question: "Warum ‚unsterblich‘? Wer war es?",
    answer: "„Krieger sah jedes Mal anders aus“ + „Einer gefasst, nächster trat am Folgetag auf.“",
  },
  {
    question: "Was ist die wahre Geschichte?",
    answer: "„Es gab keinen einzelnen Krieger“ + „Es gab mehr als ein Blatt.“",
  },
];

const phase1SideStories = [
  { name: "Peeking on the Wall", tip: "Meridian Touch einsetzen, um den Dieb herunterzuziehen." },
  { name: "Trouble at Every Turn", tip: "Zwei Schläger besiegen, Fu Wenshu im Minigame heilen." },
  { name: "Peril at the Pier", tip: "Schläger besiegen oder Gift of Gab gewinnen." },
  { name: "No Rest for the Righteous", tip: "Drei Wellen Gegner überleben." },
  { name: "The Helping Hand", tip: "Dieb verfolgen, einfrieren, Beute zurückbringen, Mädchen heimgeleiten." },
  { name: "Heart of Malice", tip: "Spuren mit Wind Sense, Schläger besiegen, Mädchen zurückbringen." },
];

const phase2SideStories = [
  { name: "A Step Above", tip: "Mit Tante Zhou reden, 1.000 Münzen spenden." },
  { name: "The Watchful Eye", tip: "Tang Yue beschatten, Familie ansprechen." },
  { name: "Second Wind", tip: "Meridian Touch spammen, damit Chen Cheng nicht springt." },
  { name: "Storybook", tip: "Schläger verjagen, Jiang Zhaoyue füttern, zurückkehren." },
  { name: "Raw Leaf Porridge", tip: "Rezept bei Fu Wenshu (Willow Bank) holen, zurückbringen." },
  { name: "A Lamp and a Promise", tip: "Hinten durchs Fenster, Tagebuch lesen, zur Zi-Stunde Lampe anzünden." },
  { name: "Reflections on a Life", tip: "Steintafel lesen, vier Glocken mit Bogen treffen." },
];

const phase3SideStories = [
  { name: "Whispers of the Lotus Pastry", tip: "Mit dem Buchhalter sprechen." },
  { name: "Cuju", tip: "Mit Ren Xiaoping reden, Minigame abschließen." },
  { name: "Return to Sender", tip: "Mit Zhao Ya sprechen, seine Briefe vorlesen." },
  { name: "Feast of Fulfillment", tip: "Mit Xu Yan sprechen, Rezeptbuch übergeben." },
  { name: "Heart Stealer", tip: "Zhou Ergou ansprechen, Emote „Praise“ bei Granny Chen nutzen, zurückmelden." },
  { name: "Pear Blossoms of Yore", tip: "Mit Wu Caifeng sprechen, Hemostatic Powder geben." },
  { name: "A Tearless Farewell", tip: "Mit Chen Mei sprechen, Celestial Seize für Rouge, an Zhong Wenping geben, zurückreden." },
];

export default function OneLeafDePage() {
  return (
    <div className="min-h-screen bg-ink-wash text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800/60 bg-slate-950/70">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="One Leaf, One Life Start"
            fill
            className="object-cover object-center opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-900/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 lg:py-16">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-emerald-200">
            <Link
              href="/de/guides"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-wide hover:border-emerald-400"
            >
              ← Zurück zu Guides
            </Link>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-emerald-100 ring-1 ring-emerald-400/40">
              Lost Chapter
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-emerald-100 ring-1 ring-sky-400/40">
              Kaifeng City
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-emerald-100 ring-1 ring-amber-400/40">
              Gold Leaf Belohnung
            </span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr,0.9fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-wide text-emerald-200">Walkthrough</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl">
                One Leaf, One Life: alle Phasen, Side-Stories & Rätselantworten
              </h1>
              <p className="text-lg leading-relaxed text-slate-200">
                Route ohne Backtracking: Trigger am brennenden Laden, Feast/Tale-Bände in Reihenfolge, weiße Blätter farmen,
                Zeitfenster beachten und den Huang-Liang-Epilog abschließen, um Accessoire + Titel zu sichern.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Gesucht nach „Where Winds Meet One Leaf One Life“? Hier stehen alle Zeitgates, Side-Stories und Puzzle-Antworten gesammelt.
              </p>
              <ul className="text-xs text-emerald-200 space-y-1">
                <li>• TL;DR: Hopewell Academy → Feast/Tale Vol. → Blätter 6/5/7 → Epilog.</li>
                <li>• Zeitfenster: Wu / You / Zi / Chen.</li>
                <li>• Verwandt: <Link href="/de/guides/woven-with-malice" className="underline underline-offset-4">Woven with Malice</Link> · <Link href="/de/guides/unholy-prophecy" className="underline underline-offset-4">An Unholy Prophecy</Link></li>
              </ul>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/40">Weiße Blätter farmen</span>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-sky-400/30">Rätsel-Lösungen</span>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">Zeitgates</span>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-inner shadow-slate-900/60">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Kurzinfos</h2>
              <div className="grid gap-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <span className="text-lg">{fact.icon}</span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-400">{fact.label}</div>
                      <div className="text-sm text-slate-100">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                <div className="text-sm font-semibold text-emerald-100">TL;DR</div>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-100">
                  {tlDr.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-xs leading-relaxed text-slate-200">
                Deckt die häufigsten Suchanfragen ab: „One Leaf One Life Walkthrough“, „Rätselantworten“, „Epilog Belohnung“.
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-10 lg:py-12">
        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50 lg:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Start: so triggerst du die Quest</h2>
            <p className="text-base leading-relaxed text-slate-200">
              Reite zum Grenzstein Hopewell Academy (Kaifeng). Ein brennender Laden mit Zuschauern markiert den Start.
              Sprich sie an, um „Feast of Leaves: Volume 1“ zu beginnen. Zwischen den Bänden brauchst du weiße Blätter aus Side-Stories,
              sonst öffnet sich das nächste Kapitel nicht.
            </p>
            <p className="text-base leading-relaxed text-slate-200">
              Check die Ingame-Zeit: Wu- und You-Stunden gate Hauptziele, Zi-Stunde gate eine Lampe, Chen taucht später in Phase 2 auf.
              Stelle die Zeit aktiv um, falls etwas nicht triggert.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src={images.start}
              alt="Startpunkt Hopewell Academy"
              width={1650}
              height={928}
              className="h-full w-full object-cover"
              unoptimized
            />
            <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
              Start bei Hopewell Academy in Kaifeng.
            </figcaption>
          </figure>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-200">Phase 1</p>
              <h3 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Strife in Every Corner
              </h3>
              <p className="text-sm text-slate-300">Beide Bände abschließen, 6 weiße Blätter farmen, dann Finale „Strife“ beenden.</p>
            </div>
            <div className="rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40">
              Benötigte Blätter: 6
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Feast of Leaves: Volume 1</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">Wu-Stunde (nächster Tag)</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Paar am brennenden Laden ansprechen, Gerüchte anhören, zwielichtigen Makler belauschen.</li>
                  <li>• Job annehmen, zum Tianjing Dock, Uhr auf Wu des nächsten Tages, mit Vorarbeiter reden und der Crew folgen.</li>
                  <li>• Verdorbenes Essen prüfen, „Leiche“ untersuchen, Spur zum Trauerzug verfolgen, aufdecken und vier Kriminelle besiegen.</li>
                  <li>• Lu San&apos;er durch die Stadt schleifen, Geständnis holen, mit Zhang Ankang debriefen, Rätsel unten lösen.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
                <div className="text-sm font-semibold text-emerald-100">Feast-Rätsel-Antworten</div>
                <div className="mt-3 divide-y divide-slate-800 border border-slate-800/80 rounded-xl bg-slate-950/70">
                  {phase1Puzzle.map((row) => (
                    <div key={row.question} className="grid gap-3 px-3 py-3 md:grid-cols-[1.1fr,0.9fr]">
                      <div className="text-sm font-semibold text-slate-100">{row.question}</div>
                      <div className="text-sm text-slate-200">{row.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Tale of Gold Leaves: Volume 1</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">Immortal Tree</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Blinde Schwester mit drei Kids östlich von South Gate Avenue finden; mit Zheng Ran sprechen und sie heim begleiten.</li>
                  <li>• Nachbarn nach ihrem Vater fragen, zurück zu Zheng Ran, dann zum Immortal Tree und Schild lesen.</li>
                  <li>• Dachdieb verfolgen bis er ermüdet, Jungen nach Gold Leaf fragen, bei Zhou Ergou melden, mit dem Alten am Baum reden.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">Strife in Every Corner (Finale)</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Zum Haus des Elder Host, Gespräch anhören, Geldbeutel zu Zhang Ankang bringen, danach zurückmelden, um Phase 1 zu schließen.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src={images.feast1}
                  alt="Feast of Leaves Volume 1 Start"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Feast of Leaves: Volume 1 eröffnet Phase 1.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src={images.foodInspection}
                  alt="Verdorbenes Essen inspizieren"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Essen prüfen, Trauernde entlarven, Rätsel lösen.
                </figcaption>
              </figure>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    Side-Stories für weiße Blätter (6)
                  </h4>
                  <span className="text-xs text-slate-400">Beliebige sechs abschließen</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  {phase1SideStories.map((story) => (
                    <li key={story.name} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>
                        <strong className="text-slate-100">{story.name}:</strong> {story.tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-200">Phase 2</p>
              <h3 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Lights Flicker in Every Home
              </h3>
              <p className="text-sm text-slate-300">Zwei neue Bände, fünf von sieben Side-Stories und das Lights-Finale.</p>
            </div>
            <div className="rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40">
              Benötigte Blätter: 5 (am Ende alle 7)
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Feast of Leaves: Volume 2</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">You-Stunde</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Zhang&apos;s Eatery erneut besuchen, mit Liu Xian reden, Zhang Ankang am Tianjing Dock treffen; folgen und Geldbeutel übergeben.</li>
                  <li>• Locust Leaf Noodles kochen, Rezept prüfen, Wu Caifeng an der Hopewell Academy konsultieren.</li>
                  <li>• Zum Locust Tree in der You-Stunde, Blatt pflücken, zu Zhang zurück, Lu San&apos;er finden und seine Schläger besiegen.</li>
                  <li>• Zhou Juan für ihre Geschichte bezahlen, Liu Xian briefen, bei Jin&apos;s Jewelry Infos holen, zu Zhang zurück und Band abschließen.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
                <div className="text-sm font-semibold text-emerald-100">Tale of Gold Leaves: Volume 2</div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  <li>• Start bei Jiang&apos;s Teahouse (Pinggu Wen), Storybook lesen, dann Chen Xuewu bei Hopewell Academy finden.</li>
                  <li>• Vermisste Schüler finden: Zhen Lele & Hu Qiaoqiao (West-Gasse), Xu Xuan nebenan, Chen Wenwen im linken Gebäude.</li>
                  <li>• Nachts aufs Dach ins Patrol & Inspection Agency schleichen, Wind Sense nutzen, drei Hinweise sammeln.</li>
                  <li>• Rätsel unten lösen, dann Zheng Ran & Granny Liu im Osten belauschen, bis Chen-Stunde warten, nach Willow Bank, Tai Chi für das Blatt, abschließen.</li>
                </ul>
                <div className="mt-3 divide-y divide-slate-800 border border-slate-800/80 rounded-xl bg-slate-950/70">
                  {phase2Puzzle.map((row) => (
                    <div key={row.question} className="grid gap-3 px-3 py-3 md:grid-cols-[1.1fr,0.9fr]">
                      <div className="text-sm font-semibold text-slate-100">{row.question}</div>
                      <div className="text-sm text-slate-200">{row.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">Lights Flicker in Every Home (Finale)</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Zeit auf You stellen, Liu Fen zuhören, Gruppe zu Zheng Ran folgen, Locust Leaf Noodles kochen während Liu Xian & Zhang Ankang reden,
                  danach mit Zheng Ran sprechen, um Phase 2 abzuschließen.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src={images.feast2}
                  alt="Feast of Leaves Volume 2 Start"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Volume 2 kehrt zu Zhang&apos;s Eatery & Locust Tree zurück.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src={images.tale2}
                  alt="Tale of Gold Leaves Volume 2 Start"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Volume 2 enthält Stealth in der Patrol & Inspection Agency.
                </figcaption>
              </figure>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    Side-Stories für weiße Blätter (5 von 7)
                  </h4>
                  <span className="text-xs text-slate-400">Alle 7 abschließen für den Epilog</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  {phase2SideStories.map((story) => (
                    <li key={story.name} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>
                        <strong className="text-slate-100">{story.name}:</strong> {story.tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-200">Phase 3</p>
              <h3 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Huang Liang at Every Hearth (Epilog)
              </h3>
              <p className="text-sm text-slate-300">Alle sieben Side-Stories abschließen, dann Fest & Epilog beenden.</p>
            </div>
            <div className="rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40">
              Benötigte Blätter: 7 (alle)
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-50">Side-Stories (alle 7 abschließen)</h4>
                  <span className="text-xs uppercase tracking-wide text-emerald-200">Erst erledigen</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                  {phase3SideStories.map((story) => (
                    <li key={story.name} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>
                        <strong className="text-slate-100">{story.name}:</strong> {story.tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">To Feast and Forget</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Zurück zu Zhang&apos;s Eatery, mit Zhang Ankang & Zheng Ran sprechen, auf die You-Stunde des nächsten Tages vorspulen,
                  zum Fest am Tianjing Dock, Schläger besiegen, Cutscene abwarten.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-slate-50">Huang Liang at Every Hearth (Epilog)</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Zheng Rans Haus besuchen und lauschen, dann zurück zum Immortal Tree, Ren Xiaoping zuhören. Abschluss verleiht
                  das <span className="font-semibold text-emerald-200">Gold Leaf Accessoire</span> und den
                  <span className="font-semibold text-emerald-200"> Titel „Gold Leaf Warrior“</span>.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src={images.epilogue}
                  alt="Epilog One Leaf, One Life"
                  width={1650}
                  height={928}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <figcaption className="bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
                  Phase 3 schließt alle Side-Stories vor Fest & Epilog ab.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Weiterlesen</div>
            <p className="text-base text-slate-100">
              Mehr Lost Chapters? Schau auch <Link href="/de/guides/woven-with-malice" className="underline underline-offset-4">Woven with Malice</Link>{" "}
              sowie unsere <Link href="/de/guides/tier-list" className="underline underline-offset-4">Tierlists</Link> und{" "}
              <Link href="/de/guides/builds" className="underline underline-offset-4">Builds</Link>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/de/guides/woven-with-malice"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              Woven with Malice Guide
            </Link>
            <Link
              href="/de/guides"
              className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400"
            >
              Alle Guides
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
