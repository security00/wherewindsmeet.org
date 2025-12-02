import type { NextConfig } from "next";

const CDN_DEFAULT = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wherewindsmeetgame.com",
      },
      {
        protocol: "https",
        hostname: "yysls-build-na.fp.ps.easebar.com",
      },
      {
        protocol: "https",
        hostname: "www.ludens.com.tw",
      },
      {
        protocol: "https",
        hostname: "wherewindsmeet.wiki.fextralife.com",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      {
        protocol: "https",
        hostname: "static.wherewindsmeet.org",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/design/:path*',
        destination: '/design/:path*',
      },
      {
        source: '/background/:path*',
        destination: `${CDN_DEFAULT}/background/:path*`,
      },
      {
        source: '/sect/:path*',
        destination: `${CDN_DEFAULT}/sect/:path*`,
      },
      {
        source: '/bosses/:path*',
        destination: `${CDN_DEFAULT}/bosses/:path*`,
      },
      {
        source: '/guides/:path*',
        destination: `${CDN_DEFAULT}/guides/:path*`,
      },
      {
        source: '/items/:path*',
        destination: `${CDN_DEFAULT}/items/:path*`,
      },
      {
        source: '/martial-arts/:path*',
        destination: `${CDN_DEFAULT}/martial-arts/:path*`,
      },
      {
        source: '/tier-list/:path*',
        destination: `${CDN_DEFAULT}/tier-list/:path*`,
      },
      {
        source: '/weapons/:path*',
        destination: `${CDN_DEFAULT}/weapons/:path*`,
      },
      {
        source: '/free-outfits/:path*',
        destination: `${CDN_DEFAULT}/free-outfits/:path*`,
      },
      {
        source: '/illustrations/:path*',
        destination: `${CDN_DEFAULT}/illustrations/:path*`,
      },
    ];
  },
};

export default nextConfig;
