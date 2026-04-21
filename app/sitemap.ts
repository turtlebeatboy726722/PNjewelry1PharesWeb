// ============================================================
// src/app/sitemap.ts  — REPLACE ไฟล์เดิม หรือสร้างใหม่ถ้าไม่มี
// ============================================================

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.pnjewelrymfg.com";
  const now = new Date();

  return [
    // ─── Main pages ───────────────────────────────────────
    { url: base,                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/products`,      lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/products/rings`,    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/products/necklaces`,lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/products/bracelets`,lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/products/earrings`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/why-us`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: "yearly",  priority: 0.7 },

    // ─── Blog ─────────────────────────────────────────────
    { url: `${base}/blog`,          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    {
      url: `${base}/blog/oem-jewelry-manufacturer-thailand`,
      lastModified: now, changeFrequency: "monthly", priority: 0.75,
    },
    {
      url: `${base}/blog/low-moq-jewelry-manufacturer`,
      lastModified: now, changeFrequency: "monthly", priority: 0.75,
    },
    {
      url: `${base}/blog/private-label-jewelry-manufacturer-bangkok`,
      lastModified: now, changeFrequency: "monthly", priority: 0.75,
    },
    {
      url: `${base}/blog/thailand-vs-china-jewelry-manufacturing`,
      lastModified: now, changeFrequency: "monthly", priority: 0.75,
    },
    {
      url: `${base}/blog/how-to-start-jewelry-brand-manufacturer`,
      lastModified: now, changeFrequency: "monthly", priority: 0.75,
    },
  ];
}
