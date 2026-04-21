// src/app/blog/page.tsx
// วางไฟล์นี้ที่: src/app/blog/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewelry Manufacturing Blog | OEM Insights from Bangkok | P&N Jewelry",
  description:
    "Practical guides for jewelry brands on OEM manufacturing in Thailand — finding the right factory, low MOQ production, private label, and how Thailand compares to China.",
  alternates: {
    canonical: "https://www.pnjewelrymfg.com/blog",
  },
  openGraph: {
    title: "Jewelry Manufacturing Blog | P&N Jewelry Bangkok",
    description:
      "Expert insights on OEM jewelry manufacturing in Thailand for international jewelry brands.",
    url: "https://www.pnjewelrymfg.com/blog",
    siteName: "P&N Jewelry",
    type: "website",
  },
};

const posts = [
  {
    slug: "oem-jewelry-manufacturer-thailand",
    title: "How to Find the Right OEM Jewelry Manufacturer in Thailand (2025 Guide)",
    description:
      "What to look for, red flags to avoid, and why Bangkok factories deliver better quality for medium-high end brands.",
    date: "June 2025",
    readTime: "8 min",
    tag: "Sourcing Guide",
  },
  {
    slug: "low-moq-jewelry-manufacturer",
    title: "Low MOQ Jewelry Manufacturing: How Small Brands Can Start Producing",
    description:
      "Starting a jewelry brand? Find manufacturers with MOQ as low as 30 pieces without quality compromise.",
    date: "July 2025",
    readTime: "6 min",
    tag: "MOQ & Pricing",
  },
  {
    slug: "private-label-jewelry-manufacturer-bangkok",
    title: "Private Label Jewelry Manufacturing in Bangkok: The Complete Brand Guide",
    description:
      "How to source private label jewelry from Bangkok, protect your IP, and build a scalable manufacturing partnership.",
    date: "July 2025",
    readTime: "7 min",
    tag: "Private Label",
  },
  {
    slug: "thailand-vs-china-jewelry-manufacturing",
    title: "Thailand vs China for Jewelry Manufacturing: An Honest Comparison",
    description:
      "Quality, MOQ, price, communication — an honest breakdown of which country is right for your brand.",
    date: "August 2025",
    readTime: "7 min",
    tag: "Comparison",
  },
  {
    slug: "how-to-start-jewelry-brand-manufacturer",
    title: "How to Start a Jewelry Brand: The Manufacturing Partnership Guide",
    description:
      "From first contact to first production run — the real process for building your manufacturing supply chain.",
    date: "August 2025",
    readTime: "8 min",
    tag: "Brand Building",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "80px 24px 60px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "16px",
          }}
        >
          P&N Jewelry
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Manufacturing Insights
        </h1>
        <p style={{ color: "#bbb", fontSize: "18px", maxWidth: "540px", margin: "0 auto" }}>
          Practical guides for jewelry brands sourcing OEM production in Thailand.
        </p>
      </section>

      {/* ─── Posts ─── */}
      <main
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "60px 24px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {posts.map((post, i) => (
            <article
              key={post.slug}
              style={{
                padding: "36px 0",
                borderBottom: "1px solid #eee",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#888",
                      background: "#f5f5f3",
                      padding: "3px 10px",
                    }}
                  >
                    {post.tag}
                  </span>
                  <span style={{ fontSize: "13px", color: "#aaa" }}>
                    {post.date} · {post.readTime} read
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6, margin: "0 0 14px" }}>
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#111",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #111",
                    paddingBottom: "1px",
                  }}
                >
                  Read Article →
                </Link>
              </div>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "#f0f0ee",
                  lineHeight: 1,
                  userSelect: "none",
                  minWidth: "48px",
                  textAlign: "right",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ─── Bottom CTA ─── */}
      <section
        style={{
          background: "#f5f5f3",
          padding: "60px 24px",
          textAlign: "center",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>
          Ready to Start Your OEM Project?
        </h2>
        <p style={{ color: "#666", marginBottom: "28px" }}>
          MOQ 30 pcs · Full-service Bangkok factory · Free consultation
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: "#111",
            color: "#fff",
            padding: "14px 36px",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}
        >
          Request a Free Quote
        </Link>
      </section>
    </>
  );
}
