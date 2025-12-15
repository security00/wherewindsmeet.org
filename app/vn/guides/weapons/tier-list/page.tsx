import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Tier list vũ khí Where Winds Meet – xếp hạng mọi vũ khí",
  description:
    "Tier list vũ khí Where Winds Meet cho PvE, PvP và endgame: gợi ý vũ khí mạnh, dễ chơi và phù hợp lối chơi.",
  alternates: buildHreflangAlternates("/guides/weapons/tier-list", { canonicalLanguage: "vi" }),
};

const tierSummaries = [
  {
    tier: "S Tier",
    summary:
      "Nhóm vũ khí mạnh nhất: dễ xử lý PvE endgame và kèo áp lực nếu bạn nắm nền tảng tốt.",
    bestFor:
      "Người chơi muốn sức mạnh ổn định, có dư địa học thêm kỹ thuật (tech) nâng cao.",
  },
  {
    tier: "A Tier",
    summary:
      "Vũ khí mạnh và linh hoạt: tỏa sáng khi bạn đánh đúng điểm mạnh và ghép build phù hợp.",
    bestFor:
      "Người thích thử đường/bộ build nhưng vẫn cần độ ổn định.",
  },
  {
    tier: "B Tier",
    summary:
      "Lựa chọn chuyên biệt hoặc đòi hỏi thao tác: rất mạnh trong tay người có kỹ năng hoặc đúng kèo.",
    bestFor:
      "Người thích chơi ngoài meta (off-meta), thể hiện kỹ năng và chọn kèo khắc chế.",
  },
];

const tierWeaponExamples = [
  {
    label: "Vũ khí S-Tier",
    description:
      "Những lựa chọn top: mạnh gần như mọi nơi, đặc biệt là PvE giai đoạn cuối và nội dung tổ đội khó.",
    weapons: [
      {
        name: "Nameless Sword",
        note: "Vũ khí chủ lực cực linh hoạt: lộ trình mạnh cho cốt truyện, PvE và PvP giai đoạn đầu.",
      },
      {
        name: "Spear",
        note: "Tầm đánh tốt, bộ chiêu an toàn để học boss mà vẫn giữ DPS ổn.",
      },
      {
        name: "Mo Blade",
        note: "Đấu sĩ (bruiser) nặng tay: thưởng cho vị trí và nhịp ra chiêu chuẩn.",
      },
      {
        name: "Umbrella",
        note: "Phòng thủ + công cụ phản đòn, cân bằng giữa sống sót PvE và tạo đột biến PvP.",
      },
      {
        name: "Dual Blades",
        note: "Nhịp cao, có cửa sổ burst lớn cho người chơi tự tin tay.",
      },
    ],
  },
  {
    label: "Vũ khí A-Tier",
    description:
      "Có thể vượt hầu hết nội dung, nhưng thường cần setup/đường chơi cụ thể hoặc luyện tay để ổn định.",
    weapons: [
      {
        name: "Fan",
        note: "Thiên về khống chế: thưởng cho giữ khoảng cách, ép góc và dùng hồi chiêu thông minh.",
      },
      {
        name: "Hybrid Sword + Spear",
        note: "Kết hợp cấu rỉa an toàn với đòn kết liễu tốt khi bạn nắm lộ trình.",
      },
      {
        name: "Umbrella/Fan hỗ trợ",
        note: "Rất sáng trong đội hình ưu tiên khiên, buff và khống chế.",
      },
    ],
  },
  {
    label: "Vũ khí B-Tier",
    description:
      "Nhiều kèo/đường chơi khá “kén” hoặc phụ thuộc kèo (matchup), nhưng rất đáng khi bạn luyện thành thục.",
    weapons: [
      {
        name: "Đường chơi glass-cannon",
        note: "Sát thương rất cao nếu hiếm khi bị chạm, nhưng sai một nhịp là bị phạt nặng.",
      },
      {
        name: "Hybrid off-meta",
        note: "Kết hợp lạ: đổi độ ổn định lấy phong cách và yếu tố bất ngờ.",
      },
      {
        name: "Setup PvP thử nghiệm",
        note: "Build chuyên để khắc chế đối thủ hoặc đội hình cụ thể.",
      },
    ],
  },
];

const weaponCategories = [
  {
    name: "Vũ khí cận chiến",
    description: "Đánh gần, sát thương cao, thiên hướng áp sát và tấn công chủ động",
  },
  {
    name: "Vũ khí tầm xa",
    description: "Đánh từ xa để kiểm soát nhịp và giữ vị trí an toàn",
  },
  {
    name: "Vũ khí lai",
    description: "Linh hoạt giữa đánh gần và đánh xa",
  },
];

export default function WeaponTierListPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.webp"
            alt="Nền tier list vũ khí Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Tier list vũ khí Where Winds Meet – xếp hạng mọi vũ khí.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Chọn đúng vũ khí là nền tảng của trải nghiệm Where Winds Meet. Mỗi vũ khí có lối chơi, độ mạnh theo giai đoạn và độ “khó học” khác nhau.
            Tier list này đánh giá nhiều khía cạnh: sức mạnh thô, độ dễ dùng, độ linh hoạt theo nội dung, và mức “thoải mái” khi bước vào endgame.
            Dù bạn là người mới đang rối vì quá nhiều lựa chọn hay người chơi lâu muốn tối ưu kho vũ khí, trang này giúp bạn có khung tham chiếu rõ ràng.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Tier list tổng của hub thường xếp hạng cả vũ khí lẫn đường build. Còn trang này “zoom” vào vũ khí để so sánh trực tiếp: không chỉ vũ khí nào
            mạnh, mà còn vì sao mạnh và bạn phải đánh đổi điều gì khi chọn nó. Có vũ khí mạnh hơn hẳn ở trình độ cao; cũng có vũ khí dễ làm quen, thân thiện
            cho người mới dù trần sức mạnh lý thuyết thấp hơn.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Nếu bạn tìm “tier list vũ khí Where Winds Meet” để quyết định loadout, trang này sẽ xếp hạng mọi lựa chọn và giải thích bối cảnh sử dụng:
            đi cốt truyện (story), boss PvE endgame, chơi tổ đội, đấu tay đôi PvP, hoặc chạy nhanh. Khi bạn phân vân nên đầu tư vào vũ khí nào tiếp theo, hãy
            dùng trang này làm điểm tựa. Muốn cái nhìn rộng thì xem tier list tổng; muốn chọn vũ khí cụ thể thì đọc tại đây rồi qua trang builds để hoàn thiện
            cấu hình (setup).
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Cách tier vũ khí hoạt động.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Chúng tôi gom vũ khí thành các “dải sức mạnh” thay vì cãi nhau về chênh lệch số nhỏ. Mỗi tier phản ánh cảm giác thực chiến trong PvE/PvP:
          độ thoải mái, độ ổn định, và mức công sức cần bỏ ra để vũ khí phát huy. Hãy dùng tier như hướng dẫn, rồi tự điều chỉnh theo mục tiêu và trải nghiệm
          của bạn.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {tierSummaries.map((tier) => (
            <div
              key={tier.tier}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {tier.tier}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {tier.summary}
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
                Phù hợp nhất:{" "}
                <span className="text-slate-200">{tier.bestFor}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Nhóm vũ khí và lối chơi.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Vũ khí trong Where Winds Meet có thể chia thành các nhóm lớn, mỗi nhóm mở ra lối chơi khác nhau và đòi hỏi kỹ năng khác nhau. Khi bạn hiểu nhóm
          nào hợp mình, tier list sẽ “dùng được” hơn nhiều: bạn không cần học hết mọi vũ khí. Hãy chọn nhóm bạn thích, rồi xem các lựa chọn đứng cao trong
          nhóm đó. Nếu chưa biết bắt đầu từ đâu, hãy chọn một vũ khí ở giữa tier list (ổn định, dễ học), nắm cơ bản trước khi chạy theo meta thuần.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {weaponCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">{cat.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Hub có hướng dẫn riêng cho các vũ khí chính. Những trang đó đi sâu cơ chế, combo, tương tác (synergy) theo chỉ số và tình huống sử dụng – sâu hơn hẳn tier list.
          Hãy dùng tier list để chọn ứng viên, rồi đọc hướng dẫn vũ khí của lựa chọn top của bạn để hiểu kỹ và chơi chắc tay.
        </p>
        <div className="mt-4">
          <Link
            href="/vn/guides/weapons"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Xem hướng dẫn vũ khí
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Cách đọc tier list vũ khí này.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Xếp hạng trong tier list phản ánh nhiều yếu tố: sát thương thô, độ cứng cáp, tốc độ “vào form” (đủ mạnh khi có trang bị/chỉ số), và độ linh hoạt theo
          nhiều lối chơi. Vũ khí S-Tier thường tốt ở đa số khía cạnh; còn vũ khí thấp tier hơn có thể mạnh ở một điểm nhưng hụt ở điểm khác.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Mức “power” tổng thể</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              S-Tier mạnh trong hầu hết tình huống. A-Tier ổn định nhưng có thể kém ở một số kèo (matchup). B-Tier có bản sắc rõ nhưng cần build/đường chơi phù hợp
              để tỏa sáng. Tier thấp hơn vẫn chơi được nếu bạn chấp nhận hạn chế và biết cách khai thác.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Lộ trình học (learning curve)</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Có vũ khí mạnh ngay khi cầm lên. Cũng có vũ khí cần chỉ số, code/đồ hỗ trợ, hoặc luyện tay mới “chạy đúng”. Tier list này giả định mức tối ưu
              vừa phải. Một vũ khí nhìn “trung bình” trên giấy đôi khi lại rất đã khi bạn đầu tư đúng tương tác (synergy) theo chỉ số.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Độ linh hoạt</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Vũ khí linh hoạt vẫn chơi ổn ở PvE, PvP và nhiều kiểu nội dung. Vũ khí chuyên trị có thể áp đảo ở một mảng nhưng hụt ở mảng khác. Nếu bạn hay
              đổi giữa solo và chơi nhóm, độ linh hoạt rất đáng giá; còn vũ khí chuyên trị cho phép bạn đi sâu “niche” và tối ưu đúng kèo.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Chọn vũ khí đầu tiên.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Nếu bạn mới chơi và dùng tier list để chọn vũ khí bắt đầu, hãy làm theo cách này: chọn vũ khí đứng cao nhất trong nhóm bạn thích, rồi tự hỏi xem
          lối đánh có “hợp tay” không. Nhịp ra đòn có tự nhiên không? Animation bạn thấy đã hay chán? Những yếu tố cảm giác này thường quan trọng hơn tier
          số, đặc biệt ở giai đoạn đầu.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet thưởng cho sự chuyên sâu. Bạn sẽ mạnh lên nhanh hơn nếu dùng một vũ khí hàng chục giờ thay vì đổi liên tục. Kể cả vũ khí xếp
          thấp tier hơn vẫn rất mạnh nếu bạn thật sự thuần thục. Vì vậy, hãy chọn một lựa chọn “giữa bảng” mà bạn thấy thích, chơi đủ lâu để nắm nền tảng,
          rồi quay lại tier list khi đã vào endgame. Lúc đó bạn sẽ đủ kinh nghiệm để cân nhắc việc đổi sang vũ khí mạnh hơn có đáng công học lại hay không.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Ví dụ vũ khí theo từng tier.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Các ví dụ dưới đây giúp bạn hình dung vũ khí “nằm” ở tier nào và vì sao. Danh sách không bao quát hết và thứ hạng có thể đổi theo patch, nhưng
          đủ để bạn có điểm tựa khi chọn thứ nên nâng và luyện.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {tierWeaponExamples.map((tier) => (
            <div
              key={tier.label}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {tier.label}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {tier.description}
              </p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-200">
                {tier.weapons.map((weapon) => (
                  <li key={weapon.name}>
                    <span className="font-semibold">{weapon.name}</span>
                    <span className="text-slate-400"> – {weapon.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Tối ưu vũ khí ở endgame.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Ở endgame, tier list trở nên hữu dụng hơn vì bạn không còn “thử cho vui” mà sẽ tối ưu. Lúc này, nên sở hữu vũ khí ở nhiều tier để thích nghi từng
          nội dung. Vũ khí S-Tier có thể gánh các boss “routine”, nhưng một lựa chọn B-Tier chuyên trị đôi khi lại khiến một kèo khó trở nên dễ thở hơn.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Endgame cũng là câu chuyện kèo (matchup). “Vũ khí tốt nhất” phụ thuộc vào kẻ địch bạn gặp. Có vũ khí rất mạnh khi đánh quái ngoài bản đồ nhưng lại
          khó chịu khi gặp mục tiêu biết đỡ/block; ngược lại có vũ khí nhìn chung yếu hơn nhưng có một công cụ (tool) giúp “khắc chế” boss cụ thể. Hãy dùng
          tier list làm điểm xuất phát, rồi tùy biến bộ trang bị (loadout) theo thử thách bạn đang gặp.
        </p>
        <div className="mt-4">
          <Link
            href="/vn/guides/endgame"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Hướng dẫn Endgame
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Kết hợp vũ khí & tương tác (synergy)
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Xếp hạng từng vũ khí là quan trọng, nhưng tương tác (synergy) cũng quan trọng không kém. Có cặp vũ khí phối trong cùng build sẽ bổ trợ, khuếch đại điểm mạnh
          của nhau; cũng có cặp lại “giẫm chân” vì tranh cùng chỉ số và vai trò. Ghép vũ khí thông minh có thể nâng cả những lựa chọn thấp tier thành build
          cực hiệu quả.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Trang builds của hub sẽ giải thích các combo vũ khí sâu hơn. Nếu bạn thích một vũ khí B-Tier (hoặc thấp hơn), hãy xem builds để tìm archetype phù
          hợp và các lựa chọn phối tương tác (synergy). Nhiều vũ khí chỉ “nở” đúng nghĩa khi bạn build xoay quanh nó. Đừng để tier số cản bạn thử những combo bạn thấy
          hứng thú.
        </p>
        <div className="mt-4">
          <Link
            href="/vn/guides/builds"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Xem trang Builds
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Cập nhật tier list theo patch.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Tier list phản ánh patch hiện tại. Sau các đợt cân bằng lớn, thứ hạng vũ khí có thể đổi đáng kể. Khi có patch mới, hãy quay lại để xem vũ khí bạn
          thích lên hay xuống. Có vũ khí đang “giữa bảng” có thể nhảy lên S-Tier nếu các thay đổi chạm đúng điểm mạnh – và ngược lại.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Nếu bạn bookmark trang này và xem định kỳ, bạn sẽ nắm được cộng đồng đang đánh giá vũ khí nào mạnh. Điều này giúp quyết định: nên nâng gì tiếp,
          đầu tư tài nguyên vào đâu, và lúc nào nên “xoay trục” sang lựa chọn mới. Nhớ rằng tier chỉ là gợi ý, không phải luật: hãy chơi vũ khí bạn thích,
          nhưng vẫn nên biết mình đang đứng ở đâu trong meta.
        </p>
      </section>
    </article>
  );
}
