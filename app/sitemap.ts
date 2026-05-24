import { MetadataRoute } from "next";

const BASE = "https://www.pnjewelrymfg.com";

const enPages = [
  { path: "/", priority: 1.0, freq: "weekly" },
  { path: "/about", priority: 0.8, freq: "monthly" },
  { path: "/services", priority: 0.8, freq: "monthly" },
  { path: "/products", priority: 0.9, freq: "weekly" },
  { path: "/products/rings", priority: 0.8, freq: "weekly" },
  { path: "/products/necklaces", priority: 0.8, freq: "weekly" },
  { path: "/products/bracelets", priority: 0.8, freq: "weekly" },
  { path: "/products/earrings", priority: 0.8, freq: "weekly" },
  { path: "/why-us", priority: 0.7, freq: "monthly" },
  { path: "/faq", priority: 0.7, freq: "monthly" },
  { path: "/contact", priority: 0.9, freq: "monthly" },
];

const blogPages = [
  { path: "/blog", priority: 0.8, freq: "weekly" },
  { path: "/blog/oem-jewelry-manufacturer-thailand", priority: 0.9, freq: "monthly" },
  { path: "/blog/low-moq-jewelry-manufacturer", priority: 0.8, freq: "monthly" },
  { path: "/blog/private-label-jewelry-manufacturer-bangkok", priority: 0.8, freq: "monthly" },
  { path: "/blog/thailand-vs-china-jewelry-manufacturing", priority: 0.8, freq: "monthly" },
  { path: "/blog/how-to-start-jewelry-brand-manufacturer", priority: 0.8, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // English pages
  for (const page of enPages) {
    entries.push({
      url: `${BASE}${page.path}`,
      lastModified: now,
      changeFrequency: page.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: page.priority,
    });
  }

  // Blog pages (English only)
  for (const page of blogPages) {
    entries.push({
      url: `${BASE}${page.path}`,
      lastModified: now,
      changeFrequency: page.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: page.priority,
    });
  }

  // Japanese pages
  for (const page of enPages) {
    entries.push({
      url: `${BASE}/ja${page.path === "/" ? "" : page.path}`,
      lastModified: now,
      changeFrequency: page.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: page.priority * 0.9,
    });
  }

  // German pages
  for (const page of enPages) {
    entries.push({
      url: `${BASE}/de${page.path === "/" ? "" : page.path}`,
      lastModified: now,
      changeFrequency: page.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: page.priority * 0.9,
    });
  }

  return entries;
}
