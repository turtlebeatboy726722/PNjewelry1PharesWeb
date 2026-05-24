// app/ja/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ジュエリー製造ブログ | タイOEMメーカー情報 | P&N Jewelry",
  description:
    "タイのOEMジュエリーメーカーP&Nが発信する製造情報。低MOQ、プライベートラベル、バンコクのジュエリー工場に関する専門知識をご紹介します。",
  keywords: [
    "OEMジュエリーメーカー タイ",
    "低MOQジュエリー",
    "バンコク ジュエリー工場",
    "プライベートラベル ジュエリー",
    "タイ ジュエリー製造",
    "ジュエリーOEM",
  ],
  alternates: {
    canonical: "https://www.pnjewelrymfg.com/ja/blog",
    languages: {
      "en": "https://www.pnjewelrymfg.com/blog",
      "ja": "https://www.pnjewelrymfg.com/ja/blog",
      "de": "https://www.pnjewelrymfg.com/de/blog",
    },
  },
  openGraph: {
    title: "ジュエリー製造ブログ | P&N Jewelry",
    description: "タイのOEMジュエリー製造に関する専門情報ブログ",
    url: "https://www.pnjewelrymfg.com/ja/blog",
    locale: "ja_JP",
  },
};

const posts = [
  {
    slug: "oem-jewelry-manufacturer-thailand",
    title: "タイのOEMジュエリーメーカーを選ぶ理由",
    description:
      "40年以上の実績を持つP&N Jewelryが、タイでOEMジュエリーを製造するメリットと選び方のポイントを詳しく解説します。",
    date: "2025年1月",
    readTime: "7分",
    tag: "OEM製造",
  },
  {
    slug: "low-moq-jewelry-manufacturer",
    title: "低MOQジュエリーメーカー完全ガイド：30個から始めるブランド展開",
    description:
      "最小発注数30個からOEM対応。スタートアップや小規模ブランドがジュエリー製造を始める際に知っておきたい全知識。",
    date: "2025年2月",
    readTime: "8分",
    tag: "低MOQ",
  },
  {
    slug: "private-label-jewelry-manufacturer-bangkok",
    title: "バンコクのプライベートラベルジュエリーメーカー：完全ガイド",
    description:
      "バンコクでプライベートラベルジュエリーを製造するメリット、費用、プロセスを徹底解説。あなただけのジュエリーブランドを立ち上げましょう。",
    date: "2025年3月",
    readTime: "9分",
    tag: "プライベートラベル",
  },
];

export default function JaBlogIndex() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "100px 24px 60px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "16px",
          }}
        >
          Manufacturing Insights
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "-0.01em",
          }}
        >
          ジュエリー製造ブログ
        </h1>
        <p style={{ color: "#bbb", fontSize: "17px", maxWidth: "560px", margin: "0 auto" }}>
          タイOEMジュエリー製造に関する専門知識・業界情報
        </p>
      </section>

      {/* Post Grid */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "32px",
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/ja/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                border: "1px solid #e5e5e5",
                padding: "32px",
                background: "#fff",
                transition: "box-shadow 0.2s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "16px",
                  display: "block",
                }}
              >
                {post.tag} &nbsp;·&nbsp; {post.date} &nbsp;·&nbsp; {post.readTime}読了
              </span>
              <h2
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#111",
                  lineHeight: 1.4,
                  marginBottom: "12px",
                  flex: 1,
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                {post.description}
              </p>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#111",
                  textTransform: "uppercase",
                }}
              >
                続きを読む →
              </span>
            </article>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#f5f5f3",
          padding: "60px 24px",
          textAlign: "center",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "12px", color: "#111" }}>
          OEMプロジェクトのご相談はこちら
        </h2>
        <p style={{ color: "#666", marginBottom: "28px", fontSize: "15px" }}>
          無料相談 · 最小発注数30個 · 24時間以内に返答
        </p>
        <Link
          href="/ja/contact"
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
          無料見積もりを依頼する
        </Link>
      </section>
    </>
  );
}
