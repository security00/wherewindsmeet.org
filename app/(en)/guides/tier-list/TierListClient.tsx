import Link from "next/link";
import {
  currentWeaponRoster,
  weaponTierMeta,
} from "@/lib/weaponTierData";

const statusStyle = {
  "official-confirmed": "border-emerald-400/40 bg-emerald-500/10 text-emerald-100",
  "established-live": "border-cyan-400/30 bg-cyan-500/10 text-cyan-100",
  "needs-retest": "border-amber-400/30 bg-amber-500/10 text-amber-100",
} as const;

const statusLabel = {
  "official-confirmed": "Officially confirmed",
  "established-live": "Established live roster",
  "needs-retest": "Review required",
} as const;

export default function TierListClient() {
  return (
    <section id="tier-data" className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/50 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              One source of truth · schema v2
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">
              Current weapon evidence matrix
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              All {currentWeaponRoster.length} current weapon families are listed here. “Review required” is
              deliberate: the official sources confirm the roster and selected balance changes, but do not publish
              a complete comparative tier order.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs text-slate-300">
            <p className="font-semibold text-slate-100">{weaponTierMeta.gameVersion}</p>
            <p className="mt-1">Evidence checked {weaponTierMeta.updatedAt}</p>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-900/95 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Weapon</th>
                <th className="px-4 py-3">Roster evidence</th>
                <th className="px-4 py-3">PvE</th>
                <th className="px-4 py-3">PvP</th>
                <th className="px-4 py-3">Guide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-950/70 text-slate-200">
              {currentWeaponRoster.map((weapon) => (
                <tr key={weapon.id}>
                  <td className="px-4 py-4 align-top">
                    <p className="font-semibold text-slate-50">{weapon.name}</p>
                    <p className="mt-1 max-w-xs text-xs leading-5 text-slate-400">{weapon.role}</p>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyle[weapon.roster.status]}`}>
                      {statusLabel[weapon.roster.status]}
                    </span>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-slate-400">{weapon.roster.note}</p>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyle[weapon.pve.status]}`}>
                      {statusLabel[weapon.pve.status]}
                    </span>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-slate-400">{weapon.pve.note}</p>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyle[weapon.pvp.status]}`}>
                      {statusLabel[weapon.pvp.status]}
                    </span>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-slate-400">{weapon.pvp.note}</p>
                  </td>
                  <td className="px-4 py-4 align-top">
                    {weapon.guide.href ? (
                      <Link href={weapon.guide.href} className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                        Open guide
                      </Link>
                    ) : (
                      <span className="text-xs font-semibold text-amber-200">Planned</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-violet-400/25 bg-violet-500/10 p-6">
          <h2 className="text-xl font-bold text-slate-50">How a weapon can earn a tier</h2>
          <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {weaponTierMeta.reviewProtocol.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-400/15 text-xs font-bold text-violet-100">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl border border-cyan-400/25 bg-cyan-500/10 p-6">
          <h2 className="text-xl font-bold text-slate-50">Primary sources</h2>
          <div className="mt-4 space-y-3">
            {weaponTierMeta.provenance.map((source) => (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-cyan-300/50"
              >
                <p className="text-sm font-semibold text-cyan-100">{source.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{source.supports}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-5 text-slate-400">
        <p className="font-semibold text-slate-200">Methodology</p>
        <p className="mt-2">{weaponTierMeta.methodology}</p>
        <p className="mt-3">
          Need mode-specific help now? Use the <Link href="/guides/pvp-tier-list" className="text-emerald-300 underline underline-offset-4">PvP review checklist</Link> or the{" "}
          <Link href="/guides/builds#post-patch-build-check" className="text-emerald-300 underline underline-offset-4">post-patch build check</Link> without treating an unsupported letter as fact.
        </p>
      </div>
    </section>
  );
}
