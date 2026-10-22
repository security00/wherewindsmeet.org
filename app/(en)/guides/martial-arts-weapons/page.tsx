import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import Link from "next/link";
import { martialArtPaths, martialArtWeapons } from "@/lib/martialArts";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { waistDrumBeats, waistDrumCombat } from "@/lib/officialQingzhouMedia";

export const metadata: Metadata = {
  title: "Where Winds Meet Martial Arts Weapons List & Unlock Guide",
  description:
    "Full comparison table of martial art weapons in Where Winds Meet, including Version 2.3 Silkbind – Wings (Museflow Waist Drum + Willowbend Fan), Version 2.0 Gauntlets, and Drunken Fist, with path focus and unlock methods.",
  alternates: buildHreflangAlternates("/guides/martial-arts-weapons"),
};

const pathLookup = Object.fromEntries(
  martialArtPaths.map((path) => [path.id, path]),
);

export default function MartialArtsWeaponsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg5.webp"
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
            9 paths · 17 weapons · including Version 2.3 Silkbind – Wings
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {martialArtPaths.map((path) => (
            <div
              key={path.id}
              id={path.id}
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
                        <div className="relative flex h-20 w-28 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                          {weapon.image ? (
                            <CdnImage
                              src={weapon.image}
                              alt={weapon.name}
                              fill
                              sizes="112px"
                              className="object-contain p-2"
                            />
                          ) : (
                            <span className="px-2 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                              Art pending
                            </span>
                          )}
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

      <section className="space-y-4 rounded-3xl border border-indigo-400/30 bg-indigo-500/10 p-6 shadow-lg shadow-indigo-950/30">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Official Silkbind – Wings / Waist Drum media
        </h2>
        <p className="text-sm leading-6 text-slate-300">
          Publisher Dev Letter Part 2 clips. Skill names and DPS numbers stay Pending in-game capture—these are orientation stills only.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <OfficialMediaFigure item={waistDrumCombat} />
          <OfficialMediaFigure item={waistDrumBeats} />
        </div>
      </section>

      <section id="silkbind-wings-faq" className="space-y-4 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Silkbind – Wings / Waist Drum FAQ
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="font-semibold text-slate-50">How do I unlock the Waist Drum in Where Winds Meet?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Unlock Qingzhou, open Qingzhou&apos;s Journal, and clear Jianghu Legacy <strong>[Sea Shepherd]</strong> for{" "}
              <strong>[Museflow Waist Drum]</strong>. The paired Fan <strong>[Willowbend Fan]</strong> comes from{" "}
              <strong>[Riddled Echoes]</strong>. Region checklist:{" "}
              <Link href="/guides/qingzhou" className="text-emerald-300 underline underline-offset-4">/guides/qingzhou</Link>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="font-semibold text-slate-50">Is Silkbind – Wings the same as Silkbind – Jade or Silkbind – Deluge?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              No. Jade / Deluge are older Fan/Umbrella paths already on this table. <strong>Silkbind – Wings</strong> is the
              Version 2.3 path for Waist Drum + Willowbend Fan.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="font-semibold text-slate-50">Should I respec immediately for Wings?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Read our{" "}
              <Link href="/news#october-15-version-2-3-path-balance" className="text-emerald-300 underline underline-offset-4">
                /news Path Balance Oct 15
              </Link>{" "}
              card, then test on the Multiplayer Wooden Stake added in the Oct 15 patch notes. This page will not publish an
              unverified tier rank—see{" "}
              <Link href="/guides/builds" className="text-emerald-300 underline underline-offset-4">/guides/builds</Link>{" "}
              only after measured notes exist.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="font-semibold text-slate-50">Is there a Chordsong / Tonight&apos;s Reverie requirement?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Those names appear as <strong>appearances / VFX</strong> on official appearance notes (for example Crane
              Ascending: Chordsong Waist Drum VFX; Tonight&apos;s Reverie), not as unlock gates for the martial art itself.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Related systems named in the 2.3 overview (no stats): Legendary Inner Way [Harmony Song]; Epic [Zephyr Whispers],
          [Melody of the Brush], [Blade&apos;s Will]; gear sets [Cloudshear], [Reinchime].
        </p>
      </section>
    </article>
  );
}
