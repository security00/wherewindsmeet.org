import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import LightboxGallery from "@/components/LightboxGallery";
import VoucherCalculator from "./VoucherCalculator";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import FallbackImage from "@/components/FallbackImage";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const local = (path: string) => path;
const slug = "/guides/flicker-of-faces";

const images = {
  hero: cdn("/guides/flicker-of-faces/flicker-of-faces-preview.png"),
  price: cdn("/guides/flicker-of-faces/flicker-of-faces-price.png"),
  voucherTooltip: cdn("/guides/flicker-of-faces/flicker-of-faces-voucher-tooltip.png"),
  voucherItem: cdn("/guides/flicker-of-faces/flicker-of-faces-voucher-item-details.jpg"),
  verseOfWinter: cdn("/guides/flicker-of-faces/verse-of-winter-event.png"),
  makeupBugPresetSwitch: cdn("/guides/flicker-of-faces/makeup-bug-preset-switch.png"),
};

const fallbackImages = {
  hero: local("/guides/flicker-of-faces/flicker-of-faces-preview.png"),
  price: local("/guides/flicker-of-faces/flicker-of-faces-price.png"),
  voucherTooltip: local("/guides/flicker-of-faces/flicker-of-faces-voucher-tooltip.png"),
  voucherItem: local("/guides/flicker-of-faces/flicker-of-faces-voucher-item-details.jpg"),
  verseOfWinter: local("/guides/flicker-of-faces/verse-of-winter-event.png"),
  makeupBugPresetSwitch: local("/guides/flicker-of-faces/makeup-bug-preset-switch.png"),
};

export const metadata: Metadata = {
  title: "Flicker of Faces: Price, Voucher, Preview | Where Winds Meet",
  description:
    "Flicker of Faces in Where Winds Meet: outfit preview, 2580 pearls price reference, Dec 25/26 listing time, and voucher stacking calculator (10% up to 5).",
  alternates: buildHreflangAlternates(slug),
  openGraph: {
    title: "Flicker of Faces: Price, Voucher, Preview | Where Winds Meet",
    description:
      "Flicker of Faces in Where Winds Meet: outfit preview, 2580 pearls price reference, Dec 25/26 listing time, and voucher stacking calculator (10% up to 5).",
    url: `${baseUrl}${slug}`,
    siteName: "Where Winds Meet Hub",
    images: [
      { url: images.hero, width: 796, height: 790, alt: "Flicker of Faces outfit preview (male/female)" },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flicker of Faces: Price, Voucher, Preview | Where Winds Meet",
    description:
      "Flicker of Faces in Where Winds Meet: outfit preview, 2580 pearls price reference, Dec 25/26 listing time, and voucher stacking calculator (10% up to 5).",
    images: [images.hero],
  },
};

const quickFacts = [
  { label: "Type", value: "Shop Appearance (outfit)" },
  { label: "Name in-game (EN)", value: "Flicker of Faces" },
  { label: "Listing time", value: "Dec 25, 2025 (many patch notes) — some regions show Dec 26 in local time" },
  { label: "Price (community screenshots)", value: "2580 Pearls — may vary by server/region" },
  { label: "Voucher", value: "Flicker of Faces Voucher (10% each, stack up to 5 per item)" },
  { label: "Max voucher discount", value: "Up to 50% (10% × 5)" },
];

const answerCards = [
  {
    label: "Listing time",
    value: (
      <>
        <strong>Dec 25, 2025</strong> in many patch notes (some servers show <strong>Dec 26</strong> in local time).
      </>
    ),
    hint: "Trust your voucher tooltip for your server’s local time.",
  },
  {
    label: "Price reference",
    value: (
      <>
        <strong>2580 pearls</strong> (community screenshots).
      </>
    ),
    hint: "Confirm in your in-game shop before buying.",
  },
  {
    label: "Voucher stacking",
    value: (
      <>
        <strong>10% off each</strong>, stack up to <strong>5</strong> per item.
      </>
    ),
    hint: "Max voucher discount is 50% if your server allows full stacking.",
  },
  {
    label: "Voucher “not usable”?",
    value: <>The shop page usually isn’t live yet.</>,
    hint: "Wait until the voucher shows “available in the Shop from … (Local time)”.",
  },
];

const faq = [
  {
    q: "What is Flicker of Faces in Where Winds Meet?",
    a: "Flicker of Faces is a Shop Appearance (outfit) listed for a limited time (Dec 2025 in many patch notes). Players also receive “Flicker of Faces Voucher” items that apply a discount when the outfit becomes available in the shop.",
  },
  {
    q: "What does Flicker of Faces look like?",
    a: "Community preview sheets show a red-themed outfit with both male and female variants (front/back). See the images on this page for a quick visual reference.",
  },
  {
    q: "How much does Flicker of Faces cost?",
    a: "Community screenshots show 2580 Pearls. Price can vary by server/region, so confirm on your in-game shop screen before buying.",
  },
  {
    q: "How does Flicker of Faces Voucher work?",
    a: "Each voucher is a 10% discount coupon for the Flicker of Faces appearance. The tooltip states you can stack up to 5 coupons per item (up to 50% total). You typically can’t use it until Flicker of Faces is actually listed in the shop.",
  },
  {
    q: "Why do I have the voucher but nothing shows in the shop yet?",
    a: "The voucher tooltip includes a “available in the Shop from … (Local time)” line. Until that listing time, the store won’t show the Flicker of Faces purchase page (so the voucher appears unusable).",
  },
  {
    q: "Is “Flicker of Faces” the same thing as the face/makeup flicker bug?",
    a: "No. The “Flicker of Faces” Shop Appearance is a cosmetic outfit. Separately, some players search ‘flicker of faces’ when their character’s face/makeup changes between the creator and gameplay. If that’s your issue, use the workaround section below.",
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
    { "@type": "ListItem", position: 3, name: "Flicker of Faces", item: `${baseUrl}${slug}` },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en-US",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const structuredData = [webPageStructuredData, breadcrumbStructuredData, faqStructuredData];

export default function FlickerOfFacesPage() {
  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg3.webp"
            alt="Where Winds Meet background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Shop Appearance (Cosmetic)</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Updated Dec 2025 · Voucher + listing-time notes
            </div>
            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Where Winds Meet <span className="text-emerald-200">Flicker of Faces</span> – Preview, Price, Voucher
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Searching <strong>“flicker of faces where winds meet”</strong> usually means one of two things: (1) the{" "}
              <strong>Flicker of Faces</strong> Shop Appearance (outfit) and its discount vouchers, or (2) a face/makeup{" "}
              “flicker” bug. This page covers both — starting with the cosmetic outfit.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="#preview"
                className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100 hover:border-emerald-300/80"
              >
                Outfit preview
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
                Voucher rules + calculator
              </a>
              <a
                href="#makeup-bug"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Face/makeup flicker bug fix
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
                href="/guides/cosmetics"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Cosmetics & appearance guide
              </Link>
              <Link
                href="/guides/the-great-faceologist"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Face editor & gallery (The Great Faceologist)
              </Link>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner">
            <FallbackImage
              src={images.hero}
              fallbackSrc={fallbackImages.hero}
              alt="Flicker of Faces appearance preview image"
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
        <h2 className="text-2xl font-bold text-slate-50">Quick Facts</h2>
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
        <h2 className="text-2xl font-bold text-slate-50">What Flicker of Faces looks like</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          These screenshots come from community previews and in-game voucher tooltips. Use them to quickly identify the outfit
          (male/female variants) and confirm the voucher rules on your server.
        </p>
        <LightboxGallery
          items={[
            {
              src: images.hero,
              fallbackSrc: fallbackImages.hero,
              alt: "Flicker of Faces outfit preview sheet (male/female, front/back)",
              caption: "Outfit preview sheet (community)",
            },
            {
              src: images.price,
              fallbackSrc: fallbackImages.price,
              alt: "Flicker of Faces price screenshot showing 2580 pearls (community)",
              caption: "Price reference (community)",
            },
            {
              src: images.verseOfWinter,
              fallbackSrc: fallbackImages.verseOfWinter,
              alt: "Verse of Winter event screen showing Flicker of Faces Voucher tooltip",
              caption: "Voucher tooltip (Verse of Winter)",
            },
            {
              src: images.voucherItem,
              fallbackSrc: fallbackImages.voucherItem,
              alt: "Flicker of Faces Voucher item details (shows 10% discount and shop availability time)",
              caption: "Voucher item details (Bag/Inventory)",
            },
          ]}
          columns={2}
        />
      </section>

      {/* Videos */}
      <section id="videos" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Videos (optional)</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Prefer a video walkthrough? These are useful for seeing shop rotations, limited outfits, and how seasonal event tracks
          work. Videos load only when you click play.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-50">Upcoming outfits & hairstyles</h3>
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
              <p className="leading-relaxed">Watch for: shop appearances and upcoming outfit previews.</p>
              <a
                href="https://www.youtube.com/watch?v=DBzCeK5Uoxs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100 whitespace-nowrap"
              >
                Open on YouTube
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-50">Verse of Winter event track & rewards</h3>
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
              <p className="leading-relaxed">Watch for: event tracks, discounts, and limited-time outfit showcases.</p>
              <a
                href="https://www.youtube.com/watch?v=06VfojQMID0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100 whitespace-nowrap"
              >
                Open on YouTube
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Embeds use YouTube’s privacy-enhanced mode (<span className="font-semibold">youtube-nocookie.com</span>) and only load
          after you click play.
        </p>
      </section>

      {/* Price */}
      <section id="price" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Price (and what “2580” means)</h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Community screenshots show <strong>Flicker of Faces</strong> priced at <strong>2580 Pearls</strong>.
            Treat this as a reference point: prices can vary by server/region and special promotions.
          </p>
          <p className="text-slate-200">
            Tip: when the shop page is live, always confirm the final price on the purchase screen (especially if you’re stacking
            vouchers).
          </p>
        </div>
      </section>

      {/* Voucher */}
      <section id="voucher" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Flicker of Faces Voucher (how it works)</h2>
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-semibold text-slate-50">Voucher rules (stacking)</h3>
            <p>
              The voucher tooltip states: <strong>10% discount per voucher</strong>, and{" "}
              <strong>up to 5 coupons can be stacked per item</strong> — meaning the maximum voucher discount is{" "}
              <strong>50%</strong>.
            </p>
            <div className="rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-100 font-semibold">Common “why can’t I use it?” reason</p>
              <p className="mt-1 text-xs text-emerald-200">
                The voucher item description includes an <em>“available in the Shop from … (Local time)”</em> line. Until your
                server hits that time and the outfit is listed, the shop will show nothing for it.
              </p>
            </div>
            <h3 className="text-base font-semibold text-slate-50">How to use vouchers (quick steps)</h3>
            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>Get vouchers from the event track (many players report earning them in “Verse of Winter”).</li>
              <li>Wait for the listing time shown in your voucher tooltip (local time on your server).</li>
              <li>Open the shop page for Flicker of Faces and apply the voucher(s) at checkout if prompted.</li>
              <li>Confirm the final discounted price before you buy.</li>
            </ol>
            <p className="text-xs text-slate-400">
              Note: the tooltip confirms stacking vouchers with each other. Whether it stacks with other shop discounts can vary —
              verify on your in-game purchase screen.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300 mb-3">Voucher tooltip</p>
            <LightboxGallery
              items={[
                {
                  src: images.voucherTooltip,
                  fallbackSrc: fallbackImages.voucherTooltip,
                  alt: "Flicker of Faces Voucher tooltip close-up showing 10% discount and stack limit",
                  caption: "10% per voucher; up to 5 stack",
                },
              ]}
              columns={1}
            />
          </div>
        </div>

        <div id="voucher-calculator" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-50">Voucher final price calculator</h3>
            <p className="text-sm text-slate-300">
              Quick estimate: enter your server’s base price, then select how many vouchers you have (0–5).
            </p>
          </div>
          <VoucherCalculator defaultBasePrice={2580} maxVouchers={5} voucherPercent={10} />
        </div>
      </section>

      {/* Listing time */}
      <section id="listing-time" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Listing time: Dec 25 vs Dec 26 (why both show up)</h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Many patch notes list the shop appearance as <strong>December 25, 2025</strong>. Some players, however, see{" "}
            <strong>December 26</strong> in the voucher tooltip — because the tooltip shows the exact time in{" "}
            <strong>local time</strong> and servers/regions can roll over at different hours.
          </p>
          <p className="text-slate-200">
            Best practice: trust the <strong>voucher tooltip</strong> (it shows the time for your server) and then check the shop
            once you pass that timestamp.
          </p>
        </div>
      </section>

      {/* Bug clarification */}
      <section id="makeup-bug" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">If you meant the “face/makeup flicker” bug</h2>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              Some players search “flicker of faces” because their face/makeup looks correct in the creator, then changes in
              gameplay (missing makeup layers, different shading, or “snapping” to another preset).
            </p>
            <p className="text-slate-200 font-semibold">Quick PC workaround (often helps):</p>
            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>Open <strong>Appearance</strong> in-game.</li>
              <li>Select a <strong>different face preset</strong> and let it fully load.</li>
              <li>Back out without saving that preset.</li>
              <li>Re-select your intended face/makeup preset (it can “reapply” missing layers).</li>
            </ol>
            <p className="text-xs text-slate-400">
              If you’re trying to submit face looks to events, our guide for The Great Faceologist is here:{" "}
              <Link href="/guides/the-great-faceologist" className="underline underline-offset-4 hover:text-emerald-100">
                How to submit & tag uploads
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300 mb-3">Preset switch workaround</p>
            <LightboxGallery
              items={[
                {
                  src: images.makeupBugPresetSwitch,
                  fallbackSrc: fallbackImages.makeupBugPresetSwitch,
                  alt: "Appearance menu showing different face presets (workaround reference screenshot)",
                  caption: "Switch presets once, then switch back",
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
              <summary className="cursor-pointer select-none text-sm font-semibold text-slate-50">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
        <details className="group">
          <summary className="cursor-pointer select-none text-lg font-bold text-slate-50">Sources (optional)</summary>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            For cross-checking listing times and bug workarounds, these community/guide sources are helpful. Always trust your
            in-game shop screen and your voucher tooltip for your server.
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
                Dexerto: Patch notes (lists Shop Appearance – Flicker of Faces, Dec 25, 2025)
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
                Game8: Update 1.1 patch notes (lists Shop Appearance – Flicker of Faces, Dec 25, 2025)
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
                Reddit: About the Flicker of Faces appearance (community screenshots)
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
                Reddit: How Flicker of Faces looks like and price (community)
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
                AllThings.How: disappearing makeup / face bug explanation + workarounds
              </a>
            </li>
          </ul>
        </details>
      </section>

      {/* Related */}
      <section id="related-guides" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Related Guides</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/guides/cosmetics" className="underline underline-offset-4 hover:text-emerald-100">
              Cosmetics & Appearance – hairstyles, outfits, and store tips
            </Link>
          </li>
          <li>
            <Link href="/guides/free-outfits" className="underline underline-offset-4 hover:text-emerald-100">
              Free Outfits – zero-cost appearance unlock routes
            </Link>
          </li>
          <li>
            <Link href="/guides/patch-notes" className="underline underline-offset-4 hover:text-emerald-100">
              Patch Notes – how to track updates and shop rotations
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
