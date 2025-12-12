import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | Where Winds Meet Hub (DE)",
  description:
    "Nutzungsregeln für den inoffiziellen Where Winds Meet Fan-Hub: Status, erlaubte Nutzung, Haftungsausschluss und Kontakt.",
  alternates: buildHreflangAlternates("/terms", { canonicalLanguage: "de" }),
};

export default function TermsPage() {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm leading-relaxed text-slate-200 shadow-lg shadow-slate-950/60 sm:p-8">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Nutzungsbedingungen für den Where Winds Meet Fan-Hub.
        </h1>
        <p className="text-sm text-slate-300">
          Diese Bedingungen regeln die Nutzung dieses inoffiziellen Where Winds Meet Fan-Projekts. Ziel ist ein klarer, respektvoller und nachhaltiger Umgang für alle, die Guides lesen, eingebettete Videos schauen oder den Hub teilen.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">1. Inoffizieller Status</h2>
        <p>
          Der Hub ist ein unabhängiges Fanprojekt für Where Winds Meet (Guides, Tierlists, Builds, Codes). Keine Zugehörigkeit oder Unterstützung durch Publisher/Entwickler. Marken und Assets gehören ihren jeweiligen Inhabern.
        </p>
        <p>
          Meinungen und Einstufungen spiegeln die Sicht der Betreiber wider, nicht die offiziellen Aussagen des Spiels. Für verbindliche Infos nutze bitte die offiziellen Kanäle.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">2. Nutzung der Inhalte</h2>
        <p>
          Du darfst die Seiten privat und nicht-kommerziell lesen und teilen, solange du den Hub nicht als offiziell darstellst oder Eigentum am Inhalt beanspruchst.
        </p>
        <p>
          Größere Textpassagen zu kopieren und anderswo zu posten wird nicht empfohlen. Bei Zitaten bitte klare Quellenangabe und Link zurück zur jeweiligen Seite, damit Leser den Kontext und Aktualisierungen finden.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">3. Keine Accounts, begrenzter Input</h2>
        <p>
          Es gibt keine Registrierung, kein Login, keine öffentlichen Kommentare oder Foren. Damit werden auch keine Profile oder Nutzerinhalte gespeichert. Falls später interaktive Features hinzukommen, werden die Bedingungen aktualisiert.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">4. Eingebettete Inhalte & externe Links</h2>
        <p>
          Eingebettete Videos (z. B. YouTube) unterliegen den Nutzungs- und Datenschutzregeln der jeweiligen Plattformen. Der Hub steuert deren Verhalten nicht.
        </p>
        <p>
          Externe Links (offizielle WWM-Seiten, Foren, Socials, Gaming-Ressourcen) führen zu eigenen Bedingungen. Bitte prüfe diese, wenn du die Dienste nutzt.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">5. Richtigkeit und Aktualität</h2>
        <p>
          Das Spiel verändert sich durch Patches und neue Inhalte. Wir bemühen uns um Aktualität, dennoch können Guides, Tierlists oder Codes zeitweise veralten.
        </p>
        <p>
          Inhalte werden &ldquo;wie besehen&rdquo; bereitgestellt, ohne Gewähr. Nutze den Hub als hilfreichen Begleiter, nicht als garantiert fehlerfreie Quelle. Vor wichtigen Entscheidungen (Käufe, große In-Game-Investitionen) prüfe Details zusätzlich über offizielle Quellen oder mehrere Community-Sichten.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">6. Haftungsbeschränkung</h2>
        <p>
          Als Fan-Seite können Verfügbarkeit, Gerätekombatibilität oder Fehlerfreiheit nicht garantiert werden. Soweit gesetzlich zulässig, haften die Betreiber nicht für mittelbare/folgende Schäden aus der Nutzung, z. B. verlorenen Fortschritt, verpasste Belohnungen oder Fehlinterpretationen von Build-Empfehlungen.
        </p>
        <p>
          Nichts hier soll Rechte ausschließen, die dir nach zwingendem Recht deines Wohnsitzes zustehen. Ist eine Klausel unwirksam, bleiben die übrigen sinngemäß bestehen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">7. Kontakt & Feedback</h2>
        <p>
          Fehler gefunden, anderer Tierlist-Standpunkt oder Sorge zur Darstellung? Melde dich unter{" "}
          <a href="mailto:support@wherewindsmeet.org" className="text-emerald-300 hover:text-emerald-200">
            support@wherewindsmeet.org
          </a>. Als Fanprojekt können Antwortzeiten variieren, Feedback fließt aber nach Möglichkeit in Updates ein.
        </p>
        <p>
          Durch das Einsenden von nicht-vertraulichem Feedback erlaubst du, dass Vorschläge zur Verbesserung des Hubs genutzt werden (z. B. für künftige Guides oder UI-Anpassungen). Deine eigenen kreativen Werke (Videos, Fanart, umfangreiche Texte) bleiben deine.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">8. Änderungen dieser Bedingungen</h2>
        <p>
          Bei neuen Funktionen oder rechtlichen Anforderungen können die Bedingungen aktualisiert werden. Die aktuelle Fassung steht auf dieser Seite. Nutzung nach Veröffentlichung bedeutet Zustimmung zur aktualisierten Version.
        </p>
      </section>

      <footer className="border-t border-slate-800 pt-4 text-xs text-slate-400 space-y-2">
        <p>
          Diese Bedingungen sind spielerfreundlich formuliert und ersetzen nicht die offiziellen Nutzungsbedingungen des Spiels oder verlinkter Drittanbieter.
        </p>
        <p>
          Infos zum Umgang mit Daten findest du in der{" "}
          <Link href="/de/privacy" className="text-emerald-300 hover:text-emerald-200">
            Datenschutzerklärung
          </Link>
          .
        </p>
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
