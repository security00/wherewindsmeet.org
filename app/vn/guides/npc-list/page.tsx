import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import npcPins from "../../../../public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { MapPin } from "../../../guides/npc-list/NpcMapClient";
import NpcImagePreview from "../../../guides/npc-list/NpcImagePreview";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Danh sách NPC & bản đồ Old Friends | Where Winds Meet",
  description:
    "Danh sách NPC Old Friends (Where Winds Meet): khu vực, phần thưởng, mẹo AI Chat, bản đồ xem trước và câu copy-paste để kết bạn nhanh.",
  alternates: buildHreflangAlternates("/guides/npc-list", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Danh sách NPC & Old Friends | Where Winds Meet",
    description:
      "Vị trí Old Friends, phần thưởng, mẹo AI Chat và câu copy-paste để kết bạn nhanh trong Where Winds Meet.",
    url: `${baseUrl}/vn/guides/npc-list`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        width: 1200,
        height: 675,
        alt: "Ảnh tổng hợp Old Friends (NPC)",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danh sách NPC & Old Friends | Where Winds Meet",
    description:
      "Tìm Old Friends nhanh: danh sách NPC, khu vực, phần thưởng, mẹo AI Chat và bản đồ xem trước.",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        alt: "Ảnh tổng hợp Old Friends",
      },
    ],
  },
};

const quickFacts = [
  { label: "Phạm vi", value: "Old Friends / NPC AI Chat", icon: "💬" },
  { label: "Khu vực", value: "Qinghe và các vùng tiếp theo", icon: "🧭" },
  { label: "Hành động chính", value: "Lắng nghe, đồng cảm, (ngoặc) giải quyết, tạm biệt", icon: "🧩" },
  { label: "Phần thưởng", value: "Quà theo tuần, vật phẩm một lần, tiến độ hoàn thành", icon: "🎁" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const npcHighlights = [
  {
    name: "Qin Caiwei",
    region: "Qinghe",
    rewards: "Old Friends weekly gift + story flavor",
    chatTip: "Listen, bracketed resolution, polite exit",
    difficulty: "Hard",
    href: "/guides/qin-caiwei",
  },
  {
    name: "Li Laizuo",
    region: "Qinghe",
    rewards: "Story beat + small gift",
    chatTip: "Acknowledge regret, then friendly farewell",
    difficulty: "Medium",
    image: "/guides/npc-list/li-laizuo.png",
  },
  {
    name: "Fang Xu",
    region: "Qinghe outskirts",
    rewards: "Coins, flavor dialogue",
    chatTip: "Mirror his worry, then bracketed solve",
    difficulty: "Medium",
    image: "/guides/npc-list/fang-xu.png",
  },
  {
    name: "Lie Buxi",
    region: "Qinghe",
    rewards: "Old Friends progress",
    chatTip: "Empathy first, then clear closure line",
    difficulty: "Medium",
    image: "/guides/npc-list/lie-buxi.png",
  },
  {
    name: "Zhao Weiye",
    region: "Qinghe",
    rewards: "Small gift, list entry",
    chatTip: "Agree and exit politely",
    difficulty: "Easy",
  },
  {
    name: "Liu the Woodcutter",
    region: "Wilderness",
    rewards: "Materials, flavor",
    chatTip: "Resolve his ask in brackets",
    difficulty: "Easy",
  },
  {
    name: "Zhou Yihang",
    region: "Qinghe",
    rewards: "Coins, list entry",
    chatTip: "Restate his hint, then farewell",
    difficulty: "Easy",
  },
  {
    name: "Ren Shuiliu",
    region: "Marsh",
    rewards: "Story flavor",
    chatTip: "Calm tone + simple promise",
    difficulty: "Medium",
  },
  {
    name: "Hong Yang",
    region: "Outpost",
    rewards: "Materials",
    chatTip: "Offer help and depart gracefully",
    difficulty: "Easy",
  },
  {
    name: "Jiang Yulang",
    region: "Qinghe wilds",
    rewards: "List entry",
    chatTip: "Short empathy + bracketed outcome",
    difficulty: "Easy",
  },
  {
    name: "Yueniang",
    region: "Village",
    rewards: "Small gift",
    chatTip: "Encourage and exit politely",
    difficulty: "Easy",
  },
  {
    name: "Tian Heng",
    region: "Frontier",
    rewards: "Story beat",
    chatTip: "Mirror his stance, then farewell",
    difficulty: "Medium",
  },
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

type NpcEntry = {
  name: string;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
};

const npcDetails: NpcEntry[] = [
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Trong khu General's Shrine: đứng cùng một nhóm thuộc hạ ngay cạnh đền trong khuôn viên.", image: "/guides/npc-list/f41bc20333ff369747d89ab7297f314f.png" },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Nghỉ trên giàn giáo cạnh đấu trường. Spar vài lần rồi bắt chuyện.", image: "/guides/npc-list/746530d86814266dcdd1ef1e983d5b1f.png" },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Ở bờ sông phía nam General's Shrine. Cô ấy nhờ giúp tìm các anh/em trai.", image: "/guides/npc-list/6fb9eb534a7ad1ecc3ffdcf5d5bcd048.png" },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Gần đền chính của General's Shrine, đang tập luyện." },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Đốn cây ở phía nam General's Shrine.", image: "/guides/npc-list/39b5f908f7dd9df2e9ab186b224af194.png" },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "Từ cổng General's Shrine, vào tòa nhà bên phải để gặp. Tùy ngày có thể đứng ngoài khu shrine.", image: "/guides/npc-list/7a5d5758a64aa9dcb4e3c686e8ad88b9.png" },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Trên bãi bùn phía nam Verdant Wilds Wayfarer.", image: "/guides/npc-list/b82c6c1c9b2bc7887469754322e5a71b.png" },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Góc trên bên trái, cạnh một cột đá.", image: "/guides/npc-list/c4c9f2f175acc33ec2f06b4eb58ff1be.png" },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Ngồi câu cá ở mép sông phía trái General's Shrine và phía bắc Stonewash Strand Boundary Stone.", image: "/guides/npc-list/3f0c578668c299d65f021e872d1e8ff4.png" },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Trên bãi bùn phía nam Verdant Wilds Wayfarer.", image: "/guides/npc-list/92757f0deede429ea266e133cfe51995.png" },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "Câu cá ở hồ đối diện General's Shrine Boundary Stone.", image: "/guides/npc-list/8b62b74156e15c6b073d1ffa021d4170.png" },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "Gần chiếc bàn cạnh một ngôi nhà.", image: "/guides/npc-list/6826a4bc4d34b96fd0f9009d39a2b6df.png" },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "Trên đỉnh núi gần một ngôi đền.", image: "/guides/npc-list/6166c87d7965c793cf33840ba89588c1.png" },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Đang chặt cây gần con đường ở Battlecrest Slope, phía bắc Starfall Spring Boundary Stone.", image: "/guides/npc-list/410d1322ea60f1374181a17d0be85a13.png" },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Trước một căn lều đổ nát, phía đông bắc Starfall Spring Boundary Stone.", image: "/guides/npc-list/9c14f21aa4f03fa76f9ca46b7f36c437.png" },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Đứng ở bến cảng, phía ngoài cùng bên trái.", image: "/guides/npc-list/b65389e0ad80a39582223979fd5f61bb.png" },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Gần cây cầu, sau đám cỏ cao.", image: "/guides/npc-list/b7a510b6ae5f5f07213c80fab222aec9.png" },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Bên lề đường phía nam Tiger Fort (Battlecrest Slope).", image: "/guides/npc-list/fda94aade0197ed4aef0d959564489ec.png" },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở trong nhà, vào trong sẽ thấy ngay.", image: "/guides/npc-list/5808db2d83929d0c53ce4047d9e67bcf.png" },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Bên lề đường phía nam Tiger Fort (Battlecrest Slope).", image: "/guides/npc-list/fda94aade0197ed4aef0d959564489ec.png" },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Ngồi ở bậc thang gần bờ sông.", image: "/guides/npc-list/ea696965e12feb1d390e41745d8f32e1.png" },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Đang nhảy múa sau một bức tượng.", image: "/guides/npc-list/315e955ca12ae1d397ba270e8e830e66.png" },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở trong nhà.", image: "/guides/npc-list/b65cae20c4a3288617d054c07c510715.png" },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở phía bắc làng, đang xới đất gần một căn nhà bị phá.", image: "/guides/npc-list/0898767483d16c6443ef1d74628c77e6.png" },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Đứng bên ngoài ngôi nhà của mình.", image: "/guides/npc-list/bc622b8835a89cdfe668bd13862bc626.png" },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Ở phía bắc thị trấn, chơi dưới đất gần lối đi lên Mercyheart Monastery.", image: "/guides/npc-list/0e8ffcfcadc6b9d96b45a6764ee04ee0.png" },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Ở Stonewash Strand, chặt cây phía nam Boundary Stone.", image: "/guides/npc-list/db0b486f857c2da8e3897cd43df444f7.png" },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Gần lối vào Divinecraft Dungeon.", image: "/guides/npc-list/b6b58337f6c0371d54848dbb8a3ae4e9.png" },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Trên mái/giàn (canopy) ở Stonewash Strand, phía đông Moonveil Mountain Wayfarer.", image: "/guides/npc-list/5ed738d1ba63039e7efdd52ad15a6511.png" },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Đang hái Buddhist Flowers.", image: "/guides/npc-list/pan-xinniang.png" },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Đứng gần con đường phía bắc Halo Peak Landmark.", image: "/guides/npc-list/jingyi.png" },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Đứng dọc theo con đường đi tới Halo Peak.", image: "/guides/npc-list/wu-jingming.png" },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Đang chặt gỗ gần Path of Karma Landmark.", image: "/guides/npc-list/chai-sansheng.png" },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Đứng giữa một nhóm mèo vây quanh.", image: "/guides/npc-list/bodhi.png" },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng gần Heaven's Pier Landmark.", image: "/guides/npc-list/shi-the-boatman.png" },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đang uống từ một thùng/đựng lớn.", image: "/guides/npc-list/zhao-weiye.png" },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng trước sạp của Yuan Tiantian.", image: "/guides/npc-list/lu-sheng.png" },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng cạnh nhiều thùng/đựng lớn.", image: "/guides/npc-list/xiang-the-greedy.png" },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đang quét dọn bên trong quán rượu.", image: "/guides/npc-list/song-wu.png" },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đang giặt đồ bên sông.", image: "/guides/npc-list/yueniang.png" },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Ở trong ngôi nhà phía sau sạp của Yuan Tiantian.", image: "/guides/npc-list/auntie-tian.png" },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng trước khu Fire-forced brewing.", image: "/guides/npc-list/zhang-dazhuang.png" },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng dưới một cây có hoa trắng.", image: "/guides/npc-list/uncle-mi.png" },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Ở sau một ngôi nhà nơi người ta đang phơi cánh hoa.", image: "/guides/npc-list/fluffy-cat.png" },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Đứng dưới cây ở rìa khu vực.", image: "/guides/npc-list/beggar-liu.png" },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Từ Moonveil Peak Landmark đi sang phải; ông ấy chặt gỗ dưới chân núi.", image: "/guides/npc-list/liu-the-woodcutter.png" },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Trên con đường giữa Peacebell Tower và Crimson Cliff.", image: "/guides/npc-list/shi-jingtian.png" },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Ở phía ngoài cùng bên phải Heaven Pier, đang chặt gỗ.", image: "/guides/npc-list/chai-shipi.png" },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Gần Crimson Cliff Landmark; đang lấy lá từ một cây đỏ cô độc.", image: "/guides/npc-list/yan-momo.png" },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Sau đám cỏ cao, gần mép vách.", image: "/guides/npc-list/wu-qiwan.png" },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Cạnh mấy chiếc xe, gần bến.", image: "/guides/npc-list/mr-qiao.png" },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Từ Stillwind Slope Landmark đi về phía bắc; sẽ thấy ông ấy đang chặt cây.", image: "/guides/npc-list/mu-laosan.png" },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hơi về phía bắc Stillwind Slope, đứng cùng nhóm người tị nạn.", image: "/guides/npc-list/niu-sanqi.png" },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hơi về phía bắc Stillwind Slope, đứng cùng nhóm người tị nạn.", image: "/guides/npc-list/zhu-jiuba.png" },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hơi về phía bắc Stillwind Slope, đứng cùng nhóm người tị nạn.", image: "/guides/npc-list/ma-zhongwu.png" },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Từ Stillslope Landmark đi sang phải; sẽ thấy cô ấy nhảy múa gần một tảng đá.", image: "/guides/npc-list/lan-huahua.png" },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Đứng ở bến cảng, phía dưới-trái của Stillwind Slope Marker.", image: "/guides/npc-list/zhou-yihang.png" },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Từ Back Mountain landmark đi về phía nam; ở trại cùng Boss Qian.", image: "/guides/npc-list/zhang-the-diviner.png" },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Từ Back Mountain landmark đi về phía nam; ở trại cùng Zhang the Diviner.", image: "/guides/npc-list/boss-qian.png" },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Từ Back Mountain landmark đi về phía bắc và leo lên vách đá; ông ấy ở phía trên.", image: "/guides/npc-list/tao-wang.png" },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "Đứng gần Deer Pond Landmark.", image: "/guides/npc-list/mountain-dweller.png" },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng gần mép vách.", image: "/guides/npc-list/hai-changchong.png" },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đang đào đất gần đống gỗ.", image: "/guides/npc-list/dog.png" },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng gần bờ sông.", image: "/guides/npc-list/shui-changliu.png" },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Sau bụi tre gần sông.", image: "/guides/npc-list/hunter.png" },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Đứng bên lề đường.", image: "/guides/npc-list/liu-heiqui.png" },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng bên lề đường cùng đồng hành Xie Changgong.", image: "/guides/npc-list/feng-shishi.png" },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đứng gần bụi tre.", image: "/guides/npc-list/shan-yinjiang.png" },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Đứng gần trại cướp (bandit).", image: "/guides/npc-list/wu-dayong.png" },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Đứng gần một cây đơn độc.", image: "/guides/npc-list/wenwu.png" },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Đi dọc đường cùng Sword Servant của cô ấy.", image: "/guides/npc-list/shen-weiqing.png" },
  {
    name: "Hong Yang",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy anh ấy gần một hồ nước, đứng cùng Lu Ke.",
    image: "/guides/npc-list/hong-yang.png",
  },
  {
    name: "Wen Gao",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy anh ấy đứng giữa một cái cây và một chiếc xe kéo.",
    image: "/guides/npc-list/wen-gao.png",
  },
  {
    name: "Ya Zhou",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy anh ấy đứng ở bến tàu.",
    image: "/guides/npc-list/ya-zhou.png",
  },
  {
    name: "Hu Da",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint:
      "Từ mốc Encircling Lake, đi theo lối bên trái; anh ấy đứng gần phía trái của khu bàn ăn ngoài trời.",
    image: "/guides/npc-list/hu-da.png",
  },
  {
    name: "Elder Zhou",
    region: "Moonveil Mountain",
    area: "Encircling Lake",
    hint: "Có thể tìm thấy ông ấy ở bến tàu, phía dưới bên phải của mốc Back Mountain.",
    image: "/guides/npc-list/elder-zhou.png",
  },
  {
    name: "Meng Da",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy ở phía đông bắc của mốc Harvest Village.",
    image: "/guides/npc-list/meng-da.png",
  },
  {
    name: "Hao Jiu",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy gần hàng rào.",
    image: "/guides/npc-list/hao-jiu.png",
  },
  {
    name: "Lu Kangge",
    region: "Moonveil Mountain",
    area: "Blissful Retreat",
    hint: "Có thể tìm thấy anh ấy về phía tây nam của mốc Source of Still Shore.",
    image: "/guides/npc-list/lu-kangge.png",
  },
  {
    name: "Jin Nanshou",
    region: "Moonveil Mountain",
    area: "Peace Bell Tower",
    hint:
      "Dùng mốc Deerforage Grove để định vị. Đi theo đường về phía bắc đến ngã rẽ, rẽ phải; bạn sẽ thấy anh ấy đứng bên lề đường.",
    image: "/guides/npc-list/jin-nanshou.png",
  },
  {
    name: "Jing'an",
    region: "Moonveil Mountain",
    area: "Peace Bell Tower",
    hint:
      "Đi theo đường; anh ấy ở ngay giữa ngã rẽ. Bạn có thể đi về phía nam từ mốc Porcelain Kiln hoặc đi về phía bắc từ mốc Deerforage Grove.",
    image: "/guides/npc-list/jing-an.png",
  },
  {
    name: "Lin Jin",
    region: "Moonveil Mountain",
    area: "Witherwilds",
    hint:
      "Từ mốc Porcelain Kiln, đi theo đường phía nam; bạn sẽ thấy anh ấy đang chặt gỗ gần mép đường.",
    image: "/guides/npc-list/lin-jin.png",
  },
  {
    name: "Sun Mang",
    region: "Moonveil Mountain",
    area: "Witherwilds",
    hint:
      "Từ Porcelain Kiln Boundary Stone, đi theo đường phía nam; anh ấy đứng bên cạnh ngã rẽ.",
    image: "/guides/npc-list/sun-mang.png",
  },
  {
    name: "Li Yueniang",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy cô ấy cùng người thương Yu Songfeng gần lối vào bến phà.",
    image: "/guides/npc-list/li-yueniang.png",
  },
  {
    name: "Yu Songfeng",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy cùng người thương Li Yueniang gần lối vào bến phà.",
    image: "/guides/npc-list/yu-songfeng.png",
  },
  {
    name: "Wang Duoli",
    region: "Verdant Wilds",
    area: "Battlecrest Slope",
    hint: "Wang Duoli ở phía nam hồ, gần Starfall Spring Boundary Stone.",
    image: "/guides/npc-list/wang-duoli.png",
  },
  {
    name: "Ren Shuiliu",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy trong tòa nhà màu đỏ, cạnh Meng Zhixia.",
    image: "/guides/npc-list/ren-shuiliu.png",
  },
  {
    name: "Meng Zhixia",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy trong tòa nhà màu đỏ, cạnh Ren Shuiliu.",
    image: "/guides/npc-list/meng-zhixia.png",
  },
  {
    name: "Yu Nu",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy cô ấy trong tòa nhà màu đỏ, đang nhìn ra biển.",
    image: "/guides/npc-list/yu-nu.png",
  },
  {
    name: "Jiang Nanyi",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy dưới một cây hoa trắng ở bến tàu, phía sau một nhóm phụ nữ.",
    image: "/guides/npc-list/jiang-nanyi.png",
  },
  {
    name: "Zhou Canying",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy cô ấy đang ngồi ở một trong những bàn trong tòa nhà màu đỏ.",
    image: "/guides/npc-list/zhou-canying.png",
  },
  {
    name: "Tian Heng",
    region: "Moonveil Mountain",
    area: "Riverside Station",
    hint: "Có thể tìm thấy anh ấy đang ngồi ở một trong những bàn trong tòa nhà màu đỏ.",
    image: "/guides/npc-list/tian-heng.png",
  },
  {
    name: "Wu Cezhi",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy trong nhà vệ sinh phía bên trái.",
    image: "/guides/npc-list/wu-cezhi.png",
  },
  {
    name: "Angler",
    region: "Moonveil Mountain",
    area: "Harvestfall Village",
    hint: "Có thể tìm thấy anh ấy ngồi cạnh bờ nước ở phía đông bắc của làng.",
    image: "/guides/npc-list/angler.png",
  },
];

const npcPinsArray = npcPins as unknown as Partial<MapPin>[];

const allPins: MapPin[] = npcPinsArray.map((p) => {
  const detail = npcDetails.find((d) => d.name === p.name);
  return {
    name: p.name ?? detail?.name ?? "NPC không rõ",
    x: p.x ?? 0,
    y: p.y ?? 0,
    region: p.region ?? detail?.region ?? undefined,
    area: p.area ?? detail?.area ?? undefined,
    hint: p.hint ?? detail?.hint ?? undefined,
    image: p.image ?? detail?.image ?? undefined,
  };
});

const pinsWithImages: MapPin[] = allPins.filter((p) => p.image || p.name === "Zhao Dali");
const allPinsSorted: MapPin[] = [...pinsWithImages].sort((a, b) => a.name.localeCompare(b.name));

const nonInteractableNpcs = [
  {
    name: "Qi Sheng",
    role: "Người thu thập Oddity (không AI Chat)",
    region: "Verdant Wilds",
    area: "Phía đông nam General's Shrine, phía tây Wayfarer",
    details:
      "Đổi Oddities với Qi Sheng để nâng Melodies of Peace. NPC này có mặt nhưng không kích hoạt Old Friends / AI Chat.",
    image: "/guides/npc-list/qi-sheng.png",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer / chữa trị (không AI Chat)",
    region: "Qinghe",
    area: "Evercare Clinic, phía bắc Moonveil Mountain và phía nam Blissful Retreat",
    details:
      "Chữa trị có thu phí và có thể tăng giới hạn thuốc khi bạn đổi Medicinal Tales. Không có Old Friends / AI Chat.",
    image: "/guides/npc-list/2b9ebc0e2be0bdbacf25bc5b9f4a3afa.png",
  },
];

export default function NpcListPage() {
  const mapUiText = {
    regionLabel: "Khu vực",
    allOption: "Tất cả",
    searchPlaceholder: "Tìm NPC…",
    showingPrefix: "Hiển thị",
    showingSuffix: "ghim",
    mapAlt: "Bản đồ Old Friends (Where Winds Meet)",
    closeAriaLabel: "Đóng",
    regionPrefix: "Khu vực:",
    areaPrefix: "Vùng:",
    unknownValue: "Chưa rõ",
    portraitAltSuffix: "chân dung",
    defaultHint: "Hãy dùng mẫu chat ở trên khi bạn đã tới đúng NPC.",
  } as const;

  const imagePreviewUiText = {
    instruction: "Cuộn hoặc dùng nút để zoom; bấm nền để đóng",
    zoomIn: "Phóng to",
    zoomOut: "Thu nhỏ",
    reset: "1x",
    close: "Đóng",
  } as const;

  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/guides/npc-list/hero.png"
            alt="Ảnh bìa danh sách NPC Old Friends (Where Winds Meet)"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Danh sách NPC (Old Friends) – Where Winds Meet
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Danh sách NPC Old Friends: khu vực, phần thưởng, mẹo AI Chat và bản đồ xem trước. Bạn có thể copy các câu chat mẫu, mở bản đồ tương tác và kết
              bạn với NPC (ví dụ Qin Caiwei) mà không bị “kẹt” luồng hội thoại.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#npc-map"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                🗺️ Mở bản đồ tương tác
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

      <section id="npc-map" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">Bản đồ NPC (xem trước)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Dùng bản đồ tương tác để lọc pin Old Friends/NPC. Bạn có thể tìm theo khu vực hoặc tên, rồi mở AI Chat và dùng câu mẫu bên phải.
        </p>
        <NpcMapClient pins={allPins} uiText={mapUiText} imagePreviewUiText={imagePreviewUiText} />
          <div className="flex flex-wrap gap-3">
            <Link
            href="#npc-map"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70 hover:text-emerald-50"
            >
              Mở bản đồ tương tác
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
            <h2 className="text-2xl font-bold text-slate-50">Mẫu kết bạn NPC nhanh</h2>
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
              Dùng được với đa số Old Friends. Nếu NPC “cứng”, hãy reset và chạy lại mẫu tương tự với vài thay đổi từ ngữ nhỏ.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗂️</span>
          <h2 className="text-2xl font-bold text-slate-50">Tất cả NPC có thể tương tác (Old Friends)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Danh sách NPC có ảnh (mục không có ảnh sẽ ẩn; Zhao Dali vẫn giữ để tham khảo). Dùng gợi ý để tới đúng chỗ, sau đó áp dụng mẫu AI Chat ở trên.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allPinsSorted.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                  <span className="text-[11px] uppercase tracking-wide text-slate-400">{npc.region || "Chưa rõ khu vực"}</span>
                </div>
                {npc.image ? (
                  <NpcImagePreview
                    src={npc.image}
                    alt={`Chân dung NPC ${npc.name} trong Where Winds Meet`}
                    thumbnailClassName="h-32"
                    uiText={imagePreviewUiText}
                  />
                ) : null}
              <p className="text-xs text-emerald-200">Vùng: {npc.area || "Chưa rõ"}</p>
              <p className="text-xs text-slate-300 leading-relaxed">Gợi ý: {npc.hint || "Hãy xem bản đồ và nói chuyện theo hướng đồng cảm."}</p>
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
            <span>Quà theo tuần sẽ tích lũy; hoàn thành sớm giúp tối đa hóa lợi ích.</span>
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
              {npc.image ? (
                <div className="relative h-32 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <NpcImagePreview
                    src={npc.image}
                    alt={`Chân dung NPC ${npc.name}`}
                    thumbnailClassName="h-32"
                    uiText={imagePreviewUiText}
                  />
                </div>
              ) : null}
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
