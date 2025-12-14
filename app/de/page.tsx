import type { Metadata } from "next";
import Link from "next/link";
import JianghuMapClient from "../../components/JianghuMapClient";
import { LiteYouTubeEmbed } from "../../components/LiteYouTubeEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";
import EventSpotlight from "@/components/EventSpotlight";

export const metadata: Metadata = {
  title: "Where Winds Meet – Deutscher Global-Launch-Guide-Hub",
  description:
    "Deutscher Hub zum Global Launch mit Preview-Stream sowie gefragten Where Winds Meet Guides, Codes, Tierlisten und Updates für PC, Konsole und Mobile.",
  alternates: buildHreflangAlternates("/", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet – Deutscher Guide-Hub",
    description:
      "Schau den Preview-Stream und finde die gefragtesten Where Winds Meet Guides: Tierlisten, Codes, Bosse, Roadmap und Quests wie An Unholy Prophecy, One Leaf One Life und Woven with Malice.",
    url: "https://wherewindsmeet.org/de",
    images: [
      {
        url: "https://wherewindsmeet.org/background/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Where Winds Meet Global-Launch Artwork",
      },
    ],
    siteName: "Where Winds Meet Hub",
    locale: "de_DE",
    type: "website",
  },
};

export default function Home() {
  const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
  const cdn = (path: string) => `${cdnBase}${path}`;

  return (
    <div className="space-y-10">
      <EventSpotlight
        eyebrow="Aktuelles Event · Dez 2025"
        title="The Great Faceologist"
        description="Zeitlich begrenzter Face-/Make-up-Contest. Nutze den richtigen Upload‑Pfad im Spiel und aktiviere den Event‑Tag, damit dein Beitrag gewertet wird."
        bullets={[
          "Nur Uploads über Appearance → Edit Face zählen (nicht aus der Outfit-Gallery).",
          "Vor dem Veröffentlichen den Tag [The Great Faceologist] manuell aktivieren.",
          "Tageslimit ist niedrig (~5/Tag) – keine Slots verschwenden.",
        ]}
        primaryHref="/de/guides/the-great-faceologist"
        primaryLabel="Event-Guide öffnen"
        secondaryHref="/de/guides/cosmetics"
        secondaryLabel="Kosmetik & Appearance"
        imageSrc={cdn("/guides/the-great-faceologist/hero.webp")}
        imageFallbackSrc="/guides/the-great-faceologist/hero.webp"
        imageAlt="The Great Faceologist Event in Where Winds Meet"
      />

      <JianghuMapClient />

      <section className="card-wuxia rounded-3xl p-6 sm:p-8 min-h-[520px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Global-Launch <span className="text-ink-gold">Preview-Stream</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Where Winds Meet ist ein Open-World-Wuxia-Action-RPG im stürmischen China der
                Zehner-Königreiche. Du streifst durch ein lebendiges Jianghu, meisterst elegante
                Kampfkunst, Leichtfüßigkeit und innere Kultivierung und wählst deinen eigenen Weg
                zwischen wanderndem Held, Hofintrigen und freier Erkundung.
              </p>
              <p>
                Dieser Global-Launch-Hub bündelt Guides, Builds und Codes, damit Spieler auf PC,
                Konsole und Mobile jede Reise optimal nutzen.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/de/guides/one-leaf-one-life"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
                >
                  🍂 One Leaf, One Life – gefragteste Quest, kompletter Walkthrough
                </Link>
                <Link
                  href="/de/guides/wall-puzzle"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300/80 hover:text-sky-100"
                >
                  🧩 Wandrätsel Lösung
                </Link>
                <Link
                  href="/de/guides/unholy-prophecy"
                  className="inline-flex items-center gap-2 rounded-full border border-purple-400/60 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition hover:border-purple-300/80 hover:text-purple-100"
                >
                  🔮 An Unholy Prophecy – Feuerbecken, Meridian-Touch, Stachelgang
                </Link>
              </div>
            </div>
          </div>

          <LiteYouTubeEmbed
            videoId="2cxhuAwDFl4"
            start={5}
            title="Where Winds Meet - Global Launch Preview Stream"
            poster="/background/bg4.webp"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 shadow-lg shadow-emerald-900/30">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold text-emerald-100">Schnelleinstieg (Top-Suchen)</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/de/news#next-update"
              className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/70"
            >
              Nächstes Update
            </Link>
            <Link
              href="/de/guides/bosses"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Bossliste & Schwächen
            </Link>
            <Link
              href="/de/guides/qin-caiwei"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Qin Caiwei anfreunden
            </Link>
            <Link
              href="/de/guides/free-morph"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Free Morph freischalten
            </Link>
              <Link
                href="/de/guides/tier-list"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                China‑Tierliste
              </Link>
            <Link
              href="/de/guides/unholy-prophecy"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              An Unholy Prophecy
            </Link>
            <Link
              href="/de/guides/one-leaf-one-life"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              One Leaf One Life
            </Link>
            <Link
              href="/de/guides/woven-with-malice"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Woven with Malice
            </Link>
            <Link
              href="/de/guides/mist-shrouded-prison"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Nebelverhangenes Gefängnis: Truhen
            </Link>
          </div>
          <p className="mt-3 w-full text-xs text-emerald-50/80">
            Schnellzugriff für Top-Suchen: nächstes Update, Bossliste, Qin-Caiwei-Guide, Free Morph
            freischalten und China-Perspektive der Tierliste für Waffen/Builds.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Gerade im Trend</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Gefragte Where Winds Meet Guides</h2>
            <p className="text-xs text-amber-200 mt-1">Neu: Nebelverhangenes Gefängnis – alle 6 Truhen (inkl. Spawn-Fixes)</p>
          </div>
          <span className="text-xs text-slate-400">Aktualisiert nach Google-Trends-Keywords</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "The Great Faceologist",
              href: "/de/guides/the-great-faceologist",
              desc: "Event-Guide: Teilnahme, richtiger Upload-Pfad, Tag setzen und Fixes für fehlenden Tag / Daily Cap.",
              tag: "Event",
            },
            {
              title: "Nebelverhangenes Gefängnis",
              href: "/de/guides/mist-shrouded-prison",
              desc: "Neuer Grab-Guide: Eingang finden, rote Dame als Tracker nutzen und alle sechs Truhen plus Schatz sichern (Spawn-Fixes inklusive).",
              tag: "Neu",
            },
            {
              title: "One Leaf, One Life",
              href: "/de/guides/one-leaf-one-life",
              desc: "Meistgesuchte Lost-Chapter-Quest: Trigger, Nebenquests mit weißen Blättern, Rätsel und Gold-Leaf-Epilog.",
              tag: "Trend",
            },
            {
              title: "Qin Caiwei Freundschaft",
              href: "/de/guides/qin-caiwei",
              desc: "AI-Chat-Schleife stoppen: Beispielzeilen und 5-Schritte-Playbook für schnelle Freundschaft.",
              tag: "AI Chat",
            },
            {
              title: "Gift of Gab",
              href: "/de/guides/gift-of-gab",
              desc: "Dialog-Minispiel gewinnen: Stilwahl, Inspiration, Kartenkombos, Scholar-Meisterschaft.",
              tag: "Dialog",
            },
            {
              title: "Free Morph Mystic",
              href: "/de/guides/free-morph",
              desc: "Juggle-Mystic freischalten durch Parieren von Tian Ying Spins; Kosten, Cooldown, Tier-Boni.",
              tag: "Mystic",
            },
            {
              title: "An Unholy Prophecy",
              href: "/de/guides/unholy-prophecy",
              desc: "Jianghu Legacy 07: Dach-Feuerpfeile, Meridian-Touch-Türen, Stachelfallen, Shi-Zhen-Kampf.",
              tag: "Jianghu",
            },
            {
              title: "Wandrätsel (Wall Puzzle)",
              href: "/de/guides/wall-puzzle",
              desc: "Echoes of Old Battles: Feuerstellen, Yanyun Oath, Wandfelder 移/百/漂 drücken.",
              tag: "Puzzle",
            },
            {
              title: "Woven with Malice",
              href: "/de/guides/woven-with-malice",
              desc: "31-Schritte-Lost-Chapter, Zeitgates, Fallen, Bambus-Schwanz und Bug-Fixes.",
              tag: "Encounter",
            },
            {
              title: "Aktive Codes",
              href: "/de/guides/codes",
              desc: "Aktuelle Belohnungscodes rechtzeitig einlösen. Häufig aktualisiert.",
              tag: "Belohnungen",
            },
            {
              title: "Tierlisten",
              href: "/de/guides/tier-list",
              desc: "PvP/PvE-Rankings und Waffen-Tiers nach Balance-Änderungen.",
              tag: "Meta",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-emerald-300 transition">{item.title}</h3>
                <span className="text-[11px] uppercase tracking-wide text-emerald-200/90 border border-emerald-500/30 rounded-full px-2 py-0.5">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <span className="mt-4 text-xs text-emerald-300 group-hover:text-emerald-200">Guide ansehen →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-300">Neueste Updates</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Balance-Änderungen im Blick behalten</h2>
          </div>
          <Link href="/de/news" className="text-xs text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            Alle News ansehen →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            {
              title: "NPC-Liste & Old-Friends-Karte",
              href: "/de/guides/npc-list",
              desc: "Aktualisierte NPC-Porträts, interaktive Karten-Pins und Zoom-Galerien für alle Old Friends.",
            },
            {
              title: "NPC-Services ohne Chat",
              href: "/de/guides/npc-list#non-interactable-npcs-no-ai-chat",
              desc: "Qi Sheng, Yao Yaoyao u. a. Service-NPCs ohne AI Chat – Standorte und Angebote.",
            },
            {
              title: "Qin Caiwei Chat-Guide",
              href: "/de/guides/qin-caiwei",
              desc: "Neue AI-Chat-Skripte, Loop-Fixes und schnelle Kombos für Freundschaftsgewinn.",
            },
            {
              title: "Builds & Talentpfade",
              href: "/de/guides/builds",
              desc: "Für aktuelle Patches: flexible PvE/PvP-Archetypen mit Waffenwechseln.",
            },
            {
              title: "Patch-Notes: Kurzfassung",
              href: "/de/guides/patch-notes",
              desc: "Kurzfassung: Schadens-Tuning, Cooldown-Anpassungen, Meta-Verschiebungen.",
            },
            {
              title: "Waffen-Enzyklopädie",
              href: "/de/guides/weapons",
              desc: "Stats, Skills und Freischaltwege jeder Waffenfamilie.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-blue-900/20"
            >
              <h3 className="text-lg font-bold text-slate-50 group-hover:text-blue-200 transition">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <span className="mt-4 text-xs text-blue-300 group-hover:text-blue-200">Öffnen →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Schnelle Freebies</p>
          <h2 className="text-2xl font-bold text-slate-50">Hol dir die neuesten Gratis-Outfits und Codes.</h2>
          <p className="text-sm leading-relaxed text-slate-200">
            Behalte Null-Kosten-Routen für kostenlose Outfits, Cosmetics und Frisuren im Blick und
            kombiniere sie mit den neuesten Codes, um deinen Kleiderschrank ohne Premiumwährung zu füllen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/de/guides/free-outfits"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Guide: Gratis-Outfits
            </Link>
            <Link
              href="/de/guides/cosmetics"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Cosmetics-Galerie
            </Link>
            <Link
              href="/de/news"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              News & Roadmap
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Gratis-Outfits & Sets",
              desc: "Event-Shop-Freebies, Quest-Drops und Social-Shop-Tipps in einem Guide.",
              href: "/de/guides/free-outfits",
              badge: "0-Kosten-Routen",
            },
            {
              title: "Roadmap & Updates",
              desc: "News, Events und Roadmap-Schritte, um Freebies rechtzeitig abzuholen.",
              href: "/de/news",
              badge: "Was kommt",
            },
            {
              title: "Patch-Impact",
              desc: "Check, ob Updates neue Freebies bringen oder Drop-Raten ändern.",
              href: "/de/guides/patch-notes",
              badge: "Meta-Shift",
            },
            {
              title: "Appearance-Sets",
              desc: "Outfits, Färbungen und Accessoires zum Kombinieren mit Freebies.",
              href: "/de/guides/cosmetics",
              badge: "Style-Tipps",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-emerald-900/20"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-200">{item.title}</h3>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                  {item.badge}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              <span className="mt-3 text-xs text-emerald-300 group-hover:text-emerald-200">Ansehen →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
