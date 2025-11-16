import type { MetadataRoute } from "next";

const baseUrl = "https://wherewindsmeet.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/tier-list`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/builds`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/codes`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];
}

