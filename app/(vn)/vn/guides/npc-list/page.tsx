import type { Metadata } from "next";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import npcPins from "@/public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { type MapPin } from "@/app/(en)/guides/npc-list/NpcMapClient";
import { npcMapPath, npcPortraitPath } from "@/lib/npc-media";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet NPC List - Vị trí Old Friends & Rewards",
  description:
    "Duyệt ảnh chụp biên tập có ngày về ghi chú vị trí NPC, bối cảnh Old Friends và câu AI Chat trong Where Winds Meet.",
  alternates: buildHreflangAlternates("/guides/npc-list", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Where Winds Meet NPC List - Vị trí Old Friends & Rewards",
    description:
      "Ảnh chụp biên tập có ngày về ghi chú vị trí Old Friends và mẹo AI Chat.",
    url: `${baseUrl}/vn/guides/npc-list`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        width: 1200,
        height: 675,
        alt: "Ảnh chụp thư mục NPC Old Friends trong Where Winds Meet",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet NPC List - Old Friends",
    description:
      "Ảnh chụp biên tập có ngày về ghi chú vị trí Old Friends và mẹo AI Chat.",
  },
};

const quickFacts = [
  { label: "Phạm vi", value: "Old Friends / NPC AI Chat", icon: "💬" },
  { label: "Khu vực", value: "Qinghe và các vùng tiếp theo", icon: "🧭" },
  { label: "Hành động chính", value: "Lắng nghe, đồng cảm, (ngoặc) giải quyết, tạm biệt", icon: "🧩" },
  { label: "Phần thưởng", value: "Kiểm tra trong bảng quan hệ hiện tại", icon: "🎁" },
];

const aiChatBasics = [
  "Đọc gợi ý phía trên khung chat và nhắc lại một lần.",
  "Dùng 1 câu đồng cảm, 1 câu hành động trong ngoặc, và 1 câu chào tạm biệt rõ ràng.",
  "Giữ mỗi luồng ngắn (3–6 câu); nếu lạc đề thì reset.",
  "Nói cụ thể thường hiệu quả hơn an ủi chung chung; tránh câu “ép” một dòng.",
];

const copyLines = [
  "Bạn có thể kể cho tôi nghe câu chuyện của mình không? Tôi đang lắng nghe.",
  "Xin bạn nói tiếp, điều gì đang làm bạn bận lòng?",
  "(giúp bạn giải quyết ổn thỏa và thấy nhẹ lòng)",
  "(chúng ta trở thành bạn và tin tưởng lẫn nhau)",
  "Tạm biệt (cúi chào rồi rời đi).",
];

const searchIntentAnswers = [
  {
    title: "Vị trí NPC",
    summary:
      "Dùng thư mục văn bản có ngày để duyệt ghi chú NPC theo khu vực, vùng nhỏ hoặc tên. Hãy kiểm tra từng đường đi trong client hiện tại.",
  },
  {
    title: "Phần thưởng Old Friends",
    summary:
      "Ghi chú biên tập có đề cập đến quà, tiến độ vùng hoặc một số đoạn cốt truyện. Hãy kiểm tra bảng quan hệ hiện tại trước khi lập kế hoạch dựa trên phần thưởng lặp lại.",
  },
  {
    title: "Mẫu AI Chat",
    summary:
      "Mẫu nhanh nhất: nhắc lại gợi ý, thêm một câu đồng cảm, viết một hành động trong ngoặc, rồi chào tạm biệt. Dùng câu copy-paste bên dưới nếu NPC bị lặp.",
  },
  {
    title: "Qin Caiwei và NPC khó",
    summary:
      "Nếu NPC không chấp nhận câu ngắn, hãy chuyển sang nhập vai đầy đủ hơn. Qin Caiwei là ví dụ chính; dùng guide riêng khi bước kết bạn bị kẹt.",
  },
];

const npcFaqs = [
  {
    q: "Tìm NPC trong Where Winds Meet ở đâu?",
    a: "Duyệt thư mục biên tập có ngày theo khu vực hoặc tên NPC. Mỗi gợi ý đường đi cần được kiểm tra trong client hiện tại.",
  },
  {
    q: "Old Friends trong Where Winds Meet là gì?",
    a: "Old Friends là quan hệ NPC xoay quanh hội thoại và AI Chat. Phần thưởng và tiến độ có thể thay đổi; bảng quan hệ hiện tại là nguồn có thẩm quyền.",
  },
  {
    q: "Làm sao kết bạn NPC bằng AI Chat?",
    a: "Đọc gợi ý, phản chiếu nỗi lo của NPC, thêm hành động trong ngoặc để giải quyết tình huống, rồi kết thúc lịch sự. Reset và đổi cách nói nếu cuộc chat đi lệch.",
  },
  {
    q: "Vì sao Qin Caiwei khó hơn NPC khác?",
    a: "Qin Caiwei thường cần câu nhập vai đầy đủ hơn, không chỉ một câu an ủi ngắn. Hãy dùng guide Qin Caiwei riêng nếu bước Old Friends bị lặp.",
  },
  {
    q: "Qi Sheng và Yao Yaoyao có phải Old Friends không?",
    a: "Không. Họ xuất hiện trong thế giới và có dịch vụ riêng, nhưng không mở Old Friends hoặc AI Chat. Trang này tách họ vào nhóm NPC không tương tác.",
  },
];

type NpcEntry = {
  name: string;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
};

const npcDetails: NpcEntry[] = [
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Trong khu General's Shrine: đứng cùng một nhóm thuộc hạ ngay cạnh đền trong khuôn viên." },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Nghỉ trên giàn giáo cạnh đấu trường. Spar vài lần rồi bắt chuyện." },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Ở bờ sông phía nam General's Shrine. Cô ấy nhờ giúp tìm các anh/em trai." },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Gần đền chính của General's Shrine, đang tập luyện." },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Đốn cây ở phía nam General's Shrine." },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "Từ cổng General's Shrine, vào tòa nhà bên phải để gặp. Tùy ngày có thể đứng ngoài khu shrine." },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Trên bãi bùn phía nam Verdant Wilds Wayfarer." },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Góc trên bên trái, cạnh một cột đá." },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Ngồi câu cá ở mép sông phía trái General's Shrine và phía bắc Stonewash Strand Boundary Stone." },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Trên bãi bùn phía nam Verdant Wilds Wayfarer." },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "Câu cá ở hồ đối diện General's Shrine Boundary Stone." },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "Gần chiếc bàn cạnh một ngôi nhà." },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "Trên đỉnh núi gần một ngôi đền." },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Đang chặt cây gần con đường ở Battlecrest Slope, phía bắc Starfall Spring Boundary Stone." },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Trước một căn lều đổ nát, phía đông bắc Starfall Spring Boundary Stone." },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Đứng ở bến cảng, phía ngoài cùng bên trái." },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Gần cây cầu, sau đám cỏ cao." },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Bên lề đường phía nam Tiger Fort (Battlecrest Slope)." },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở trong nhà, vào trong sẽ thấy ngay." },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Bên lề đường phía nam Tiger Fort (Battlecrest Slope)." },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Ngồi ở bậc thang gần bờ sông." },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Đang nhảy múa sau một bức tượng." },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở trong nhà." },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở phía bắc làng, đang xới đất gần một căn nhà bị phá." },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Đứng bên ngoài ngôi nhà của mình." },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở phía bắc thị trấn, chơi dưới đất gần lối đi lên Mercyheart Monastery." },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Ở Stonewash Strand, chặt cây phía nam Boundary Stone." },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Gần lối vào Divinecraft Dungeon." },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Trên mái/giàn (canopy) ở Stonewash Strand, phía đông Moonveil Mountain Wayfarer." },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Đang hái Buddhist Flowers." },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Đứng gần con đường phía bắc Halo Peak Landmark." },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Đứng dọc theo con đường đi tới Halo Peak." },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Đang chặt gỗ gần Path of Karma Landmark." },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Đứng giữa một nhóm mèo vây quanh." },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng gần Heaven's Pier Landmark." },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đang uống từ một thùng/đựng lớn." },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng trước sạp của Yuan Tiantian." },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng cạnh nhiều thùng/đựng lớn." },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đang quét dọn bên trong quán rượu." },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đang giặt đồ bên sông." },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Ở trong ngôi nhà phía sau sạp của Yuan Tiantian." },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng trước khu Fire-forced brewing." },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng dưới một cây có hoa trắng." },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Ở sau một ngôi nhà nơi người ta đang phơi cánh hoa." },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng dưới cây ở rìa khu vực." },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Từ Moonveil Peak Landmark đi sang phải; ông ấy chặt gỗ dưới chân núi." },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Trên con đường giữa Peacebell Tower và Crimson Cliff." },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Ở phía ngoài cùng bên phải Heaven Pier, đang chặt gỗ." },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Gần Crimson Cliff Landmark; đang lấy lá từ một cây đỏ cô độc." },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Sau đám cỏ cao, gần mép vách." },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Cạnh mấy chiếc xe, gần bến." },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Từ Stillwind Slope Landmark đi về phía bắc; sẽ thấy ông ấy đang chặt cây." },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hơi về phía bắc Stillwind Slope, đứng cùng nhóm người tị nạn." },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hơi về phía bắc Stillwind Slope, đứng cùng nhóm người tị nạn." },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hơi về phía bắc Stillwind Slope, đứng cùng nhóm người tị nạn." },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Từ Stillslope Landmark đi sang phải; sẽ thấy cô ấy nhảy múa gần một tảng đá." },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Đứng ở bến cảng, phía dưới-trái của Stillwind Slope Marker." },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Từ Back Mountain landmark đi về phía nam; ở trại cùng Boss Qian." },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Từ Back Mountain landmark đi về phía nam; ở trại cùng Zhang the Diviner." },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Từ Back Mountain landmark đi về phía bắc và leo lên vách đá; ông ấy ở phía trên." },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "Đứng gần Deer Pond Landmark." },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng gần mép vách." },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đang đào đất gần đống gỗ." },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng gần bờ sông." },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Sau bụi tre gần sông." },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Đứng bên lề đường." },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng bên lề đường cùng đồng hành Xie Changgong." },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng gần bụi tre." },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Đứng gần trại cướp (bandit)." },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Đứng gần một cây đơn độc." },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đi dọc đường cùng Sword Servant của cô ấy." },
  {
    name: "Hong Yang",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy anh ấy gần một hồ nước, đứng cùng Lu Ke.",
  },
  {
    name: "Wen Gao",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy anh ấy đứng giữa một cái cây và một chiếc xe kéo.",
  },
  {
    name: "Ya Zhou",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy anh ấy đứng ở bến tàu.",
  },
  {
    name: "Hu Da",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint:
      "Từ mốc Encircling Lake, đi theo lối bên trái; anh ấy đứng gần phía trái của khu bàn ăn ngoài trời.",
  },
  {
    name: "Elder Zhou",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy ông ấy ở bến tàu, phía dưới bên phải của mốc Back Mountain.",
  },
  {
    name: "Meng Da",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy ở phía đông bắc của mốc Harvest Village.",
  },
  {
    name: "Hao Jiu",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy gần hàng rào.",
  },
  {
    name: "Lu Kangge",
    region: "Moonveil Mountain",
    area: "Blissful Retreat",
    hint: "Có thể tìm thấy anh ấy về phía tây nam của mốc Source of Still Shore.",
  },
  {
    name: "Jin Nanshou",
    region: "Moonveil Mountain",
    area: "Peace Bell Tower",
    hint:
      "Dùng mốc Deerforage Grove để định vị. Đi theo đường về phía bắc đến ngã rẽ, rẽ phải; bạn sẽ thấy anh ấy đứng bên lề đường.",
  },
  {
    name: "Jing'an",
    region: "Moonveil Mountain",
    area: "Peace Bell Tower",
    hint:
      "Đi theo đường; anh ấy ở ngay giữa ngã rẽ. Bạn có thể đi về phía nam từ mốc Porcelain Kiln hoặc đi về phía bắc từ mốc Deerforage Grove.",
  },
  {
    name: "Lin Jin",
    region: "Moonveil Mountain",
    area: "Witherwilds",
    hint:
      "Từ mốc Porcelain Kiln, đi theo đường phía nam; bạn sẽ thấy anh ấy đang chặt gỗ gần mép đường.",
  },
  {
    name: "Sun Mang",
    region: "Moonveil Mountain",
    area: "Witherwilds",
    hint:
      "Từ Porcelain Kiln Boundary Stone, đi theo đường phía nam; anh ấy đứng bên cạnh ngã rẽ.",
  },
  {
    name: "Li Yueniang",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy cô ấy cùng người thương Yu Songfeng gần lối vào bến phà.",
  },
  {
    name: "Yu Songfeng",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy cùng người thương Li Yueniang gần lối vào bến phà.",
  },
  {
    name: "Wang Duoli",
    region: "Verdant Wilds",
    area: "Battlecrest Slope",
    hint: "Wang Duoli ở phía nam hồ, gần Starfall Spring Boundary Stone.",
  },
  {
    name: "Ren Shuiliu",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy trong tòa nhà màu đỏ, cạnh Meng Zhixia.",
  },
  {
    name: "Meng Zhixia",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy trong tòa nhà màu đỏ, cạnh Ren Shuiliu.",
  },
  {
    name: "Yu Nu",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy cô ấy trong tòa nhà màu đỏ, đang nhìn ra biển.",
  },
  {
    name: "Jiang Nanyi",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy dưới một cây hoa trắng ở bến tàu, phía sau một nhóm phụ nữ.",
  },
  {
    name: "Zhou Canying",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy cô ấy đang ngồi ở một trong những bàn trong tòa nhà màu đỏ.",
  },
  {
    name: "Tian Heng",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy đang ngồi ở một trong những bàn trong tòa nhà màu đỏ.",
  },
  {
    name: "Wu Cezhi",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy trong nhà vệ sinh phía bên trái.",
  },
  {
    name: "Angler",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy ngồi cạnh bờ nước ở phía đông bắc của làng.",
  },
  { name: "Cao Jinyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Cạnh Tao Jingjing ở tầng trệt Revelry Hall, phía bắc tòa nhà." },
  { name: "Chu Yuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Phía đông mốc Velvet Shade, đứng trên phố." },
  { name: "He Ruiyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Cạnh Li Yushan ở tầng trệt Revelry Hall, phía tây nam tòa nhà." },
  { name: "Jiang Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Từ Springwave Pavilion đi về nam rồi rẽ phải; ở sau ngôi nhà nơi Yiluo (Graceful Memory) ở." },
  { name: "Jiang Yulang", region: "Kaifeng City", area: "Velvet Shade", hint: "Phía bắc Springwave Pavilion, bên trong tiệm hoa cùng Rong Xiaoxiao." },
  { name: "Jing Chaoyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng hai Revelry Hall, đang nhìn ra cửa sổ." },
  { name: "Leng Daculi", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng hai Revelry Hall, đang ăn trong phòng riêng." },
  { name: "Li Youxin", region: "Kaifeng City", area: "Velvet Shade", hint: "Gần mốc Velvet Shade, ở khu bến thuyền." },
  { name: "Li Yuerong", region: "Kaifeng City", area: "Velvet Shade", hint: "Gần mốc Velvet Shade, bên ngoài tiệm đồ cổ." },
  { name: "Lu Zhuo", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng hai Revelry Hall cạnh Wu Peng, gần cầu thang phía đông lên tầng ba." },
  { name: "Mu Huaishan", region: "Kaifeng City", area: "Velvet Shade", hint: "Phía nam Springwave Pavilion, đang nói chuyện với Huo Tinglan." },
  { name: "Murong Chan", region: "Kaifeng City", area: "Velvet Shade", hint: "Gần các chậu hoa được sắp xếp." },
  { name: "Qi Wuyu", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng trệt Revelry Hall, ở khu trung tâm gần sân khấu xem biểu diễn." },
  { name: "Qin Zhu", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng trệt Revelry Hall, phía nam tòa nhà." },
  { name: "Qiu Fengxi", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng trệt Revelry Hall, phía tây tòa nhà." },
  { name: "Ruan Sese", region: "Kaifeng City", area: "Velvet Shade", hint: "Gần mốc Velvet Shade, đang ngắm diều bên ngoài cửa hàng." },
  { name: "Shen Moxuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Qua cây cầu phía đông mốc Velvet Shade." },
  { name: "Song Shiheng", region: "Kaifeng City", area: "Velvet Shade", hint: "Trên cầu phía đông mốc Velvet Shade, đang nói chuyện với Yan Chuchu." },
  { name: "Su Xinlu", region: "Kaifeng City", area: "Velvet Shade", hint: "Phía nam Springwave Pavilion, đang nói chuyện với Yang Chunnuan và ba NPC khác." },
  { name: "Tan Xiangchen", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng hai Revelry Hall cạnh Yin Yan, gần cầu thang phía tây xuống tầng một." },
  { name: "Tao Jingjing", region: "Kaifeng City", area: "Velvet Shade", hint: "Cạnh Cao Jinyang ở tầng trệt Revelry Hall, phía bắc tòa nhà." },
  { name: "Tu Er", region: "Kaifeng City", area: "Velvet Shade", hint: "Phía bắc Springwave Pavilion, đang nói chuyện với Tu Dakuan." },
  { name: "Xu Lijun", region: "Kaifeng City", area: "Velvet Shade", hint: "Cạnh Ye Zhiqiu ở tầng trệt Revelry Hall, phía đông tòa nhà." },
  { name: "Xu Yingyu", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng trệt Revelry Hall, phía tây tòa nhà." },
  { name: "Xue Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng hai Revelry Hall, đang ăn cùng Zhuang Zhengzhi." },
  { name: "Yan Chuchu", region: "Kaifeng City", area: "Velvet Shade", hint: "Trên cây cầu bên phải mốc Velvet Shade, đang nói chuyện với Song Shiheng." },
  { name: "Yan Ziyan", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng trệt Revelry Hall, phía nam tòa nhà." },
  { name: "Yang Chunnuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Phía nam Springwave Pavilion, đang nói chuyện với Su Xinlu và ba NPC khác." },
  { name: "Ye Zhiqiu", region: "Kaifeng City", area: "Velvet Shade", hint: "Cạnh Xu Lijun ở tầng trệt Revelry Hall, phía đông tòa nhà." },
  { name: "Yi Xi", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng hai Revelry Hall, đang ăn cùng Guo Zhixiang." },
  { name: "Yu Hui", region: "Kaifeng City", area: "Velvet Shade", hint: "Ở cuối con phố, phía tây mốc Velvet Shade." },
  { name: "Zhen Huo", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng trệt Revelry Hall, phía nam tòa nhà." },
  { name: "Zhuang Zhengzhi", region: "Kaifeng City", area: "Velvet Shade", hint: "Tầng hai Revelry Hall, đang ăn cùng Xue Li." },
];

const npcDetailsSorted = npcDetails
  .map((npc) => ({ ...npc, image: npcPortraitPath(npc.name) }))
  .sort((a, b) => a.name.localeCompare(b.name));

const npcDetailsByName = new Map(npcDetailsSorted.map((npc) => [npc.name, npc]));
const allPins: MapPin[] = (npcPins as unknown as Array<Partial<MapPin>>).map((pin) => {
  const detail = pin.name ? npcDetailsByName.get(pin.name) : undefined;
  return {
    name: pin.name ?? detail?.name ?? "NPC chưa rõ",
    x: pin.x ?? 0,
    y: pin.y ?? 0,
    region: detail?.region ?? pin.region,
    area: detail?.area ?? pin.area,
    hint: detail?.hint ?? pin.hint,
    image: detail?.image ?? (pin.name ? npcPortraitPath(pin.name) : undefined),
  };
});

const nonInteractableNpcs = [
  {
    name: "Qi Sheng",
    role: "Người thu thập Oddity (không AI Chat)",
    region: "Verdant Wilds",
    area: "Phía đông nam General's Shrine, phía tây Wayfarer",
    details:
      "Đổi Oddities với Qi Sheng để nâng Melodies of Peace. NPC này có mặt nhưng không kích hoạt Old Friends / AI Chat.",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer / chữa trị (không AI Chat)",
    region: "Qinghe",
    area: "Evercare Clinic, phía bắc Moonveil Mountain và phía nam Blissful Retreat",
    details:
      "Chữa trị có thu phí và có thể tăng giới hạn thuốc khi bạn đổi Medicinal Tales. Không có Old Friends / AI Chat.",
  },
];

export default function NpcListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/npc-list`,
      dateModified: "2026-08-29",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: npcFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="vi" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-950" />

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-50">
              Ảnh chụp biên tập được xem lại lần cuối vào 2026-06-24. Đây không phải cơ sở dữ liệu trò chơi trực tiếp đầy đủ; hãy kiểm tra tên, đường đi, tương tác và phần thưởng trong client hiện tại.
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Where Winds Meet NPC List: vị trí Old Friends, rewards và AI Chat.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Nếu bạn đang tìm Where Winds Meet NPC list, hãy bắt đầu với thư mục hình ảnh có ngày này. Trang giữ lại ghi chú vị trí biên tập, bối cảnh Old Friends, NPC không tương tác và câu AI Chat cho các NPC như Qin Caiwei.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#npc-directory"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                🗂️ Duyệt thư mục NPC có ngày
              </Link>
              <Link
                href="/vn/guides/qin-caiwei"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                💬 Hướng dẫn chat Qin Caiwei
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/20">
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{fact.icon}</span>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
            Trả lời nhanh cho người tìm kiếm
          </p>
          <h2 className="text-2xl font-bold text-slate-50">
            Dùng trang này làm điểm bắt đầu cho ghi chú vị trí NPC, bối cảnh Old Friends hoặc câu AI Chat.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-emerald-50/90">
            Trang này được viết cho các truy vấn phổ biến: NPC ở đâu, có tính là Old Friend không, nhận được phần thưởng gì, và nên gõ gì khi AI Chat không chấp nhận câu trả lời ngắn.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {searchIntentAnswers.map((item) => (
            <div key={item.title} className="rounded-2xl border border-emerald-400/30 bg-slate-950/60 p-4">
              <h3 className="text-sm font-semibold text-emerald-100">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">Cách dùng thư mục biên tập</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tìm thẻ theo tên, khu vực hoặc vùng nhỏ, hoặc dùng ảnh chụp bản đồ đã nhập. Media Game8 trong đúng thư mục này được phép dùng và tái sử dụng trên site theo xác nhận của chủ site; quyền đó không biến ảnh chụp tháng 6 thành dữ liệu hiện tại, chính thức hay đầy đủ.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#npc-directory"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70 hover:text-emerald-50"
            >
              Duyệt thư mục hình ảnh
            </Link>
            <Link
              href="/vn/guides/gift-of-gab"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Cơ bản AI Chat (Gift of Gab)
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">Mẫu AI Chat thực tế để thử</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {aiChatBasics.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-emerald-300">-</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-100">Câu chat mẫu (copy-paste)</p>
            <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
              {copyLines.map((line) => (
                <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ol>
            <p className="text-xs text-slate-400">
              Mẫu biên tập này có thể giúp với một số Old Friends. Nếu NPC từ chối, hãy làm theo gợi ý hiện tại trong game thay vì cho rằng một kịch bản dùng được ở mọi nơi.
            </p>
          </div>
        </div>
      </section>

      <section id="npc-map" className="space-y-4 rounded-3xl border border-cyan-400/30 bg-slate-950/70 p-6 shadow-lg">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Tham chiếu hình ảnh đã được phép · ảnh chụp có ngày</p>
          <h2 className="text-2xl font-bold text-slate-50">Tham chiếu hình ảnh Old Friends có thể tìm kiếm</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Bản ghi và chân dung thuộc ảnh chụp biên tập ngày 2026-06-24. Bản đồ tổng hợp lớn chỉ tải khi bạn yêu cầu và cố ý không chồng pin vì tọa độ nhập chưa được hiệu chỉnh theo ảnh này.
          </p>
        </div>
        <NpcMapClient
          pins={allPins}
          mapSrc={npcMapPath}
          uiText={{
            regionLabel: "Khu vực",
            allOption: "Tất cả",
            searchLabel: "Tìm theo tên NPC",
            searchPlaceholder: "Tìm NPC…",
            showingPrefix: "Đang hiện",
            showingSuffix: "bản ghi",
            mapAlt: "Ảnh chụp bản đồ Old Friends có ngày trong Where Winds Meet",
            closeAriaLabel: "Đóng",
            regionPrefix: "Khu vực:",
            areaPrefix: "Vùng:",
            unknownValue: "Chưa rõ",
            portraitAltSuffix: "ảnh tham chiếu NPC",
            defaultHint: "Kiểm tra gợi ý trong client hiện tại.",
            loadMap: "Tải bản đồ tham chiếu 2,5 MB",
            hideMap: "Ẩn bản đồ tham chiếu",
            mapDisclosure: "Bản đồ tổng hợp là tham chiếu hình ảnh có ngày. Không chồng pin NPC vì tọa độ nhập chưa được hiệu chỉnh theo ảnh này.",
            selectPrompt: "Chọn một kết quả để chỉ tải một chân dung.",
            resultLimitSuffix: "Hiển thị 24 kết quả đầu; hãy thu hẹp tìm kiếm để tìm NPC khác.",
          }}
          imagePreviewUiText={{
            instruction: "Cuộn hoặc dùng nút để thu phóng; bấm nền để đóng",
            zoomIn: "Phóng to",
            zoomOut: "Thu nhỏ",
            reset: "1×",
            close: "Đóng",
          }}
        />
        <p className="text-xs leading-relaxed text-slate-400">
          Bộ dữ liệu và media: {" "}
          <a
            href="https://game8.co/games/Where-Winds-Meet/archives/565812"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200 underline decoration-cyan-400/50 underline-offset-4"
          >
            hướng dẫn NPC của Game8
          </a>
          . Xác nhận quyền tái sử dụng của chủ site được ghi trong repository với ngày 2026-08-29.
        </p>
      </section>

      <section id="npc-directory" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗂️</span>
          <h2 className="text-2xl font-bold text-slate-50">NPC tương tác đã được biên tập ghi nhận (Old Friends)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Ảnh chụp được xem lại lần cuối vào 2026-06-24. Thư mục hình ảnh này giữ ghi chú NPC biên tập và chân dung Game8 đã được phép dùng, nhưng không phải cơ sở dữ liệu trò chơi trực tiếp đầy đủ. Hãy kiểm tra tên, đường đi, tương tác và phần thưởng trong client hiện tại.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {npcDetailsSorted.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                  <span className="text-[11px] uppercase tracking-wide text-slate-400">{npc.region || "Chưa rõ khu vực"}</span>
                </div>
              <p className="text-xs text-emerald-200">Vùng: {npc.area || "Chưa rõ"}</p>
              <p className="text-xs text-slate-300 leading-relaxed">Gợi ý: {npc.hint || "Hãy kiểm tra trong client hiện tại và nói chuyện theo hướng đồng cảm."}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Vì sao nên làm Old Friends sớm</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Kiểm tra phần thưởng lặp lại hoặc một lần trong bảng quan hệ hiện tại trước khi ưu tiên NPC.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Danh sách Old Friends hỗ trợ mục tiêu hoàn thành ở từng khu vực.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Luyện mẫu AI Chat một lần và tái sử dụng cho nhiều NPC.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚫</span>
          <h3 className="text-2xl font-bold text-slate-50">NPC không AI Chat (chỉ dịch vụ)</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Các NPC này có xuất hiện nhưng không mở Old Friends / AI Chat. Tuy vậy họ vẫn cung cấp dịch vụ hữu ích.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {nonInteractableNpcs.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-amber-200">{npc.role}</p>
                </div>
                <span className="rounded-full border border-amber-400/50 bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                  Không AI Chat
                </span>
              </div>
              <p className="text-xs text-emerald-200">Khu vực: {npc.region}</p>
              <p className="text-xs text-slate-200">Vùng: {npc.area}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{npc.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h3 className="text-2xl font-bold text-slate-50">FAQ danh sách NPC</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {npcFaqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">{faq.q}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">?</span>
          <h3 className="text-2xl font-bold text-slate-50">Hướng dẫn liên quan</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Qin Caiwei Friendship",
              href: "/vn/guides/qin-caiwei",
              note: "Kịch bản AI Chat đầy đủ cho Old Friend “khó nhất”.",
            },
            {
              title: "Gift of Gab",
              href: "/vn/guides/gift-of-gab",
              note: "Nền tảng thuyết phục theo thẻ để bổ trợ AI Chat.",
            },
            {
              title: "Woven with Malice",
              href: "/vn/guides/woven-with-malice",
              note: "Nhiệm vụ thiên về cốt truyện nếu bạn thích nội dung dẫn dắt.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
