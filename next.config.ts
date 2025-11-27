import type { NextConfig } from "next";

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
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;

    // 如果设置了 CDN URL，将图片请求重定向到 R2
    if (cdnUrl) {
      return [
        {
          source: '/background/:path*',
          destination: `${cdnUrl}/background/:path*`,
        },
        {
          source: '/sect/:path*',
          destination: `${cdnUrl}/sect/:path*`,
        },
        {
          source: '/bosses/:path*',
          destination: `${cdnUrl}/bosses/:path*`,
        },
        {
          source: '/guides/:path*',
          destination: `${cdnUrl}/guides/:path*`,
        },
        {
          source: '/items/:path*',
          destination: `${cdnUrl}/items/:path*`,
        },
        {
          source: '/martial-arts/:path*',
          destination: `${cdnUrl}/martial-arts/:path*`,
        },
        {
          source: '/tier-list/:path*',
          destination: `${cdnUrl}/tier-list/:path*`,
        },
        {
          source: '/weapons/:path*',
          destination: `${cdnUrl}/weapons/:path*`,
        },
        {
          source: '/free-outfits/:path*',
          destination: `${cdnUrl}/free-outfits/:path*`,
        },
        {
          source: '/illustrations/:path*',
          destination: `${cdnUrl}/illustrations/:path*`,
        },
        {
          source: '/design/:path*',
          destination: '/design/:path*',
        },
      ];
    }

    return [
      {
        source: '/design/:path*',
        destination: '/design/:path*',
      },
    ];
  },
};

export default nextConfig;
