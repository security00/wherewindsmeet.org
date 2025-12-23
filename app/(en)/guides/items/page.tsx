import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import ItemTabs from "./ItemTabs";
import { itemCategories } from "./data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Items Index – materials, consumables, and curios",
  description:
    "Curated index of key items in Where Winds Meet with tabbed categories, images, uses, and quick locations, inspired by the wiki layout.",
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
            Where Winds Meet item index with quick-use tabs.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Following the wiki layout you provided, we&apos;ve organized items into clickable category tabs.
            Each category displays representative items, their uses, and acquisition methods for quick player lookup. Pair with{" "}
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

      <ItemTabs categories={itemCategories} />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Usage Tips</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Prioritize collecting materials and development materials first—they gate weapon and inner skill breakthroughs.</li>
            <li>Prepare 2-3 group dishes for consumables; eat before teaming to improve error tolerance.</li>
            <li>Use common items as gifts or favor items to unlock serendipitous encounters and discounts.</li>
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
