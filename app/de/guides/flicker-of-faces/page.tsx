import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import LightboxGallery from "@/components/LightboxGallery";
import VoucherCalculator from "../../../guides/flicker-of-faces/VoucherCalculator";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import FallbackImage from "@/components/FallbackImage";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

// Base path without language prefix (hreflang helper will add /vn or /de automatically).
const basePath = "/guides/flicker-of-faces";
const pagePath = `/de${basePath}`;

const images = {
  hero: cdn("/guides/flicker-of-faces/flicker-of-faces-preview.png"),
  price: cdn("/guides/flicker-of-faces/flicker-of-faces-price.png"),
  voucherTooltip: cdn("/guides/flicker-of-faces/flicker-of-faces-voucher-tooltip.png"),
  voucherItem: cdn("/guides/flicker-of-faces/flicker-of-faces-voucher-item-details.jpg"),
  verseOfWinter: cdn("/guides/flicker-of-faces/verse-of-winter-event.png"),
  makeupBugPresetSwitch: cdn("/guides/flicker-of-faces/makeup-bug-preset-switch.png"),
};

// Local fallback keeps the original public path so CDN failures can fall back to on-host assets.
const fallbackImages = {
  hero: "/guides/flicker-of-faces/flicker-of-faces-preview.png",
  price: "/guides/flicker-of-faces/flicker-of-faces-price.png",
  voucherTooltip: "/guides/flicker-of-faces/flicker-of-faces-voucher-tooltip.png",
  voucherItem: "/guides/flicker-of-faces/flicker-of-faces-voucher-item-details.jpg",
  verseOfWinter: "/guides/flicker-of-faces/verse-of-winter-event.png",
  makeupBugPresetSwitch: "/guides/flicker-of-faces/makeup-bug-preset-switch.png",
};

export const metadata: Metadata = {
  title: "Flicker of Faces: Preis, Voucher, Preview | Where Winds Meet",
  description:
    "Flicker of Faces in Where Winds Meet: Outfit-Preview, 2580-Perlen Preis-Referenz, Listungszeit 25./26.12.2025 und Voucher-Rechner (10% bis 5x).",
  alternates: buildHreflangAlternates(basePath, { canonicalLanguage: "de" }),
  openGraph: {
    title: "Flicker of Faces: Preis, Voucher, Preview | Where Winds Meet",
    description:
      "Outfit-Preview, 2580-Perlen Preis-Referenz, Listungszeit 25./26.12.2025 und Voucher-Stacking (10% bis zu 5 pro Item).",
    url: `${baseUrl}${pagePath}`,
    siteName: "Where Winds Meet Hub",
    images: [{ url: images.hero, width: 796, height: 790, alt: "Flicker of Faces Outfit-Preview (m/w)" }],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flicker of Faces: Preis, Voucher, Preview | Where Winds Meet",
    description:
      "Outfit-Preview, 2580-Perlen Preis-Referenz, Listungszeit 25./26.12.2025 und Voucher-Stacking (10% bis zu 5 pro Item).",
    images: [images.hero],
  },
};

const quickFacts = [
  { label: "Typ", value: "Shop-Appearance (Outfit)" },
  { label: "Name im Spiel (EN)", value: "Flicker of Faces" },
  { label: "Listungszeit", value: "25. Dez 2025 (viele Patch Notes) — manche Regionen zeigen 26. Dez in Lokalzeit" },
  { label: "Preis (Community-Screenshots)", value: "2580 Perlen — kann je nach Server/Region abweichen" },
  { label: "Voucher", value: "Flicker of Faces Voucher (je 10%, bis zu 5 pro Item stapelbar)" },
  { label: "Max. Rabatt", value: "Bis zu 50% (10% × 5)" },
];

const answerCards = [
  {
    label: "Listungszeit",
    value: (
      <>
        <strong>25. Dez 2025</strong> in vielen Patch Notes (manche Server zeigen <strong>26. Dez</strong> in Lokalzeit).
      </>
    ),
    hint: "Verlass dich auf den Voucher-Tooltip (Lokalzeit deines Servers).",
  },
  {
    label: "Preis-Referenz",
    value: (
      <>
        <strong>2580 Perlen</strong> (Community-Screenshots).
      </>
    ),
    hint: "Vor dem Kauf im Ingame-Shop prüfen.",
  },
  {
    label: "Voucher-Stacking",
    value: (
      <>
        <strong>10% pro Voucher</strong>, stapelbar bis <strong>5</strong> pro Item.
      </>
    ),
    hint: "Maximal 50% Rabatt, falls dein Server volles Stacking erlaubt.",
  },
  {
    label: "Voucher „nicht nutzbar“?",
    value: <>Der Shop-Eintrag ist meistens noch nicht live.</>,
    hint: "Warte, bis im Tooltip „available in the Shop from … (Local time)“ steht.",
  },
];

const faq = [
  {
    q: "Was ist Flicker of Faces in Where Winds Meet?",
    a: "Flicker of Faces ist eine Shop-Appearance (Outfit), die nur für begrenzte Zeit gelistet wird (in vielen Patch Notes: Dez 2025). Spieler bekommen außerdem „Flicker of Faces Voucher“-Items, die einen Rabatt anwenden, sobald das Outfit im Shop verfügbar ist.",
  },
  {
    q: "Wie sieht Flicker of Faces aus?",
    a: "Community-Preview-Sheets zeigen ein rot angehauchtes Outfit mit männlicher und weiblicher Variante (Front/Back). Die Bilder auf dieser Seite helfen als schnelle visuelle Referenz.",
  },
  {
    q: "Wie viel kostet Flicker of Faces?",
    a: "Community-Screenshots zeigen 2580 Perlen. Der Preis kann je nach Server/Region variieren, daher vor dem Kauf im Ingame-Shop prüfen.",
  },
  {
    q: "Wie funktioniert der Flicker of Faces Voucher?",
    a: "Jeder Voucher gibt 10% Rabatt für die Flicker-of-Faces-Appearance. Laut Tooltip kannst du bis zu 5 Voucher pro Item stapeln (bis zu 50% gesamt). Meist ist der Voucher erst nutzbar, wenn Flicker of Faces im Shop wirklich gelistet ist.",
  },
  {
    q: "Warum habe ich Voucher, aber im Shop ist noch nichts?",
    a: "Im Voucher-Tooltip steht „available in the Shop from … (Local time)“. Vor dieser Listungszeit gibt es im Shop noch keine Flicker-of-Faces-Kaufseite (der Voucher wirkt dann „nicht nutzbar“).",
  },
  {
    q: "Ist „Flicker of Faces“ dasselbe wie der Face/Makeup-Flicker-Bug?",
    a: "Nein. „Flicker of Faces“ ist der Name einer Shop-Appearance (Kosmetik-Outfit). Separat suchen manche Spieler nach ‘flicker of faces’, wenn sich ihr Gesicht/Makeup zwischen Creator und Gameplay verändert. Wenn das dein Problem ist, nutze den Workaround weiter unten.",
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
    { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
    { "@type": "ListItem", position: 3, name: "Flicker of Faces", item: `${baseUrl}${pagePath}` },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "de-DE",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const structuredData = [webPageStructuredData, breadcrumbStructuredData, faqStructuredData];

export default function FlickerOfFacesPageDe() {
  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg3.webp"
            alt="Where Winds Meet Hintergrund"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Shop-Appearance (Kosmetik)</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Update Dez 2025 · Voucher- & Listungszeit-Notizen
            </div>
            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Where Winds Meet <span className="text-emerald-200">Flicker of Faces</span> – Preview, Preis, Voucher
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Die Suche nach <strong>„flicker of faces where winds meet“</strong> meint meistens eins von zwei Dingen: (1) die{" "}
              <strong>Flicker of Faces</strong> Shop-Appearance (Outfit) samt Rabatt-Vouchern, oder (2) einen Face/Makeup-„Flicker“
              Bug. Diese Seite deckt beides ab — zuerst das Outfit + die Voucher.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="#preview"
                className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100 hover:border-emerald-300/80"
              >
                Outfit-Preview
              </a>
              <a
                href="#videos"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Videos
              </a>
              <a
                href="#voucher-calculator"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Voucher + Rechner
              </a>
              <a
                href="#makeup-bug"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Face/Makeup-Flicker fix
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {answerCards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">{card.label}</p>
                  <p className="mt-1 text-sm text-slate-100 leading-relaxed">{card.value}</p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{card.hint}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/de/guides/cosmetics"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Kosmetik & Appearance Guide
              </Link>
              <Link
                href="/de/guides/the-great-faceologist"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Face-Editor & Gallery (The Great Faceologist)
              </Link>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner">
            <FallbackImage
              src={images.hero}
              fallbackSrc={fallbackImages.hero}
              alt="Flicker of Faces Outfit-Preview"
              fill
              className="object-contain p-3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section id="quick-facts" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Kurzinfo</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-wide text-emerald-300">{fact.label}</p>
              <p className="mt-1 text-sm text-slate-100 leading-relaxed">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preview gallery */}
      <section id="preview" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Wie sieht Flicker of Faces aus?</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Diese Screenshots stammen aus Community-Previews und Voucher-Tooltips im Spiel. Nutze sie, um das Outfit (m/w, Front/Back)
          schnell zu erkennen und die Voucher-Regeln auf deinem Server zu bestätigen.
        </p>
        <LightboxGallery
          items={[
            {
              src: images.hero,
              fallbackSrc: fallbackImages.hero,
              alt: "Flicker of Faces Preview-Sheet (m/w, Front/Back)",
              caption: "Outfit-Preview (Community)",
            },
            {
              src: images.price,
              fallbackSrc: fallbackImages.price,
              alt: "Flicker of Faces Preis-Screenshot (2580 Perlen, Community)",
              caption: "Preis-Referenz (Community)",
            },
            {
              src: images.verseOfWinter,
              fallbackSrc: fallbackImages.verseOfWinter,
              alt: "Verse of Winter Event-Screen mit Flicker-of-Faces-Voucher-Tooltip",
              caption: "Voucher-Tooltip (Verse of Winter)",
            },
            {
              src: images.voucherItem,
              fallbackSrc: fallbackImages.voucherItem,
              alt: "Flicker of Faces Voucher Item-Details (10% & Shop-Verfügbarkeit)",
              caption: "Voucher-Details (Inventar)",
            },
          ]}
          columns={2}
        />
      </section>

      {/* Videos */}
      <section id="videos" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Videos (optional)</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Lieber ein Video? Diese helfen bei Shop-Rotationen, limitierten Outfits und saisonalen Event-Tracks. Videos laden erst,
          wenn du auf Play klickst.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-50">Kommende Outfits & Frisuren</h3>
            <LiteYouTubeEmbed
              videoId="DBzCeK5Uoxs"
              title="ALL UPCOMING FREE & PAID OUTFITS + HAIRSTYLES Where Winds Meet"
              poster={images.hero}
              analytics={{
                eventName: "video_play",
                params: { page: "flicker_of_faces", placement: "videos_section", video_topic: "outfits_list" },
              }}
            />
            <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
              <p className="leading-relaxed">Achte auf: Shop-Appearances und Outfit-Previews.</p>
              <a
                href="https://www.youtube.com/watch?v=DBzCeK5Uoxs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100 whitespace-nowrap"
              >
                Auf YouTube öffnen
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-50">Verse of Winter: Event-Track & Belohnungen</h3>
            <LiteYouTubeEmbed
              videoId="06VfojQMID0"
              title="New SCARLET SPARROW Outfit in WHERE WINDS MEET ... NEW Verse of Winter Event ! Outfit Showcase"
              poster={images.voucherTooltip}
              analytics={{
                eventName: "video_play",
                params: { page: "flicker_of_faces", placement: "videos_section", video_topic: "verse_of_winter" },
              }}
            />
            <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
              <p className="leading-relaxed">Achte auf: Event-Tracks, Rabatte und limitierte Outfit-Showcases.</p>
              <a
                href="https://www.youtube.com/watch?v=06VfojQMID0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100 whitespace-nowrap"
              >
                Auf YouTube öffnen
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Embeds nutzen YouTubes „privacy-enhanced mode“ (<span className="font-semibold">youtube-nocookie.com</span>) und laden
          erst nach Klick auf Play.
        </p>
      </section>

      {/* Price */}
      <section id="price" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Preis (und was „2580“ bedeutet)</h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Community-Screenshots zeigen <strong>Flicker of Faces</strong> zu <strong>2580 Perlen</strong>. Sieh das als Referenz:
            Preise können je nach Server/Region und Aktionen variieren.
          </p>
          <p className="text-slate-200">
            Tipp: Sobald der Shop-Eintrag live ist, prüfe immer den Endpreis im Kaufbildschirm (besonders beim Voucher-Stacking).
          </p>
        </div>
      </section>

      {/* Voucher */}
      <section id="voucher" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Flicker of Faces Voucher (so funktioniert’s)</h2>
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-semibold text-slate-50">Voucher-Regeln (Stacking)</h3>
            <p>
              Laut Tooltip: <strong>10% Rabatt pro Voucher</strong> und{" "}
              <strong>bis zu 5 Voucher pro Item stapelbar</strong> — maximal also <strong>50%</strong>.
            </p>
            <div className="rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-100 font-semibold">Häufiger Grund für „nicht nutzbar“</p>
              <p className="mt-1 text-xs text-emerald-200">
                In der Voucher-Beschreibung steht <em>„available in the Shop from … (Local time)“</em>. Bis zu dieser Zeit und
                bis das Outfit gelistet ist, zeigt der Shop nichts dafür an.
              </p>
            </div>
            <h3 className="text-base font-semibold text-slate-50">So nutzt du Voucher (kurz)</h3>
            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>Voucher im Event-Track holen (viele berichten von „Verse of Winter“).</li>
              <li>Auf die Zeit im Voucher-Tooltip warten (Server-Lokalzeit).</li>
              <li>Shop-Seite von Flicker of Faces öffnen und Voucher beim Checkout anwenden (falls angeboten).</li>
              <li>Endpreis vor dem Kauf bestätigen.</li>
            </ol>
            <p className="text-xs text-slate-400">
              Hinweis: Der Tooltip bestätigt das Stapeln von Vouchern untereinander. Ob es zusätzlich mit anderen Shop-Rabatten
              kombiniert wird, kann variieren — prüfe den Endpreis im Spiel.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300 mb-3">Voucher-Tooltip</p>
            <LightboxGallery
              items={[
                {
                  src: images.voucherTooltip,
                  fallbackSrc: fallbackImages.voucherTooltip,
                  alt: "Flicker of Faces Voucher Tooltip (10% & Stack-Limit)",
                  caption: "10% pro Voucher; bis zu 5",
                },
              ]}
              columns={1}
            />
          </div>
        </div>

        <div id="voucher-calculator" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-50">Voucher-Endpreis-Rechner</h3>
            <p className="text-sm text-slate-300">
              Schnelle Schätzung: Trage den Grundpreis deines Servers ein und wähle, wie viele Voucher du hast (0–5).
            </p>
          </div>
          <VoucherCalculator defaultBasePrice={2580} maxVouchers={5} voucherPercent={10} />
        </div>
      </section>

      {/* Listing time */}
      <section id="listing-time" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Listungszeit: 25. Dez vs 26. Dez (warum beides auftaucht)</h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Viele Patch Notes nennen <strong>25. Dezember 2025</strong>. Manche Spieler sehen jedoch{" "}
            <strong>26. Dezember</strong> im Voucher-Tooltip — weil der Tooltip die exakte Zeit in{" "}
            <strong>Lokalzeit</strong> anzeigt und Server/Regionen unterschiedlich „umklappen“.
          </p>
          <p className="text-slate-200">
            Best Practice: Verlass dich auf den <strong>Voucher-Tooltip</strong> (Serverzeit) und checke den Shop nach Ablauf
            dieser Zeit.
          </p>
        </div>
      </section>

      {/* Bug clarification */}
      <section id="makeup-bug" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Wenn du den „Face/Makeup-Flicker“-Bug meinst</h2>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              Manche suchen nach „flicker of faces“, weil ihr Gesicht/Makeup im Creator richtig aussieht, im Gameplay aber wechselt
              (fehlende Makeup-Layer, andere Shading, oder „Snapping“ auf ein anderes Preset).
            </p>
            <p className="text-slate-200 font-semibold">Schneller PC-Workaround (hilft oft):</p>
            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>Im Spiel <strong>Appearance</strong> öffnen.</li>
              <li>Ein <strong>anderes Face-Preset</strong> auswählen und vollständig laden lassen.</li>
              <li>Ohne Speichern wieder zurückgehen.</li>
              <li>Dein gewünschtes Face/Makeup-Preset erneut auswählen (kann fehlende Layer „neu anwenden“).</li>
            </ol>
            <p className="text-xs text-slate-400">
              Wenn du Face-Looks für Events einreichen willst, hilft dieser Guide:{" "}
              <Link href="/de/guides/the-great-faceologist" className="underline underline-offset-4 hover:text-emerald-100">
                Einreichen & richtig taggen
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300 mb-3">Preset-Wechsel-Workaround</p>
            <LightboxGallery
              items={[
                {
                  src: images.makeupBugPresetSwitch,
                  fallbackSrc: fallbackImages.makeupBugPresetSwitch,
                  alt: "Appearance-Menü mit Face-Presets (Workaround-Referenz)",
                  caption: "Preset wechseln, dann zurück",
                },
              ]}
              columns={1}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
              <summary className="cursor-pointer select-none text-sm font-semibold text-slate-50">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
        <details className="group">
          <summary className="cursor-pointer select-none text-lg font-bold text-slate-50">Quellen (optional)</summary>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Zum Gegenchecken von Listungszeiten und Bug-Workarounds sind diese Quellen hilfreich. Verlass dich am Ende immer auf
            deinen Ingame-Shop und den Voucher-Tooltip deines Servers.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-200">
            <li>
              •{" "}
              <a
                href="https://www.dexerto.com/wikis/where-winds-meet/patch-notes/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Dexerto: Patch Notes (listet Shop Appearance – Flicker of Faces, 25.12.2025)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://game8.co/games/Where-Winds-Meet/archives/570580"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Game8: Update 1.1 Patch Notes (listet Shop Appearance – Flicker of Faces, 25.12.2025)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://www.reddit.com/r/wherewindsmeet_/comments/1pq3rc5/about_the_flicker_of_faces_appearance/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Reddit: About the Flicker of Faces appearance (Community-Screenshots)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://www.reddit.com/r/wherewindsmeet_/comments/1pq4oti/how_flicker_of_faces_appearence_does_looks_like/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Reddit: How Flicker of Faces looks like and price (Community)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://allthings.how/where-winds-meets-disappearing-makeup-bug-explained/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                AllThings.How: Erklärung zum Makeup/Face-Bug + Workarounds
              </a>
            </li>
          </ul>
        </details>
      </section>

      {/* Related */}
      <section id="related-guides" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Ähnliche Guides</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/de/guides/cosmetics" className="underline underline-offset-4 hover:text-emerald-100">
              Kosmetik & Appearance – Outfits, Frisuren und Shop-Tipps
            </Link>
          </li>
          <li>
            <Link href="/de/guides/free-outfits" className="underline underline-offset-4 hover:text-emerald-100">
              Gratis-Outfits – kostenlose Unlock-Routen
            </Link>
          </li>
          <li>
            <Link href="/de/guides/patch-notes" className="underline underline-offset-4 hover:text-emerald-100">
              Patch Notes – Updates und Shop-Rotationen verfolgen
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
