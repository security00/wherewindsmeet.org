import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Winds Meet Skill Theft Guide – unlock, stealth steps, mini-game tips",
  description:
    "How to unlock Skill Theft in Where Winds Meet, beat the ring-based observation mini-game, and use stolen skills to grab martial art weapons faster.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/skill-theft",
  },
};

const miniGameShots = [
  {
    src: "/martial-arts/skill-theft/skill-theft-comprehension.webp",
    alt: "Comprehension ring during Skill Theft mini-game",
    caption: "Tap Comprehend on gold rings to fill the meter fast.",
  },
  {
    src: "/martial-arts/skill-theft/skill-theft-wrong.webp",
    alt: "Grey ring penalty during Skill Theft",
    caption: "Avoid grey rings; they drain comprehension and time.",
  },
  {
    src: "/martial-arts/skill-theft/skill-theft-multiple.webp",
    alt: "Multiple rings shown at once during Skill Theft",
    caption: "Some steps flash multiple rings—hit all of them for a big boost.",
  },
];

export default function SkillTheftPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg4.webp"
            alt="Where Winds Meet Skill Theft background art"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>
        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Skill Theft walkthrough
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Unlock Skill Theft and copy martial arts without a fight.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Skill Theft lets you learn abilities by watching masters and
            clearing a timing mini-game. It is required for several martial art
            weapons and often unlocks progression-blocking skills. Use the
            steps and screenshots below to grab the ability early, make each
            heist smoother, and pair it with the full{" "}
            <Link
              href="/guides/martial-arts-weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              martial arts weapons list
            </Link>{" "}
            when you are ready to pick targets.
          </p>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Quick unlock route
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Teleport to <span className="text-emerald-200">Front Mountain</span>{" "}
              or <span className="text-emerald-200">Moonveil Peak</span> (Boundary Stone).
            </li>
            <li>
              Talk to <span className="font-semibold text-slate-100">Qi Yuehai</span> and accept
              the quest{" "}
              <span className="italic text-emerald-200">
                Skill Theft: Unearned Lesson
              </span>
              .
            </li>
            <li>
              Complete the quest to gain the Skill Theft ability, then open the
              martial arts menu and use <strong>Obtain</strong> on a weapon to
              place your first theft marker.
            </li>
          </ol>
          <p className="text-xs text-slate-400">
            Even if you are leveling another path, unlocking Skill Theft early
            prevents you from hitting progression walls when a quest or weapon
            suddenly demands it.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            How a theft mission plays out
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-emerald-200">
                Find the marked sanctum:
              </span>{" "}
              many have a Loong Key lock at the gate. Bring keys so you do not
              have to backtrack.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">
                Stay unseen:
              </span>{" "}
              these are stealth runs. Use disguises or Mystic Skills like Touch
              of Death, Veil of Stillness, and Wind Sense to slip past guards.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">
                Observe the master:
              </span>{" "}
              reach the viewing spot, start the mini-game, and hit gold rings on
              time to fill the comprehension bar before the timer expires.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">
                Exit cleanly:
              </span>{" "}
              after learning the skill, leave the compound to finish the quest
              and claim practice opportunities.
            </li>
          </ul>
          <Link
            href="/guides/sects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Compare sect paths if you prefer joining over stealing →
          </Link>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Skill Theft mini-game explained.
        </h2>
        <p className="text-sm text-slate-300">
          Watch the animation loops closely. Gold rings mean “press now,” grey
          rings are traps, and some steps flash multiple rings that you can hit
          for bonus comprehension. Three clean rounds usually fill the bar.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {miniGameShots.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/50"
            >
              <div className="relative h-48 w-full bg-slate-900/80">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-slate-300">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">
            Bring this with you
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Loong Keys for gated sanctum doors.</li>
            <li>Stealth tools or disguises if patrols cluster near the target.</li>
            <li>
              Spare inventory space for any chests you open while infiltrating.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">
            Execute cleanly
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Stay patient—moving too fast often alerts guards.</li>
            <li>Only tap on gold rings; missing or hitting grey rings slows you.</li>
            <li>
              If the timer looks tight, wait for the next safe cycle instead of
              spamming inputs.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">
            Put it to work
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>
              Target weapons first: stolen skills unlock sanctums like{" "}
              <span className="text-emerald-200">Heavenquaker Spear</span> or{" "}
              <span className="text-emerald-200">Vernal Umbrella</span>.
            </li>
            <li>
              Revisit older sanctums after upgrades; higher stats make stealth
              routes safer.
            </li>
            <li>
              Swap in a support martial art for group runs so teammates benefit
              from your stolen kit.
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
