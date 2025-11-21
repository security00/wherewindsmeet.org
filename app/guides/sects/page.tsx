import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where Winds Meet Sects – Factions, Ideals & Playstyles",
  description:
    "Overview of major sects in Where Winds Meet, their philosophies, typical roles, and which kinds of players they tend to suit, paired with in-game sect artwork.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/sects",
  },
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
  | "moshandao";

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
];

export default function SectsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
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
        </div>
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
              <Image
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
