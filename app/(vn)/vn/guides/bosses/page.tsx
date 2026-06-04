import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { bosses } from "@/lib/bosses.vi";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { resolveCdnAssetSrc } from "@/lib/image-utils";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/bosses");

const versionBossWatch = [
  {
    label: "Ghost Master",
    status: "May 29 fix",
    searchIntent: "where winds meet ghost master / skyward bond boss",
    detail:
      "Patch notes May 29 da fix loi Skyward Bond khi Ghost Master co the xuat hien trong khu chuan bi. Cac bug report cu sau moc nay can duoc xem lai.",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
  },
  {
    label: "Hero's Realm bosses",
    status: "May 27 tuning",
    searchIntent: "where winds meet hero's realm boss guide",
    detail:
      "May 27 live update them boss guidance marks, lock-on camera tot hon, combat assist thong minh hon, item-dropping rules va prompt enemy-flash attack cho Hero's Realm.",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
  },
  {
    label: "Sword Trial bosses",
    status: "May 27 tuning",
    searchIntent: "where winds meet sword trial boss guide",
    detail:
      "Sword Trial cung nhan boss guidance marks, lock-on/camera improvements va combat assist tot hon. Nguoi choi quay lai nen thu lai truoc khi tin vao nhan xet do kho cu.",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
  },
  {
    label: "Sandstorm Tavern",
    status: "May 15 release",
    searchIntent: "where winds meet sandstorm tavern guide",
    detail:
      "Sandstorm Tavern ra mat trong May 15 update cho cua so su kien May 15 den June 5 va van mo vinh vien sau do. Day la muc guide dang lam hon la chi de trong news.",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
  },
  {
    label: "Sunken City Lake / Lunar Eidolon",
    status: "May 15 fix",
    searchIntent: "where winds meet sunken city lake boss lunar eidolon",
    detail:
      "May 15 patch fix loi Lunar Eidolon o Sunken City Lake doi khi khong vao phase cuoi. Loi khuyen cu ve blocker nay nen duoc lam moi.",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Bosses - Ghost Master, Dungeon Boss & Boss List",
  description:
    "Hub boss Where Winds Meet Version 1.7 tieng Viet: Ghost Master, Hero's Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake, boss list, builds va weapon prep.",
  alternates: buildHreflangAlternates("/guides/bosses", { canonicalLanguage: "vi" }),
};

export default function BossesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/bosses`,
      dateModified: freshness?.lastChecked ?? "2026-06-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chu", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Bosses", item: `${baseUrl}/vn/guides/bosses` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet bosses",
      itemListOrder: "Unordered",
      numberOfItems: bosses.length,
      itemListElement: bosses.map((boss, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: boss.name,
        url: `${baseUrl}/vn/guides/bosses/${boss.id}`,
      })),
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="vi" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet boss background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Version 1.7 boss va dungeon hub
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet bosses: Ghost Master, dungeon boss va cac tran quan trong.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Cap nhat {freshness?.lastChecked ?? "2026-06-03"} cho {freshness?.gameVersion ?? "Version 1.7 / The Imperial Palace"}: trang nay ket noi boss list hien co voi cac tim kiem boss va dungeon moi trong patch hien tai.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Bat dau tu Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern va Sunken City Lake truoc khi dung loi khuyen boss cu. Ket hop voi{" "}
            <Link href="/vn/guides/weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              weapon guides
            </Link>{" "}
            va{" "}
            <Link href="/vn/guides/builds" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              builds
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/vn/guides/bosses#faq"
              className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70"
            >
              Boss FAQ
            </Link>
            <Link
              href="/vn/guides/patch-notes"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Patch notes moi
            </Link>
            <Link
              href="/vn/guides/tier-list"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Tier list
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Thong tin boss co the doi nhanh sau patch live-service. Official notes va in-game reward preview nen duoc uu tien.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Version 1.7 watchlist</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Boss va dungeon search nen duoc cap nhat truoc.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Khong phai muc nao cung da la trang boss rieng. Day la cac ung vien guide uu tien khi co mechanics, screenshot va reward on dinh.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {versionBossWatch.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
                  {item.status}
                </span>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                >
                  Nguon chinh thuc
                </a>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">{item.label}</h3>
              <p className="mt-1 text-xs text-slate-400">Search intent: {item.searchIntent}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Boss gallery va chu de nhanh.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bosses.map((boss) => (
            <article
              key={boss.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900/80">
                <video
                  src={resolveCdnAssetSrc(boss.backgroundVideo).src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  poster="/background/bg4.webp"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">{boss.name}</h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {boss.encounterType}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{boss.tagline}</p>
                <p className="text-[11px] text-slate-400">Theme: {boss.theme}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/vn/guides/bosses/${boss.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    Xem encounter
                  </Link>
                  <Link
                    href="/vn/guides/builds"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Xem builds
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Boss FAQ nhanh.
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Nen bat dau voi boss nao?</p>
            <p className="mt-1 text-slate-300">
              Bat dau voi story boss o region hien tai. Sau do thu Hero&apos;s Realm, Sword Trial va Bloodbath khi ban da co weapon pair on dinh.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Boss nao can theo doi sau update?</p>
            <p className="mt-1 text-slate-300">
              Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern va Sunken City Lake la cac tim kiem boss/dungeon dang uu tien.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
