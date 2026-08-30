import CdnImage from "@/components/CdnImage";

type Locale = "en" | "de" | "vi";

const captures = [
  { src: "/guides/mistveil-city/allthings/Screenshot-2026-01-10-100403-1.png", width: 1206, height: 678 },
  { src: "/guides/mistveil-city/allthings/image-1048-1.webp", width: 1133, height: 637 },
  { src: "/guides/mistveil-city/allthings/image-1049-1-1.webp", width: 1095, height: 616 },
  { src: "/guides/mistveil-city/allthings/image-1050.webp", width: 1025, height: 639 },
  { src: "/guides/mistveil-city/allthings/image-1051-1.webp", width: 1163, height: 654 },
  { src: "/guides/mistveil-city/allthings/image-1052-1.webp", width: 1002, height: 564 },
  { src: "/guides/mistveil-city/allthings/image-1053-1.webp", width: 1036, height: 583 },
  { src: "/guides/mistveil-city/allthings/image-1054-1.webp", width: 1036, height: 583 },
  { src: "/guides/mistveil-city/allthings/image-1055-1.webp", width: 978, height: 550 },
  { src: "/guides/mistveil-city/allthings/image-1056-1.webp", width: 1006, height: 566 },
  { src: "/guides/mistveil-city/allthings/image-1057-1.webp", width: 1060, height: 596 },
  { src: "/guides/mistveil-city/allthings/image-1058-1.webp", width: 1083, height: 609 },
  { src: "/guides/mistveil-city/allthings/image-1059-1.webp", width: 1121, height: 631 },
  { src: "/guides/mistveil-city/allthings/image-1060-1.webp", width: 987, height: 555 },
  { src: "/guides/mistveil-city/allthings/image-1061-1.webp", width: 1364, height: 767 },
  { src: "/guides/mistveil-city/allthings/image-1062-1.webp", width: 1094, height: 615 },
] as const;

const copy = {
  en: {
    title: "Historical Mistveil visual walkthrough",
    intro:
      "These January 2026 captures make the archived Ephemeral Blight route easier to follow. Match objectives against your live client because labels and encounter state can change.",
    boundary:
      "Historical third-party walkthrough media; it is not current-build proof and does not override live objectives or official patch notes.",
    alts: [
      "Mistveil City boundary message in Where Winds Meet",
      "Mistveil region covered by poisonous fog",
      "Player speaking with Zhai Xu about the pendant and Mistveil fog",
      "Player using Meridian Touch on the wind chime outside Zhai Xu's house",
      "Thousand-Wish Amendment shown in the quest-items inventory",
      "Soulshade Umbrella Post Station location used for the Hollow Abode cure",
      "Stealth approach to the guard near the Hollow Abode cure",
      "Aureate Pavilion outpost location in Mistveil Forest",
      "Aureate Pavilion cure inside the central hut",
      "Player handing the three Mistveil Forest cure notes to Zhai Xu",
      "Zhai Xu giving the player medicine near Mistveil Forest",
      "Aureate Pavilion guards encountered inside Mistveil Forest",
      "Dawn-to-Dusk blooms being burned with fire arrows near the jade pendant",
      "Underground route followed after collecting the jade pendant",
      "Sun Buqi deduction interface with clues being paired",
      "Sleeping Puppet leading the route through the cave",
    ],
  },
  de: {
    title: "Historischer visueller Mistveil-Walkthrough",
    intro:
      "Diese Aufnahmen vom Januar 2026 veranschaulichen den archivierten Ablauf von Ephemeral Blight. Gleiche Ziele mit deinem Live-Client ab, da Beschriftungen und Begegnungsstatus variieren können.",
    boundary:
      "Historisches Walkthrough-Material eines Drittanbieters; kein Beleg für den aktuellen Build und kein Ersatz für Live-Ziele oder offizielle Patch Notes.",
    alts: [
      "Sperrmeldung an der Grenze von Mistveil City in Where Winds Meet",
      "Mistveil-Region unter giftigem Nebel",
      "Gespräch mit Zhai Xu über den Anhänger und den Mistveil-Nebel",
      "Meridian Touch am Windspiel vor Zhai Xus Haus",
      "Thousand-Wish Amendment im Quest-Gegenstände-Inventar",
      "Soulshade Umbrella Post Station für den Hollow-Abode-Cure",
      "Schleichweg zum Wächter beim Hollow-Abode-Cure",
      "Außenposten Aureate Pavilion in Mistveil Forest",
      "Aureate-Pavilion-Cure in der zentralen Hütte",
      "Übergabe der drei Mistveil-Forest-Cure-Notizen an Zhai Xu",
      "Zhai Xu übergibt Medizin nahe Mistveil Forest",
      "Aureate-Pavilion-Wachen in Mistveil Forest",
      "Dawn-to-Dusk-Blüten werden beim Jadeanhänger mit Feuerpfeilen verbrannt",
      "Untergrundroute nach dem Aufheben des Jadeanhängers",
      "Sun-Buqi-Deduktionsoberfläche mit kombinierten Hinweisen",
      "Sleeping Puppet führt durch die Höhle",
    ],
  },
  vi: {
    title: "Walkthrough hình ảnh Mistveil theo mốc lịch sử",
    intro:
      "Các ảnh chụp tháng 1/2026 này giúp minh họa tuyến Ephemeral Blight được lưu trữ. Hãy đối chiếu mục tiêu với client live vì nhãn và trạng thái encounter có thể thay đổi.",
    boundary:
      "Media walkthrough lịch sử của bên thứ ba; không phải bằng chứng cho build hiện tại và không thay thế mục tiêu live hoặc patch notes chính thức.",
    alts: [
      "Thông báo khóa tại ranh giới Mistveil City trong Where Winds Meet",
      "Khu Mistveil bị bao phủ bởi sương độc",
      "Nhân vật nói chuyện với Zhai Xu về mặt dây chuyền và sương Mistveil",
      "Dùng Meridian Touch lên chuông gió bên ngoài nhà Zhai Xu",
      "Thousand-Wish Amendment trong túi đồ nhiệm vụ",
      "Vị trí Soulshade Umbrella Post Station để lấy Hollow Abode cure",
      "Đường lén tiếp cận lính gác gần Hollow Abode cure",
      "Tiền đồn Aureate Pavilion trong Mistveil Forest",
      "Aureate Pavilion cure trong căn nhà trung tâm",
      "Giao ba ghi chú Mistveil Forest cure cho Zhai Xu",
      "Zhai Xu trao thuốc gần Mistveil Forest",
      "Lính Aureate Pavilion trong Mistveil Forest",
      "Đốt hoa Dawn-to-Dusk bằng tên lửa gần mặt dây chuyền ngọc",
      "Đường xuống lòng đất sau khi nhặt mặt dây chuyền ngọc",
      "Giao diện suy luận Sun Buqi đang ghép manh mối",
      "Sleeping Puppet dẫn đường qua hang động",
    ],
  },
} as const satisfies Record<Locale, { title: string; intro: string; boundary: string; alts: readonly string[] }>;

export default function MistveilCityAuthorizedMedia({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <section className="space-y-5 rounded-3xl border border-sky-400/25 bg-slate-950/80 p-6 shadow-lg">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">{content.title}</h2>
        <p className="max-w-4xl text-sm leading-6 text-slate-300">{content.intro}</p>
        <p className="text-xs leading-5 text-amber-200">{content.boundary}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {captures.map((capture, index) => (
          <figure key={capture.src} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src={capture.src}
              alt={content.alts[index]}
              width={capture.width}
              height={capture.height}
              loading="lazy"
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption className="p-4 text-xs leading-5 text-slate-400">
              {content.alts[index]}. Publisher: AllThings.How; game capture credited by the publisher to NetEase
              {index > 1 ? " via YouTube/@100% Guides" : ""}.
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
