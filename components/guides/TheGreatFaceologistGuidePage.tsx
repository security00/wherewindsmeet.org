import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const SITE_URL = "https://wherewindsmeet.org";
const BASE_PATH = "/guides/the-great-faceologist";
const MEDIA_BASE_PATH = "/guides/the-great-faceologist";
const MEDIA_AUTHORIZATION = "Reuse authorization confirmed by site owner 2026-08-29.";

type ArchivedCapture = {
  readonly src: string;
  readonly width: number;
  readonly height: number;
};

const faceologistMedia = {
  hero: { src: `${MEDIA_BASE_PATH}/hero.webp`, width: 1317, height: 741 },
  dailyCap: { src: `${MEDIA_BASE_PATH}/daily-upload-cap.webp`, width: 1447, height: 814 },
  steps: [
    [{ src: `${MEDIA_BASE_PATH}/step-1-open-appearance.webp`, width: 1081, height: 608 }],
    [{ src: `${MEDIA_BASE_PATH}/step-2-switch-appearance-tab.webp`, width: 1124, height: 632 }],
    [
      { src: `${MEDIA_BASE_PATH}/step-3-edit-face.webp`, width: 1389, height: 781 },
      { src: `${MEDIA_BASE_PATH}/step-4-choose-preset.webp`, width: 1174, height: 660 },
    ],
    [
      { src: `${MEDIA_BASE_PATH}/step-5-preview.webp`, width: 1289, height: 725 },
      { src: `${MEDIA_BASE_PATH}/step-6-upload-to-gallery.webp`, width: 1210, height: 681 },
    ],
    [{ src: `${MEDIA_BASE_PATH}/step-7-title-description.webp`, width: 1005, height: 565 }],
    [{ src: `${MEDIA_BASE_PATH}/step-8-select-event-tag.webp`, width: 1052, height: 592 }],
    [{ src: `${MEDIA_BASE_PATH}/step-9-publish.webp`, width: 1103, height: 620 }],
  ] satisfies readonly (readonly ArchivedCapture[])[],
} as const;

export type GreatFaceologistLanguage = "en" | "de" | "vi";

type LabeledValue = {
  readonly label: string;
  readonly value: string;
};

type HistoricalStep = {
  readonly title: string;
  readonly text: string;
};

type Question = {
  readonly question: string;
  readonly answer: string;
};

type Source = {
  readonly href: string;
  readonly label: string;
  readonly note: string;
};

type RelatedGuide = {
  readonly href: string;
  readonly label: string;
};

export type GreatFaceologistContent = {
  readonly language: GreatFaceologistLanguage;
  readonly inLanguage: string;
  readonly openGraphLocale: string;
  readonly path: string;
  readonly metadata: {
    readonly title: string;
    readonly description: string;
  };
  readonly breadcrumb: {
    readonly ariaLabel: string;
    readonly home: string;
    readonly guides: string;
    readonly current: string;
  };
  readonly archiveLabel: string;
  readonly title: string;
  readonly intro: string;
  readonly statusNotice: string;
  readonly archiveFactsTitle: string;
  readonly archiveFacts: readonly LabeledValue[];
  readonly evidenceTitle: string;
  readonly evidenceIntro: string;
  readonly screenshotBoundaryTitle: string;
  readonly screenshotBoundary: string;
  readonly routeTitle: string;
  readonly routeIntro: string;
  readonly historicalSteps: readonly HistoricalStep[];
  readonly currentCheckTitle: string;
  readonly currentChecks: readonly string[];
  readonly limitsTitle: string;
  readonly limitsText: string;
  readonly media: {
    readonly heroAlt: string;
    readonly heroCaption: string;
    readonly stepAltSuffix: string;
    readonly stepCaptionSuffix: string;
    readonly dailyCapAlt: string;
    readonly dailyCapCaption: string;
  };
  readonly faqTitle: string;
  readonly faq: readonly Question[];
  readonly sourcesTitle: string;
  readonly sourcesIntro: string;
  readonly sources: readonly Source[];
  readonly relatedTitle: string;
  readonly related: readonly RelatedGuide[];
};

export const greatFaceologistContent = {
  en: {
    language: "en",
    inLanguage: "en-US",
    openGraphLocale: "en_US",
    path: BASE_PATH,
    metadata: {
      title: "The Great Faceologist Archive (December 2025) | Where Winds Meet",
      description:
        "A source-bounded archive of the December 2025 Great Faceologist event, its reported submission route, and what must be checked in the current game.",
    },
    breadcrumb: {
      ariaLabel: "Breadcrumb",
      home: "Home",
      guides: "Guides",
      current: "The Great Faceologist archive",
    },
    archiveLabel: "December 2025 historical event archive",
    title: "The Great Faceologist: historical submission route and current checks",
    intro:
      "The Great Faceologist was documented as a limited-time face and makeup gallery event in December 2025. This page preserves the historical route reported at the time; it is not proof that the event, labels, limits, or rewards are active in the current build.",
    statusNotice:
      "Current UI and event status: open the in-game Event Center and Appearance editor. If the event card or tag is absent, do not treat this archived route as active instructions.",
    archiveFactsTitle: "What this archive can establish",
    archiveFacts: [
      { label: "Period covered", value: "December 2025 historical event coverage" },
      { label: "Historical activity", value: "Face and makeup gallery submissions tied to an event tag" },
      { label: "Evidence level", value: "Official update context plus clearly labeled third-party text reporting" },
      { label: "Current applicability", value: "Unverified; the live client and Event Center are authoritative" },
    ],
    evidenceTitle: "Evidence and media boundary",
    evidenceIntro:
      "The route below is a text reconstruction of December 2025 reporting. Button names and menu placement can move between platforms, regions, and client versions.",
    screenshotBoundaryTitle: "How to read the archived screenshots",
    screenshotBoundary:
      "The republished captures show the December 2025 interface described by the source. They are useful historical navigation context, but not proof that the same controls, event tag, limits, or rewards exist in the current build.",
    routeTitle: "Route reported during the December 2025 event",
    routeIntro:
      "Use these steps only to understand the historical flow. Confirm every control in your current client before publishing anything.",
    historicalSteps: [
      { title: "Open Appearance", text: "The reported route began in the character Appearance or wardrobe area." },
      { title: "Choose base appearance", text: "Players were directed to the face or makeup editor rather than the outfit-posting flow." },
      { title: "Edit the look", text: "A face preset or makeup look was selected or adjusted before opening a preview." },
      { title: "Open the gallery upload", text: "From the preview, the historical client offered an upload-to-gallery action." },
      { title: "Add post details", text: "The upload dialog accepted a title and description for the gallery post." },
      { title: "Check for the event tag", text: "The submission was associated with The Great Faceologist only when the event tag was visible and selected." },
      { title: "Verify in the event screen", text: "After publishing, participants checked the event page or their entries rather than assuming the post counted." },
    ],
    currentCheckTitle: "Before using this archive in the current game",
    currentChecks: [
      "Confirm that an active Great Faceologist card appears in the Event Center for your region and server.",
      "Follow the labels shown by your platform; do not guess a keyboard or controller shortcut from an old guide.",
      "Read the live event rules before publishing, especially eligibility, privacy, limits, and reward terms.",
      "If the tag or event page is missing, stop: an ordinary appearance upload is not evidence of an event entry.",
    ],
    limitsTitle: "Rewards and upload limits are live-state facts",
    limitsText:
      "This archive deliberately does not publish an exact reward table or daily upload cap. Historical third-party reports may describe past milestones, but only the current in-game rules can establish what applies to your account, region, and event run.",
    media: {
      heroAlt: "Historical December 2025 Great Faceologist event screen",
      heroCaption: "Historical event overview capture; check the live Event Center for current availability.",
      stepAltSuffix: "historical December 2025 interface capture",
      stepCaptionSuffix: "Historical walkthrough capture; control labels may differ in the current client.",
      dailyCapAlt: "Historical Great Faceologist upload-limit notice",
      dailyCapCaption: "This archived notice shows that the old interface displayed an upload limit; it does not establish today's value.",
    },
    faqTitle: "The Great Faceologist archive FAQ",
    faq: [
      {
        question: "Is The Great Faceologist active now?",
        answer:
          "This December 2025 archive cannot establish current availability. Check the live Event Center; an absent event card or tag means you should not use the archived flow as an active-event instruction.",
      },
      {
        question: "How were entries reportedly submitted in December 2025?",
        answer:
          "Contemporary reporting described an Appearance to Edit Face or Makeup to gallery-upload flow, with The Great Faceologist tag selected before publishing. Menu labels may have changed since then.",
      },
      {
        question: "What was the daily upload cap and reward list?",
        answer:
          "This page does not maintain an exact historical cap or reward table as a current guarantee. Read the rules displayed for the active event, server, and account in the game.",
      },
      {
        question: "Why are the step screenshots labeled historical?",
        answer:
          "The captures were made for the December 2025 event interface. Reuse is authorized for this site, but the images still cannot prove that the current client uses the same labels or event state.",
      },
    ],
    sourcesTitle: "Sources and scope",
    sourcesIntro:
      "The official page establishes the update-era context. The AllThings.How article supplies the historical route and the republished captures; each image remains labeled as third-party archive media.",
    sources: [
      {
        href: "https://www.wherewindsmeetgame.com/news/official/TimelessBonds.html",
        label: "Where Winds Meet official — Timeless Bonds update",
        note: "Official historical update context.",
      },
      {
        href: "https://allthings.how/how-to-use-the-great-faceologist-event-in-where-winds-meet/",
        label: "AllThings.How — historical submission article",
        note: "Third-party text reference; linked for provenance, not treated as current authority.",
      },
    ],
    relatedTitle: "Related appearance guides",
    related: [
      { href: "/guides/cosmetics", label: "Cosmetics and appearance" },
      { href: "/guides/character-creation-codes", label: "Character creation codes" },
      { href: "/guides/free-outfits", label: "Free outfits" },
    ],
  },
  de: {
    language: "de",
    inLanguage: "de-DE",
    openGraphLocale: "de_DE",
    path: `/de${BASE_PATH}`,
    metadata: {
      title: "The Great Faceologist: Archiv vom Dezember 2025 | Where Winds Meet",
      description:
        "Quellenbegrenztes Archiv des Great-Faceologist-Events vom Dezember 2025: damaliger Einreichungsweg und Prüfungen für den aktuellen Client.",
    },
    breadcrumb: {
      ariaLabel: "Brotkrümelnavigation",
      home: "Startseite",
      guides: "Guides",
      current: "The-Great-Faceologist-Archiv",
    },
    archiveLabel: "Historisches Event-Archiv · Dezember 2025",
    title: "The Great Faceologist: damaliger Einreichungsweg und heutige Prüfungen",
    intro:
      "The Great Faceologist wurde im Dezember 2025 als zeitlich begrenztes Galerie-Event für Gesicht und Make-up dokumentiert. Diese Seite bewahrt den damals beschriebenen Weg; sie belegt nicht, dass Event, Beschriftungen, Limits oder Belohnungen im aktuellen Build aktiv sind.",
    statusNotice:
      "Aktuelle Oberfläche und Event-Status: Prüfe Event Center und Appearance-Editor im Spiel. Fehlen Event-Karte oder Tag, ist dieser Archivweg keine aktive Anleitung.",
    archiveFactsTitle: "Was dieses Archiv belegen kann",
    archiveFacts: [
      { label: "Abgedeckter Zeitraum", value: "Historische Event-Berichte vom Dezember 2025" },
      { label: "Damals beschriebene Aktivität", value: "Gesichts- und Make-up-Galeriebeiträge mit Event-Tag" },
      { label: "Beleglage", value: "Offizieller Update-Kontext und klar markierter externer Textbericht" },
      { label: "Heutige Gültigkeit", value: "Nicht verifiziert; maßgeblich sind Live-Client und Event Center" },
    ],
    evidenceTitle: "Beleg- und Mediengrenze",
    evidenceIntro:
      "Der folgende Ablauf ist eine Textrekonstruktion aus Berichten vom Dezember 2025. Schaltflächen und Menüs können je nach Plattform, Region und Client-Version anders aussehen.",
    screenshotBoundaryTitle: "So sind die archivierten Schrittbilder zu lesen",
    screenshotBoundary:
      "Die erneut veröffentlichten Aufnahmen zeigen die im Dezember 2025 beschriebene Oberfläche. Sie helfen als historischer Navigationskontext, belegen aber nicht, dass Bedienelemente, Event-Tag, Limits oder Belohnungen im aktuellen Build gleich sind.",
    routeTitle: "Im Dezember 2025 beschriebener Ablauf",
    routeIntro:
      "Die Schritte erklären nur den historischen Ablauf. Prüfe jedes Bedienelement im aktuellen Client, bevor du etwas veröffentlichst.",
    historicalSteps: [
      { title: "Appearance öffnen", text: "Der berichtete Weg begann im Appearance- oder Garderobenbereich der Figur." },
      { title: "Grundaussehen wählen", text: "Verwendet wurde der Gesichts- oder Make-up-Editor und nicht der Weg für Outfit-Beiträge." },
      { title: "Aussehen bearbeiten", text: "Vor der Vorschau wurde ein Gesichts-Preset oder Make-up gewählt beziehungsweise angepasst." },
      { title: "Galerie-Upload öffnen", text: "Aus der Vorschau bot der damalige Client eine Aktion zum Galerie-Upload an." },
      { title: "Beitragsdaten ergänzen", text: "Im Upload-Dialog konnten Titel und Beschreibung für den Galeriebeitrag eingetragen werden." },
      { title: "Event-Tag prüfen", text: "Der Beitrag war nur zugeordnet, wenn The Great Faceologist sichtbar und ausgewählt war." },
      { title: "Im Event-Bildschirm kontrollieren", text: "Nach dem Veröffentlichen wurde der Beitrag auf der Event-Seite oder unter den eigenen Einträgen geprüft." },
    ],
    currentCheckTitle: "Vor der Nutzung im aktuellen Spiel prüfen",
    currentChecks: [
      "Prüfe, ob im Event Center deiner Region und deines Servers eine aktive Great-Faceologist-Karte erscheint.",
      "Folge den Bezeichnungen deiner Plattform; übernimm keine alte Tastatur- oder Controller-Taste ungeprüft.",
      "Lies vor dem Veröffentlichen die Live-Regeln zu Teilnahme, Datenschutz, Limits und Belohnungen.",
      "Fehlen Tag oder Event-Seite, stoppe: Ein normaler Appearance-Beitrag belegt keine Event-Teilnahme.",
    ],
    limitsTitle: "Belohnungen und Upload-Limits hängen vom Live-Stand ab",
    limitsText:
      "Dieses Archiv veröffentlicht bewusst weder eine exakte Belohnungstabelle noch ein tägliches Upload-Limit. Alte externe Berichte können frühere Meilensteine beschreiben; was für Konto, Region und Event-Runde gilt, steht nur in den aktuellen Spielregeln.",
    media: {
      heroAlt: "Historischer Great-Faceologist-Eventbildschirm vom Dezember 2025",
      heroCaption: "Historische Event-Übersicht; prüfe die heutige Verfügbarkeit im Live-Event-Center.",
      stepAltSuffix: "historische Aufnahme der Oberfläche vom Dezember 2025",
      stepCaptionSuffix: "Historische Walkthrough-Aufnahme; Beschriftungen können im aktuellen Client abweichen.",
      dailyCapAlt: "Historischer Hinweis zum Great-Faceologist-Upload-Limit",
      dailyCapCaption: "Der archivierte Hinweis zeigt nur, dass die alte Oberfläche ein Upload-Limit meldete; er belegt keinen heutigen Wert.",
    },
    faqTitle: "FAQ zum The-Great-Faceologist-Archiv",
    faq: [
      {
        question: "Ist The Great Faceologist derzeit aktiv?",
        answer:
          "Dieses Archiv vom Dezember 2025 kann die heutige Verfügbarkeit nicht belegen. Prüfe das Live-Event-Center; ohne Event-Karte oder Tag ist der alte Ablauf keine aktive Event-Anleitung.",
      },
      {
        question: "Wie wurden Beiträge im Dezember 2025 eingereicht?",
        answer:
          "Zeitgenössische Berichte nannten den Weg Appearance, Edit Face oder Makeup, Galerie-Upload und Auswahl des The-Great-Faceologist-Tags vor dem Veröffentlichen. Menünamen können sich geändert haben.",
      },
      {
        question: "Wie hoch waren Tageslimit und Belohnungen?",
        answer:
          "Diese Seite führt kein exaktes altes Limit und keine Belohnungsliste als heutige Zusage. Lies die Regeln, die das aktive Event für Server und Konto im Spiel anzeigt.",
      },
      {
        question: "Warum sind die Schrittbilder als historisch markiert?",
        answer:
          "Die Aufnahmen stammen aus der Event-Oberfläche vom Dezember 2025. Die Wiederverwendung auf dieser Website ist autorisiert; trotzdem belegen die Bilder keine heutigen Beschriftungen oder Event-Zustände.",
      },
    ],
    sourcesTitle: "Quellen und Geltungsbereich",
    sourcesIntro:
      "Die offizielle Seite belegt den Update-Kontext. Der Artikel von AllThings.How liefert den historischen Ablauf und die erneut veröffentlichten Aufnahmen; jedes Bild bleibt als externes Archivmedium gekennzeichnet.",
    sources: [
      {
        href: "https://www.wherewindsmeetgame.com/news/official/TimelessBonds.html",
        label: "Where Winds Meet offiziell — Timeless-Bonds-Update",
        note: "Offizieller historischer Update-Kontext.",
      },
      {
        href: "https://allthings.how/how-to-use-the-great-faceologist-event-in-where-winds-meet/",
        label: "AllThings.How — historischer Einreichungsartikel",
        note: "Externe Textquelle; Herkunftsnachweis, keine aktuelle Autorität.",
      },
    ],
    relatedTitle: "Verwandte Appearance-Guides",
    related: [
      { href: "/de/guides/cosmetics", label: "Kosmetik und Aussehen" },
      { href: "/de/guides/character-creation-codes", label: "Character-Creation-Codes" },
      { href: "/de/guides/free-outfits", label: "Kostenlose Outfits" },
    ],
  },
  vi: {
    language: "vi",
    inLanguage: "vi-VN",
    openGraphLocale: "vi_VN",
    path: `/vn${BASE_PATH}`,
    metadata: {
      title: "The Great Faceologist: lưu trữ tháng 12/2025 | Where Winds Meet",
      description:
        "Bản lưu trữ có giới hạn nguồn về sự kiện Great Faceologist tháng 12/2025, quy trình nộp bài khi đó và các điểm phải kiểm tra trong game hiện tại.",
    },
    breadcrumb: {
      ariaLabel: "Điều hướng phân cấp",
      home: "Trang chủ",
      guides: "Hướng dẫn",
      current: "Lưu trữ The Great Faceologist",
    },
    archiveLabel: "Lưu trữ sự kiện lịch sử · tháng 12/2025",
    title: "The Great Faceologist: quy trình lịch sử và kiểm tra ở bản game hiện tại",
    intro:
      "The Great Faceologist được ghi nhận là sự kiện gallery tạo mặt và makeup có thời hạn vào tháng 12/2025. Trang này lưu lại quy trình được mô tả lúc đó; đây không phải bằng chứng rằng sự kiện, nhãn, giới hạn hoặc phần thưởng vẫn hoạt động trong build hiện tại.",
    statusNotice:
      "Giao diện và trạng thái hiện tại: hãy mở Event Center và trình chỉnh Appearance trong game. Nếu không có thẻ sự kiện hoặc tag, đừng dùng quy trình lưu trữ này như hướng dẫn cho sự kiện đang hoạt động.",
    archiveFactsTitle: "Bản lưu trữ này xác minh được gì",
    archiveFacts: [
      { label: "Thời kỳ được đề cập", value: "Thông tin lịch sử của sự kiện tháng 12/2025" },
      { label: "Hoạt động khi đó", value: "Đăng tạo hình khuôn mặt và makeup vào gallery với tag sự kiện" },
      { label: "Mức bằng chứng", value: "Bối cảnh cập nhật chính thức và bài tham khảo chữ của bên thứ ba được ghi nhãn rõ" },
      { label: "Giá trị ở hiện tại", value: "Chưa xác minh; client live và Event Center là nguồn quyết định" },
    ],
    evidenceTitle: "Giới hạn bằng chứng và hình ảnh",
    evidenceIntro:
      "Quy trình bên dưới là bản dựng lại bằng chữ từ thông tin tháng 12/2025. Tên nút và vị trí menu có thể thay đổi theo nền tảng, khu vực và phiên bản client.",
    screenshotBoundaryTitle: "Cách đọc bộ ảnh từng bước được lưu trữ",
    screenshotBoundary:
      "Bộ ảnh được đăng lại thể hiện giao diện được mô tả vào tháng 12/2025. Ảnh hữu ích để hiểu luồng lịch sử nhưng không chứng minh rằng nút, tag sự kiện, giới hạn hoặc phần thưởng vẫn giống trong build hiện tại.",
    routeTitle: "Quy trình được ghi nhận trong tháng 12/2025",
    routeIntro:
      "Chỉ dùng các bước này để hiểu quy trình lịch sử. Hãy xác nhận từng nút trong client hiện tại trước khi đăng.",
    historicalSteps: [
      { title: "Mở Appearance", text: "Quy trình được ghi nhận bắt đầu ở khu Appearance hoặc tủ đồ của nhân vật." },
      { title: "Chọn chỉnh diện mạo cơ bản", text: "Người chơi vào trình chỉnh mặt hoặc makeup, không dùng luồng đăng outfit." },
      { title: "Chỉnh ngoại hình", text: "Một preset khuôn mặt hoặc kiểu makeup được chọn hay điều chỉnh trước khi xem trước." },
      { title: "Mở upload gallery", text: "Từ màn hình xem trước, client khi đó có thao tác upload lên gallery." },
      { title: "Thêm thông tin bài", text: "Hộp upload cho nhập tiêu đề và mô tả của bài gallery." },
      { title: "Kiểm tra tag sự kiện", text: "Bài chỉ được liên kết với The Great Faceologist khi tag hiện ra và được chọn." },
      { title: "Xác minh trong trang sự kiện", text: "Sau khi đăng, người chơi kiểm tra trang sự kiện hoặc mục bài của mình thay vì mặc định rằng bài đã được tính." },
    ],
    currentCheckTitle: "Trước khi áp dụng vào game hiện tại",
    currentChecks: [
      "Xác nhận Event Center của khu vực và server có thẻ Great Faceologist đang hoạt động.",
      "Làm theo nhãn trên nền tảng của bạn; đừng đoán phím bàn phím hay tay cầm từ hướng dẫn cũ.",
      "Đọc quy tắc live về điều kiện, quyền riêng tư, giới hạn và phần thưởng trước khi đăng.",
      "Nếu không thấy tag hoặc trang sự kiện, hãy dừng: bài Appearance thông thường không chứng minh đã dự thi.",
    ],
    limitsTitle: "Phần thưởng và giới hạn upload phụ thuộc trạng thái live",
    limitsText:
      "Bản lưu trữ này chủ ý không đăng bảng phần thưởng hoặc giới hạn upload mỗi ngày dưới dạng con số chính xác. Bài bên thứ ba cũ có thể mô tả mốc của lần chạy trước; chỉ quy tắc trong game hiện tại mới xác định nội dung áp dụng cho tài khoản, khu vực và đợt sự kiện của bạn.",
    media: {
      heroAlt: "Màn hình sự kiện Great Faceologist lịch sử tháng 12/2025",
      heroCaption: "Ảnh tổng quan sự kiện lịch sử; hãy kiểm tra Event Center live để biết trạng thái hiện tại.",
      stepAltSuffix: "ảnh giao diện lịch sử tháng 12/2025",
      stepCaptionSuffix: "Ảnh walkthrough lịch sử; nhãn điều khiển có thể khác trong client hiện tại.",
      dailyCapAlt: "Thông báo giới hạn upload Great Faceologist trong giao diện lịch sử",
      dailyCapCaption: "Thông báo lưu trữ chỉ cho thấy giao diện cũ từng có giới hạn upload; không xác nhận con số hiện tại.",
    },
    faqTitle: "FAQ về bản lưu trữ The Great Faceologist",
    faq: [
      {
        question: "The Great Faceologist hiện có hoạt động không?",
        answer:
          "Bản lưu trữ tháng 12/2025 không thể xác minh tình trạng hiện tại. Hãy kiểm tra Event Center live; nếu không có thẻ sự kiện hoặc tag, đừng xem quy trình cũ là hướng dẫn sự kiện đang chạy.",
      },
      {
        question: "Bài dự thi được nộp thế nào vào tháng 12/2025?",
        answer:
          "Nguồn cùng thời kỳ mô tả luồng Appearance, Edit Face hoặc Makeup, upload gallery và chọn tag The Great Faceologist trước khi đăng. Tên menu có thể đã thay đổi.",
      },
      {
        question: "Giới hạn mỗi ngày và danh sách phần thưởng là gì?",
        answer:
          "Trang không duy trì con số lịch sử hoặc danh sách phần thưởng như một cam kết hiện tại. Hãy đọc quy tắc mà sự kiện live hiển thị cho server và tài khoản của bạn.",
      },
      {
        question: "Vì sao ảnh từng bước được ghi nhãn lịch sử?",
        answer:
          "Ảnh đến từ giao diện sự kiện tháng 12/2025. Việc tái sử dụng trên website này đã được cho phép, nhưng ảnh vẫn không chứng minh nhãn hoặc trạng thái sự kiện của client hiện tại.",
      },
    ],
    sourcesTitle: "Nguồn và phạm vi",
    sourcesIntro:
      "Trang chính thức xác lập bối cảnh cập nhật. Bài AllThings.How cung cấp quy trình lịch sử và bộ ảnh được đăng lại; mỗi ảnh vẫn được ghi nhãn là media lưu trữ của bên thứ ba.",
    sources: [
      {
        href: "https://www.wherewindsmeetgame.com/news/official/TimelessBonds.html",
        label: "Where Winds Meet chính thức — bản cập nhật Timeless Bonds",
        note: "Bối cảnh cập nhật lịch sử chính thức.",
      },
      {
        href: "https://allthings.how/how-to-use-the-great-faceologist-event-in-where-winds-meet/",
        label: "AllThings.How — bài quy trình lịch sử",
        note: "Tham khảo chữ của bên thứ ba; dùng để truy nguồn, không phải nguồn quyết định hiện tại.",
      },
    ],
    relatedTitle: "Hướng dẫn ngoại hình liên quan",
    related: [
      { href: "/vn/guides/cosmetics", label: "Mỹ phẩm và ngoại hình" },
      { href: "/vn/guides/character-creation-codes", label: "Mã tạo nhân vật" },
      { href: "/vn/guides/free-outfits", label: "Trang phục miễn phí" },
    ],
  },
} as const satisfies Record<GreatFaceologistLanguage, GreatFaceologistContent>;

export function buildGreatFaceologistMetadata(
  content: GreatFaceologistContent,
): Metadata {
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: buildHreflangAlternates(BASE_PATH, {
      canonicalLanguage: content.language,
    }),
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `${SITE_URL}${content.path}`,
      siteName: "Where Winds Meet Hub",
      images: [
        {
          url: `${SITE_URL}${faceologistMedia.hero.src}`,
          width: faceologistMedia.hero.width,
          height: faceologistMedia.hero.height,
          alt: content.media.heroAlt,
        },
      ],
      locale: content.openGraphLocale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
      images: [`${SITE_URL}${faceologistMedia.hero.src}`],
    },
  };
}

function StructuredData({ content }: { content: GreatFaceologistContent }) {
  const breadcrumbs = [
    { name: content.breadcrumb.home, path: content.language === "en" ? "/" : `/${content.language === "vi" ? "vn" : "de"}` },
    { name: content.breadcrumb.guides, path: content.language === "en" ? "/guides" : `/${content.language === "vi" ? "vn" : "de"}/guides` },
    { name: content.breadcrumb.current, path: content.path },
  ];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: content.metadata.title,
      description: content.metadata.description,
      url: `${SITE_URL}${content.path}`,
      inLanguage: content.inLanguage,
      primaryImageOfPage: `${SITE_URL}${faceologistMedia.hero.src}`,
      isBasedOn: content.sources.map((source) => source.href),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: content.inLanguage,
      mainEntity: content.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function TheGreatFaceologistGuidePage({
  content,
}: {
  content: GreatFaceologistContent;
}) {
  const localeRoot = content.language === "en" ? "/" : `/${content.language === "vi" ? "vn" : "de"}`;
  const guidesRoot = localeRoot === "/" ? "/guides" : `${localeRoot}/guides`;

  return (
    <article className="min-h-screen space-y-10 bg-ink-wash pb-20">
      <StructuredData content={content} />

      <nav aria-label={content.breadcrumb.ariaLabel} className="text-sm text-slate-400">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href={localeRoot} className="hover:text-emerald-200">{content.breadcrumb.home}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={guidesRoot} className="hover:text-emerald-200">{content.breadcrumb.guides}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-200">{content.breadcrumb.current}</li>
        </ol>
      </nav>

      <header className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-slate-950/85 p-6 shadow-2xl sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg3.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/55" />
        </div>
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              {content.archiveLabel}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold text-slate-50 sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{content.intro}</p>
            <p className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-100">
              {content.statusNotice}
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 shadow-xl">
            <CdnImage
              src={faceologistMedia.hero.src}
              alt={content.media.heroAlt}
              width={faceologistMedia.hero.width}
              height={faceologistMedia.hero.height}
              priority
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <figcaption className="space-y-1 p-4 text-xs leading-5 text-slate-300">
              <span className="block">{content.media.heroCaption}</span>
              <span className="block text-amber-200">
                Publisher: AllThings.How. {MEDIA_AUTHORIZATION}
              </span>
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="space-y-5" aria-labelledby="archive-facts-title">
        <h2 id="archive-facts-title" className="text-3xl font-bold text-slate-50">
          {content.archiveFactsTitle}
        </h2>
        <dl className="grid gap-4 md:grid-cols-2">
          {content.archiveFacts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-300">{item.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-slate-300">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-5 lg:grid-cols-2" aria-labelledby="evidence-title">
        <div className="rounded-3xl border border-sky-400/25 bg-sky-500/10 p-6">
          <h2 id="evidence-title" className="text-2xl font-bold text-slate-50">{content.evidenceTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-200">{content.evidenceIntro}</p>
        </div>
        <div className="rounded-3xl border border-slate-700 bg-slate-950/75 p-6">
          <h2 className="text-2xl font-bold text-slate-50">{content.screenshotBoundaryTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{content.screenshotBoundary}</p>
          <p className="mt-3 text-xs leading-5 text-amber-200">
            Publisher: AllThings.How. {MEDIA_AUTHORIZATION}
          </p>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="historical-route-title">
        <div>
          <h2 id="historical-route-title" className="text-3xl font-bold text-slate-50">{content.routeTitle}</h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">{content.routeIntro}</p>
        </div>
        <ol className="grid gap-4 md:grid-cols-2">
          {content.historicalSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
              <div className="mt-4 grid gap-3">
                {faceologistMedia.steps[index].map((capture, captureIndex) => (
                  <figure key={capture.src} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
                    <CdnImage
                      src={capture.src}
                      alt={`${step.title} — ${content.media.stepAltSuffix} ${captureIndex + 1}`}
                      width={capture.width}
                      height={capture.height}
                      loading="lazy"
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="p-3 text-xs leading-5 text-slate-400">
                      {content.media.stepCaptionSuffix} Publisher: AllThings.How.
                    </figcaption>
                  </figure>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-emerald-400/25 bg-emerald-500/10 p-6">
          <h2 className="text-2xl font-bold text-slate-50">{content.currentCheckTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            {content.currentChecks.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <aside className="rounded-3xl border border-amber-400/25 bg-amber-500/10 p-6">
          <h2 className="text-2xl font-bold text-slate-50">{content.limitsTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-200">{content.limitsText}</p>
          <figure className="mt-5 overflow-hidden rounded-xl border border-amber-300/20 bg-slate-950/60">
            <CdnImage
              src={faceologistMedia.dailyCap.src}
              alt={content.media.dailyCapAlt}
              width={faceologistMedia.dailyCap.width}
              height={faceologistMedia.dailyCap.height}
              loading="lazy"
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <figcaption className="p-3 text-xs leading-5 text-amber-100/80">
              {content.media.dailyCapCaption} Publisher: AllThings.How.
            </figcaption>
          </figure>
        </aside>
      </section>

      <section className="space-y-5" aria-labelledby="faceologist-faq-title">
        <h2 id="faceologist-faq-title" className="text-3xl font-bold text-slate-50">{content.faqTitle}</h2>
        <div className="space-y-4">
          {content.faq.map((item) => (
            <details key={item.question} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <summary className="cursor-pointer font-semibold text-slate-50">{item.question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-slate-950/75 p-6" aria-labelledby="faceologist-sources-title">
        <h2 id="faceologist-sources-title" className="text-2xl font-bold text-slate-50">{content.sourcesTitle}</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">{content.sourcesIntro}</p>
        <ul className="mt-5 space-y-3">
          {content.sources.map((source) => (
            <li key={source.href} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <a href={source.href} target="_blank" rel="noreferrer" className="font-semibold text-sky-200 underline underline-offset-4 hover:text-sky-100">
                {source.label} ↗
              </a>
              <p className="mt-2 text-xs leading-5 text-slate-400">{source.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <nav className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6" aria-label={content.relatedTitle}>
        <h2 className="text-xl font-bold text-emerald-100">{content.relatedTitle}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {content.related.map((guide) => (
            <Link key={guide.href} href={guide.href} className="rounded-full border border-emerald-300/40 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-200">
              {guide.label} →
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
