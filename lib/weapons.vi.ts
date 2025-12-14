import type { Weapon } from "./weapons";

export const weapons: Weapon[] = [
  {
    id: "dual-blades",
    name: "Song đao (Dual Blades)",
    role: "Assassin",
    tier: "S",
    description:
      "Song đao là lựa chọn cận chiến tốc độ cao, thiên về burst ở tầm rất gần. Tầm với ngắn, nhưng hoạt ảnh nhanh và nhiều khung hủy chiêu (cancel) giúp áp sát, khóa mục tiêu và kết liễu kẻ địch lẻ trước khi họ kịp phản ứng. Trong Where Winds Meet, song đao phù hợp với người chơi thích đấu tay đôi chủ động, dash mạo hiểm và trừng phạt mạnh khi boss bị stagger.",
    officialArt: "/weapons/official/wq1_fa52885f.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68998175cef2669e25ccXI9UTT1R03",
    localIcon: "/weapons/dualblades.png",
    buildLink: "/guides/builds#dual-blades",
  },
  {
    id: "sword",
    name: "Kiếm (Sword)",
    role: "Balanced",
    tier: "B",
    description:
      "Kiếm là vũ khí “all‑rounder” dành cho người chơi ưu tiên sự linh hoạt. Bộ chiêu chuyển mượt giữa công và thủ, nhịp ra đòn dễ nắm, combo thân thiện và có đủ tiện ích để ghép vào nhiều hướng build. Trong Where Winds Meet, đây là lựa chọn rất hợp cho người mới muốn học hệ thống cốt lõi nhưng vẫn có vũ khí ổn định để theo đến giai đoạn cuối game.",
    officialArt: "/weapons/official/wq2_222b1a27.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e723794543d3ce61613fY6UrRbjb03",
    localIcon: "/weapons/sword.png",
    buildLink: "/guides/builds#sword-starter",
  },
  {
    id: "spear",
    name: "Thương (Spear)",
    role: "Bleed",
    tier: "A",
    description:
      "Thương mang lại tầm với và khả năng kiểm soát không gian rất “kinh điển”, cho phép chủ động quyết định khi nào kẻ địch được bước vào vùng nguy hiểm. Các đòn đâm/quét phủ góc rộng, vừa an toàn trong PVE vừa đủ công cụ để tranh chấp khoảng cách trong đấu tay đôi. Trong Where Winds Meet, thương hợp với lối chơi tuyến trước ổn định, thích nhịp giao tranh có cấu trúc, kiểm soát tầm và đối phó mục tiêu cơ động.",
    officialArt: "/weapons/official/wq3_12c4540a.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6866bdacee74aec95fcd9mUsWJ6p03",
    localIcon: "/weapons/spear.png",
    buildLink: "/guides/builds#sword-spear-bleed",
  },
  {
    id: "mo-blade",
    name: "Mo Blade (Đại đao)",
    role: "Tank",
    tier: "A",
    description:
      "Mo Blade dành cho người chơi muốn mỗi nhát chém đều “nặng tay” và có ý nghĩa. Nhịp vung chậm hơn, nhưng mỗi đòn có thể quét nhóm quái, bào mạnh máu boss và khi kết hợp đúng công cụ hồi phục/giảm sát thương sẽ rất lì đòn. Trong Where Winds Meet, Mo Blade hợp với build bruiser kiên nhẫn, kiểm soát nhịp đánh thay vì lao theo mọi khe hở nhỏ.",
    officialArt: "/weapons/official/wq4_ee594198.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c682571f08da387bae062ioRsVf6s03",
    localIcon: "/weapons/moblade.png",
    buildLink: "/guides/builds#mo-blade",
  },
  {
    id: "fan",
    name: "Quạt (Fan)",
    role: "Support",
    tier: "B",
    description:
      "Quạt dẫn nội lực ra ngoài: những động tác mềm mại trở thành áp lực tầm xa và công cụ hỗ trợ. Bạn cấu rỉa từ xa, làm mềm đội hình quái bằng kỹ năng diện rộng và dùng heal/utility để giữ nhịp cho bản thân lẫn đồng đội. Hợp với người chơi kiểm soát vị trí tốt, ưu tiên hỗ trợ team và thích tempo giao tranh điềm tĩnh hơn.",
    officialArt: "/weapons/official/wq5_58ac46bd.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68778175cef2669e231f6hiIvVK103",
    localIcon: "/weapons/fan.png",
    buildLink: "/guides/builds#umbrella-healer",
  },
  {
    id: "umbrella",
    name: "Ô (Umbrella)",
    role: "Parry/Konter",
    tier: "B",
    description:
      "Ô trông mong manh nhưng lại có bộ công cụ phòng thủ và phản công rất “đã tay”: chặn/đỡ, canh nhịp phản đòn và chuyển thẳng sang chuỗi đánh trừng phạt lỗi của đối phương. Phù hợp với người chơi phản xạ tốt, thích parry, di chuyển linh hoạt và lối chơi vừa an toàn vừa đẹp mắt.",
    officialArt: "/weapons/official/wq6_f29046e1.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e7547f0a2d1e15a832beLfbRNdyu03",
    localIcon: "/weapons/umbrella.png",
    buildLink: "/guides/builds#umbrella-control",
  },
  {
    id: "rope-dart",
    name: "Phi tiêu dây (Rope Dart)",
    role: "Mobile Control / Picks",
    tier: "S",
    description:
      "Phi tiêu dây là sự pha trộn “stylish” giữa kéo khóa mục tiêu và công cụ kết liễu: từ tầm trung có thể kéo lệch nhịp đối phương, lập tức bù khoảng trống hoặc kéo/điều vị để bảo vệ đồng đội. Vũ khí này thưởng cho người chơi đọc chuyển động tốt, chọn vị trí sáng tạo và biết biến những pha rút lui của đối thủ thành sai lầm.",
    officialArt: "/weapons/official/wq7_d8a85874.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6889be134a7f3324d9f6gQMKFy6i03",
    localIcon: "/weapons/ropedart.png",
    buildLink: "/guides/builds#rope-dart-hunter",
  },
];
