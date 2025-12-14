import { redirect } from "next/navigation";

export default function GuidesRedirect({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { slug?: string[] };
}) {
  redirect("/vn/guides");
}
