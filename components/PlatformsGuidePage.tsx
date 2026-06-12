import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import type { ContentLanguage } from "@/lib/contentFreshness";
import { getContentFreshness } from "@/lib/contentFreshness";

const baseUrl = "https://wherewindsmeet.org";
const basePath = "/guides/platforms";

type PlatformStatus = {
  name: string;
  status: string;
  bestFor: string;
  action: string;
  href: string;
};

type Faq = {
  question: string;
  answer: string;
};

type PageCopy = {
  pathPrefix: "" | "/vn" | "/de";
  inLanguage: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  checkedLabel: string;
  summaryTitle: string;
  summary: string;
  quickFacts: string[];
  platformHeading: string;
  platformIntro: string;
  platforms: PlatformStatus[];
  decisionHeading: string;
  decisionIntro: string;
  decisionRows: Array<{ title: string; body: string; href: string; label: string }>;
  accountHeading: string;
  accountNotes: string[];
  iosNoteHeading: string;
  iosNoteBody: string;
  iosSearchLabel: string;
  iosFallbackLabel: string;
  officialHeading: string;
  officialSources: Array<{ label: string; href: string }>;
  faqHeading: string;
  faqs: Faq[];
};

const officialSources = [
  {
    label: "Official website",
    href: "https://www.wherewindsmeetgame.com/",
  },
  {
    label: "Official mobile download",
    href: "https://adl.easebar.com/d/g/wwm/c/officialwebsite?type=ios",
  },
  {
    label: "Steam page",
    href: "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
  },
  {
    label: "PlayStation page",
    href: "https://www.playstation.com/en-us/games/where-winds-meet/",
  },
  {
    label: "Xbox launch announcement",
    href: "https://www.wherewindsmeetgame.com/news/official/607XBOX.html",
  },
  {
    label: "Xbox launch FAQ",
    href: "https://www.wherewindsmeetgame.com/news/official/607XBOX2.html",
  },
  {
    label: "Google Play page",
    href: "https://play.google.com/store/apps/details?id=com.netease.yysls",
  },
  {
    label: "NetEase mobile launch",
    href: "https://ir.netease.com/node/15196/pdf",
  },
];

const sharedPlatforms: PlatformStatus[] = [
  {
    name: "PC",
    status: "Available through Steam and the official PC route.",
    bestFor: "Best for keyboard/mouse controls, long sessions, screenshots, and guide testing.",
    action: "Check PC downloads",
    href: "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
  },
  {
    name: "PlayStation 5",
    status: "Available on PS5 as a free-to-play game.",
    bestFor: "Best for couch play, DualSense features, and players who want a console setup.",
    action: "Open PS5 page",
    href: "https://www.playstation.com/en-us/games/where-winds-meet/",
  },
  {
    name: "Xbox Series X|S / Xbox on PC / Xbox Cloud",
    status: "Officially available from June 8, 2026 through Microsoft Store routes, with Xbox Series X|S, Xbox on PC, and Xbox Cloud listed by the official announcement.",
    bestFor: "Best for Xbox players, Game Pass reward claims, cloud play, and players moving between console, PC, and mobile accounts.",
    action: "Read Xbox FAQ",
    href: "https://www.wherewindsmeetgame.com/news/official/607XBOX2.html",
  },
  {
    name: "iOS",
    status: "The official website lists an iOS App Store route; use the official download page because Apple's web link can redirect by region.",
    bestFor: "Best for mobile check-ins, casual exploration, and playing away from your desk.",
    action: "How to find iOS app",
    href: "#ios-download-note",
  },
  {
    name: "Android",
    status: "Available on Google Play, with official mobile launch copy confirming iOS and Android.",
    bestFor: "Best for mobile-first players, but store availability can still vary by region.",
    action: "Open Google Play",
    href: "https://play.google.com/store/apps/details?id=com.netease.yysls",
  },
];

const copy: Record<ContentLanguage, PageCopy> = {
  en: {
    pathPrefix: "",
    inLanguage: "en-US",
    eyebrow: "Where Winds Meet platforms",
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android, Cross-Play",
    subtitle:
      "A current platform guide for players searching where winds meet xbox, where winds meet ps5, where winds meet pc, where winds meet mobile, where winds meet platforms, and whether cross-play or cross-progression matters before starting.",
    checkedLabel: "Checked June 9, 2026",
    summaryTitle: "Short answer",
    summary:
      "Where Winds Meet is positioned as a free-to-play wuxia RPG across PC, PlayStation 5, Xbox Series X|S, Xbox on PC, Xbox Cloud, iOS, and Android. Steam lists cross-platform multiplayer, PlayStation lists the PS5 version as free-to-play, and the official Xbox FAQ says character data can be shared across Xbox, PC, PlayStation, and mobile when the same bound account is used.",
    quickFacts: [
      "Main keyword target: where winds meet platforms",
      "High-intent variants: xbox, ps5, pc, mobile, ios, android",
      "Use official store pages before downloading or linking accounts",
    ],
    platformHeading: "Official platform status",
    platformIntro:
      "Use this table as the clean platform answer, then verify the store page for your region before installing or redeeming rewards.",
    platforms: sharedPlatforms,
    decisionHeading: "Which version should you choose?",
    decisionIntro:
      "The best platform depends on how you play. This is a practical choice guide, not a ranking.",
    decisionRows: [
      {
        title: "Choose PC if you care about controls and guide accuracy",
        body: "PC is the easiest route for screenshots, map checks, UI reading, and long farming sessions. It is also the cleanest option for players following build, tier list, and boss guides.",
        href: "/guides/builds",
        label: "Build guides",
      },
      {
        title: "Choose PS5 if you want console play",
        body: "PS5 is the console route. PlayStation lists the game as free and highlights PS5 features including DualSense support and PS5 Pro enhancements.",
        href: "/guides/new-players",
        label: "Beginner guide",
      },
      {
        title: "Choose mobile if you want daily access",
        body: "Mobile is useful for check-ins, codes, casual exploration, and account upkeep. Always check storage, performance, and region availability before committing.",
        href: "/guides/codes",
        label: "Codes guide",
      },
    ],
    accountHeading: "Cross-play and account notes",
    accountNotes: [
      "Steam lists cross-platform multiplayer, and the official Xbox FAQ says character data is shared across Xbox, PC, PlayStation, and mobile when the same bound account is used.",
      "Treat cross-progression and account-linking details as a pre-download check, because the Xbox FAQ warns players to bind an existing account before creating a first Xbox character if they want to keep existing progress.",
      "If you are moving between platforms, test with a low-risk login first and keep screenshots of account IDs, server, and character name.",
    ],
    iosNoteHeading: "iOS download note",
    iosNoteBody:
      "Apple's web App Store link can redirect some regions to a generic App Store page instead of the Where Winds Meet listing. The safest path is to open the App Store app on iPhone/iPad and search the exact game name. Use the official download fallback only if you want to verify the publisher route.",
    iosSearchLabel: "Search term: Where Winds Meet",
    iosFallbackLabel: "Official iOS download fallback",
    officialHeading: "Official sources checked",
    officialSources,
    faqHeading: "Where Winds Meet platform FAQ",
    faqs: [
      {
        question: "Is Where Winds Meet on PS5?",
        answer:
          "Yes. PlayStation lists Where Winds Meet as a PS5 free-to-play game.",
      },
      {
        question: "Is Where Winds Meet on PC?",
        answer:
          "Yes. Steam lists Where Winds Meet as a free-to-play PC game, with single-player, online PVP, online co-op, and cross-platform multiplayer features.",
      },
      {
        question: "Is Where Winds Meet on mobile?",
        answer:
          "Yes. The official website lists an iOS App Store route for Where Winds Meet. Because Apple's web App Store can redirect by region, use the official download page or search Where Winds Meet inside the App Store app if the direct web page opens the wrong region.",
      },
      {
        question: "Does Where Winds Meet have cross-play?",
        answer:
          "Official store copy says Where Winds Meet supports cross-play across PS5, PC, and mobile. Still verify account-linking details in your region before using paid items or rewards.",
      },
      {
        question: "Is Where Winds Meet on Xbox?",
        answer:
          "Yes. The official June 8, 2026 announcement lists Where Winds Meet for Xbox Series X|S, Xbox on PC, and Xbox Cloud. Use the Microsoft Store route and read the Xbox FAQ before account binding.",
      },
    ],
  },
  vi: {
    pathPrefix: "/vn",
    inLanguage: "vi-VN",
    eyebrow: "Where Winds Meet platforms",
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android, Cross-Play",
    subtitle:
      "Trang tom tat nen tang cho nguoi tim where winds meet xbox, where winds meet ps5, where winds meet pc, where winds meet mobile, where winds meet platforms va cross-play truoc khi bat dau.",
    checkedLabel: "Kiem tra ngay 2026-06-09",
    summaryTitle: "Cau tra loi ngan",
    summary:
      "Where Winds Meet duoc dinh vi la game wuxia RPG mien phi tren PC, PlayStation 5, Xbox Series X|S, Xbox on PC, Xbox Cloud, iOS va Android. FAQ Xbox chinh thuc noi du lieu nhan vat co the dung chung giua Xbox, PC, PlayStation va mobile khi dung cung tai khoan da bind.",
    quickFacts: [
      "Tu khoa chinh: where winds meet platforms",
      "Bien the quan trong: xbox, ps5, pc, mobile, ios, android",
      "Nen kiem tra store chinh thuc truoc khi cai dat hoac link tai khoan",
    ],
    platformHeading: "Tinh trang nen tang chinh thuc",
    platformIntro:
      "Bang nay tra loi nhanh ve nen tang. Truoc khi tai game, hay kiem tra lai store theo khu vuc cua ban.",
    platforms: sharedPlatforms,
    decisionHeading: "Nen choi ban nao?",
    decisionIntro:
      "Nen tang tot nhat tuy vao cach ban choi. Day la guide lua chon, khong phai tier list.",
    decisionRows: [
      {
        title: "Chon PC neu can dieu khien va doc guide de hon",
        body: "PC phu hop de chup screenshot, xem ban do, doc UI va farm lau. Day cung la lua chon tot khi theo build, tier list va boss guide.",
        href: "/guides/builds",
        label: "Build guides",
      },
      {
        title: "Chon PS5 neu muon choi console",
        body: "PS5 la huong console. Trang PlayStation liet ke game mien phi va nhan manh DualSense cung PS5 Pro features.",
        href: "/guides/new-players",
        label: "Beginner guide",
      },
      {
        title: "Chon mobile neu can check-in hang ngay",
        body: "Mobile huu ich cho code, check-in, kham pha nhe va quan ly tai khoan. Hay xem storage, hieu nang va khu vuc truoc khi choi lau dai.",
        href: "/guides/codes",
        label: "Codes guide",
      },
    ],
    accountHeading: "Ghi chu cross-play va tai khoan",
    accountNotes: [
      "Steam liet ke cross-platform multiplayer, va FAQ Xbox chinh thuc noi du lieu nhan vat dung chung giua Xbox, PC, PlayStation va mobile khi dung cung tai khoan da bind.",
      "Hay xem cross-progression/account linking la buoc can kiem tra truoc khi tai, vi FAQ Xbox canh bao nen bind tai khoan cu truoc khi tao nhan vat Xbox dau tien neu muon giu progress.",
      "Neu doi nen tang, hay thu login rui ro thap truoc va giu screenshot account ID, server, ten nhan vat.",
    ],
    iosNoteHeading: "Ghi chu tai iOS",
    iosNoteBody:
      "Link web App Store cua Apple co the redirect theo khu vuc va mo trang chung thay vi listing Where Winds Meet. Cach an toan nhat la mo App Store tren iPhone/iPad va tim dung ten game. Chi dung fallback download chinh thuc neu ban muon kiem tra route cua publisher.",
    iosSearchLabel: "Tu khoa tim: Where Winds Meet",
    iosFallbackLabel: "Fallback download iOS chinh thuc",
    officialHeading: "Nguon chinh thuc da kiem tra",
    officialSources,
    faqHeading: "FAQ nen tang Where Winds Meet",
    faqs: [
      {
        question: "Where Winds Meet co tren PS5 khong?",
        answer: "Co. PlayStation liet ke Where Winds Meet la game PS5 free-to-play.",
      },
      {
        question: "Where Winds Meet co tren PC khong?",
        answer:
          "Co. Steam liet ke Where Winds Meet la game PC free-to-play voi single-player, online PVP, online co-op va cross-platform multiplayer.",
      },
      {
        question: "Where Winds Meet co tren mobile khong?",
        answer:
          "Co. Website chinh thuc co route App Store cho iOS. Vi web App Store cua Apple co the tu redirect theo khu vuc, hay dung trang download chinh thuc hoac tim Where Winds Meet ngay trong App Store app neu link web mo sai khu vuc.",
      },
      {
        question: "Where Winds Meet co cross-play khong?",
        answer:
          "Copy store chinh thuc noi game ho tro cross-play tren PS5, PC va mobile. Van nen kiem tra account linking theo khu vuc truoc khi dung vat pham tra phi hoac reward.",
      },
      {
        question: "Where Winds Meet co tren Xbox khong?",
        answer:
          "Co. Thong bao chinh thuc ngay 2026-06-08 liet ke Where Winds Meet cho Xbox Series X|S, Xbox on PC va Xbox Cloud. Hay dung Microsoft Store va doc FAQ Xbox truoc khi bind tai khoan.",
      },
    ],
  },
  de: {
    pathPrefix: "/de",
    inLanguage: "de-DE",
    eyebrow: "Where Winds Meet platforms",
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android, Cross-Play",
    subtitle:
      "Ein kompakter Plattform-Guide fuer Suchanfragen wie where winds meet xbox, where winds meet ps5, where winds meet pc, where winds meet mobile, where winds meet platforms und Cross-Play.",
    checkedLabel: "Geprueft am 2026-06-09",
    summaryTitle: "Kurzantwort",
    summary:
      "Where Winds Meet ist als kostenloses Wuxia-RPG fuer PC, PlayStation 5, Xbox Series X|S, Xbox on PC, Xbox Cloud, iOS und Android positioniert. Die offizielle Xbox FAQ sagt, dass Charakterdaten ueber Xbox, PC, PlayStation und Mobile geteilt werden koennen, wenn derselbe gebundene Account genutzt wird.",
    quickFacts: [
      "Hauptziel: where winds meet platforms",
      "Wichtige Varianten: xbox, ps5, pc, mobile, ios, android",
      "Offizielle Store-Seiten vor Download und Account-Linking pruefen",
    ],
    platformHeading: "Offizieller Plattformstatus",
    platformIntro:
      "Diese Tabelle gibt die schnelle Antwort. Pruefe danach die Store-Seite fuer deine Region.",
    platforms: sharedPlatforms,
    decisionHeading: "Welche Version solltest du waehlen?",
    decisionIntro:
      "Die beste Plattform haengt davon ab, wie du spielst. Das ist eine Entscheidungshilfe, keine Rangliste.",
    decisionRows: [
      {
        title: "Waehle PC fuer Kontrolle und Guide-Arbeit",
        body: "PC ist am besten fuer Screenshots, Kartenchecks, UI-Lesen und lange Sessions. Auch fuer Builds, Tierlisten und Boss-Guides ist PC am bequemsten.",
        href: "/guides/builds",
        label: "Build guides",
      },
      {
        title: "Waehle PS5 fuer Console Play",
        body: "PS5 ist die Konsolenroute. PlayStation listet das Spiel kostenlos und nennt DualSense-Support sowie PS5-Pro-Features.",
        href: "/guides/new-players",
        label: "Beginner guide",
      },
      {
        title: "Waehle Mobile fuer taegliche Check-ins",
        body: "Mobile ist gut fuer Codes, Check-ins, leichte Erkundung und Account-Pflege. Pruefe Speicher, Performance und Region, bevor du langfristig spielst.",
        href: "/guides/codes",
        label: "Codes guide",
      },
    ],
    accountHeading: "Cross-Play und Account-Hinweise",
    accountNotes: [
      "Steam listet Cross-Platform Multiplayer, und die offizielle Xbox FAQ sagt, dass Charakterdaten ueber Xbox, PC, PlayStation und Mobile geteilt werden koennen, wenn derselbe gebundene Account genutzt wird.",
      "Behandle Cross-Progression und Account-Linking als Check vor dem Download, weil die Xbox FAQ warnt: Wer bestehenden Fortschritt behalten will, sollte den bestehenden Account binden, bevor ein erster Xbox-Charakter erstellt wird.",
      "Wenn du die Plattform wechselst, teste erst einen sicheren Login und speichere Account-ID, Server und Charakternamen.",
    ],
    iosNoteHeading: "iOS Download Hinweis",
    iosNoteBody:
      "Apples Web-App-Store kann je nach Region auf eine allgemeine App-Store-Seite umleiten, statt die Where Winds Meet Liste zu oeffnen. Am sichersten ist es, die App Store App auf iPhone/iPad zu oeffnen und exakt nach dem Spielnamen zu suchen. Nutze den offiziellen Download-Fallback nur zur Publisher-Pruefung.",
    iosSearchLabel: "Suchbegriff: Where Winds Meet",
    iosFallbackLabel: "Offizieller iOS Download Fallback",
    officialHeading: "Gepruefte offizielle Quellen",
    officialSources,
    faqHeading: "Where Winds Meet Plattform FAQ",
    faqs: [
      {
        question: "Gibt es Where Winds Meet auf PS5?",
        answer:
          "Ja. PlayStation listet Where Winds Meet als kostenloses PS5-Spiel.",
      },
      {
        question: "Gibt es Where Winds Meet auf PC?",
        answer:
          "Ja. Steam listet Where Winds Meet als kostenloses PC-Spiel mit Single-player, Online PVP, Online Co-op und Cross-Platform Multiplayer.",
      },
      {
        question: "Gibt es Where Winds Meet auf Mobile?",
        answer:
          "Ja. Die offizielle Website listet eine iOS App Store Route. Weil Apples Web-App-Store je nach Region umleiten kann, nutze die offizielle Download-Seite oder suche Where Winds Meet direkt in der App Store App.",
      },
      {
        question: "Hat Where Winds Meet Cross-Play?",
        answer:
          "Offizieller Store-Text nennt Cross-Play auf PS5, PC und Mobile. Pruefe trotzdem Account-Linking in deiner Region, bevor du bezahlte Items oder Rewards nutzt.",
      },
      {
        question: "Gibt es Where Winds Meet auf Xbox?",
        answer:
          "Ja. Die offizielle Ankuendigung vom 2026-06-08 listet Where Winds Meet fuer Xbox Series X|S, Xbox on PC und Xbox Cloud. Nutze die Microsoft Store Route und lies die Xbox FAQ vor dem Account-Linking.",
      },
    ],
  },
};

function localizedPath(language: ContentLanguage, path: string) {
  if (language === "en") return path;
  const prefix = language === "vi" ? "/vn" : "/de";
  return `${prefix}${path}`;
}

function buildStructuredData(entry: PageCopy) {
  const pageUrl = `${baseUrl}${entry.pathPrefix}${basePath}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: entry.title,
      description: entry.subtitle,
      url: pageUrl,
      inLanguage: entry.inLanguage,
      about: {
        "@type": "VideoGame",
        name: "Where Winds Meet",
        gamePlatform: ["PC", "PlayStation 5", "Xbox Series X|S", "Xbox on PC", "Xbox Cloud", "iOS", "Android"],
        sameAs: officialSources.map((source) => source.href),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Where Winds Meet",
          item: `${baseUrl}${entry.pathPrefix}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${baseUrl}${entry.pathPrefix}/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Platforms",
          item: pageUrl,
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

export default function PlatformsGuidePage({ language }: { language: ContentLanguage }) {
  const entry = copy[language];
  const freshness = getContentFreshness(basePath, language);
  const structuredData = buildStructuredData(entry);

  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative h-[52vh] min-h-[440px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <CdnImage
            src="/background/bg3.webp"
            alt="Where Winds Meet platform guide background art"
            fill
            className="object-cover object-center opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-slate-950/80" />
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 sm:px-10">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
              {entry.eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-bold text-slate-50 sm:text-5xl lg:text-6xl">
              {entry.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {entry.subtitle}
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto -mt-10 max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <HomeHubBacklink language={language} />

        <section className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/50 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              {freshness?.gameVersion ?? "Version 1.7 / The Imperial Palace"}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">{entry.summaryTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{entry.summary}</p>
            <p className="mt-4 text-xs text-slate-500">
              {freshness?.lastChecked ? `Checked ${freshness.lastChecked}` : entry.checkedLabel}
            </p>
          </div>
          <div className="grid gap-3">
            {entry.quickFacts.map((fact) => (
              <div key={fact} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100">
                {fact}
              </div>
            ))}
          </div>
        </section>

        <section id="official-platform-status" className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Platform answer</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-50">{entry.platformHeading}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">{entry.platformIntro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {entry.platforms.map((platform) => (
              <article key={platform.name} className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/30">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-50">{platform.name}</h3>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                    Confirmed
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{platform.status}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{platform.bestFor}</p>
                {platform.href.startsWith("#") ? (
                  <a
                    href={platform.href}
                    className="mt-5 inline-flex w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                  >
                    {platform.action}
                  </a>
                ) : (
                  <a
                    href={platform.href}
                    className="mt-5 inline-flex w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {platform.action}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="ios-download-note" className="scroll-mt-24 rounded-3xl border border-sky-400/25 bg-sky-500/10 p-6 shadow-xl shadow-slate-950/30 lg:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">iOS</p>
            <h2 className="mt-1 text-2xl font-bold text-sky-50">{entry.iosNoteHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-sky-50/85">{entry.iosNoteBody}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full border border-sky-300/30 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-sky-50">
              {entry.iosSearchLabel}
            </span>
            <a
              href="https://adl.easebar.com/d/g/wwm/c/officialwebsite?type=ios"
              className="rounded-full border border-sky-300/50 bg-slate-950/50 px-4 py-2 text-sm font-semibold text-sky-50 transition hover:border-sky-200 hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              {entry.iosFallbackLabel}
            </a>
          </div>
        </section>

        <section id="which-platform" className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 shadow-xl shadow-slate-950/40 lg:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Choice guide</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-50">{entry.decisionHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{entry.decisionIntro}</p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {entry.decisionRows.map((row) => (
              <article key={row.title} className="rounded-2xl border border-slate-800 bg-slate-900/65 p-5">
                <h3 className="text-lg font-semibold text-slate-50">{row.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{row.body}</p>
                <Link
                  href={localizedPath(language, row.href)}
                  className="mt-4 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/70"
                >
                  {row.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="cross-play-account-notes" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-amber-400/25 bg-amber-500/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Cross-play</p>
            <h2 className="mt-1 text-2xl font-bold text-amber-50">{entry.accountHeading}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-amber-50/85">
              {entry.accountNotes.map((note) => (
                <li key={note} className="rounded-2xl border border-amber-300/15 bg-slate-950/35 p-3">
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Sources</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-50">{entry.officialHeading}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {entry.officialSources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:text-emerald-100"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="platform-faq" className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">FAQ</p>
          <h2 className="mt-1 text-3xl font-bold text-slate-50">{entry.faqHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {entry.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <h3 className="text-base font-semibold text-slate-50">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
