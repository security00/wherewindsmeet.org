import { redirect } from "next/navigation";

export function generateStaticParams() {
  // This catch-all route is just a redirect, no static paths needed
  return [];
}

export default function GuidesRedirect({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { slug?: string[] };
}) {
  redirect("/vn/guides");
}
