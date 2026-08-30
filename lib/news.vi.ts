import { latestNewsDate, newsItems as officialNewsItems } from "./news";

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

export { latestNewsDate };
