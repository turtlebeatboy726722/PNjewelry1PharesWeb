import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "P&N Jewelry | タイのOEMジュエリーメーカー — 40年以上の実績",
  description: "タイ・バンコクのOEMジュエリーメーカー。40年以上の実績。最小注文数30個から。リング、ネックレス、ブレスレット、ピアスのカスタム製造。",
  keywords: ["OEMジュエリーメーカー タイ", "ジュエリー製造 バンコク", "シルバージュエリー工場", "低MOQ ジュエリー", "オリジナルジュエリー OEM"],
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja" },
};

const stats = [
  { value: "40+", label: "年の実績" },
  { value: "30", label: "最小注文数" },
  { value: "100%", label: "自社生産" },
  { value: "世界", label: "グローバル対応" },
];

const services = [
  { step: "01", title: "デザイン・CAD", desc: "スケッチから精密な3DCADモデルを作成。" },
  { step: "02", title: "鋳造", desc: "ロストワックス鋳造。シルバー、ゴールド対応。" },
  { step: "03", title: "研磨", desc: "熟練職人による鏡面・マット仕上げ。" },
  { step: "04", title: "石留め", desc: "プロング、ベゼル、パヴェ対応。" },
  { step: "05", title: "メッキ", desc: "18Kゴールド、ローズゴールド、ロジウム。" },
];

const categories = [
  { title: "リング", href: "/ja/products/rings", img: "/images/products/rings/ring-1.jpg", desc: "スタッカブル・ソリテール・ステートメント" },
  { title: "ネックレス", href: "/ja/products/necklaces", img: "/images/products/necklaces/necklace-1.jpg", desc: "ペンダント・チェーン・レイヤリング" },
  { title: "ブレスレット", href: "/ja/products/bracelets", img: "/images/products/bracelets/bracelet-1.jpg", desc: "バングル・カフ・チャーム" },
  { title: "ピアス", href: "/ja/products/earrings", img: "/images/products/earrings/earring-1.jpg", desc: "スタッド・フープ・ドロップ" },
];

const whyUs = [
  { icon: "◈", title: "40年以上の実績", desc: "国際的なジュエリーブランドへのOEM製造における豊富な経験。" },
  { icon: "◇", title: "低MOQ — 30個から", desc: "少量からスタート可能。新ブランドや新コレクションに最適。" },
  { icon: "◉", title: "一貫生産体制", desc: "デザインから納品まで自社一貫対応。外注なし。" },
  { icon: "◎", title: "グローバル実績", desc: "米国、スペイン、ヨーロッパの有名ブランドから信頼。" },
];

export default function JaHomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0">
          <SafeImage src="/images/hero/hero-bg.jpg" alt="P&N Jewelry" fill className="object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.8) 100%)" }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label mb-8">タイのOEMジュエリーメーカー</p>
          <h1 className="text-white font-display font-light mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1.1 }}>
            <span className="block">40年以上の</span>
            <span className="block gold-text italic">職人技と品質</span>
          </h1>
          <p className="text-charcoal-300 text-sm tracking-widest mb-12">OEM · プライベートレーベル · 一貫生産 · バンコク, タイ</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ja/contact" className="btn-gold-filled text-xs px-10 py-4">お見積もりを依頼する</Link>
            <Link href="/ja/about" className="btn-gold text-xs px-10 py-4">会社について</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-widest text-gold-400">スクロール</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      <section className="py-16 border-b border-charcoal-100" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-display font-light mb-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "3rem", color: "var(--gold)" }}>{s.value}</div>
                  <div className="text-[10px] tracking-widest text-charcoal-500">{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <p className="section-label mb-4">P&Nジュエリーについて</p>
              <h2 className="font-display font-light mb-6 text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
                技術と品質への<span className="italic gold-text">こだわり</span>
              </h2>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-4">タイ・バンコクを拠点とするP&Nジュエリーは、40年以上にわたり世界中のジュエリーブランドに信頼されるOEM製造パートナーです。</p>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-8">デザイン相談から最終品質検査まで、すべての工程を自社工場で一貫管理。妥協のない品質をお届けします。</p>
              <Link href="/ja/about" className="btn-gold text-xs">詳しく見る</Link>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute -top-4 -left-4 w-full h-full border" style={{ borderColor: "var(--gold)", opacity: 0.3 }} />
                <div className="relative w-full h-full overflow-hidden">
                  <SafeImage src="/images/factory/production/production-2.jpg" alt="工場内部" fill className="object-cover" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">製造プロセス</p>
              <h2 className="font-display font-light text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                コンセプトから<span className="italic gold-text">完成品へ</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {services.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 80}>
                <div className="border-l border-charcoal-800 px-6 py-8 hover:border-gold-400 transition-colors duration-400" style={{ borderColor: i === 0 ? "var(--gold)" : undefined }}>
                  <div className="text-[11px] font-mono mb-4" style={{ color: "var(--gold)", opacity: 0.6 }}>{s.step}</div>
                  <h3 className="text-white font-display font-light mb-3 text-xl" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <div className="text-center mt-12">
              <Link href="/ja/services" className="btn-gold text-xs">サービス詳細</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">製品カテゴリー</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>製品<span className="italic gold-text">ラインナップ</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 120}>
                <Link href={cat.href} className="block product-card group">
                  <div className="relative overflow-hidden" style={{ paddingBottom: "130%" }}>
                    <div className="absolute inset-0">
                      <SafeImage src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <h3 className="text-white font-display font-light text-3xl mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>{cat.title}</h3>
                      <p className="text-gold-400 text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-400">{cat.desc}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <div className="text-center mt-12"><Link href="/ja/products" className="btn-gold text-xs">製品一覧を見る</Link></div>
          </RevealOnScroll>
        </div>
      </section>

      <VideoSection youtubeId="NYG46nwFnto" label="P&N Jewelry" title="職人技を" subtitle="ご覧ください" description="バンコク工場の製造現場をご覧ください。すべての工程を自社で一貫管理しています。" dark={true} />

      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">選ばれる理由</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>ブランドから<span className="italic gold-text">信頼されるパートナー</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <div className="border border-charcoal-100 p-8 hover:border-gold-300 transition-all duration-400">
                  <div className="text-3xl mb-6" style={{ color: "var(--gold)" }}>{item.icon}</div>
                  <h3 className="font-display text-xl text-charcoal-900 mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="section-label mb-6">お問い合わせ</p>
            <h2 className="font-display font-light text-white mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              次のコレクションを<span className="italic gold-text">一緒に作りませんか？</span>
            </h2>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">無料相談・お見積もりはお気軽にどうぞ。24時間以内にご返答いたします。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ja/contact" className="btn-gold-filled text-xs px-12 py-4">無料お見積もりを依頼する</Link>
              <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-12 py-4">WhatsAppで相談する</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
