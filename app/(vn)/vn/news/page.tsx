import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import type { NewsType } from "@/lib/news";
import { latestNewsDate, newsItems } from "@/lib/news.vi";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Tin t峄ヽ Where Winds Meet, roadmap & patch notes",
  description:
    "Tin t峄ヽ Where Winds Meet ch峄峮 l峄峜: roadmap, c芒n b岷眓g, patch notes 膽峄?b岷 n岷痬 nhanh thay 膽峄昳 quan tr峄峮g.",
  alternates: buildHreflangAlternates("/news", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Tin t峄ヽ Where Winds Meet, roadmap & patch notes",
    description:
      "Tin t峄ヽ Where Winds Meet ch峄峮 l峄峜: roadmap, c芒n b岷眓g, patch notes 膽峄?b岷 n岷痬 nhanh thay 膽峄昳 quan tr峄峮g.",
    url: `${baseUrl}/vn/news`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Tin t峄ヽ Where Winds Meet, roadmap & patch notes",
    description:
      "Tin t峄ヽ Where Winds Meet ch峄峮 l峄峜: roadmap, c芒n b岷眓g, patch notes 膽峄?b岷 n岷痬 nhanh thay 膽峄昳 quan tr峄峮g.",
  },
};

const searchIntentWatchlist = [
  {
    title: "Future draw preview va reward preview",
    query: "wwm future draw preview",
    action:
      "Kiem tra official news truoc, sau do dua nguoi choi toi cosmetics, free outfits, codes va event reward khi draw duoc xac nhan.",
    href: "/vn/guides/cosmetics",
    cta: "Cosmetics hub",
  },
  {
    title: "Arena ranks va tier-list checks",
    query: "wwm arena ranks",
    action:
      "Giu main tier list, PVP tier list, weapon tier list va patch notes lien ket voi nhau de nguoi leo rank ra quyet dinh nhanh.",
    href: "/vn/guides/tier-list#arena-ranks",
    cta: "Arena rank notes",
  },
  {
    title: "Upcoming nerfs va balance watch",
    query: "upcoming nerf wwm",
    action:
      "Dung official notes lam nguon dung. Phan nay dua nguoi choi toi Path Balance, maintenance moi va impact cards trong patch notes.",
    href: "/vn/guides/patch-notes#upcoming-nerfs",
    cta: "Balance watch",
  },
  {
    title: "Mistveil / Mist-Shrouded Prison aliases",
    query: "mistveil prison",
    action:
      "Xem Mistveil Prison la search intent cho Mist-Shrouded Prison va dua nguoi choi toi route 6 ruong, loop markers va kho bau cuoi.",
    href: "/vn/guides/mist-shrouded-prison#mistveil-prison",
    cta: "Prison route",
  },
];

export default function NewsPage() {
  const typeLabel: Record<NewsType, string> = {
    announcement: "Th么ng b谩o",
    event: "S峄?ki峄噉",
    guide: "H瓢峄沶g d岷玭",
    beta: "Beta",
  };

  const formatDateVi = (iso: string) => {
    const parts = iso.split("-");
    if (parts.length !== 3) return iso;
    const [year, month, day] = parts;
    if (!year || !month || !day) return iso;
    return `${day}/${month}/${year}`;
  };

  const sortedNews = newsItems;

  const lastUpdatedLabel = `C岷璸 nh岷璽: ${formatDateVi(latestNewsDate)}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/news`,
      dateModified: latestNewsDate,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chu", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Tin t峄ヽ", item: `${baseUrl}/vn/news` },
      ],
    },
  ];

  return (
    <article className="space-y-12 bg-ink-wash min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="vi" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md bg-texture-noise">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/6.webp"
            alt="N峄乶 tin t峄ヽ Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        </div>

        <div className="absolute right-8 top-8 hidden text-vertical text-3xl font-bold text-slate-50/10 lg:block font-serif select-none">
          姹熸箹椋庝簯
        </div>

        <div className="relative space-y-6 z-10 max-w-3xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl font-serif">
            Tin t峄ヽ <span className="text-ink-gold">Where Winds Meet</span> m峄沬 nh岷.
          </h1>
          <div className="space-y-4 text-slate-200/90 font-sans text-lg leading-relaxed">
            <p>
              T贸m t岷痶 th么ng b谩o ch铆nh th峄ヽ, roadmap, h瓢峄沶g d岷玭 launch, patch notes v脿 ghi ch煤 beta. M峄梚 th岷?li锚n k岷縯 v峄?ngu峄搉 g峄慶 膽峄?b岷 ki峄僲 ch峄﹏g chi ti岷縯 khi c岷.
            </p>
            <p>
              Mu峄憂 l瓢峄泃 nhanh <span className="font-semibold text-emerald-400">patch notes</span> ho岷穋 c岷璸 nh岷璽{" "}
              <span className="font-semibold text-emerald-400">roadmap</span> m脿 kh么ng ph岷 膽峄峜 m峄峣 d貌ng? B岷痶 膽岷 t岷 膽芒y.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-100">
              {lastUpdatedLabel}
            </span>
          </div>

          <div
            id="next-update"
            className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-50 shadow-inner shadow-emerald-900/40"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">Theo doi Version 1.8 / Companions Make Home</p>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                {lastUpdatedLabel}
              </span>
            </div>
            <p className="mt-2 text-emerald-100/90">
              Latest pass hien theo Version 1.8 / Companions Make Home, patch notes 25/06 va Dev Q&A 23/06. Cac tin Version 1.7, Xbox, anti-cheat, code warning, Hexi va Qinchuan cu van nam ben duoi de nguoi choi quay lai bat kip.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link
                href="/vn/guides/tier-list"
                className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80"
              >
                Tier list (g贸c nh矛n CN)
              </Link>
              <Link
                href="/vn/guides/bosses"
                className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80"
              >
                Thay 膽峄昳 boss
              </Link>
              <Link
                href="/vn/guides/codes"
                className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80"
              >
                Code m峄沬 nh岷
              </Link>
            </div>
          </div>

          <div
            id="organic-search-watch"
            className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4 text-sm text-blue-50 shadow-inner shadow-blue-950/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">Cau hoi nguoi choi dang tim</p>
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-100">
                Current watch
              </span>
            </div>
            <p className="mt-2 text-blue-100/90">
              Nguoi choi dang tim future draw preview, arena ranks, patch-note nerfs, codes, Qinchuan routes, NPCs, map help va Mist-Shrouded Prison answers.
              Dung phan nay nhu shortcut truoc khi doc toan bo archive.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {searchIntentWatchlist.map((item) => (
                <Link
                  key={item.query}
                  href={item.href}
                  className="rounded-xl border border-blue-300/30 bg-slate-950/70 p-3 transition hover:border-blue-200/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">{item.query}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{item.action}</p>
                  <p className="mt-2 text-xs font-semibold text-emerald-300">{item.cta}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {sortedNews.map((item) => (
              <div
                key={item.id}
                className="card-tablet group flex flex-col gap-4 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-bold text-slate-50 group-hover:text-ink-jade transition-colors font-serif">
                      {item.title}
                    </h2>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      {typeLabel[item.type] ?? item.type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 font-mono">
                    {formatDateVi(item.date)}
                    {item.tags && item.tags.length > 0 && (
                      <>
                        <span className="mx-2 text-slate-700">|</span>
                        {item.tags.join(" 路 ")}
                      </>
                    )}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300/90 font-sans max-w-2xl">
                    {item.summary}
                  </p>
                </div>
                {item.officialUrl && (
                  <div className="mt-2 flex shrink-0 sm:mt-0 sm:pl-4 self-start">
                    <Link
                      href={item.officialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-seal text-[10px] py-1 px-3"
                    >
                      膼峄峜 ngu峄搉
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-lg backdrop-blur-sm bg-texture-noise">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif border-brush inline-block pb-2 mb-4">
          Trang n脿y k岷縯 n峄慽 v峄沬 ph岷 c貌n l岷 c峄 hub
        </h2>
        <div className="space-y-4 text-slate-300 font-sans leading-relaxed">
          <p>
            M峄 ti锚u: t岷璸 trung tin quan tr峄峮g 岷h h瓢峄焠g tr岷 nghi峄噈. N岷縰 patch ch峄塶h camera/aim/UI hay th锚m ho岷 膽峄檔g gi峄沬 h岷, b岷 s岷?th岷 t贸m t岷痶 r玫 r脿ng k猫m nh岷痗 l峄媍h.
          </p>
          <p>
            Tin n脿o 岷h h瓢峄焠g build s岷?膽瓢峄 ph岷 谩nh 峄?trang builds/tier list. S峄?ki峄噉 c贸 code hay l峄 铆ch l芒u d脿i s岷?膽瓢峄 g岷痭 nh茫n v脿 li锚n k岷縯 sang trang rewards/codes.
          </p>
          <p>
            N岷縰 c贸 thay 膽峄昳 l峄沶 m脿 b岷 mu峄憂 c岷璸 nh岷璽 c峄?th峄?(PvP, boss, ch岷 l瓢峄g s峄憂g), h茫y nh岷痭 鈥?ch煤ng t么i s岷?瓢u ti锚n c岷璸 nh岷璽 s峄沵.
          </p>
        </div>
      </section>
    </article>
  );
}
