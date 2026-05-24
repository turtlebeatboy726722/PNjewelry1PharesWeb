// app/de/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schmuck-Blog | OEM Informationen aus Bangkok | P&N Jewelry",
  description:
    "Der offizielle Blog von P&N Jewelry – Ihrem OEM-Schmuckhersteller aus Bangkok, Thailand. Expertenwissen zu Schmuckproduktion, niedrigem MOQ und Privatetiketten.",
  keywords: [
    "OEM Schmuckhersteller Thailand",
    "Schmuck Hersteller Bangkok",
    "niedriges MOQ Schmuck",
    "Privatetiketten Schmuck",
    "Thailand Schmuckproduktion",
    "Schmuck OEM Fertigung",
  ],
  alternates: {
    canonical: "https://www.pnjewelrymfg.com/de/blog",
    languages: {
      "en": "https://www.pnjewelrymfg.com/blog",
      "ja": "https://www.pnjewelrymfg.com/ja/blog",
      "de": "https://www.pnjewelrymfg.com/de/blog",
    },
  },
  openGraph: {
    title: "Schmuck-Blog | P&N Jewelry",
    description: "Expertenwissen zur OEM-Schmuckherstellung in Thailand",
    url: "https://www.pnjewelrymfg.com/de/blog",
    locale: "de_DE",
  },
};

const posts = [
  {
    slug: "oem-jewelry-manufacturer-thailand",
    title: "Warum einen OEM-Schmuckhersteller in Thailand wählen?",
    description:
      "P&N Jewelry mit über 40 Jahren Erfahrung erklärt die Vorteile der OEM-Schmuckproduktion in Thailand und worauf Sie bei der Auswahl eines Herstellers achten sollten.",
    date: "Januar 2025",
    readTime: "7 Min.",
    tag: "OEM-Produktion",
  },
  {
    slug: "low-moq-jewelry-manufacturer",
    title: "Niedriges MOQ Schmuckhersteller: Kompletter Leitfaden ab 30 Stück",
    description:
      "OEM ab Mindestbestellmenge von 30 Stück. Alles, was Startups und kleine Marken über den Einstieg in die Schmuckproduktion wissen müssen.",
    date: "Februar 2025",
    readTime: "8 Min.",
    tag: "Niedriges MOQ",
  },
  {
    slug: "private-label-jewelry-manufacturer-bangkok",
    title: "Privatetiketten-Schmuckhersteller in Bangkok: Der vollständige Leitfaden",
    description:
      "Vorteile, Kosten und Prozesse der Privatetiketten-Schmuckproduktion in Bangkok. Starten Sie Ihre eigene Schmuckmarke mit professioneller Unterstützung.",
    date: "März 2025",
    readTime: "9 Min.",
    tag: "Privatetiketten",
  },
];

export default function DeBlogIndex() {
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
          Schmuck-Blog
        </h1>
        <p style={{ color: "#bbb", fontSize: "17px", maxWidth: "560px", margin: "0 auto" }}>
          Expertenwissen zur OEM-Schmuckproduktion in Thailand und Bangkok
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
            href={`/de/blog/${post.slug}`}
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
                {post.tag} &nbsp;·&nbsp; {post.date} &nbsp;·&nbsp; {post.readTime} Lesezeit
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
                Weiterlesen →
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
          OEM-Projekt anfragen
        </h2>
        <p style={{ color: "#666", marginBottom: "28px", fontSize: "15px" }}>
          Kostenlose Beratung · MOQ ab 30 Stück · Antwort innerhalb von 24 Stunden
        </p>
        <Link
          href="/de/contact"
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
          Kostenloses Angebot anfragen
        </Link>
      </section>
    </>
  );
}
