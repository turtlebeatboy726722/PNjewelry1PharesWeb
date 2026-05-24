import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "OEMジュエリー製品 — リング・ネックレス・ブレスレット・ピアス",
  description: "P&Nジュエリーの製品カテゴリー。リング、ネックレス、ブレスレット、ピアスをタイの工場でカスタム製造。最小注文数30個。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/products" },
};

const categories = [
  { title: "リング", href: "/ja/products/rings", img: "/images/products/rings/ring-1.jpg", count: "スタッカブル・ソリテール・バンド・ステートメント", desc: "ミニマルなバンドから豪華なカクテルリングまで、シルバー、ゴールドで製造。" },
  { title: "ネックレス", href: "/ja/products/necklaces", img: "/images/products/necklaces/necklace-1.jpg", count: "ペンダント・チェーン・レイヤリング・チョーカー", desc: "レイヤリングピース、ペンダント、ステートメントチェーンを製造。" },
  { title: "ブレスレット", href: "/ja/products/bracelets", img: "/images/products/bracelets/bracelet-1.jpg", count: "バングル・カフ・チャーム・テニス", desc: "エレガントなバングル、カフ、チャームブレスレットをシルバー・ゴールドで製造。" },
  { title: "ピアス", href: "/ja/products/earrings", img: "/images/products/earrings/earring-1.jpg", count: "スタッド・フープ・ドロップ・シャンデリア", desc: "スタッドからシャンデリアまで、様々なスタイルのピアスを製造。" },
];

export default function JaProductsPage() {
  return (
    <>
      <PageHero label="OEM製品" title="製品ラインナップ" subtitle="すべてバンコクの自社工場で製造" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">カテゴリー</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                製造<span className="italic gold-text">カテゴリー</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-20">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 100}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                      <SafeImage src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="section-label mb-3">{cat.count}</p>
                    <h3 className="font-display text-charcoal-900 font-light mb-4" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>{cat.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed mb-8">{cat.desc}</p>
                    <Link href={cat.href} className="btn-gold text-xs px-10 py-3">{cat.title}を見る</Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 text-center" style={{ background: "var(--ink)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">カスタムオーダー</p>
          <h2 className="font-display font-light text-white mb-8" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            ご希望のデザインが<span className="italic gold-text">なければご相談ください</span>
          </h2>
          <Link href="/ja/contact" className="btn-gold-filled text-xs px-12 py-4">お見積もりを依頼する</Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
