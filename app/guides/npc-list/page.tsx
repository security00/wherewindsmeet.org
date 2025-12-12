import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import npcPins from "../../../public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { MapPin } from "./NpcMapClient";
import NpcImagePreview from "./NpcImagePreview";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet NPC List & Old Friends Map",
  description:
    "Where Winds Meet NPC list (Old Friends): regions, rewards, AI Chat tips, map preview, and copy-paste chat lines to befriend every NPC fast.",
  alternates: buildHreflangAlternates("/guides/npc-list"),
  openGraph: {
    title: "Where Winds Meet NPC List & Old Friends Map",
    description:
      "Old Friends and NPC locations, rewards, AI Chat tips, and copy-paste lines to befriend NPCs fast in Where Winds Meet.",
    url: `${baseUrl}/guides/npc-list`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        width: 1200,
        height: 675,
        alt: "Where Winds Meet NPC list hero image showing Old Friends collage",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet NPC List & Old Friends Map",
    description:
      "Find Old Friends fast: NPC list, regions, rewards, AI Chat tips, map preview, and copy-paste lines to befriend NPCs in Where Winds Meet.",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        alt: "Where Winds Meet Old Friends hero collage",
      },
    ],
  },
};

const quickFacts = [
  { label: "Scope", value: "Old Friends / AI Chat NPCs", icon: "💬" },
  { label: "Regions", value: "Qinghe and beyond", icon: "🧭" },
  { label: "Main actions", value: "Talk, empathize, bracketed resolution, farewell", icon: "🧩" },
  { label: "Rewards", value: "Weekly gifts, one-time items, completion", icon: "🎁" },
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
  "Read the hint above the chat box and restate it once.",
  "Use one empathy line, one bracketed resolution, and one clear farewell.",
  "Keep each thread short (3-6 lines); reset if it derails.",
  "Specific beats work better than vague comfort; avoid one-line mind control.",
];

const copyLines = [
  "Tell me your story. I am listening.",
  "Go on, what is troubling you?",
  "(helps you resolve the matter and find peace)",
  "(we become friends and trust each other)",
  "Farewell (bows and leaves).",
];

type NpcEntry = {
  name: string;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
};

const npcDetails: NpcEntry[] = [
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Li Laizuo can be found with a group of subornidates next to the general's shrine in the compound.", image: "/guides/npc-list/f41bc20333ff369747d89ab7297f314f.png" },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Fang Xu can be found resting on top of some scaffolding next to the arena. Spar with him a few times and then engage in conversation.", image: "/guides/npc-list/746530d86814266dcdd1ef1e983d5b1f.png" },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Lie Buxi can be found near the river south of the General's Shrine. She seeks ask aid in finding her brothers.", image: "/guides/npc-list/6fb9eb534a7ad1ecc3ffdcf5d5bcd048.png" },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Zhao Dali can be found near the main shrine in General's Shrine, doing training exercises." },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Chopping a tree to the south of the General's Shrine.", image: "/guides/npc-list/39b5f908f7dd9df2e9ab186b224af194.png" },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "From the entrance of General's Shrine, go to the building on the right to meet Fu Lushou. He could also be outside the General's Shrine depending on the day.", image: "/guides/npc-list/7a5d5758a64aa9dcb4e3c686e8ad88b9.png" },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "On the mudflat to the south of Verdant Wilds Wayfarer.", image: "/guides/npc-list/b82c6c1c9b2bc7887469754322e5a71b.png" },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Upper left side beside a stone pillar", image: "/guides/npc-list/c4c9f2f175acc33ec2f06b4eb58ff1be.png" },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Found sitting while fishing at the edge of the river at the left side of the General's Shrine and north of Stonewash Strand Boundary Stone.", image: "/guides/npc-list/3f0c578668c299d65f021e872d1e8ff4.png" },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "On the mudflat to the south of Verdant Wilds Wayfarer.", image: "/guides/npc-list/92757f0deede429ea266e133cfe51995.png" },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "By the lake fishing across the General's Shrine Boundary Stone", image: "/guides/npc-list/8b62b74156e15c6b073d1ffa021d4170.png" },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "This NPC is found near the table besides a house.", image: "/guides/npc-list/6826a4bc4d34b96fd0f9009d39a2b6df.png" },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "On top of a mountain near a temple", image: "/guides/npc-list/6166c87d7965c793cf33840ba89588c1.png" },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Li Daniu can be seen chopping trees near the road of Battlecrest Scope and to the north of Starfall Spring Boundary Stone", image: "/guides/npc-list/410d1322ea60f1374181a17d0be85a13.png" },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Li Shaokui is located at the front of a destroyed shack to the northeast of Starfall Spring Boundary Stone", image: "/guides/npc-list/9c14f21aa4f03fa76f9ca46b7f36c437.png" },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Standing at the docks at the far left side.", image: "/guides/npc-list/b65389e0ad80a39582223979fd5f61bb.png" },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Standing near the bridge behind some tall grasses.", image: "/guides/npc-list/b7a510b6ae5f5f07213c80fab222aec9.png" },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "On the side of the road south of the Tiger Fort in Battlecrest Slope", image: "/guides/npc-list/fda94aade0197ed4aef0d959564489ec.png" },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Inside the house. Can be easily seen on the inside.", image: "/guides/npc-list/5808db2d83929d0c53ce4047d9e67bcf.png" },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "On the side of the road south of the Tiger Fort in Battlecrest Slope", image: "/guides/npc-list/fda94aade0197ed4aef0d959564489ec.png" },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Sitting at the stairs near the river.", image: "/guides/npc-list/ea696965e12feb1d390e41745d8f32e1.png" },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen dancing behind a statue.", image: "/guides/npc-list/315e955ca12ae1d397ba270e8e830e66.png" },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen inside the house.", image: "/guides/npc-list/b65cae20c4a3288617d054c07c510715.png" },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen hoeing at the northern part of the village near a destroyed house.", image: "/guides/npc-list/0898767483d16c6443ef1d74628c77e6.png" },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be found outside of his house.", image: "/guides/npc-list/bc622b8835a89cdfe668bd13862bc626.png" },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen playing in the ground at the north part of town, near the pathway going to the Mercyheart Monastery.", image: "/guides/npc-list/0e8ffcfcadc6b9d96b45a6764ee04ee0.png" },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Located on Stonewash Strand cutting trees to the south of the Boundary Stone.", image: "/guides/npc-list/db0b486f857c2da8e3897cd43df444f7.png" },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Located near the entrance of Divinecraft Dungeon.", image: "/guides/npc-list/b6b58337f6c0371d54848dbb8a3ae4e9.png" },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "In the canopy on Stonewash Strand to the east of Moonveil Mountain Wayfarer", image: "/guides/npc-list/5ed738d1ba63039e7efdd52ad15a6511.png" },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen plucking Buddhist Flowers", image: "/guides/npc-list/pan-xinniang.png" },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Can be seen standing near the path north of Halo Peak Landmark", image: "/guides/npc-list/jingyi.png" },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Can be seen standing along the path going to Halo Peak", image: "/guides/npc-list/wu-jingming.png" },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Can be seen chopping wood near the Path of Karma landmark.", image: "/guides/npc-list/chai-sansheng.png" },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Can be seen standing with cats surrounding him.", image: "/guides/npc-list/bodhi.png" },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen standing near the Heaven's Pier Landmark", image: "/guides/npc-list/shi-the-boatman.png" },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen drinking from a large container", image: "/guides/npc-list/zhao-weiye.png" },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen in front of the stall of Yuan Tiantian", image: "/guides/npc-list/lu-sheng.png" },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen beside numerous large containers.", image: "/guides/npc-list/xiang-the-greedy.png" },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen sweeping inside of the tavern.", image: "/guides/npc-list/song-wu.png" },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "She can be seen cleaning her laundry by the river.", image: "/guides/npc-list/yueniang.png" },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "She can be seen inside the house at the back of Yuan Tiantian's stall.", image: "/guides/npc-list/auntie-tian.png" },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen in front of the Fire-forced brewing", image: "/guides/npc-list/zhang-dazhuang.png" },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen under a white petal tree.", image: "/guides/npc-list/uncle-mi.png" },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "It can be seen behind a house where flower petals are being sun-dried", image: "/guides/npc-list/fluffy-cat.png" },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen under a tree near the outskirts of the area.", image: "/guides/npc-list/beggar-liu.png" },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can use the Moonveil Peak landmark and go right to see him chopping wood below the mountain", image: "/guides/npc-list/liu-the-woodcutter.png" },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "You can find him in the path between Peacebell Tower and Crimson Cliff", image: "/guides/npc-list/shi-jingtian.png" },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen chopping wood at the far right side of Heaven Pier.", image: "/guides/npc-list/chai-shipi.png" },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "She can be found near the Crimson Cliff Landmark. Getting some leaves from a lonely red tree.", image: "/guides/npc-list/yan-momo.png" },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen behind some tall grasses, near the edge of the cliff.", image: "/guides/npc-list/wu-qiwan.png" },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "You can find him besides some wagons, near the docks.", image: "/guides/npc-list/mr-qiao.png" },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Walk north from the Stillwind Slope Landmark. Then you will see him cutting a tree.", image: "/guides/npc-list/mu-laosan.png" },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees.", image: "/guides/npc-list/niu-sanqi.png" },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees.", image: "/guides/npc-list/zhu-jiuba.png" },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees.", image: "/guides/npc-list/ma-zhongwu.png" },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Move right from the Stillslope Landmark and you will see her dancing near a rock.", image: "/guides/npc-list/lan-huahua.png" },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "He can be seen standing on the docks at the lower-left side of the Stillwind Slope Marker.", image: "/guides/npc-list/zhou-yihang.png" },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "She can be found by heading south from the Back Mountain landmark, at a camp where she is with Boss Qian.", image: "/guides/npc-list/zhang-the-diviner.png" },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "He can be found by heading south from the Back Mountain landmark, at a camp where he is with Zhang the Diviner.", image: "/guides/npc-list/boss-qian.png" },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "From the Back Mountain landmark, go north and climb the rocky wall until you find him at the top", image: "/guides/npc-list/tao-wang.png" },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "He can be found standing near the Deer Pond Landmark.", image: "/guides/npc-list/mountain-dweller.png" },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "He can be seen standing near a cliff.", image: "/guides/npc-list/hai-changchong.png" },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "It can be seen digging near some pile of wood.", image: "/guides/npc-list/dog.png" },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can see him standing near the river.", image: "/guides/npc-list/shui-changliu.png" },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find him behind a cluster of bamboo near the river.", image: "/guides/npc-list/hunter.png" },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him on the side of the road.", image: "/guides/npc-list/liu-heiqui.png" },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find her at the side of the road with her companion, Xie Changgong", image: "/guides/npc-list/feng-shishi.png" },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find him near some bamboos", image: "/guides/npc-list/shan-yinjiang.png" },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing near a bandit camp.", image: "/guides/npc-list/wu-dayong.png" },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing near a lonely tree.", image: "/guides/npc-list/wenwu.png" },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find her along the road with her Sword Servant.", image: "/guides/npc-list/shen-weiqing.png" },
  { name: "Hong Yang", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him near a lake with Lu Ke", image: "/guides/npc-list/hong-yang.png" },
  { name: "Wen Gao", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him in between a tree and a wagon.", image: "/guides/npc-list/wen-gao.png" },
  { name: "Ya Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing at the docks.", image: "/guides/npc-list/ya-zhou.png" },
  { name: "Hu Da", region: "Moonveil Mountain", area: "Encircling Lake", hint: "From the Encircling Lake landmark, follow the path to the left, where you'll find him standing near the left side of the outdoor dining area.", image: "/guides/npc-list/hu-da.png" },
  { name: "Elder Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him at the docks on the lower right of the Back Mountain Landmark.", image: "/guides/npc-list/elder-zhou.png" },
  { name: "Meng Da", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him northeast of the Harvest Village Landmark.", image: "/guides/npc-list/meng-da.png" },
  { name: "Hao Jiu", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him near the fence.", image: "/guides/npc-list/hao-jiu.png" },
  { name: "Lu Kangge", region: "Moonveil Mountain", area: "Blissful Retreat", hint: "You can find him soutwest from the Source of Still Shore Landmark", image: "/guides/npc-list/lu-kangge.png" },
  { name: "Jin Nanshou", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can find him by using the Deerforage Grove Landmark. Follow the road north until you reach a fork, then turn right. You'll see him at the side of the road.", image: "/guides/npc-list/jin-nanshou.png" },
  { name: "Jing'an", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can find him by following the road, where he is located in the middle of the fork. You can either go south from the Porcelain Kiln Landmark or north from Deerforage Grove Landmark.", image: "/guides/npc-list/jing-an.png" },
  { name: "Lin Jin", region: "Moonveil Mountain", area: "Witherwilds", hint: "You can find him by following the south road from the Porcelain Kiln Landmark. Where you can see him chopping wood near the side of the road.", image: "/guides/npc-list/lin-jin.png" },
  { name: "Sun Mang", region: "Moonveil Mountain", area: "Witherwilds", hint: "You can find him by following the south road from the Porcelain Kiln Boundary Stone. Where you can see him standing at the side of the fork.", image: "/guides/npc-list/sun-mang.png" },
  { name: "Li Yueniang", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her with her beloved Yu Songfeng near the ferry station entrance.", image: "/guides/npc-list/li-yueniang.png" },
  { name: "Yu Songfeng", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him with his beloved Li Yueniang near the ferry station entrance.", image: "/guides/npc-list/yu-songfeng.png" },
  { name: "Wang Duoli", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Wang Duoli is located to the south of the lake near the Starfall Spring Boundary Stone", image: "/guides/npc-list/wang-duoli.png" },
  { name: "Ren Shuiliu", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him in the red building besides Meng Zhixia.", image: "/guides/npc-list/ren-shuiliu.png" },
  { name: "Meng Zhixia", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him in the red building besides Ren Shuiliu.", image: "/guides/npc-list/meng-zhixia.png" },
  { name: "Yu Nu", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her in the red building  looking at the ocean.", image: "/guides/npc-list/yu-nu.png" },
  { name: "Jiang Nanyi", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him under a white blossom tree at the docks, behind some ladies.", image: "/guides/npc-list/jiang-nanyi.png" },
  { name: "Zhou Canying", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her sitting in one of the tables inside the red building.", image: "/guides/npc-list/zhou-canying.png" },
  { name: "Tian Heng", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him sitting in one of the tables inside the red building.", image: "/guides/npc-list/tian-heng.png" },
  { name: "Wu Cezhi", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him in the left-side toilet", image: "/guides/npc-list/wu-cezhi.png" },
  { name: "Angler", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him sitting by the shoreline on the northeast side of the village.", image: "/guides/npc-list/angler.png" },
];

const npcPinsArray = npcPins as unknown as Partial<MapPin>[];

const allPins: MapPin[] = npcPinsArray.map((p) => {
  const detail = npcDetails.find((d) => d.name === p.name);
  return {
    name: p.name ?? detail?.name ?? "Unknown NPC",
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
    role: "Oddity Collector (non-interactable for chat)",
    region: "Verdant Wilds",
    area: "Southeast of General's Shrine, west of the Wayfarer",
    details:
      "Exchange Oddities with Qi Sheng to upgrade Melodies of Peace. He is present but does not trigger Old Friends / AI Chat.",
    image: "/guides/npc-list/qi-sheng.png",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer (non-interactable for chat)",
    region: "Qinghe",
    area: "Evercare Clinic, north of Moonveil Mountain and south of Blissful Retreat",
    details:
      "Provides healing for a fee and can expand medicine capacity when you trade Medicinal Tales. No Old Friends / AI Chat available.",
    image: "/guides/npc-list/2b9ebc0e2be0bdbacf25bc5b9f4a3afa.png",
  },
];

export default function NpcListPage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/guides/npc-list/hero.png"
            alt="Where Winds Meet NPC list hero image"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Where Winds Meet NPC List (Old Friends)
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              A fast NPC list for Where Winds Meet Old Friends: regions, rewards, AI Chat tips, and a map preview. Copy the chat lines below, open the interactive map, and befriend NPCs like Qin Caiwei without getting stuck. This page aggregates a Where Winds Meet NPC list, Old Friends NPC locations, AI Chat NPC tips, and an interactive NPC map for quick search.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#npc-map"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                🗺️ Open interactive map
              </Link>
              <Link
                href="/guides/qin-caiwei"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                💬 Qin Caiwei chat guide
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
            <h2 className="text-2xl font-bold text-slate-50">NPC map preview</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Use the interactive map on the home page to filter Old Friend / NPC pins. Check off pins to track progress, then open each NPC chat with the copy lines below.
        </p>
        <NpcMapClient pins={allPins} />
          <div className="flex flex-wrap gap-3">
            <Link
            href="#npc-map"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70 hover:text-emerald-50"
            >
              Open interactive map
            </Link>
            <Link
              href="/guides/gift-of-gab"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              AI Chat basics (Gift of Gab)
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">How to befriend any NPC fast</h2>
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
            <p className="text-sm font-semibold text-slate-100">Copy-paste chat lines</p>
            <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
              {copyLines.map((line) => (
                <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ol>
            <p className="text-xs text-slate-400">
              Works across most Old Friends. If an NPC is stubborn, reset and re-run the same pattern with slight wording changes.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗂️</span>
          <h2 className="text-2xl font-bold text-slate-50">All interactable NPCs (Old Friends)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Interactable NPC list with available portraits (entries without images are hidden; Zhao Dali remains for reference). Use the hints to reach them, then apply the AI Chat pattern above. Keywords: Where Winds Meet NPC list, Old Friends NPC locations, AI Chat NPC guide, interactive NPC map.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allPinsSorted.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                <span className="text-[11px] uppercase tracking-wide text-slate-400">{npc.region || "Region unknown"}</span>
              </div>
              {npc.image ? (
                <NpcImagePreview
                  src={npc.image}
                  alt={`${npc.name} NPC portrait in Where Winds Meet`}
                  thumbnailClassName="h-32"
                />
              ) : null}
              <p className="text-xs text-emerald-200">Area: {npc.area || "Not specified"}</p>
              <p className="text-xs text-slate-300 leading-relaxed">Hint: {npc.hint || "Check the map and talk with empathy."}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Why finish Old Friends early</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Weekly gifts accumulate; finishing early maximizes returns.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Old Friends lists help completion goals in each region.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Practice the AI Chat pattern once and reuse it across all NPCs.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚫</span>
          <h3 className="text-2xl font-bold text-slate-50">Non-interactable NPCs (no AI Chat)</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          These NPCs appear in the world but do not open Old Friends / AI Chat. They still provide services, so keep them handy.
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
                  Non-interactable
                </span>
              </div>
              {npc.image ? (
                <div className="relative h-32 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <NpcImagePreview src={npc.image} alt={`${npc.name} NPC portrait`} thumbnailClassName="h-32" />
                </div>
              ) : null}
              <p className="text-xs text-emerald-200">Region: {npc.region}</p>
              <p className="text-xs text-slate-200">Area: {npc.area}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{npc.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h3 className="text-2xl font-bold text-slate-50">More guides</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Qin Caiwei Friendship",
              href: "/guides/qin-caiwei",
              note: "Full AI Chat playbook for the most stubborn Old Friend.",
            },
            {
              title: "Gift of Gab",
              href: "/guides/gift-of-gab",
              note: "Card-based persuasion basics to complement AI Chat.",
            },
            {
              title: "Woven with Malice",
              href: "/guides/woven-with-malice",
              note: "Narrative quest if you want more story-driven encounters.",
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
