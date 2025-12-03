import { redirect } from "next/navigation";

export default function GuidesRedirect({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slugPath = params.slug?.join("/") ?? "";

  if (!slugPath) {
    redirect("/vn/guides");
  }

  redirect(`/guides/${slugPath}`);
}
