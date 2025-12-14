import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "@/app/guides/wall-puzzle/ZoomableImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Wandrätsel Guide (Echoes of Old Battles) | Deutsch",
  description:
    "Kompletter Wandrätsel-Guide für Echoes of Old Battles: alle Feuerstellen anzünden, Pose Yanyun Oath nutzen, Wandsteine 移/百/漂 drücken und Touch of Death holen – mit Karten, Screenshots und Fixes.",
  alternates: buildHreflangAlternates("/guides/wall-puzzle", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Wandrätsel Guide (DE) | Where Winds Meet",
    description:
      "Alle Feuerstellen, Pose, richtige Wandsteine (移/百/漂) und die Touch of Death-Belohnung – komplette Lösung des Echoes of Old Battles Wandrätsels.",
    url: `${baseUrl}/de/guides/wall-puzzle`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/guides/wall-puzzle/wall-tiles-right.webp",
        width: 1650,
        height: 928,
        alt: "Die Steine 移 und 百 an der rechten Wand im Echoes of Old Battles Rätsel drücken",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandrätsel Guide (DE) | Where Winds Meet",
    description:
      "Schritt-für-Schritt-Lösung für das Echoes of Old Battles Wandrätsel: Feuerstellen, Yanyun Oath, Wandsteine 移/百/漂, Touch of Death.",
    images: ["https://wherewindsmeet.org/guides/wall-puzzle/wall-tiles-right.webp"],
  },
};

const quickAnswers = [
  {
    label: "Quest",
    value: "Echoes of Old Battles (Qinghe, Verdant Wilds)",
    color: "text-emerald-300",
    icon: "🧭",
  },
  {
    label: "Antwort Wandrätsel",
    value: "Rechte Wand: 移 + 百 drücken, dann linke Wand: 漂.",
    color: "text-amber-300",
    icon: "🧩",
  },
  {
    label: "Hauptbelohnung",
    value: "Assassin-Mystik-Skill „Touch of Death“ + Truhen-Loot",
    color: "text-rose-300",
    icon: "🎁",
  },
  {
    label: "Gesamtdauer",
    value: "≈10-15 Minuten, wenn du die Route kennst",
    color: "text-sky-300",
    icon: "⏱️",
  },
];

const heroImages = [
  {
    src: "/guides/wall-puzzle/fire-contraptions-map.webp",
    alt: "Feuerstellen rund um die Ruinenfestung in Qinghe",
    caption: "Feuerstellen-Karte: Zünde alle vier Feuerstellen, damit sich der Tunnel öffnet.",
  },
  {
    src: "/guides/wall-puzzle/pose-yanyun-oath.webp",
    alt: "Pose Yanyun Oath vor der großen Statue benutzen",
    caption: "Trigger: Nutze die Pose Yanyun Oath an der großen Statue, um das Wandrätsel zu starten.",
  },
  {
    src: "/guides/wall-puzzle/wall-tiles-right.webp",
    alt: "Die Steine 移 und 百 an der rechten Wand drücken",
    caption: "Lösung: Rechte Wand drückt 移 und 百, linke Wand drückt 漂 – dann öffnet sich die Tür.",
  },
];

const zoomableUiText = {
  openAriaLabelTemplate: "Bild in groß öffnen: {alt}",
  closeLabel: "Schließen",
  hintTemplate: "Scrollen oder +/- zum Zoomen, ziehen/scrollen zum Verschieben. Aktuell: {pct}%",
} as const;

const fireContraptions = [
  {
    title: "Trainingsplatz",
    detail: "Entzünde den Feuerkorb in der Arena, in der du Zhang Bao besiegst und die Rätselkarte lootest.",
  },
  {
    title: "Burg-Eingang",
    detail: "Vor dem Tor links die Ruinen hoch; die Vorrichtung dort sollte bereits brennen.",
  },
  {
    title: "Oberer Wehrgang",
    detail: "Folge dem zerbrochenen Mauerpfad nach oben und entzünde den Feuerkorb auf dem oberen Sims.",
  },
  {
    title: "Unteres Ost-Plateau",
    detail: "Lass dich auf die untere östliche Plattform fallen oder klettere hinunter und entzünde den letzten Feuerkorb.",
  },
];

const wallSolution = [
  {
    title: "Pose holen",
    text: "Leihe die Pose „Yanyun Oath“ von der Soldatenstatue direkt vor der großen Halle aus.",
  },
  {
    title: "Puzzle aktivieren",
    text: "Stell dich vor die riesige Statue und führe Yanyun Oath aus, um den Mechanismus zu wecken.",
  },
  {
    title: "Rechte Wand drücken",
    text: "Drücke an der rechten Wand die Steine mit den Schriftzeichen 移 und 百.",
  },
  {
    title: "Linke Wand drücken",
    text: "Drücke an der linken Wand den Stein mit 漂, um die Sequenz abzuschließen.",
  },
  {
    title: "Abschließen",
    text: "Die Tür öffnet sich – spring über die Lücke, zieh den Hebel hinter dem Wasserfall und plündere die Truhe.",
  },
];

const unlockSteps = [
  {
    title: "Quest bei den Qinghe-Ruinen starten",
    text: "Sprich mit Lie Bujin vor den Ruinen, um „Echoes of Old Battles“ in Qinghe (Verdant Wilds) anzunehmen.",
    image: {
      src: "/guides/wall-puzzle/game8/4331081-57e94f6bf21d69927689e378eb0358fd.webp",
      alt: "Questmarker von Echoes of Old Battles auf der Karte",
      caption: "Questmarker: Qinghe-Ruinen, Verdant Wilds.",
    },
  },
  {
    title: "Belausche, spreng die Fässer, räume die Mobs weg",
    text: "Belausche die Banditen bei den Fässern, zünde die Brandfässer mit einem Feuerpfeil, besiege die Wellen plus Boss Zhang Bao und plündere die Arenatruhe für die Feuerstellen-Karte.",
    image: {
      src: "/guides/wall-puzzle/game8/4331075-caa01c4ee0d88da905e52717793aa762.webp",
      alt: "Abhör- und Fass-Spot in der Arena",
      caption: "Erst zuhören, dann die Brandfässer zünden, um die erste Welle zu löschen.",
    },
  },
  {
    title: "Vier Feuerstellen anzünden",
    text: "Nutze die Karte und entzünde alle Feuerstellen (Reihenfolge egal): links vom Eingang, oberer Mauerrest, unteres Ost-Plateau und in der Arena.",
    image: {
      src: "/guides/wall-puzzle/game8/4331076-f79e5957d1551183859b4e5d3e86d414.webp",
      alt: "Die richtige Feuerstelle entzünden",
      caption: "Alle vier richtigen Feuerstellen müssen brennen, sonst bleibt der Untergrund verschlossen.",
    },
  },
  {
    title: "Platte stampfen, nach unten gehen",
    text: "Sind alle Feuerstellen aktiv, erscheint in der Arena eine Bodenplatte; setze Mighty Drop ein, um sie zu drücken und den Tunnel zu öffnen.",
    image: {
      src: "/guides/wall-puzzle/game8/4331077-e5a535c018ecb105709d9d47994d8b12.webp",
      alt: "Eingang zum Untergrundtunnel",
      caption: "Stampfe die Platte, um den Untergrund-Eingang freizulegen.",
    },
  },
  {
    title: "Pose Yanyun Oath ausleihen",
    text: "Kopiere die Pose Yanyun Oath von der Soldatenstatue und nutze sie vor der riesigen Statue, um den Mechanismus zu aktivieren.",
    image: {
      src: "/guides/wall-puzzle/game8/4331078-7e11bf6db03c83463d137fe7e8d188aa.webp",
      alt: "Pose Yanyun Oath nutzen, um den Mechanismus zu starten",
      caption: "Du musst die Pose nutzen, sonst reagiert die Wand nicht.",
    },
  },
  {
    title: "Wandsteine drücken (Kernschritt)",
    text: "Rechte Wand: drücke 移 und 百. Linke Wand: drücke 漂. Reihenfolge ist flexibel – Hauptsache, alle drei werden gedrückt, damit sich die Tür öffnet.",
    image: {
      src: "/guides/wall-puzzle/wall-tiles-right.webp",
      alt: "Die Steine 移 und 百 an der rechten Wand drücken",
      caption: "Rechte Wand: 移 + 百; linke Wand: 漂.",
    },
  },
  {
    title: "Hebel hinter dem Wasserfall ziehen",
    text: "Wenn die Tür offen ist, spring hinüber und ziehe den Hebel hinter dem Wasserfall, um weiterzukommen.",
    image: {
      src: "/guides/wall-puzzle/game8/4331080-4a13e0a7c62d5ea365fce67df363dbe1.webp",
      alt: "Hebel hinter dem Wasserfall",
      caption: "Der Hebel öffnet den Weg zum Schatzraum.",
    },
  },
  {
    title: "Truhe öffnen: Touch of Death",
    text: "Endbelohnung: Assassin-Mystik-Skill Touch of Death plus Loot; schließt diesen Story-Abschnitt ab.",
    image: {
      src: "/guides/wall-puzzle/game8/4331079-8c8f3f163d873516d57b4e93078f2a7b.webp",
      alt: "Schatztruhe mit Touch of Death",
      caption: "Sichere dir den Assassin-Skill Touch of Death.",
    },
  },
];

const ignReferences = [
  {
    src: "/guides/wall-puzzle/ign/1.webp",
    alt: "Übersicht des Wandrätsel-Raums mit zentraler Statue",
    caption: "IGN: Raumlayout, bevor du interagierst.",
  },
  {
    src: "/guides/wall-puzzle/ign/2.webp",
    alt: "Hinweis-Steinplatte am Boden neben der Statue",
    caption: "IGN: Hinweis, welche Schriftzeichen auf die Wände gehören.",
  },
  {
    src: "/guides/wall-puzzle/ign/3.webp",
    alt: "Rechte Wand mit vier interaktiven Blöcken vor der Lösung",
    caption: "IGN: Rechte Wand – drücke Block 1 und 3 (移, 百).",
  },
  {
    src: "/guides/wall-puzzle/ign/4.webp",
    alt: "Linke Wand mit zwei interaktiven Blöcken vor der Lösung",
    caption: "IGN: Linke Wand – drücke den zweiten Block (漂).",
  },
  {
    src: "/guides/wall-puzzle/ign/5.webp",
    alt: "Rechte Wand nach dem Drücken der richtigen Blöcke",
    caption: "IGN: Gelöste rechte Wand.",
  },
  {
    src: "/guides/wall-puzzle/ign/6.webp",
    alt: "Linke Wand nach dem Drücken des richtigen Blocks",
    caption: "IGN: Gelöste linke Wand.",
  },
];

export default function WallPuzzleDePage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/13.webp"
            alt="Verfallene Mauern in Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/20" />
        </div>

        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-emerald-300">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-900/30 px-3 py-1">Echoes of Old Battles</span>
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-slate-200">Wandrätsel-Guide</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-bold text-slate-50 sm:text-5xl">
              Where Winds Meet Wandrätsel Lösung
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Dieser Guide zeigt den schnellsten Weg durch die Nebenquest „Echoes of Old Battles“ in Qinghe: alle Feuerstellen entzünden, das Wandrätsel (移 / 百 / 漂) lösen und den Mystik-Skill Touch of Death mitnehmen – ohne Sucherei.
            </p>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Hängst du woanders? Schau dir den neuen{" "}
              <Link href="/de/guides/woven-with-malice" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                Woven with Malice Quest-Guide
              </Link>{" "}
              an (Zeitfenster, Farbstoffe, Mönchsduell, Falle, Bambusschwanz und Bugfixes).
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickAnswers.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/40"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <p className={`mt-2 text-sm font-medium ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <h2 className="text-xl font-bold text-slate-50">Wichtige Bilder</h2>
          <p className="text-xs text-slate-500">Quelle: GameRant (lokal gespiegelt)</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {heroImages.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-inner shadow-slate-950/40"
            >
              <ZoomableImage
                src={img.src}
                alt={img.alt}
                width={1650}
                height={928}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                uiText={zoomableUiText}
              />
              <figcaption className="px-3 py-2 text-xs text-slate-300/90 border-t border-slate-800/80">
                {img.caption} (zum Vergrößern klicken)
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-50">Ablauf auf einen Blick</h2>
          <ol className="space-y-4 text-sm text-slate-300 list-decimal list-inside">
            <li>
              <strong>Start in Qinghe, Verdant Wilds.</strong> Sprich mit Lie Bujin am Eingang der Ruinen, um „Echoes of Old Battles“ anzunehmen.
            </li>
            <li>
              <strong>Hof säubern.</strong> Belausche die Banditen bei den Brandfässern, zünde sie mit einem Feuerpfeil und besiege die Wellen plus Boss Zhang Bao.
            </li>
            <li>
              <strong>Rätselkarte holen.</strong> Öffne die Truhe auf dem Trainingsplatz; sie markiert alle Feuerstellen.
            </li>
            <li>
              <strong>Alle vier Feuerstellen anzünden.</strong> Siehe die exakten Spots unten – Reihenfolge egal.
            </li>
            <li>
              <strong>Druckplatte stampfen.</strong> Eine Platte erscheint in der Arena; setze Mighty Drop ein, um den Untergrund zu öffnen.
            </li>
            <li>
              <strong>Yanyun Oath vor der Statue.</strong> Leihe die Pose von der Soldatenstatue und benutze sie vor der Riesenfigur, um das Wandrätsel zu aktivieren.
            </li>
            <li>
              <strong>Richtige Steine drücken.</strong> Rechte Wand: 移 dann 百. Linke Wand: 漂. Die Geheimtür öffnet sich zum Lohnraum.
            </li>
          </ol>
        </div>

        <div className="space-y-4 rounded-3xl border border-emerald-700/30 bg-emerald-950/20 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-emerald-200">Checkliste Feuerstellen</h3>
          <p className="text-sm text-emerald-100/80">
            Zünde alle vier Feuerstellen, damit der Untergrund-Mechanismus erscheint. Reihenfolge ist egal – wichtig ist, dass genau diese vier brennen.
          </p>
          <div className="space-y-3">
            {fireContraptions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-emerald-800/40 bg-emerald-900/30 p-4">
                <p className="text-sm font-semibold text-emerald-100">{item.title}</p>
                <p className="text-xs text-emerald-100/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-amber-500/30 bg-amber-900/20 px-3 py-1 text-xs font-semibold text-amber-200">
            Wandrätsel-Lösung
          </span>
          <p className="text-sm text-slate-400">Drücke diese drei Steine, damit sich die Tür öffnet.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {wallSolution.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-slate-950/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Schritt {index + 1}</p>
                  <h3 className="text-base font-bold text-slate-50">{step.title}</h3>
                </div>
                <span className="text-slate-500 text-xs font-mono bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/70">
                  {index + 1}/5
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 text-sm text-slate-300">
          <p>
            Reagiert die Wand nicht? Rüste die Pose erneut aus und interagiere noch einmal mit der Statue. Stelle sicher, dass die Druckplatte oben
            ausgelöst wurde; der Untergrund bleibt verschlossen, solange nicht alle vier Feuerstellen brennen. Der Hinweisstein daneben sagt
            lediglich, dass die Schriftzeichen zusammenpassen müssen – drücke die Steine mit 移, 百, 漂 und ignoriere den Rest.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-xl font-bold text-slate-50">Schritte + lokale Screenshots</h3>
          <p className="text-xs text-slate-500">Bilder von Game8 und GameRant, lokal gespiegelt.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {unlockSteps.map((step, idx) => (
            <article
              key={step.title}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Schritt {idx + 1}</p>
                  <h4 className="text-base font-semibold text-slate-50">{step.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.text}</p>
                </div>
                <span className="text-[11px] text-slate-500 font-mono bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/70">
                  {idx + 1}/8
                </span>
              </div>
              <figure className="border-t border-slate-800/80">
                <ZoomableImage
                  src={step.image.src}
                  alt={step.image.alt}
                  width={1650}
                  height={928}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  uiText={zoomableUiText}
                />
                <figcaption className="px-4 py-3 text-xs text-slate-300/90 border-t border-slate-800/80">
                  {step.image.caption} (zum Vergrößern klicken)
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl font-bold text-slate-50">IGN-Referenzen (lokal)</h3>
          <p className="text-xs text-slate-500">Aus deiner IGN-Version gespiegelt für Übersicht.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ignReferences.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-inner shadow-slate-950/40"
            >
              <ZoomableImage
                src={img.src}
                alt={img.alt}
                width={1650}
                height={928}
                sizes="(max-width: 768px) 100vw, 33vw"
                uiText={zoomableUiText}
              />
              <figcaption className="px-3 py-2 text-xs text-slate-300/90 border-t border-slate-800/80">
                {img.caption} (zum Vergrößern klicken)
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-50">Belohnungen & warum es sich lohnt</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>✓ Schaltet die Geheimkammer-Truhe mit dem <strong>Touch of Death</strong> Assassin-Mystik-Skill frei.</li>
            <li>✓ Extra Loot aus der Kammer plus Quest-EP – eine der besten frühen Nebenquests in Qinghe.</li>
            <li>✓ Die Mighty-Drop-Platte und das Wandrätsel üben Bewegungs-Tricks, die in späteren Ruinen wiederkommen.</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-50">Fehlerbehebung</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              • <strong>Pose fehlt?</strong> Die Pose Yanyun Oath erhältst du von der Soldatenstatue vor der Wandkammer; interagiere, um sie zu kopieren.
            </li>
            <li>
              • <strong>Tür bleibt zu?</strong> Prüfe, ob alle vier Feuerstellen brennen und ob du die Arenaplatte mit Mighty Drop gedrückt hast.
            </li>
            <li>
              • <strong>Probleme beim Klettern?</strong> Nutze Grapples oder Wallruns entlang der zerfallenen Wehrmauern, um schnell zu den oberen Feuerstellen zu kommen.
            </li>
          </ul>
          <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/30 p-4 text-xs text-emerald-100">
            Mehr Movement-Tipps? Sieh dir die{" "}
            <Link href="/de/guides/new-players" className="text-emerald-200 underline underline-offset-4 hover:text-emerald-100">
              Neueinsteiger-Bewegungstipps
            </Link>{" "}
            für Wallruns und Grapple-Timing an.
          </div>
        </div>
      </section>
    </article>
  );
}
