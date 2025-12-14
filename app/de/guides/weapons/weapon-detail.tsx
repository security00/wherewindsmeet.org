import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { weapons } from "@/lib/weapons.de";
import { weaponDetails } from "@/lib/weaponDetails.de";
import { buildHreflangAlternates } from "@/lib/hreflang";
import type { WeaponId } from "@/lib/weapons";

export function generateWeaponMetadata(id: WeaponId): Metadata {
  const weapon = weapons.find((w) => w.id === id);
  if (!weapon) {
    return {};
  }

  return {
    title: `${weapon.name} Waffen-Guide – Where Winds Meet`,
    description: `${weapon.name}: Spielgefühl, Stärken/Trade-offs und Links zu Builds & Tierliste (DE).`,
    alternates: buildHreflangAlternates(`/guides/weapons/${weapon.id}`, { canonicalLanguage: "de" }),
  };
}

export function WeaponDetail({ weaponId }: { weaponId: WeaponId }) {
  const weapon = weapons.find((w) => w.id === weaponId);
  if (!weapon) return null;
  const detail = weaponDetails[weapon.id];
  const roleLabelMap: Record<string, string> = {
    Assassin: "Assassine",
    Balanced: "Ausgewogen",
    Bleed: "Blutung",
    Tank: "Tank",
    Support: "Support",
    "Parry/Konter": "Parade/Konter",
    "Mobile Control / Picks": "Mobile Kontrolle / Picks",
  };
  const difficultyLabel =
    detail?.difficulty === "Easy" ? "Leicht" : detail?.difficulty === "Moderate" ? "Mittel" : detail?.difficulty === "Advanced" ? "Anspruchsvoll" : "";

  return (
    <article className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {weapon.name} – Waffen-Guide
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">Rolle: {roleLabelMap[weapon.role] ?? weapon.role}</p>
          {detail && (
            <>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{detail.slogan}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Schwierigkeit: {difficultyLabel} · Empfohlen für: {detail.recommendedFor}
              </p>
            </>
          )}
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{weapon.description}</p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Nutze diese Seite als Praxis-Begleiter zur{" "}
            <Link href="/de/guides/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Tierliste
            </Link>{" "}
            und den{" "}
            <Link href="/de/guides/builds" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Build-Guides
            </Link>
            . Zahlen ändern sich, aber das Grundgefühl von {weapon.name} bleibt – wichtiger ist, ob der Rhythmus zu deinem Spielstil passt.
          </p>
          <p className="text-xs text-slate-400">
            Hinweis: Basis sind offizielle Showcases und ARPG-Erfahrung; Fokus auf Spielgefühl statt exakte Zahlen. Patch Notes und In-Game-Erfahrung haben Vorrang.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <Image
              src={weapon.officialArt}
              alt={weapon.name}
              fill
              className="object-contain object-center"
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <p className="text-xs text-slate-400">
            Artwork/Bewegung basieren auf offiziellen WWM-Waffenshowcases; Optik kann sich mit Patches/Cosmetics ändern.
          </p>
        </div>
      </section>

      {detail && (
        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">So spielt sich {weapon.name}</h2>
          {detail.positioning.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-slate-200 sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {detail && (
        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Stärken</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              {detail.pros.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Nachteile &amp; worauf du achten solltest</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              {detail.cons.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {detail && (
        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Übungsziele für {weapon.name}</h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Kleine Übungen für Low-Pressure-Content, um den Rhythmus zu verinnerlichen; später in ernstere Runs mitnehmen.
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            {detail.practiceTips.map((tip, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
