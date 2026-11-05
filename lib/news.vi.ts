import { newsItems as officialNewsItems } from "./news";

/**
 * Revision stamp for this Vietnamese page. The 2026-11-06 English edit did not
 * revise this translation, and this stamp is not derived from official item dates.
 */
export const latestNewsDate = "2026-10-28";

const formatDateVi = (iso: string) => {
  const [year, month, day] = iso.split("-");
  return year && month && day ? `${day}/${month}/${year}` : iso;
};

// Preserve the official English title and source record, but do not present
// the English editorial summary as though it were a Vietnamese translation.
export const newsItems = officialNewsItems.map((item) => ({
  ...item,
  summary: `Thông báo chính thức bằng tiếng Anh ngày ${formatDateVi(item.date)}. Tiêu đề tiếng Anh được giữ nguyên; hãy mở nguồn gốc để kiểm tra đầy đủ nội dung và thay đổi.`,
}));
