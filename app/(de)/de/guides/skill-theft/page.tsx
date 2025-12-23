import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Skill Theft – Skills stehlen (Guide) | Where Winds Meet (DE)",
  description: "Beobachten, stehlen, sauber entkommen: So aktivierst du Skill Theft, wählst Routen und vermeidest typische Fehler.",
  alternates: buildHreflangAlternates("/guides/skill-theft", { canonicalLanguage: "de" }),
};

export default function SkillTheftDePage() {
  return (
    <article className="space-y-8 bg-ink-wash min-h-screen pb-16 rounded-3xl border border-slate-800/70 p-6 sm:p-8 shadow-lg">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-wide text-emerald-300">Stealth / Minigame</p>
        <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">Skill Theft – Kurzguide</h1>
        <p className="text-slate-300 leading-relaxed">
          Aktivierung, optimale Route und sauberes Entkommen, damit der Diebstahl nicht fehlschlägt.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">Ablauf</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-200">
          <li>Skill Theft im Menü aktivieren (Schloss-Icon prüfen).</li>
          <li>Annähern und Beobachten starten, ohne entdeckt zu werden.</li>
          <li>Minigame: korrekt imitieren/ausführen, Fortschrittsanzeige füllen.</li>
          <li>Nach Erfolg sofort wegbewegen oder Verfolger resetten.</li>
        </ol>
      </section>

      <section className="rounded-2xl border border-amber-400/40 bg-amber-50/5 p-5 space-y-2">
        <h2 className="text-lg font-semibold text-amber-200">Tipps</h2>
        <ul className="list-disc list-inside text-sm text-amber-100 space-y-1">
          <li>Routen vorab anschauen; vermeide enge Patrouillenwege.</li>
          <li>Wenn entdeckt: entkommen, kurz warten, erneut versuchen statt zu kämpfen.</li>
          <li>Ruhe bewahren: Timing wichtiger als Schnelligkeit.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">Alternative: einer Sekte beitreten</h2>
        <p className="text-sm text-slate-200 leading-relaxed">
          Nicht jede Kampfkunst musst du stehlen. Viele Styles/Waffen lassen sich auch über den Beitritt zu einer Sekte freischalten. Wenn du unsicher bist, welcher Weg zu deinem Spielstil passt, starte mit dem{" "}
          <Link href="/de/guides/sects" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            Sekten-Überblick
          </Link>{" "}
          und vergleiche danach die Freischaltwege in der{" "}
          <Link href="/de/guides/martial-arts-weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            Kampfkunst-Waffen-Tabelle
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
