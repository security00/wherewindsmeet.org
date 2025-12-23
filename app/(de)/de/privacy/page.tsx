import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Where Winds Meet Hub (DE)",
  description:
    "Datenschutz für den inoffiziellen Where Winds Meet Fan-Hub: welche technischen Daten anfallen, wie eingebettete Videos funktionieren und wie Sie uns erreichen.",
  alternates: buildHreflangAlternates("/privacy", { canonicalLanguage: "de" }),
};

export default function PrivacyPage() {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm leading-relaxed text-slate-200 shadow-lg shadow-slate-950/60 sm:p-8">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Datenschutzerklärung für den Where Winds Meet Fan-Hub.
        </h1>
        <p className="text-sm text-slate-300">
          Diese Seite erklärt in einfacher Sprache, welche Daten beim Besuch dieses inoffiziellen Where Winds Meet Fan-Hubs anfallen und wie damit umgegangen wird. Bei Fragen schreiben Sie jederzeit an{" "}
          <a href="mailto:support@wherewindsmeet.org" className="text-emerald-300 hover:text-emerald-200">
            support@wherewindsmeet.org
          </a>.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">1. Betreiber</h2>
        <p>
          Diese Website ist ein unabhängiger Fan-Hub für Where Winds Meet. Sie wird nicht vom Publisher oder Entwickler betrieben oder unterstützt. Marken und Logos gehören ihren jeweiligen Inhabern. Zweck des Hubs: Guides, Tierlisten, Builds, Codes und News an einem Ort bündeln.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">2. Welche Daten anfallen</h2>
        <p>
          Es gibt keine Accounts, kein Login, keine Zahlungen auf diesem Hub. Beim Aufruf fallen jedoch automatisch technische Basisdaten an (IP-Adresse, aufgerufene Seiten, Zeitpunkt, Browser/Device-Infos). Diese werden nur aggregiert genutzt, um Sicherheit, Seiten-Nutzung und Content-Planung zu verstehen – nicht, um Sie persönlich zu identifizieren.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">3. Cookies, Analytics & ähnliche Technologien</h2>
        <p>
          Falls einfache Analytics aktiviert werden, dienen sie dazu zu verstehen, welche Inhalte nützlich sind. Sie können Cookies oder ähnliche Kennungen setzen. Wenn möglich, werden Optionen wie IP-Anonymisierung oder Opt-out aktiviert. Änderungen an der Analytics-Konfiguration werden hier nachgetragen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">4. Eingebettete Inhalte & Drittanbieter</h2>
        <p>
          Viele Seiten binden YouTube-Videos ein (wenn möglich über <code className="rounded bg-slate-900 px-1 py-0.5 text-xs">youtube-nocookie.com</code>). Sobald Sie auf Play klicken, kann der Anbieter Cookies setzen, die IP-Adresse protokollieren oder Ihr Nutzungsverhalten mit einem bestehenden Konto verknüpfen. Bitte lesen Sie die jeweiligen Datenschutzrichtlinien der Drittanbieter.
        </p>
        <p>
          Externe Links (z. B. offizielle WWM-Seiten, Socials) führen zu eigenen Datenschutzpraktiken, die von dieser Erklärung abweichen können.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">5. Kontakt zum Datenschutz</h2>
        <p>
          Fragen an{" "}
          <a href="mailto:support@wherewindsmeet.org" className="text-emerald-300 hover:text-emerald-200">
            support@wherewindsmeet.org
          </a>. Bitte geben Sie an, welche Seite Sie besucht haben und ungefähr wann.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">6. Kinder & sensible Daten</h2>
        <p>
          Die Inhalte richten sich an allgemeine Gaming-Zielgruppen. Es gibt keine Registrierungen, Käufe oder Kommentare, daher keine bewusste Erfassung sensibler Daten. Falls versehentlich Daten eines Kindes erfasst wurden, informieren Sie uns bitte unter der oben genannten Adresse.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">7. Änderungen</h2>
        <p>
          Bei wesentlichen Änderungen (z. B. neue Analytics, neue Features) wird diese Erklärung aktualisiert. Durch die weitere Nutzung nach Veröffentlichung einer aktualisierten Version akzeptieren Sie die neuen Beschreibungen.
        </p>
      </section>

      <footer className="border-t border-slate-800 pt-4 text-xs text-slate-400 space-y-2">
        <p>Diese Erklärung dient der Transparenz und ersetzt keine Rechte, die Ihnen nach lokalem Recht zustehen.</p>
        <p>
          Zurück zur{" "}
          <Link href="/de" className="text-emerald-300 hover:text-emerald-200">
            Startseite des Where Winds Meet Hubs
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
