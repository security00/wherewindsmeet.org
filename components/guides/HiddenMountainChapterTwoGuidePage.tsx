import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";

type Language = "en" | "vi" | "de";
type Kind = "cloudtop" | "labyrinth";

const prefix = { en: "", vi: "/vn", de: "/de" } as const;

const content = {
  en: {
    checked: "Search intent and sources checked · August 23, 2026",
    cloudtop: {
      title: "Where Winds Meet Heaven’s Threshold: Cloudtop Ascent & Cloudstair Unlock Guide",
      intro: "Heaven’s Threshold is not unlocked by one player finishing a normal quest. Your server must rebuild the Cloudstair through Cloudtop Ascent, so a ‘wait for development’ message usually means the shared construction bar is not complete—not that your account is broken.",
      h2: "Fast unlock checklist",
      steps: [
        "Open the Version 2.1 event menu, select Build the Cloudstair, and use Go to Quest to track Cloudtop Ascent: Foundation.",
        "Follow the marker in Mohist City, speak with the construction NPCs, and deliver the tutorial materials to open the activity panel.",
        "Run Mountain Express and the listed material objectives to earn personal Work Merit while adding construction progress.",
        "Check the server progress bar. Heaven’s Threshold opens only after the shared milestone is complete; individual grinding cannot bypass it.",
      ],
      blocker: "Why does Heaven’s Threshold still say locked?",
      fixes: ["Finish the Foundation tutorial first.", "Claim completed activity objectives so their progress is recorded.", "Confirm the server-wide bar, not only your personal Work Merit.", "Relog after the shared milestone completes if the entrance does not refresh."],
      evidence: "The server-wide Cloudstair gate and Heaven’s Threshold relationship are official. Menu names and the short Foundation route are a current SERP walkthrough synthesis and may vary slightly by client language.",
    },
    labyrinth: {
      title: "Where Winds Meet Evershift Labyrinth Guide: Rotating Mechanism Solution",
      intro: "The Evershift Labyrinth is a Version 2.1 Jianghu Legacy beneath Divinecraft Pavilion. Its rotating block looks like a climbing puzzle, but the reliable solution is a four-action machine sequence: lever, timed entry, golden bird, forward exit.",
      h2: "Pass through the rotating mechanism",
      steps: ["Pull the lever in front of the rotating block.", "Wait for the hollow opening to face your platform, then jump inside.", "Interact with the golden bird device on the inner wall.", "Walk forward through the newly aligned opening; the objective should clear as you enter the far corridor."],
      blocker: "Common failure points",
      fixes: ["Do not jump before pulling the lever—the open face only rotates into reach after activation.", "Entering the block is only half the solution; the inner golden bird must be activated.", "If you exit onto the starting platform, re-enter and trigger the bird before leaving.", "A later ‘wait for development’ message can be the separate server-wide Heaven’s Threshold gate, not a failed labyrinth clear."],
      evidence: "The labyrinth setting and moving mortise-and-tenon structure are official. The exact rotating-block sequence is cross-checked against a current puzzle walkthrough and community guide demand.",
    },
    source: "Evidence and freshness",
    official: "Official Version 2.1 developer letter",
    serp: "Current step-by-step reference",
    video: "Third-party mirror of the official Heaven’s Threshold Chapter 2 trailer · GameTrailers",
    labyrinthVideo: "Creator quest walkthrough · Game Guides Channel",
    related: "Continue through Hidden Mountain",
  },
  vi: {
    checked: "Đã kiểm tra nhu cầu tìm kiếm và nguồn · 23/08/2026",
    cloudtop: {
      title: "Heaven’s Threshold Where Winds Meet: Cloudtop Ascent và mở Cloudstair",
      intro: "Heaven’s Threshold không mở chỉ bằng một nhiệm vụ cá nhân. Toàn server phải xây lại Cloudstair trong Cloudtop Ascent; thông báo ‘wait for development’ thường có nghĩa thanh tiến độ chung chưa hoàn tất, không phải tài khoản bị lỗi.",
      h2: "Checklist mở khóa nhanh",
      steps: ["Mở sự kiện Version 2.1, chọn Build the Cloudstair rồi dùng Go to Quest để theo dõi Cloudtop Ascent: Foundation.", "Theo marker tại Mohist City, nói chuyện với NPC xây dựng và giao vật liệu hướng dẫn.", "Chạy Mountain Express và nhiệm vụ vật liệu để nhận Work Merit cá nhân đồng thời đóng góp tiến độ.", "Kiểm tra thanh toàn server. Heaven’s Threshold chỉ mở khi mốc chung hoàn tất."],
      blocker: "Vì sao Heaven’s Threshold vẫn bị khóa?",
      fixes: ["Hoàn thành tutorial Foundation trước.", "Nhận thưởng các mục tiêu đã hoàn thành để ghi nhận tiến độ.", "Kiểm tra thanh toàn server, không chỉ Work Merit cá nhân.", "Đăng nhập lại sau khi mốc chung hoàn tất nếu lối vào chưa cập nhật."],
      evidence: "Cơ chế toàn server của Cloudstair và liên hệ với Heaven’s Threshold là thông tin chính thức. Tên menu và tuyến Foundation ngắn được tổng hợp từ SERP hiện tại và có thể khác theo ngôn ngữ client.",
    },
    labyrinth: {
      title: "Evershift Labyrinth Where Winds Meet: cách qua cơ chế xoay",
      intro: "Evershift Labyrinth là Jianghu Legacy Version 2.1 dưới Divinecraft Pavilion. Khối xoay trông giống câu đố leo trèo, nhưng lời giải ổn định chỉ gồm bốn thao tác: cần gạt, nhảy đúng lúc, chim vàng và đi ra phía trước.",
      h2: "Vượt qua cơ chế xoay",
      steps: ["Kéo cần gạt trước khối xoay.", "Chờ mặt rỗng quay về phía bệ rồi nhảy vào trong.", "Tương tác với thiết bị chim vàng ở thành trong.", "Đi thẳng qua lối vừa căn chỉnh; objective sẽ biến mất khi vào hành lang bên kia."],
      blocker: "Các lỗi thường gặp",
      fixes: ["Không nhảy trước khi kéo cần gạt.", "Vào trong khối chưa đủ; phải kích hoạt chim vàng.", "Nếu quay lại bệ ban đầu, hãy vào lại và dùng chim vàng trước khi ra.", "Thông báo ‘wait for development’ phía sau có thể là cổng Heaven’s Threshold toàn server."],
      evidence: "Bối cảnh mê cung và kết cấu mộng gỗ chuyển động đến từ nguồn chính thức. Trình tự khối xoay được đối chiếu với hướng dẫn puzzle hiện tại và nhu cầu cộng đồng.",
    },
    source: "Nguồn và độ mới",
    official: "Thư nhà phát triển Version 2.1",
    serp: "Hướng dẫn từng bước hiện tại",
    video: "Bản mirror bên thứ ba của trailer Heaven’s Threshold Chapter 2 · GameTrailers",
    labyrinthVideo: "Video nhiệm vụ của creator · Game Guides Channel",
    related: "Tiếp tục Hidden Mountain",
  },
  de: {
    checked: "Suchintention und Quellen geprüft · 23. August 2026",
    cloudtop: {
      title: "Where Winds Meet Heaven’s Threshold: Cloudtop Ascent und Cloudstair freischalten",
      intro: "Heaven’s Threshold wird nicht durch eine einzelne Quest geöffnet. Der gesamte Server muss in Cloudtop Ascent die Cloudstair wiederaufbauen. ‘Wait for development’ bedeutet daher meist, dass der gemeinsame Fortschritt noch fehlt – es ist kein Kontofehler.",
      h2: "Schnelle Freischalt-Checkliste",
      steps: ["Öffne das Version-2.1-Event, wähle Build the Cloudstair und verfolge Cloudtop Ascent: Foundation über Go to Quest.", "Folge in Mohist City der Markierung, sprich mit den Bau-NPCs und liefere die Tutorial-Materialien.", "Absolviere Mountain Express und Materialziele für Work Merit und Baufortschritt.", "Prüfe den serverweiten Balken. Erst das gemeinsame Ziel öffnet Heaven’s Threshold."],
      blocker: "Warum bleibt Heaven’s Threshold gesperrt?",
      fixes: ["Schließe zuerst das Foundation-Tutorial ab.", "Hole abgeschlossene Aktivitätsziele ab.", "Prüfe den Serverbalken, nicht nur dein Work Merit.", "Logge dich nach Abschluss des gemeinsamen Ziels neu ein, falls der Eingang nicht aktualisiert wird."],
      evidence: "Serverweites Cloudstair-Ziel und Heaven’s-Threshold-Verknüpfung sind offiziell. Menünamen und Foundation-Kurzroute sind eine aktuelle SERP-Synthese und können je nach Clientsprache abweichen.",
    },
    labyrinth: {
      title: "Where Winds Meet Evershift Labyrinth: Lösung des Drehmechanismus",
      intro: "Das Evershift Labyrinth ist eine Version-2.1-Jianghu-Legacy unter dem Divinecraft Pavilion. Der Drehblock wirkt wie ein Kletterrätsel, wird aber mit vier Aktionen gelöst: Hebel, zeitiger Einstieg, goldener Vogel, Ausgang.",
      h2: "Den Drehmechanismus passieren",
      steps: ["Ziehe den Hebel vor dem Drehblock.", "Warte, bis die hohle Öffnung zur Plattform zeigt, und springe hinein.", "Aktiviere innen das goldene Vogelgerät.", "Gehe durch die neu ausgerichtete Öffnung in den gegenüberliegenden Korridor."],
      blocker: "Häufige Fehler",
      fixes: ["Springe nicht vor dem Hebelzug.", "Der Einstieg allein reicht nicht; der goldene Vogel muss aktiviert werden.", "Landest du wieder am Start, steige erneut ein und aktiviere zuerst den Vogel.", "‘Wait for development’ kann anschließend die separate serverweite Heaven’s-Threshold-Sperre sein."],
      evidence: "Schauplatz und bewegliche Holzverbindungen sind offiziell beschrieben. Die konkrete Drehblockfolge wurde mit einem aktuellen Puzzle-Guide und Community-Nachfrage abgeglichen.",
    },
    source: "Quellen und Aktualität",
    official: "Offizieller Version-2.1-Entwicklerbrief",
    serp: "Aktuelle Schrittanleitung",
    video: "Drittanbieter-Mirror des Heaven’s-Threshold-Chapter-2-Trailers · GameTrailers",
    labyrinthVideo: "Creator-Quest-Walkthrough · Game Guides Channel",
    related: "Weiter durch Hidden Mountain",
  },
} as const;

export default function HiddenMountainChapterTwoGuidePage({ language, kind }: { language: Language; kind: Kind }) {
  const ui = content[language];
  const page = ui[kind];
  const base = prefix[language];
  const secondaryUrl = kind === "cloudtop"
    ? "https://allthings.how/where-winds-meet-how-to-get-2-free-lingering-melody-in-cloudtop-ascent/"
    : "https://allthings.how/where-winds-meet-pass-through-the-rotating-mechanism-in-evershift-labyrinth/";
  const videoId = kind === "cloudtop" ? "rh6vQU8nacg" : "aqZ1F_PS5rQ";
  const videoTitle = kind === "cloudtop" ? ui.video : ui.labyrinthVideo;

  return (
    <article className="min-h-screen space-y-10 bg-ink-wash pb-20">
      <HomeHubBacklink language={language} />
      <header className="rounded-3xl border border-violet-400/30 bg-slate-950/85 p-6 shadow-2xl sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">{ui.checked}</p>
        <h1 className="mt-3 max-w-5xl text-balance text-4xl font-bold text-slate-50 sm:text-5xl">{page.title}</h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{page.intro}</p>
      </header>

      <section className="grid gap-7 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-50">{page.h2}</h2>
          <ol className="mt-5 space-y-3">
            {page.steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/75 p-4 text-sm leading-6 text-slate-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20 font-bold text-violet-200">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-300">{videoTitle}</p>
          <LiteYouTubeEmbed videoId={videoId} title={videoTitle} poster="/background/bg4.webp" analytics={{ eventName: "guide_video_play", params: { guide: kind } }} />
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs font-semibold text-sky-200 hover:text-sky-100">Open the attributed YouTube source ↗</a>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">{page.blocker}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">{page.fixes.map((fix) => <li key={fix} className="rounded-xl border border-amber-300/20 bg-slate-950/50 p-4 text-sm leading-6 text-slate-200">• {fix}</li>)}</ul>
      </section>

      <aside className="rounded-3xl border border-slate-700 bg-slate-950/75 p-6">
        <h2 className="font-semibold text-slate-100">{ui.source}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">{page.evidence}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="https://www.wherewindsmeetgame.com/news/official/821devletter.html" target="_blank" rel="noreferrer" className="rounded-full border border-sky-400/50 px-3 py-1 text-xs font-semibold text-sky-200">{ui.official} ↗</a>
          <a href={secondaryUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-3 py-1 text-xs font-semibold text-slate-200">{ui.serp} ↗</a>
        </div>
      </aside>

      <nav className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6">
        <h2 className="font-semibold text-emerald-100">{ui.related}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={`${base}/guides/hidden-mountain`} className="rounded-full border border-emerald-300/40 px-4 py-2 text-sm font-semibold text-emerald-100">Hidden Mountain →</Link>
          <Link href={`${base}/guides/${kind === "cloudtop" ? "evershift-labyrinth" : "heavens-threshold-cloudstair"}`} className="rounded-full border border-violet-300/40 px-4 py-2 text-sm font-semibold text-violet-100">{kind === "cloudtop" ? "Evershift Labyrinth" : "Heaven’s Threshold / Cloudstair"} →</Link>
          <Link href={`${base}/guides/mirkvale`} className="rounded-full border border-rose-300/40 px-4 py-2 text-sm font-semibold text-rose-100">Mirkvale →</Link>
          <Link href={`${base}/guides/zenithstride`} className="rounded-full border border-sky-300/40 px-4 py-2 text-sm font-semibold text-sky-100">Zenithstride →</Link>
          <Link href={`${base}/tools/interactive-map`} className="rounded-full border border-sky-300/40 px-4 py-2 text-sm font-semibold text-sky-100">Interactive map →</Link>
        </div>
      </nav>
    </article>
  );
}
