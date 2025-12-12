import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import LightboxGallery from "@/components/LightboxGallery";
import FallbackImage from "@/components/FallbackImage";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const local = (path: string) => path;
const slug = "/guides/the-great-faceologist";

const images = {
  // Article screenshots saved locally from allthings.how
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

const fallbackImages = {
  hero: local("/guides/the-great-faceologist/hero.webp"),
  openAppearance: local("/guides/the-great-faceologist/step-1-open-appearance.webp"),
  appearanceMenu: local("/guides/the-great-faceologist/step-2-switch-appearance-tab.webp"),
  editFace: local("/guides/the-great-faceologist/step-3-edit-face.webp"),
  choosePreset: local("/guides/the-great-faceologist/step-4-choose-preset.webp"),
  preview: local("/guides/the-great-faceologist/step-5-preview.webp"),
  upload: local("/guides/the-great-faceologist/step-6-upload-to-gallery.webp"),
  titleDesc: local("/guides/the-great-faceologist/step-7-title-description.webp"),
  tag: local("/guides/the-great-faceologist/step-8-select-event-tag.webp"),
  tagConfirm: local("/guides/the-great-faceologist/step-9-publish.webp"),
  dailyCap: local("/guides/the-great-faceologist/daily-upload-cap.webp"),
};

export const metadata: Metadata = {
  title: "The Great Faceologist (Dec 2025) – How to Submit",
  description:
    "Where Winds Meet The Great Faceologist (Dec 2025): requirements, correct upload path, how to tag your submission, daily cap, and common fixes.",
  alternates: buildHreflangAlternates(slug),
  openGraph: {
    title: "The Great Faceologist (Dec 2025) – How to Submit",
    description:
      "Complete guide to The Great Faceologist event: enter via Edit Face, tag your upload correctly, and avoid daily cap mistakes.",
    url: `${baseUrl}${slug}`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: images.hero,
        width: 1317,
        height: 741,
        alt: "The Great Faceologist event banner in Where Winds Meet",
      },
      {
        url: `${baseUrl}${fallbackImages.hero}`,
        width: 1317,
        height: 741,
        alt: "The Great Faceologist event banner in Where Winds Meet (fallback)",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Faceologist (Dec 2025) – How to Submit",
    description:
      "Join, tag, and submit your face/make-up preset correctly for The Great Faceologist contest.",
    images: [images.hero, `${baseUrl}${fallbackImages.hero}`],
  },
};

const quickFacts = [
  { label: "Official name", value: "The Great Faceologist" },
  { label: "Event window", value: "Dec 11–31, 2025 (UTC)" },
  { label: "Requirements", value: "Level 5 + complete Qinghe main chapter “Another New Wing”" },
  { label: "Event type", value: "Limited-time face & make-up customization contest" },
  {
    label: "Where to submit",
    value: "Appearance → Edit Face / Makeup → Preview → Upload to Gallery",
  },
  { label: "What counts", value: "Only uploads tagged with [The Great Faceologist]" },
  { label: "Daily cap", value: "Up to ~5 appearance uploads per day (shared limit)" },
];

const tlDr = [
  "Open Appearance from the main menu, then switch to the bottom “Appearance” tab (not Outfits).",
  "Go to Edit Face (or Makeup), pick or tweak a preset, then Preview and Upload to Gallery.",
  "In the upload dialog, manually tick the [The Great Faceologist] tag (this is what makes it a \"The Great Faceologist\" entry).",
  "Outfit gallery uploads never count for this event.",
];

const pcSteps = [
  {
    title: "Open Appearance (wardrobe)",
    desc: "Press Esc → Appearance to enter the wardrobe.",
    img: images.openAppearance,
    fallbackImg: fallbackImages.openAppearance,
    alt: "Opening the Appearance menu from the main screen",
  },
  {
    title: "Switch to base Appearance tab",
    desc: "Click the Appearance button at the bottom of the wardrobe to move from outfits to your character’s base look.",
    img: images.appearanceMenu,
    fallbackImg: fallbackImages.appearanceMenu,
    alt: "Switching to Appearance from the wardrobe menu",
  },
  {
    title: "Enter Edit Face",
    desc: "Click Edit Face in the lower-right. The camera zooms in on your face presets/sliders.",
    img: images.editFace,
    fallbackImg: fallbackImages.editFace,
    alt: "Edit Face button in the Appearance editor",
  },
  {
    title: "Choose or adjust a look",
    desc: "Pick a face preset or go to Makeup and tune details. Save if you want a new preset.",
    img: images.choosePreset,
    fallbackImg: fallbackImages.choosePreset,
    alt: "Choosing or adjusting a face or make-up preset",
  },
  {
    title: "Preview your shot",
    desc: "Click Preview and frame your character’s face the way you want it to appear in the gallery.",
    img: images.preview,
    fallbackImg: fallbackImages.preview,
    alt: "Previewing your face before upload",
  },
  {
    title: "Upload to Gallery",
    desc: "Press R (or the on‑screen Upload prompt) to open the gallery upload dialog.",
    img: images.upload,
    fallbackImg: fallbackImages.upload,
    alt: "Upload to Gallery button prompt",
  },
  {
    title: "Add title/description",
    desc: "Fill in a title and optional description. These show publicly in the gallery.",
    img: images.titleDesc,
    fallbackImg: fallbackImages.titleDesc,
    alt: "Entering title and description for your submission",
  },
  {
    title: "Tick the event tag",
    desc: "Under the description box, click the [The Great Faceologist] tag so it highlights. It is not always pre‑selected.",
    img: images.tag,
    fallbackImg: fallbackImages.tag,
    alt: "The Great Faceologist event tag in the upload dialog",
  },
  {
    title: "Publish",
    desc: "Press the publish key (Space by default). Your entry is now counted for the event.",
    img: images.tagConfirm,
    fallbackImg: fallbackImages.tagConfirm,
    alt: "Confirm the Great Faceologist tag is selected before publishing",
  },
];

const consoleSteps = [
  "Pause menu → Appearance to open wardrobe.",
  "Move to the bottom Appearance option to switch from outfits to base appearance.",
  "Select Edit Face. If missing, back out and re‑enter, or restart the game.",
  "Pick a face/make-up preset → Preview → Upload to Gallery.",
  "Scroll in the upload dialog until you see [The Great Faceologist] tag; confirm once so it changes state.",
  "Publish. If the tag only shows on Makeup uploads, submit from that tab instead.",
];

const issues = [
  {
    title: "The event tag is missing",
    fixes: [
      "Try uploading from the Makeup tab inside Edit Face (many players only see the tag there).",
      "Close Appearance completely and reopen via Esc/Pause, then navigate back to Edit Face.",
      "Restart the client; the tag can fail to load right after an update.",
      "Double‑check you are not in the Outfit gallery path.",
    ],
  },
  {
    title: "“This work is already applied and cannot be uploaded”",
    fixes: [
      "Nudge a small slider/color and save as a new preset, then upload that version.",
      "Switch to another preset, upload it, then switch back.",
      "This error only blocks re‑uploading an identical look; it doesn’t affect event eligibility.",
    ],
  },
  {
    title: "You hit the daily upload cap",
    fixes: [
      "The cap is shared with other appearance uploads; expect about five posts/day.",
      "Always verify the event tag is highlighted before publishing so you don’t waste slots.",
      "Use Preview to check framing/lighting before committing an upload.",
    ],
    img: images.dailyCap,
    fallbackImg: fallbackImages.dailyCap,
    alt: "Daily upload cap notice for Great Faceologist entries",
  },
];

const faq = [
  {
    q: "Where do I start The Great Faceologist?",
    a: "Open the in-game event center if you see it, or use the Gallery/Upload flow from Appearance → Edit Face. The key is that your final upload must be tagged for the event.",
  },
  {
    q: 'What counts as a "The Great Faceologist" submission?',
    a: "Only Appearance uploads (face/make-up) published from Edit Face (or the Makeup tab) count, and only if you tick the [The Great Faceologist] tag before you publish.",
  },
  {
    q: "Why is the [The Great Faceologist] tag missing?",
    a: "Try uploading from the Makeup tab, fully close/reopen Appearance, or restart the game client. Also confirm you’re not uploading from the Outfit gallery path.",
  },
  {
    q: "How many The Great Faceologist entries can I upload per day?",
    a: "The daily cap is shared with other appearance uploads and is low (often around five). Double-check the tag is selected so you don’t waste uploads on untagged posts.",
  },
];

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: metadata.title,
  description: metadata.description,
  url: `${baseUrl}${slug}`,
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
    { "@type": "ListItem", position: 3, name: "The Great Faceologist", item: `${baseUrl}${slug}` },
  ],
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to submit for The Great Faceologist (Where Winds Meet)",
  description:
    "Step-by-step route to submit: Appearance → Edit Face/Makeup → Preview → Upload to Gallery → tick [The Great Faceologist] → Publish.",
  image: [images.hero],
  inLanguage: "en-US",
  url: `${baseUrl}${slug}`,
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
  inLanguage: "en-US",
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

export default function GreatFaceologistPage() {
  const pcScreenshotItems = pcSteps
    .filter((s) => "img" in s && Boolean(s.img))
    .map((s, idx) => ({
      src: s.img as string,
      fallbackSrc: ("fallbackImg" in s ? (s.fallbackImg as string | undefined) : undefined) ?? undefined,
      alt: (s.alt as string | undefined) ?? s.title,
      caption: `Step ${idx + 1}: ${s.title}`,
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
            alt="Where Winds Meet background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Limited‑Time Event</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Updated Dec 2025 · The Great Faceologist tagging steps below
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              The Great Faceologist – How to Join, Tag, and Submit
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              The Great Faceologist is a face & make‑up customization contest in Where Winds Meet. Your upload only counts if it is
              published from <strong>Edit Face</strong> and manually tagged with <strong>[The Great Faceologist]</strong>.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR: Appearance → Edit Face/Makeup → Preview → Upload → tick the event tag → Publish.</li>
              <li>• Outfit gallery posts never count for The Great Faceologist.</li>
              <li>• Daily cap is low, so don’t waste uploads without the tag.</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/guides/cosmetics"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Cosmetics & appearance tips
              </Link>
              <Link
                href="/guides/new-players"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                New player progression
              </Link>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner">
            <FallbackImage
              src={images.hero}
              fallbackSrc={fallbackImages.hero}
              alt="The Great Faceologist event screen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Quick Facts</h2>
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
        <h2 className="text-2xl font-bold text-slate-50">TL;DR Submission Route</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {tlDr.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </section>

      {/* PC Steps */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-slate-50">How to Submit on PC</h2>
          <span className="text-xs text-slate-500">Make sure you’re in Edit Face, not Outfit gallery</span>
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
            <p className="text-sm font-semibold text-slate-50">Screenshots (click to zoom)</p>
            <p className="text-xs text-slate-400">Tip: scroll/pinch to zoom, drag to pan.</p>
          </div>
          <div className="mt-3">
            <LightboxGallery items={pcScreenshotItems} columns={2} />
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-900/20 p-4 text-xs text-amber-100">
          Tip: If the <strong>[The Great Faceologist]</strong> tag doesn’t appear, switch to the <strong>Makeup</strong> tab inside Edit
          Face and upload from there. Many players report the checkbox shows up only on make‑up uploads.
        </div>
      </section>

      {/* Console Steps */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">How to Submit on Console</h2>
        <ol className="space-y-2 list-decimal list-inside text-sm text-slate-300">
          {consoleSteps.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
      </section>

      {/* Outfit Gallery Explanation */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Why Outfit Gallery Uploads Don’t Count</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Where Winds Meet separates <strong>Outfit</strong> posts from <strong>Appearance</strong> (face/make‑up) posts. The Great
          Faceologist contest is tied only to Appearance uploads, so the event tag never appears on the outfit upload screen.
        </p>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-sm text-slate-200">
          Always submit via: <strong>Appearance → Edit Face/Makeup → Upload to Gallery</strong>.
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">The Great Faceologist FAQ</h2>
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
        <h2 className="text-2xl font-bold text-slate-50">Common Issues & Fixes</h2>
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
                        caption: "Screenshot (click to zoom)",
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
        <h2 className="text-2xl font-bold text-slate-50">Related Guides</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/guides/cosmetics" className="underline underline-offset-4 hover:text-emerald-100">
              Cosmetics & Appearance – hairstyles, outfits, and editor tricks
            </Link>
          </li>
          <li>
            <Link href="/guides/free-outfits" className="underline underline-offset-4 hover:text-emerald-100">
              Free Outfits – zero‑cost appearance unlocks from events
            </Link>
          </li>
          <li>
            <Link href="/guides/new-players" className="underline underline-offset-4 hover:text-emerald-100">
              New Players Route – level requirements and early progression
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
