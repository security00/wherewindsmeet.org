import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import LightboxGallery from "@/components/LightboxGallery";

export type GrowthGuideLanguage = "en" | "vi" | "de";
export type GrowthGuideKind = "character-codes" | "commerce-coins" | "hidden-mountain";

const prefixes = { en: "", vi: "/vn", de: "/de" } as const;

const copy = {
  en: {
    checked: "Evidence checked · August 23, 2026",
    sourceNote: "Evidence note",
    related: "Continue with a related guide",
    official: "Official source ↗",
    video: "Video walkthrough",
    imageHelp: "Tap an image to enlarge it.",
  },
  vi: {
    checked: "Đã kiểm tra nguồn · 23/08/2026",
    sourceNote: "Ghi chú nguồn",
    related: "Xem tiếp hướng dẫn liên quan",
    official: "Nguồn chính thức ↗",
    video: "Video hướng dẫn",
    imageHelp: "Nhấn vào ảnh để phóng to.",
  },
  de: {
    checked: "Quellen geprüft · 23. August 2026",
    sourceNote: "Quellenhinweis",
    related: "Passender nächster Guide",
    official: "Offizielle Quelle ↗",
    video: "Video-Anleitung",
    imageHelp: "Bild zum Vergrößern anklicken.",
  },
} as const;

const characterCopy = {
  en: {
    title: "Where Winds Meet Character Creation Codes: Import Text or QR Presets",
    intro: "Character creation codes are appearance presets, not reward codes. Where Winds Meet supports shared text codes and QR images, but the exact import control can move between platforms and client versions. Use the current customization screen as the authority instead of forcing a code into an unrelated field.",
    quick: "Version-aware import route",
    steps: [
      "Start in the character customization editor. For a new character, stay in creation. For an existing character, open Appearance and use Edit Face only if your client offers that route.",
      "Open the import or share panel shown by your current client. A November 2025 PC walkthrough uses the V key; controller and mobile labels can differ. If no import control appears, do not guess.",
      "Use the text-code field or QR-image option only when that control is visible. Keep the code exactly as shared, then preview the result before applying it.",
      "Compare the face, hair, makeup, and accessories with the shared preview. Save your current look first if you are replacing an existing face, then apply only after the comparison.",
    ],
    verifiedScreens: "Screenshot evidence boundary",
    visualBoundary: "No verified current import-dialog screenshot is published here. The two authorized historical captures below show only how the December 2025 client entered Appearance; they did not show the text-code field or QR-import control. They are navigation context, not proof of the import control.",
    navigationTitle: "Appearance navigation context (historical UI)",
    navigationAlts: ["Historical Where Winds Meet menu with Appearance selected", "Historical wardrobe screen with the base Appearance tab selected"],
    navigationCaptions: ["Open Appearance from the game menu.", "Switch from outfit browsing to the base Appearance area."],
    troubleshoot: "Code not working?",
    fixes: ["Confirm it is an appearance code, not a reward or gift-code string.", "If the import field is absent, stop: your platform or client version may use a different route.", "Get a fresh share directly from its creator if a copied string is truncated or rejected; do not rely on an unattributed code aggregator.", "Use a QR image only when the customization panel exposes a QR-image option.", "Keep a screenshot of the current face before replacing an existing look."],
    evidence: "The official character-share page demonstrates that Where Winds Meet distributes appearance shares as a copyable code and QR image. PC Gamer documented the V-key, paste, and QR-image workflow for PC in November 2025. No verified current import-dialog screenshot is published here. Treat the labels in your current client as the authority.",
  },
  vi: {
    title: "Mã tạo nhân vật Where Winds Meet: nhập mã chữ hoặc QR",
    intro: "Mã tạo nhân vật là preset ngoại hình, không phải gift code. Where Winds Meet có mã chữ và ảnh QR được chia sẻ, nhưng nút nhập có thể khác giữa nền tảng và phiên bản. Hãy coi giao diện hiện tại trong game là nguồn quyết định.",
    quick: "Quy trình nhập theo phiên bản",
    steps: ["Bắt đầu trong trình chỉnh nhân vật. Với nhân vật mới, ở lại màn hình tạo nhân vật; với nhân vật hiện có, mở Appearance và chỉ dùng Edit Face nếu client có tuyến đó.", "Mở bảng import/share mà client hiện tại hiển thị. Hướng dẫn PC tháng 11/2025 dùng phím V; tay cầm và mobile có thể có nhãn khác. Nếu không thấy nút nhập, đừng đoán.", "Chỉ dán mã hoặc chọn ảnh QR khi bảng chỉnh nhân vật thực sự hiển thị tùy chọn đó. Giữ nguyên mã và xem trước kết quả.", "So sánh khuôn mặt, tóc, makeup và phụ kiện với ảnh chia sẻ. Lưu lại ngoại hình hiện tại trước khi thay thế."],
    verifiedScreens: "Giới hạn bằng chứng hình ảnh",
    visualBoundary: "Trang chưa đăng ảnh hộp thoại import hiện tại đã được xác minh. Hai ảnh lịch sử được phép sử dụng bên dưới chỉ cho thấy cách client tháng 12/2025 đi vào Appearance; ảnh không hiển thị ô mã chữ hoặc nút nhập QR. Đây là ngữ cảnh điều hướng, không phải bằng chứng cho nút import.",
    navigationTitle: "Ngữ cảnh điều hướng Appearance (giao diện lịch sử)",
    navigationAlts: ["Menu Where Winds Meet lịch sử với mục Appearance được chọn", "Màn hình tủ đồ lịch sử với tab Appearance cơ bản được chọn"],
    navigationCaptions: ["Mở Appearance từ menu game.", "Chuyển từ trang phục sang khu Appearance cơ bản."],
    troubleshoot: "Mã không hoạt động?",
    fixes: ["Kiểm tra đây là mã ngoại hình, không phải reward/gift code.", "Nếu không có ô nhập, hãy dừng lại: nền tảng hoặc phiên bản của bạn có thể dùng đường dẫn khác.", "Xin lại mã trực tiếp từ người tạo nếu chuỗi bị cắt hoặc bị từ chối; tránh trang tổng hợp không ghi nguồn.", "Chỉ dùng ảnh QR khi bảng chỉnh nhân vật có tùy chọn ảnh QR.", "Chụp lại khuôn mặt hiện tại trước khi thay thế."],
    evidence: "Trang chia sẻ nhân vật chính thức cho thấy Where Winds Meet phát hành ngoại hình dưới dạng mã có thể sao chép và ảnh QR. PC Gamer ghi lại quy trình phím V, dán mã và dùng ảnh QR trên PC vào tháng 11/2025. Trang chưa đăng ảnh hộp thoại import hiện tại đã được xác minh; hãy làm theo nhãn trong client hiện tại.",
  },
  de: {
    title: "Where Winds Meet Character-Creation-Codes: Text- oder QR-Presets importieren",
    intro: "Character-Creation-Codes sind Aussehen-Presets und keine Geschenkcodes. Where Winds Meet unterstützt geteilte Textcodes und QR-Bilder; der Import-Befehl kann sich aber je nach Plattform und Client-Version unterscheiden. Maßgeblich ist die aktuell sichtbare Spieloberfläche.",
    quick: "Versionsabhängiger Importweg",
    steps: ["Beginne im Charaktereditor. Bleibe bei einer neuen Figur in der Erstellung; öffne bei einer bestehenden Figur Appearance und nutze Edit Face nur, wenn dein Client diesen Weg anbietet.", "Öffne das Import- oder Teilen-Fenster deines aktuellen Clients. Ein PC-Guide vom November 2025 nutzt die Taste V; Controller und Mobile können andere Bezeichnungen haben. Ist kein Import sichtbar, rate nicht.", "Nutze Textcode oder QR-Bild nur, wenn diese Option im Charaktereditor tatsächlich angezeigt wird. Übernimm den Code unverändert und prüfe die Vorschau.", "Vergleiche Gesicht, Haare, Make-up und Accessoires mit der geteilten Vorschau. Sichere zuerst dein aktuelles Aussehen, bevor du es ersetzt."],
    verifiedScreens: "Grenzen des Bildnachweises",
    visualBoundary: "Hier wird kein verifizierter Screenshot des aktuellen Importdialogs veröffentlicht. Die zwei autorisiert verwendeten historischen Bilder zeigen nur den Weg in Appearance im Client vom Dezember 2025; weder Textcode-Feld noch QR-Import sind darauf zu sehen. Sie sind Navigationskontext, kein Beleg für die Importfunktion.",
    navigationTitle: "Appearance-Navigationskontext (historische Oberfläche)",
    navigationAlts: ["Historisches Where-Winds-Meet-Menü mit ausgewähltem Appearance-Eintrag", "Historische Garderobe mit ausgewähltem Basis-Appearance-Tab"],
    navigationCaptions: ["Appearance über das Spielmenü öffnen.", "Von Outfits zum Basis-Appearance-Bereich wechseln."],
    troubleshoot: "Code funktioniert nicht?",
    fixes: ["Prüfe, ob es ein Aussehen-Code und kein Reward-/Geschenkcode ist.", "Fehlt das Importfeld, stoppe: Plattform oder Client-Version können einen anderen Weg nutzen.", "Bitte den Ersteller um einen neuen Share, wenn der Text abgeschnitten oder abgelehnt wird; meide Quellen ohne Herkunftsnachweis.", "Nutze ein QR-Bild nur, wenn der Charaktereditor eine QR-Bildoption zeigt.", "Sichere das aktuelle Gesicht per Screenshot, bevor du es ersetzt."],
    evidence: "Die offizielle Character-Share-Seite zeigt, dass Where Winds Meet Aussehen als kopierbaren Code und QR-Bild teilt. PC Gamer dokumentierte im November 2025 für PC den Ablauf mit V-Taste, Einfügen und QR-Bild. Hier wird kein verifizierter Screenshot des aktuellen Importdialogs veröffentlicht; maßgeblich sind die Beschriftungen im aktuellen Client.",
  },
} as const;

const commerceCopy = {
  en: {
    title: "Where Winds Meet Commerce Coins: How to Earn and Spend Them",
    intro: "Commerce Coins are tied to the cross-world trading loop. The useful answer is not a fixed price list: compare the current buy and sell modifiers, protect your weekly allowance, and only commit when the margin still makes sense after the live market refresh.",
    earn: "A safer earn loop",
    steps: ["Open the commerce or trade interface and note the current weekly modifiers before buying.", "Compare destinations or other worlds; buy where the live modifier is favorable and sell where demand is higher.", "Start with a small trade to confirm the route and current return before using the rest of your allowance.", "Recheck after the weekly refresh instead of relying on an old screenshot or fixed-price guide."],
    spend: "What are Commerce Coins used for?",
    uses: ["Trading and commerce progression.", "Selected social or world activities that ask for commerce currency.", "Community guides also report sect-related uses; verify the live tooltip before spending because requirements can change."],
    evidence: "Google Trends shows rising interest for “commerce coin.” The trade loop is synthesized from current SERP guides and an Italian-language creator walkthrough by GoGamesGuide, not from a static official price table. Exact prices and limits are deliberately omitted because they are live-state dependent.",
  },
  vi: {
    title: "Commerce Coins trong Where Winds Meet: cách kiếm và sử dụng",
    intro: "Commerce Coins gắn với vòng lặp giao thương liên thế giới. Đừng dựa vào bảng giá cố định: hãy so sánh hệ số mua/bán hiện tại, giữ an toàn hạn mức tuần và chỉ giao dịch khi biên lợi nhuận vẫn hợp lý sau lần làm mới thị trường.",
    earn: "Vòng kiếm coin an toàn hơn",
    steps: ["Mở giao diện commerce/trade và ghi lại hệ số tuần hiện tại trước khi mua.", "So sánh điểm đến hoặc thế giới khác; mua nơi có hệ số tốt và bán nơi nhu cầu cao hơn.", "Thử một giao dịch nhỏ để xác nhận tuyến và lợi nhuận hiện tại.", "Kiểm tra lại sau mỗi lần làm mới tuần thay vì dùng ảnh giá cũ."],
    spend: "Commerce Coins dùng để làm gì?",
    uses: ["Giao dịch và tiến trình commerce.", "Một số hoạt động xã hội hoặc thế giới yêu cầu loại tiền này.", "Hướng dẫn cộng đồng còn ghi nhận mục đích liên quan môn phái; hãy đọc tooltip trực tiếp trước khi tiêu."],
    evidence: "Google Trends cho thấy nhu cầu “commerce coin” đang tăng. Vòng giao dịch được tổng hợp từ SERP hiện tại và video bên dưới, không phải bảng giá chính thức cố định. Giá và giới hạn chính xác được lược bỏ vì phụ thuộc trạng thái live.",
  },
  de: {
    title: "Where Winds Meet Commerce Coins: verdienen und sinnvoll ausgeben",
    intro: "Commerce Coins gehören zum weltübergreifenden Handel. Entscheidend ist keine feste Preisliste: Vergleiche aktuelle Kauf- und Verkaufsmodifikatoren, schütze dein Wochenkontingent und handle nur bei einer sinnvollen Marge.",
    earn: "Sicherer Handelsablauf",
    steps: ["Öffne Handel/Commerce und notiere vor dem Kauf die aktuellen Wochenmodifikatoren.", "Vergleiche Ziele oder andere Welten; kaufe günstig und verkaufe dort, wo die Nachfrage höher ist.", "Teste die Route zuerst mit einer kleinen Menge.", "Prüfe alles nach dem Wochenreset erneut statt alten Preisbildern zu vertrauen."],
    spend: "Wofür braucht man Commerce Coins?",
    uses: ["Handel und Commerce-Fortschritt.", "Ausgewählte soziale oder Weltaktivitäten mit Handelswährung.", "Community-Guides nennen auch Sekten-Zwecke; prüfe vor dem Ausgeben den aktuellen Tooltip."],
    evidence: "Google Trends zeigt steigendes Interesse an „commerce coin“. Der Ablauf ist aus aktuellen SERP-Guides und dem eingebetteten Video zusammengeführt, nicht aus einer statischen offiziellen Preisliste. Exakte Preise und Limits fehlen bewusst, da sie vom Live-Zustand abhängen.",
  },
} as const;

const mountainCopy = {
  en: {
    title: "Where Winds Meet Hidden Mountain Guide: Unlock Route and Version 2.1 Changes",
    intro: "Hidden Mountain is the Version 2.0 region with four major areas, 14 subregions, more than ten bosses and eight Jianghu Legacies. Version 2.1 then deepens its shared building route through repaired water rails, Cloudstair and streamlined Celestial Seize tools.",
    unlock: "How to reach Hidden Mountain",
    steps: ["Progress the Kaifeng story until Yingying’s Invitation becomes available around South Gate Avenue.", "Follow the mechanical-bird lead toward the Golden Escort Agency and the misty-river route.", "Use Wind Sense around the river and whirlpool clues instead of forcing a straight path through the mist.", "Complete the Heron trial and follow the active quest marker into the region."],
    v21: "What Version 2.1 adds",
    changes: ["Repair water rails to reconnect traversal routes.", "Contribute to Cloudstair, a large server-wide construction project.", "Use a more streamlined Celestial Seize and building flow."],
    evidence: "Region scale and Version 2.1 systems come from the official July 19 and August 21 developer letters. The unlock checklist is a cross-source SERP synthesis; third-party guides disagree on level gates, so the live quest log is the authority for your account.",
  },
  vi: {
    title: "Hướng dẫn Hidden Mountain Where Winds Meet: mở khóa và thay đổi Version 2.1",
    intro: "Hidden Mountain là khu vực Version 2.0 gồm 4 vùng lớn, 14 tiểu vùng, hơn 10 boss và 8 Jianghu Legacies. Version 2.1 mở rộng tuyến xây dựng cộng đồng với water rail, Cloudstair và Celestial Seize được tinh gọn.",
    unlock: "Cách đến Hidden Mountain",
    steps: ["Tiến cốt truyện Kaifeng đến khi Yingying’s Invitation xuất hiện gần South Gate Avenue.", "Theo dấu chim máy về phía Golden Escort Agency và tuyến sông phủ sương.", "Dùng Wind Sense quanh dòng sông và dấu xoáy nước thay vì đi thẳng qua sương.", "Hoàn thành thử thách Heron rồi theo marker nhiệm vụ vào khu vực."],
    v21: "Version 2.1 bổ sung gì?",
    changes: ["Sửa water rail để nối lại tuyến di chuyển.", "Đóng góp vào Cloudstair, công trình quy mô toàn server.", "Quy trình Celestial Seize và xây dựng được tinh gọn."],
    evidence: "Quy mô khu vực và hệ thống 2.1 lấy từ thư nhà phát triển chính thức ngày 19/7 và 21/8. Checklist mở khóa là tổng hợp từ nhiều nguồn SERP; các hướng dẫn ngoài game không thống nhất về cấp độ, vì vậy quest log live là nguồn quyết định.",
  },
  de: {
    title: "Where Winds Meet Hidden Mountain: Freischaltung und Version-2.1-Änderungen",
    intro: "Hidden Mountain ist die Version-2.0-Region mit vier Hauptgebieten, 14 Unterregionen, mehr als zehn Bossen und acht Jianghu Legacies. Version 2.1 erweitert den gemeinsamen Baupfad mit Wasserbahnen, Cloudstair und vereinfachtem Celestial Seize.",
    unlock: "So erreichst du Hidden Mountain",
    steps: ["Spiele Kaifeng weiter, bis Yingying’s Invitation nahe South Gate Avenue verfügbar wird.", "Folge dem mechanischen Vogel zur Golden Escort Agency und zum nebligen Fluss.", "Nutze Wind Sense an Fluss und Strudeln, statt den Nebel geradlinig zu erzwingen.", "Schließe die Heron-Prüfung ab und folge der aktiven Questmarkierung in die Region."],
    v21: "Was Version 2.1 ergänzt",
    changes: ["Repariere Wasserbahnen und verbinde Reiserouten.", "Wirke an Cloudstair, einem serverweiten Großbau, mit.", "Nutze den vereinfachten Celestial-Seize- und Bauablauf."],
    evidence: "Regionsumfang und 2.1-Systeme stammen aus den offiziellen Entwicklerbriefen vom 19. Juli und 21. August. Die Freischaltung ist eine SERP-Quersynthese; externe Guides widersprechen sich bei Levelgrenzen, daher gilt das Live-Questlog deines Accounts.",
  },
} as const;

function StepList({ items }: { items: readonly string[] }) {
  return <ol className="mt-5 grid gap-3 md:grid-cols-2">{items.map((item, index) => <li key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"><span className="mr-2 font-bold text-emerald-300">{index + 1}.</span>{item}</li>)}</ol>;
}

export default function GrowthOpportunityGuidePage({ language, kind }: { language: GrowthGuideLanguage; kind: GrowthGuideKind }) {
  const ui = copy[language];
  const prefix = prefixes[language];

  if (kind === "character-codes") {
    const c = characterCopy[language];
    const appearanceNavigationImages = [
      {
        src: "/guides/the-great-faceologist/step-1-open-appearance.webp",
        alt: c.navigationAlts[0],
        caption: c.navigationCaptions[0],
      },
      {
        src: "/guides/the-great-faceologist/step-2-switch-appearance-tab.webp",
        alt: c.navigationAlts[1],
        caption: c.navigationCaptions[1],
      },
    ];
    return <GuideShell language={language} eyebrow={ui.checked} title={c.title} intro={c.intro}>
      <section><h2 className="text-3xl font-bold text-slate-50">{c.quick}</h2><StepList items={c.steps} /></section>
      <section className="rounded-3xl border border-slate-700 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-bold text-slate-50">{c.verifiedScreens}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">{c.visualBoundary}</p>
        <h3 className="mt-5 text-lg font-semibold text-slate-100">{c.navigationTitle}</h3>
        <div className="mt-3"><LightboxGallery items={appearanceNavigationImages} columns={2} /></div>
        <p className="mt-3 text-xs leading-5 text-amber-200">
          Publisher: AllThings.How. Reuse authorization confirmed by site owner 2026-08-29. These images document
          Appearance navigation only; they do not demonstrate text-code or QR import.
        </p>
        <a href="https://allthings.how/how-to-use-the-great-faceologist-event-in-where-winds-meet/" target="_blank" rel="noreferrer" className="mt-2 inline-flex text-xs font-semibold text-sky-200 underline underline-offset-4 hover:text-sky-100">
          Historical image source ↗
        </a>
      </section>
      <section className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6"><h2 className="text-2xl font-bold text-slate-50">{c.troubleshoot}</h2><ul className="mt-4 space-y-2 text-sm text-slate-200">{c.fixes.map(x => <li key={x}>• {x}</li>)}</ul></section>
      <Evidence label={ui.sourceNote} text={c.evidence} links={[{href:"https://www.wherewindsmeetgame.com/2026/yq/en/",label:"Official character-share format"},{href:"https://www.pcgamer.com/games/rpg/where-winds-meet-customization-codes/",label:"PC Gamer (November 2025 PC flow)"}]} />
      <Related title={ui.related} links={[{href:"/guides/codes",label:"Reward / redeem codes"},{href:`${prefix}/guides/the-great-faceologist`,label:"Appearance gallery route"},{href:`${prefix}/guides/free-outfits`,label:"Free outfits"}]} />
    </GuideShell>;
  }

  if (kind === "commerce-coins") {
    const c = commerceCopy[language];
    return <GuideShell language={language} eyebrow={ui.checked} title={c.title} intro={c.intro}>
      <section><h2 className="text-3xl font-bold text-slate-50">{c.earn}</h2><StepList items={c.steps} /></section>
      <section className="grid gap-6 lg:grid-cols-2"><div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6"><h2 className="text-2xl font-bold text-slate-50">{c.spend}</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">{c.uses.map(x => <li key={x}>• {x}</li>)}</ul></div><div><p className="mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-300">{ui.video} · GoGamesGuide · Italian</p><LiteYouTubeEmbed videoId="XCfdIFQjIKI" title="GoGamesGuide Italian-language Commerce Coin walkthrough" poster="/background/bg4.webp" analytics={{eventName:"guide_video_play",params:{guide:"commerce-coins"}}} /></div></section>
      <Evidence label={ui.sourceNote} text={c.evidence} links={[{href:"https://www.gamerguides.com/where-winds-meet/guide/getting-started/currencies/commerce-coins",label:"Commerce Coin reference"},{href:"https://www.youtube.com/watch?v=XCfdIFQjIKI",label:"GoGamesGuide Italian-language creator walkthrough"}]} />
      <Related title={ui.related} links={[{href:`${prefix}/guides/sects`,label:"Sects guide"},{href:`${prefix}/guides/new-players`,label:"New-player route"},{href:`${prefix}/guides/items`,label:"Items database"}]} />
    </GuideShell>;
  }

  const c = mountainCopy[language];
  return <GuideShell language={language} eyebrow={ui.checked} title={c.title} intro={c.intro}>
    <section className="grid gap-6 lg:grid-cols-[1fr_1.05fr]"><div><h2 className="text-3xl font-bold text-slate-50">{c.unlock}</h2><StepList items={c.steps} /></div><div><p className="mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-300">{ui.video} · Xbox official channel</p><LiteYouTubeEmbed videoId="5_FI471ah5A" title="Where Winds Meet Hidden Mountain official trailer" poster="/background/bg4.webp" analytics={{eventName:"guide_video_play",params:{guide:"hidden-mountain"}}} /></div></section>
    <section className="rounded-3xl border border-sky-400/30 bg-sky-500/10 p-6"><h2 className="text-2xl font-bold text-slate-50">{c.v21}</h2><ul className="mt-4 grid gap-3 md:grid-cols-3">{c.changes.map(x => <li key={x} className="rounded-2xl border border-sky-300/20 bg-slate-950/50 p-4 text-sm leading-6 text-slate-200">{x}</li>)}</ul></section>
    <Evidence label={ui.sourceNote} text={c.evidence} links={[{href:"https://www.wherewindsmeetgame.com/news/official/719devletter.html",label:"Official Hidden Mountain letter"},{href:"https://www.wherewindsmeetgame.com/news/official/821devletter.html",label:"Official Version 2.1 letter"},{href:"https://www.youtube.com/watch?v=5_FI471ah5A",label:"Official Xbox trailer source"},{href:"https://www.altchar.com/guides/where-winds-meet-hidden-mountain-how-to-unlock-the-new-region-aC5T63k6437t",label:"Unlock route reference"}]} />
    <Related title={ui.related} links={[{href:`${prefix}/guides/heavens-threshold-cloudstair`,label:"Heaven’s Threshold / Cloudstair"},{href:`${prefix}/guides/evershift-labyrinth`,label:"Evershift Labyrinth"},{href:`${prefix}/guides/clouded-revelation`,label:"Version 2.1 guide"},{href:`${prefix}/tools/interactive-map`,label:"Interactive map"},{href:`${prefix}/guides/bosses`,label:"Boss guides"}]} />
  </GuideShell>;
}

function GuideShell({ language, eyebrow, title, intro, children }: { language: GrowthGuideLanguage; eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <article className="min-h-screen space-y-10 bg-ink-wash pb-20"><HomeHubBacklink language={language} /><header className="rounded-3xl border border-emerald-400/30 bg-slate-950/85 p-6 shadow-2xl sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</p><h1 className="mt-3 max-w-5xl text-balance text-4xl font-bold text-slate-50 sm:text-5xl">{title}</h1><p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{intro}</p></header>{children}</article>;
}

function Evidence({ label, text, links }: { label: string; text: string; links: {href:string;label:string}[] }) {
  return <aside className="rounded-3xl border border-slate-700 bg-slate-950/75 p-6"><h2 className="font-semibold text-slate-100">{label}</h2><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p><div className="mt-4 flex flex-wrap gap-2">{links.map(x => <a key={x.href} href={x.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-3 py-1 text-xs font-semibold text-sky-200 hover:border-sky-300">{x.label} ↗</a>)}</div></aside>;
}

function Related({ title, links }: { title: string; links: {href:string;label:string}[] }) {
  return <nav className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6"><h2 className="font-semibold text-emerald-100">{title}</h2><div className="mt-4 flex flex-wrap gap-3">{links.map(x => <Link key={x.href} href={x.href} className="rounded-full border border-emerald-300/40 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-200">{x.label} →</Link>)}</div></nav>;
}
