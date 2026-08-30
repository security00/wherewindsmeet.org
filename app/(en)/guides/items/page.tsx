import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import ItemTabs from "./ItemTabs";
import { itemCategories, itemCoverage } from "./data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Items – verified uses and acquisition sources",
  description:
    "Source-backed Where Winds Meet item guide. Verified uses and acquisition details are published separately from records still awaiting review.",
  alternates: buildHreflangAlternates("/guides/items"),
};

export default function ItemsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg2.webp"
            alt="Where Winds Meet items background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Items & Categories
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            A source-backed Where Winds Meet item index.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            This index now separates verified guide entries from names that are still in the editorial queue.
            An item appears in the main tabs only after it has a reliable source, a concrete use or acquisition
            detail. Media is displayed only when its provenance is clear. Pending records are counted below but are
            not presented as complete farming advice. Pair verified entries with{" "}
            <Link
              href="/guides/martial-arts-weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Weapons/Martial Arts Table
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/skill-theft"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Skill Theft Guide
            </Link>{" "}
            to quickly plan your resource farming routes.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-amber-500/25 bg-amber-950/20 p-6 shadow-lg shadow-slate-950/40">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Coverage status
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Incomplete records are withheld, not guessed.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            The legacy catalog contained generic “details pending” copy and images without recorded provenance.
            Duplicate names have been removed. Remaining records stay pending until their gameplay details and
            sources can be checked.
          </p>
        </div>
        <dl className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <dt className="text-xs uppercase tracking-wide text-slate-400">Unique names catalogued</dt>
            <dd className="mt-1 text-2xl font-semibold text-slate-100">{itemCoverage.catalogued}</dd>
          </div>
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-4">
            <dt className="text-xs uppercase tracking-wide text-emerald-300">Published and source-backed</dt>
            <dd className="mt-1 text-2xl font-semibold text-emerald-100">{itemCoverage.published}</dd>
          </div>
          <div className="rounded-2xl border border-amber-500/25 bg-amber-950/20 p-4">
            <dt className="text-xs uppercase tracking-wide text-amber-300">Pending verification</dt>
            <dd className="mt-1 text-2xl font-semibold text-amber-100">{itemCoverage.pending}</dd>
          </div>
        </dl>
      </section>

      <ItemTabs categories={itemCategories} />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Publication standard</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Gameplay claims must link to a reliable verification source.</li>
            <li>At least one concrete use or acquisition detail is required; generic category text is not enough.</li>
            <li>Only owned captures or traceable official media may be displayed. Placeholders and unverified third-party images remain hidden.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Related Guides</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link
                href="/guides/new-players"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                New Player Route: Wise Exploration & Resource Order
              </Link>
            </li>
            <li>
              <Link
                href="/guides/weapons"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Weapon Overview: Choosing Main Weapon & Build
              </Link>
            </li>
            <li>
              <Link
                href="/guides/bosses"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Boss Guide: Pre-Battle Item Checklist
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
