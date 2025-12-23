import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

const redditThreadUrl =
  "https://www.reddit.com/r/wherewindsmeet_/comments/1pj4qbn/daily_assistant_desktop_widget/";

const faq = [
  {
    q: "Is there a downloadable Windows “Where Winds Meet desktop widget”?",
    a: "Not that we can reliably point to as an official PC widget. Most “daily assistant widget” mentions refer to the mobile app’s home-screen widget. On Windows, the practical equivalent is a pinned timer/checklist window.",
  },
  {
    q: "What is the fastest setup if I just want to stop missing resets?",
    a: "Keep our Reset Timer pinned (as a small app-like window), and optionally add the Checklist for your daily routine.",
  },
  {
    q: "Why can’t I find the widget in Google Play / App Store?",
    a: "Widget availability can be region/version/device dependent. If the mobile app isn’t available in your country, you won’t be able to use the official mobile widget there.",
  },
] as const;

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

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${baseUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${baseUrl}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Desktop Widget",
      item: `${baseUrl}/guides/desktop-widget`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Where Winds Meet Desktop Widget: No Download? PC Setup",
  description:
    "Can’t find a Where Winds Meet desktop widget download? See screenshots, what it really means (mobile widget), and a quick PC setup with Reset Timer + Checklist.",
  alternates: buildHreflangAlternates("/guides/desktop-widget"),
};

const slug = "/guides/desktop-widget";

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: metadata.title,
  description: metadata.description,
  url: `${baseUrl}${slug}`,
  inLanguage: "en-US",
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up a Where Winds Meet desktop daily assistant (PC)",
  description:
    "Quick, no-download setup for PC: pin a reset timer + checklist in small app-like windows so you stop missing daily/weekly resets.",
  url: `${baseUrl}${slug}`,
  inLanguage: "en-US",
  step: [
    {
      "@type": "HowToStep",
      name: "Open the Reset Timer",
      text: `Open ${baseUrl}/tools/reset-timer in your browser.`,
    },
    {
      "@type": "HowToStep",
      name: "Create an app-like window",
      text: "Use your browser’s Install app / Create shortcut → Open as window option.",
    },
    {
      "@type": "HowToStep",
      name: "Pin it and keep it visible",
      text: "Pin it to your taskbar/dock and keep it on a second monitor or corner while you play.",
    },
    {
      "@type": "HowToStep",
      name: "Add the Checklist (optional)",
      text: `Open ${baseUrl}/tools/checklist and keep it next to the timer for a simple daily/weekly routine.`,
    },
  ],
};

const structuredData = [webPageStructuredData, breadcrumbStructuredData, howToStructuredData, faqStructuredData];

export default function DesktopWidgetGuidePage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet desktop assistant background art"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Guide · Utility</p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet <span className="text-ink-gold">Desktop Widget</span> (Daily Assistant)
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-200">
            If you searched for <strong>Where Winds Meet desktop widget</strong>, you probably saw a “Daily Assistant
            Desktop Widget” mention and then couldn’t find a real PC widget download. In practice, most reports point to
            a <strong>mobile home‑screen widget</strong> — and on desktop you typically want a lightweight “always
            visible” reset timer + checklist instead.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-sm">
            <Link
              href="/tools/reset-timer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              Reset timer →
            </Link>
            <Link
              href="/tools/checklist"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Daily/weekly checklist →
            </Link>
            <Link
              href="/tools/interactive-map"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Interactive map →
            </Link>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-2xl font-bold text-slate-50">TL;DR</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">
                There is no official PC Where Winds Meet desktop widget download
              </span>{" "}
              most players can find today. The “daily assistant” people talk about is usually a mobile widget that
              appears after installing the mobile game.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Best desktop alternative:</span> pin a small window for a
              reset countdown + a checklist so you can plan around daily/weekly windows without tab chaos.
            </li>
            <li>
              <span className="font-semibold text-slate-100">If you only want “what resets when”</span>, use{" "}
              <Link href="/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                Reset timer
              </Link>{" "}
              and optionally keep{" "}
              <Link href="/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
                Checklist
              </Link>{" "}
              next to it.
            </li>
          </ul>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-bold text-slate-50">What to put in a “daily assistant”</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">Daily reset countdown</span> (so you don’t miss time-gated
              rewards)
            </li>
            <li>
              <span className="font-semibold text-slate-100">Weekly reset day/time</span> (planning longer farms)
            </li>
            <li>
              <span className="font-semibold text-slate-100">A short checklist</span> (your routine, not a mega list)
            </li>
            <li>
              <span className="font-semibold text-slate-100">Fast map access</span> for NPCs/chests/routes
            </li>
          </ul>
        </aside>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Why this keyword is confusing</h2>
        <p className="text-sm leading-relaxed text-slate-300">
          In a Dec 10, 2025 community thread, players noted that “<strong>Where Winds Meet desktop widget</strong>” is a
          misleading label: it shows up as a <strong>mobile home‑screen widget</strong> (Android reported), and
          configuration may require logging into the mobile game.{" "}
          <a
            href={redditThreadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            See the Reddit discussion →
          </a>
        </p>
        <p className="text-xs leading-relaxed text-slate-400">
          Note: Reddit content can change. Treat it as community context, not official documentation.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-daily-assistant-widget.png"
              alt="In-game screen showing “Daily Assistant” and “Desktop Widget” with a note that it’s available via the mobile version"
              width={1685}
              height={917}
              className="h-auto w-full"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Example screen that uses the term “Desktop Widget”, but points players to the mobile version. Screenshot
              used with permission.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-widget-screenshot.jpeg"
              alt="Android widget gallery showing Where Winds Meet daily assistant widgets"
              width={1080}
              height={2340}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Example Android widget gallery entry for Where Winds Meet. If you don’t see it, it may be region/version
              dependent. Screenshot used with permission.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Option 1: Use the mobile widget (Android / iOS)</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          This is what most people mean when they search for <strong>Where Winds Meet desktop widget</strong>: a mobile
          home-screen widget that surfaces daily assistant / reset info.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Android (home-screen widget)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>Install the official Where Winds Meet mobile app (the widget typically ships with the app).</li>
              <li>Long-press your home screen → open the <span className="text-slate-100">Widgets</span> panel.</li>
              <li>Search for <span className="text-slate-100">Where Winds Meet</span> and add the Daily Assistant widget.</li>
              <li>
                If it says it can’t be configured, open the mobile game and log in once, then retry the widget setup.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">iPhone/iPad (availability varies)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>Install the Where Winds Meet iOS app.</li>
              <li>On your home screen: long-press → <span className="text-slate-100">Edit Home Screen</span> → tap +.</li>
              <li>Search for <span className="text-slate-100">Where Winds Meet</span> in the widget gallery.</li>
              <li>
                If you don’t see any widget, your region/app version may not support it yet (or it’s Android-only).
              </li>
            </ol>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Community questions about Apple Watch support exist, but availability depends on the iOS app’s widget
              implementation.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="text-lg font-bold text-slate-100">Troubleshooting (if the widget is missing)</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">App not available in your country/region:</span> you may not
              be able to install the mobile version, so the widget won’t appear.
            </li>
            <li>
              <span className="font-semibold text-slate-100">No widgets section in the store listing:</span> widgets can
              be device/version dependent.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Can’t configure the widget:</span> open the mobile game once
              and log in, then try again.
            </li>
          </ul>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-widget-region-availability.png"
              alt="Google Play listing showing Where Winds Meet is not available in the user's country"
              width={1080}
              height={1500}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Example: the mobile app can be unavailable in some regions, which also blocks the widget. Screenshot used
              with permission.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-mobile-launch-region.png"
              alt="Google Play listing showing Where Winds Meet availability message and a Widgets tab"
              width={1080}
              height={2219}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              On Android, the Play Store listing may show a Widgets section. If you don’t see it, widgets might not be
              supported for your device/version yet. Screenshot used with permission.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Option 2: Build a clean desktop “daily assistant” (PC/Mac)</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          If you play on PC/console and just want something always visible, this is the cleanest alternative to the
          <strong>Where Winds Meet desktop widget</strong>: turn a couple of pages into small “app-like” windows (a reset
          timer and a checklist).
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Windows (Edge/Chrome)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>
                Open{" "}
                <Link href="/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                  Reset timer
                </Link>{" "}
                in your browser.
              </li>
              <li>
                Create an “app window” (browser wording varies): <span className="text-slate-100">Install app</span> or{" "}
                <span className="text-slate-100">Create shortcut</span> →{" "}
                <span className="text-slate-100">Open as window</span>.
              </li>
              <li>Pin it to taskbar and keep the window small on a second monitor (or a corner).</li>
              <li>
                Repeat with{" "}
                <Link href="/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
                  Checklist
                </Link>{" "}
                if you want a routine tracker next to the timer.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">macOS (Safari/Chrome)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>
                Open{" "}
                <Link href="/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                  Reset timer
                </Link>{" "}
                in Safari/Chrome.
              </li>
              <li>
                Use the browser’s shortcut/app feature (for example:{" "}
                <span className="text-slate-100">Add to Dock</span> or{" "}
                <span className="text-slate-100">Create shortcut → Open as window</span>).
              </li>
              <li>Keep it on a separate Space or set it beside your game window.</li>
            </ol>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              If you also play on iPhone, macOS can show some iPhone widgets on desktop depending on your OS/version.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-xs leading-relaxed text-emerald-100">
          Privacy note: our timer and checklist tools run in your browser and store settings locally (no account needed).
          If you clear browser storage, your checklist resets.
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        <div className="space-y-3">
          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Is there a downloadable Windows “Where Winds Meet desktop widget”?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Not that we can reliably point to as an official PC widget. Most “daily assistant widget” mentions refer
              to the mobile app’s home-screen widget. On Windows, the practical equivalent is a pinned timer/checklist
              window.
            </p>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              What is the fastest setup if I just want to stop missing resets?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Keep{" "}
              <Link href="/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                Reset timer
              </Link>{" "}
              pinned, and optionally add{" "}
              <Link href="/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
                Checklist
              </Link>{" "}
              for your daily routine.
            </p>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Why can’t I find the widget in Google Play / App Store?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Widget availability can be region/version/device dependent. If the mobile app isn’t available in your
              country, you won’t be able to use the official mobile widget there. In that case, use a pinned browser
              window as your desktop “assistant” instead.
            </p>
          </details>
        </div>
      </section>
    </article>
  );
}
