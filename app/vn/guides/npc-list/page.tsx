import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import npcPins from "../../../../public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { MapPin } from "../../../guides/npc-list/NpcMapClient";
import NpcImagePreview from "../../../guides/npc-list/NpcImagePreview";
import { useMemo } from "react";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Danh sách NPC & Old Friends | Where Winds Meet",
  description:
    "Danh sách NPC Old Friends: khu vực, thưởng, mẹo AI Chat, bản đồ xem trước và câu copy-paste để kết bạn nhanh.",
  alternates: {
    canonical: `${baseUrl}/vn/guides/npc-list`,
  },
  openGraph: {
    title: "Danh sách NPC & Old Friends | Where Winds Meet",
    description:
      "Vị trí Old Friends, thưởng, mẹo AI Chat và câu copy-paste để kết bạn nhanh trong Where Winds Meet.",
    url: `${baseUrl}/vn/guides/npc-list`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        width: 1200,
        height: 675,
        alt: "Ảnh tổng hợp Old Friends",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danh sách NPC & Old Friends | Where Winds Meet",
    description:
      "Tìm Old Friends nhanh: vị trí, thưởng, mẹo AI Chat và câu copy-paste để kết bạn.",
    images: [{ url: `${baseUrl}/guides/npc-list/hero.png`, alt: "Ảnh Old Friends" }],
  },
};

const quickFacts = [
  { label: "Phạm vi", value: "Old Friends / NPC AI Chat", icon: "💬" },
  { label: "Khu vực", value: "Qinghe và các vùng tiếp theo", icon: "🧭" },
  { label: "Hành động chính", value: "Lắng nghe, ngoặc giải quyết, chào tạm biệt", icon: "🧩" },
  { label: "Thưởng", value: "Quà tuần, vật phẩm một lần, hoàn thành bộ sưu tập", icon: "🎁" },
];

const npcHighlights = [
  {
    name: "Qin Caiwei",
    region: "Qinghe",
    rewards: "Quà tuần Old Friends + đoạn truyện",
    chatTip: "Lắng nghe, ngoặc giải quyết, chào lịch sự",
    difficulty: "Khó",
    href: "/vn/guides/qin-caiwei",
  },
  {
    name: "Li Laizuo",
    region: "Qinghe",
    rewards: "Đoạn truyện + quà nhỏ",
    chatTip: "Thừa nhận hối tiếc, chào thân thiện",
    difficulty: "Trung bình",
    image: "/guides/npc-list/li-laizuo.png",
  },
  {
    name: "Fang Xu",
    region: "Rìa Qinghe",
    rewards: "Coin, thoại flavor",
    chatTip: "Phản chiếu lo lắng, ngoặc giải quyết",
    difficulty: "Trung bình",
    image: "/guides/npc-list/fang-xu.png",
  },
  {
    name: "Lie Buxi",
    region: "Qinghe",
    rewards: "Tiến độ Old Friends",
    chatTip: "Đồng cảm trước, rồi chốt kết thúc rõ",
    difficulty: "Trung bình",
    image: "/guides/npc-list/lie-buxi.png",
  },
];

const aiChatBasics = [
  "Đọc gợi ý trên hộp chat và nhắc lại một lần.",
  "Một câu đồng cảm, một ngoặc giải quyết, một lời chào rõ.",
  "Giữ mỗi luồng ngắn (3–6 câu); reset nếu lạc đề.",
  "Cụ thể tốt hơn an ủi chung; tránh câu ép buộc một dòng.",
];

const copyLines = [
  "Hãy kể câu chuyện của bạn. Tôi đang nghe.",
  "Kể tiếp đi, điều gì làm bạn bận lòng?",
  "(giúp bạn giải quyết và nhẹ lòng)",
  "(chúng ta trở thành bạn và tin nhau)",
  "Tạm biệt (cúi chào rồi rời đi).",
];

type NpcEntry = {
  name: string;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
  href?: string;
};

const npcDetails: NpcEntry[] = [
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Li Laizuo can be found with a group of subordinates next to the general's shrine in the compound.", image: "/guides/npc-list/f41bc20333ff369747d89ab7297f314f.png" },
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
];

export default function NPCListPage() {
  const mapPins = useMemo(
    () =>
      (npcPins as Array<Omit<MapPin, "hint" | "image"> & { hint?: string | null; image?: string | null }>).map(
        (pin) => ({
          ...pin,
          hint: pin.hint ?? undefined,
          image: pin.image ?? undefined,
        })
      ),
    []
  );

  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg5.webp"
            alt="Nền danh sách NPC Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Danh sách NPC & bản đồ Old Friends
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Tra cứu NPC Old Friends: vị trí, thưởng, mẹo AI Chat và câu copy-paste để kết bạn nhanh. Có bản đồ xem trước và hình thu nhỏ để đối chiếu.
          </p>
          <p className="text-xs text-slate-400">
            Mẹo: giữ mỗi luồng 3–6 câu, reset nếu lạc đề; dùng ngoặc hành động để hệ thống chấm điểm dễ hơn.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <Link href="/vn/guides/qin-caiwei" className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100">
              Qin Caiwei script
            </Link>
            <Link href="/vn/guides/gift-of-gab" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100">
              Gift of Gab
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Thông tin nhanh
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-slate-950/30">
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{item.icon}</span>
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-amber-800/40 bg-amber-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌟</span>
            <h3 className="text-2xl font-bold text-amber-100">NPC nổi bật</h3>
          </div>
          <div className="grid gap-3">
            {npcHighlights.map((npc) => (
              <div key={npc.name} className="rounded-2xl border border-amber-700/40 bg-amber-900/20 p-4 flex gap-3">
                {npc.image ? (
                  <NpcImagePreview src={npc.image} alt={npc.name} thumbnailClassName="h-24" />
                ) : (
                  <div className="h-24 w-24 rounded-xl border border-amber-700/30 bg-amber-950/30 flex items-center justify-center text-amber-200 text-xs">
                    {npc.region}
                  </div>
                )}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-amber-50">{npc.name}</h4>
                    <span className="rounded-full border border-amber-600/50 bg-amber-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-amber-100">
                      {npc.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-amber-100/90">Vùng: {npc.region}</p>
                  <p className="text-xs text-amber-100/80">Thưởng: {npc.rewards}</p>
                  <p className="text-xs text-amber-100/80">Mẹo chat: {npc.chatTip}</p>
                  {npc.href ? (
                    <Link href={npc.href} className="text-[11px] text-emerald-200 underline underline-offset-4 hover:text-emerald-100">
                      Xem hướng dẫn chi tiết →
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Bản đồ Old Friends</p>
            <h2 className="text-2xl font-semibold text-slate-50">Xem trước vị trí</h2>
          </div>
          <p className="text-xs text-slate-400">Phóng to/thu nhỏ để xem marker</p>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-inner shadow-slate-950/40">
          <NpcMapClient pins={mapPins} />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            <h2 className="text-2xl font-semibold text-slate-50">Cơ bản AI Chat</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {aiChatBasics.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-emerald-300">-</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 rounded-3xl border border-emerald-700/40 bg-emerald-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⌨️</span>
            <h3 className="text-2xl font-bold text-emerald-100">Câu copy-paste</h3>
          </div>
          <div className="grid gap-2 text-xs text-emerald-50/90">
            {copyLines.map((line) => (
              <div key={line} className="rounded-lg border border-emerald-800/60 bg-emerald-900/30 px-3 py-2 font-mono">
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <h2 className="text-2xl font-semibold text-slate-50">Danh sách NPC (ảnh thu nhỏ)</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {npcDetails.map((npc) => (
            <article
              key={npc.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full bg-slate-900/80">
                {npc.image ? (
                  <Image
                    src={npc.image}
                    alt={`${npc.name} NPC portrait`}
                    fill
                    className="object-contain object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">No image</div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">{npc.name}</h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {npc.region ?? "Unknown"}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {npc.area ?? "—"}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {npc.hint ?? "Find and chat to add to Old Friends."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
