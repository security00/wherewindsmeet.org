import type { Metadata } from "next";
import Image from "next/image";
import FeaturedImagesGallery from "./FeaturedImagesGallery";
import AppearanceSetsDisplay from "./AppearanceSetsDisplay";
import OtherAppearancesDisplay from "./OtherAppearancesDisplay";
import appearanceSets from "./appearance-sets.json";
import otherAppearances from "./other-appearances.json";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Cosmetics & Appearance Guide – character customization",
  description:
    "Complete guide to appearance sets, hairstyles, and cosmetics in Where Winds Meet. Includes acquisition methods, rarity, and cultural inspiration.",
  alternates: buildHreflangAlternates("/guides/cosmetics"),
};

export default function CosmeticsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Where Winds Meet cosmetics background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Cosmetics & Appearance
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Character customization and appearance guide.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Discover and collect unique appearance sets inspired by Mohist legends and jianghu culture.
            Each cosmetic tells a story grounded in classical Chinese aesthetics and craftsmanship.
            Express your character&apos;s personality through customizable outfits, hairstyles, and effects
            that blend function with artistic beauty.
          </p>
        </div>
      </section>

      <FeaturedImagesGallery />

      <AppearanceSetsDisplay sets={appearanceSets} />

      <OtherAppearancesDisplay appearances={otherAppearances} />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Customization Tips</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Appearance sets often have separable top and bottom pieces—mix and match for unique looks.</li>
            <li>Most cosmetics are dyeable, allowing you to personalize colors to match your style.</li>
            <li>Limited-time promotions offer significant discounts on select items—don&apos;t miss out!</li>
            <li>Different appearance sets reflect Mohist tradition and jianghu stories—collect them all for cultural immersion.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Currency Guide</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><span className="text-emerald-200 font-semibold">Octave Aperture (八音窍)</span> - Premium currency earned through gameplay and special events</li>
            <li><span className="text-emerald-200 font-semibold">Resonant Pearl (长鸣珠)</span> - Standard currency for cosmetic purchases</li>
            <li>Save currency for limited-time exclusive items or rotating stock in the Harmony Store</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-2xl font-semibold text-slate-50 mb-4">About Appearance Customization</h2>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            In Where Winds Meet, appearance customization goes beyond simple aesthetics—it&apos;s a form of
            storytelling rooted in classical Chinese culture. Each cosmetic set draws inspiration from Mohist
            legends, jianghu traditions, and historical craftsmanship techniques.
          </p>
          <p>
            The Harmony Store serves as your gateway to these exclusive items, featuring both permanent
            collections and rotating limited-time offerings. Whether you seek the bronze mechanisms of
            the Peng Shan set or the elegant tranquility of rain-inspired designs, there&apos;s something
            for every adventurer&apos;s taste.
          </p>
          <p className="text-emerald-200">
            Tip: Check back frequently for new arrivals and seasonal promotions!
          </p>
        </div>
      </section>
    </article>
  );
}
