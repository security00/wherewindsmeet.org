import type { WeaponDetail } from "./weaponDetails";
import type { WeaponId } from "./weapons";

export const weaponDetails: Record<WeaponId, WeaponDetail> = {
  "dual-blades": {
    slogan: "Burst cận chiến tầm rất gần, áp sát và kết liễu nhanh.",
    difficulty: "Advanced",
    recommendedFor:
      "Người chơi thích cận chiến mạo hiểm, sẵn sàng luyện cancel/nhịp timing và muốn dồn sát thương trong một cửa sổ ngắn.",
    positioning: [
      "Thiên về “kết liễu” hơn “farm nhàn”: tầm đánh ngắn, nhưng startup/recovery nhanh và có nhiều cửa sổ cancel/di chuyển. Khi đọc đúng khoảng hở, song đao có thể dồn lượng sát thương lớn trong thời gian rất ngắn.",
      "PVE: phù hợp với người thích học pattern boss và tìm góc. Chờ aggro ổn định, vòng sang sườn/lưng, ép stagger/break, rồi rút ra trước khi boss vào chuỗi quét lớn.",
      "PVP/đấu nhỏ: vận hành như một sát thủ. Trước tiên dụ đối thủ dùng công cụ phòng thủ, sau đó mới commit. Vũ khí này phóng đại cả điểm mạnh lẫn sai lầm – hợp với người muốn nâng kỹ năng thực thi.",
    ],
    pros: [
      "Nhịp combo rất nhanh, burst mạnh trong khung ngắn.",
      "Cơ động tốt; dash/cancel giúp vào-ra an toàn hơn.",
      "Trừng phạt lỗi đối phương rất tốt khi đã hiểu nhịp giao tranh.",
      "Cảm giác “impact” mạnh, dễ tạo khoảnh khắc highlight.",
    ],
    cons: [
      "Tầm ngắn: sai vị trí sẽ bị trừng phạt rất nhanh.",
      "Đòi hỏi nhịp/cancel chuẩn; tham đòn sẽ bị phạt nặng.",
      "Cần luyện qua nhiều boss; không hợp kiểu chơi thư thả.",
      "Nhạy với độ trễ/FPS hơn so với vũ khí chậm tầm dài.",
    ],
    practiceTips: [
      "Bài tập cơ bản: dash vào → 1 combo ngắn → rút ra ngay. Không tham combo thứ hai; mục tiêu là “một lượt vào rồi ra”.",
      "Chọn boss có telegraph rõ; chỉ punish đúng hoạt ảnh đó bằng 1 chuỗi rồi lùi.",
      "Xây combo tối giản (vài đòn cốt lõi + 1 kỹ năng di chuyển). Khi đã ổn mới thêm kỹ năng.",
      "Phong cách siêu cơ động (ví dụ đi cùng rope dart): kéo mục tiêu vào vị trí thuận, dùng song đao cho 1 combo sạch rồi disengage.",
    ],
    videoFocusPoints: [
      "Quan sát khoảng cách khi vào: vào nhanh – ra nhanh, tránh bám quá lâu.",
      "Các pha mở giao tranh đến từ đâu? Dash thẳng, bước ngang vào lưng… để rút ra opening cho mình.",
      "Người chơi xử lý AoE thế nào: rút ra, lăn qua hay reset? Điều này quyết định tính thực dụng, không chỉ đẹp mắt.",
    ],
  },
  sword: {
    slogan: "Kiếm ổn định, cân bằng – lựa chọn rất tốt để bắt đầu.",
    difficulty: "Easy",
    recommendedFor:
      "Người mới muốn học hệ thống, tránh các điểm mạnh/yếu cực đoan và thích phong cách kiếm cổ điển.",
    positioning: [
      "Phương án “mặc định”: không phải đỉnh tuyệt đối ở mọi mặt, nhưng hiếm khi tệ. Tầm trung, nhịp dễ đọc, phòng thủ trực quan – rất hợp làm vũ khí main đầu tiên.",
      "PVE: đi story, farm quái, dungeon đều ổn. Kiếm là vũ khí tốt để luyện khung né, phá posture và nhịp aggro.",
      "Về sau vẫn hữu dụng: học boss/cơ chế mới thường dễ hơn với một vũ khí ít “bảo trì” so với các lựa chọn high‑risk.",
    ],
    pros: [
      "Cân bằng, rào cản vào thấp.",
      "Kỹ năng thẳng thắn, ít đòi hỏi căn góc/đoán hướng quá nhiều.",
      "Dễ tha thứ lỗi; trượt nhịp nhỏ hiếm khi phá vỡ toàn bộ giao tranh.",
      "“Đủ tốt ở mọi nơi”, giúp đổi build/vai trò nhẹ nhàng.",
    ],
    cons: [
      "Ai thích burst cực lớn hoặc độ lì cực cao sẽ thấy thiếu “đỉnh” rõ rệt.",
      "Trần kỹ năng phụ thuộc nhiều vào hiểu biết người chơi hơn là mánh vũ khí.",
      "Trên bảng DPS thuần có thể không đứng top, dù cảm giác chơi vẫn rất mạnh.",
    ],
    practiceTips: [
      "Vòng lặp: mở để phá posture → combo ngắn → ưu tiên giữ guard/né thay vì kéo dài tham đòn.",
      "Chọn 1 đòn nặng của quái/boss và luyện block đúng nhịp đến khi chắc tay.",
      "Khi farm: tự đặt luật “tối đa 3 hit mỗi lượt áp sát” để chống tham.",
      "Kiểu chơi thư thả: khi stamina đầy thì charge đòn nặng; khi stamina thấp, đổi sang vũ khí phụ/mystic một nhịp rồi quay lại.",
    ],
    videoFocusPoints: [
      "Chú ý khoảng nghỉ giữa chuỗi – đó là cửa sổ ra quyết định.",
      "Kỹ năng nào có di chuyển/guard đi kèm? Đó thường là nút an toàn.",
      "Gặp nhiều mục tiêu: quan sát vị trí để tránh bị kẹp vòng.",
    ],
  },
  spear: {
    slogan: "Vũ khí tầm dài cân bằng giữa tầm với, kiểm soát và áp lực tuyến trước ổn định.",
    difficulty: "Moderate",
    recommendedFor:
      "Người chơi thích kiểm soát không gian từ khoảng cách an toàn và không ngại giữ nhịp giao tranh.",
    positioning: [
      "Thương là “điểm giữa” dễ chịu: tầm xa hơn kiếm nhưng chưa phải kiểu đánh thuần tầm xa. Các đòn đâm/quét mạnh giúp bạn đánh ở rìa nhóm quái và cắt ý đồ áp sát của đối thủ.",
      "Trong PVE, thương hoạt động tốt như công cụ tuyến trước ổn định. Không cần “ăn” mọi cú đánh như một tanker thuần, nhưng vẫn có thể giữ nguy hiểm ở khoảng cách an toàn bằng cách kiểm soát vị trí và tempo. Với người đang học hành vi boss, thương thường dễ thở hơn các vũ khí cận chiến tầm ngắn.",
      "Trong PVP quy mô nhỏ hoặc co‑op, thương thường đóng vai trò “kẻ kẻ vạch”: tầm hiệu quả của bạn tạo ra một vùng đối thủ ngại bước vào. Bạn có thể không đứng top mọi bảng sát thương, nhưng lại làm chiến trường dễ chịu hơn cho đồng đội phía sau.",
    ],
    pros: [
      "Tầm với tốt giúp bạn trao đổi đòn trước khi nhiều kẻ địch chạm tới.",
      "Kết hợp đòn quét và đâm phù hợp để giữ đường, kiểm soát nhóm nhỏ.",
      "Nhịp ổn định, dễ đọc, không đòi hỏi phản xạ cực đoan.",
      "Rất phù hợp để luyện kỹ năng kiểm soát không gian – hữu ích khi chuyển vũ khí về sau.",
    ],
    cons: [
      "Tầm dài có thể khiến bạn đứng quá xa, bỏ lỡ cửa sổ tạo áp lực mạnh hơn.",
      "Gặp kẻ địch cực cơ động, vẫn cần đọc hướng tốt để trúng các đòn then chốt.",
      "Muốn đạt hiệu quả cao vẫn phải hiểu hành vi đối thủ, không thể chỉ dựa vào tầm đánh.",
    ],
    practiceTips: [
      "Khi farm, chủ động đánh ở rìa tầm hiệu quả: bước vào, đâm 1–2 nhịp rồi lùi nhẹ. Bài tập này tạo cảm giác spacing thay vì đứng một chỗ.",
      "Chọn kẻ địch có gap‑closer rõ ràng và luyện chặn nhịp bằng đòn đâm hoặc kỹ năng khống chế; giúp quen chiều dài hitbox và timing.",
      "Tưởng tượng một “đường ranh” giữa đội và kẻ địch, dùng di chuyển + đòn đánh để giữ đường đó ổn định, hạn chế đối thủ chạm backline.",
      "Muốn thử “Nine Swords Nine Spears” (từ guide cộng đồng Trung), không cần học rota dài: luyện mẫu ngắn – dùng mystic hệ lửa/element, đánh một kỹ năng thương có hiệu ứng chảy máu/yếu điểm rõ ràng, đổi sang kiếm để kích một kỹ năng nổ/đốt, rồi reset nhịp.",
    ],
    videoFocusPoints: [
      "Quan sát khoảng cách trung bình người chơi giữ với kẻ địch: đó thường là vị trí bạn nên đứng.",
      "Đòn quét dùng khi nào, đòn đâm dùng khi nào: quét để xử lý cánh/nhóm nhỏ, đâm để ngắt hoặc tập trung mục tiêu.",
      "Theo dõi thời gian hồi sau mỗi đòn để “đặt ngân sách” cho né/guard.",
    ],
  },
  "mo-blade": {
    slogan: "Lấy đà chậm, nhưng mỗi cú đánh đều nặng.",
    difficulty: "Moderate",
    recommendedFor:
      "Người chơi kiên nhẫn, đọc hoạt ảnh và ưu tiên vài cú đánh quyết định thay vì spam nút liên tục.",
    positioning: [
      "Vũ khí hạng nặng kinh điển: khởi động chậm, mỗi cú chém đều có giá trị. Thưởng cho những đòn chất lượng thay vì vung liên tục.",
      "PVE: hợp với tuyến trước/áp sát tuyến trước nhưng không chạy theo nhịp quá nhanh. Đọc đòn lớn của boss, đánh vào recovery và dồn gói sát thương, dựa vào độ lì để đứng vững.",
      "Trong nhóm/PVP: tạo “vùng đe dọa”. Chỉ cần đối thủ tôn trọng khả năng trúng một nhát chuẩn, bạn đã kiểm soát được nhịp; áp lực tâm lý cũng là khống chế.",
    ],
    pros: [
      "Impact cao mỗi hit, đúng kiểu “mỗi nhát đều đáng giá”.",
      "Thưởng cho việc đọc và trừng phạt hoạt ảnh của đối thủ.",
      "Hiện diện mạnh tuyến trước, kiểm soát nhóm quái tốt.",
      "Nhịp bấm chậm, đỡ mỏi tay hơn so với kiểu spam.",
    ],
    cons: [
      "Khởi động chậm; sai nhịp dễ bị ngắt hoặc đánh hụt.",
      "Ít cơ động hơn, đòi hỏi chọn vị trí kỹ.",
      "Cảm giác “ì” trong các cơ chế phản ứng nhanh cho đến khi quen nhịp.",
      "Nếu timing yếu sẽ dễ thấy mình bị ngắt liên tục hoặc chém vào không khí.",
    ],
    practiceTips: [
      "Chỉ đánh trong recovery rõ ràng của boss; còn lại tập trung di chuyển/phòng thủ – ghi nhớ rằng Mo Blade không cần vung liên tục.",
      "Dùng đòn thường có charge lên nhiều loại mục tiêu để cảm nhận độ trễ giữa input và hit; điều chỉnh thời điểm nhả.",
      "Luyện run với số lần vung ít nhất có thể: ưu tiên đúng nhịp hơn là DPS thô.",
      "Kiểu “wheelchair”: làm mới hồi phục → bật khiên → 1 đòn charge → reset vị trí; tránh tham đòn.",
    ],
    videoFocusPoints: [
      "Quan sát tư thế/hiệu ứng khi charge, đếm thời gian từ lúc nâng lên đến lúc trúng.",
      "Dùng bước ngang nhỏ để “dẫn” đối thủ vào lưỡi chém thay vì đuổi theo.",
      "Theo dõi thời gian hồi của kẻ địch sau khi trúng đòn để biết có an toàn đánh nhát thứ hai hay không.",
    ],
  },
  fan: {
    slogan: "Vũ khí thanh nhã, pha trộn áp lực tầm xa và công cụ hỗ trợ.",
    difficulty: "Moderate",
    recommendedFor:
      "Người chơi thích đứng an toàn, điều tiết nhịp giao tranh và hỗ trợ đồng đội.",
    positioning: [
      "Dẫn nội lực ra ngoài: áp lực tầm xa + hỗ trợ (heal/khiên/slow).",
      "PVE: “làm mượt” nhịp cho đội; không phải lúc nào cũng top DPS, nhưng tăng khả năng chịu lỗi. Hợp với người thích tempo điềm tĩnh và có thời gian quan sát.",
      "PVP/đấu nhỏ: phụ thuộc nhiều vào vị trí và timing; chọn góc nhìn tốt và đường rút, dùng khống chế mềm/hỗ trợ để xoay kèo trao đổi.",
    ],
    pros: [
      "Tầm đánh dễ chịu, đẩy lùi áp lực cận chiến.",
      "Công cụ heal/hỗ trợ giúp độ sống sót của đội tăng rõ.",
      "Tempo chậm hơn full‑melee, rảnh “đầu” cho awareness.",
      "Hợp fantasy kiểu “tu luyện/hỗ trợ/đấu sĩ” rất đẹp mắt.",
    ],
    cons: [
      "Burst thường thấp hơn vũ khí DPS thuần → hạ mục tiêu lâu hơn.",
      "Chơi quá an toàn khiến solo content bị ì.",
      "Cần quan sát đồng đội; nếu không, giá trị hỗ trợ dễ “trôi”.",
      "Một số trận cực khó có thể gây khó chịu vì không thể “heal mọi thứ”.",
    ],
    practiceTips: [
      "Luyện đứng hơi sau/chéo tuyến trước để vừa nhìn front vừa thấy mối đe dọa.",
      "Mục tiêu nhỏ mỗi run: dùng đúng một công cụ hỗ trợ (cứu máu thấp hoặc mua thời gian).",
      "Chơi vài trận với rota gây sát thương tối giản, tập trung nhìn vị trí ally/enemy → luyện awareness.",
      "Nếu main quạt: giữ một “bức tường” kỹ năng quạt giữa bạn và đối thủ; chỉ áp gần khi cooldown khống chế đã sẵn sàng.",
    ],
    videoFocusPoints: [
      "Quan sát phạm vi/độ dài hiệu lực của kỹ năng quạt: thực tế có thể che được bao nhiêu đồng đội?",
      "Người chơi giữ an toàn khi bị dive/AoE ra sao? Sống sót của bạn quyết định giá trị hỗ trợ.",
      "Sát thương ra theo nhịp ổn định hay dồn burst? Từ đó chọn hướng build phù hợp.",
    ],
  },
  umbrella: {
    slogan: "Vũ khí ô cơ động, biến phòng thủ/di chuyển thành tấn công.",
    difficulty: "Advanced",
    recommendedFor:
      "Người chơi thích đọc đòn, canh phản công và tự kiểm soát nhịp giao tranh.",
    positioning: [
      "Bề ngoài mềm mại nhưng lối chơi xoay quanh phòng thủ và phản công: block/parry/đẩy lệch nhịp rồi lập tức chuyển sang chuỗi đánh trừng phạt.",
      "PVE: rất hợp để học pattern. Parry/guard đúng nhịp cho phép “đứng vững” thay vì né liên tục – vừa tiết kiệm thời gian vừa rất đẹp.",
      "PVP/đụng độ nhỏ: kết hợp di chuyển né và các khung bảo hộ ngắn, phá timing đối phương; đánh hụt (whiff) của họ tạo cơ hội punish nhanh.",
    ],
    pros: [
      "Phòng thủ mạnh; tay to có thể vô hiệu nhiều mối đe dọa.",
      "Cơ động + guard giúp có khả năng lật kèo trong trận chặt chẽ.",
      "Thẩm mỹ đấu tay đôi rất “đã mắt”.",
      "Khi hiểu pattern, chip damage/quái rác đỡ khó chịu hơn nhiều.",
    ],
    cons: [
      "Đường học dốc; sai nhịp block/parry/phản công là ăn trọn đòn.",
      "Kém cơ động hơn vũ khí nhẹ, đòi hỏi chọn vị trí có chủ đích.",
      "Cảm giác “ì” trong cơ chế phản ứng nhanh cho đến khi quen nhịp.",
      "Nếu timing yếu sẽ thấy như bị ngắt liên tục.",
    ],
    practiceTips: [
      "Chọn 1 đòn nặng và luyện block/parry đúng nhịp đến khi chắc tay – niềm tin vào phòng thủ là chìa khóa.",
      "Nội dung nhẹ: tập “block/deflect → punish ngay”, tránh kéo chuỗi dài.",
      "Bài tập khoảng cách: đứng gần hơn một chút so với mức thoải mái, block rồi phản công – học tầm guard.",
      "Vòng hồi phục: làm mới regen → giữ guard → 1 punish → reset, không kéo dài tham đòn.",
    ],
    videoFocusPoints: [
      "Người chơi đứng block bao nhiêu lần thay vì lăn né? Cho thấy khi nào phòng thủ của ô hiệu quả hơn.",
      "Nhịp parry: sớm quá thì ăn đòn, muộn quá thì mất cửa sổ – bắt nhịp theo video để học.",
      "Giữa các lần block, dùng bước ngang nhỏ để giữ đối thủ trước mặt thay vì lăn ra xa.",
    ],
  },
  "rope-dart": {
    slogan: "Vũ khí khống chế siêu cơ động, biến lỗi vị trí của đối thủ thành cơ hội.",
    difficulty: "Advanced",
    recommendedFor:
      "Người chơi đọc chuyển động, tận dụng địa hình/khoảng cách sáng tạo và thích tinh chỉnh lối chơi.",
    positioning: [
      "Lai giữa dây kéo và móc kết liễu: quấy rối, ngắt nhịp, tái định vị từ tầm trung, hoặc bất ngờ áp sát/rút ra.",
      "PVE: không phải vũ khí để đứng một chỗ “xả”. Đi liên tục, kéo mục tiêu nguy hiểm khỏi nhóm quái, đưa về vùng an toàn rồi mới kết thúc combo. Boss cơ động cao sẽ dễ xử lý hơn khi bạn chủ động “đổi vị trí” trận đấu.",
      "PVP/co‑op: tạo cơ hội. Trừng phạt lỗi vị trí bằng kéo/ép di chuyển và ném đối thủ vào vùng sát thương của team. Dù không top DPS, bạn thường là người khiến đối thủ khó thở nhất.",
    ],
    pros: [
      "Bộ công cụ di chuyển/khống chế đa dạng, liên tục reset khoảng cách.",
      "Rất mạnh trong việc trừng phạt lỗi và tái định vị giao tranh.",
      "Trần sáng tạo cao cho người chơi thích địa hình và bản đồ.",
      "Một chuỗi kéo trúng đầy đủ cho cảm giác cực “sướng tay”, đúng kiểu săn mồi.",
    ],
    cons: [
      "Đòi hỏi thực thi cao; kéo hụt/đọc sai có thể tự đưa mình vào nguy hiểm.",
      "Phụ thuộc mạnh vào hiểu chuyển động đối thủ; giai đoạn đầu dễ thiếu ổn định.",
      "Cần team hợp tác hoặc cụm quái dày; nếu không sẽ thấy yếu hơn kỳ vọng.",
      "Rất nhạy timing/spacing, dễ bị ảnh hưởng bởi độ trễ hoặc tụt FPS.",
    ],
    practiceTips: [
      "Luyện kéo/dash vào rồi bước ngang/lùi ngay – coi rope dart là công cụ vị trí, không phải vé một chiều lao lên.",
      "Ban đầu chỉ tập ngắt/đón các pha nhảy lao rõ ràng của một vài kẻ địch, rồi mới học combo dài.",
      "Tập ở địa hình phức tạp; độ cao/góc nghiêng giúp hiểu tầm và quỹ đạo.",
      "“Hunter handoff”: kéo mục tiêu → đưa vào vùng team damage hoặc setup cho song đao → ngừng tunnel, tập trung reposition.",
    ],
    videoFocusPoints: [
      "Khoảng cách sau mỗi lần kéo trúng quyết định có follow‑up hay nên disengage.",
      "Thời gian khởi động/bay của kỹ năng dây: dùng trước/trong/sau di chuyển của đối thủ để tăng tỷ lệ trúng.",
      "Tận dụng mép địa hình, sườn dốc và độ cao để tạo góc kéo bất ngờ.",
    ],
  },
};

