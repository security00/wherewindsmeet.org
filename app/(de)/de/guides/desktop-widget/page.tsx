import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

const redditThreadUrl =
  "https://www.reddit.com/r/wherewindsmeet_/comments/1pj4qbn/daily_assistant_desktop_widget/";

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Start",
      item: `${baseUrl}/de`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${baseUrl}/de/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Desktop Widget",
      item: `${baseUrl}/de/guides/desktop-widget`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Where Winds Meet Desktop Widget – Daily Assistant einrichten",
  description:
    "Erklärt, was mit „Where Winds Meet Desktop Widget“ gemeint ist, plus Schnell-Setup: Reset-Timer + Checkliste als schlanken Daily Assistant am PC.",
  alternates: buildHreflangAlternates("/guides/desktop-widget", { canonicalLanguage: "de" }),
};

export default function DesktopWidgetGuidePage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData]),
        }}
      />

      <header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet Daily Assistant Hintergrund"
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
            Viele Spieler suchen nach einem „Desktop Widget“, finden aber keinen PC‑Download. In der Praxis meint das
            meistens ein <strong>Mobile‑Home‑Screen‑Widget</strong>. Für PC ist die beste Lösung ein kleines Timer‑Fenster
            plus eine kurze Checkliste.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-sm">
            <Link
              href="/de/tools/reset-timer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              Reset Timer →
            </Link>
            <Link
              href="/de/tools/checklist"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Daily/Weekly Checkliste →
            </Link>
            <Link
              href="/de/tools/interactive-map"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Interaktive Karte →
            </Link>
          </div>
        </div>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Kurzfassung</h2>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
          <li>
            <span className="font-semibold text-slate-100">Kein zuverlässiger offizieller PC‑Widget‑Download:</span>{" "}
            Community‑Posts deuten eher auf ein Mobile‑Widget hin.
          </li>
          <li>
            <span className="font-semibold text-slate-100">Desktop‑Alternative:</span> Timer + Checkliste als kleine
            „App‑Fenster“ pinnen, damit du Resets nicht verpasst.
          </li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Warum das verwirrend ist</h2>
        <p className="text-sm leading-relaxed text-slate-300">
          In einem Reddit‑Thread vom 10. Dez 2025 wird beschrieben, dass das „Desktop Widget“ vermutlich ein{" "}
          <strong>Mobile‑Widget</strong> ist (Android wurde genannt) und dass das Einrichten ggf. einen Mobile‑Login
          braucht.{" "}
          <a
            href={redditThreadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Reddit‑Diskussion ansehen →
          </a>
        </p>
        <p className="text-xs leading-relaxed text-slate-400">
          Hinweis: Community‑Infos sind nicht offiziell und können sich ändern.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-daily-assistant-widget.png"
              alt="In-Game-Screen „Daily Assistant / Desktop Widget“ mit Hinweis, dass man die Mobile-Version herunterladen soll"
              width={1685}
              height={917}
              className="h-auto w-full"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Beispiel‑Screen, der „Desktop Widget“ sagt, aber auf die Mobile‑Version verweist. Screenshot mit Erlaubnis
              genutzt.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-widget-screenshot.jpeg"
              alt="Android-Widget-Galerie mit Where Winds Meet Widgets"
              width={1080}
              height={2340}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Beispiel aus der Android‑Widget‑Galerie. Wenn du es nicht siehst, kann es an Region/App‑Version liegen.
              Screenshot mit Erlaubnis genutzt.
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="text-lg font-bold text-slate-100">Häufige Probleme</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">App nicht im Land verfügbar:</span> ohne Mobile‑App gibt es
              auch kein Widget.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Kein „Widgets“-Bereich im Store:</span> Widgets können
              regions-/versionsabhängig sein.
            </li>
          </ul>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-widget-region-availability.png"
              alt="Google-Play-Seite zeigt, dass Where Winds Meet im Land nicht verfügbar ist"
              width={1080}
              height={1500}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Beispiel: Wenn die Mobile‑App in deiner Region nicht verfügbar ist, wird auch das Widget fehlen. Screenshot
              mit Erlaubnis genutzt.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-mobile-launch-region.png"
              alt="Google-Play-Seite mit Hinweis zur Verfügbarkeit und einem Widgets-Tab"
              width={1080}
              height={2219}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Auf Android kann der Play‑Store einen „Widgets“-Tab anzeigen. Wenn er fehlt, ist das Widget ggf. nicht für
              dein Gerät/deine Version verfügbar. Screenshot mit Erlaubnis genutzt.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">PC/Mac: einen Daily Assistant bauen</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          Wenn du auf PC spielst, ist der Nutzen meist: Resets im Blick + Routine abhaken. Dafür reichen zwei kleine
          Fenster.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Windows</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>
                Öffne{" "}
                <Link href="/de/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                  Reset Timer
                </Link>
                .
              </li>
              <li>
                In Edge/Chrome: App installieren oder Shortcut erstellen → <span className="text-slate-100">als Fenster</span>{" "}
                öffnen.
              </li>
              <li>Ans Taskbar pinnen und klein halten.</li>
              <li>
                Optional daneben{" "}
                <Link href="/de/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
                  Checkliste
                </Link>{" "}
                öffnen.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">macOS</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>
                Öffne{" "}
                <Link href="/de/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                  Reset Timer
                </Link>
                .
              </li>
              <li>
                Nutze „Add to Dock“ oder „Create shortcut → Open as window“ (je nach Browser).
              </li>
              <li>Als kleines Fenster neben dem Game lassen.</li>
            </ol>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-xs leading-relaxed text-emerald-100">
          Datenschutz: Timer/Checkliste laufen im Browser und speichern Einstellungen lokal (ohne Account).
        </div>
      </section>
    </article>
  );
}
