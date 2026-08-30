import Link from "next/link";
import FallbackImage from "@/components/FallbackImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import LiteMp4Embed from "@/components/LiteMp4Embed";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildLocalizedPath } from "@/i18n/routing.mjs";
import { getContentFreshness } from "@/lib/contentFreshness";

type Locale = "en" | "vi" | "de";

type GuideCopy = {
  language: Locale;
  inLanguage: "en-US" | "vi-VN" | "de-DE";
  eyebrow: string;
  title: string;
  intro: string;
  statusTitle: string;
  statuses: [string, string, string][];
  evidenceTitle: string;
  evidence: string[];
  videoTitle: string;
  videoNote: string;
  showcaseTitle: string;
  showcaseNote: string;
  communityVideosTitle: string;
  communityVideosNote: string;
  showcaseEyebrow: string;
  showcaseLink: string;
  mapTitle: string;
  mapBody: string;
  mapPoints: string[];
  expectationTitle: string;
  expectationBody: string;
  faqTitle: string;
  faq: [string, string][];
  related: string;
  sources: string;
  heroAlt: string;
  harborAlt: string;
  harborCaption: string;
  cnLaunchLink: string;
  regionPreviewLink: string;
  showcaseMirrorLink: string;
  communitySourceLink: (author: string) => string;
  officialPostLink: string;
  map17173Link: string;
  officialMapLink: string;
  compareMapsLink: string;
  globalNewsLink: string;
  relatedHiddenMountain: string;
  relatedQinchuan: string;
  relatedUpdates: string;
  sourcesNote: string;
};

const baseUrl = "https://wherewindsmeet.org";
const cnLaunchUrl = "https://www.yysls.cn/news/official/20260629/37780_1305936.html";
const cnPreviewUrl = "https://www.yysls.cn/news/official/20260522/37780_1301228.html";
const cnVideoUrl = "https://www.yysls.cn/news/official/20260630/37780_1306022.html";
const globalNewsUrl = "https://www.wherewindsmeetgame.com/news/index.html";
const map17173Url = "https://map.17173.com/yysls/maps/qinchuan";
const officialMapUrl = "https://www.wherewindsmeetgame.com/map/en/";
const heroImage = `${baseUrl}/guides/jiangnan-hangzhou/hero-1440.webp`;
const harborImage = "/guides/jiangnan-hangzhou/hero-1440.webp";
const officialVideo = "https://yysls.fp.ps.netease.com/file/6a43374e41c0861366f00c667Sy2C1bg07.mp4";
const showcaseBvid = "BV1RP7g6wEYt";
const showcaseUrl = `https://www.bilibili.com/video/${showcaseBvid}/`;
const showcaseYoutubeId = "f_-Zg835Zxw";
const showcaseYoutubeUrl = `https://www.youtube.com/watch?v=${showcaseYoutubeId}`;
const communityVideos = [
  {
    videoId: "0eiyH697f8M",
    title: "Where Winds Meet #177 | Jiangnan New Region - Full Map Exploration",
    author: "Drvisage Nguyen",
    purpose: {
      en: "Long-form map exploration for players who want to see how the first Jiangnan release connects in practice.",
      vi: "Video khám phá dài giúp người chơi xem các khu vực trong bản phát hành Jiangnan đầu tiên kết nối với nhau như thế nào.",
      de: "Eine ausführliche Kartenerkundung, die zeigt, wie die Gebiete der ersten Jiangnan-Veröffentlichung praktisch zusammenhängen.",
    },
  },
  {
    videoId: "zY1zZQMqYd8",
    title: "Where Winds Meet — Relaxing Walk in the New Jiangnan Region (Hangzhou) | 4K 60FPS No HUD",
    author: "RoamPixel",
    purpose: {
      en: "A clean, no-HUD Hangzhou walk that shows streets, waterways, scale, lighting, and atmosphere without guide overlays.",
      vi: "Chuyến đi bộ Hangzhou không HUD, cho thấy đường phố, kênh rạch, quy mô, ánh sáng và không khí mà không bị lớp hướng dẫn che khuất.",
      de: "Ein ruhiger Hangzhou-Rundgang ohne HUD, der Straßen, Wasserwege, Maßstab, Licht und Atmosphäre ohne Guide-Einblendungen zeigt.",
    },
  },
  {
    videoId: "OwTmLRNcPoI",
    title: "Jiangnan New Map: Virtual Tour of Hangzhou (CN Server Livestream Replay)",
    author: "桃苒小桃花",
    purpose: {
      en: "A 4-hour 42-minute CN-server livestream replay for viewers who want extended, real-play context: travel routes, exploration pacing, encounters, and the lived-in feel of Hangzhou beyond a short trailer.",
      vi: "Bản phát lại livestream máy chủ CN dài 4 giờ 42 phút, phù hợp để xem tuyến di chuyển, nhịp khám phá, các cuộc chạm trán và trải nghiệm Hangzhou thực tế ngoài trailer ngắn.",
      de: "Eine 4 Stunden 42 Minuten lange CN-Server-Livestream-Aufzeichnung mit ausführlichen Reiserouten, Erkundungstempo, Begegnungen und einem realistischen Eindruck von Hangzhou jenseits kurzer Trailer.",
    },
  },
];

const copy = {
  en: {
    language: "en",
    inLanguage: "en-US",
    eyebrow: "CN live · Global release watch · Checked August 23, 2026",
    title: "Where Winds Meet Jiangnan & Hangzhou map: CN release and Global status",
    intro:
      "Jiangnan is real and playable on the China server: its first region, Hangzhou, opened on June 26, 2026. It is not yet announced as a live Global region. This tracker separates confirmed CN content from Global expectations so players can follow the new map without mistaking previews for a release date.",
    statusTitle: "Is the Jiangnan map available now?",
    statuses: [
      ["China server", "Live", "Hangzhou opened June 26, 2026, with the Jiangnan story prologue and its first playable area."],
      ["Global server", "Not announced", "The current official Global news trail is Version 2.1 / Hidden Mountain; no Jiangnan launch date is listed."],
      ["Hangzhou interactive map", "Not verified", "The supplied 17173 URL opens Qinchuan. Its current region selector does not list Jiangnan or Hangzhou."],
    ],
    evidenceTitle: "What the official Jiangnan announcement confirms",
    evidence: [
      "Hangzhou is the first region of the wider Jiangnan chapter.",
      "The CN preview described Hangzhou as a city covering more than one million square metres.",
      "The June 26 launch opened the story prologue and the first playable Hangzhou content.",
      "Future updates are planned to expand city streets, harbor markets, West Lake, the East China Sea coast, and other large subregions.",
    ],
    videoTitle: "Official Jiangnan / Hangzhou preview",
    videoNote: "Official CN promotional video. It shows the visual direction of Jiangnan; it is not evidence of a Global release date.",
    showcaseTitle: "Wind and Water Rise: the official Jiangnan version showcase",
    showcaseNote:
      "Published by the official Where Winds Meet Bilibili account on June 23, this 3-minute showcase presents Hangzhou, the new region, story direction, and gameplay upgrades ahead of the June 26 CN launch. The YouTube player is a matching mirror from a third-party channel, not an official Global upload; the official Bilibili source remains linked below.",
    communityVideosTitle: "Jiangnan map tours from players",
    communityVideosNote: "These are third-party gameplay videos, selected because they add map coverage rather than repeating the official trailer. Load only the view you need.",
    showcaseEyebrow: "Official version showcase · June 23, 2026",
    showcaseLink: "View the official source on Bilibili ↗",
    mapTitle: "Can you use a Hangzhou interactive map yet?",
    mapBody:
      "Not reliably. The 17173 page linked by players is a useful China-server map reference, but this exact URL is the Qinchuan map. We found no Hangzhou entry in its current region list. Use it for its existing regions only, and avoid calling it a Jiangnan map until the provider adds and labels Hangzhou.",
    mapPoints: [
      "Use the official Global map for regions already live on Global.",
      "Treat 17173 as an external CN reference, not as our own map or point database.",
      "Do not copy its tiles, marker coordinates, icons, screenshots, or private APIs without permission.",
      "This page will link a verified Hangzhou map once an official or clearly licensed provider publishes one.",
    ],
    expectationTitle: "What Global players should expect—and what remains unknown",
    expectationBody:
      "The CN release makes Jiangnan a credible future Global destination, but release order and timing can differ. A safe watchlist is Hangzhou, its story prologue, waterways and harbor districts, West Lake expansion, bosses, quests, collectibles, and any new progression systems. There is no responsible basis for publishing a specific Global date until it appears in official Global news or patch notes.",
    faqTitle: "Jiangnan and Hangzhou FAQ",
    faq: [
      ["Is Jiangnan available in Where Winds Meet Global?", "No official Global launch has been announced as of August 23, 2026. It is live on the China server."],
      ["Is Hangzhou the first Jiangnan map?", "Yes. Official CN announcements call Hangzhou the first region and the starting point of the Jiangnan chapter."],
      ["When will Jiangnan release globally?", "Unknown. Community guesses are not a release date; wait for the official Global news feed or patch notes."],
      ["Does the 17173 link show Hangzhou?", "No. The linked route is /maps/qinchuan, and its current region selector does not list Hangzhou."],
    ],
    related: "Keep exploring",
    sources: "Primary sources and map checks",
    heroAlt: "Official Where Winds Meet Jiangnan and Hangzhou announcement artwork",
    harborAlt: "Official Where Winds Meet Jiangnan and Hangzhou announcement artwork",
    harborCaption: "A local, responsive copy of the official Jiangnan announcement artwork; the linked CN sources provide the region details.",
    cnLaunchLink: "CN launch announcement ↗",
    regionPreviewLink: "Official region preview ↗",
    showcaseMirrorLink: "YouTube mirror source ↗",
    communitySourceLink: (author: string) => `Open ${author} source ↗`,
    officialPostLink: "View the original official post ↗",
    map17173Link: "Open 17173 Qinchuan map ↗",
    officialMapLink: "Open official Global map ↗",
    compareMapsLink: "Compare interactive maps →",
    globalNewsLink: "Check official Global news ↗",
    relatedHiddenMountain: "Hidden Mountain →",
    relatedQinchuan: "Qinchuan guide (English) →",
    relatedUpdates: "Update tracker →",
    sourcesNote:
      "CN launch and region details are sourced from official yysls.cn announcements. Global status is checked against the official Global news feed. The 17173 map status was checked directly on August 23, 2026.",
  },
  vi: {
    language: "vi",
    inLanguage: "vi-VN",
    eyebrow: "CN đã mở · Theo dõi Global · Kiểm tra 23/08/2026",
    title: "Bản đồ Jiangnan & Hangzhou trong Where Winds Meet: CN và trạng thái Global",
    intro:
      "Jiangnan đã có thể chơi trên máy chủ Trung Quốc: khu vực đầu tiên là Hangzhou, mở ngày 26/06/2026. Global chưa công bố khu vực này. Trang theo dõi này tách rõ nội dung CN đã xác nhận và kỳ vọng Global để người chơi không nhầm trailer với ngày phát hành.",
    statusTitle: "Bản đồ Jiangnan đã mở chưa?",
    statuses: [
      ["Máy chủ Trung Quốc", "Đã mở", "Hangzhou mở ngày 26/06/2026 cùng phần mở đầu cốt truyện Jiangnan."],
      ["Máy chủ Global", "Chưa công bố", "Tin Global hiện tại vẫn ở Version 2.1 / Hidden Mountain; chưa có ngày Jiangnan."],
      ["Bản đồ tương tác Hangzhou", "Chưa xác minh", "Liên kết 17173 hiện mở Qinchuan và chưa liệt kê Jiangnan hoặc Hangzhou."],
    ],
    evidenceTitle: "Thông báo chính thức về Jiangnan xác nhận gì?",
    evidence: [
      "Hangzhou là khu vực đầu tiên của chương Jiangnan.",
      "Bản xem trước CN mô tả thành Hangzhou rộng hơn một triệu mét vuông.",
      "Bản cập nhật 26/06 mở phần mở đầu cốt truyện và nội dung Hangzhou đầu tiên.",
      "Các bản sau sẽ mở rộng phố xá, chợ cảng, Tây Hồ, bờ Đông Hải và những tiểu vùng lớn khác.",
    ],
    videoTitle: "Video chính thức Jiangnan / Hangzhou",
    videoNote: "Video quảng bá chính thức của CN; không phải xác nhận ngày phát hành Global.",
    showcaseTitle: "Phong sinh thủy khởi: video giới thiệu phiên bản Jiangnan chính thức",
    showcaseNote:
      "Được tài khoản Bilibili chính thức đăng ngày 23/06, video dài hơn 3 phút giới thiệu Hangzhou, khu vực mới, hướng cốt truyện và nâng cấp gameplay trước ngày mở CN 26/06. Trình phát YouTube là bản sao tương ứng từ một kênh bên thứ ba, không phải bản đăng Global chính thức; liên kết nguồn Bilibili chính thức vẫn được giữ bên dưới.",
    communityVideosTitle: "Video khám phá bản đồ Jiangnan từ người chơi",
    communityVideosNote: "Đây là video gameplay bên thứ ba được chọn vì bổ sung góc nhìn bản đồ, không chỉ đăng lại trailer. Trình phát chỉ tải sau khi bạn nhấn.",
    showcaseEyebrow: "Video giới thiệu phiên bản chính thức · 23/06/2026",
    showcaseLink: "Xem nguồn chính thức trên Bilibili ↗",
    mapTitle: "Đã có thể dùng bản đồ tương tác Hangzhou chưa?",
    mapBody:
      "Chưa thể tin cậy. Trang 17173 là nguồn tham khảo CN hữu ích, nhưng URL này là bản đồ Qinchuan. Danh sách khu vực hiện chưa có Hangzhou. Chỉ dùng nó cho các khu vực đang được ghi nhãn và không gọi đây là bản đồ Jiangnan.",
    mapPoints: [
      "Dùng bản đồ Global chính thức cho nội dung đã mở trên Global.",
      "Xem 17173 như nguồn CN bên ngoài, không phải dữ liệu bản đồ của chúng tôi.",
      "Không sao chép tile, tọa độ marker, icon, ảnh chụp hoặc API riêng khi chưa được phép.",
      "Trang này sẽ thêm liên kết Hangzhou sau khi có nguồn chính thức hoặc giấy phép rõ ràng.",
    ],
    expectationTitle: "Người chơi Global có thể kỳ vọng gì?",
    expectationBody:
      "Bản CN khiến Jiangnan trở thành điểm đến Global rất đáng kỳ vọng, nhưng thứ tự và thời gian phát hành có thể khác. Hãy theo dõi Hangzhou, phần mở đầu cốt truyện, kênh đào và bến cảng, Tây Hồ, boss, nhiệm vụ và vật phẩm sưu tầm. Chưa nên đưa ra ngày Global cụ thể trước khi có tin chính thức.",
    faqTitle: "FAQ Jiangnan và Hangzhou",
    faq: [
      ["Jiangnan đã có trên Global chưa?", "Chưa. Tính đến 23/08/2026, khu vực này chỉ được xác nhận đã mở trên máy chủ Trung Quốc."],
      ["Hangzhou có phải bản đồ Jiangnan đầu tiên?", "Có. Thông báo CN gọi Hangzhou là khu vực đầu tiên và điểm khởi đầu của chương Jiangnan."],
      ["Bao giờ Jiangnan ra mắt Global?", "Chưa rõ. Dự đoán cộng đồng không phải ngày phát hành chính thức."],
      ["Liên kết 17173 có phải bản đồ Hangzhou?", "Không. URL hiện là /maps/qinchuan và chưa có Hangzhou trong danh sách khu vực."],
    ],
    related: "Xem tiếp",
    sources: "Nguồn chính thức và kiểm tra bản đồ",
    heroAlt: "Ảnh công bố chính thức Jiangnan và Hangzhou của Where Winds Meet",
    harborAlt: "Ảnh công bố chính thức Jiangnan và Hangzhou của Where Winds Meet",
    harborCaption: "Bản sao cục bộ, tối ưu theo màn hình của ảnh công bố Jiangnan chính thức; các nguồn CN được liên kết cung cấp chi tiết về khu vực.",
    cnLaunchLink: "Thông báo mở CN ↗",
    regionPreviewLink: "Bản xem trước khu vực chính thức ↗",
    showcaseMirrorLink: "Nguồn bản sao YouTube ↗",
    communitySourceLink: (author: string) => `Mở nguồn của ${author} ↗`,
    officialPostLink: "Xem bài đăng chính thức gốc ↗",
    map17173Link: "Mở bản đồ Qinchuan của 17173 ↗",
    officialMapLink: "Mở bản đồ Global chính thức ↗",
    compareMapsLink: "So sánh bản đồ tương tác →",
    globalNewsLink: "Kiểm tra tin Global chính thức ↗",
    relatedHiddenMountain: "Hidden Mountain →",
    relatedQinchuan: "Hướng dẫn Qinchuan (tiếng Anh) →",
    relatedUpdates: "Theo dõi cập nhật →",
    sourcesNote:
      "Thông tin mở máy chủ CN và khu vực được lấy từ các thông báo chính thức trên yysls.cn. Trạng thái Global được đối chiếu với nguồn tin Global chính thức. Trạng thái bản đồ 17173 được kiểm tra trực tiếp ngày 23/08/2026.",
  },
  de: {
    language: "de",
    inLanguage: "de-DE",
    eyebrow: "CN live · Global-Beobachtung · Geprüft am 23.08.2026",
    title: "Where Winds Meet Jiangnan- & Hangzhou-Karte: CN-Release und Global-Status",
    intro:
      "Jiangnan ist auf dem chinesischen Server spielbar: Das erste Gebiet Hangzhou erschien am 26. Juni 2026. Für Global wurde die Region noch nicht angekündigt. Dieser Tracker trennt bestätigte CN-Inhalte von Global-Erwartungen.",
    statusTitle: "Ist die Jiangnan-Karte bereits verfügbar?",
    statuses: [
      ["China-Server", "Live", "Hangzhou erschien am 26.06.2026 mit dem Prolog der Jiangnan-Handlung."],
      ["Global-Server", "Nicht angekündigt", "Die aktuelle Global-Spur ist Version 2.1 / Hidden Mountain; ein Jiangnan-Termin fehlt."],
      ["Hangzhou-Interaktivkarte", "Nicht bestätigt", "Der angegebene 17173-Link öffnet Qinchuan und listet Hangzhou derzeit nicht."],
    ],
    evidenceTitle: "Was die offizielle Jiangnan-Ankündigung bestätigt",
    evidence: [
      "Hangzhou ist das erste Gebiet des größeren Jiangnan-Kapitels.",
      "Die CN-Vorschau beschreibt Hangzhou mit mehr als einer Million Quadratmetern.",
      "Am 26. Juni wurden der Story-Prolog und die ersten spielbaren Hangzhou-Inhalte freigeschaltet.",
      "Spätere Updates sollen Stadtviertel, Hafenmärkte, Westsee, Ostmeerküste und weitere Teilgebiete ergänzen.",
    ],
    videoTitle: "Offizielle Jiangnan-/Hangzhou-Vorschau",
    videoNote: "Offizielles CN-Werbevideo; es bestätigt keinen Global-Termin.",
    showcaseTitle: "Wind und Wasser steigen: offizielle Jiangnan-Versionsschau",
    showcaseNote:
      "Das offizielle Bilibili-Konto veröffentlichte diese gut dreiminütige Vorschau am 23. Juni. Sie zeigt Hangzhou, Regions-, Story- und Gameplay-Inhalte vor dem CN-Start am 26. Juni. Der YouTube-Player ist ein inhaltlich entsprechender Mirror eines Drittanbieterkanals und kein offizieller Global-Upload; die offizielle Bilibili-Quelle bleibt unten verlinkt.",
    communityVideosTitle: "Jiangnan-Kartentouren von Spielern",
    communityVideosNote: "Diese Drittanbieter-Gameplayvideos ergänzen die offizielle Vorschau um echte Kartenrundgänge. Der Player lädt erst nach dem Klick.",
    showcaseEyebrow: "Offizielle Versionsschau · 23. Juni 2026",
    showcaseLink: "Offizielle Quelle auf Bilibili ansehen ↗",
    mapTitle: "Gibt es schon eine nutzbare Hangzhou-Interaktivkarte?",
    mapBody:
      "Noch nicht verlässlich. 17173 ist eine nützliche CN-Referenz, doch diese URL führt zur Qinchuan-Karte. In der aktuellen Gebietsauswahl fehlt Hangzhou. Nutze sie nur für bereits gekennzeichnete Regionen.",
    mapPoints: [
      "Nutze die offizielle Global-Karte für bereits veröffentlichte Global-Regionen.",
      "17173 bleibt eine externe CN-Referenz und ist nicht unsere Punktdatenbank.",
      "Kopiere ohne Erlaubnis keine Tiles, Marker-Koordinaten, Icons, Screenshots oder privaten APIs.",
      "Diese Seite verlinkt eine bestätigte Hangzhou-Karte, sobald eine offizielle oder klar lizenzierte Quelle vorliegt.",
    ],
    expectationTitle: "Was Global-Spieler erwarten können – und was offen bleibt",
    expectationBody:
      "Durch den CN-Release ist Jiangnan ein glaubwürdiges künftiges Global-Ziel, doch Reihenfolge und Termin können abweichen. Beobachte Hangzhou, Story-Prolog, Wasserwege, Hafenviertel, Westsee, Bosse, Quests und Sammelobjekte. Ein konkreter Global-Termin wäre ohne offizielle Global-News reine Spekulation.",
    faqTitle: "Jiangnan- und Hangzhou-FAQ",
    faq: [
      ["Ist Jiangnan in Where Winds Meet Global verfügbar?", "Nein. Am 23.08.2026 ist nur der Release auf dem chinesischen Server bestätigt."],
      ["Ist Hangzhou die erste Jiangnan-Karte?", "Ja. Offizielle CN-Ankündigungen nennen Hangzhou das erste Gebiet und den Beginn des Jiangnan-Kapitels."],
      ["Wann erscheint Jiangnan global?", "Unbekannt. Community-Schätzungen sind kein Veröffentlichungstermin."],
      ["Zeigt der 17173-Link Hangzhou?", "Nein. Die Route lautet /maps/qinchuan; Hangzhou fehlt derzeit in der Gebietsliste."],
    ],
    related: "Weiterführende Seiten",
    sources: "Primärquellen und Kartenprüfung",
    heroAlt: "Offizielles Ankündigungsbild zu Jiangnan und Hangzhou in Where Winds Meet",
    harborAlt: "Offizielles Ankündigungsbild zu Jiangnan und Hangzhou in Where Winds Meet",
    harborCaption: "Eine lokale, responsive Kopie des offiziellen Jiangnan-Ankündigungsbilds; die verlinkten CN-Quellen enthalten die Regionsdetails.",
    cnLaunchLink: "CN-Startankündigung ↗",
    regionPreviewLink: "Offizielle Regionsvorschau ↗",
    showcaseMirrorLink: "Quelle des YouTube-Mirrors ↗",
    communitySourceLink: (author: string) => `Quelle von ${author} öffnen ↗`,
    officialPostLink: "Ursprünglichen offiziellen Beitrag ansehen ↗",
    map17173Link: "17173-Qinchuan-Karte öffnen ↗",
    officialMapLink: "Offizielle Global-Karte öffnen ↗",
    compareMapsLink: "Interaktivkarten vergleichen →",
    globalNewsLink: "Offizielle Global-News prüfen ↗",
    relatedHiddenMountain: "Hidden Mountain →",
    relatedQinchuan: "Qinchuan-Guide (Englisch) →",
    relatedUpdates: "Update-Tracker →",
    sourcesNote:
      "Angaben zum CN-Start und zur Region stammen aus offiziellen Ankündigungen auf yysls.cn. Der Global-Status wird mit dem offiziellen Global-Newsfeed abgeglichen. Der Status der 17173-Karte wurde am 23.08.2026 direkt geprüft.",
  },
} satisfies Record<Locale, GuideCopy>;

export function JiangnanHangzhouGuidePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const localizedPath = (path: string) => buildLocalizedPath(path, locale) ?? path;
  const pageUrl = `${baseUrl}${localizedPath("/guides/jiangnan-hangzhou")}`;
  const freshness = getContentFreshness("/guides/jiangnan-hangzhou", locale);
  const siteIdentity = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Where Winds Meet Hub",
    url: baseUrl,
    logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.ico` },
  };
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t.title,
      datePublished: "2026-08-23",
      dateModified: freshness?.lastChecked ?? "2026-08-23",
      mainEntityOfPage: pageUrl,
      image: [heroImage],
      author: siteIdentity,
      publisher: siteIdentity,
      inLanguage: t.inLanguage,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
      inLanguage: t.inLanguage,
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: t.showcaseTitle,
      description: t.showcaseNote,
      thumbnailUrl: [heroImage],
      uploadDate: "2026-06-23",
      embedUrl: `https://www.youtube-nocookie.com/embed/${showcaseYoutubeId}`,
      url: showcaseUrl,
      sameAs: showcaseYoutubeUrl,
      inLanguage: t.inLanguage,
    },
  ];

  return (
    <article className="min-h-screen space-y-10 bg-ink-wash pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeHubBacklink language={t.language} />

      <header className="overflow-hidden rounded-3xl border border-emerald-400/30 bg-slate-950/85 shadow-2xl shadow-emerald-950/30">
        <div className="relative aspect-video min-h-[360px]">
          <picture>
            <source
              type="image/webp"
              srcSet="/guides/jiangnan-hangzhou/hero-640.webp 640w, /guides/jiangnan-hangzhou/hero-960.webp 960w, /guides/jiangnan-hangzhou/hero-1440.webp 1440w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1280px"
            />
            {/* The local responsive source avoids a 2.9 MB cross-origin PNG in the LCP path. */}
            <img
              src="/guides/jiangnan-hangzhou/hero-960.webp"
              alt={t.heroAlt}
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">{t.eyebrow}</p>
            <h1 className="mt-3 max-w-5xl text-balance text-4xl font-bold text-white sm:text-5xl">{t.title}</h1>
            <p className="mt-5 max-w-4xl leading-7 text-slate-200">{t.intro}</p>
          </div>
        </div>
      </header>

      <section className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-slate-50">{t.statusTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.statuses.map(([name, status, detail], index) => (
            <div key={name} className="rounded-2xl border border-slate-700/80 bg-slate-950/75 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{name}</p>
              <p className={`mt-2 text-xl font-bold ${index === 0 ? "text-emerald-300" : "text-amber-200"}`}>{status}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-slate-50">{t.evidenceTitle}</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {t.evidence.map((item) => <li key={item} className="flex gap-3"><span className="text-emerald-300">◆</span><span>{item}</span></li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={cnLaunchUrl} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-400/60 px-4 py-2 text-sm font-semibold text-emerald-100">{t.cnLaunchLink}</a>
            <a href={cnPreviewUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200">{t.regionPreviewLink}</a>
          </div>
        </div>
        <figure className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/75">
          <div className="relative aspect-[2.28/1]">
            <FallbackImage src={harborImage} alt={t.harborAlt} referrerPolicy="no-referrer" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
          </div>
          <figcaption className="p-4 text-xs leading-5 text-slate-400">{t.harborCaption}</figcaption>
        </figure>
      </section>

      <section className="rounded-3xl border border-sky-400/30 bg-sky-500/10 p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">{t.showcaseEyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">{t.showcaseTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">{t.showcaseNote}</p>
        <div className="mt-5">
          <LiteYouTubeEmbed
            videoId={showcaseYoutubeId}
            title={t.showcaseTitle}
            poster="/background/bg4.webp"
            analytics={{ eventName: "jiangnan_showcase_video_play", params: { locale, source: "youtube_mirror" } }}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-sky-200"><a href={showcaseUrl} target="_blank" rel="noreferrer" className="hover:text-sky-100">{t.showcaseLink}</a><a href={showcaseYoutubeUrl} target="_blank" rel="noreferrer" className="hover:text-sky-100">{t.showcaseMirrorLink}</a></div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-7">
        <h2 className="text-2xl font-bold text-slate-50">{t.communityVideosTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">{t.communityVideosNote}</p>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {communityVideos.map((video) => (
            <div key={video.videoId} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <LiteYouTubeEmbed
                videoId={video.videoId}
                title={video.title}
                poster="/background/bg4.webp"
                analytics={{ eventName: "jiangnan_map_video_play", params: { video_id: video.videoId, locale } }}
              />
              <h3 className="mt-4 font-semibold leading-6 text-slate-100">{video.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{video.author}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{video.purpose[locale]}</p>
              <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs font-semibold text-sky-200 hover:text-sky-100">{t.communitySourceLink(video.author)}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-7">
        <h2 className="text-2xl font-bold text-slate-50">{t.videoTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">{t.videoNote}</p>
        <div className="mt-5">
          <LiteMp4Embed src={officialVideo} poster={heroImage} posterReferrerPolicy="no-referrer" title={t.videoTitle} analytics={{ eventName: "jiangnan_official_video_play", params: { locale } }} />
        </div>
        <a href={cnVideoUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-semibold text-sky-200 hover:text-sky-100">{t.officialPostLink}</a>
      </section>

      <section className="rounded-3xl border border-violet-400/25 bg-violet-500/10 p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-slate-50">{t.mapTitle}</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-300">{t.mapBody}</p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {t.mapPoints.map((item) => <li key={item} className="rounded-2xl border border-violet-300/20 bg-slate-950/65 p-4 text-sm leading-6 text-slate-300">{item}</li>)}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={map17173Url} target="_blank" rel="noreferrer" className="rounded-full border border-violet-300/60 px-4 py-2 text-sm font-semibold text-violet-100">{t.map17173Link}</a>
          <a href={officialMapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-400/60 px-4 py-2 text-sm font-semibold text-emerald-100">{t.officialMapLink}</a>
          <Link href={localizedPath("/tools/interactive-map")} className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200">{t.compareMapsLink}</Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-slate-50">{t.expectationTitle}</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-300">{t.expectationBody}</p>
        <a href={globalNewsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-sky-400/60 px-4 py-2 text-sm font-semibold text-sky-100">{t.globalNewsLink}</a>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-slate-50">{t.faqTitle}</h2>
        <div className="mt-5 space-y-4">
          {t.faq.map(([question, answer], index) => (
            <details key={question} open={index === 0} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <summary className="cursor-pointer font-semibold text-slate-100">{question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6">
          <h2 className="text-xl font-bold text-slate-50">{t.related}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={localizedPath("/guides/hidden-mountain")} className="text-sm font-semibold text-emerald-200 hover:text-emerald-100">{t.relatedHiddenMountain}</Link>
            <Link href={localizedPath("/guides/qinchuan")} className="text-sm font-semibold text-emerald-200 hover:text-emerald-100">{t.relatedQinchuan}</Link>
            <Link href={localizedPath("/news")} className="text-sm font-semibold text-emerald-200 hover:text-emerald-100">{t.relatedUpdates}</Link>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6">
          <h2 className="text-xl font-bold text-slate-50">{t.sources}</h2>
          <p className="mt-3 text-xs leading-5 text-slate-400">{t.sourcesNote}</p>
        </div>
      </section>
    </article>
  );
}
