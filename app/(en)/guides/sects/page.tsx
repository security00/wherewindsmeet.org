import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  inkboundCampus,
  inkboundCollegeLife,
  inkboundVisitingDisciple,
} from "@/lib/officialQingzhouMedia";

export const metadata: Metadata = {
  title: "Where Winds Meet Sects Guide: Factions, Ideals & Inkbound Order",
  description:
    "Overview of major sects in Where Winds Meet, their philosophies, typical roles, and Version 2.3 Inkbound Order in Qingzhou—including Visiting Disciple dual-sect study.",
  alternates: buildHreflangAlternates("/guides/sects"),
};

type SectId =
  | "tianquan"
  | "qingxi"
  | "sangengtian"
  | "jiuliumen"
  | "kuanglan"
  | "liyuan"
  | "guyun"
  | "zuihuayin"
  | "wenjinguan"
  | "wuxingu"
  | "moshandao"
  | "mohist-hill";

type Sect = {
  id: SectId;
  name: string;
  tagline: string;
  roleHint: string;
  description: string;
  image: string;
};

const sects: Sect[] = [
  {
    id: "tianquan",
    name: "Tianquan",
    tagline: "Blades drawn for conscience, not crowns.",
    roleHint: "Righteous outlaws, justice-first fighters.",
    description:
      "Tianquan refuses to be the blade of kings or merchants. Their creed is simple: if the law fails the people, then the knife must speak. They rob the corrupt, shield the powerless, and judge themselves more harshly than any court. Playing under Tianquan suits you if you want a moral compass that points toward “no regrets” rather than clean reputations—expect hard decisions, dangerous favors, and fights you pick because someone has to.",
    image: "/sect/tianquan.png",
  },
  {
    id: "qingxi",
    name: "Qingxi",
    tagline: "Physicians who weigh hearts as much as wounds.",
    roleHint: "Healers, buffers, and moral questioners.",
    description:
      "Qingxi believes medicine is more than herbs and needles; it is a way of reading hearts in a world that rarely acts in good faith. They charge a price for every life they save, not out of greed, but to remind both sides that healing has consequences. If you gravitate toward Qingxi, expect stories about triage, impossible choices, and holding your ground when patients—and rulers—try to turn you into a tool.",
    image: "/sect/qingxi.png",
  },
  {
    id: "sangengtian",
    name: "Sangeng Sky",
    tagline: "Walkers of midnight, shouldering other people’s hell.",
    roleHint: "Assassins with a monk’s burden.",
    description:
      "Sangeng disciples step willingly into the dirtiest corners of the world. They believe that in an age of corruption, quiet knives and grim resolve are sometimes the only mercy left. They carry karma like chains, trading their own peace of mind for a chance to spare others from endless suffering. This sect fits players who enjoy stealth, targeted eliminations, and grappling with the idea of necessary evil.",
    image: "/sect/sangengtian.png",
  },
  {
    id: "jiuliumen",
    name: "Jiuliu Sect",
    tagline: "The marketplace remembers what palaces forget.",
    roleHint: "Rogues, fixers, social chameleons.",
    description:
      "Jiuliu keeps its roots in alleyways, gambling dens, and night markets. To them, the streets are a truer mirror of the empire than any jade court. They welcome runaways, tricksters, and anyone who has learned to survive between rules rather than under them. If you like side jobs, gray morality, and alliances that feel more like bargains than oaths, Jiuliu offers a home that matches your pace.",
    image: "/sect/jiuliumen.png",
  },
  {
    id: "kuanglan",
    name: "Kuanglan",
    tagline: "A frontier shield that never put itself down.",
    roleHint: "Soldier-monks, wall-like frontliners.",
    description:
      "Kuanglan was born from the army and never fully belonged either to court or Jianghu. For generations they have held the far borders, out of sight and often out of mind, guided less by orders than by an old promise to keep ordinary people safe. Joining Kuanglan feels like choosing duty over glory: you anchor battle lines, endure harsh campaigns, and measure your worth in lives protected, not titles earned.",
    image: "/sect/kuanglan.png",
  },
  {
    id: "liyuan",
    name: "Liyuan",
    tagline: "Actors whose smiles cut deeper than steel.",
    roleHint: "Illusionists, social manipulators, stylish duelists.",
    description:
      "Liyuan claims to wield no swords, but their performances can topple reputations more cleanly than any assassination. Their weapons are silk, makeup, gossip, and perfectly timed gestures. Onstage they play the fool, offstage they see every mask others wear. This sect is ideal if you enjoy deception, crowd scenes, and fights where a feint, a song, or a costume change matters as much as a killing blow.",
    image: "/sect/liyuan.png",
  },
  {
    id: "guyun",
    name: "Lonely Cloud",
    tagline: "Swordsmen who argue with fate itself.",
    roleHint: "Precision duelists and tacticians.",
    description:
      "Lonely Cloud believes there is a pattern behind every clash—if you can read it, you can cut straight through destiny. Their blade work is less about flourish and more about perfect timing: one step, one draw, one irreversible decision. Choosing this sect suits players who like one-on-one duels, tight spacing, and the fantasy of answering the world’s unfairness with a single impeccable cut.",
    image: "/sect/guyun.png",
  },
  {
    id: "zuihuayin",
    name: "Drunken Flowers",
    tagline: "Perfume, poison, and parties that outlast plots.",
    roleHint: "Social butterflies, spies, and flexible supports.",
    description:
      "On the surface, Drunken Flowers is all petals and laughter—matchmaking, banquets, half-spoken secrets. Underneath, every dance step and wine cup can be a move in a long con. They thrive in entanglements: love, debt, blackmail, and genuine affection all mixing together. If you enjoy roleplay, intrigue, and builds that blur the line between charm and threat, this sect is your stage.",
    image: "/sect/zuihuayin.png",
  },
  {
    id: "wenjinguan",
    name: "Wenjin Pavilion",
    tagline: "Blades on the desk, scrolls on the rack.",
    roleHint: "Scholar-warriors, investigators, archivists.",
    description:
      "Wenjin Pavilion is neither fully court official nor wandering hero. They collect stories, laws, and battle reports, then quietly decide how to shape the next chapter. A single line in their records can change a city’s fate as surely as a duel outside its walls. This sect suits players who like puzzles, investigation quests, and the fantasy of winning fights with information as much as steel.",
    image: "/sect/wenjinguan.png",
  },
  {
    id: "wuxingu",
    name: "Heartless Valley",
    tagline: "Masters of poisons that begin in the mind.",
    roleHint: "Debuff specialists and high-risk experimenters.",
    description:
      "Heartless Valley understands that the deadliest toxins are not brewed in cauldrons but whispered into hearts. They live among forgotten tombs and abandoned gorges, feared as much for their isolation as for their craft. Their art can save or shatter, depending on what the patient truly wants. Pick this sect if you like damage-over-time, control, and stories that question whether you are curing the world or merely accelerating its decay.",
    image: "/sect/wuxingu.png",
  },
  {
    id: "moshandao",
    name: "Moshandaos",
    tagline: "Engineers of hidden paths and skyward dreams.",
    roleHint: "Gadgeteers, trap-setters, movement enjoyers.",
    description:
      "Moshan Dao carves sanctuaries into sheer cliffs and hides mechanisms in what looks like simple stone. They chase a future where bridges, gliders, and flying machines can change how people live as profoundly as any martial art. Joining them fits players who love platforms, contraptions, and light puzzles, and who enjoy turning terrain itself into a weapon or an escape route.",
    image: "/sect/moshandao.png",
  },
  {
    id: "mohist-hill",
    name: "Mohist Hill",
    tagline: "A mountain city that treats gears as a martial art.",
    roleHint: "Builders, shop buyers, Hidden Mountain hub.",
    description:
      "Mohist Hill arrived with Hidden Mountain as a lived-in mechanical city rather than a purely combat school. You can browse its shop without joining, which is how most wanderers buy the Version 2.0 Gauntlets. The same streets host Cloudstair construction for Heaven’s Threshold. Join if you want the construction story; skip the oath if you only need the shop.",
    image: "/sect/mohist-hill.jpg",
  },
];

export default function SectsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet sects background art"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Sects in Where Winds Meet – who you stand with.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Sects in Where Winds Meet are more than skill trees. They are
            philosophies, social circles, and long-term story threads that sit
            on top of your weapons and inner arts. Detailed Traditional Chinese
            community guides spend pages comparing them; this page condenses
            that spirit into an English overview so you can choose with your
            heart first and optimize later.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Each sect below focuses on three questions:{" "}
            <span className="font-semibold">what they believe</span>,{" "}
            <span className="font-semibold">how they tend to fight or live</span>
            , and{" "}
            <span className="font-semibold">what kind of player usually feels at home there</span>
            . Treat these as mood boards, not hard restrictions—your character
            can still surprise both the sect and the world.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Version <strong>2.3 Friends From Afar</strong> adds the <strong>Inkbound Order</strong> in Qingzhou—the first dual-sect “Visiting Disciple” track called out in the official Dev Letter. See the dedicated section below; older mood-board cards keep their existing English names and are not remapped here.
          </p>
        </div>
      </section>

      <section id="inkbound-order" className="space-y-4 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Version 2.3 · Qingzhou</p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">Inkbound Order</h2>
        <p className="text-sm leading-6 text-slate-200">
          <strong>Region home:</strong> Qingzhou (academies across the map). Live with Version 2.3 Friends From Afar (<strong>2026-10-15</strong>).
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <OfficialMediaFigure item={inkboundCampus} aspectClassName="aspect-[4/3]" />
          <OfficialMediaFigure item={inkboundCollegeLife} aspectClassName="aspect-[4/3]" />
          <OfficialMediaFigure item={inkboundVisitingDisciple} aspectClassName="aspect-[4/3]" />
        </div>
        <h3 className="text-lg font-semibold text-slate-50">What they believe (official pitch)</h3>
        <p className="text-sm leading-6 text-slate-300">
          Inkbound Order is Qingzhou’s scholarly sect: academies, lectures, exams, and the idea that a fight should state its reasons before blades move. Official Dev Letter Part 2 frames it as “going to college in the Jianghu”—classrooms, dorms, dining hall, and debate culture alongside martial study. Campus marks called out in that letter include the main-island central campus and <strong>Pavilion of Tomes</strong>, <strong>Wellspring Town</strong> Primary Academy, <strong>Crownleek</strong> ecological agriculture branch, and athletic grounds.
        </p>
        <h3 className="text-lg font-semibold text-slate-50">How you join (confirmed steps only)</h3>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Obtain an <strong>admission / entry permit from Master Goose</strong>.</li>
          <li>Sit the <strong>Primary Exam</strong>.</li>
          <li>After enrollment, progress sect tasks to open campus spaces (classrooms, dorms, dining hall—per Dev Letter; exact quest IDs Pending official confirmation).</li>
        </ol>
        <p className="text-sm leading-6 text-slate-300">
          <strong>Ranks</strong> called out in the Version 2.3 overview summary: <strong>Novice</strong> and <strong>Initiate</strong> are available with the update; higher ranks unlock after the <strong>Farm Recess</strong> (Farm Recess calendar Pending official confirmation).
        </p>
        <p className="text-sm leading-6 text-slate-300">
          <strong>October 16 hotfix note:</strong> official fixes included Inkbound Order entrance-exam questions—if an exam prompt looked wrong on day-one clients, re-check after the Oct 16 patch.
        </p>
        <h3 className="text-lg font-semibold text-slate-50">Visiting Disciples (dual-sect)</h3>
        <p className="text-sm leading-6 text-slate-300">
          Already pledged elsewhere? Official Part 2 states Inkbound Order introduces the first <strong>Dual-Sect</strong> feature: keep your <strong>primary sect</strong> and study here as a <strong>Visiting Disciple</strong> (“second major”). Do not tell players they must abandon Mohist Hill / other homes to sample Inkbound coursework.
        </p>
        <h3 className="text-lg font-semibold text-slate-50">Combat &amp; social flavor (no numbers)</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>State a just cause before dueling; winners may leave calligraphy on the opponent’s face (Dev Letter flavor).</li>
          <li>Discipline tools (wooden paddle) exist for troublemakers in the pitch text—treat as fantasy flavor until a systems guide is verified.</li>
          <li>Words are gameplay: Gift of Gab’s new <strong>War of Words</strong> debate mode is unlocked through the <strong>Profession</strong> feature, played in Qingzhou, and <strong>keeps your existing Scholar rank</strong> (2.3 overview summary). Deep mode guide → <Link href="/guides/gift-of-gab" className="text-emerald-300 underline underline-offset-4">/guides/gift-of-gab</Link>.</li>
        </ul>
        <p className="text-sm leading-6 text-slate-300">
          <strong>Who might feel at home:</strong> players who like investigation, lectures, debate minigames, and a campus rhythm between open-world fights—especially anyone who wants Qingzhou content without abandoning an existing sect identity.
        </p>
        <div className="flex flex-wrap gap-2 pt-2 text-sm">
          <Link href="/guides/qingzhou" className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-emerald-200">Qingzhou unlock →</Link>
          <Link href="/guides/patch-notes" className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-emerald-200">Patch notes →</Link>
          <Link href="/guides/martial-arts-weapons#silkbind-wings" className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-emerald-200">Silkbind – Wings →</Link>
        </div>
        <p className="text-xs text-slate-400">
          Sources: <a href="https://www.wherewindsmeetgame.com/news/official/1014devletter.html" target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4">Dev Letter Part 2</a>, <a href="https://www.wherewindsmeetgame.com/news/official/FriendsFromAfar.html" target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4">Friends From Afar</a>, <a href="https://www.wherewindsmeetgame.com/news/official/1016patchnotes.html" target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4">Oct 16 patch</a>.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Picking a sect that fits your story.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you are still leveling your very first character, do not treat your
          sect choice as a trap. Traditional Chinese guides often recommend
          choosing based on fantasy and only later worrying about ultra
          optimized setups. You can always adjust builds, but it is much harder
          to enjoy a long story tied to a group you never liked.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A simple heuristic is to think about{" "}
          <span className="font-semibold">what you enjoy doing when you are not in combat</span>{" "}
          and pick a sect whose daily life matches that: healing strangers,
          chasing rumors in taverns, studying maps and mechanisms, or quietly
          keeping a frontier safe. The rest of your toolkit will naturally
          follow.
        </p>
      </section>

      <section className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2 xl:grid-cols-3">
        {sects.map((sect) => (
          <article
            key={sect.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60"
          >
            <div className="relative h-32 w-full overflow-hidden bg-slate-900/80 sm:h-40">
              <CdnImage
                src={sect.image}
                alt={sect.name}
                fill
                className="object-cover object-center opacity-90"
                sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {sect.name}
                </h3>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                  {sect.roleHint}
                </span>
              </div>
              <p className="text-xs font-medium text-emerald-200">
                {sect.tagline}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">
                {sect.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
