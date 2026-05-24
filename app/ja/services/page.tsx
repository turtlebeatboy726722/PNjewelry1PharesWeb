import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "OEMジュエリーサービス — デザインから納品まで",
  description: "P&Nジュエリーのフルサービス：デザイン、鋳造、研磨、石留め、メッキ。タイの工場で一貫製造。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/services" },
};

const process = [
  { step: "01", title: "デザイン・CAD", desc: "スケッチやコンセプトから精密な3DCADモデルを作成。承認後に試作品を制作します。", features: ["3DCADモデリング", "試作品制作", "デザイン相談", "ワックスモデル確認"] },
  { step: "02", title: "鋳造", desc: "ロストワックス鋳造で精密な金属加工を行います。シルバー925、ゴールド9k-18k対応。", features: ["シルバー925", "ゴールド9k-18k", "ロストワックス鋳造", "品質検査"] },
  { step: "03", title: "研磨", desc: "熟練職人による鏡面仕上げまたはマット仕上げ。複雑な形状も手研磨で対応。", features: ["鏡面仕上げ", "マット仕上げ", "手研磨", "複雑形状対応"] },
  { step: "04", title: "石留め", desc: "プロング、ベゼル、パヴェ、チャネルセッティング対応。CZ、ダイヤモンド、天然石対応。", features: ["プロング・ベゼル", "パヴェセッティング", "CZ・ダイヤ", "天然石"] },
  { step: "05", title: "メッキ", desc: "18Kゴールド、ローズゴールド、ロジウム、ブラックロジウム対応。耐久性の高いメッキ加工。", features: ["18Kゴールド", "ローズゴールド", "ロジウム", "ブラックロジウム"] },
];

const factorySections = [
  { dir: "factory/production", title: "生産フロア", subtitle: "最新の製造設備", desc: "最新のワックス注入、鋳造、組立ステーションを備えた生産フロア。", images: ["production-1.jpg", "production-2.jpg", "production-3.jpg"] },
  { dir: "factory/polishing", title: "研磨工程", subtitle: "職人による手仕上げ", desc: "粗研磨から精密手仕上げまで複数の研磨工程を経て、完璧な表面品質を実現。", images: ["polishing-1.jpg", "polishing-2.jpg", "polishing-3.jpg"] },
  { dir: "factory/setting", title: "石留め工程", subtitle: "マスター職人による作業", desc: "拡大鏡と専門工具を使用し、すべての石を完璧にセッティング。", images: ["setting-1.jpg", "setting-2.jpg", "setting-3.jpg"] },
];

export default function JaServicesPage() {
  return (
    <>
      <PageHero label="サービス" title="フルOEM製造" subtitle="デザイン・鋳造・研磨・石留め・メッキ — 一貫生産体制" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">製造プロセス</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                5つのステップで<span className="italic gold-text">完成へ</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-0">
            {process.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 60}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-charcoal-100">
                  <div className="lg:col-span-1">
                    <div className="font-display text-5xl font-light" style={{ color: "var(--gold)", opacity: 0.4, fontFamily: "var(--font-cormorant)" }}>{step.step}</div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-3xl text-charcoal-900 mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>{step.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="lg:col-span-6 lg:pl-16">
                    <div className="grid grid-cols-2 gap-3">
                      {step.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-charcoal-600 py-2 border-b border-charcoal-100">
                          <span style={{ color: "var(--gold)" }}>◇</span>{f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      {factorySections.map((section, si) => (
        <section key={section.title} className="py-28" style={{ background: si % 2 === 0 ? "var(--ink)" : "var(--cream)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="section-label mb-3">{section.subtitle}</p>
                <h2 className={`font-display font-light ${si % 2 === 0 ? "text-white" : "text-charcoal-900"}`} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  <span className="italic gold-text">{section.title}</span>
                </h2>
                <p className={`mt-4 text-sm leading-relaxed max-w-2xl ${si % 2 === 0 ? "text-charcoal-400" : "text-charcoal-500"}`}>{section.desc}</p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <RevealOnScroll key={img} delay={i * 100}>
                  <div className="group overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <div className="relative w-full h-full overflow-hidden">
                      <SafeImage src={`/images/${section.dir}/${img}`} alt={`${section.title} ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="py-24 text-center" style={{ background: "var(--warm-white)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">製造を始める</p>
          <h2 className="font-display font-light text-charcoal-900 mb-8" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            次のコレクションの<span className="italic gold-text">製造依頼はこちら</span>
          </h2>
          <p className="text-charcoal-500 text-sm mb-10">最小注文数30個・無料デザイン相談・迅速な対応</p>
          <Link href="/ja/contact" className="btn-gold-filled text-xs px-12 py-4">無料お見積もりを依頼する</Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
