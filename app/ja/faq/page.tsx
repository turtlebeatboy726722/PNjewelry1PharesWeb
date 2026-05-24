import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "よくある質問 (FAQ)",
  description: "P&NジュエリーのOEM製造に関するよくある質問。MOQ、リードタイム、素材、カスタムデザイン、配送について。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/faq" },
};

const faqs = [
  {
    category: "ご注文について",
    items: [
      { q: "最小注文数(MOQ)はいくつですか？", a: "1デザインあたり30個からご注文いただけます。デザインの複雑さや素材によって交渉可能です。" },
      { q: "カスタムデザインは受け付けていますか？", a: "はい。スケッチ、写真、CADファイルをお送りいただければ、デザインチームがご要望を実現します。完全カスタムOEM・プライベートレーベル製造に対応しています。" },
      { q: "本生産前に試作品を確認できますか？", a: "はい。本生産前に実物試作品のご確認を強くお勧めします。試作品のリードタイムは7〜14営業日です。" },
      { q: "支払い条件はどのようになっていますか？", a: "標準条件は生産開始時に50%の手付金、出荷前に50%の残金です。銀行振込(T/T)に対応しています。" },
    ],
  },
  {
    category: "製造について",
    items: [
      { q: "リードタイムはどのくらいですか？", a: "試作品は7〜14営業日、本生産は数量・デザインの複雑さ・石留め要件によって30〜45営業日です。" },
      { q: "どのような素材を使用していますか？", a: "シルバー925、ゴールド9k〜18k、ブラス、銅に対応。メッキは18Kゴールド、ローズゴールド、ロジウム、ブラックロジウムをご用意しています。" },
      { q: "石留めのオプションはありますか？", a: "プロング、ベゼル、パヴェ、チャネル、マイクロセッティングに対応。CZ、ダイヤモンド、天然・合成石に対応しています。" },
      { q: "CADデザインサービスはありますか？", a: "はい。スケッチや参考画像から精密な3DCADモデルを作成します。物理的な試作品のご制作も可能です。" },
    ],
  },
  {
    category: "配送・物流",
    items: [
      { q: "日本への配送は可能ですか？", a: "はい。DHL、FedEx、EMSにて日本を含む世界各地に発送しています。すべての荷物に追跡番号と保険が付きます。" },
      { q: "輸出書類は提供していますか？", a: "はい。商業インボイス、パッキングリスト、原産地証明書、素材証明書（ご要望の場合）を提供します。" },
    ],
  },
];

export default function JaFAQPage() {
  return (
    <>
      <PageHero label="FAQ" title="よくある質問" subtitle="P&NジュエリーのOEM製造に関するすべての疑問にお答えします" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {faqs.map((section, si) => (
            <RevealOnScroll key={section.category} delay={si * 80}>
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span style={{ color: "var(--gold)" }}>◇</span>
                  <h2 className="font-display text-2xl text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)" }}>{section.category}</h2>
                  <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.2 }} />
                </div>
                <div className="space-y-0">
                  {section.items.map((item, i) => (
                    <details key={i} className="group border-b border-charcoal-100 py-5 cursor-pointer">
                      <summary className="flex items-start justify-between gap-4 list-none">
                        <h3 className="font-display text-lg text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300 pr-4" style={{ fontFamily: "var(--font-cormorant)" }}>{item.q}</h3>
                        <span className="flex-shrink-0 text-xl transition-transform duration-300 group-open:rotate-45 mt-0.5" style={{ color: "var(--gold)" }}>+</span>
                      </summary>
                      <p className="text-charcoal-500 text-sm leading-relaxed mt-4 pr-8">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
          <RevealOnScroll delay={200}>
            <div className="text-center p-12 border border-charcoal-200" style={{ background: "var(--cream)" }}>
              <span className="text-3xl block mb-4" style={{ color: "var(--gold)" }}>◈</span>
              <h3 className="font-display text-2xl text-charcoal-900 mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>他にご質問はありますか？</h3>
              <p className="text-charcoal-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">お客様の具体的なご要件について、チームが丁寧にお答えします。</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ja/contact" className="btn-gold-filled text-xs px-10 py-3">お問い合わせ</Link>
                <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-10 py-3">WhatsAppで相談する</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
