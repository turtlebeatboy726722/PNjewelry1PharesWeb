// src/components/BlogLayout.tsx
// Shared layout สำหรับทุก blog post
// ใช้ style เดิมของเว็บ — ไม่ override CSS ใดๆ

import Link from "next/link";

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export default function BlogLayout({
  children,
  title,
  description,
  date,
  readTime,
}: BlogLayoutProps) {
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
          Manufacturing Insights &nbsp;·&nbsp; {date} &nbsp;·&nbsp; {readTime} read
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            maxWidth: "820px",
            margin: "0 auto 20px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#bbb",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </section>

      {/* ─── Content ─── */}
      <article
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "60px 24px 80px",
          color: "#1a1a1a",
          lineHeight: 1.8,
          fontSize: "17px",
        }}
      >
        {children}
      </article>

      {/* ─── CTA ─── */}
      <section
        style={{
          background: "#f5f5f3",
          padding: "60px 24px",
          textAlign: "center",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "12px",
          }}
        >
          Get in Touch
        </p>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Ready to Start Your OEM Project?
        </h2>
        <p style={{ color: "#666", marginBottom: "28px", fontSize: "16px" }}>
          Free consultation · MOQ 30 pcs · Response within 24 hours
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#111",
              color: "#fff",
              padding: "14px 32px",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            Request a Free Quote
          </Link>
          <a
            href="https://wa.me/66617898877"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#111",
              padding: "14px 32px",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.05em",
              textDecoration: "none",
              border: "1px solid #111",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* ─── Back to Blog ─── */}
      <div
        style={{
          textAlign: "center",
          padding: "32px 24px",
          borderTop: "1px solid #eee",
        }}
      >
        <Link
          href="/blog"
          style={{
            fontSize: "13px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#666",
            textDecoration: "none",
          }}
        >
          ← All Articles
        </Link>
      </div>
    </>
  );
}

// ─── Shared content components ───────────────────────────────────────────────

export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "19px",
        color: "#444",
        lineHeight: 1.7,
        marginBottom: "40px",
        paddingBottom: "40px",
        borderBottom: "1px solid #eee",
      }}
    >
      {children}
    </p>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginTop: "48px",
        marginBottom: "16px",
        color: "#111",
      }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: "18px",
        fontWeight: 700,
        marginTop: "32px",
        marginBottom: "10px",
        color: "#222",
      }}
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: "20px", color: "#333" }}>{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        marginBottom: "24px",
        paddingLeft: "20px",
        color: "#333",
      }}
    >
      {children}
    </ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return <li style={{ marginBottom: "8px", lineHeight: 1.7 }}>{children}</li>;
}

export function CompareTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div style={{ overflowX: "auto", marginBottom: "32px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "15px",
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  background: "#111",
                  color: "#fff",
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ background: i % 2 === 0 ? "#fff" : "#f9f9f7" }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #eee",
                    color: "#333",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#f5f5f3",
        borderLeft: "3px solid #111",
        padding: "20px 24px",
        marginBottom: "28px",
        fontSize: "16px",
        color: "#333",
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}

export function FAQ({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div style={{ marginTop: "8px", marginBottom: "32px" }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid #eee",
            padding: "20px 0",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: "#111",
              marginBottom: "8px",
              fontSize: "16px",
            }}
          >
            {item.q}
          </p>
          <p style={{ color: "#555", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
        </div>
      ))}
    </div>
  );
}
