import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import LightboxGallery from "@/components/LightboxGallery";
import FallbackImage from "@/components/FallbackImage";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

// Base path without language prefix (hreflang helper will add /vn or /de automatically).
const basePath = "/guides/the-great-faceologist";
const pagePath = `/de${basePath}`;

const images = {
  hero: cdn("/guides/the-great-faceologist/hero.webp"),
  openAppearance: cdn("/guides/the-great-faceologist/step-1-open-appearance.webp"),
  appearanceMenu: cdn("/guides/the-great-faceologist/step-2-switch-appearance-tab.webp"),
  editFace: cdn("/guides/the-great-faceologist/step-3-edit-face.webp"),
  choosePreset: cdn("/guides/the-great-faceologist/step-4-choose-preset.webp"),
  preview: cdn("/guides/the-great-faceologist/step-5-preview.webp"),
  upload: cdn("/guides/the-great-faceologist/step-6-upload-to-gallery.webp"),
  titleDesc: cdn("/guides/the-great-faceologist/step-7-title-description.webp"),
  tag: cdn("/guides/the-great-faceologist/step-8-select-event-tag.webp"),
  tagConfirm: cdn("/guides/the-great-faceologist/step-9-publish.webp"),
  dailyCap: cdn("/guides/the-great-faceologist/daily-upload-cap.webp"),
};

// Local fallback keeps the original public path so CDN failures can fall back to on-host assets.
const fallbackImages = {
  hero: "/guides/the-great-faceologist/hero.webp",
  openAppearance: "/guides/the-great-faceologist/step-1-open-appearance.webp",
  appearanceMenu: "/guides/the-great-faceologist/step-2-switch-appearance-tab.webp",
  editFace: "/guides/the-great-faceologist/step-3-edit-face.webp",
  choosePreset: "/guides/the-great-faceologist/step-4-choose-preset.webp",
  preview: "/guides/the-great-faceologist/step-5-preview.webp",
  upload: "/guides/the-great-faceologist/step-6-upload-to-gallery.webp",
  titleDesc: "/guides/the-great-faceologist/step-7-title-description.webp",
  tag: "/guides/the-great-faceologist/step-8-select-event-tag.webp",
  tagConfirm: "/guides/the-great-faceologist/step-9-publish.webp",
  dailyCap: "/guides/the-great-faceologist/daily-upload-cap.webp",
};

export const metadata: Metadata = {
  title: "The Great Faceologist (Dez 2025)",
  description:
    "The Great Faceologist (Dez 2025) in Where Winds Meet: Voraussetzungen, richtiger Upload-Pfad, Event-Tag setzen, Daily Cap und typische Fixes.",
  alternates: buildHreflangAlternates(basePath, { canonicalLanguage: "de" }),
  openGraph: {
    title: "The Great Faceologist (Dez 2025)",
    description:
      "Nur Uploads aus Edit Face zählen – und nur, wenn du vor dem Publish den Tag [The Great Faceologist] aktivierst.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: images.hero,
        width: 1317,
        height: 741,
        alt: "The Great Faceologist Event in Where Winds Meet",
      },
      {
        url: `${baseUrl}${fallbackImages.hero}`,
        width: 1317,
        height: 741,
        alt: "The Great Faceologist Event (Fallback-Bild)",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Faceologist (Dez 2025)",
    description:
      "So reichst du korrekt ein: Upload aus Edit Face und Event-Tag [The Great Faceologist] vor dem Publish aktivieren.",
    images: [images.hero, `${baseUrl}${fallbackImages.hero}`],
  },
};

const quickFacts = [
  { label: "Event-Zeitraum", value: "11.–31. Dez 2025 (UTC)" },
  { label: "Voraussetzungen", value: "Level 5 + Qinghe-Hauptkapitel „Another New Wing“ abschließen" },
  { label: "Event-Typ", value: "Zeitlich begrenzter Face/Make-up-Contest" },
  { label: "Wo einreichen", value: "Appearance → Edit Face / Makeup → Preview → Upload to Gallery" },
  { label: "Was zählt", value: "Nur Uploads mit aktivem Tag [The Great Faceologist]" },
  { label: "Daily Cap", value: "Ca. ~5 Uploads/Tag (geteiltes Limit für Appearance-Uploads)" },
];

const tlDr = [
  "Appearance im Hauptmenü öffnen und unten auf den Appearance-Tab wechseln (nicht Outfits).",
  "In Edit Face (oder Makeup) gehen, Preset auswählen/anpassen, dann Preview und Upload to Gallery.",
  "Im Upload-Dialog unbedingt den Tag [The Great Faceologist] unter der Beschreibung aktivieren, erst dann publishen.",
  "Uploads aus der Outfit-Gallery zählen für dieses Event nicht.",
];

const pcSteps = [
  {
    title: "Appearance öffnen (Wardrobe)",
    desc: "Esc → Appearance, um die Garderobe zu öffnen.",
    img: images.openAppearance,
    fallbackImg: fallbackImages.openAppearance,
    alt: "Appearance-Menü vom Hauptbildschirm öffnen",
  },
  {
    title: "Zum Appearance-Tab wechseln (Basis-Look)",
    desc: "In der Garderobe unten erneut auf Appearance klicken, um von Outfits auf den Basis-Look zu wechseln.",
    img: images.appearanceMenu,
    fallbackImg: fallbackImages.appearanceMenu,
    alt: "Wechsel zum Appearance-Tab in der Garderobe",
  },
  {
    title: "Edit Face öffnen",
    desc: "Edit Face auswählen (meist unten rechts). Die Kamera zoomt heran und lädt Presets/Slider.",
    img: images.editFace,
    fallbackImg: fallbackImages.editFace,
    alt: "Edit Face Button im Appearance Editor",
  },
  {
    title: "Preset wählen oder anpassen",
    desc: "Face-Preset wählen oder in den Makeup-Tab wechseln und Details anpassen. Optional als neues Preset speichern.",
    img: images.choosePreset,
    fallbackImg: fallbackImages.choosePreset,
    alt: "Preset auswählen oder Make-up anpassen",
  },
  {
    title: "Preview (Bild framing)",
    desc: "Preview anklicken und den Bildausschnitt festlegen. Dieser Frame wird im Gallery-Post genutzt.",
    img: images.preview,
    fallbackImg: fallbackImages.preview,
    alt: "Preview nutzen, um den Frame vor dem Upload festzulegen",
  },
  {
    title: "Upload to Gallery",
    desc: "R drücken (oder dem On-Screen-Prompt folgen), um den Upload-Dialog zu öffnen.",
    img: images.upload,
    fallbackImg: fallbackImages.upload,
    alt: "Upload to Gallery Prompt",
  },
  {
    title: "Titel & Beschreibung eintragen",
    desc: "Titel und optional Beschreibung ausfüllen. Beides ist im Gallery-Feed sichtbar.",
    img: images.titleDesc,
    fallbackImg: fallbackImages.titleDesc,
    alt: "Titel und Beschreibung beim Upload eingeben",
  },
  {
    title: "Event-Tag aktivieren",
    desc: "Unter dem Beschreibungsfeld den Tag [The Great Faceologist] anklicken, bis er markiert ist. Nicht auf Auto-Selection verlassen.",
    img: images.tag,
    fallbackImg: fallbackImages.tag,
    alt: "Event-Tag im Upload-Dialog aktivieren",
  },
  {
    title: "Publish",
    desc: "Publish-Taste drücken (Standard: Space). Der Eintrag zählt jetzt fürs Event.",
    img: images.tagConfirm,
    fallbackImg: fallbackImages.tagConfirm,
    alt: "Vor dem Publish prüfen, dass der Event-Tag aktiv ist",
  },
];

const consoleSteps = [
  "Pause-Menü → Appearance, um die Garderobe zu öffnen.",
  "Unten auf Appearance wechseln, um von Outfits zum Basis-Look zu gehen.",
  "Edit Face auswählen. Falls es fehlt: einmal zurück und erneut rein, oder Spiel neu starten.",
  "Face/Makeup-Preset wählen → Preview → Upload to Gallery.",
  "Im Upload-Dialog nach unten scrollen und den Tag [The Great Faceologist] aktivieren (zwischen Beschreibung und Privacy-Option).",
  "Publish. Wenn der Tag nur im Makeup-Tab auftaucht, dort einreichen.",
];

const issues = [
  {
    title: "Der Tag [The Great Faceologist] fehlt",
    fixes: [
      "Upload aus dem Makeup-Tab in Edit Face versuchen (dort erscheint der Tag oft zuerst).",
      "Appearance komplett schließen und erneut öffnen: Esc/Pause → Appearance → Edit Face.",
      "Spiel neu starten (der Tag lädt nach Updates gelegentlich nicht sauber).",
      "Sicherstellen, dass du nicht im Outfit-Gallery-Upload bist.",
    ],
  },
  {
    title: "“This work is already applied and cannot be uploaded”",
    fixes: [
      "Einen kleinen Slider/Farbwert ändern, als neues Preset speichern und diese Version hochladen.",
      "Auf ein anderes Preset wechseln, hochladen, danach zurück wechseln.",
      "Das blockiert nur identische Re-Uploads – nicht die Event-Teilnahme.",
    ],
  },
  {
    title: "Daily Cap erreicht",
    fixes: [
      "Das Limit ist mit anderen Appearance-Uploads geteilt (meist ~5/Tag).",
      "Vor jedem Publish prüfen, dass der Event-Tag aktiv ist, sonst verschwendest du Slots.",
      "Preview nutzen, um Framing/Licht zu testen, bevor du einen Upload „verballerst“. ",
    ],
    img: images.dailyCap,
    fallbackImg: fallbackImages.dailyCap,
    alt: "Hinweis zur täglichen Upload-Grenze",
  },
];

const faq = [
  {
    q: "Wo starte ich The Great Faceologist?",
    a: "Öffne das Event Center im Spiel, wenn du es siehst, oder nutze den Gallery/Upload-Weg über Appearance → Edit Face. Wichtig ist, dass du vor dem Publish den Event-Tag aktivierst.",
  },
  {
    q: 'Was zählt als "The Great Faceologist"-Einreichung?',
    a: "Nur Appearance-Uploads (Face/Make-up) aus Edit Face (oder dem Makeup-Tab) zählen – und nur, wenn du vor dem Publish den Tag [The Great Faceologist] aktivierst.",
  },
  {
    q: "Warum fehlt der Tag [The Great Faceologist]?",
    a: "Versuch den Upload aus dem Makeup-Tab, schließe Appearance komplett und öffne es neu, oder starte den Client neu. Prüfe außerdem, dass du nicht aus der Outfit-Gallery hochlädst.",
  },
  {
    q: "Wie viele The Great Faceologist Uploads pro Tag sind möglich?",
    a: "Das Daily Cap ist mit anderen Appearance-Uploads geteilt und eher niedrig (oft um fünf). Prüfe den Tag vor dem Publish, damit du keine Slots mit ungetaggten Posts verschwendest.",
  },
];

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: metadata.title,
  description: metadata.description,
  url: `${baseUrl}${pagePath}`,
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/de` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
    { "@type": "ListItem", position: 3, name: "The Great Faceologist", item: `${baseUrl}${pagePath}` },
  ],
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "So reichst du für The Great Faceologist ein (Where Winds Meet)",
  description:
    "Richtiger Weg: Appearance → Edit Face/Makeup → Preview → Upload to Gallery → Tag [The Great Faceologist] aktivieren → Publish.",
  image: [images.hero],
  inLanguage: "de-DE",
  url: `${baseUrl}${pagePath}`,
  step: pcSteps.map((step) => ({
    "@type": "HowToStep",
    name: step.title,
    text: step.desc,
    image: step.img,
  })),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "de-DE",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const structuredData = [webPageStructuredData, breadcrumbStructuredData, howToStructuredData, faqStructuredData];

export default function GreatFaceologistPageDe() {
  const pcScreenshotItems = pcSteps
    .filter((s) => "img" in s && Boolean(s.img))
    .map((s, idx) => ({
      src: s.img as string,
      fallbackSrc: ("fallbackImg" in s ? (s.fallbackImg as string | undefined) : undefined) ?? undefined,
      alt: (s.alt as string | undefined) ?? s.title,
      caption: `Schritt ${idx + 1}: ${s.title}`,
    }));

  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg3.webp"
            alt="Wuxia-Hintergrund"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Zeitlich begrenztes Event</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Update Dez 2025 · Tag-Schritte unten
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              The Great Faceologist – Teilnahme, Tag setzen, korrekt einreichen
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              The Great Faceologist ist ein Face/Make-up-Contest in Where Winds Meet. Dein Upload zählt nur, wenn er über{" "}
              <strong>Edit Face</strong> veröffentlicht wird und der <strong>[The Great Faceologist]</strong>-Tag aktiv ist.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR: Appearance → Edit Face/Makeup → Preview → Upload → Tag aktivieren → Publish.</li>
              <li>• Outfit-Uploads zählen nicht.</li>
              <li>• Daily Cap ist niedrig – keine Slots verschwenden.</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/de/guides/cosmetics"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Kosmetik & Appearance
              </Link>
              <Link
                href="/de/guides/new-players"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                New-Player-Route
              </Link>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner">
            <FallbackImage
              src={images.hero}
              fallbackSrc={fallbackImages.hero}
              alt="The Great Faceologist Event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Kurzinfos</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {quickFacts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
              <p className="text-sm text-slate-200 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TL;DR */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">TL;DR – So zählt dein Upload</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {tlDr.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </section>

      {/* PC Steps */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-slate-50">Einreichen am PC</h2>
          <span className="text-xs text-slate-500">Achte darauf: Edit Face (nicht Outfit-Gallery)</span>
        </div>
        <ol className="space-y-4 list-decimal list-inside text-sm text-slate-300">
          {pcSteps.map((step) => (
            <li key={step.title}>
              <p className="font-semibold text-slate-50">{step.title}</p>
              <p className="text-slate-300">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm font-semibold text-slate-50">Screenshots (klicken zum Zoomen)</p>
            <p className="text-xs text-slate-400">Tipp: scrollen/pinchen zum Zoomen, ziehen zum Verschieben.</p>
          </div>
          <div className="mt-3">
            <LightboxGallery items={pcScreenshotItems} columns={2} />
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-900/20 p-4 text-xs text-amber-100">
          Tipp: Wenn der Tag nicht auftaucht, im <strong>Makeup</strong>-Tab in Edit Face starten und von dort hochladen. Viele
          Spieler sehen die Checkbox zuerst dort.
        </div>
      </section>

      {/* Console Steps */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Einreichen auf Konsole</h2>
        <ol className="space-y-2 list-decimal list-inside text-sm text-slate-300">
          {consoleSteps.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
      </section>

      {/* Outfit Gallery Explanation */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Warum Outfit-Gallery-Uploads nicht zählen</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Where Winds Meet trennt <strong>Outfit</strong>-Posts von <strong>Appearance</strong>-Posts (Face/Make-up). The Great
          Faceologist ist an Appearance gebunden – deshalb erscheint der Event-Tag im Outfit-Upload nicht.
        </p>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-sm text-slate-200">
          Immer über: <strong>Appearance → Edit Face/Makeup → Upload to Gallery</strong> einreichen.
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">FAQ – The Great Faceologist</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-50">{item.q}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Issues */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Häufige Probleme & Fixes</h2>
        <div className="space-y-4">
          {issues.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                {item.fixes.map((fix) => (
                  <li key={fix}>• {fix}</li>
                ))}
              </ul>
              {"img" in item && item.img ? (
                <div className="mt-3">
                  <LightboxGallery
                    items={[
                      {
                        src: item.img,
                        fallbackSrc: ("fallbackImg" in item ? (item.fallbackImg as string | undefined) : undefined) ?? undefined,
                        alt: ("alt" in item && item.alt) ? item.alt : item.title,
                        caption: "Screenshot (klicken zum Zoomen)",
                      },
                    ]}
                    columns={2}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Verwandte Guides</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/de/guides/cosmetics" className="underline underline-offset-4 hover:text-emerald-100">
              Kosmetik & Appearance – Frisuren, Outfits und Editor-Tipps
            </Link>
          </li>
          <li>
            <Link href="/de/guides/free-outfits" className="underline underline-offset-4 hover:text-emerald-100">
              Gratis-Outfits – 0‑Kosten-Optik freischalten über Events
            </Link>
          </li>
          <li>
            <Link href="/de/guides/new-players" className="underline underline-offset-4 hover:text-emerald-100">
              New-Player-Route – Level-Voraussetzungen und Early Progress
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
