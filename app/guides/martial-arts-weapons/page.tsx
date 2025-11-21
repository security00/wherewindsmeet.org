import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { martialArtPaths, martialArtWeapons } from "@/lib/martialArts";

export const metadata: Metadata = {
  title: "Where Winds Meet Martial Arts Weapons List & Unlock Guide",
  description:
    "Full comparison table of all 12 martial art weapons in Where Winds Meet with images, path focus, signature skills, and unlock methods via Skill Theft or sects.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/martial-arts-weapons",
  },
};

const pathLookup = Object.fromEntries(
  martialArtPaths.map((path) => [path.id, path]),
);

export default function MartialArtsWeaponsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg5.png"
            alt="Where Winds Meet martial arts background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Martial arts quick reference
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            All martial art weapons with pictures, skills, and unlock paths.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Where Winds Meet ties each martial art to a specific weapon. The
            table below mirrors the wiki layout you shared—icons, path tags,
            core skills, and the exact unlock steps—so you can see every option
            at a glance. Pair it with the{" "}
            <Link
              href="/guides/skill-theft"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Skill Theft guide
            </Link>{" "}
            for stealth routes and with the{" "}
            <Link
              href="/guides/sects"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              sect primer
            </Link>{" "}
            if you plan to join a school instead of stealing a style.
          </p>
          <p className="text-xs text-slate-400 sm:text-sm">
            Tip: you can equip two martial arts at once. Mix offense and
            support (for example, Silkbind - Deluge + Stonesplit - Might) to
            cover both survivability and party utility.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Martial art paths at a glance.
          </h2>
          <p className="text-xs text-slate-400">
            6 paths · 12 weapons · offense, defense, and support flavors
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {martialArtPaths.map((path) => (
            <div
              key={path.id}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                    Path
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {path.name}
                  </h3>
                </div>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-500/40">
                  {path.relatedWeapons.length} weapons
                </span>
              </div>
              <p className="text-sm text-slate-200">{path.focus}</p>
              <p className="text-xs text-slate-400">{path.flavor}</p>
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-emerald-200">Pairs:</span>{" "}
                {path.relatedWeapons.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            All martial art weapons (with unlock steps).
          </h2>
          <p className="text-xs text-slate-400">
            Image + path + signature skills + how to obtain
          </p>
        </div>
        <p className="text-sm text-slate-300">
          Most unlocks come from either Skill Theft missions (stealth and
          observation mini-games) or joining a sect long enough to claim their
          teachings. Qi Sheng can also hand out a few weapons once you submit
          your first Oddity. Check the list before traveling so you can bring
          Loong Keys for locked sanctums.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] border-separate border-spacing-y-3 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-300">
                <th className="px-4">Weapon</th>
                <th className="px-4">Path</th>
                <th className="px-4">Signature skills</th>
                <th className="px-4">Unlock methods</th>
              </tr>
            </thead>
            <tbody>
              {martialArtWeapons.map((weapon) => {
                const path = pathLookup[weapon.pathId];
                return (
                  <tr key={weapon.id} className="align-top">
                    <td className="rounded-l-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-20 w-28 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                          <Image
                            src={weapon.image}
                            alt={weapon.name}
                            fill
                            sizes="112px"
                            className="object-contain p-2"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-50">
                            {weapon.name}
                          </p>
                          <p className="text-xs text-emerald-200">
                            {path?.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <p className="text-sm text-slate-200">{path?.focus}</p>
                      <p className="text-xs text-slate-400">{path?.flavor}</p>
                    </td>
                    <td className="border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <div className="space-y-1 text-slate-200">
                        <div>
                          <span className="font-semibold text-emerald-200">
                            Main:
                          </span>{" "}
                          {weapon.mainSkills.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-200">
                            Basic:
                          </span>{" "}
                          {weapon.basicSkills.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-200">
                            Charged:
                          </span>{" "}
                          {weapon.chargedSkills.join(", ")}
                        </div>
                      </div>
                    </td>
                    <td className="rounded-r-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <ul className="list-disc space-y-1 pl-4 text-slate-200">
                        {weapon.unlockMethods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-50">
            Unlock flow in practice
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-emerald-200">Skill Theft:</span>{" "}
              Stealth into the marked sanctum, invest a Loong Key if needed,
              observe the master, and beat the ring-timing mini-game to copy
              the style.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Join & leave sects:</span>{" "}
              You can temporarily join a sect to claim its weapon, then swap
              allegiances later. Check the sect clues menu and travel for
              invitations.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Oddities and mail:</span>{" "}
              Submitting your first Oddity to Qi Sheng or checking mailbox
              rewards can hand out key weapons without extra travel.
            </li>
          </ul>
          <Link
            href="/guides/skill-theft"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Go to the Skill Theft walkthrough →
          </Link>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-50">
            Leveling your martial arts
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              Spend Zhou Coins and Training Items to raise levels; they cannot
              pass your character level without a breakthrough.
            </li>
            <li>
              Breakthroughs unlock every 10 levels and require Custom Tips
              (buyable with Jade Fish in the Activity Shop) plus coins and
              training items.
            </li>
            <li>
              Upgrades boost both damage and side effects like shields or heals,
              so even support weapons feel noticeably better as they rank up.
            </li>
          </ul>
          <p className="text-xs text-slate-400">
            For pacing, farm Training Items from regular enemies while queuing
            for sect or Skill Theft runs so you never sit at a level cap.
          </p>
        </div>
      </section>
    </article>
  );
}
