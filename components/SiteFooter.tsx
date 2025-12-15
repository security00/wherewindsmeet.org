'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterLink = {
  href: string;
  label: string;
};

const defaultLinks: FooterLink[] = [
  { href: "/guides", label: "Guides" },
  { href: "/guides/bosses", label: "Bosses" },
  { href: "/guides/weapons", label: "Weapons" },
  { href: "/news", label: "News" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "mailto:support@wherewindsmeet.org", label: "support@wherewindsmeet.org" },
];

const vietnameseLinks: FooterLink[] = [
  { href: "/vn/guides", label: "Hướng dẫn" },
  { href: "/vn/guides/bosses", label: "Boss" },
  { href: "/vn/guides/weapons", label: "Vũ khí" },
  { href: "/vn/news", label: "Tin tức" },
  { href: "/vn/privacy", label: "Riêng tư" },
  { href: "/vn/terms", label: "Điều khoản" },
  { href: "mailto:support@wherewindsmeet.org", label: "support@wherewindsmeet.org" },
];

const germanLinks: FooterLink[] = [
  { href: "/de/guides", label: "Guides" },
  { href: "/de/guides/bosses", label: "Bosse" },
  { href: "/de/guides/weapons", label: "Waffen" },
  { href: "/de/news", label: "News" },
  { href: "/de/privacy", label: "Datenschutz" },
  { href: "/de/terms", label: "Nutzungsbedingungen" },
  { href: "mailto:support@wherewindsmeet.org", label: "support@wherewindsmeet.org" },
];

export function SiteFooter() {
  const pathname = usePathname();
  const isVietnamese = pathname?.startsWith("/vn");
  const isGerman = pathname?.startsWith("/de");
  const links = isVietnamese ? vietnameseLinks : isGerman ? germanLinks : defaultLinks;
  const description = isVietnamese
    ? "Fan hub không chính thức về Where Winds Meet. Mọi nhãn hiệu thuộc về chủ sở hữu tương ứng."
    : isGerman
      ? "Inoffizieller Where Winds Meet Fan-Hub. Alle Marken gehören ihren jeweiligen Inhabern."
      : "Unofficial Where Winds Meet fan hub. All trademarks are the property of their respective owners.";

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 text-xs text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-emerald-400"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-emerald-400"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
