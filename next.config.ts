import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wherewindsmeetgame.com",
      },
      {
        protocol: "https",
        hostname: "yysls-build-na.fp.ps.easebar.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/design/:path*',
        destination: '/design/:path*',
      },
    ];
  },
};

export default nextConfig;
