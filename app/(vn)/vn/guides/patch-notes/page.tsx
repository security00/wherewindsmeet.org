import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/patch-notes");

const latestUpdateCards = [
  {
    title: "May 29 Version 1.7 fixes",
    date: "2026-05-29",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Ban fix sau khi The Imperial Palace ra mat: Ghost Master trong Skyward Bond, tai ban do Palace tren mobile, phan thuong Palace Unveiled, loi trang trong Guild Hero's Realm, hien thi model Kaifeng, chon item bang controller va ban dich Jadeware.",
    playerAction:
      "Thu lai Palace event, Skyward Bond, Guild Hero's Realm va ban do mobile truoc khi tin vao bug report cu.",
  },
  {
    title: "May 27 / May 28 live maintenance",
    date: "2026-05-28",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
    summary:
      "Ban cap nhat lon cho Path Tutorial, Martial Art Reset, chi phi Inner Way Conversion, Arena, Hero's Realm, Sword Trial, Guild War, replay tren World Map va cong cu xa hoi.",
    playerAction:
      "Kiem tra lai build, chi phi reset, camera boss, Hero's Realm, Sword Trial va ke hoach Arena sau patch nay.",
  },
  {
    title: "Version 1.7 / The Imperial Palace",
    date: "2026-05-27",
    source: "https://www.wherewindsmeetgame.com/news/official/TheImperialPalace.html",
    summary:
      "Tong quan chinh thuc cua Version 1.7 va boi canh Palace hien tai cho event, roadmap, nguoi choi quay lai va do moi cua guide.",
    playerAction:
      "Dung Version 1.7 lam moc cho patch notes, codes, boss, tier list va builds.",
  },
  {
    title: "Sandstorm Tavern va boss fix cu",
    date: "2026-05-15",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
    summary:
      "Sandstorm Tavern ra mat trong cua so su kien May 15 den June 5 va van mo vinh vien sau do. Cung patch nay da fix loi Lunar Eidolon o Sunken City Lake khong vao phase cuoi.",
    playerAction:
      "Xem Sandstorm Tavern la muc guide can lam, va lam moi loi khuyen cu ve Sunken City Lake.",
  },
];

const impactChecklist = [
  "Patch notes today / new update: dua May 29 va May 27 len dau thay vi noi ve cac tom tat May cu.",
  "Boss va dungeon search: nhac Ghost Master, Hero's Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake va Lunar Eidolon khi co lien quan.",
  "Build search: nhac chi phi Martial Art Reset va Inner Way Conversion thap hon truoc khi khuyen respec.",
  "Tier-list search: noi khuyen weapon va Path voi May 26 Path Balance va May 27 maintenance.",
  "Mobile va controller search: Palace map loading va Season Shop controller selection la fix chinh thuc May 29.",
];

export const metadata: Metadata = {
  title: "Where Winds Meet Patch Notes Hom Nay - Version 1.7, Boss & Roadmap",
  description:
    "Patch notes Where Winds Meet tieng Viet cho Version 1.7: May 29 fixes, Ghost Master, The Imperial Palace, Sandstorm Tavern, Path Balance, boss, build va roadmap.",
  alternates: buildHreflangAlternates("/guides/patch-notes", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Where Winds Meet Patch Notes Hom Nay - Version 1.7, Boss & Roadmap",
    description:
      "Version 1.7 patch notes: May 29 fixes, Ghost Master, The Imperial Palace, Sandstorm Tavern, Path Balance, boss, build va roadmap.",
    url: `${baseUrl}/vn/guides/patch-notes`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Where Winds Meet Patch Notes Hom Nay - Version 1.7",
    description:
      "Version 1.7 patch notes: May 29 fixes, Ghost Master, The Imperial Palace, Sandstorm Tavern, Path Balance, boss va build.",
  },
};

export default function PatchNotesViPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/patch-notes`,
      dateModified: freshness?.lastChecked ?? "2026-06-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chu", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Patch Notes", item: `${baseUrl}/vn/guides/patch-notes` },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg1.webp"
            alt="Where Winds Meet patch notes background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet patch notes hom nay: Version 1.7, boss, dungeon va roadmap.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Cap nhat {freshness?.lastChecked ?? "2026-06-03"}: Where Winds Meet hien dang o boi canh {freshness?.gameVersion ?? "Version 1.7 / The Imperial Palace"}. Chuoi update moi gom The Imperial Palace, May 29 fixes, May 27 / May 28 maintenance, Path Balance va Sandstorm Tavern.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Trang nay danh dau cac diem can kiem tra lai: codes, quest bug, Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, boss guides, builds va tier-list.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Danh sach update chinh thuc moi</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Patch notes moi nhat thay doi dieu gi?
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Neu ban tim Where Winds Meet patch notes hom nay, bat dau tu day. Cac diem nay nen duoc dung de cap nhat guide va internal links.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {latestUpdateCards.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
                  {item.date}
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
              <h3 className="mt-3 text-base font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                <span className="font-semibold text-slate-200">Can lam:</span> {item.playerAction}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/40">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Version 1.7 catch-up: nen kiem tra gi truoc?
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Neu ban quay lai tu guide cu, hay xem Version 1.7 la moc moi. Kiem tra Palace event, Skyward Bond, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, build cost va tier-list recommendation.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/vn/guides/bosses"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Hang doi boss va dungeon guide</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake va cac trang can ghi chu theo patch.
            </p>
          </Link>
          <Link
            href="/vn/guides/builds"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Build reset va meta checks</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Chi phi reset va conversion thap hon giup nguoi choi thu build Version 1.7 de hon.
            </p>
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          SEO guide checklist sau Version 1.7.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Trang update tot khong chi noi la moi. No can tra loi dung cac truy van nguoi choi tim ngay sau patch.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
          {impactChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
