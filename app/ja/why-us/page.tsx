import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "P&Nジュエリーが選ばれる理由 — 40年のOEM製造",
  description: "P&Nジュエリーが選ばれる8つの理由。40年以上の実績、低MOQ30個、フルサービス一貫生産、米国・スペインブランドの信頼。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/why-us" },
};

const advantages = [
  { icon: "◈", title: "40年以上の実績", desc: "国際的なジュエリーブランドへのOEM製造における数十年の経験。", detail: "1980年代に創業し、あらゆるジュエリートレンドの変化を乗り越え、同じ品質基準を維持し続けています。" },
  { icon: "◇", title: "低MOQ — 30個から", desc: "最小注文数30個からスタート可能。新ブランドのリリースにも最適。", detail: "低MOQポリシーにより、新デザインのテスト、限定版のリリース、新ブランドの立ち上げが低リスクで可能です。" },
  { icon: "◉", title: "一貫生産体制", desc: "デザインから納品まで自社一貫対応。外注なし。完全品質管理。", detail: "すべての工程を社内で行うことで、リードタイムを短縮し、一貫した品質基準を維持します。" },
  { icon: "◎", title: "グローバルブランド実績", desc: "米国、スペインをはじめ欧米の有名ブランドから信頼されています。", detail: "国際クライアントとの経験により、コンプライアンス要件や西洋市場の品質基準を熟知しています。" },
  { icon: "◆", title: "タイの熟練職人", desc: "タイには数百年の金属加工の伝統があります。職人技と最新技術を融合。", detail: "各職人は製造の特定段階を専門とし、真の職人製造の特徴である集中した繰り返しを通じて熟練度を高めています。" },
  { icon: "◐", title: "CADデザインサポート", desc: "スケッチや写真からプロの3DCADモデルを作成。承認後に生産開始。", detail: "CAD承認により高コストな製造ミスを排除。ご要望に応じてワックス試作品も制作します。" },
  { icon: "○", title: "豊富な素材・仕上げ", desc: "シルバー925、ゴールド9k-18k、ブラス。メッキはゴールド、ロジウム等対応。", detail: "すべての素材は認定サプライヤーから調達。リクエストに応じて素材証明書を提供します。" },
  { icon: "●", title: "透明なコミュニケーション", desc: "専任担当者による進捗写真の共有と明確なスケジュール管理。", detail: "生産マイルストーンの写真をWhatsAppまたはメールで提供。日米欧のビジネス時間帯に対応します。" },
];

const process = [
  { step: "01", label: "お問い合わせ", desc: "デザインファイル、参考写真、またはコンセプトをお送りください。" },
  { step: "02", label: "無料お見積もり", desc: "48時間以内に詳細な価格とスケジュールをご連絡します。" },
  { step: "03", label: "試作品確認", desc: "ワックスまたはシルバーの試作品をご確認いただきます。" },
  { step: "04", label: "生産開始", desc: "品質チェックポイントを設けながら本生産を開始します。" },
  { step: "05", label: "品質検査", desc: "梱包・出荷前にすべての製品を検査します。" },
  { step: "06", label: "世界各地へ配送", desc: "追跡・保険付きで世界各地へ発送します。" },
];

export default function JaWhyUsPage() {
  return (
    <>
      <PageHero label="選ばれる理由" title="ブランドから信頼されるメーカー" subtitle="40年以上 · 低MOQ · フルサービスOEM · バンコク, タイ" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">8つの強み</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                P&Nジュエリーを<span className="italic gold-text">選ぶ理由</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {advantages.map((item, i) => (
              <RevealOnScroll key={item.title} delay={(i % 2) * 120}>
                <div className="border border-charcoal-100 p-10 hover:border-gold-300 transition-all duration-400 group">
                  <div className="text-3xl mb-5" style={{ color: "var(--gold)" }}>{item.icon}</div>
                  <h3 className="font-display text-2xl text-charcoal-900 mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-charcoal-400 text-xs leading-relaxed border-t border-charcoal-100 pt-3">{item.detail}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{ num: "40+", label: "年の実績" }, { num: "30", label: "最小注文数" }, { num: "100%", label: "自社生産" }, { num: "世界", label: "グローバル対応" }].map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div>
                  <div className="font-display font-light mb-2" style={{ color: "var(--gold)", fontSize: "3.5rem", fontFamily: "var(--font-cormorant)" }}>{s.num}</div>
                  <div className="text-[10px] tracking-widest text-charcoal-400">{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">ご発注の流れ</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                お問い合わせから<span className="italic gold-text">納品まで</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <RevealOnScroll key={p.step} delay={i * 80}>
                <div className="flex gap-5 p-6 border border-charcoal-200 hover:border-gold-300 transition-colors duration-400">
                  <div className="font-display text-4xl font-light flex-shrink-0" style={{ color: "var(--gold)", opacity: 0.5, fontFamily: "var(--font-cormorant)" }}>{p.step}</div>
                  <div>
                    <h3 className="font-display text-xl text-charcoal-900 mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>{p.label}</h3>
                    <p className="text-charcoal-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 text-center" style={{ background: "var(--ink)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <p className="section-label mb-6">今すぐ始める</p>
            <h2 className="font-display font-light text-white mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              OEMプロジェクトを<span className="italic gold-text">始めませんか？</span>
            </h2>
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
