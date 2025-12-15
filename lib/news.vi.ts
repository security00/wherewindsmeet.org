import type { NewsItem } from "./news";

// Vietnamese-localized summaries of official Where Winds Meet news.
// Source links are kept identical to the English list for parity.
export const newsItems: NewsItem[] = [
  {
    id: "updates-game-installation-playstation-store",
    title: "Cập nhật về cài đặt game & PlayStation Store",
    date: "2025-12-12",
    type: "announcement",
    summary:
      "Thông báo cho người từng tham gia Closed Beta: hãy gỡ bản playtest và cài lại bản phát hành chính thức. Mua hàng trên PlayStation Store là theo nền tảng: Echo Beads và giá trị gói tháng chỉ hiển thị/sử dụng trên PSN; thưởng Echo Jade lần nạp đầu chỉ 1 lần cho mỗi tài khoản trên toàn nền tảng; quà Premium Battle Pass và nhận cấp phụ thuộc nền tảng bạn mua (bản Elite + Premium cho phép nhận trên cả hai).",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/1212notice.html",
    tags: ["PlayStation", "Cài đặt", "Nạp tiền", "Battle Pass", "Cross-platform"],
  },
  {
    id: "timeless-bonds-1-1-overview",
    title: "[Timeless Bonds] Tổng quan cập nhật phiên bản 1.1 (12/12)",
    date: "2025-12-11",
    type: "announcement",
    summary:
      "Phiên bản 1.1 ra mắt lúc 21:00 UTC ngày 11/12: bản đồ Roaring Sands (Kaifeng), world boss mới Feng Ruzhi, môn phái Velvet Shade, thử thách Taiping Mausoleum (Path Trials), sự kiện The Great Faceologist, ngoại hình mới, cùng danh sách dài sửa lỗi combat/UI và tối ưu server/mạng.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/TimelessBonds.html",
    tags: ["Version 1.1", "Cập nhật", "Bản đồ mới", "World Boss", "Sự kiện"],
  },
  {
    id: "mobile-launch-faq",
    title: "FAQ ra mắt bản Mobile",
    date: "2025-12-09",
    type: "guide",
    summary:
      "Xác nhận mobile hỗ trợ cross-progression và cross-play, nhưng lưu ý: người chơi PC/console cần liên kết tài khoản trước khi tạo nhân vật trên mobile. Mức độ khó trên mobile ban đầu giới hạn ở Story/Recommended; Expert mở ở Lv30; chế độ Legend từ PC có thể kế thừa. Assist Deflection bật mặc định; layout phím/chạm chưa tùy biến; một số cutscene tạm phát dạng video cho tới khi tối ưu thêm.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/MobileFAQ.html",
    tags: ["Mobile", "Cross-progression", "Độ khó", "Điều khiển"],
  },
  {
    id: "closed-beta-lucky-draw",
    title: "Thông báo: Lucky Draw đăng ký trước Closed Beta",
    date: "2025-12-08",
    type: "event",
    summary:
      "Người tham gia Lucky Draw thời Closed Beta có thể kiểm tra quà trên trang sự kiện; hạn chót nộp/liên kết được gia hạn tới 14/12 (UTC). Hãy liên kết tài khoản sự kiện ban đầu với nhân vật hiện tại để nhận quà theo đợt sau 20/12. Nếu không thể liên kết, gửi email đến wherewindsmeet@global.netease.com kèm email đăng ký sự kiện và bằng chứng phần thưởng.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/luckydraw.html",
    tags: ["Lucky Draw", "Closed Beta", "Phần thưởng"],
  },
  {
    id: "account-suspension-dec-2025",
    title: "Khóa tài khoản do vi phạm (Ban report)",
    date: "2025-12-06",
    type: "announcement",
    summary:
      "Cập nhật chống gian lận: Eastwind Pavilion báo cáo khoảng 5.000 tài khoản bị khóa vì cheat, speed hack, macro và công cụ không công bằng (15/11–05/12). Hình phạt gồm loại khỏi bảng xếp hạng, hạn chế chế độ và khóa tạm thời/vĩnh viễn. Người chơi được khuyến khích báo cáo hành vi vi phạm và liên hệ CSKH khi cần.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/BanReport.html",
    tags: ["Anti-cheat", "Ban report", "Fair play"],
  },
  {
    id: "hearts-unite-post-launch-letter",
    title: "Thư sau ra mắt: Hearts Unite as the Winds Meet",
    date: "2025-11-23",
    type: "announcement",
    summary:
      "Thư ngỏ sau ra mắt: đội ngũ nêu hướng xử lý routing và độ trễ online, cùng các cải thiện gần hạn cho bản địa hóa, lồng tiếng, tutorial và gợi ý puzzle; giữa tháng 12 sẽ có fix riêng cho độ trễ solo. Ngoài ra còn đề cập tối ưu PS5, giải pháp multi-character và các cập nhật sắp tới như hỗ trợ Steam Deck, hiển thị nhiều múi giờ, tách trang phục, PS5 Pro PSSR và nâng cấp âm thanh.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/official/251123.html",
    tags: ["Ổn định", "Bản địa hóa", "PS5", "Steam Deck"],
  },
  {
    id: "global-launch-event-rewards",
    title: "Wind's Welcome Gifts — Sự kiện & phần thưởng ra mắt toàn cầu",
    date: "2025-11-14",
    type: "event",
    summary:
      "Tổng hợp sự kiện mừng ra mắt toàn cầu và lộ trình phần thưởng: đăng nhập nhiều mốc, nhiệm vụ hoạt động và các cosmetics đặc biệt có thể nhận chỉ bằng cách chơi trong thời gian sự kiện.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/LaunchGifts.html",
    tags: ["Global launch", "Sự kiện", "Phần thưởng"],
  },
  {
    id: "global-launch-redefine-everything",
    title: "Redefine Everything — Ra mắt toàn cầu Where Winds Meet",
    date: "2025-11-14",
    type: "announcement",
    summary:
      "Thư ra mắt 1.0 từ đội ngũ phát triển: tầm nhìn về Wuxia, quy mô thế giới mở, triết lý combat cho từng vũ khí, và cam kết mô hình kinh doanh ưu tiên cosmetics, tránh pay-to-win.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/SeversLive.html",
    tags: ["Global launch", "Thư dev", "Monetization"],
  },
  {
    id: "cross-progression-account-linking-guide",
    title: "Hướng dẫn liên kết tài khoản (Cross-Progression)",
    date: "2025-11-10",
    type: "guide",
    summary:
      "Giải thích cách liên kết tài khoản Where Winds Meet giữa Steam, Epic, launcher PC chính thức và PlayStation để dùng chung tiến độ. Lưu ý quan trọng: phải liên kết trước khi tạo nhân vật mới trên nền tảng mới. Đồng thời làm rõ cách nhận quà beta và preorder.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/CrossPlatform.html",
    tags: ["Cross-progression", "Tài khoản", "Multi-platform"],
  },
  {
    id: "pc-launcher-installation-guide",
    title: "Hướng dẫn cài đặt PC Launcher",
    date: "2025-11-03",
    type: "guide",
    summary:
      "Hướng dẫn tải và cài launcher PC chính thức: khuyến nghị cài trên SSD, lưu ý về ngôn ngữ/đường dẫn thư mục cài đặt, và cấu hình tối thiểu/khuyến nghị/cao cho PC và laptop.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/InstallGuide.html",
    tags: ["PC", "Launcher", "Cấu hình"],
  },
  {
    id: "beta-access-download-guide",
    title: "Hướng dẫn nhận quyền truy cập beta & tải game",
    date: "2025-07-23",
    type: "beta",
    summary:
      "Hướng dẫn người được chọn beta: cách đổi code và tải Where Winds Meet trên Steam và PlayStation, kèm lưu ý cài trên SSD và các bước khác nhau theo từng nền tảng để tìm và chạy client.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/2025/installguide.html",
    tags: ["Closed beta", "Tải game", "Steam", "PS5"],
  },
  {
    id: "final-test-announcement",
    title: "Where Winds Meet – The Final Test (Closed Beta)",
    date: "2025-06-30",
    type: "beta",
    summary:
      "Thông báo Closed Beta The Final Test: thời gian đăng ký, mốc giờ test cụ thể, ngôn ngữ/nền tảng hỗ trợ, cùng FAQ ngắn về tiêu chí chọn, có giữ tiến độ hay không, hỗ trợ tay cầm và cấu hình PC.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/2025/thefinaltestEN.html",
    tags: ["Final test", "Closed beta", "Đăng ký"],
  },
];

export const latestNewsDate = newsItems.reduce(
  (latest, item) => (item.date > latest ? item.date : latest),
  "1970-01-01",
);

