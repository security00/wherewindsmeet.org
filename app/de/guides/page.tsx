import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Guides – Deutsch",
  description:
    "Fokussierte Where Winds Meet Guides auf Deutsch: Einsteigerhilfen, Level-Routen, Open-World-Systeme, Tierlists, Builds und Codes – immer wissen, was als Nächstes zu tun ist.",
  alternates: buildHreflangAlternates("/de/guides", { canonicalLanguage: "de" }),
};

const guideSections = [
  {
    title: "Route für Einsteiger",
    slug: "/de/guides/new-players",
    label: "Hier starten",
    icon: "🌱",
    color: "text-emerald-400",
    size: "large",
    description:
      "Vom ersten Start bis zum ersten Wochen-Reset: clevere Einstellungen, sichere Story-Routen, Daily-Checklisten.",
  },
  {
    title: "PVP-Meta-Tierlist",
    slug: "/de/guides/pvp-tier-list",
    label: "Competitive",
    icon: "⚔️",
    color: "text-red-400",
    size: "medium",
    description: "Duelliere dominierend mit den aktuellen Meta-Rankings, abgestimmt auf den neuesten Patch.",
  },
  {
    title: "Beste Builds",
    slug: "/de/guides/builds",
    label: "PVE & PVP",
    icon: "🔥",
    color: "text-orange-400",
    size: "medium",
    description: "Flexible Setups für jeden Spielstil: Tank, DPS und Support.",
  },
  {
    title: "Waffen-Enzyklopädie",
    slug: "/de/guides/weapons",
    label: "Alle Waffen",
    icon: "🗡️",
    color: "text-blue-400",
    size: "small",
    description: "Vollständige Werte und Hintergründe zu jeder Waffe.",
  },
  {
    title: "Kampfkünste-Waffen",
    slug: "/de/guides/martial-arts-weapons",
    label: "Freischaltungen",
    icon: "🥋",
    color: "text-indigo-300",
    size: "medium",
    description: "Alle 12 Kampfkunst-Waffen mit Bildern, Skills und Freischaltwegen.",
  },
  {
    title: "Skill Theft",
    slug: "/de/guides/skill-theft",
    label: "Stealth",
    icon: "🕶️",
    color: "text-emerald-300",
    size: "small",
    description: "Minigame beobachten, Stile sauber stehlen.",
  },
  {
    title: "Wandrätsel-Lösung",
    slug: "/de/guides/wall-puzzle",
    label: "Puzzle",
    icon: "🧱",
    color: "text-cyan-300",
    size: "small",
    description: "Exakte Wandkacheln und Feuerstellen für Echoes of Old Battles.",
  },
  {
    title: "An Unholy Prophecy",
    slug: "/de/guides/unholy-prophecy",
    label: "Jianghu Legacy",
    icon: "🔮",
    color: "text-purple-300",
    size: "small",
    description:
      "Jianghu Legacy 07 im Martial Temple: Dach-Feuerpfeile, Meridian-Touch-Puzzles, Stachelfallen, Shi-Zhen-Boss.",
  },
  {
    title: "Woven with Malice",
    slug: "/de/guides/woven-with-malice",
    label: "Encounter",
    icon: "🧶",
    color: "text-emerald-300",
    size: "small",
    description: "Lost-Chapter-Route mit Zeitgates, Fallenaufbau, Bambuspfad und Bug-Fixes.",
  },
  {
    title: "Nebelverhangenes Gefängnis",
    slug: "/de/guides/mist-shrouded-prison",
    label: "Grab",
    icon: "🧭",
    color: "text-cyan-300",
    size: "small",
    description: "Grab in Mistveil Forest: Drei-Runden-Route mit sechs Truhen und Endschatz (inkl. Spawn-Fixes).",
  },
  {
    title: "One Leaf, One Life",
    slug: "/de/guides/one-leaf-one-life",
    label: "Lost Chapter",
    icon: "🍂",
    color: "text-amber-300",
    size: "medium",
    description: "Kaifeng-Questreihe mit Nebenstorys (weiße Blätter), Rätsellösungen und Gold-Leaf-Epilog.",
  },
  {
    title: "Gift of Gab",
    slug: "/de/guides/gift-of-gab",
    label: "Dialog",
    icon: "💬",
    color: "text-amber-300",
    size: "medium",
    description: "Rhetorik-Duelle meistern: Karten, Inspiration, Kombos, Scholar-Meisterschaft.",
  },
  {
    title: "Qin Caiwei Freundschaft",
    slug: "/de/guides/qin-caiwei",
    label: "AI Chat",
    icon: "🤝",
    color: "text-emerald-300",
    size: "small",
    description: "Ihre Dialogschleife stoppen mit Aktionen in Klammern und klaren Verabschiedungen.",
  },
  {
    title: "Free Morph Mystic",
    slug: "/de/guides/free-morph",
    label: "Mystic",
    icon: "🌀",
    color: "text-cyan-300",
    size: "small",
    description: "Free-Morph-Juggle freischalten & upgraden: Kosten, Cooldown, Tier-Boni.",
  },
  {
    title: "Item-Index",
    slug: "/de/guides/items",
    label: "Material",
    icon: "🎒",
    color: "text-pink-300",
    size: "small",
    description: "Tabbierte Kategorien mit wichtigen Materialien, Verbrauchsgegenständen und Kuriositäten.",
  },
  {
    title: "Kosmetik & Erscheinung",
    slug: "/de/guides/cosmetics",
    label: "Customization",
    icon: "✨",
    color: "text-rose-300",
    size: "small",
    description: "Appearance-Sets, Frisuren und Cosmetics inspiriert von Mohisten-Legenden.",
  },
  {
    title: "The Great Faceologist",
    slug: "/de/guides/the-great-faceologist",
    label: "Event",
    icon: "🎭",
    color: "text-emerald-300",
    size: "small",
    description: "Dez 2025 Look‑Contest: richtig via Edit Face hochladen, Event‑Tag setzen, Bugs umgehen.",
  },
  {
    title: "Aktive Codes",
    slug: "/de/guides/codes",
    label: "Gratis",
    icon: "🎁",
    color: "text-yellow-400",
    size: "small",
    description: "Verpasse keine zeitlich begrenzten Belohnungen.",
  },
  {
    title: "Gratis-Outfits",
    slug: "/de/guides/free-outfits",
    label: "Kosmetik",
    icon: "🪡",
    color: "text-amber-400",
    size: "small",
    description: "Null-Kosten-Routen für Outfits, Accessoires und Frisuren über Events, Quests und Codes.",
  },
  {
    title: "NPC-Liste (Old Friends)",
    slug: "/de/guides/npc-list",
    label: "AI Chat",
    icon: "📜",
    color: "text-emerald-300",
    size: "small",
    description: "NPC-Standorte, Belohnungen und AI-Chat-Tipps mit Karten-Vorschau.",
  },
  {
    title: "Boss-Guides",
    slug: "/de/guides/bosses",
    label: "Encounters",
    icon: "👹",
    color: "text-purple-400",
    size: "small",
    description: "Mechaniken und Strategien für große Bosse.",
  },
  {
    title: "Endgame-Guide",
    slug: "/de/guides/endgame",
    label: "Fortschritt",
    icon: "🏔️",
    color: "text-cyan-400",
    size: "wide",
    description: "Post-Story-Inhalte meistern: Farmrouten, Stat-Optimierung, mystische Künste.",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Where Winds Meet Guides Hintergrundbild"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:w-2/3">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl font-serif">
            Wanderers <span className="text-ink-gold">Bibliothek</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200/90 text-shadow-sm font-sans border-l-2 border-emerald-500/50 pl-4">
            Dein Begleiter auf dem Weg durchs Jianghu. Von Grundlagen bis Großmeister-Techniken – hier findest du deinen Pfad.
          </p>
          <Link
            href="/de/guides/one-leaf-one-life"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
          >
            🍂 Neuester Lost Chapter: One Leaf, One Life
          </Link>
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden text-vertical text-6xl font-bold text-slate-50/5 lg:block font-serif select-none">
          武林秘籍
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-20 -mt-4 sm:-mt-8 lg:-mt-12 pb-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px]">
          {guideSections.map((section) => (
            <Link
              key={section.slug}
              href={section.slug}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-emerald-900/20
                ${section.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${section.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                ${section.size === 'wide' ? 'md:col-span-2' : ''}
              `}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl transition-all group-hover:scale-150 group-hover:from-emerald-500/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl ${section.size === 'large' ? 'text-5xl mb-4' : ''}`}>{section.icon}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-full px-2 py-1 ${section.color} bg-white/5`}>
                      {section.label}
                    </span>
                  </div>

                  <h3 className={`font-bold text-slate-100 font-serif group-hover:text-ink-gold transition-colors
                    ${section.size === 'large' ? 'text-4xl mb-4' : 'text-xl mb-2'}
                  `}>
                    {section.title}
                  </h3>

                  <p className={`text-slate-400 font-sans leading-relaxed
                    ${section.size === 'large' ? 'text-base max-w-md' : 'text-xs'}
                  `}>
                    {section.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 group-hover:text-emerald-400 transition-colors mt-4">
                  <span>Guide lesen</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl text-center mt-20 px-6">
        <div className="divider-ink mb-8" />
        <p className="text-slate-400 font-serif italic">
          &ldquo;Auch der längste Weg beginnt mit dem ersten Schritt.&rdquo;
        </p>
      </div>
    </div>
  );
}
