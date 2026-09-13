import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildLocalizedPath } from "@/i18n/routing.mjs";
import { getContentFreshness } from "@/lib/contentFreshness";

export type CodesGuideLanguage = "en" | "vi" | "de";

const freshness = getContentFreshness("/guides/codes");
const lastChecked = freshness?.lastChecked ?? "2026-06-03";
const gameVersionLabel = freshness?.gameVersion ?? "Version 2.1 / checked 2026-09-13";

const liveCodeFacts = [
  {
    code: "PALACE0528",
    en: {
      label: "Imperial Palace reported code",
      notes:
        "Reported by third-party code trackers during the Version 1.7 / Imperial Palace window. Verify in-game before treating it as active; Palace-era codes can rotate quickly.",
    },
    de: {
      label: "Gemeldeter Imperial-Palace-Code",
      notes:
        "Von Drittanbieter-Code-Trackern im Fenster Version 1.7 / Imperial Palace gemeldet. Vor Annahme als aktiv im Spiel pruefen; Palace-Codes koennen schnell rotieren.",
    },
    vi: {
      label: "Mã Imperial Palace được báo cáo",
      notes:
        "Được tracker mã bên thứ ba báo trong cửa sổ Version 1.7 / Imperial Palace. Hãy xác minh trong game trước khi coi là còn hiệu lực; mã thời Palace có thể xoay nhanh.",
    },
  },
  {
    code: "PALACEGO",
    en: {
      label: "Palace launch reported code",
      notes:
        "Reported as a Palace update reward. Use it as a candidate code, not an official guarantee, and move it to expired if your server rejects it.",
    },
    de: {
      label: "Gemeldeter Palace-Launch-Code",
      notes:
        "Als Palace-Update-Belohnung gemeldet. Als Kandidaten-Code nutzen, nicht als offizielle Garantie; bei Ablehnung durch den Server als abgelaufen markieren.",
    },
    vi: {
      label: "Mã ra mắt Palace được báo cáo",
      notes:
        "Được báo là phần thưởng cập nhật Palace. Coi là mã ứng viên, không phải bảo đảm chính thức; chuyển sang hết hạn nếu server từ chối.",
    },
  },
  {
    code: "QINCHUAN0430",
    en: {
      label: "Qinchuan update code",
      notes:
        "Older Qinchuan-era code reported with Echo Jade, Resonating Melody, and Coins. Try it after Palace-era candidates because update/event codes can expire without much warning.",
    },
    de: {
      label: "Qinchuan-Update-Code",
      notes:
        "Aelterer Qinchuan-Code mit Echo Jade, Resonating Melody und Coins gemeldet. Nach Palace-Kandidaten versuchen, weil Update-/Event-Codes oft ohne Vorwarnung ablaufen.",
    },
    vi: {
      label: "Mã cập nhật Qinchuan",
      notes:
        "Mã thời Qinchuan cũ được báo kèm Echo Jade, Resonating Melody và Coins. Thử sau các mã thời Palace vì mã update/sự kiện có thể hết hạn ít cảnh báo.",
    },
  },
  {
    code: "LIANGZHOUGO",
    en: {
      label: "Liangzhou follow-up reward",
      notes:
        "Reported as a Liangzhou/Hexi-era code with Echo Jade, an Inner Way Note chest, and Coins. If your server rejects it, move it to your expired list.",
    },
    de: {
      label: "Liangzhou-Follow-up-Belohnung",
      notes:
        "Als Liangzhou/Hexi-Code mit Echo Jade, Inner-Way-Note-Truhe und Coins gemeldet. Bei Ablehnung in die Expired-Liste verschieben.",
    },
    vi: {
      label: "Phần thưởng follow-up Liangzhou",
      notes:
        "Được báo là mã thời Liangzhou/Hexi kèm Echo Jade, rương Inner Way Note và Coins. Nếu server từ chối, chuyển vào danh sách hết hạn.",
    },
  },
  {
    code: "LIANGZHOU0402",
    en: {
      label: "Liangzhou April code",
      notes:
        "Reported as an April 2026 Liangzhou code. Good quick check for returning players catching up on older Hexi rewards.",
    },
    de: {
      label: "Liangzhou-April-Code",
      notes:
        "Als Liangzhou-Code vom April 2026 gemeldet. Guter Schnellcheck fuer Returning Player, die aeltere Hexi-Belohnungen nachholen.",
    },
    vi: {
      label: "Mã Liangzhou tháng 4",
      notes:
        "Được báo là mã Liangzhou tháng 4/2026. Kiểm tra nhanh hữu ích cho người chơi quay lại bắt kịp phần thưởng Hexi cũ.",
    },
  },
  {
    code: "MEETINHEXI",
    en: {
      label: "Hexi expansion code",
      notes:
        "Reported reward bundle includes Echo Jade, Coins, Inner Way Note chests, and Oscillating Jades. Still worth trying on returning accounts.",
    },
    de: {
      label: "Hexi-Expansion-Code",
      notes:
        "Gemeldetes Bundle: Echo Jade, Coins, Inner-Way-Note-Truhen und Oscillating Jades. Auf Returning-Accounts weiterhin einen Versuch wert.",
    },
    vi: {
      label: "Mã mở rộng Hexi",
      notes:
        "Gói phần thưởng được báo gồm Echo Jade, Coins, rương Inner Way Note và Oscillating Jades. Vẫn đáng thử trên tài khoản quay lại.",
    },
  },
  {
    code: "HEXI0306",
    en: {
      label: "Hexi March code",
      notes:
        "Reported Hexi code for Echo Jade and Coins. Redeem before older expansion campaigns rotate out.",
    },
    de: {
      label: "Hexi-Maerz-Code",
      notes:
        "Gemeldeter Hexi-Code fuer Echo Jade und Coins. Einloesen, bevor aeltere Expansion-Kampagnen auslaufen.",
    },
    vi: {
      label: "Mã Hexi tháng 3",
      notes:
        "Mã Hexi được báo cho Echo Jade và Coins. Đổi trước khi chiến dịch expansion cũ xoay hết.",
    },
  },
  {
    code: "GOOSENEWS",
    en: {
      label: "Goose news reward",
      notes:
        "Reported as a smaller Echo Jade plus Inner Way chest reward. Useful for new accounts that missed launch freebies.",
    },
    de: {
      label: "Goose-News-Belohnung",
      notes:
        "Als kleinere Echo-Jade- plus Inner-Way-Truhen-Belohnung gemeldet. Nuetzlich fuer neue Accounts, die Launch-Freebies verpasst haben.",
    },
    vi: {
      label: "Phần thưởng goose news",
      notes:
        "Được báo là phần thưởng Echo Jade nhỏ kèm rương Inner Way. Hữu ích cho tài khoản mới bỏ lỡ freebie lúc ra mắt.",
    },
  },
  {
    code: "DEVLOG2601",
    en: {
      label: "Developer log code",
      notes:
        "Reported as a dev-log reward. Some communities previously listed expiry windows, so verify in-game before assuming it still works.",
    },
    de: {
      label: "Developer-Log-Code",
      notes:
        "Als Dev-Log-Belohnung gemeldet. Manche Communities nannten frueher Ablauf-Fenster; vor Annahme als aktiv im Spiel pruefen.",
    },
    vi: {
      label: "Mã developer log",
      notes:
        "Được báo là phần thưởng dev-log. Một số cộng đồng từng liệt kê cửa sổ hết hạn, nên xác minh trong game trước khi giả định còn dùng được.",
    },
  },
  {
    code: "WWMDEVTALK",
    en: {
      label: "Dev talk reward",
      notes:
        "Reported as Echo Jade and Coins. Prioritize it with other official/community dev-post codes.",
    },
    de: {
      label: "Dev-Talk-Belohnung",
      notes:
        "Als Echo Jade und Coins gemeldet. Zusammen mit anderen offiziellen/Community-Dev-Post-Codes priorisieren.",
    },
    vi: {
      label: "Phần thưởng dev talk",
      notes:
        "Được báo là Echo Jade và Coins. Ưu tiên cùng các mã từ bài dev chính thức/cộng đồng khác.",
    },
  },
  {
    code: "WWMGLyoutube",
    en: {
      label: "Global launch YouTube campaign",
      notes:
        "Older launch campaign code that some lists still report as active. Try it after newer Palace/Qinchuan/Hexi codes.",
    },
    de: {
      label: "Global-Launch-YouTube-Kampagne",
      notes:
        "Aelterer Launch-Kampagnen-Code, den manche Listen noch als aktiv melden. Nach neueren Palace/Qinchuan/Hexi-Codes versuchen.",
    },
    vi: {
      label: "Chiến dịch YouTube ra mắt toàn cầu",
      notes:
        "Mã chiến dịch ra mắt cũ mà một số danh sách vẫn báo còn hiệu lực. Thử sau các mã Palace/Qinchuan/Hexi mới hơn.",
    },
  },
] as const;

const copy = {
  en: {
    h1Before: "WWM Codes ",
    h1Highlight: "September 2026",
    intro1: (checked: string, version: string) =>
      `Updated ${checked}: this page refreshes the Where Winds Meet codes checklist for ${version}. Codes below stay labeled Reported—not confirmed-active—because aggregator lists are not treated as live truth. Prefer redeem steps and in-game verification over stuffing unverified strings.`,
    intro2:
      "Important: the official news feed also reported that a leaked batch of 30 exchange codes was disabled in early May 2026. If a code from social media fails, it may simply be one of those disabled leak codes rather than a problem with your account.",
    reportedTitle: "Reported Codes ",
    reportedHint: (checked: string) => `(verify in-game, checked ${checked})`,
    statusReported: "Reported",
    footnote:
      "* Codes are region-dependent and time-limited. Always check in-game. Leaked batches may already be disabled, and third-party Palace code reports are not official confirmations.",
    typeEyebrow: "Choose the right code type",
    typeTitle: "Redeem codes, outfit codes, or character appearance codes?",
    typeBody:
      "Google mixes three different WWM code intents. This page tracks exchange/redeem codes entered for account rewards. If you want a free outfit route, use the cosmetics guide instead. Character appearance codes are player-made face presets and are imported through appearance editing—not redeemed in the rewards menu.",
    redeemReward: "Redeem reward codes",
    importCharacter: "Import character creation codes",
    freeOutfits: "Free outfits and cosmetics",
    appearance: "Appearance and customization",
    warningTitle: "Exchange-code warning",
    warningBody:
      "The official mobile news feed posted an Exchange Code Announcement on May 3, 2026 saying that a leaked batch of 30 codes had been disabled. That means some very large social-media lists may be noisy. Use this page as a practical checklist: try the most recent Qinchuan/Hexi codes first, then treat failed leaked codes as expired instead of retrying them for days.",
    howTitle: "How Codes Work · redeem path",
    howBodyBefore: "Practical redeem path for reward codes: ",
    howPath: "Settings → Other → Exchange Code",
    howBodyAfter: ", then claim from the mailbox. Character-creation appearance codes stay on a different page.",
    officialEvents: "📢 Official Events",
    officialEventsBody:
      "Teased in trailers and live streams. Usually time-limited to the event window (e.g., Launch Week).",
    compensation: "🔧 Compensation",
    compensationBody:
      "Issued after maintenance or bugs. These have generous expiry windows but are one-time use.",
    creatorPartners: "🤝 Creator Partners",
    creatorPartnersBody:
      "Unique codes shared by streamers. Often grant exclusive cosmetics or fun social items.",
    rewardTypes: "Reward Types",
    exampleCodes: [
      {
        label: "Launch celebration bundle",
        status: "Example active code",
        notes:
          "A typical Where Winds Meet code during launch might include cosmetics, temporary boosts, and a small stash of upgrade materials.",
      },
      {
        label: "Content creator reward",
        status: "Example limited code",
        notes:
          "Partnered campaigns often share short-lived Where Winds Meet codes that reward exclusive visual items or fun social toys.",
      },
      {
        label: "Apology or hotfix gift",
        status: "Example compensation code",
        notes:
          "When servers struggle or major bugs appear, developers sometimes distribute Where Winds Meet codes that grant currencies or consumables.",
      },
    ],
    redeemTitle: "How to Redeem",
    pcMobile: "PC & Mobile (in-game exchange)",
    steps: [
      ["Open ", "Settings", " from the system menu."],
      ["Choose ", "Other", "."],
      ["Select ", "Exchange Code", "."],
      ["Enter the code exactly, submit, then claim the reward from your ", "mailbox", "."],
    ] as [string, string, string][],
    sourceNote:
      "Source checklist note: third-party trackers (including PC Gamer's codes roundup already cited in freshness) may list candidates, but only the in-game Exchange Code result confirms whether a string still works on your account/region.",
    ps5: "PlayStation 5",
    ps5BodyBefore:
      "Most redeem codes use the same Settings → Other → Exchange Code path in-game. Platform store packs are separate and must be claimed in the ",
    ps5Store: "PlayStation Store",
    ps5BodyAfter: ".",
    tip: "Tip: Use the PlayStation App on your phone to type long codes faster, then finish the mailbox claim in-game.",
    faqTitle: "Redeem FAQ",
    faqs: [
      {
        q: "Expired or rejected?",
        a: " Mark it expired for your account. Do not spam retries—region gates and one-time claims both look like failures.",
      },
      {
        q: "Case-sensitive?",
        a: " Enter codes exactly as shown. Mixed-case strings (for example launch YouTube codes) often fail if forced to all-caps.",
      },
      {
        q: "May 2026 leak batch:",
        a: " The official mobile news feed said a leaked batch of 30 exchange codes was disabled in early May 2026. Large social lists may still recycle those dead strings.",
      },
      {
        q: "Character creation / outfit codes?",
        a: " Those are not redeem codes—use the separate character-creation and cosmetics guides linked above.",
      },
    ],
    strategyTitle: "Redemption Strategy",
    strategy1Before: "New players often see a flood of codes. Don't panic. Sort them into ",
    strategyProgression: "Progression",
    strategy1Mid: " (claim now) and ",
    strategyCosmetics: "Cosmetics",
    strategy1After: " (claim later).",
    strategy2:
      "By approaching rewards with intention, you turn codes into a gentle tailwind rather than a source of FOMO pressure.",
    bgAlt: "Where Winds Meet codes background art",
  },
  de: {
    h1Before: "WWM Codes ",
    h1Highlight: "September 2026",
    intro1: (checked: string, version: string) =>
      `Aktualisiert ${checked}: Diese Seite aktualisiert die Where-Winds-Meet-Code-Checkliste fuer ${version}. Codes unten bleiben als Gemeldet gekennzeichnet—nicht als bestaetigt-aktiv—, weil Aggregator-Listen nicht als Live-Wahrheit gelten. Lieber Einloese-Schritte und In-Game-Pruefung statt ungepruefte Strings zu spammen.`,
    intro2:
      "Wichtig: Der offizielle News-Feed meldete auch, dass ein geleakter Batch von 30 Exchange Codes Anfang Mai 2026 deaktiviert wurde. Scheitert ein Social-Media-Code, kann es einer dieser deaktivierten Leak-Codes sein—nicht zwingend ein Account-Problem.",
    reportedTitle: "Gemeldete Codes ",
    reportedHint: (checked: string) => `(im Spiel pruefen, Stand ${checked})`,
    statusReported: "Gemeldet",
    footnote:
      "* Codes sind regionsabhaengig und zeitlich begrenzt. Immer im Spiel pruefen. Geleakte Batches koennen bereits deaktiviert sein; Drittanbieter-Palace-Meldungen sind keine offiziellen Bestaetigungen.",
    typeEyebrow: "Richtigen Code-Typ waehlen",
    typeTitle: "Redeem-Codes, Outfit-Codes oder Character-Appearance-Codes?",
    typeBody:
      "Google vermischt drei verschiedene WWM-Code-Intents. Diese Seite trackt Exchange/Redeem-Codes fuer Account-Belohnungen. Fuer Free-Outfit-Routen nutze den Cosmetics-Guide. Character-Appearance-Codes sind player-made Face-Presets und werden ueber Appearance-Editing importiert—nicht im Rewards-Menue eingeloest.",
    redeemReward: "Reward-Codes einloesen",
    importCharacter: "Character-Creation-Codes importieren",
    freeOutfits: "Free Outfits und Cosmetics",
    appearance: "Appearance und Customization",
    warningTitle: "Exchange-Code-Warnung",
    warningBody:
      "Der offizielle Mobile-News-Feed veroeffentlichte am 3. Mai 2026 eine Exchange Code Announcement: ein geleakter Batch von 30 Codes wurde deaktiviert. Sehr grosse Social-Media-Listen koennen daher rauschen. Nutze diese Seite als praktische Checkliste: zuerst die neuesten Qinchuan/Hexi-Codes, fehlgeschlagene Leak-Codes als abgelaufen behandeln statt tagelang neu zu versuchen.",
    howTitle: "So funktionieren Codes · Einloesepfad",
    howBodyBefore: "Praktischer Einloesepfad fuer Reward-Codes: ",
    howPath: "Settings → Other → Exchange Code",
    howBodyAfter: ", dann aus der Mailbox abholen. Character-Creation-Appearance-Codes liegen auf einer anderen Seite.",
    officialEvents: "📢 Offizielle Events",
    officialEventsBody:
      "In Trailern und Livestreams angedeutet. Meist auf das Event-Fenster begrenzt (z. B. Launch Week).",
    compensation: "🔧 Kompensation",
    compensationBody:
      "Nach Wartung oder Bugs. Grosszuegige Ablauf-Fenster, aber einmalige Nutzung.",
    creatorPartners: "🤝 Creator-Partner",
    creatorPartnersBody:
      "Einzigartige Codes von Streamern. Oft exklusive Cosmetics oder soziale Toys.",
    rewardTypes: "Belohnungsarten",
    exampleCodes: [
      {
        label: "Launch-Celebration-Bundle",
        status: "Beispiel aktiver Code",
        notes:
          "Ein typischer Where-Winds-Meet-Code zum Launch kann Cosmetics, temporaere Boosts und ein kleines Upgrade-Material-Paket enthalten.",
      },
      {
        label: "Content-Creator-Belohnung",
        status: "Beispiel zeitlich begrenzter Code",
        notes:
          "Partner-Kampagnen teilen oft kurzlebige Where-Winds-Meet-Codes mit exklusiven Visuals oder sozialen Toys.",
      },
      {
        label: "Entschuldigung oder Hotfix-Geschenk",
        status: "Beispiel Kompensations-Code",
        notes:
          "Bei Server-Problemen oder grossen Bugs verteilen Entwickler manchmal Where-Winds-Meet-Codes mit Waehrungen oder Consumables.",
      },
    ],
    redeemTitle: "Einloesen",
    pcMobile: "PC & Mobile (In-Game Exchange)",
    steps: [
      ["Oeffne ", "Settings", " im Systemmenue."],
      ["Waehle ", "Other", "."],
      ["Waehle ", "Exchange Code", "."],
      ["Code exakt eingeben, absenden, Belohnung in der ", "Mailbox", " abholen."],
    ] as [string, string, string][],
    sourceNote:
      "Quellenhinweis: Drittanbieter-Tracker (inkl. PC-Gamer-Codes-Roundup in der Freshness-Liste) koennen Kandidaten listen, aber nur das In-Game-Exchange-Code-Ergebnis bestaetigt, ob ein String auf deinem Account/Region noch funktioniert.",
    ps5: "PlayStation 5",
    ps5BodyBefore:
      "Die meisten Redeem-Codes nutzen denselben Pfad Settings → Other → Exchange Code im Spiel. Platform-Store-Packs sind getrennt und muessen im ",
    ps5Store: "PlayStation Store",
    ps5BodyAfter: " beansprucht werden.",
    tip: "Tipp: Nutze die PlayStation App am Handy, um lange Codes schneller zu tippen, und schliesse den Mailbox-Claim im Spiel ab.",
    faqTitle: "Einloese-FAQ",
    faqs: [
      {
        q: "Abgelaufen oder abgelehnt?",
        a: " Fuer deinen Account als abgelaufen markieren. Keine Retry-Spam—Region-Gates und One-Time-Claims sehen beide wie Fehler aus.",
      },
      {
        q: "Gross-/Kleinschreibung?",
        a: " Codes exakt wie gezeigt eingeben. Mixed-Case-Strings (z. B. Launch-YouTube-Codes) scheitern oft bei erzwungenem ALL-CAPS.",
      },
      {
        q: "Leak-Batch Mai 2026:",
        a: " Der offizielle Mobile-News-Feed meldete, dass ein geleakter Batch von 30 Exchange Codes Anfang Mai 2026 deaktiviert wurde. Grosse Social-Listen koennen diese toten Strings noch recyclen.",
      },
      {
        q: "Character-Creation- / Outfit-Codes?",
        a: " Das sind keine Redeem-Codes—nutze die separaten Character-Creation- und Cosmetics-Guides oben.",
      },
    ],
    strategyTitle: "Einloese-Strategie",
    strategy1Before: "Neue Spieler sehen oft eine Flut an Codes. Keine Panik. Sortiere sie in ",
    strategyProgression: "Progression",
    strategy1Mid: " (jetzt einloesen) und ",
    strategyCosmetics: "Cosmetics",
    strategy1After: " (spaeter).",
    strategy2:
      "Mit Absicht bei Belohnungen werden Codes zu einem sanften Rueckenwind statt zu FOMO-Druck.",
    bgAlt: "Where Winds Meet Codes Hintergrundkunst",
  },
  vi: {
    h1Before: "WWM Codes ",
    h1Highlight: "Tháng 9/2026",
    intro1: (checked: string, version: string) =>
      `Cập nhật ${checked}: trang này làm mới checklist mã Where Winds Meet cho ${version}. Các mã bên dưới vẫn gắn nhãn Đã báo cáo—không phải đã xác nhận còn hiệu lực—vì danh sách aggregator không được coi là sự thật live. Ưu tiên bước đổi thưởng và xác minh trong game hơn việc nhồi chuỗi chưa kiểm chứng.`,
    intro2:
      "Quan trọng: feed tin chính thức cũng báo một lô 30 exchange code bị lộ đã bị vô hiệu hóa đầu tháng 5/2026. Nếu mã từ mạng xã hội thất bại, có thể chỉ là một trong các mã leak đó chứ không phải lỗi tài khoản.",
    reportedTitle: "Mã đã báo cáo ",
    reportedHint: (checked: string) => `(xác minh trong game, kiểm tra ${checked})`,
    statusReported: "Đã báo cáo",
    footnote:
      "* Mã phụ thuộc khu vực và có thời hạn. Luôn kiểm tra trong game. Lô bị lộ có thể đã bị tắt, và báo cáo mã Palace từ bên thứ ba không phải xác nhận chính thức.",
    typeEyebrow: "Chọn đúng loại mã",
    typeTitle: "Redeem code, outfit code, hay character appearance code?",
    typeBody:
      "Google trộn ba intent mã WWM khác nhau. Trang này theo dõi exchange/redeem code nhập để nhận thưởng tài khoản. Nếu muốn lộ trình outfit miễn phí, dùng guide cosmetics. Character appearance code là preset khuôn mặt do người chơi tạo và được import qua chỉnh appearance—không đổi trong menu rewards.",
    redeemReward: "Đổi reward code",
    importCharacter: "Import mã tạo nhân vật",
    freeOutfits: "Outfit và cosmetics miễn phí",
    appearance: "Appearance và tùy chỉnh",
    warningTitle: "Cảnh báo exchange code",
    warningBody:
      "Feed tin mobile chính thức đăng Exchange Code Announcement ngày 3/5/2026 nói một lô 30 mã bị lộ đã bị vô hiệu hóa. Nghĩa là một số danh sách mạng xã hội rất lớn có thể nhiễu. Dùng trang này như checklist thực dụng: thử mã Qinchuan/Hexi mới nhất trước, rồi coi mã leak thất bại là hết hạn thay vì thử lại nhiều ngày.",
    howTitle: "Cách mã hoạt động · đường đổi thưởng",
    howBodyBefore: "Đường đổi thưởng thực dụng cho reward code: ",
    howPath: "Settings → Other → Exchange Code",
    howBodyAfter: ", rồi nhận từ mailbox. Mã appearance tạo nhân vật nằm ở trang khác.",
    officialEvents: "📢 Sự kiện chính thức",
    officialEventsBody:
      "Gợi trong trailer và livestream. Thường giới hạn trong cửa sổ sự kiện (ví dụ Launch Week).",
    compensation: "🔧 Bồi thường",
    compensationBody:
      "Phát sau bảo trì hoặc bug. Cửa sổ hết hạn rộng nhưng dùng một lần.",
    creatorPartners: "🤝 Partner creator",
    creatorPartnersBody:
      "Mã riêng từ streamer. Thường cho cosmetics độc quyền hoặc vật phẩm xã hội vui.",
    rewardTypes: "Loại phần thưởng",
    exampleCodes: [
      {
        label: "Gói kỷ niệm ra mắt",
        status: "Ví dụ mã đang hoạt động",
        notes:
          "Một mã Where Winds Meet điển hình lúc ra mắt có thể gồm cosmetics, boost tạm thời và ít vật liệu nâng cấp.",
      },
      {
        label: "Phần thưởng content creator",
        status: "Ví dụ mã giới hạn",
        notes:
          "Chiến dịch partner thường chia sẻ mã Where Winds Meet ngắn hạn với vật phẩm visual độc quyền hoặc đồ chơi xã hội.",
      },
      {
        label: "Quà xin lỗi / hotfix",
        status: "Ví dụ mã bồi thường",
        notes:
          "Khi server gặp sự cố hoặc bug lớn, nhà phát triển đôi khi phát mã Where Winds Meet gồm tiền tệ hoặc consumable.",
      },
    ],
    redeemTitle: "Cách đổi thưởng",
    pcMobile: "PC & Mobile (đổi trong game)",
    steps: [
      ["Mở ", "Settings", " từ menu hệ thống."],
      ["Chọn ", "Other", "."],
      ["Chọn ", "Exchange Code", "."],
      ["Nhập đúng mã, gửi, rồi nhận thưởng từ ", "mailbox", "."],
    ] as [string, string, string][],
    sourceNote:
      "Ghi chú checklist nguồn: tracker bên thứ ba (gồm roundup mã PC Gamer đã trích trong freshness) có thể liệt kê ứng viên, nhưng chỉ kết quả Exchange Code trong game xác nhận chuỗi còn hoạt động trên tài khoản/khu vực của bạn.",
    ps5: "PlayStation 5",
    ps5BodyBefore:
      "Hầu hết redeem code dùng cùng đường Settings → Other → Exchange Code trong game. Gói store nền tảng là riêng và phải nhận trong ",
    ps5Store: "PlayStation Store",
    ps5BodyAfter: ".",
    tip: "Mẹo: Dùng PlayStation App trên điện thoại để gõ mã dài nhanh hơn, rồi hoàn tất nhận mailbox trong game.",
    faqTitle: "FAQ đổi thưởng",
    faqs: [
      {
        q: "Hết hạn hoặc bị từ chối?",
        a: " Đánh dấu hết hạn cho tài khoản của bạn. Đừng spam thử lại—cổng khu vực và claim một lần đều trông như thất bại.",
      },
      {
        q: "Phân biệt hoa/thường?",
        a: " Nhập đúng như hiển thị. Chuỗi mixed-case (ví dụ mã YouTube ra mắt) thường thất bại nếu ép thành ALL-CAPS.",
      },
      {
        q: "Lô leak tháng 5/2026:",
        a: " Feed tin mobile chính thức nói một lô 30 exchange code bị lộ đã bị vô hiệu hóa đầu tháng 5/2026. Danh sách mạng xã hội lớn vẫn có thể tái chế các chuỗi chết đó.",
      },
      {
        q: "Mã tạo nhân vật / outfit?",
        a: " Đó không phải redeem code—dùng các guide tạo nhân vật và cosmetics riêng được liên kết ở trên.",
      },
    ],
    strategyTitle: "Chiến lược đổi thưởng",
    strategy1Before: "Người chơi mới thường thấy bão mã. Đừng hoảng. Phân loại thành ",
    strategyProgression: "Progression",
    strategy1Mid: " (đổi ngay) và ",
    strategyCosmetics: "Cosmetics",
    strategy1After: " (đổi sau).",
    strategy2:
      "Tiếp cận phần thưởng có chủ đích giúp mã trở thành gió xuôi nhẹ thay vì áp lực FOMO.",
    bgAlt: "Ảnh nền mã Where Winds Meet",
  },
} as const;

export default function CodesGuidePage({ language }: { language: CodesGuideLanguage }) {
  const t = copy[language];
  const localizedPath = (path: string) => buildLocalizedPath(path, language) ?? path;
  const liveCodes = liveCodeFacts.map((entry) => ({
    code: entry.code,
    status: t.statusReported,
    label: entry[language].label,
    notes: entry[language].notes,
  }));

  return (
    <article className="space-y-10 bg-ink-wash min-h-screen">
      <HomeHubBacklink language={language} />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg5.webp"
            alt={t.bgAlt}
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t.h1Before}
            <span className="text-ink-gold">{t.h1Highlight}</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
            <p>{t.intro1(lastChecked, gameVersionLabel)}</p>
            <p>{t.intro2}</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          {t.reportedTitle}
          <span className="text-sm font-normal text-slate-400 ml-2">{t.reportedHint(lastChecked)}</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveCodes.map((entry) => (
            <div
              key={entry.code}
              className="card-jade-token group relative flex flex-col justify-between rounded-2xl p-6 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 bg-emerald-900/60 px-2 py-1 rounded border border-emerald-700/50 shadow-sm shadow-emerald-900/50">
                    {entry.status}
                  </span>
                  <span className="text-lg filter drop-shadow-md">🎁</span>
                </div>
                <div>
                  <code className="block text-xl font-mono font-bold text-emerald-50 bg-black/40 p-2 rounded text-center border border-emerald-900/50 group-hover:border-emerald-500/50 transition-colors select-all shadow-inner">
                    {entry.code}
                  </code>
                  <p className="mt-2 text-sm font-medium text-emerald-200/80">{entry.label}</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-emerald-100/60 border-t border-emerald-900/30 pt-3">
                {entry.notes}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic">{t.footnote}</p>
      </section>

      <section className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 shadow-lg shadow-cyan-950/30">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{t.typeEyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">{t.typeTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">{t.typeBody}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="#how-to-redeem" className="rounded-full border border-cyan-300/60 px-4 py-2 font-semibold text-cyan-100 hover:border-cyan-200">
            {t.redeemReward}
          </Link>
          <Link
            href={localizedPath("/guides/character-creation-codes")}
            className="rounded-full border border-emerald-300/60 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-200"
          >
            {t.importCharacter}
          </Link>
          <Link
            href={localizedPath("/guides/free-outfits")}
            className="rounded-full border border-amber-300/60 px-4 py-2 font-semibold text-amber-100 hover:border-amber-200"
          >
            {t.freeOutfits}
          </Link>
          <Link
            href={localizedPath("/guides/cosmetics")}
            className="rounded-full border border-rose-300/60 px-4 py-2 font-semibold text-rose-100 hover:border-rose-200"
          >
            {t.appearance}
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 text-sm text-amber-50 shadow-lg shadow-amber-950/30">
        <h2 className="text-xl font-bold text-amber-100">{t.warningTitle}</h2>
        <p className="mt-3 leading-relaxed text-amber-50/90">{t.warningBody}</p>
      </section>

      <section id="how-to-redeem" className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">{t.howTitle}</h2>
        <p className="text-sm leading-6 text-slate-300">
          {t.howBodyBefore}
          <strong className="text-slate-100">{t.howPath}</strong>
          {t.howBodyAfter}
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">{t.officialEvents}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.officialEventsBody}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">{t.compensation}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.compensationBody}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">{t.creatorPartners}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.creatorPartnersBody}</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">{t.rewardTypes}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.exampleCodes.map((code) => (
            <div key={code.label} className="card-inactive rounded-2xl p-5">
              <h3 className="text-sm font-bold text-slate-300 mb-1">{code.label}</h3>
              <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-2">{code.status}</p>
              <p className="text-xs leading-relaxed text-slate-400">{code.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">{t.redeemTitle}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-spirit">{t.pcMobile}</h3>
            <ol className="space-y-3 text-sm text-slate-300">
              {t.steps.map(([before, strong, after]) => (
                <li key={`${before}${strong}${after}`} className="step-manual">
                  {before}
                  <span className="text-slate-100 font-medium">{strong}</span>
                  {after}
                </li>
              ))}
            </ol>
            <p className="text-xs leading-5 text-slate-400">{t.sourceNote}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-spirit">{t.ps5}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.ps5BodyBefore}
              <span className="text-slate-100 font-medium">{t.ps5Store}</span>
              {t.ps5BodyAfter}
            </p>
            <div className="rounded bg-slate-950/50 p-3 text-xs text-slate-400 border border-slate-800">
              {t.tip}
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-950/50 p-5 space-y-3">
          <h3 className="text-lg font-semibold text-slate-100">{t.faqTitle}</h3>
          <ul className="space-y-2 text-sm leading-6 text-slate-300">
            {t.faqs.map((faq) => (
              <li key={faq.q}>
                <strong className="text-slate-100">{faq.q}</strong>
                {faq.a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card-wuxia rounded-3xl p-8">
        <h2 className="text-xl font-bold text-slate-100 mb-4">{t.strategyTitle}</h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          {t.strategy1Before}
          <span className="text-slate-100">{t.strategyProgression}</span>
          {t.strategy1Mid}
          <span className="text-slate-100">{t.strategyCosmetics}</span>
          {t.strategy1After}
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">{t.strategy2}</p>
      </section>
    </article>
  );
}
