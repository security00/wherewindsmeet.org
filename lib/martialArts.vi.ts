import type { MartialArtPath, MartialArtWeapon } from "./martialArts";

export const martialArtPaths: MartialArtPath[] = [
  {
    id: "bellstrike-splendor",
    name: "Bellstrike - Splendor",
    focus: "Cơ động cao, đòn nạp đơn mục tiêu mạnh – đặc biệt hiệu quả khi đánh boss.",
    flavor:
      "Phù hợp với người thích lao vào, nối chuỗi charge và rút ra trước khi đối thủ kịp phản đòn.",
    relatedWeapons: ["Nameless Sword", "Nameless Spear"],
  },
  {
    id: "bellstrike-umbra",
    name: "Bellstrike - Umbra",
    focus: "Áp lực chảy máu/vết thương cơ động, đánh nhanh và có nhiều phương án né.",
    flavor:
      "Tập trung mở vết thương, để đối thủ “rỉ máu” trong khi bạn liên tục tái định vị.",
    relatedWeapons: ["Strategic Sword", "Heavenquaker Spear"],
  },
  {
    id: "silkbind-jade",
    name: "Silkbind - Jade",
    focus: "Kiểm soát tầm xa, đánh trên không và zoning thanh thoát, cơ động tốt.",
    flavor:
      "Thưởng cho timing và spacing chuẩn – hợp đấu tay đôi và lối chơi giữ khoảng cách đẹp mắt.",
    relatedWeapons: ["Inkwell Fan", "Vernal Umbrella"],
  },
  {
    id: "silkbind-deluge",
    name: "Silkbind - Deluge",
    focus: "Bộ kỹ năng hỗ trợ: hồi máu, hồi sinh và buff sát thương cho tổ đội.",
    flavor:
      "Thiết kế để giữ đồng đội sống và buff nhịp, trong khi bạn gây sát thương từ góc an toàn hơn.",
    relatedWeapons: ["Panacea Fan", "Soulshade Umbrella"],
  },
  {
    id: "bamboocut-wind",
    name: "Bamboocut - Wind",
    focus: "Chuỗi DPS không ngừng và cơ động cực cao, đổi lại phòng thủ sẵn có thấp.",
    flavor:
      "Chơi như glass cannon: nghẹt thở áp lực liên tục, ưu tiên né và di chuyển thay vì đứng tank.",
    relatedWeapons: ["Infernal Twinblades", "Mortal Rope Dart"],
  },
  {
    id: "stonesplit-might",
    name: "Stonesplit - Might",
    focus: "Thế đứng cứng, kháng khống chế và phủ AoE đơn giản, dễ dùng.",
    flavor:
      "Được xây để “đứng tuyến”, chịu control và quét nhóm quái mà không bị gãy nhịp.",
    relatedWeapons: ["Stormbreaker Spear", "Thundercry Blade"],
  },
];

export const martialArtWeapons: MartialArtWeapon[] = [
  {
    id: "heavenquaker-spear",
    name: "Heavenquaker Spear",
    pathId: "bellstrike-umbra",
    image: "/martial-arts/weapons/heavenquaker-spear.png",
    mainSkills: ["Sweep All", "Sober Sorrow", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Drifting Thrust / Spear - Heavy Attack"],
    unlockMethods: [
      "Trộm chiêu từ sư phụ tại Heavenquaker Spear Sanctum.",
      "Gia nhập phái Raging Tides.",
    ],
  },
  {
    id: "infernal-twinblades",
    name: "Infernal Twinblades",
    pathId: "bamboocut-wind",
    image: "/martial-arts/weapons/infernal-twinblades.png",
    mainSkills: ["Calamity's Greed", "Addled Mind", "Dual Blades - Dual-Weapon Skill"],
    basicSkills: ["Dual Blades - Light Attack / Heaven's Wrath"],
    chargedSkills: ["Flamelash"],
    unlockMethods: [
      "Trộm chiêu từ sư phụ tại Midnight Mercy Sanctum.",
      "Gia nhập phái Midnight Mercy.",
      "Nhận từ Qi Sheng sau khi nộp Oddity đầu tiên.",
    ],
  },
  {
    id: "inkwell-fan",
    name: "Inkwell Fan",
    pathId: "silkbind-jade",
    image: "/martial-arts/weapons/inkwell-fan.png",
    mainSkills: ["Mountain Sky", "Jadewind Shield", "Fan - Conversion"],
    basicSkills: ["Fan - Light Attack / Forsaken Fame"],
    chargedSkills: ["Fan - Heavy Attack / Moonlit Spring"],
    unlockMethods: [
      "Trộm chiêu từ sư phụ tại Inkwell Fan Sanctum.",
      "Gia nhập phái Silver Needle.",
    ],
  },
  {
    id: "mortal-rope-dart",
    name: "Mortal Rope Dart",
    pathId: "bamboocut-wind",
    image: "/martial-arts/weapons/mortal-rope-dart.png",
    mainSkills: ["Rodent Rampage", "Bladebound Thread", "Rope Dart - Conversion"],
    basicSkills: ["Rope Dart - Light Attack / Coiled Loong"],
    chargedSkills: ["Rodent's Resilience"],
    unlockMethods: [
      "Gia nhập phái Nine Mortal Ways.",
      "Cải trang thành học viên để xâm nhập Nine Mortal Ways.",
    ],
  },
  {
    id: "nameless-spear",
    name: "Nameless Spear",
    pathId: "bellstrike-splendor",
    image: "/martial-arts/weapons/nameless-spear.png",
    mainSkills: ["Legion Breaker", "Qiankun's Lock", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Storm Dance / Spear - Heavy Attack"],
    unlockMethods: ["Mở sẵn theo mặc định."],
  },
  {
    id: "nameless-sword",
    name: "Nameless Sword",
    pathId: "bellstrike-splendor",
    image: "/martial-arts/weapons/nameless-sword.png",
    mainSkills: ["Shadow Step", "Fearless Lunge", "Sword - Conversion"],
    basicSkills: ["Sword - Light Attack"],
    chargedSkills: ["Homeless Charge"],
    unlockMethods: ["Mở sẵn theo mặc định."],
  },
  {
    id: "vernal-umbrella",
    name: "Vernal Umbrella",
    pathId: "silkbind-jade",
    image: "/martial-arts/weapons/vernal-umbrella.png",
    mainSkills: ["Unfaded Flower", "Spring Sorrow", "Umbrella - Conversion"],
    basicSkills: ["Umbrella - Light Attack / Spring Away"],
    chargedSkills: ["Apricot Heaven / Colorful Phoenix"],
    unlockMethods: [
      "Trộm chiêu từ sư phụ tại Time Tower.",
      "Nhận từ Qi Sheng sau khi nộp Oddity đầu tiên.",
    ],
  },
  {
    id: "panacea-fan",
    name: "Panacea Fan",
    pathId: "silkbind-deluge",
    image: "/martial-arts/weapons/panacea-fan.png",
    mainSkills: [
      "Light Dust After Morning Rain / Resurrection",
      "Mistbound Aid / Endless Cloud",
      "Fan - Conversion",
    ],
    basicSkills: ["Fourfold Inquiry"],
    chargedSkills: ["Emerald Dewtouch"],
    unlockMethods: [
      "Gia nhập phái Silver Needle.",
      "Nhận từ Qi Sheng sau khi nộp Oddity đầu tiên.",
    ],
  },
  {
    id: "soulshade-umbrella",
    name: "Soulshade Umbrella",
    pathId: "silkbind-deluge",
    image: "/martial-arts/weapons/soulshade-umbrella.png",
    mainSkills: ["Echoes of a Thousand Plants", "Floating Grace", "Umbrella - Conversion"],
    basicSkills: ["Umbrella - Light Attack"],
    chargedSkills: ["Pale Petal / Umbrella Heavy Attack"],
    unlockMethods: [
      "Trộm chiêu từ sư phụ tại Soulshade Umbrella Post Station.",
      "Gia nhập phái Hollow Vale.",
    ],
  },
  {
    id: "stormbreaker-spear",
    name: "Stormbreaker Spear",
    pathId: "stonesplit-might",
    image: "/martial-arts/weapons/stormbreaker-spear.png",
    mainSkills: ["Thunder Shock", "Storm Roar", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Fury Spear / Spear - Heavy Attack"],
    unlockMethods: [
      "Trộm chiêu từ sư phụ tại Silver Needle Sanctum.",
      "Nhận qua thư trong game.",
    ],
  },
  {
    id: "strategic-sword",
    name: "Strategic Sword",
    pathId: "bellstrike-umbra",
    image: "/martial-arts/weapons/strategic-sword.png",
    mainSkills: ["Third Track Recoil", "Inner Track Slash", "Sword - Conversion"],
    basicSkills: ["Sword - Light Attack"],
    chargedSkills: ["Second Track Slash / Sword - Heavy Attack"],
    unlockMethods: ["Trộm chiêu từ sư phụ tại Strategic Sword Sanctum."],
  },
  {
    id: "thundercry-blade",
    name: "Thundercry Blade",
    pathId: "stonesplit-might",
    image: "/martial-arts/weapons/thundercry-blade.png",
    mainSkills: ["Sunrush Gale", "Predator's Shield / Shifting Heaven", "Mo Blade - Conversion"],
    basicSkills: ["Mo Blade - Light Attack / Galecloud Cleave"],
    chargedSkills: ["Avalanche"],
    unlockMethods: [
      "Trộm chiêu từ sư phụ tại Well of Heaven Martial Camp.",
      "Gia nhập phái Well of Heaven.",
      "Nhận từ Qi Sheng sau khi nộp Oddity đầu tiên.",
    ],
  },
];

