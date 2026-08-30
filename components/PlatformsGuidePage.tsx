import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildLocalizedPath } from "@/i18n/routing.mjs";
import Link from "next/link";
import type { ContentLanguage } from "@/lib/contentFreshness";
import { getContentFreshness } from "@/lib/contentFreshness";

const baseUrl = "https://wherewindsmeet.org";
const basePath = "/guides/platforms";

type PlatformStatus = {
  name: string;
  statusKind: "confirmed" | "region-dependent";
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
  heroAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  checkedPrefix: string;
  checkedLabel: string;
  versionFallback: string;
  summaryTitle: string;
  summary: string;
  quickFacts: string[];
  platformKicker: string;
  platformHeading: string;
  platformIntro: string;
  platforms: PlatformStatus[];
  statusLabels: Record<PlatformStatus["statusKind"], string>;
  decisionKicker: string;
  decisionHeading: string;
  decisionIntro: string;
  decisionRows: Array<{ title: string; body: string; href: string; label: string }>;
  crossPlayKicker: string;
  accountHeading: string;
  accountNotes: string[];
  iosNoteHeading: string;
  iosNoteBody: string;
  iosSearchLabel: string;
  iosFallbackLabel: string;
  sourcesKicker: string;
  officialHeading: string;
  officialSources: Array<{ label: string; href: string }>;
  faqKicker: string;
  faqHeading: string;
  faqs: Faq[];
};

const sourceUrls = {
  officialWebsite: "https://www.wherewindsmeetgame.com/",
  officialMobileDownload: "https://adl.easebar.com/d/g/wwm/c/officialwebsite?type=ios",
  steam: "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
  playStation: "https://www.playstation.com/en-us/games/where-winds-meet/",
  xboxAnnouncement: "https://www.wherewindsmeetgame.com/news/official/607XBOX.html",
  xboxFaq: "https://www.wherewindsmeetgame.com/news/official/607XBOX2.html",
  googlePlay: "https://play.google.com/store/apps/details?id=com.netease.yysls",
  mobileLaunchPdf: "https://ir.netease.com/node/15196/pdf",
} as const;

const identityEquivalentUrls = [
  sourceUrls.officialWebsite,
  sourceUrls.steam,
  sourceUrls.playStation,
  sourceUrls.googlePlay,
];

const officialSources = [
  {
    label: "Official website",
    href: sourceUrls.officialWebsite,
  },
  {
    label: "Official mobile download",
    href: sourceUrls.officialMobileDownload,
  },
  {
    label: "Steam page",
    href: sourceUrls.steam,
  },
  {
    label: "PlayStation page",
    href: sourceUrls.playStation,
  },
  {
    label: "Xbox launch announcement",
    href: sourceUrls.xboxAnnouncement,
  },
  {
    label: "Xbox launch FAQ",
    href: sourceUrls.xboxFaq,
  },
  {
    label: "Google Play page",
    href: sourceUrls.googlePlay,
  },
  {
    label: "NetEase mobile launch",
    href: sourceUrls.mobileLaunchPdf,
  },
];

const vietnameseOfficialSources = [
  { label: "Trang web chính thức", href: sourceUrls.officialWebsite },
  { label: "Kênh tải di động chính thức", href: sourceUrls.officialMobileDownload },
  { label: "Trang Steam", href: sourceUrls.steam },
  { label: "Trang PlayStation", href: sourceUrls.playStation },
  { label: "Thông báo ra mắt trên Xbox", href: sourceUrls.xboxAnnouncement },
  { label: "Câu hỏi thường gặp về Xbox", href: sourceUrls.xboxFaq },
  { label: "Trang Google Play", href: sourceUrls.googlePlay },
  { label: "Thông cáo ra mắt bản di động của NetEase", href: sourceUrls.mobileLaunchPdf },
];

const germanOfficialSources = [
  { label: "Offizielle Website", href: sourceUrls.officialWebsite },
  { label: "Offizieller Mobil-Download", href: sourceUrls.officialMobileDownload },
  { label: "Steam-Seite", href: sourceUrls.steam },
  { label: "PlayStation-Seite", href: sourceUrls.playStation },
  { label: "Xbox-Startankündigung", href: sourceUrls.xboxAnnouncement },
  { label: "Xbox-FAQ", href: sourceUrls.xboxFaq },
  { label: "Google-Play-Seite", href: sourceUrls.googlePlay },
  { label: "NetEase-Mitteilung zum Mobilstart", href: sourceUrls.mobileLaunchPdf },
];

const englishPlatforms: PlatformStatus[] = [
  {
    name: "PC",
    statusKind: "confirmed",
    status: "Available through Steam and the official PC route.",
    bestFor: "Best for keyboard/mouse controls, long sessions, screenshots, and guide testing.",
    action: "Check PC downloads",
    href: sourceUrls.steam,
  },
  {
    name: "PlayStation 5",
    statusKind: "confirmed",
    status: "Available on PS5 as a free-to-play game.",
    bestFor: "Best for couch play, DualSense features, and players who want a console setup.",
    action: "Open PS5 page",
    href: sourceUrls.playStation,
  },
  {
    name: "Xbox Series X|S / Xbox on PC / Xbox Cloud",
    statusKind: "confirmed",
    status: "Officially available from June 8, 2026 through Microsoft Store routes, with Xbox Series X|S, Xbox on PC, and Xbox Cloud listed by the official announcement.",
    bestFor: "Best for Xbox players, Game Pass reward claims, cloud play, and players moving between console, PC, and mobile accounts.",
    action: "Read Xbox FAQ",
    href: sourceUrls.xboxFaq,
  },
  {
    name: "iOS",
    statusKind: "region-dependent",
    status: "The official website lists an iOS App Store route; use the official download page because Apple's web link can redirect by region.",
    bestFor: "Best for mobile check-ins, casual exploration, and playing away from your desk.",
    action: "How to find iOS app",
    href: "#ios-download-note",
  },
  {
    name: "Android",
    statusKind: "region-dependent",
    status:
      "The official mobile launch notice lists Android and Google Play has a store page; availability can still vary by region.",
    bestFor: "Best for mobile-first players, but store availability can still vary by region.",
    action: "Open Google Play",
    href: sourceUrls.googlePlay,
  },
];

const vietnamesePlatforms: PlatformStatus[] = [
  {
    name: "PC",
    statusKind: "confirmed",
    status: "Hiện có trên Steam và qua kênh tải PC chính thức.",
    bestFor:
      "Phù hợp với bàn phím/chuột, các buổi chơi dài, chụp ảnh màn hình và kiểm tra hướng dẫn.",
    action: "Kiểm tra bản tải cho PC",
    href: sourceUrls.steam,
  },
  {
    name: "PlayStation 5",
    statusKind: "confirmed",
    status: "Hiện có trên PS5 dưới dạng trò chơi miễn phí.",
    bestFor:
      "Phù hợp với người chơi trên ghế sofa, muốn dùng tính năng DualSense và thiết lập máy chơi game.",
    action: "Mở trang PS5",
    href: sourceUrls.playStation,
  },
  {
    name: "Xbox Series X|S / Xbox trên PC / Xbox Cloud",
    statusKind: "confirmed",
    status:
      "Thông báo chính thức ngày 8 tháng 6 năm 2026 liệt kê Xbox Series X|S, Xbox trên PC và Xbox Cloud qua các kênh Microsoft Store.",
    bestFor:
      "Phù hợp với người chơi Xbox, chơi qua đám mây và chuyển đổi giữa máy chơi game, PC và thiết bị di động.",
    action: "Đọc câu hỏi thường gặp về Xbox",
    href: sourceUrls.xboxFaq,
  },
  {
    name: "iOS",
    statusKind: "region-dependent",
    status:
      "Trang chính thức có đường dẫn tới App Store, nhưng trang đích và khả năng tải có thể khác theo khu vực.",
    bestFor:
      "Phù hợp với việc đăng nhập hằng ngày, khám phá nhẹ và chơi khi không ngồi trước máy tính.",
    action: "Cách tìm ứng dụng iOS",
    href: "#ios-download-note",
  },
  {
    name: "Android",
    statusKind: "region-dependent",
    status:
      "Thông báo ra mắt bản di động có nhắc đến Android; trang Google Play và khả năng tải có thể khác theo khu vực.",
    bestFor:
      "Phù hợp với người ưu tiên di động; hãy kiểm tra khu vực, dung lượng và hiệu năng trước khi tải.",
    action: "Mở Google Play",
    href: sourceUrls.googlePlay,
  },
];

const germanPlatforms: PlatformStatus[] = [
  {
    name: "PC",
    statusKind: "confirmed",
    status: "Über Steam und den offiziellen PC-Download verfügbar.",
    bestFor:
      "Geeignet für Tastatur/Maus, lange Spielsitzungen, Bildschirmaufnahmen und das Prüfen von Guides.",
    action: "PC-Downloads prüfen",
    href: sourceUrls.steam,
  },
  {
    name: "PlayStation 5",
    statusKind: "confirmed",
    status: "Auf PS5 als kostenloses Spiel verfügbar.",
    bestFor:
      "Geeignet für das Spielen auf dem Sofa, DualSense-Funktionen und eine Konsoleneinrichtung.",
    action: "PS5-Seite öffnen",
    href: sourceUrls.playStation,
  },
  {
    name: "Xbox Series X|S / Xbox auf PC / Xbox Cloud",
    statusKind: "confirmed",
    status:
      "Die offizielle Ankündigung vom 8. Juni 2026 nennt Xbox Series X|S, Xbox auf PC und Xbox Cloud über Microsoft-Store-Wege.",
    bestFor:
      "Geeignet für Xbox-Spieler, Cloud-Gaming und den Wechsel zwischen Konsole, PC und Mobilgeräten.",
    action: "Xbox-FAQ lesen",
    href: sourceUrls.xboxFaq,
  },
  {
    name: "iOS",
    statusKind: "region-dependent",
    status:
      "Die offizielle Website führt zum App Store; Zielseite und Verfügbarkeit können je nach Region abweichen.",
    bestFor:
      "Geeignet für tägliche Anmeldungen, kurze Erkundungen und das Spielen unterwegs.",
    action: "iOS-App finden",
    href: "#ios-download-note",
  },
  {
    name: "Android",
    statusKind: "region-dependent",
    status:
      "Die offizielle Mobilankündigung nennt Android; Google-Play-Seite und Verfügbarkeit können je nach Region abweichen.",
    bestFor:
      "Geeignet für Spieler, die hauptsächlich mobil spielen; Region, Speicherbedarf und Leistung sollten vorab geprüft werden.",
    action: "Google Play öffnen",
    href: sourceUrls.googlePlay,
  },
];

const statusStyles: Record<PlatformStatus["statusKind"], string> = {
  confirmed: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  "region-dependent": "border-amber-400/40 bg-amber-500/10 text-amber-100",
};

const copy: Record<ContentLanguage, PageCopy> = {
  en: {
    pathPrefix: "",
    inLanguage: "en-US",
    heroAlt: "Where Winds Meet platform guide background art",
    eyebrow: "Where Winds Meet platforms",
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android, Cross-Play",
    subtitle:
      "A current platform guide for players searching where winds meet xbox, where winds meet ps5, where winds meet pc, where winds meet mobile, where winds meet platforms, and whether cross-play or cross-progression matters before starting.",
    checkedPrefix: "Checked",
    checkedLabel: "Checked June 9, 2026",
    versionFallback: "Version 1.7 / Xbox launch",
    summaryTitle: "Short answer",
    summary:
      "Where Winds Meet has official routes for PC, PlayStation 5, Xbox Series X|S, Xbox on PC, Xbox Cloud, iOS, and Android. Steam lists cross-platform multiplayer, PlayStation lists the PS5 version as free-to-play, and the official Xbox FAQ says character data can be shared when the same bound account is used. Mobile storefront availability remains region-dependent.",
    quickFacts: [
      "Main keyword target: where winds meet platforms",
      "High-intent variants: xbox, ps5, pc, mobile, ios, android",
      "Use official store pages before downloading or linking accounts",
    ],
    platformKicker: "Platform answer",
    platformHeading: "Official platform status",
    platformIntro:
      "Use this table as the clean platform answer, then verify the store page for your region before installing or redeeming rewards.",
    platforms: englishPlatforms,
    statusLabels: {
      confirmed: "Confirmed",
      "region-dependent": "Region-dependent · verify",
    },
    decisionKicker: "Choice guide",
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
    crossPlayKicker: "Cross-play",
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
    sourcesKicker: "Sources",
    officialHeading: "Official sources checked",
    officialSources,
    faqKicker: "FAQ",
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
          "Official sources list iOS and Android routes, but App Store and Google Play availability can vary by region. Search the exact game name in the store app and verify the publisher before downloading.",
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
    heroAlt: "Hình nền cho hướng dẫn nền tảng Where Winds Meet",
    eyebrow: "Nền tảng của Where Winds Meet",
    title: "Nền tảng Where Winds Meet: Xbox, PS5, PC, iOS, Android và chơi chéo",
    subtitle:
      "Hướng dẫn ngắn gọn về Xbox, PS5, PC, iOS, Android, chơi chéo và liên kết tài khoản trước khi bạn bắt đầu.",
    checkedPrefix: "Kiểm tra ngày",
    checkedLabel: "Kiểm tra ngày 2026-06-09",
    versionFallback: "Phiên bản 1.7 / ra mắt trên Xbox",
    summaryTitle: "Câu trả lời ngắn",
    summary:
      "Where Winds Meet có các kênh chính thức cho PC, PlayStation 5, Xbox Series X|S, Xbox trên PC, Xbox Cloud, iOS và Android. Steam liệt kê tính năng chơi nhiều người đa nền tảng; PlayStation liệt kê bản PS5 là miễn phí; câu hỏi thường gặp chính thức về Xbox nói dữ liệu nhân vật có thể được dùng chung khi các nền tảng sử dụng cùng một tài khoản đã liên kết. Khả năng tải trên cửa hàng di động vẫn phụ thuộc vào khu vực.",
    quickFacts: [
      "Trọng tâm: các nền tảng hỗ trợ Where Winds Meet",
      "Nhu cầu thường gặp: Xbox, PS5, PC, di động, iOS và Android",
      "Luôn kiểm tra cửa hàng chính thức trước khi tải hoặc liên kết tài khoản",
    ],
    platformKicker: "Trả lời nhanh",
    platformHeading: "Tình trạng nền tảng theo nguồn chính thức",
    platformIntro:
      "Bảng này tóm tắt tình trạng đã được nguồn chính thức nêu. Trước khi tải, hãy kiểm tra lại cửa hàng dành cho khu vực của bạn.",
    platforms: vietnamesePlatforms,
    statusLabels: {
      confirmed: "Đã xác nhận",
      "region-dependent": "Tùy khu vực · cần kiểm tra",
    },
    decisionKicker: "Gợi ý lựa chọn",
    decisionHeading: "Bạn nên chọn phiên bản nào?",
    decisionIntro:
      "Nền tảng phù hợp nhất tùy vào cách bạn chơi. Đây là gợi ý thực tế, không phải bảng xếp hạng.",
    decisionRows: [
      {
        title: "Chọn PC nếu bạn coi trọng điều khiển và việc tra cứu hướng dẫn",
        body: "PC thuận tiện cho việc chụp ảnh màn hình, kiểm tra bản đồ, đọc giao diện và chơi trong thời gian dài. Đây cũng là lựa chọn dễ dùng khi theo dõi hướng dẫn phối hợp trang bị, vũ khí và trùm.",
        href: "/guides/builds",
        label: "Hướng dẫn phối hợp trang bị",
      },
      {
        title: "Chọn PS5 nếu bạn muốn chơi trên máy chơi game",
        body: "PS5 là lựa chọn console. Trang PlayStation liệt kê trò chơi là miễn phí và nêu các tính năng DualSense cùng cải tiến cho PS5 Pro.",
        href: "/guides/new-players",
        label: "Hướng dẫn cho người mới",
      },
      {
        title: "Chọn di động nếu bạn cần truy cập hằng ngày",
        body: "Bản di động thuận tiện cho việc đăng nhập, khám phá nhẹ và quản lý tài khoản. Hãy kiểm tra dung lượng, hiệu năng và khả năng tải theo khu vực trước khi gắn bó lâu dài.",
        href: "/guides/codes",
        label: "Hướng dẫn mã đổi thưởng",
      },
    ],
    crossPlayKicker: "Chơi chéo",
    accountHeading: "Ghi chú về chơi chéo và tài khoản",
    accountNotes: [
      "Steam liệt kê tính năng chơi nhiều người đa nền tảng; câu hỏi thường gặp chính thức về Xbox nói dữ liệu nhân vật được dùng chung giữa Xbox, PC, PlayStation và di động khi sử dụng cùng một tài khoản đã liên kết.",
      "Hãy kiểm tra tiến trình chéo và liên kết tài khoản trước khi tải. Câu hỏi thường gặp về Xbox khuyên người muốn giữ tiến trình cũ nên liên kết tài khoản hiện có trước khi tạo nhân vật Xbox đầu tiên.",
      "Khi chuyển nền tảng, hãy thử một lần đăng nhập ít rủi ro trước và lưu lại ảnh chụp ID tài khoản, máy chủ cùng tên nhân vật.",
    ],
    iosNoteHeading: "Lưu ý khi tải trên iOS",
    iosNoteBody:
      "Liên kết App Store trên web có thể chuyển hướng theo khu vực và mở trang chung thay vì trang Where Winds Meet. Cách an toàn nhất là mở ứng dụng App Store trên iPhone hoặc iPad rồi tìm đúng tên trò chơi. Chỉ dùng đường dẫn dự phòng của nhà phát hành để xác minh kênh tải; khả năng tải vẫn phụ thuộc vào khu vực.",
    iosSearchLabel: "Từ khóa tìm kiếm: Where Winds Meet",
    iosFallbackLabel: "Kênh tải iOS chính thức dự phòng",
    sourcesKicker: "Nguồn",
    officialHeading: "Các nguồn chính thức đã kiểm tra",
    officialSources: vietnameseOfficialSources,
    faqKicker: "Câu hỏi thường gặp",
    faqHeading: "Câu hỏi về nền tảng Where Winds Meet",
    faqs: [
      {
        question: "Where Winds Meet có trên PS5 không?",
        answer: "Có. PlayStation liệt kê Where Winds Meet là trò chơi PS5 miễn phí.",
      },
      {
        question: "Where Winds Meet có trên PC không?",
        answer:
          "Có. Steam liệt kê Where Winds Meet là trò chơi PC miễn phí với chơi đơn, PVP trực tuyến, co-op trực tuyến và chơi nhiều người đa nền tảng.",
      },
      {
        question: "Where Winds Meet có trên thiết bị di động không?",
        answer:
          "Các nguồn chính thức có kênh tải cho iOS và Android, nhưng khả năng hiển thị trên App Store hoặc Google Play có thể khác theo khu vực. Hãy tìm đúng tên trò chơi trong ứng dụng cửa hàng và xác minh nhà phát hành trước khi tải.",
      },
      {
        question: "Where Winds Meet có hỗ trợ chơi chéo không?",
        answer:
          "Thông tin cửa hàng chính thức có nêu hỗ trợ chơi chéo giữa PS5, PC và di động. Bạn vẫn nên kiểm tra cách liên kết tài khoản theo khu vực trước khi sử dụng vật phẩm trả phí hoặc nhận phần thưởng.",
      },
      {
        question: "Where Winds Meet có trên Xbox không?",
        answer:
          "Có. Thông báo chính thức ngày 8 tháng 6 năm 2026 liệt kê Xbox Series X|S, Xbox trên PC và Xbox Cloud. Hãy dùng kênh Microsoft Store và đọc câu hỏi thường gặp về Xbox trước khi liên kết tài khoản.",
      },
    ],
  },
  de: {
    pathPrefix: "/de",
    inLanguage: "de-DE",
    heroAlt: "Hintergrundbild zum Plattform-Guide für Where Winds Meet",
    eyebrow: "Plattformen für Where Winds Meet",
    title: "Where Winds Meet auf Xbox, PS5, PC, iOS und Android: Plattform-Guide",
    subtitle:
      "Ein kompakter Guide zu Xbox, PS5, PC, iOS, Android, Cross-Play und Account-Verknüpfung vor dem Spielstart.",
    checkedPrefix: "Geprüft am",
    checkedLabel: "Geprüft am 2026-06-09",
    versionFallback: "Version 1.7 / Xbox-Start",
    summaryTitle: "Kurzantwort",
    summary:
      "Where Winds Meet hat offizielle Wege für PC, PlayStation 5, Xbox Series X|S, Xbox auf PC, Xbox Cloud, iOS und Android. Steam nennt plattformübergreifenden Mehrspielermodus, PlayStation führt die PS5-Version als kostenlos, und laut offizieller Xbox-FAQ können Charakterdaten mit demselben verknüpften Account geteilt werden. Die Verfügbarkeit in mobilen Stores bleibt regionsabhängig.",
    quickFacts: [
      "Schwerpunkt: unterstützte Plattformen für Where Winds Meet",
      "Häufige Varianten: Xbox, PS5, PC, Mobile, iOS und Android",
      "Offizielle Store-Seiten vor Download und Account-Verknüpfung prüfen",
    ],
    platformKicker: "Schnellantwort",
    platformHeading: "Offizieller Plattformstatus",
    platformIntro:
      "Diese Übersicht fasst zusammen, was offizielle Quellen nennen. Prüfe vor dem Download zusätzlich die Store-Seite für deine Region.",
    platforms: germanPlatforms,
    statusLabels: {
      confirmed: "Bestätigt",
      "region-dependent": "Regionsabhängig · prüfen",
    },
    decisionKicker: "Entscheidungshilfe",
    decisionHeading: "Welche Version solltest du wählen?",
    decisionIntro:
      "Die passende Plattform hängt davon ab, wie du spielst. Das ist eine praktische Entscheidungshilfe, keine Rangliste.",
    decisionRows: [
      {
        title: "Wähle PC für präzise Steuerung und Guide-Recherche",
        body: "PC ist praktisch für Bildschirmaufnahmen, Kartenprüfungen, das Lesen der Benutzeroberfläche und lange Spielsitzungen. Auch beim Nachschlagen von Builds, Waffen und Bossen ist diese Version bequem.",
        href: "/guides/builds",
        label: "Build-Guides",
      },
      {
        title: "Wähle PS5 für das Spielen auf der Konsole",
        body: "PS5 ist die Konsolenoption. PlayStation führt das Spiel als kostenlos und nennt DualSense-Unterstützung sowie Verbesserungen für PS5 Pro.",
        href: "/guides/new-players",
        label: "Einsteiger-Guide",
      },
      {
        title: "Wähle Mobile für den täglichen Zugriff",
        body: "Die Mobilversion eignet sich für kurze Anmeldungen, leichte Erkundung und Account-Pflege. Prüfe vor einer langfristigen Nutzung Speicherbedarf, Leistung und regionale Verfügbarkeit.",
        href: "/guides/codes",
        label: "Code-Guide",
      },
    ],
    crossPlayKicker: "Cross-Play",
    accountHeading: "Cross-Play und Account-Hinweise",
    accountNotes: [
      "Steam nennt plattformübergreifenden Mehrspielermodus. Laut offizieller Xbox-FAQ werden Charakterdaten zwischen Xbox, PC, PlayStation und Mobilgeräten geteilt, wenn derselbe verknüpfte Account verwendet wird.",
      "Prüfe Cross-Progression und Account-Verknüpfung vor dem Download. Die Xbox-FAQ empfiehlt, einen bestehenden Account vor dem Erstellen des ersten Xbox-Charakters zu verknüpfen, wenn alter Fortschritt erhalten bleiben soll.",
      "Wenn du die Plattform wechselst, teste erst einen sicheren Login und speichere Account-ID, Server und Charakternamen.",
    ],
    iosNoteHeading: "Hinweis zum iOS-Download",
    iosNoteBody:
      "Apples Web-App-Store kann je nach Region auf eine allgemeine App-Store-Seite umleiten, statt den Eintrag für Where Winds Meet zu öffnen. Am sichersten ist es, die App-Store-App auf iPhone oder iPad zu öffnen und exakt nach dem Spielnamen zu suchen. Nutze den offiziellen Download-Link nur zur Prüfung des Publisher-Wegs; die Verfügbarkeit bleibt regionsabhängig.",
    iosSearchLabel: "Suchbegriff: Where Winds Meet",
    iosFallbackLabel: "Offizieller iOS-Download als Ausweichweg",
    sourcesKicker: "Quellen",
    officialHeading: "Geprüfte offizielle Quellen",
    officialSources: germanOfficialSources,
    faqKicker: "Häufige Fragen",
    faqHeading: "FAQ zu den Plattformen von Where Winds Meet",
    faqs: [
      {
        question: "Gibt es Where Winds Meet auf PS5?",
        answer:
          "Ja. PlayStation listet Where Winds Meet als kostenloses PS5-Spiel.",
      },
      {
        question: "Gibt es Where Winds Meet auf PC?",
        answer:
          "Ja. Steam führt Where Winds Meet als kostenloses PC-Spiel mit Einzelspieler, Online-PvP, Online-Koop und plattformübergreifendem Mehrspielermodus.",
      },
      {
        question: "Gibt es Where Winds Meet auf Mobile?",
        answer:
          "Offizielle Quellen nennen Wege für iOS und Android, die Anzeige im App Store oder bei Google Play kann jedoch je nach Region abweichen. Suche in der jeweiligen Store-App nach dem exakten Spielnamen und prüfe vor dem Download den Publisher.",
      },
      {
        question: "Hat Where Winds Meet Cross-Play?",
        answer:
          "Offizielle Store-Texte nennen Cross-Play auf PS5, PC und Mobilgeräten. Prüfe trotzdem die Account-Verknüpfung für deine Region, bevor du bezahlte Gegenstände oder Belohnungen nutzt.",
      },
      {
        question: "Gibt es Where Winds Meet auf Xbox?",
        answer:
          "Ja. Die offizielle Ankündigung vom 8. Juni 2026 nennt Where Winds Meet für Xbox Series X|S, Xbox auf PC und Xbox Cloud. Nutze den Microsoft-Store-Weg und lies die Xbox-FAQ vor der Account-Verknüpfung.",
      },
    ],
  },
};

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
        sameAs: identityEquivalentUrls,
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
            alt={entry.heroAlt}
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
              {freshness?.gameVersion ?? entry.versionFallback}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">{entry.summaryTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{entry.summary}</p>
            <p className="mt-4 text-xs text-slate-500">
              {freshness?.lastChecked
                ? `${entry.checkedPrefix} ${freshness.lastChecked}`
                : entry.checkedLabel}
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
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              {entry.platformKicker}
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-50">{entry.platformHeading}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">{entry.platformIntro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {entry.platforms.map((platform) => (
              <article key={platform.name} className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/30">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-50">{platform.name}</h3>
                  <span
                    data-status-kind={platform.statusKind}
                    className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${statusStyles[platform.statusKind]}`}
                  >
                    {entry.statusLabels[platform.statusKind]}
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
              href={sourceUrls.officialMobileDownload}
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
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              {entry.decisionKicker}
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-50">{entry.decisionHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{entry.decisionIntro}</p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {entry.decisionRows.map((row) => (
              <article key={row.title} className="rounded-2xl border border-slate-800 bg-slate-900/65 p-5">
                <h3 className="text-lg font-semibold text-slate-50">{row.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{row.body}</p>
                <Link
                  href={buildLocalizedPath(row.href, language) ?? row.href}
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
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">
              {entry.crossPlayKicker}
            </p>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              {entry.sourcesKicker}
            </p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            {entry.faqKicker}
          </p>
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
