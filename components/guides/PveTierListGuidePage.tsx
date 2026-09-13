import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildLocalizedPath } from "@/i18n/routing.mjs";
import {
  currentWeaponRoster,
  getWeaponSources,
  weaponTierMeta,
} from "@/lib/weaponTierData";
import { weapons } from "@/lib/weapons";

export type PveTierListLanguage = "en" | "vi" | "de";

const baseUrl = "https://wherewindsmeet.org";

const copy = {
  en: {
    inLanguage: "en-US" as const,
    path: "/guides/pve-tier-list",
    bgAlt: "Where Winds Meet PvE review background",
    checked: (version: string, date: string) => `${version} · PvE evidence checked ${date}`,
    h1: "Where Winds Meet PvE tier list: what is confirmed for bosses and clears.",
    introBefore: "Players searching for a ",
    introStrong: "where winds meet pve tier list",
    introAfter:
      " want a best-weapon answer for bosses, dungeons, and open-world farming. Official sources do not publish that S/A/B order, and this page will not invent one. It reuses the shared weapon roster, marks every comparative PvE placement as review required, and links you to weapon guides and the broader tier matrix.",
    reviewAll: "Review all weapons",
    weaponPveSection: "Weapon tier-list PvE section",
    fullMatrix: "Full evidence matrix",
    relatedBefore: "Related hubs: ",
    relatedAnd: ", and ",
    relatedArena: " for arena-only evidence.",
    protocolEyebrow: "PvE retest protocol",
    protocolTitle: "Four checks before you trust a PvE letter grade.",
    checks: [
      {
        name: "Patch and gear",
        detail:
          "Record game version, Martial Arts, Inner Ways, gear tier, and any recent respec before comparing clears.",
      },
      {
        name: "Encounter set",
        detail:
          "Use repeatable bosses, dungeons, or open-world targets—not a one-off story fight—so results can be compared.",
      },
      {
        name: "Clear metrics",
        detail:
          "Track clear time, death count, consumable spend, and whether the route stayed solo or needed co-op help.",
      },
      {
        name: "Decision threshold",
        detail:
          "Only publish a comparative placement when the same result holds across a useful sample—not one highlight clear.",
      },
    ],
    coverageEyebrow: "PvE coverage",
    coverageTitle: "Current PvE status for every weapon family.",
    reviewRequired: "Review required",
    evidence: "Evidence",
    weaponGuide: "Weapon guide",
    guidePlanned: "Guide planned",
    faqTitle: "PvE tier-list FAQ",
    faqs: [
      {
        question: "What is the Where Winds Meet PvE tier list right now?",
        answer:
          "There is no defensible universal PvE S/A/B order in the stored evidence set. Official sources confirm the roster and selected balance changes, but comparative boss and dungeon ranks still need matched-gear Version 2.1 tests.",
      },
      {
        question: "Are Gauntlets ranked for PvE?",
        answer:
          "Gauntlets are officially confirmed as live, including follow-up September 5 animation fixes for Skystrike Gauntlets skills, but that does not establish a comparative PvE letter tier.",
      },
      {
        question: "Should I copy a community PvE tier image?",
        answer:
          "Not as current fact. Undated images often mix patches, gear, and encounter types. Use the roster cards here, then verify one repeatable route on your build.",
      },
      {
        question: "Where should I go for arena rankings?",
        answer: "Use the PvP tier-list page. PvE clear speed does not prove arena matchup strength.",
      },
    ],
    methodologyLabel: "Methodology: ",
    methodology: weaponTierMeta.methodology,
  },
  de: {
    inLanguage: "de-DE" as const,
    path: "/de/guides/pve-tier-list",
    bgAlt: "Where Winds Meet PvE-Review Hintergrund",
    checked: (version: string, date: string) => `${version} · PvE-Evidenz geprueft ${date}`,
    h1: "Where Winds Meet PvE-Tierliste: was fuer Bosse und Clears bestaetigt ist.",
    introBefore: "Wer nach einer ",
    introStrong: "where winds meet pve tier list",
    introAfter:
      " sucht, will eine Beste-Waffe-Antwort fuer Bosse, Dungeons und Open-World-Farming. Offizielle Quellen veroeffentlichen diese S/A/B-Reihenfolge nicht, und diese Seite erfindet keine. Sie nutzt das gemeinsame Waffen-Roster, markiert jede vergleichende PvE-Platzierung als Review required und verlinkt zu Waffen-Guides sowie der breiteren Tier-Matrix.",
    reviewAll: "Alle Waffen pruefen",
    weaponPveSection: "PvE-Abschnitt der Waffen-Tierliste",
    fullMatrix: "Volle Evidenz-Matrix",
    relatedBefore: "Verwandte Hubs: ",
    relatedAnd: " und ",
    relatedArena: " fuer Arena-only-Evidenz.",
    protocolEyebrow: "PvE-Retest-Protokoll",
    protocolTitle: "Vier Checks, bevor du einer PvE-Buchstaben-Note vertraust.",
    checks: [
      {
        name: "Patch und Gear",
        detail:
          "Notiere Spielversion, Martial Arts, Inner Ways, Gear-Tier und jeden aktuellen Respec, bevor du Clears vergleichst.",
      },
      {
        name: "Encounter-Set",
        detail:
          "Nutze wiederholbare Bosse, Dungeons oder Open-World-Ziele—kein einmaliger Story-Kampf—, damit Ergebnisse vergleichbar bleiben.",
      },
      {
        name: "Clear-Metriken",
        detail:
          "Tracke Clear-Zeit, Todeszahl, Verbrauchsmaterial und ob die Route solo blieb oder Co-op brauchte.",
      },
      {
        name: "Entscheidungsschwelle",
        detail:
          "Veroeffentliche eine vergleichende Platzierung nur, wenn dasselbe Ergebnis ueber eine nuetzliche Sample Size haelt—nicht bei einem Highlight-Clear.",
      },
    ],
    coverageEyebrow: "PvE-Abdeckung",
    coverageTitle: "Aktueller PvE-Status fuer jede Waffenfamilie.",
    reviewRequired: "Review noetig",
    evidence: "Evidenz",
    weaponGuide: "Waffen-Guide",
    guidePlanned: "Guide geplant",
    faqTitle: "FAQ zur PvE-Tierliste",
    faqs: [
      {
        question: "Wie lautet die Where-Winds-Meet-PvE-Tierliste gerade?",
        answer:
          "Im gespeicherten Evidenzsatz gibt es keine vertretbare universelle PvE-S/A/B-Reihenfolge. Offizielle Quellen bestaetigen Roster und ausgewaehlte Balance-Aenderungen, aber vergleichende Boss- und Dungeon-Ranks brauchen weiterhin matched-gear Version-2.1-Tests.",
      },
      {
        question: "Sind Gauntlets fuer PvE gerankt?",
        answer:
          "Gauntlets sind offiziell als live bestaetigt, inklusive Follow-up-Animationsfixes vom 5. September fuer Skystrike-Gauntlets-Skills, aber das begruendet keinen vergleichenden PvE-Buchstaben-Tier.",
      },
      {
        question: "Soll ich ein Community-PvE-Tier-Bild kopieren?",
        answer:
          "Nicht als aktuelle Tatsache. Undatierte Bilder mischen oft Patches, Gear und Encounter-Typen. Nutze die Roster-Karten hier und verifiziere dann eine wiederholbare Route mit deinem Build.",
      },
      {
        question: "Wohin fuer Arena-Rankings?",
        answer:
          "Nutze die PvP-Tierlisten-Seite. PvE-Clear-Geschwindigkeit beweist keine Arena-Matchup-Staerke.",
      },
    ],
    methodologyLabel: "Methodik: ",
    methodology:
      "Offizielle Quellen belegen das Live-Roster und dokumentierte Balance-Aenderungen. Sie veroeffentlichen kein vollstaendiges vergleichendes Ranking; dieser Datensatz vergibt daher keinen Buchstaben- oder Zahlenrank. PvE- und PvP-Bewertungen bleiben needs-retest, bis derselbe Build, Gear-Tier, Encounter-Set, Latenzbereich und Sample Size nach dem aktuellen Patch verglichen werden koennen.",
  },
  vi: {
    inLanguage: "vi-VN" as const,
    path: "/vn/guides/pve-tier-list",
    bgAlt: "Nền đánh giá PvE Where Winds Meet",
    checked: (version: string, date: string) => `${version} · evidence PvE kiểm tra ${date}`,
    h1: "Bảng xếp hạng PvE Where Winds Meet: điều gì đã xác nhận cho boss và clear.",
    introBefore: "Người tìm ",
    introStrong: "where winds meet pve tier list",
    introAfter:
      " muốn câu trả lời vũ khí mạnh nhất cho boss, dungeon và farm open-world. Nguồn chính thức không công bố thứ tự S/A/B đó, và trang này cũng không bịa. Trang tái sử dụng roster vũ khí dùng chung, đánh dấu mọi xếp hạng PvE so sánh là cần review, rồi dẫn tới guide vũ khí và ma trận tier rộng hơn.",
    reviewAll: "Xem tất cả vũ khí",
    weaponPveSection: "Phần PvE của weapon tier-list",
    fullMatrix: "Ma trận evidence đầy đủ",
    relatedBefore: "Hub liên quan: ",
    relatedAnd: ", và ",
    relatedArena: " cho evidence chỉ arena.",
    protocolEyebrow: "Giao thức retest PvE",
    protocolTitle: "Bốn bước kiểm trước khi tin tier chữ cái PvE.",
    checks: [
      {
        name: "Patch và gear",
        detail:
          "Ghi phiên bản game, Martial Arts, Inner Ways, gear tier và mọi respec gần đây trước khi so sánh clear.",
      },
      {
        name: "Bộ encounter",
        detail:
          "Dùng boss, dungeon hoặc mục tiêu open-world lặp lại được—không phải một trận story một lần—để kết quả so sánh được.",
      },
      {
        name: "Chỉ số clear",
        detail:
          "Theo dõi thời gian clear, số lần chết, tiêu hao consumable, và lộ trình solo hay cần co-op.",
      },
      {
        name: "Ngưỡng quyết định",
        detail:
          "Chỉ công bố xếp hạng so sánh khi cùng kết quả giữ vững trên một sample hữu ích—không phải một highlight clear.",
      },
    ],
    coverageEyebrow: "Phủ sóng PvE",
    coverageTitle: "Trạng thái PvE hiện tại cho mọi hệ vũ khí.",
    reviewRequired: "Cần review",
    evidence: "Evidence",
    weaponGuide: "Guide vũ khí",
    guidePlanned: "Guide đang lên kế hoạch",
    faqTitle: "FAQ bảng xếp hạng PvE",
    faqs: [
      {
        question: "Bảng xếp hạng PvE Where Winds Meet hiện tại là gì?",
        answer:
          "Trong bộ evidence đã lưu không có thứ tự S/A/B PvE toàn cục đáng tin. Nguồn chính thức xác nhận roster và một số thay đổi balance, nhưng hạng boss/dungeon so sánh vẫn cần test Version 2.1 matched-gear.",
      },
      {
        question: "Gauntlets đã được xếp hạng PvE chưa?",
        answer:
          "Gauntlets được xác nhận chính thức là live, gồm cả bản sửa animation ngày 5/9 cho skill Skystrike Gauntlets, nhưng điều đó không tạo tier chữ cái PvE so sánh.",
      },
      {
        question: "Tôi có nên copy ảnh PvE tier từ cộng đồng không?",
        answer:
          "Không coi là sự thật hiện tại. Ảnh không ngày tháng thường trộn patch, gear và loại encounter. Dùng thẻ roster ở đây, rồi kiểm chứng một lộ trình lặp lại trên build của bạn.",
      },
      {
        question: "Đâu là nơi xem ranking arena?",
        answer:
          "Dùng trang PvP tier-list. Tốc độ clear PvE không chứng minh sức mạnh matchup arena.",
      },
    ],
    methodologyLabel: "Phương pháp: ",
    methodology:
      "Nguồn chính thức xác lập roster live và các thay đổi balance đã ghi nhận. Họ không công bố ranking so sánh đầy đủ, nên dataset này không gán hạng chữ cái hay số. Đánh giá PvE và PvP vẫn needs-retest cho đến khi cùng một build, gear tier, bộ encounter, dải latency và sample size có thể so sánh sau patch hiện tại.",
  },
} as const;

export default function PveTierListGuidePage({
  language,
}: {
  language: PveTierListLanguage;
}) {
  const t = copy[language];
  const localizedPath = (path: string) => buildLocalizedPath(path, language) ?? path;
  const pageUrl = `${baseUrl}${t.path}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: t.h1,
      description: t.introBefore + t.introStrong + t.introAfter,
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-emerald-950/45" />
        </div>
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            {t.checked(weaponTierMeta.gameVersion, weaponTierMeta.updatedAt)}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-5xl">{t.h1}</h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            {t.introBefore}
            <strong>{t.introStrong}</strong>
            {t.introAfter}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="#pve-evidence" className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-300">
              {t.reviewAll}
            </Link>
            <Link
              href={`${localizedPath("/guides/weapons/tier-list")}#pve`}
              className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60"
            >
              {t.weaponPveSection}
            </Link>
            <Link href={localizedPath("/guides/tier-list")} className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
              {t.fullMatrix}
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-5 text-sm leading-6 text-slate-200">
        {t.relatedBefore}
        <Link href={localizedPath("/guides/tier-list")} className="font-semibold text-cyan-100 underline underline-offset-4">
          /guides/tier-list
        </Link>
        {", "}
        <Link
          href={`${localizedPath("/guides/weapons/tier-list")}#pve`}
          className="font-semibold text-cyan-100 underline underline-offset-4"
        >
          /guides/weapons/tier-list#pve
        </Link>
        {t.relatedAnd}
        <Link href={localizedPath("/guides/pvp-tier-list")} className="font-semibold text-cyan-100 underline underline-offset-4">
          /guides/pvp-tier-list
        </Link>
        {t.relatedArena}
      </section>

      <section id="pve-retest" className="rounded-3xl border border-emerald-400/25 bg-emerald-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">{t.protocolEyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">{t.protocolTitle}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {t.checks.map((field, index) => (
            <div key={field.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-bold text-emerald-100">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-slate-100">{field.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{field.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pve-evidence" className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t.coverageEyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">{t.coverageTitle}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {currentWeaponRoster.map((weapon) => {
            const guideWeapon = weapons.find((entry) => entry.id === weapon.id);
            const sources = getWeaponSources(weapon);
            const guideHref = weapon.guide.href ? localizedPath(weapon.guide.href) : null;

            return (
              <article key={weapon.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
                <div className="flex gap-4">
                  {guideWeapon ? (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                      <CdnImage
                        src={guideWeapon.officialArt}
                        alt={`${guideWeapon.name} official artwork`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-50">{weapon.name}</h3>
                        <p className="mt-1 text-xs text-slate-400">{weapon.role}</p>
                      </div>
                      <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-100">
                        {t.reviewRequired}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{weapon.pve.note}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  {sources.map((source) => (
                    <a
                      key={source.id}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
                    >
                      {t.evidence}
                    </a>
                  ))}
                  {guideHref ? (
                    <Link href={guideHref} className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                      {t.weaponGuide}
                    </Link>
                  ) : (
                    <span className="font-semibold text-slate-500">{t.guidePlanned}</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6">
        <h2 className="text-xl font-bold text-slate-50">{t.faqTitle}</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {t.faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">{faq.question}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-5 text-slate-400">
        {t.methodologyLabel}
        {t.methodology}
      </p>
    </article>
  );
}
