import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildLocalizedPath } from "@/i18n/routing.mjs";
import {
  currentWeaponRoster,
  getWeaponSources,
  weaponTierMeta,
} from "@/lib/weaponTierData";
import { weapons } from "@/lib/weapons";

export type WeaponTierListLanguage = "en" | "vi" | "de";

const baseUrl = "https://wherewindsmeet.org";

const copy = {
  en: {
    inLanguage: "en-US" as const,
    path: "/guides/weapons/tier-list",
    bgAlt: "Where Winds Meet weapon review background",
    checked: (version: string, date: string) => `${version} · checked ${date}`,
    h1: "What is the current WWM / Where Winds Meet weapon tier list in Version 2.1?",
    introBefore: "Searchers looking for a ",
    introStrong1: "WWM Weapon Tier List",
    introMid: " or ",
    introStrong2: "Where Winds Meet Weapon Tier List",
    introAfter:
      " usually want a quick best-weapon answer. The honest one: official sources confirm the eight-family roster (including Gauntlets) and selected balance fixes, but they do ",
    introNot: "not",
    introEnd:
      " publish an official S/A/B order—and this page does not invent one. Use the PvE and PvP sections below for review status, then open a weapon guide and run one repeatable test on your build.",
    honesty:
      "Honesty callout: community letter tiers are not treated as current fact here. Until matched-build Version 2.1 evidence is stored, every comparative placement stays in review.",
    jumpPve: "Jump to PvE",
    jumpPvp: "Jump to PvP",
    allWeapons: (n: number) => `All ${n} weapons`,
    relatedEyebrow: "Related tier pages (dedupe)",
    relatedBodyBefore: "This page is the weapon-family evidence hub. For the broader matrix use ",
    relatedMid1: "; for arena-only checks use ",
    relatedMid2: "; for PvE-focused review use ",
    relatedEnd: ".",
    confirmed: "Confirmed",
    confirmedTitle: "Eight current weapon families",
    confirmedBody: "Gauntlets joined the established seven-family roster in Version 2.0.",
    notConfirmed: "Not confirmed",
    notConfirmedTitle: "A universal S/A/B order",
    notConfirmedBody:
      "Official patch notes document changes, but they do not prove a complete cross-mode ranking.",
    nextEvidence: "Next evidence",
    nextEvidenceTitle: "Matched PvE and PvP retests",
    nextEvidenceBody:
      "Record build, gear, encounter or matchup, latency, result, and sample size before assigning a tier.",
    pveEyebrow: "PvE review",
    pveTitle: "PvE weapon status: roster confirmed, letter tiers withheld.",
    pveBody:
      "Every family below is live for bosses, dungeons, and open-world clears, but comparative PvE grades still need matched-gear, repeatable encounter records for Version 2.1. Open the dedicated PvE hub or a weapon guide before spending upgrade materials on an unverified “meta” claim.",
    openPveHub: "Open PvE tier-list hub",
    weaponCardsPve: "Weapon cards with PvE notes",
    pvpEyebrow: "PvP review",
    pvpTitle: "PvP weapon status: arena evidence still under review.",
    pvpBody:
      "Arena placements need matchup, rank-band, latency, build, and sample-size evidence. Until those records exist, this page will not invent duel S/A/B ranks from highlight clips or undated community images.",
    openPvpHub: "Open PvP tier-list hub",
    weaponCardsPvp: "Weapon cards with PvP notes",
    rosterEyebrow: "Current roster coverage",
    rosterTitle: "Every weapon, with evidence and review status.",
    officialConfirmed: "Officially confirmed",
    liveRoster: "Live roster",
    pveReview: "PvE · review required",
    pvpReview: "PvP · review required",
    openGuide: "Open weapon guide →",
    guidePlanned: "Dedicated guide planned",
    videoEyebrow: "Optional gameplay context",
    videoTitle: "Unofficial unlock / Draught route video",
    unofficial: "Unofficial",
    videoBody:
      "Community video already referenced elsewhere on this site for Skystrike Gauntlets / Draught Inner Ways unlock context. It is not an official tier ranking and does not replace in-game verification.",
    videoEmbedTitle: "Unofficial: How to Get Drunken Fist Martial Arts and Inner Ways",
    protocolTitle: "How the next ranking will be earned.",
    faqTitle: "Weapon tier-list FAQ",
    faqs: [
      {
        question: "What is the current Where Winds Meet weapon tier list?",
        answer:
          "The current dataset does not assign letter tiers because it has no matched-build Version 2.1 test sample. It confirms all eight weapon families and separates PvE and PvP review status so an old community ranking is not presented as current fact.",
      },
      {
        question: "Are Gauntlets included in the current roster?",
        answer:
          "Yes. The official Hidden Mountain developer letter says Gauntlets arrived in Version 2.0 and introduced Bamboocut Kite, which can pair with Rope Dart.",
      },
      {
        question: "Why are PvE and PvP marked review required?",
        answer:
          "A current rank needs a dated patch, matched gear, documented builds, repeatable encounters or matchups, latency context for PvP, and a useful sample size. Those records are not yet stored in the dataset.",
      },
      {
        question: "How should I choose a weapon before rankings are retested?",
        answer:
          "Choose the role and combat rhythm you want, use the linked weapon guide, and test one repeatable route before spending heavily. Treat convenience, latency, build access, and mode as part of the decision.",
      },
    ],
    methodology: weaponTierMeta.methodology,
    reviewProtocol: weaponTierMeta.reviewProtocol,
    gauntletsArtLabel: "Gauntlets artwork not yet stored",
  },
  de: {
    inLanguage: "de-DE" as const,
    path: "/de/guides/weapons/tier-list",
    bgAlt: "Where Winds Meet Waffen-Review Hintergrund",
    checked: (version: string, date: string) => `${version} · geprueft ${date}`,
    h1: "Wie lautet die aktuelle WWM- / Where-Winds-Meet-Waffen-Tierliste in Version 2.1?",
    introBefore: "Wer nach einer ",
    introStrong1: "WWM Weapon Tier List",
    introMid: " oder ",
    introStrong2: "Where Winds Meet Weapon Tier List",
    introAfter:
      " sucht, will meist eine schnelle Beste-Waffe-Antwort. Die ehrliche: Offizielle Quellen bestaetigen das Acht-Familien-Roster (inkl. Gauntlets) und ausgewaehlte Balance-Fixes, veroeffentlichen aber ",
    introNot: "keine",
    introEnd:
      " offizielle S/A/B-Reihenfolge—und diese Seite erfindet keine. Nutze die PvE- und PvP-Abschnitte unten fuer den Review-Status, oeffne dann einen Waffen-Guide und teste eine wiederholbare Route mit deinem Build.",
    honesty:
      "Ehrlicher Hinweis: Community-Buchstaben-Tiers gelten hier nicht als aktuelle Fakten. Bis matched-build Version-2.1-Evidenz vorliegt, bleibt jede vergleichende Platzierung in Review.",
    jumpPve: "Zu PvE",
    jumpPvp: "Zu PvP",
    allWeapons: (n: number) => `Alle ${n} Waffen`,
    relatedEyebrow: "Verwandte Tier-Seiten (Dedupe)",
    relatedBodyBefore: "Diese Seite ist der Evidenz-Hub fuer Waffenfamilien. Fuer die breitere Matrix nutze ",
    relatedMid1: "; fuer Arena-only Checks nutze ",
    relatedMid2: "; fuer PvE-fokussiertes Review nutze ",
    relatedEnd: ".",
    confirmed: "Bestaetigt",
    confirmedTitle: "Acht aktuelle Waffenfamilien",
    confirmedBody: "Gauntlets kamen in Version 2.0 zum bestehenden Sieben-Familien-Roster hinzu.",
    notConfirmed: "Nicht bestaetigt",
    notConfirmedTitle: "Eine universelle S/A/B-Reihenfolge",
    notConfirmedBody:
      "Offizielle Patch Notes dokumentieren Aenderungen, beweisen aber kein vollstaendiges Cross-Mode-Ranking.",
    nextEvidence: "Naechste Evidenz",
    nextEvidenceTitle: "Matched PvE- und PvP-Retests",
    nextEvidenceBody:
      "Build, Gear, Encounter/Matchup, Latenz, Ergebnis und Sample Size festhalten, bevor ein Tier vergeben wird.",
    pveEyebrow: "PvE-Review",
    pveTitle: "PvE-Waffenstatus: Roster bestaetigt, Buchstaben-Tiers zurueckgehalten.",
    pveBody:
      "Jede Familie unten ist live fuer Bosse, Dungeons und Open-World-Clears, aber vergleichende PvE-Noten brauchen weiterhin matched-gear, wiederholbare Encounter-Records fuer Version 2.1. Oeffne den PvE-Hub oder einen Waffen-Guide, bevor du Upgrade-Material fuer ungepruefte Meta-Claims ausgibst.",
    openPveHub: "PvE-Tierlisten-Hub oeffnen",
    weaponCardsPve: "Waffenkarten mit PvE-Notizen",
    pvpEyebrow: "PvP-Review",
    pvpTitle: "PvP-Waffenstatus: Arena-Evidenz noch in Review.",
    pvpBody:
      "Arena-Platzierungen brauchen Matchup-, Rank-Band-, Latenz-, Build- und Sample-Size-Evidenz. Solange diese Records fehlen, erfindet diese Seite keine Duell-S/A/B-Ranks aus Highlight-Clips oder undatierten Community-Bildern.",
    openPvpHub: "PvP-Tierlisten-Hub oeffnen",
    weaponCardsPvp: "Waffenkarten mit PvP-Notizen",
    rosterEyebrow: "Aktuelle Roster-Abdeckung",
    rosterTitle: "Jede Waffe mit Evidenz und Review-Status.",
    officialConfirmed: "Offiziell bestaetigt",
    liveRoster: "Live-Roster",
    pveReview: "PvE · Review noetig",
    pvpReview: "PvP · Review noetig",
    openGuide: "Waffen-Guide oeffnen →",
    guidePlanned: "Dedizierter Guide geplant",
    videoEyebrow: "Optionaler Gameplay-Kontext",
    videoTitle: "Inoffizielles Unlock- / Draught-Routen-Video",
    unofficial: "Inoffiziell",
    videoBody:
      "Community-Video, das auf dieser Site bereits fuer Skystrike Gauntlets / Draught Inner Ways Unlock-Kontext referenziert wird. Es ist kein offizielles Tier-Ranking und ersetzt keine In-Game-Pruefung.",
    videoEmbedTitle: "Inoffiziell: Drunken Fist Martial Arts und Inner Ways freischalten",
    protocolTitle: "So wird das naechste Ranking verdient.",
    faqTitle: "FAQ zur Waffen-Tierliste",
    faqs: [
      {
        question: "Wie lautet die aktuelle Where-Winds-Meet-Waffen-Tierliste?",
        answer:
          "Der aktuelle Datensatz vergibt keine Buchstaben-Tiers, weil kein matched-build Version-2.1-Testsample vorliegt. Er bestaetigt alle acht Waffenfamilien und trennt PvE- und PvP-Review-Status, damit ein altes Community-Ranking nicht als aktuelle Tatsache erscheint.",
      },
      {
        question: "Sind Gauntlets im aktuellen Roster enthalten?",
        answer:
          "Ja. Der offizielle Hidden-Mountain-Developer-Letter sagt, dass Gauntlets in Version 2.0 kamen und Bamboocut Kite einfuehrten, das mit Rope Dart gepaart werden kann.",
      },
      {
        question: "Warum sind PvE und PvP als Review required markiert?",
        answer:
          "Ein aktueller Rank braucht einen datierten Patch, matched Gear, dokumentierte Builds, wiederholbare Encounters oder Matchups, Latenz-Kontext fuer PvP und eine nuetzliche Sample Size. Diese Records sind im Datensatz noch nicht gespeichert.",
      },
      {
        question: "Wie waehle ich eine Waffe, bevor Rankings neu getestet werden?",
        answer:
          "Waehle die Rolle und den Kampfrhythmus, den du willst, nutze den verlinkten Waffen-Guide und teste eine wiederholbare Route, bevor du stark investierst. Behandle Komfort, Latenz, Build-Zugang und Modus als Teil der Entscheidung.",
      },
    ],
    methodology:
      "Offizielle Quellen belegen das Live-Roster und dokumentierte Balance-Aenderungen. Sie veroeffentlichen kein vollstaendiges vergleichendes Ranking; dieser Datensatz vergibt daher keinen Buchstaben- oder Zahlenrank. PvE- und PvP-Bewertungen bleiben needs-retest, bis derselbe Build, Gear-Tier, Encounter-Set, Latenzbereich und Sample Size nach dem aktuellen Patch verglichen werden koennen.",
    reviewProtocol: [
      "Bestaetige aus einer offiziellen Spielquelle, dass die Waffe oder Martial Art live ist.",
      "Erfasse jede relevante offizielle Balance-Aenderung fuer die aktuelle Version.",
      "Teste PvE mit matched Gear und wiederholbaren Boss- oder Dungeon-Encounters.",
      "Teste PvP ueber mehrere Matchups und notiere Latenz, Rank-Band, Build und Sample Size.",
      "Veroeffentliche vergleichende Tiers nur, wenn die Evidenz reproduzierbar und datiert ist.",
    ],
    gauntletsArtLabel: "Gauntlets-Artwork noch nicht hinterlegt",
  },
  vi: {
    inLanguage: "vi-VN" as const,
    path: "/vn/guides/weapons/tier-list",
    bgAlt: "Nền đánh giá vũ khí Where Winds Meet",
    checked: (version: string, date: string) => `${version} · kiểm tra ${date}`,
    h1: "Bảng xếp hạng vũ khí WWM / Where Winds Meet Version 2.1 hiện tại là gì?",
    introBefore: "Người tìm ",
    introStrong1: "WWM Weapon Tier List",
    introMid: " hoặc ",
    introStrong2: "Where Winds Meet Weapon Tier List",
    introAfter:
      " thường muốn câu trả lời vũ khí mạnh nhất nhanh. Câu trả lời trung thực: nguồn chính thức xác nhận roster tám hệ (gồm Gauntlets) và một số chỉnh balance, nhưng họ ",
    introNot: "không",
    introEnd:
      " công bố thứ tự S/A/B chính thức—và trang này cũng không bịa. Dùng phần PvE và PvP bên dưới để xem trạng thái review, rồi mở guide vũ khí và chạy một bài test lặp lại trên build của bạn.",
    honesty:
      "Lưu ý trung thực: tier chữ cái từ cộng đồng không được coi là sự thật hiện tại. Cho đến khi có evidence Version 2.1 matched-build, mọi xếp hạng so sánh đều ở trạng thái review.",
    jumpPve: "Tới PvE",
    jumpPvp: "Tới PvP",
    allWeapons: (n: number) => `Cả ${n} vũ khí`,
    relatedEyebrow: "Trang tier liên quan (dedupe)",
    relatedBodyBefore: "Trang này là hub evidence theo hệ vũ khí. Cho ma trận rộng hơn dùng ",
    relatedMid1: "; cho kiểm tra chỉ arena dùng ",
    relatedMid2: "; cho review tập trung PvE dùng ",
    relatedEnd: ".",
    confirmed: "Đã xác nhận",
    confirmedTitle: "Tám hệ vũ khí hiện tại",
    confirmedBody: "Gauntlets gia nhập roster bảy hệ sẵn có ở Version 2.0.",
    notConfirmed: "Chưa xác nhận",
    notConfirmedTitle: "Thứ tự S/A/B toàn cục",
    notConfirmedBody:
      "Patch notes chính thức ghi nhận thay đổi, nhưng không chứng minh ranking đủ mọi mode.",
    nextEvidence: "Evidence tiếp theo",
    nextEvidenceTitle: "Retest PvE và PvP matched",
    nextEvidenceBody:
      "Ghi build, gear, encounter/matchup, latency, kết quả và sample size trước khi gán tier.",
    pveEyebrow: "Review PvE",
    pveTitle: "Trạng thái vũ khí PvE: roster đã xác nhận, tier chữ cái được giữ lại.",
    pveBody:
      "Mọi hệ bên dưới đều live cho boss, dungeon và clear open-world, nhưng hạng PvE so sánh vẫn cần bản ghi encounter lặp lại với matched gear cho Version 2.1. Mở hub PvE hoặc guide vũ khí trước khi tiêu vật liệu nâng cấp theo claim “meta” chưa kiểm chứng.",
    openPveHub: "Mở hub PvE tier-list",
    weaponCardsPve: "Thẻ vũ khí kèm ghi chú PvE",
    pvpEyebrow: "Review PvP",
    pvpTitle: "Trạng thái vũ khí PvP: evidence arena vẫn đang review.",
    pvpBody:
      "Xếp hạng arena cần evidence matchup, rank-band, latency, build và sample size. Khi chưa có bản ghi đó, trang này sẽ không bịa rank S/A/B từ clip highlight hay ảnh cộng đồng không ngày tháng.",
    openPvpHub: "Mở hub PvP tier-list",
    weaponCardsPvp: "Thẻ vũ khí kèm ghi chú PvP",
    rosterEyebrow: "Phủ sóng roster hiện tại",
    rosterTitle: "Mọi vũ khí, kèm evidence và trạng thái review.",
    officialConfirmed: "Xác nhận chính thức",
    liveRoster: "Roster live",
    pveReview: "PvE · cần review",
    pvpReview: "PvP · cần review",
    openGuide: "Mở guide vũ khí →",
    guidePlanned: "Guide riêng đang lên kế hoạch",
    videoEyebrow: "Ngữ cảnh gameplay tùy chọn",
    videoTitle: "Video unlock / lộ trình Draught không chính thức",
    unofficial: "Không chính thức",
    videoBody:
      "Video cộng đồng đã được tham chiếu ở nơi khác trên site cho ngữ cảnh unlock Skystrike Gauntlets / Draught Inner Ways. Đây không phải ranking tier chính thức và không thay thế kiểm chứng trong game.",
    videoEmbedTitle: "Không chính thức: Cách lấy Drunken Fist Martial Arts và Inner Ways",
    protocolTitle: "Cách ranking tiếp theo sẽ được kiếm ra.",
    faqTitle: "FAQ bảng xếp hạng vũ khí",
    faqs: [
      {
        question: "Bảng xếp hạng vũ khí Where Winds Meet hiện tại là gì?",
        answer:
          "Dataset hiện tại không gán tier chữ cái vì chưa có mẫu test Version 2.1 matched-build. Nó xác nhận cả tám hệ vũ khí và tách trạng thái review PvE/PvP để ranking cộng đồng cũ không bị trình bày như sự thật hiện tại.",
      },
      {
        question: "Gauntlets có trong roster hiện tại không?",
        answer:
          "Có. Developer letter Hidden Mountain chính thức nói Gauntlets đến ở Version 2.0 và giới thiệu Bamboocut Kite, có thể ghép với Rope Dart.",
      },
      {
        question: "Vì sao PvE và PvP bị đánh dấu cần review?",
        answer:
          "Một rank hiện tại cần patch có ngày, matched gear, build được ghi lại, encounter/matchup lặp lại, ngữ cảnh latency cho PvP, và sample size hữu ích. Các bản ghi đó chưa nằm trong dataset.",
      },
      {
        question: "Tôi nên chọn vũ khí thế nào trước khi ranking được retest?",
        answer:
          "Chọn role và nhịp combat bạn muốn, dùng guide vũ khí được liên kết, và test một lộ trình lặp lại trước khi đầu tư nặng. Coi sự tiện, latency, quyền truy cập build và mode là một phần quyết định.",
      },
    ],
    methodology:
      "Nguồn chính thức xác lập roster live và các thay đổi balance đã ghi nhận. Họ không công bố ranking so sánh đầy đủ, nên dataset này không gán hạng chữ cái hay số. Đánh giá PvE và PvP vẫn needs-retest cho đến khi cùng một build, gear tier, bộ encounter, dải latency và sample size có thể so sánh sau patch hiện tại.",
    reviewProtocol: [
      "Xác nhận vũ khí hoặc Martial Art đang live từ nguồn game chính thức.",
      "Ghi mọi thay đổi balance chính thức liên quan cho phiên bản hiện tại.",
      "Test PvE với matched gear và encounter boss/dungeon lặp lại được.",
      "Test PvP trên nhiều matchup và ghi latency, rank band, build và sample size.",
      "Chỉ công bố tier so sánh khi evidence tái lập được và có ngày tháng.",
    ],
    gauntletsArtLabel: "Artwork Gauntlets chưa lưu",
  },
} as const;

export default function WeaponTierListGuidePage({
  language,
}: {
  language: WeaponTierListLanguage;
}) {
  const t = copy[language];
  const localizedPath = (path: string) => buildLocalizedPath(path, language) ?? path;
  const pageUrl = `${baseUrl}${t.path}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: t.h1,
      description: t.introBefore + t.introStrong1 + t.introMid + t.introStrong2 + t.introAfter + t.introNot + t.introEnd,
      url: pageUrl,
      inLanguage: t.inLanguage,
      dateModified: weaponTierMeta.updatedAt,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <article className="space-y-8 pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg1.webp"
            alt={t.bgAlt}
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/55" />
        </div>
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            {t.checked(weaponTierMeta.gameVersion, weaponTierMeta.updatedAt)}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-5xl">{t.h1}</h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            {t.introBefore}
            <strong>{t.introStrong1}</strong>
            {t.introMid}
            <strong>{t.introStrong2}</strong>
            {t.introAfter}
            <strong>{t.introNot}</strong>
            {t.introEnd}
          </p>
          <div className="mt-4 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-50/95">
            {t.honesty}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="#pve" className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-300">
              {t.jumpPve}
            </Link>
            <Link href="#pvp" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
              {t.jumpPvp}
            </Link>
            <Link href="#weapon-evidence" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
              {t.allWeapons(currentWeaponRoster.length)}
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-5 text-sm leading-6 text-slate-200">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{t.relatedEyebrow}</p>
        <p className="mt-2">
          {t.relatedBodyBefore}
          <Link href={localizedPath("/guides/tier-list")} className="font-semibold text-cyan-100 underline underline-offset-4">
            /guides/tier-list
          </Link>
          {t.relatedMid1}
          <Link href={localizedPath("/guides/pvp-tier-list")} className="font-semibold text-cyan-100 underline underline-offset-4">
            /guides/pvp-tier-list
          </Link>
          {t.relatedMid2}
          <Link href={localizedPath("/guides/pve-tier-list")} className="font-semibold text-cyan-100 underline underline-offset-4">
            /guides/pve-tier-list
          </Link>
          {t.relatedEnd}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">{t.confirmed}</p>
          <h2 className="mt-2 text-lg font-bold text-slate-50">{t.confirmedTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{t.confirmedBody}</p>
        </div>
        <div className="rounded-2xl border border-amber-400/25 bg-amber-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">{t.notConfirmed}</p>
          <h2 className="mt-2 text-lg font-bold text-slate-50">{t.notConfirmedTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{t.notConfirmedBody}</p>
        </div>
        <div className="rounded-2xl border border-cyan-400/25 bg-cyan-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{t.nextEvidence}</p>
          <h2 className="mt-2 text-lg font-bold text-slate-50">{t.nextEvidenceTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{t.nextEvidenceBody}</p>
        </div>
      </section>

      <section id="pve" className="space-y-4 rounded-3xl border border-emerald-400/25 bg-emerald-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">{t.pveEyebrow}</p>
        <h2 className="text-2xl font-bold text-slate-50">{t.pveTitle}</h2>
        <p className="max-w-3xl text-sm leading-6 text-slate-300">{t.pveBody}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href={localizedPath("/guides/pve-tier-list")} className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-300">
            {t.openPveHub}
          </Link>
          <Link href="#weapon-evidence" className="rounded-full border border-emerald-300/50 px-4 py-2 font-semibold text-emerald-50">
            {t.weaponCardsPve}
          </Link>
        </div>
      </section>

      <section id="pvp" className="space-y-4 rounded-3xl border border-red-400/25 bg-red-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-200">{t.pvpEyebrow}</p>
        <h2 className="text-2xl font-bold text-slate-50">{t.pvpTitle}</h2>
        <p className="max-w-3xl text-sm leading-6 text-slate-300">{t.pvpBody}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href={localizedPath("/guides/pvp-tier-list")} className="rounded-full bg-red-300 px-4 py-2 font-semibold text-slate-950 hover:bg-red-200">
            {t.openPvpHub}
          </Link>
          <Link href="#weapon-evidence" className="rounded-full border border-red-300/50 px-4 py-2 font-semibold text-red-50">
            {t.weaponCardsPvp}
          </Link>
        </div>
      </section>

      <section id="weapon-evidence" className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t.rosterEyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">{t.rosterTitle}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {currentWeaponRoster.map((weaponEvidence) => {
            const guideWeapon = weapons.find((weapon) => weapon.id === weaponEvidence.id);
            const sources = getWeaponSources(weaponEvidence);
            const guideHref = weaponEvidence.guide.href
              ? localizedPath(weaponEvidence.guide.href)
              : null;

            return (
              <article key={weaponEvidence.id} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-slate-950/40">
                <div className="grid grid-cols-[112px,1fr] gap-4 p-5">
                  {guideWeapon ? (
                    <div className="relative h-28 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                      <CdnImage
                        src={guideWeapon.officialArt}
                        alt={`${guideWeapon.name} official weapon artwork`}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-28 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-4xl font-black text-emerald-100"
                      aria-label={t.gauntletsArtLabel}
                    >
                      G
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-50">{weaponEvidence.name}</h3>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-100">
                        {weaponEvidence.roster.status === "official-confirmed"
                          ? t.officialConfirmed
                          : t.liveRoster}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{weaponEvidence.role}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{weaponEvidence.roster.note}</p>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-slate-800 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">{t.pveReview}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{weaponEvidence.pve.note}</p>
                  </div>
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">{t.pvpReview}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{weaponEvidence.pvp.note}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 px-5 py-4 text-xs">
                  <div className="flex flex-wrap gap-3">
                    {sources.map((source) => (
                      <a
                        key={source.id}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
                      >
                        {source.title}
                      </a>
                    ))}
                  </div>
                  {guideHref ? (
                    <Link href={guideHref} className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                      {t.openGuide}
                    </Link>
                  ) : (
                    <span className="font-semibold text-amber-200">{t.guidePlanned}</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t.videoEyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">{t.videoTitle}</h2>
          </div>
          <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-100">
            {t.unofficial}
          </span>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-400">{t.videoBody}</p>
        <LiteYouTubeEmbed videoId="3_OMV6jjJtM" title={t.videoEmbedTitle} />
      </section>

      <section id="weapon-meta-check" className="rounded-3xl border border-violet-400/25 bg-violet-500/10 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">{t.protocolTitle}</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-2">
          {t.reviewProtocol.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/65 p-4 text-sm leading-6 text-slate-300">
              <span className="font-bold text-violet-200">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-xs leading-5 text-slate-400">{t.methodology}</p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">{t.faqTitle}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {t.faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="font-semibold text-slate-100">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
