import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";
const ogImage = `${baseUrl}/guides/qin-caiwei/hero.jpg`;

export const metadata: Metadata = {
  title: "Kết bạn Qin Caiwei | Where Winds Meet AI Chat",
  description:
    "Bị kẹt khi kết bạn Qin Caiwei? Xem lý do lặp thoại, script AI Chat dùng ngoặc, cách reset và chào tạm biệt để tăng thiện cảm nhanh.",
  alternates: {
    canonical: `${baseUrl}/vn/guides/qin-caiwei`,
  },
  openGraph: {
    title: "Kết bạn Qin Caiwei | Where Winds Meet AI Chat",
    description:
      "Thân với Qin Caiwei: vì sao cô ấy lặp, script ngoặc vuông, reset, lời tạm biệt để lên thiện cảm và nhận thưởng Old Friends.",
    url: `${baseUrl}/vn/guides/qin-caiwei`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: "Cảnh AI Chat với Qin Caiwei trong Where Winds Meet",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kết bạn Qin Caiwei | Where Winds Meet AI Chat",
    description:
      "Kẹt chat Qin Caiwei? Dùng script ngoặc, reset, và lời chào lịch sự để phá vòng lặp và lên Friend nhanh.",
    images: [
      {
        url: ogImage,
        alt: "Giao diện AI Chat với Qin Caiwei trong Where Winds Meet",
      },
    ],
  },
};

const quickFacts = [
  { label: "Loại NPC", value: "AI Chat (Old Friends)", icon: "💬" },
  { label: "Gặp ở đâu", value: "Qinghe, danh sách Old Friends", icon: "🧭" },
  { label: "Lý do kẹt", value: "Lặp nếu bỏ qua bước truyện của cô ấy", icon: "♻️" },
  { label: "Cần gì", value: "Bạn lắng nghe, tóm tắt và diễn đạt cách cô ấy buông bỏ", icon: "🧭" },
  { label: "Kết quả", value: "Tăng hạng thân thiện + quà tuần + ghi vào Old Friends", icon: "🎁" },
  { label: "Thời gian hoàn", value: "3–6 câu nếu làm đúng", icon: "⏱️" },
];

const stubbornReasons = [
  {
    title: "Ưu tiên kể chuyện",
    detail: "Cô muốn bạn nghe góc nhìn của mình trước khi chấp nhận tình bạn.",
  },
  {
    title: "Ghét ép buộc",
    detail: 'Câu kiểu "chúng ta là bạn" thẳng thừng sẽ bị phản bác.',
  },
  {
    title: "Cần khép lại",
    detail: "Cô cần bạn phản chiếu cảm xúc và kể một kết cục hợp lý.",
  },
];

const locationNotes = [
  "Tìm Qin Caiwei ở Qinghe; cô sẽ xuất hiện trong Old Friends sau khi gặp.",
  "Tương tác qua mục AI Chat (không phải thoại thường).",
  "Không cần vật phẩm đặc biệt; chỉ chừa chỗ túi nhận quà tuần sau khi thân.",
];

const playbookSteps = [
  {
    title: "Reset & đọc gợi ý",
    text: "Nếu kẹt, bấm refresh để xóa luồng, đọc gợi ý ngắn trên hộp chat để biết cô muốn gì.",
  },
  {
    title: "Mời cô kể",
    text: 'Dùng câu ngắn như "kể tiếp đi" / "cho tôi nghe" để cô nói hết chuyện trước khi bạn dẫn hướng.',
  },
  {
    title: "Mô tả giải quyết trong ngoặc",
    text: "Viết hành động giải quyết trong ngoặc: (giúp cô đối mặt quá khứ và buông bỏ), (cô thấy được thấu hiểu và nhẹ lòng).",
  },
  {
    title: "Nói rõ quan hệ",
    text: 'Theo sau bằng tín hiệu quan hệ: (chúng ta trở thành bạn thân tin cậy), "Tôi sẽ nhớ câu chuyện của bạn, người bạn của tôi."',
  },
  {
    title: "Kết thúc lịch sự",
    text: 'Chào tạm biệt để kích thiện cảm: "Tạm biệt (cúi chào rồi rời đi)." Nếu chưa được, reset và đổi câu.',
  },
];

const dialogueRoutes = [
  {
    title: "Lộ trình A (đồng cảm, an toàn)",
    steps: [
      "Mở đầu: Hãy kể câu chuyện của bạn. Tôi đang lắng nghe.",
      "Để cô nói: Kể tiếp đi, điều gì làm bạn bận lòng?",
      "Giải quyết trong ngoặc: (giúp cô đối mặt quá khứ và chấp nhận điều không thể đổi)",
      "Tín hiệu quan hệ: (chúng ta trở thành bạn thân và tin nhau)",
      "Kết: Tạm biệt (cúi chào rồi rời đi).",
    ],
  },
  {
    title: "Lộ trình B (trực diện, nhanh)",
    steps: [
      "Mở đầu: Tôi hiểu tình thế của bạn.",
      "Phản chiếu: Bạn hối tiếc và cần khép lại.",
      "Giải quyết trong ngoặc: (cô thấy được thấu hiểu và buông gánh nặng)",
      "Tín hiệu quan hệ: Từ giờ, chúng ta là bạn thẳng thắn.",
      "Kết: (cúi chào trân trọng và rời đi như người bạn cũ)",
    ],
  },
];

const sampleScripts = [
  {
    stage: "Mở & lắng nghe",
    lines: [
      "Hãy kể câu chuyện của bạn. Tôi đang nghe.",
      "Kể tiếp đi, điều gì làm bạn bận lòng?",
      "Tôi hiểu. Nói tiếp đi.",
    ],
  },
  {
    stage: "Giải quyết (ngoặc)",
    lines: [
      "(giúp cô đối mặt quá khứ và chấp nhận điều không thể đổi)",
      "(cô được thấu hiểu, thở ra và nhẹ lòng)",
      "(chúng tôi giải quyết điều cô lo lắng)",
    ],
  },
  {
    stage: "Tín hiệu quan hệ",
    lines: [
      "(chúng ta trở thành bạn thân và tin nhau)",
      "Tạm biệt, bạn của tôi. Tôi sẽ nhớ câu chuyện của bạn.",
      "(cúi chào trân trọng và rời đi như người bạn cũ)",
    ],
  },
  {
    stage: "Khi bị lặp",
    lines: [
      "Bắt đầu lại nhé. Tôi muốn nghe hết.",
      "(reset cuộc trò chuyện và lắng nghe kỹ)",
      "Chúng ta chưa tới đoạn đó — kể nốt đi.",
    ],
  },
];

const donts = [
  'Một câu ép buộc kiểu "(bạn bị thuyết phục rằng chúng ta là bạn thân)" không có ngữ cảnh.',
  "Bỏ qua đoạn cô kể; cô cần kể ký ức chính trước khi buông bỏ.",
  'An ủi chung chung ("bạn sẽ ổn thôi") không đụng đúng vấn đề gợi ý.',
  "Cãi cọ trong luồng dài; hãy reset thay vì tranh luận 20 dòng.",
];

const aiChatBasics = [
  "Thiện cảm tăng khi bạn đáp trúng gợi ý hoặc giải quyết tình huống.",
  "Hành động trong ngoặc được xem như hướng dẫn sân khấu; hệ thống hay coi là sự thật.",
  "Một số NPC chỉ cần đồng ý; số khác cần roleplay kết thúc — Qin Caiwei thuộc nhóm sau.",
  "Lời chào ngắn, rõ ràng có thể là tín hiệu kết thúc chat và trao thiện cảm.",
];

const stuckFixes = [
  "Reset và đổi câu ngoặc: (giúp cô tha thứ cho mình) -> (giúp cô chấp nhận chuyện đã qua).",
  "Luôn có 1 câu đồng cảm trước ngoặc; nhảy thẳng vào mệnh lệnh dễ trượt.",
  "Đổi câu chào: thử Tôi sẽ nhớ câu chuyện của bạn hoặc (chúng ta rời đi như bạn tin cậy).",
  "Nếu cô cứ tự giới thiệu lại, hãy nói lại vấn đề của cô trước khi giải.",
];

const successLines = [
  "Combo A: Kể tiếp đi? -> (giúp cô đối mặt quá khứ) -> (chúng ta thành bạn thân) -> Tạm biệt (cúi chào rồi đi).",
  "Combo B: Tôi hiểu tình thế của bạn. -> (cô được thấu hiểu và buông bỏ) -> Từ giờ chúng ta là bạn thẳng thắn. -> (cúi chào như bạn cũ)",
  "Chốt hay kích: Tạm biệt, bạn của tôi. Tôi sẽ nhớ câu chuyện của bạn. / (chúng ta rời đi như bạn tin cậy).",
];

const failLines = [
  'Lệnh một dòng: "(bạn tin rằng chúng ta là bạn thân)" khi chưa nghe cô nói.',
  "An ủi chung chung: Bạn sẽ ổn thôi. (không nhắc vấn đề cô ám ảnh).",
  "Tranh luận 20 dòng không reset; hệ thống đánh dấu ồn.",
  "Bỏ qua gợi ý trên hộp chat; bạn không đụng vào vấn đề cô nhắc.",
];

const fullScript = [
  "Hãy kể câu chuyện của bạn. Tôi đang nghe.",
  "Kể tiếp đi, điều gì làm bạn bận lòng?",
  "(giúp cô đối mặt quá khứ và chấp nhận điều không thể đổi)",
  "(chúng ta trở thành bạn thân và tin nhau)",
  "Tạm biệt (cúi chào rồi rời đi).",
];

const rewards = [
  "Quà tuần (tiền/nguyên liệu) khi cô vào danh sách Old Friends.",
  "Tiến độ Old Friends ở Qinghe/khám phá.",
  "Tránh phải quay lại chat kẹt khi bạn muốn chạy nhanh nhiệm vụ.",
];

export default function QinCaiweiGuidePage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-950/60 to-slate-950" />
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-5 relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Hướng dẫn kết bạn Qin Caiwei (AI Chat)
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Qin Caiwei là NPC AI Chat khó chiều. Nếu chat bị lặp hoặc không lên hạng Friend, dùng hướng dẫn này: cô sẽ lặp nếu bạn vội, ghét câu ép buộc, chỉ tiến triển khi bạn nghe, tóm tắt và mô tả kết cục cụ thể. Dùng 5 bước và các câu copy bên dưới để đẩy cô lên Friend nhanh.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/vn/guides/gift-of-gab"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                💬 Hỗ trợ đối thoại: Gift of Gab
              </Link>
              <Link
                href="/vn/guides/woven-with-malice"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                🧶 Nhiệm vụ truyện: Sợi Định Mệnh
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/40">
              <Image
                src="/guides/qin-caiwei/hero.jpg"
                alt="Chân dung AI Chat của Qin Caiwei"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">Nguồn ảnh: allthings.how</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">Thông tin nhanh (Qin Caiwei)</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-inner shadow-black/20"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{fact.icon}</span>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-amber-800/50 bg-amber-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <h3 className="text-2xl font-bold text-amber-100">Vì sao cô cố chấp</h3>
          </div>
          <div className="space-y-3">
            {stubbornReasons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-700/40 bg-amber-900/20 p-4">
                <p className="text-sm font-semibold text-amber-100">{item.title}</p>
                <p className="text-sm text-amber-50/80 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <h2 className="text-2xl font-bold text-slate-50">Tìm và bắt đầu chat ở đâu</h2>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {locationNotes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">-</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚀</span>
          <h2 className="text-2xl font-bold text-slate-50">5 bước kết bạn Qin Caiwei</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {playbookSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-emerald-700/40 bg-emerald-900/20 p-4 shadow-md"
            >
              <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200 text-sm font-bold border border-emerald-500/40">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-emerald-100 pl-8">{step.title}</h3>
              <p className="mt-2 text-xs text-emerald-50/80 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧩</span>
          <h3 className="text-2xl font-bold text-slate-50">AI Chat chấm điểm thế nào</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Hệ thống so khớp nhẹ: kiểm tra bạn có nhắc gợi ý, phản chiếu cảm xúc và mô tả kết cục hợp lý. Nếu luồng ồn/ lệch chủ đề, cờ thân thiện không bật. Giữ 1 câu đồng cảm, 1 hành động ngoặc, 1 lời chào để đủ mẫu và tránh nhồi từ khóa.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Gợi ý mô tả điều kiện thắng; nhắc lại một lần.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Hành động trong ngoặc tính như việc bạn đã làm; phải gắn với Qin Caiwei.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Lời chào là tín hiệu kết thúc sạch.</span></li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎙️</span>
          <h2 className="text-2xl font-bold text-slate-50">Hai lộ trình sẵn dùng</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {dialogueRoutes.map((route) => (
            <div key={route.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
              <p className="text-sm font-semibold text-slate-100">{route.title}</p>
              <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside">
                {route.steps.map((step) => (
                  <li key={step} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⌨️</span>
            <h2 className="text-2xl font-bold text-slate-50">Câu copy-paste hiệu quả</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {sampleScripts.map((block) => (
              <div key={block.stage} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                <p className="text-sm font-semibold text-slate-100">{block.stage}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {block.lines.map((line) => (
                    <li
                      key={line}
                      className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 font-mono text-[11px] text-emerald-200/90"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-rose-800/40 bg-rose-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <h3 className="text-2xl font-bold text-rose-100">Những thứ làm kẹt thiện cảm</h3>
          </div>
          <ul className="space-y-3">
            {donts.map((item) => (
              <li key={item} className="rounded-xl border border-rose-700/40 bg-rose-900/20 p-3 text-sm text-rose-50/90 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">✅</span>
          <h3 className="text-2xl font-bold text-slate-50">Câu hiệu quả vs câu trượt</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/20 p-4 space-y-2">
            <p className="text-sm font-semibold text-emerald-100">Câu hiệu quả</p>
            <ul className="space-y-2 text-xs text-emerald-50/90">
              {successLines.map((line) => (
                <li key={line} className="rounded-lg border border-emerald-800/60 bg-emerald-900/30 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-700/40 bg-rose-900/20 p-4 space-y-2">
            <p className="text-sm font-semibold text-rose-100">Câu dễ trượt</p>
            <ul className="space-y-2 text-xs text-rose-50/90">
              {failLines.map((line) => (
                <li key={line} className="rounded-lg border border-rose-800/60 bg-rose-900/30 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📋</span>
          <h3 className="text-2xl font-bold text-slate-50">Script đầy đủ (copy)</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
            {fullScript.map((line) => (
              <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                {line}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Lý do nên làm sớm</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Không chỉ cho đủ bộ: Old Friends mở quà tuần, đoạn truyện nhỏ và tiền tệ ổn định. Qinghe cũng đếm Old Friends cho mục tiêu khám phá, nên nâng thiện cảm sớm giúp tiến độ vùng. Vì chat của cô khó chịu, xử lý ngay sẽ tránh phải quay lại khi bạn muốn chạy nhiệm vụ nhanh.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Quà tuần: coin, nguyên liệu, vật phẩm thú vị.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Tính vào checklist Old Friends ở Qinghe.</span></li>
          <li className="flex gap-2"><span className="text-emerald-300">-</span><span>Tránh quay lại chat kẹt khi tập trung endgame.</span></li>
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <h3 className="text-2xl font-bold text-slate-50">Nhắc nhanh về AI Chat</h3>
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

        <div className="space-y-3 rounded-3xl border border-amber-700/40 bg-amber-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎁</span>
            <h3 className="text-2xl font-bold text-amber-100">Bạn nhận gì khi thân với cô</h3>
          </div>
          <ul className="space-y-2 text-sm text-amber-100/90">
            {rewards.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-amber-300">-</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-amber-700/40 bg-amber-900/30 p-4 text-xs text-amber-100/80">
            Nếu vẫn kẹt sau 2–3 reset, đổi vị trí câu ngoặc và lời chào; hệ thống sẽ chấm khác đi.
          </div>
        </div>
      </section>
    </article>
  );
}

