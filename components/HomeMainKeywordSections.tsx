import Link from "next/link";
import type { ContentLanguage } from "@/lib/contentFreshness";
import { getContentFreshness } from "@/lib/contentFreshness";

const baseUrl = "https://wherewindsmeet.org";

type HomeLink = {
  href: string;
  label: string;
  note?: string;
};

type HomeContent = {
  path: string;
  inLanguage: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  updateLabel: string;
  quickFacts: string[];
  ctas: HomeLink[];
  entityCards: Array<{
    title: string;
    body: string;
    links: HomeLink[];
  }>;
  faqHeading: string;
  faqIntro: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const content: Record<ContentLanguage, HomeContent> = {
  en: {
    path: "/",
    inLanguage: "en-US",
    eyebrow: "Main Where Winds Meet hub",
    h1: "Where Winds Meet",
    subtitle:
      "The updated Where Winds Meet guide hub for the open-world wuxia RPG: Version 1.7, The Imperial Palace, codes, patch notes, tier lists, builds, bosses, interactive map routes, and platform help for Xbox, PC, PS5, iOS, and Android players.",
    updateLabel: "Version 1.7 / The Imperial Palace Part 2",
    quickFacts: ["Free-to-play wuxia action RPG", "Xbox, PC, PS5, iOS, and Android", "Guides updated for Version 1.7"],
    ctas: [
      { href: "/news", label: "Latest News" },
      { href: "/guides/patch-notes", label: "Patch Notes" },
      { href: "/guides/codes", label: "Codes" },
      { href: "/guides/new-players", label: "Beginner Guide" },
      { href: "/guides/tier-list", label: "Tier List" },
      { href: "/tools/interactive-map", label: "Interactive Map" },
    ],
    entityCards: [
      {
        title: "What is Where Winds Meet?",
        body:
          "Where Winds Meet is a free-to-play open-world wuxia action RPG set in ancient China. This hub gives new players a plain-English starting point before they choose weapons, factions, bosses, quests, or daily routes.",
        links: [
          { href: "/guides/new-players", label: "Start as a new player" },
          { href: "/guides/weapons", label: "Compare weapons" },
          { href: "/guides/platforms", label: "Check platforms" },
        ],
      },
      {
        title: "Latest update",
        body:
          "The current content pass tracks Version 1.7, The Imperial Palace, May patch notes, Path Balance changes, Palace-era code reports, and the newest boss, dungeon, and arena-rank questions.",
        links: [
          { href: "/news#next-update", label: "News watch" },
          { href: "/guides/patch-notes#upcoming-nerfs", label: "Balance watch" },
        ],
      },
      {
        title: "Start here",
        body:
          "If you searched for where winds meet, where the winds meet, or where winds meet game, use these core guides first: codes, tier list, builds, bosses, and the interactive map.",
        links: [
          { href: "/guides/codes", label: "Codes" },
          { href: "/guides/tier-list", label: "Tier list" },
          { href: "/guides/builds", label: "Builds" },
          { href: "/guides/bosses", label: "Bosses" },
        ],
      },
    ],
    faqHeading: "Where Winds Meet FAQ",
    faqIntro:
      "Fast answers for the main Where Winds Meet searches before you jump into detailed guides.",
    faqs: [
      {
        question: "What is Where Winds Meet?",
        answer:
          "Where Winds Meet is a free-to-play open-world wuxia action RPG about martial arts, exploration, quests, bosses, and player progression across a large Jianghu world.",
      },
      {
        question: "Is Where Winds Meet on Xbox, PS5, PC, and mobile?",
        answer:
          "Yes. Where Winds Meet is available across Xbox Series X|S, Xbox on PC, Xbox Cloud, PC, PlayStation 5, iOS, and Android, with platform-specific store and account-linking details that players should check before purchasing or redeeming rewards.",
      },
      {
        question: "What is the latest Where Winds Meet update?",
        answer:
          "This hub is checked for Version 1.7 / The Imperial Palace, including recent patch notes, Path Balance changes, Palace activity guides, boss and dungeon updates, and code reports.",
      },
      {
        question: "Where can I find Where Winds Meet codes?",
        answer:
          "Use the codes guide for reported Palace-era codes, older Qinchuan and Hexi code candidates, redemption notes, and warnings about leaked or disabled exchange codes.",
      },
      {
        question: "Where is the best Where Winds Meet tier list?",
        answer:
          "Start with the main tier list, then cross-check the PVP tier list, weapons tier list, builds page, and patch notes because Path Balance changes can shift arena ranks and weapon recommendations.",
      },
      {
        question: "Where should new Where Winds Meet players start?",
        answer:
          "New players should start with the beginner guide, interactive map, codes page, weapons overview, tier list, and current patch notes before following older quest or boss guides.",
      },
    ],
  },
  vi: {
    path: "/vn",
    inLanguage: "vi-VN",
    eyebrow: "Hub chính cho Where Winds Meet",
    h1: "Where Winds Meet",
    subtitle:
      "Hub hướng dẫn Where Winds Meet cho game wuxia open-world RPG: Version 1.7, The Imperial Palace, code, patch notes, tier list, build, boss, bản đồ tương tác và thông tin nền tảng cho Xbox, PC, PS5, iOS, Android.",
    updateLabel: "Version 1.7 / The Imperial Palace Part 2",
    quickFacts: ["Wuxia action RPG miễn phí", "Xbox, PC, PS5, iOS, Android", "Guide đã cập nhật Version 1.7"],
    ctas: [
      { href: "/news", label: "Tin mới" },
      { href: "/guides/patch-notes", label: "Patch Notes" },
      { href: "/guides/codes", label: "Codes" },
      { href: "/guides/new-players", label: "Beginner Guide" },
      { href: "/guides/tier-list", label: "Tier List" },
      { href: "/tools/interactive-map", label: "Interactive Map" },
    ],
    entityCards: [
      {
        title: "Where Winds Meet là gì?",
        body:
          "Where Winds Meet là game wuxia action RPG open-world miễn phí lấy bối cảnh Trung Hoa cổ. Hub này giúp người chơi mới hiểu nhanh game trước khi chọn vũ khí, build, boss, nhiệm vụ hoặc route hằng ngày.",
        links: [
          { href: "/guides/new-players", label: "Bắt đầu cho người mới" },
          { href: "/guides/weapons", label: "So sánh vũ khí" },
          { href: "/guides/platforms", label: "Nền tảng / PS5 / PC" },
        ],
      },
      {
        title: "Cập nhật mới nhất",
        body:
          "Nội dung hiện theo Version 1.7, The Imperial Palace, patch notes tháng 5, Path Balance, code Palace được báo cáo, cùng các truy vấn boss, dungeon và arena rank mới.",
        links: [
          { href: "/news#next-update", label: "Theo dõi tin mới" },
          { href: "/guides/patch-notes#upcoming-nerfs", label: "Theo dõi cân bằng" },
        ],
      },
      {
        title: "Nên bắt đầu ở đâu?",
        body:
          "Nếu bạn tìm where winds meet, where the winds meet hoặc where winds meet game, hãy bắt đầu bằng code, tier list, build, boss và bản đồ tương tác.",
        links: [
          { href: "/guides/codes", label: "Codes" },
          { href: "/guides/tier-list", label: "Tier list" },
          { href: "/guides/builds", label: "Builds" },
          { href: "/guides/bosses", label: "Bosses" },
        ],
      },
    ],
    faqHeading: "FAQ Where Winds Meet",
    faqIntro: "Câu trả lời nhanh cho các truy vấn chính trước khi đọc guide chi tiết.",
    faqs: [
      {
        question: "Where Winds Meet là gì?",
        answer:
          "Where Winds Meet là game wuxia action RPG open-world miễn phí, tập trung vào võ học, khám phá, nhiệm vụ, boss và tiến trình nhân vật trong thế giới Jianghu rộng lớn.",
      },
      {
        question: "Where Winds Meet có trên Xbox, PS5, PC và mobile không?",
        answer:
          "Có. Where Winds Meet có trên Xbox Series X|S, Xbox on PC, Xbox Cloud, PC, PlayStation 5, iOS và Android. Người chơi nên kiểm tra store và liên kết tài khoản trước khi mua vật phẩm hoặc đổi thưởng.",
      },
      {
        question: "Cập nhật mới nhất của Where Winds Meet là gì?",
        answer:
          "Hub này đang được kiểm tra theo Version 1.7 / The Imperial Palace, gồm patch notes mới, Path Balance, hoạt động Palace, boss/dungeon và code được báo cáo.",
      },
      {
        question: "Tìm Where Winds Meet codes ở đâu?",
        answer:
          "Dùng trang codes để xem code Palace được báo cáo, code Qinchuan/Hexi cũ hơn, cách redeem và cảnh báo về code leak hoặc đã bị disable.",
      },
      {
        question: "Where Winds Meet tier list nên xem trang nào?",
        answer:
          "Bắt đầu ở tier list chính, rồi kiểm tra thêm PVP tier list, weapon tier list, builds và patch notes vì Path Balance có thể làm đổi arena ranks và khuyến nghị vũ khí.",
      },
      {
        question: "Người mới nên bắt đầu Where Winds Meet từ đâu?",
        answer:
          "Người mới nên đọc beginner guide, interactive map, codes, weapons overview, tier list và patch notes hiện tại trước khi theo các guide nhiệm vụ hoặc boss cũ.",
      },
    ],
  },
  de: {
    path: "/de",
    inLanguage: "de-DE",
    eyebrow: "Zentraler Where Winds Meet Hub",
    h1: "Where Winds Meet",
    subtitle:
      "Der aktualisierte Where Winds Meet Guide-Hub zum Open-World-Wuxia-RPG: Version 1.7, The Imperial Palace, Codes, Patch Notes, Tierlisten, Builds, Bosse, interaktive Karte und Plattformhilfe fuer Xbox, PC, PS5, iOS und Android.",
    updateLabel: "Version 1.7 / The Imperial Palace Part 2",
    quickFacts: ["Free-to-play Wuxia Action-RPG", "Xbox, PC, PS5, iOS und Android", "Guides fuer Version 1.7 aktualisiert"],
    ctas: [
      { href: "/news", label: "Aktuelle News" },
      { href: "/guides/patch-notes", label: "Patch Notes" },
      { href: "/guides/codes", label: "Codes" },
      { href: "/guides/new-players", label: "Einsteiger-Guide" },
      { href: "/guides/tier-list", label: "Tierliste" },
      { href: "/tools/interactive-map", label: "Interaktive Karte" },
    ],
    entityCards: [
      {
        title: "Was ist Where Winds Meet?",
        body:
          "Where Winds Meet ist ein kostenloses Open-World-Wuxia-Action-RPG im alten China. Dieser Hub gibt neuen Spielern einen klaren Einstieg, bevor sie Waffen, Builds, Bosse, Quests oder tägliche Routen wählen.",
        links: [
          { href: "/guides/new-players", label: "Als Anfänger starten" },
          { href: "/guides/weapons", label: "Waffen vergleichen" },
          { href: "/guides/platforms", label: "Plattformen prüfen" },
        ],
      },
      {
        title: "Neuestes Update",
        body:
          "Der aktuelle Inhaltsstand verfolgt Version 1.7, The Imperial Palace, Mai-Patch-Notes, Path Balance, gemeldete Palace-Codes und neue Fragen zu Bossen, Dungeons und Arena-ranks.",
        links: [
          { href: "/news#next-update", label: "News beobachten" },
          { href: "/guides/patch-notes#upcoming-nerfs", label: "Balance beobachten" },
        ],
      },
      {
        title: "Hier starten",
        body:
          "Wenn du nach where winds meet, where the winds meet oder where winds meet game gesucht hast, starte mit Codes, Tierliste, Builds, Bossen und interaktiver Karte.",
        links: [
          { href: "/guides/codes", label: "Codes" },
          { href: "/guides/tier-list", label: "Tierliste" },
          { href: "/guides/builds", label: "Builds" },
          { href: "/guides/bosses", label: "Bosse" },
        ],
      },
    ],
    faqHeading: "Where Winds Meet FAQ",
    faqIntro: "Schnelle Antworten auf die wichtigsten Suchfragen vor den Detail-Guides.",
    faqs: [
      {
        question: "Was ist Where Winds Meet?",
        answer:
          "Where Winds Meet ist ein kostenloses Open-World-Wuxia-Action-RPG mit Kampfkünsten, Erkundung, Quests, Bossen und Charakterfortschritt in einer großen Jianghu-Welt.",
      },
      {
        question: "Gibt es Where Winds Meet auf Xbox, PS5, PC und Mobile?",
        answer:
          "Ja. Where Winds Meet ist fuer Xbox Series X|S, Xbox on PC, Xbox Cloud, PC, PlayStation 5, iOS und Android verfuegbar. Pruefe Store- und Account-Linking-Details, bevor du Kaeufe taetigst oder Belohnungen einloest.",
      },
      {
        question: "Was ist das neueste Where Winds Meet Update?",
        answer:
          "Dieser Hub ist auf Version 1.7 / The Imperial Palace geprüft, inklusive aktueller Patch Notes, Path Balance, Palace-Aktivitäten, Boss- und Dungeon-Updates sowie Code-Berichten.",
      },
      {
        question: "Wo finde ich Where Winds Meet Codes?",
        answer:
          "Nutze den Codes-Guide für gemeldete Palace-Codes, ältere Qinchuan- und Hexi-Code-Kandidaten, Einlösehinweise und Warnungen zu geleakten oder deaktivierten Exchange-Codes.",
      },
      {
        question: "Welche Where Winds Meet Tierliste sollte ich lesen?",
        answer:
          "Starte mit der Haupt-Tierliste und prüfe danach PVP-Tierliste, Waffen-Tierliste, Builds und Patch Notes, weil Path Balance Arena-ranks und Waffenempfehlungen verschieben kann.",
      },
      {
        question: "Wo sollten neue Where Winds Meet Spieler starten?",
        answer:
          "Neue Spieler sollten mit Einsteiger-Guide, interaktiver Karte, Codes, Waffenübersicht, Tierliste und aktuellen Patch Notes starten, bevor sie älteren Quest- oder Boss-Guides folgen.",
      },
    ],
  },
};

function localizedHref(language: ContentLanguage, href: string) {
  if (language === "en") return href;
  const prefix = language === "vi" ? "/vn" : "/de";
  return href.startsWith(prefix) ? href : `${prefix}${href}`;
}

function buildStructuredData(entry: HomeContent) {
  const url = `${baseUrl}${entry.path === "/" ? "" : entry.path}`;
  const videoGameId = `${baseUrl}/#where-winds-meet-game`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Where Winds Meet Hub",
      url,
      inLanguage: entry.inLanguage,
      about: {
        "@id": videoGameId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "@id": videoGameId,
      name: "Where Winds Meet",
      alternateName: ["WWM", "Where The Winds Meet"],
      description: entry.subtitle,
      genre: ["Open-world", "Wuxia", "Action RPG"],
      gamePlatform: ["PC", "PlayStation 5", "Xbox Series X|S", "Xbox on PC", "Xbox Cloud", "iOS", "Android"],
      url: "https://www.wherewindsmeetgame.com/",
      sameAs: [
        "https://www.wherewindsmeetgame.com/",
        "https://www.wherewindsmeetgame.com/news/official/607XBOX.html",
        "https://www.wherewindsmeetgame.com/news/official/607XBOX2.html",
        "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
        "https://www.playstation.com/en-us/games/where-winds-meet/",
        "https://play.google.com/store/apps/details?id=com.netease.yysls",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Where Winds Meet",
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: entry.inLanguage,
      mainEntity: entry.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export function HomeMainKeywordSections({ language }: { language: ContentLanguage }) {
  const entry = content[language];
  const freshness = getContentFreshness("/", language);
  const structuredData = buildStructuredData(entry);
  const updateLabel = freshness?.gameVersion ?? entry.updateLabel;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="rounded-3xl border border-emerald-500/25 bg-slate-950/85 p-6 shadow-2xl shadow-emerald-950/30 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                {entry.eyebrow}
              </p>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl">
                {entry.h1}
              </h1>
              <p className="max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {entry.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {entry.ctas.map((cta, index) => (
                <Link
                  key={cta.href}
                  href={localizedHref(language, cta.href)}
                  className={
                    index === 0
                      ? "rounded-full border border-emerald-300/70 bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:border-emerald-200 hover:bg-emerald-400/25"
                      : "rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-inner shadow-slate-950/50">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Current status
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-50">{updateLabel}</p>
            <p className="mt-1 text-xs text-slate-400">
              Checked {freshness?.lastChecked ?? "2026-06-04"}
            </p>
            <div className="mt-4 grid gap-3">
              {entry.quickFacts.map((fact) => (
                <div key={fact} className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-100">
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="where-winds-meet-overview" className="grid gap-4 md:grid-cols-3">
        {entry.entityCards.map((card) => (
          <div key={card.title} className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/30">
            <h2 className="text-xl font-bold text-slate-50">{card.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{card.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.links.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(language, link.href)}
                  className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="where-winds-meet-faq" className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Main keyword FAQ</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-50 sm:text-3xl">{entry.faqHeading}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">{entry.faqIntro}</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {entry.faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-base font-semibold text-slate-50">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
