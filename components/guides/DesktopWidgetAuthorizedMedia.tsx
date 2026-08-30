import CdnImage from "@/components/CdnImage";

type Locale = "en" | "de" | "vi";

const captures = [
  { src: "/guides/desktop-widget/reddit-daily-assistant-widget.png", width: 1685, height: 917 },
  { src: "/guides/desktop-widget/reddit-widget-screenshot.jpeg", width: 1080, height: 2340 },
  { src: "/guides/desktop-widget/reddit-widget-region-availability.png", width: 1080, height: 1500 },
  { src: "/guides/desktop-widget/reddit-mobile-launch-region.png", width: 1080, height: 2219 },
] as const;

const copy = {
  en: {
    title: "Community screenshots: what “Desktop Widget” refers to",
    boundary:
      "These are dated community captures, not official documentation. Use them to recognize the screens, then verify region, device, and app-version availability in the current official listing.",
    alts: [
      "In-game Daily Assistant screen that labels a mobile feature as Desktop Widget",
      "Android widget gallery showing Where Winds Meet Daily Assistant widgets",
      "Google Play listing showing Where Winds Meet unavailable in the viewer's region",
      "Google Play listing with a Widgets section and regional availability message",
    ],
    captions: [
      "Community capture of the in-game label that prompted the original question.",
      "Community capture of the Android home-screen widget gallery.",
      "Community capture illustrating a region-availability restriction.",
      "Community capture illustrating where a Widgets section may appear in Google Play.",
    ],
  },
  de: {
    title: "Community-Screenshots: Was mit „Desktop Widget“ gemeint ist",
    boundary:
      "Dies sind datierte Community-Aufnahmen, keine offizielle Dokumentation. Nutze sie zum Wiedererkennen und prüfe Region, Gerät und App-Version im aktuellen offiziellen Store-Eintrag.",
    alts: [
      "Daily-Assistant-Bildschirm im Spiel bezeichnet eine Mobile-Funktion als Desktop Widget",
      "Android-Widget-Galerie mit Where-Winds-Meet-Daily-Assistant-Widgets",
      "Google-Play-Eintrag zeigt Where Winds Meet als regional nicht verfügbar",
      "Google-Play-Eintrag mit Widgets-Bereich und regionalem Verfügbarkeitshinweis",
    ],
    captions: [
      "Community-Aufnahme der Beschriftung, die zur ursprünglichen Frage führte.",
      "Community-Aufnahme der Android-Startbildschirm-Widget-Galerie.",
      "Community-Aufnahme einer regionalen Verfügbarkeitssperre.",
      "Community-Aufnahme der möglichen Widgets-Anzeige in Google Play.",
    ],
  },
  vi: {
    title: "Ảnh chụp cộng đồng: “Desktop Widget” đang nói đến gì",
    boundary:
      "Đây là ảnh chụp cộng đồng có ngày tháng, không phải tài liệu chính thức. Chỉ dùng để nhận diện màn hình rồi kiểm tra khu vực, thiết bị và phiên bản app trong trang store chính thức hiện tại.",
    alts: [
      "Màn hình Daily Assistant trong game gọi một tính năng mobile là Desktop Widget",
      "Gallery widget Android hiển thị các widget Daily Assistant của Where Winds Meet",
      "Trang Google Play báo Where Winds Meet không khả dụng tại khu vực người xem",
      "Trang Google Play có mục Widgets và thông báo khả dụng theo khu vực",
    ],
    captions: [
      "Ảnh chụp cộng đồng về nhãn trong game đã tạo ra câu hỏi ban đầu.",
      "Ảnh chụp cộng đồng về gallery widget trên màn hình chính Android.",
      "Ảnh chụp cộng đồng minh họa giới hạn khả dụng theo khu vực.",
      "Ảnh chụp cộng đồng minh họa nơi mục Widgets có thể xuất hiện trên Google Play.",
    ],
  },
} as const satisfies Record<
  Locale,
  { title: string; boundary: string; alts: readonly string[]; captions: readonly string[] }
>;

export default function DesktopWidgetAuthorizedMedia({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <section className="space-y-5 rounded-3xl border border-sky-400/25 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-50">{content.title}</h2>
        <p className="max-w-4xl text-xs leading-5 text-amber-200">{content.boundary}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {captures.map((capture, index) => (
          <figure key={capture.src} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src={capture.src}
              alt={content.alts[index]}
              width={capture.width}
              height={capture.height}
              loading="lazy"
              className={index === 0 ? "h-auto w-full" : "mx-auto h-auto w-full max-w-[420px]"}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <figcaption className="p-4 text-xs leading-5 text-slate-400">
              {content.captions[index]} Publisher: Reddit community thread.
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
