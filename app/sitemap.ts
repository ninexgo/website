import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ninexgo.com",
      lastModified: new Date("2026-05-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ninexgo.com/about",
      lastModified: new Date("2026-05-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ninexgo.com/privacy",
      lastModified: new Date("2026-05-24"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://ninexgo.com/terms",
      lastModified: new Date("2026-05-24"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
