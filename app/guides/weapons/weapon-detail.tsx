import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { weapons, type WeaponId } from "@/lib/weapons";
import { weaponDetails } from "@/lib/weaponDetails";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export function generateWeaponMetadata(id: WeaponId): Metadata {
  const weapon = weapons.find((w) => w.id === id);
  if (!weapon) {
    return {};
  }

  return {
    title: `${weapon.name} Weapon Guide – Where Winds Meet`,
    description: `How ${weapon.name} tends to feel in Where Winds Meet, its typical strengths and tradeoffs, and how it can connect to common builds and tier list thinking.`,
    alternates: buildHreflangAlternates(`/guides/weapons/${weapon.id}`),
  };
}

export function WeaponDetail({ weaponId }: { weaponId: WeaponId }) {
  const weapon = weapons.find((w) => w.id === weaponId);

  if (!weapon) {
    return null;
  }

  const detail = weaponDetails[weapon.id];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${weapon.name} Weapon Guide – Where Winds Meet`,
      description: weapon.description,
      url: `${baseUrl}/guides/weapons/${weapon.id}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Weapons", item: `${baseUrl}/guides/weapons` },
        { "@type": "ListItem", position: 4, name: weapon.name, item: `${baseUrl}/guides/weapons/${weapon.id}` },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {weapon.name} in Where Winds Meet.
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Role: {weapon.role}
          </p>
          {detail && (
            <>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                {detail.slogan}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Difficulty: {detail.difficulty} · Recommended for:{" "}
                {detail.recommendedFor}
              </p>
            </>
          )}
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {weapon.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Treat this page as a practical companion to the{" "}
            <Link
              href="/guides/tier-list"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Where Winds Meet tier list
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              recommended builds
            </Link>
            . When patch notes shift numbers, the core fantasy and feel of{" "}
            {weapon.name} usually stay the same, so you can focus on whether the
            weapon&apos;s rhythm matches how you like to play.
          </p>
          <p className="text-xs text-slate-400">
            Notes: This page is based on official showcases and general action
            RPG experience. It is meant to describe weapon feel and typical
            roles rather than exact numbers. Treat it as a starting viewpoint,
            and always trust in-game experience and patch notes first.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <CdnImage
              src={weapon.officialArt}
              alt={weapon.name}
              fill
              className="object-contain object-center"
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <p className="text-xs text-slate-400">
            Artwork and motion are based on official Where Winds Meet weapon
            showcases. Exact visuals may evolve over time with new patches or
            cosmetics.
          </p>
        </div>
      </section>

      {detail && (
        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            How {weapon.name} tends to play.
          </h2>
          {detail.positioning.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed text-slate-200 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {detail && (
        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Strengths and upsides.
            </h2>
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
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Tradeoffs and things to watch.
            </h2>
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
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Gentle practice goals for {weapon.name}.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            These are not mandatory combos, just small exercises that help you
            understand how {weapon.name} wants to move and trade blows. Use
            them in low-pressure content first, then slowly bring them into more
            serious runs.
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

      {weapon.id === "mo-blade" && (
        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Sample Mo Blade builds for PVE and PVP.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            The Mo Blade has quickly become one of the most popular heavy
            weapons in Traditional Chinese community guides because it supports
            both ultra-safe story runs and demanding endgame encounters. The
            builds below are adapted from high level Traditional Chinese
            write-ups and rewritten in English so that global players can apply
            the same principles without needing to read the original sources.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Treat them as starting points, not strict scripts. Names for
            specific martial arts, inner arts, and gear may appear in Chinese in
            your client; when that happens, use the descriptions and roles
            listed here to match skills rather than chasing exact translations.
          </p>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              1. Wheelchair umbrella tank – relaxed story & solo PVE.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              This build is designed for players who mainly want to enjoy the
              story and vistas without wrestling with tight reaction checks. You
              pair Mo Blade with a healing umbrella set-up and play almost
              entirely on defense, letting shields, regeneration, and executions
              slowly grind bosses down.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Core idea:</span> commit to a
                  “shield → defend → execute” loop. You largely stop pressing
                  regular attacks and focus on guarding, parrying, and dodging
                  until posture breaks.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Weapon pairing:</span> Mo
                  Blade with a healing umbrella (often described in Chinese
                  guides as a “奶傘” setup that applies long duration regen).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Inner arts focus:</span> max
                  out survivability first—max HP, sustained healing, and
                  damage reduction. Community guides often highlight combinations
                  that extend shield uptime and smooth chip damage rather than
                  spiking DPS.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Gear priorities:</span>{" "}
                  defensive sets that extend shield coverage or add emergency
                  healing. When in doubt, favor HP% and flat HP over greedy
                  offense.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Typical rotation:</span> open
                  with umbrella to apply a long regeneration buff → swap to Mo
                  Blade and activate your shield skill → play pure defense,
                  using parries and dodges to deplete posture → when the boss
                  falls, land a full charged light attack and execute → back
                  away and repeat. Save your strongest emergency mystic art for
                  genuine mistakes rather than every small hit.
                </span>
              </li>
            </ul>
            <p className="text-xs text-slate-400 sm:text-sm">
              Use this build when you are learning boss patterns, returning
              after a long break, or simply want a low-stress way to clear
              story content while still feeling the weight of Mo Blade swings.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              2. Offensive Mo Blade – balanced bruiser for PVE & light PVP.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              This variant targets players who already have reasonable
              fundamentals and want to hit much harder without giving up the
              front-line, heavy-armor fantasy. You partner Mo Blade with a
              long-weapon style (often a spear) that applies vulnerability
              effects, then cash them in with heavy Mo Blade swings.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Core idea:</span> alternate
                  between a debuffing spear stance and a shielded Mo Blade
                  stance. The spear sets up vulnerability and personal buffs;
                  Mo Blade spends those windows on 2–3 carefully placed charged
                  attacks.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Inner arts focus:</span>{" "}
                  traits that boost charged attack damage and crit scaling,
                  backed up by just enough survivability to stay on the front
                  line. If you are unsure, bias towards more HP and defense
                  until you rarely die to stray hits.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Gear priorities:</span> sets
                  that reward crits and strengthen burst windows, often paired
                  with some baseline mitigation. Community builds frequently
                  stack crit chance and crit damage once basic defenses feel
                  comfortable.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Typical rotation:</span> start
                  in spear stance to land a charged hit that applies your main
                  damage buff → optionally tag on a vulnerability special →
                  swap to Mo Blade, activate your shield skill (converting buffs
                  into a stronger damage window) → perform 2–3 full charged
                  light attacks → swap back and repeat. You accept some chip
                  damage but always respect lethal telegraphs.
                </span>
              </li>
            </ul>
            <p className="text-xs text-slate-400 sm:text-sm">
              This build works well for players who enjoy seeing big numbers
              without abandoning the security of a sturdy weapon. It is a
              natural next step after you outgrow the pure wheelchair setup.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              3. Pure tank Mo Blade – raid main tank.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              The pure tank setup assumes group content where your job is to
              stabilize bosses, hold their attention, and protect teammates. You
              treat personal damage as a bonus and spend most of your resources
              on staying alive, maintaining shields, and controlling boss
              facing.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Core idea:</span> use a
                  taunting spear skill to secure aggro, then switch to Mo Blade
                  and play a classic shield tank—maximizing uptime on damage
                  reduction tools, staying glued to the boss&apos;s front, and
                  only swinging hard during obvious recovery windows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Inner arts focus:</span>{" "}
                  heavy investment into flat mitigation, max HP, and any traits
                  that reward blocking or guarding frequently. Damage-oriented
                  options are largely optional here.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Gear priorities:</span> full
                  defensive sets with tank-oriented set bonuses. Threat
                  generation and damage reduction are worth more than raw attack
                  on this setup.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Typical rotation:</span> open
                  in spear stance with a taunt or high-threat skill to lock
                  aggro → swap to Mo Blade, keep your main shield and defensive
                  stance active at all times → reposition bosses so cone and
                  line attacks never clip your backline → only commit to long
                  charged swings when you are certain mechanics will not force
                  sudden movement.
                </span>
              </li>
            </ul>
            <p className="text-xs text-slate-400 sm:text-sm">
              If you enjoy being the anchor of a group and do not mind trading
              personal damage meters for team stability, this is where Mo Blade
              shines brightest in organized content.
            </p>
          </div>
        </section>
      )}

      {weapon.id === "spear" && (
        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Example spear flows based on Traditional Chinese guides.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Traditional Chinese build write-ups for sword and spear focus on
            three broad families: a relaxed &quot;wheelchair&quot; Nameless
            Sword style that uses spear as a backup, a demanding Nine Swords
            Nine Spears bleed/burn setup, and an Eight Directions spear route
            that leans harder into front-line control. The summaries below adapt
            those ideas into English so you can match them to the skills and
            flow names in your own client.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                Nameless Sword with support spear – &quot;wheelchair&quot;
                comfort.
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                This approach uses Nameless Sword as the primary damage source
                and Spear as a support slot for sustain or extra reach. Community
                guides describe it as a low-stress way to clear story and light
                dungeons without sweating strict rotations.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Core idea:</span> hold most
                    of your damage on charged sword attacks, using Spear tools to
                    cover downtime—either by dropping a debuff, providing extra
                    shielding, or safely poking bosses you do not want to stand
                    directly under.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Inner arts focus:</span> mix
                    one or two offensive options with plenty of stamina sustain
                    and defense. Traditional Chinese lists often pair Nameless
                    Heart arts with comfort picks that keep you alive while you
                    learn boss patterns.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Typical loop:</span> enter
                    with a sword shield or buff → weave repeated charged sword
                    swings as long as stamina allows → when drained or pressured,
                    swap to Spear for a quick control or ranged poke → reset and
                    repeat.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                Nine Swords Nine Spears – high-APM bleed specialist.
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                The more advanced family stacks multiple damage-over-time effects
                with spear skills and then detonates them with sword arts. It is
                frequently highlighted in Traditional Chinese guides as top-tier
                ceiling damage that demands strict execution.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Core idea:</span> open with
                    a fire or elemental mystic art → run a short spear string
                    that stacks bleed and other debuffs → swap to sword and
                    trigger skills that consume or amplify those stacks. Most of
                    your damage comes from overlapping DoTs rather than one big
                    hit.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Inner arts focus:</span>{" "}
                    talents that boost bleed, burn, and other status damage, plus
                    enough stamina tools to keep long strings flowing without
                    collapsing halfway through.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">When to use it:</span> this
                    is best for players who enjoy practicing long rotations on
                    training dummies, then transferring that precision into high
                    endgame bosses once the order is muscle memory.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 sm:text-sm">
                If you prefer a simpler experience, treat these notes as
                background and lean on the Nameless Sword–plus–spear comfort
                setup instead.
              </p>
            </div>
          </div>
        </section>
      )}

      {weapon.id === "umbrella" && (
        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Example Umbrella builds inspired by Traditional Chinese guides.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Umbrella sits at the center of several popular Traditional Chinese
            builds: a pure damage &quot;Ninefold Spring&quot; style, a dedicated
            healer/support route built around arts like Mingchuan Medicine Canon,
            and advanced mixes that pair Umbrella with Fan for PVP control. The
            overviews below translate those ideas into broad English roles.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                Ninefold Spring umbrella – sustained ranged DPS.
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                This variant treats Umbrella as a remote turret: you throw it
                out, let it spin and fire on its own, then use your character to
                reposition, drop mystic arts, or swap to a second weapon while
                the canopy keeps dealing damage.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Core idea:</span> build up
                    the flow resource associated with your umbrella art, then use
                    its special to send the umbrella out like a drone. While it
                    spins, you either reposition or weave in Fan or sword skills
                    that keep enemies locked in the damage zone.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Stats and gear:</span>{" "}
                    prioritize crit and sustained damage uptime over tiny burst
                    windows; Traditional Chinese builds often favor sets that
                    reward long-lasting skills and DoTs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                Pure healer umbrella – dedicated support.
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                Here Umbrella becomes a raid backbone, using medicine-themed arts
                and broad shields to keep everyone standing in stressful
                content. Damage is secondary; your success is measured by how
                calm the party feels.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Core idea:</span> pre-cast
                    heals and shields before predictable boss bursts. Many
                    Traditional Chinese guides emphasize{" "}
                    <span className="font-semibold">pre-healing</span> over
                    reaction—raising health bars ahead of time instead of
                    chasing them afterward.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Inner arts focus:</span> max
                    HP, outgoing healing, shield strength, and tools that refund
                    mystic energy so you can cast often. When in doubt, choose
                    safety over damage.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 sm:text-sm">
                Between mechanics, Traditional Chinese heal guides suggest using
                basic attacks to refill mystic resources so you are ready for
                the next spike, rather than standing idle.
              </p>
            </div>
          </div>
        </section>
      )}

      {weapon.id === "fan" && (
        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Example Fan-focused builds from Traditional Chinese coverage.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            In Traditional Chinese build collections, Fan usually appears either
            as a main weapon in graceful ranged-pressure builds, or as part of a
            high-skill &quot;umbrella–fan dual cultivation&quot; setup where Fan
            does the risky front-line work and Umbrella covers gaps with shields
            and control.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                Fan main – ranged pressure and soft control.
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                This is the natural home for players who enjoy standing a bit
                back, layering slow fields, projectiles, and debuffs while
                occasionally stepping in for stylish finishers.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Core idea:</span> maintain a
                    &quot;wall&quot; of Fan skills between you and enemies,
                    using slows and knockbacks to protect yourself and your
                    team. When everything is on cooldown, reposition rather than
                    forcing greedy melee trades.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Inner arts focus:</span>{" "}
                    damage over time, crit consistency, and just enough
                    survivability to survive dive attempts. Traditional Chinese
                    guides frequently mention traits that extend special skill
                    uptime and widen their areas.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                Umbrella–Fan dual cultivation – advanced hybrid.
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                This is the most technical umbrella–fan setup described in
                Traditional Chinese guides. Fan handles most of the committed
                trades, while Umbrella dips in during safe windows to add
                shields, crowd control, or extra chip damage.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Core idea:</span> wait for
                    bosses to finish big swings, then briefly swap to Umbrella
                    to drop a shield or regeneration zone before returning to
                    Fan for active pressure. You respect umbrella recovery
                    frames instead of casting it in unsafe windows.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-semibold">Recommended players:</span>{" "}
                    people who already feel comfortable on pure Fan or Umbrella
                    and want a high-ceiling style that rewards planning, rhythm,
                    and awareness in both PVE and PVP.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 sm:text-sm">
                If you are new to Fan, start with the simpler ranged-pressure
                variant above before attempting this dual-weapon flow.
              </p>
            </div>
          </div>
        </section>
      )}

      {weapon.id === "spear" && (
        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Sample Spear builds from Traditional Chinese guides.
          </h2>
          <div className="relative h-40 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 sm:h-52">
            <CdnImage
              src="https://www.ludens.com.tw/wp-content/uploads/2025/11/20251116012957_1.jpg"
              alt="Where Winds Meet spear and sword build screenshot"
              fill
              className="object-cover object-center opacity-75"
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Community builds written in Traditional Chinese describe three major
            spear families: simple Nameless basics, a complex bleed-and-burn
            engine centered on Nine Swords and Nine Spears, and a tanky
            Bloodbath-ready setup based on Bafang Thunder Spear. The notes
            below translate those ideas into English so you can copy the
            structure even if your client shows Chinese skill names.
          </p>
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              1. Nameless basics – starter spear and sword.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              The default Nameless Sword and Nameless Spear form a forgiving
              hybrid that focuses on stamina, mobility, and readable combos.
              Guides recommend treating this as a “training deck” for learning
              spacing, stagger breaks, and dodge timing before climbing into
              harder flows.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Keep combos short—two to three hits—then reposition. The goal
                  is to build the habit of attacking only when you have stamina
                  to dodge.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Favor inner arts that stabilize stamina, basic attack power,
                  and stagger damage. You can reassign points later once you
                  commit to a more advanced flow.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              2. Nine Swords &amp; Nine Spears – advanced bleed/burn engine.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              This flow uses a specific spear style to stack bleed, burn, and
              other damage-over-time effects, then swaps to sword to detonate
              them. It has one of the highest ceilings in the game but expects
              you to follow a strict combo script.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Typical PVE loop in guides: apply a fire qi art → spear skill
                  that consumes burning to trigger a flurry → charged spear hit
                  → swap to sword for follow-up strings → return to spear and
                  repeat. The exact names differ by language, but the pattern is
                  “apply status → consume with spear → extend with sword.”
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Inner arts lean heavily on bleed and “extra damage based on
                  max attack” effects. Gear prioritizes crit rate and any
                  affixes that enhance dots or status detonations.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              3. Bafang Thunder Spear – PVE “unkillable” tank.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              Another popular Traditional Chinese build stacks multiple additive
              damage-reduction sources around Bafang Thunder Spear, turning your
              character into a near-unkillable tank for dungeons and Bloodbath
              bosses.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Combine spear skills that grant mitigation with inner arts and
                  qi arts that further reduce incoming damage or redirect it to
                  companions. The goal is to stack many moderate reductions
                  rather than a single massive buff.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Offensively, this setup often leans on qi arts for damage
                  while you stand your ground. It is an excellent “comfort pick”
                  for players who would rather memorize mechanics slowly than
                  race through them.
                </span>
              </li>
            </ul>
          </div>
        </section>
      )}

      {(weapon.id === "umbrella" || weapon.id === "fan") && (
        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Umbrella &amp; fan builds inspired by Traditional Chinese guides.
          </h2>
          <div className="relative h-40 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 sm:h-52">
            <CdnImage
              src="https://www.ludens.com.tw/wp-content/uploads/2025/11/20251116015118_1.jpg"
              alt="Where Winds Meet umbrella and fan builds screenshot"
              fill
              className="object-cover object-center opacity-75"
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Umbrella and fan weapons support three standout playstyles in
            Traditional Chinese builds: a pure damage umbrella that plays like a
            roaming turret, a PVP control fan, and a full healer archetype. All
            share a focus on positioning and resource flow rather than raw
            button mashing.
          </p>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              1. Ninefold Spring umbrella – sustained DPS turret.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              This build revolves around an umbrella art often translated as
              “Ninefold Spring,” which builds a flower-like resource and spends
              it on a special that throws the umbrella out to attack on its own.
              While it spins, you can freely swap weapons or cast qi arts.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Core loop in guides: apply a debuff skill → throw the umbrella
                  so it auto-attacks → swap to a second weapon or spam qi arts →
                  swap back when the special ends and repeat.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Inner arts prioritize crit chance, projectile damage, and
                  attack speed so the umbrella&apos;s shots stack effects quickly.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              2. Qingshan Brush fan – PVP control and burst.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              In duels, Traditional Chinese guides highlight a fan style often
              called “Qingshan Brush” as the core of a control-focused build.
              The idea is to use the fan&apos;s strong openers and stuns to set
              up high-damage qi arts.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Open with a fan skill that locks the opponent in place, then
                  immediately chain into your strongest qi art or a pre-planned
                  combo string. The goal is to compress as much damage as
                  possible into each control window.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  For stats, favor accuracy, crit, and tools that help you land
                  the opening hit reliably in PVP—range, movement, and quick
                  start-up matter more than pure raw attack.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              3. Healing umbrella/fan – full support specialist.
            </h3>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              A third family pairs healing-focused umbrella and fan arts into a
              pure support build. Chinese guides frame this as the backbone of
              safer dungeon groups, where your job is to erase mistakes and keep
              everyone moving.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Prioritize inner arts and gear that boost healing, shields,
                  and damage reduction rather than personal DPS. Treat your own
                  damage as a bonus that happens while you keep buffs and
                  regen ticking.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  This style shines in coordinated co-op or difficult PVE where
                  the limiting factor is survival, not kill speed. It is less
                  solo-efficient but can dramatically raise party success rates.
                </span>
              </li>
            </ul>
          </div>
        </section>
      )}

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Watching {weapon.name} in motion.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Before committing to a full respec or fresh character, it helps to see
          how a weapon looks and sounds during real combat. The official
          showcase clip below offers a quick preview so you can decide whether{" "}
          {weapon.name} matches your taste.
        </p>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          <video
            src={weapon.officialVideo}
            controls
            muted
            loop
            className="h-full w-full"
          />
        </div>
        {detail && (
          <div className="space-y-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
            <p>
              When you watch the clip, you might focus on details like timing,
              distance, and how openings are created rather than only the visual
              effects:
            </p>
            <ul className="space-y-1">
              {detail.videoFocusPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p>
              Video links reference official showcase footage. If a clip fails
              to load, it likely means the hosting URL has changed since this
              page was last updated.
            </p>
          </div>
        )}
      </section>
    </article>
  );
}
