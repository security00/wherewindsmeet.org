import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import npcPins from "@/public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { MapPin } from "./NpcMapClient";
import NpcImagePreview from "./NpcImagePreview";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet NPC List - Old Friends Locations & Rewards",
  description:
    "Find Where Winds Meet NPC locations, Old Friends rewards, AI Chat lines, Qin Caiwei help, non-interactable NPCs, and interactive map pins.",
  alternates: buildHreflangAlternates("/guides/npc-list"),
  openGraph: {
    title: "Where Winds Meet NPC List - Old Friends Locations & Rewards",
    description:
      "Find Old Friends NPC locations, rewards, AI Chat tips, Qin Caiwei help, non-interactable NPCs, and map pins in Where Winds Meet.",
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
    title: "Where Winds Meet NPC List - Old Friends Locations & Rewards",
    description:
      "Find Old Friends NPC locations, rewards, AI Chat tips, Qin Caiwei help, non-interactable NPCs, and map pins in Where Winds Meet.",
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
    image: "https://static.wherewindsmeet.org/guides/npc-list/li-laizuo.png",
  },
  {
    name: "Fang Xu",
    region: "Qinghe outskirts",
    rewards: "Coins, flavor dialogue",
    chatTip: "Mirror his worry, then bracketed solve",
    difficulty: "Medium",
    image: "https://static.wherewindsmeet.org/guides/npc-list/fang-xu.png",
  },
  {
    name: "Lie Buxi",
    region: "Qinghe",
    rewards: "Old Friends progress",
    chatTip: "Empathy first, then clear closure line",
    difficulty: "Medium",
    image: "https://static.wherewindsmeet.org/guides/npc-list/lie-buxi.png",
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

const searchIntentAnswers = [
  {
    title: "NPC locations",
    summary:
      "Use the Old Friends map and the card grid to find NPCs by region, area, and name. Start with Verdant Wilds, Sundara Land, and Moonveil Mountain pins when a completion counter is missing one friend.",
  },
  {
    title: "Old Friends rewards",
    summary:
      "Most Old Friends help with weekly gifts, one-time flavor rewards, regional completion, and small story scenes. Finish them early so weekly gifts start accumulating sooner.",
  },
  {
    title: "AI Chat script",
    summary:
      "The fastest pattern is: restate the hint, add one empathy line, write one bracketed resolution, then say farewell. Use the copy-paste lines below when an NPC loops.",
  },
  {
    title: "Qin Caiwei and stubborn NPCs",
    summary:
      "If the NPC keeps rejecting short answers, switch to full roleplay. Qin Caiwei is the main example, so jump to the dedicated guide when her friendship step stalls.",
  },
];

const npcFaqs = [
  {
    q: "Where do I find NPCs in Where Winds Meet?",
    a: "Use the interactive Old Friends map on this page, then filter by region or search by NPC name. Each card also lists the area and a short route hint.",
  },
  {
    q: "What are Old Friends in Where Winds Meet?",
    a: "Old Friends are interactable NPC relationships that usually involve conversation, AI Chat, small rewards, weekly gifts, and regional completion progress.",
  },
  {
    q: "How do I befriend NPCs with AI Chat?",
    a: "Read the hint, mirror the NPC's concern, add a bracketed action that resolves the situation, and end politely. Reset and rephrase if the chat derails.",
  },
  {
    q: "Why is Qin Caiwei harder than other NPCs?",
    a: "Qin Caiwei often needs a fuller roleplay answer rather than a short comfort line. Use the dedicated Qin Caiwei guide if the Old Friends step loops.",
  },
  {
    q: "Are Qi Sheng and Yao Yaoyao Old Friends NPCs?",
    a: "No. They appear in the world and provide services, but they do not open Old Friends or AI Chat. They are listed separately as non-interactable NPCs.",
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
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Li Laizuo can be found with a group of subornidates next to the general's shrine in the compound.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-laizuo.png" },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Fang Xu can be found resting on top of some scaffolding next to the arena. Spar with him a few times and then engage in conversation.", image: "https://static.wherewindsmeet.org/guides/npc-list/fang-xu.png" },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Lie Buxi can be found near the river south of the General's Shrine. She seeks ask aid in finding her brothers.", image: "https://static.wherewindsmeet.org/guides/npc-list/lie-buxi.png" },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Zhao Dali can be found near the main shrine in General's Shrine, doing training exercises.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhao-dali.png" },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Chopping a tree to the south of the General's Shrine.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-bakun.png" },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "From the entrance of General's Shrine, go to the building on the right to meet Fu Lushou. He could also be outside the General's Shrine depending on the day.", image: "https://static.wherewindsmeet.org/guides/npc-list/fu-lushou.png" },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "On the mudflat to the south of Verdant Wilds Wayfarer.", image: "https://static.wherewindsmeet.org/guides/npc-list/jin-xiaobao.png" },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Upper left side beside a stone pillar", image: "https://static.wherewindsmeet.org/guides/npc-list/fu-lubao.png" },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Found sitting while fishing at the edge of the river at the left side of the General's Shrine and north of Stonewash Strand Boundary Stone.", image: "https://static.wherewindsmeet.org/guides/npc-list/wang-duobao.png" },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "On the mudflat to the south of Verdant Wilds Wayfarer.", image: "https://static.wherewindsmeet.org/guides/npc-list/jin-chunniang.png" },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "By the lake fishing across the General's Shrine Boundary Stone", image: "https://static.wherewindsmeet.org/guides/npc-list/wang-duolu.png" },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "This NPC is found near the table besides a house.", image: "https://static.wherewindsmeet.org/guides/npc-list/daozheng.png" },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "On top of a mountain near a temple", image: "https://static.wherewindsmeet.org/guides/npc-list/miaojue.png" },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Li Daniu can be seen chopping trees near the road of Battlecrest Scope and to the north of Starfall Spring Boundary Stone", image: "https://static.wherewindsmeet.org/guides/npc-list/li-daniu.png" },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Li Shaokui is located at the front of a destroyed shack to the northeast of Starfall Spring Boundary Stone", image: "https://static.wherewindsmeet.org/guides/npc-list/li-shaokui.png" },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Standing at the docks at the far left side.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-yizhou.png" },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Standing near the bridge behind some tall grasses.", image: "https://static.wherewindsmeet.org/guides/npc-list/rafter-rat.png" },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "On the side of the road south of the Tiger Fort in Battlecrest Slope", image: "https://static.wherewindsmeet.org/guides/npc-list/tang-lubao.png" },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Inside the house. Can be easily seen on the inside.", image: "https://static.wherewindsmeet.org/guides/npc-list/embroidered-rat.png" },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "On the side of the road south of the Tiger Fort in Battlecrest Slope", image: "https://static.wherewindsmeet.org/guides/npc-list/tang-lubao.png" },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Sitting at the stairs near the river.", image: "https://static.wherewindsmeet.org/guides/npc-list/pan-faxin.png" },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen dancing behind a statue.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-miaoxin.png" },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen inside the house.", image: "https://static.wherewindsmeet.org/guides/npc-list/barn-rat.png" },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen hoeing at the northern part of the village near a destroyed house.", image: "https://static.wherewindsmeet.org/guides/npc-list/burrowing-rat.png" },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be found outside of his house.", image: "https://static.wherewindsmeet.org/guides/npc-list/small-chisel.png" },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen playing in the ground at the north part of town, near the pathway going to the Mercyheart Monastery.", image: "https://static.wherewindsmeet.org/guides/npc-list/pip-rat.png" },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Located on Stonewash Strand cutting trees to the south of the Boundary Stone.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-jiudui.png" },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Located near the entrance of Divinecraft Dungeon.", image: "https://static.wherewindsmeet.org/guides/npc-list/feng-rusong.png" },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "In the canopy on Stonewash Strand to the east of Moonveil Mountain Wayfarer", image: "https://static.wherewindsmeet.org/guides/npc-list/zhu-bawan.png" },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen plucking Buddhist Flowers", image: "https://static.wherewindsmeet.org/guides/npc-list/pan-xinniang.png" },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Can be seen standing near the path north of Halo Peak Landmark", image: "https://static.wherewindsmeet.org/guides/npc-list/jingyi.png" },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Can be seen standing along the path going to Halo Peak", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-jingming.png" },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Can be seen chopping wood near the Path of Karma landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-sansheng.png" },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Can be seen standing with cats surrounding him.", image: "https://static.wherewindsmeet.org/guides/npc-list/bodhi.png" },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen standing near the Heaven's Pier Landmark", image: "https://static.wherewindsmeet.org/guides/npc-list/shi-the-boatman.png" },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen drinking from a large container", image: "https://static.wherewindsmeet.org/guides/npc-list/zhao-weiye.png" },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen in front of the stall of Yuan Tiantian", image: "https://static.wherewindsmeet.org/guides/npc-list/lu-sheng.png" },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen beside numerous large containers.", image: "https://static.wherewindsmeet.org/guides/npc-list/xiang-the-greedy.png" },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen sweeping inside of the tavern.", image: "https://static.wherewindsmeet.org/guides/npc-list/song-wu.png" },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "She can be seen cleaning her laundry by the river.", image: "https://static.wherewindsmeet.org/guides/npc-list/yueniang.png" },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "She can be seen inside the house at the back of Yuan Tiantian's stall.", image: "https://static.wherewindsmeet.org/guides/npc-list/auntie-tian.png" },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen in front of the Fire-forced brewing", image: "https://static.wherewindsmeet.org/guides/npc-list/zhang-dazhuang.png" },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen under a white petal tree.", image: "https://static.wherewindsmeet.org/guides/npc-list/uncle-mi.png" },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "It can be seen behind a house where flower petals are being sun-dried", image: "https://static.wherewindsmeet.org/guides/npc-list/fluffy-cat.png" },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen under a tree near the outskirts of the area.", image: "https://static.wherewindsmeet.org/guides/npc-list/beggar-liu.png" },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can use the Moonveil Peak landmark and go right to see him chopping wood below the mountain", image: "https://static.wherewindsmeet.org/guides/npc-list/liu-the-woodcutter.png" },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "You can find him in the path between Peacebell Tower and Crimson Cliff", image: "https://static.wherewindsmeet.org/guides/npc-list/shi-jingtian.png" },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen chopping wood at the far right side of Heaven Pier.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-shipi.png" },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "She can be found near the Crimson Cliff Landmark. Getting some leaves from a lonely red tree.", image: "https://static.wherewindsmeet.org/guides/npc-list/yan-momo.png" },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen behind some tall grasses, near the edge of the cliff.", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-qiwan.png" },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "You can find him besides some wagons, near the docks.", image: "https://static.wherewindsmeet.org/guides/npc-list/mr-qiao.png" },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Walk north from the Stillwind Slope Landmark. Then you will see him cutting a tree.", image: "https://static.wherewindsmeet.org/guides/npc-list/mu-laosan.png" },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees.", image: "https://static.wherewindsmeet.org/guides/npc-list/niu-sanqi.png" },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhu-jiuba.png" },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees.", image: "https://static.wherewindsmeet.org/guides/npc-list/ma-zhongwu.png" },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Move right from the Stillslope Landmark and you will see her dancing near a rock.", image: "https://static.wherewindsmeet.org/guides/npc-list/lan-huahua.png" },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "He can be seen standing on the docks at the lower-left side of the Stillwind Slope Marker.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-yihang.png" },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "She can be found by heading south from the Back Mountain landmark, at a camp where she is with Boss Qian.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhang-the-diviner.png" },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "He can be found by heading south from the Back Mountain landmark, at a camp where he is with Zhang the Diviner.", image: "https://static.wherewindsmeet.org/guides/npc-list/boss-qian.png" },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "From the Back Mountain landmark, go north and climb the rocky wall until you find him at the top", image: "https://static.wherewindsmeet.org/guides/npc-list/tao-wang.png" },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "He can be found standing near the Deer Pond Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/mountain-dweller.png" },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "He can be seen standing near a cliff.", image: "https://static.wherewindsmeet.org/guides/npc-list/hai-changchong.png" },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "It can be seen digging near some pile of wood.", image: "https://static.wherewindsmeet.org/guides/npc-list/dog.png" },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can see him standing near the river.", image: "https://static.wherewindsmeet.org/guides/npc-list/shui-changliu.png" },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find him behind a cluster of bamboo near the river.", image: "https://static.wherewindsmeet.org/guides/npc-list/hunter.png" },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him on the side of the road.", image: "https://static.wherewindsmeet.org/guides/npc-list/liu-heiqui.png" },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find her at the side of the road with her companion, Xie Changgong", image: "https://static.wherewindsmeet.org/guides/npc-list/feng-shishi.png" },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find him near some bamboos", image: "https://static.wherewindsmeet.org/guides/npc-list/shan-yinjiang.png" },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing near a bandit camp.", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-dayong.png" },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing near a lonely tree.", image: "https://static.wherewindsmeet.org/guides/npc-list/wenwu.png" },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find her along the road with her Sword Servant.", image: "https://static.wherewindsmeet.org/guides/npc-list/shen-weiqing.png" },
  { name: "Hong Yang", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him near a lake with Lu Ke", image: "https://static.wherewindsmeet.org/guides/npc-list/hong-yang.png" },
  { name: "Wen Gao", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him in between a tree and a wagon.", image: "https://static.wherewindsmeet.org/guides/npc-list/wen-gao.png" },
  { name: "Ya Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing at the docks.", image: "https://static.wherewindsmeet.org/guides/npc-list/ya-zhou.png" },
  { name: "Hu Da", region: "Moonveil Mountain", area: "Encircling Lake", hint: "From the Encircling Lake landmark, follow the path to the left, where you'll find him standing near the left side of the outdoor dining area.", image: "https://static.wherewindsmeet.org/guides/npc-list/hu-da.png" },
  { name: "Elder Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him at the docks on the lower right of the Back Mountain Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/elder-zhou.png" },
  { name: "Meng Da", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him northeast of the Harvest Village Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/meng-da.png" },
  { name: "Hao Jiu", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him near the fence.", image: "https://static.wherewindsmeet.org/guides/npc-list/hao-jiu.png" },
  { name: "Lu Kangge", region: "Moonveil Mountain", area: "Blissful Retreat", hint: "You can find him soutwest from the Source of Still Shore Landmark", image: "https://static.wherewindsmeet.org/guides/npc-list/lu-kangge.png" },
  { name: "Jin Nanshou", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can find him by using the Deerforage Grove Landmark. Follow the road north until you reach a fork, then turn right. You'll see him at the side of the road.", image: "https://static.wherewindsmeet.org/guides/npc-list/jin-nanshou.png" },
  { name: "Jing'an", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can find him by following the road, where he is located in the middle of the fork. You can either go south from the Porcelain Kiln Landmark or north from Deerforage Grove Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/jing-an.png" },
  { name: "Lin Jin", region: "Moonveil Mountain", area: "Witherwilds", hint: "You can find him by following the south road from the Porcelain Kiln Landmark. Where you can see him chopping wood near the side of the road.", image: "https://static.wherewindsmeet.org/guides/npc-list/lin-jin.png" },
  { name: "Sun Mang", region: "Moonveil Mountain", area: "Witherwilds", hint: "You can find him by following the south road from the Porcelain Kiln Boundary Stone. Where you can see him standing at the side of the fork.", image: "https://static.wherewindsmeet.org/guides/npc-list/sun-mang.png" },
  { name: "Li Yueniang", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her with her beloved Yu Songfeng near the ferry station entrance.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-yueniang.png" },
  { name: "Yu Songfeng", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him with his beloved Li Yueniang near the ferry station entrance.", image: "https://static.wherewindsmeet.org/guides/npc-list/yu-songfeng.png" },
  { name: "Wang Duoli", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Wang Duoli is located to the south of the lake near the Starfall Spring Boundary Stone", image: "https://static.wherewindsmeet.org/guides/npc-list/wang-duoli.png" },
  { name: "Ren Shuiliu", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him in the red building besides Meng Zhixia.", image: "https://static.wherewindsmeet.org/guides/npc-list/ren-shuiliu.png" },
  { name: "Meng Zhixia", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him in the red building besides Ren Shuiliu.", image: "https://static.wherewindsmeet.org/guides/npc-list/meng-zhixia.png" },
  { name: "Yu Nu", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her in the red building  looking at the ocean.", image: "https://static.wherewindsmeet.org/guides/npc-list/yu-nu.png" },
  { name: "Jiang Nanyi", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him under a white blossom tree at the docks, behind some ladies.", image: "https://static.wherewindsmeet.org/guides/npc-list/jiang-nanyi.png" },
  { name: "Zhou Canying", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her sitting in one of the tables inside the red building.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-canying.png" },
  { name: "Tian Heng", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him sitting in one of the tables inside the red building.", image: "https://static.wherewindsmeet.org/guides/npc-list/tian-heng.png" },
  { name: "Wu Cezhi", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him in the left-side toilet", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-cezhi.png" },
  { name: "Angler", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him sitting by the shoreline on the northeast side of the village.", image: "https://static.wherewindsmeet.org/guides/npc-list/angler.png" },
  { name: "Cao Jinyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Tao Jingjing on the ground floor of Revelry Hall, on the north side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/cao-jinyang.png" },
  { name: "Chu Yuan", region: "Kaifeng City", area: "Velvet Shade", hint: "East of the Velvet Shade Landmark, standing on the street.", image: "https://static.wherewindsmeet.org/guides/npc-list/chu-yuan.png" },
  { name: "He Ruiyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Li Yushan on the ground floor of Revelry Hall, on the southwest side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/he-ruiyang.png" },
  { name: "Jiang Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Go south from Springwave Pavilion, then right; he is behind the house where Yiluo (Graceful Memory) resides.", image: "https://static.wherewindsmeet.org/guides/npc-list/jiang-li.png" },
  { name: "Jiang Yulang", region: "Kaifeng City", area: "Velvet Shade", hint: "North of Springwave Pavilion, inside the flower shop with Rong Xiaoxiao.", image: "https://static.wherewindsmeet.org/guides/npc-list/jiang-yulang.png" },
  { name: "Jing Chaoyang", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, looking out the window.", image: "https://static.wherewindsmeet.org/guides/npc-list/jing-chaoyang.png" },
  { name: "Leng Daculi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, eating in a private room.", image: "https://static.wherewindsmeet.org/guides/npc-list/leng-daculi.png" },
  { name: "Li Youxin", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the Velvet Shade Landmark by the docks.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-youxin.png" },
  { name: "Li Yuerong", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the Velvet Shade Landmark, outside an antique shop.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-yuerong.png" },
  { name: "Lu Zhuo", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall beside Wu Peng, near the east-side stairs to the third floor.", image: "https://static.wherewindsmeet.org/guides/npc-list/lu-zhuo.png" },
  { name: "Mu Huaishan", region: "Kaifeng City", area: "Velvet Shade", hint: "South of Springwave Pavilion, talking with Huo Tinglan.", image: "https://static.wherewindsmeet.org/guides/npc-list/mu-huaishan.png" },
  { name: "Murong Chan", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the flower pot arrangements.", image: "https://static.wherewindsmeet.org/guides/npc-list/murong-chan.png" },
  { name: "Qi Wuyu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, watching the performance up close in the center.", image: "https://static.wherewindsmeet.org/guides/npc-list/qi-wuyu.png" },
  { name: "Qin Zhu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the south side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/qin-zhu.png" },
  { name: "Qiu Fengxi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the west side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/qiu-fengxi.png" },
  { name: "Ruan Sese", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the Velvet Shade Landmark, admiring a kite outside the shop.", image: "https://static.wherewindsmeet.org/guides/npc-list/ruan-sese.png" },
  { name: "Shen Moxuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Across the bridge east of the Velvet Shade Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/shen-moxuan.png" },
  { name: "Song Shiheng", region: "Kaifeng City", area: "Velvet Shade", hint: "On the bridge east of the Velvet Shade Landmark, talking with Yan Chuchu.", image: "https://static.wherewindsmeet.org/guides/npc-list/song-shiheng.png" },
  { name: "Su Xinlu", region: "Kaifeng City", area: "Velvet Shade", hint: "South of Springwave Pavilion, talking with Yang Chunnuan and three other NPCs.", image: "https://static.wherewindsmeet.org/guides/npc-list/su-xinlu.png" },
  { name: "Tan Xiangchen", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall beside Yin Yan, near the west-side stairs to the first floor.", image: "https://static.wherewindsmeet.org/guides/npc-list/tan-xiangchen.png" },
  { name: "Tao Jingjing", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Cao Jinyang on the ground floor of Revelry Hall, on the north side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/tao-jingjing.png" },
  { name: "Tu Er", region: "Kaifeng City", area: "Velvet Shade", hint: "North of Springwave Pavilion, talking with Tu Dakuan.", image: "https://static.wherewindsmeet.org/guides/npc-list/tu-er.png" },
  { name: "Xu Lijun", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Ye Zhiqiu on the ground floor of Revelry Hall, on the east side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/xu-lijun.png" },
  { name: "Xu Yingyu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the west side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/xu-yingyu.png" },
  { name: "Xue Li", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, dining with Zhuang Zhengzhi.", image: "https://static.wherewindsmeet.org/guides/npc-list/xue-li.png" },
  { name: "Yan Chuchu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the bridge to the right of the Velvet Shade Landmark, talking with Song Shiheng.", image: "https://static.wherewindsmeet.org/guides/npc-list/yan-chuchu.png" },
  { name: "Yan Ziyan", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the south side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/yan-ziyan.png" },
  { name: "Yang Chunnuan", region: "Kaifeng City", area: "Velvet Shade", hint: "South of Springwave Pavilion, talking with Su Xinlu and three other NPCs.", image: "https://static.wherewindsmeet.org/guides/npc-list/yang-chunnuan.png" },
  { name: "Ye Zhiqiu", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Xu Lijun on the ground floor of Revelry Hall, on the east side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/ye-zhiqiu.png" },
  { name: "Yi Xi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, dining with Guo Zhixiang.", image: "https://static.wherewindsmeet.org/guides/npc-list/yi-xi.png" },
  { name: "Yu Hui", region: "Kaifeng City", area: "Velvet Shade", hint: "At the far end of the street, west of the Velvet Shade Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/yu-hui.png" },
  { name: "Zhen Huo", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the south side of the building.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhen-huo.png" },
  { name: "Zhuang Zhengzhi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, dining with Xue Li.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhuang-zhengzhi.png" },
];

const npcPinsArray = npcPins as unknown as Partial<MapPin>[];

const allPins: MapPin[] = npcPinsArray.map((p) => {
  const detail = npcDetails.find((d) => d.name === p.name);
  return {
    name: p.name ?? detail?.name ?? "Unknown NPC",
    x: p.x ?? 0,
    y: p.y ?? 0,
    region: detail?.region ?? p.region ?? undefined,
    area: detail?.area ?? p.area ?? undefined,
    hint: detail?.hint ?? p.hint ?? undefined,
    image: detail?.image ?? p.image ?? undefined,
  };
});

const allPinsSorted: MapPin[] = [...allPins].sort((a, b) => a.name.localeCompare(b.name));

const nonInteractableNpcs = [
  {
    name: "Qi Sheng",
    role: "Oddity Collector (non-interactable for chat)",
    region: "Verdant Wilds",
    area: "Southeast of General's Shrine, west of the Wayfarer",
    details:
      "Exchange Oddities with Qi Sheng to upgrade Melodies of Peace. He is present but does not trigger Old Friends / AI Chat.",
    image: "https://static.wherewindsmeet.org/guides/npc-list/qi-sheng.png",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer (non-interactable for chat)",
    region: "Qinghe",
    area: "Evercare Clinic, north of Moonveil Mountain and south of Blissful Retreat",
    details:
      "Provides healing for a fee and can expand medicine capacity when you trade Medicinal Tales. No Old Friends / AI Chat available.",
    image: "https://static.wherewindsmeet.org/guides/npc-list/yao-yaoyao.png",
  },
];

export default function NpcListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/npc-list`,
      dateModified: "2026-06-03",
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
      <HomeHubBacklink language="en" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
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
            <div className="mb-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-50">
              Players are finding this page through “npc where winds meet” and Old Friends searches. Use the map first, then jump to Qin Caiwei or Stonewash Strand-style friend checks when a specific NPC blocks completion.
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Where Winds Meet NPC List: Old Friends locations, rewards, and AI Chat.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Looking for a Where Winds Meet NPC list? Start here. This guide gives you Old Friends NPC locations, region and area hints, reward context, an interactive map preview, non-interactable NPC notes, and copy-paste AI Chat lines for stubborn friends like Qin Caiwei.
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

      <section className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
            Fast answer for searchers
          </p>
          <h2 className="text-2xl font-bold text-slate-50">
            Use this page when you need an NPC location, Old Friends reward, AI Chat line, or map pin.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-emerald-50/90">
            The page is built around the most common Where Winds Meet NPC searches: where an NPC is, whether they count as an Old Friend, what reward or completion progress they provide, and what to type when the AI Chat refuses a short answer.
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
          Interactable NPC list with all current map pins. Entries with portraits show an image; entries without portraits remain visible as text cards so Kaifeng City and other map-only NPCs are not lost. Use the hints to reach them, then apply the AI Chat pattern above. Keywords: Where Winds Meet NPC list, Old Friends NPC locations, AI Chat NPC guide, interactive NPC map.
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
          <h3 className="text-2xl font-bold text-slate-50">NPC list FAQ</h3>
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
