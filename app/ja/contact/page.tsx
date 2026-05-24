import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "お問い合わせ — OEMジュエリーのお見積もり依頼",
  description: "P&NジュエリーへのOEM製造のお問い合わせ。メール: sale@pnjewelrymfg.com またはWhatsAppでお気軽にどうぞ。48時間以内にご返答。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/contact" },
};

const contactInfo = [
  { icon: "✉", label: "メール", value: "sale@pnjewelrymfg.com", href: "mailto:sale@pnjewelrymfg.com" },
  { icon: "◎", label: "WhatsApp — ライン1", value: "+66 61 789 8877", href: "https://wa.me/66617898877" },
  { icon: "◎", label: "WhatsApp — ライン2", value: "+66 84 459 8284", href: "https://wa.me/66844598284" },
  { icon: "◇", label: "所在地", value: "バンコク, タイ", href: null },
];

export default function JaContactPage() {
  return (
    <>
      <PageHero label="お問い合わせ" title="お見積もりを依頼する" subtitle="すべてのお問い合わせに24〜48時間以内にご返答いたします" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <p className="section-label mb-4">連絡先情報</p>
                <h2 className="font-display font-light text-charcoal-900 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                  プロジェクトについて<span className="italic gold-text">ご相談ください</span>
                </h2>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-10">新しいジュエリーブランドの立ち上げでも、既存コレクションの拡張でも、お気軽にご相談ください。デザインファイルや参考写真をお送りいただければ、すぐにご対応します。</p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4 items-start py-4 border-b border-charcoal-100">
                      <span className="flex-shrink-0 text-lg mt-0.5" style={{ color: "var(--gold)" }}>{item.icon}</span>
                      <div>
                        <div className="text-[10px] tracking-widest text-charcoal-400 uppercase mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-charcoal-800 text-sm hover:text-gold-500 transition-colors duration-300">{item.value}</a>
                        ) : (
                          <span className="text-charcoal-800 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col gap-3">
                  <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold-filled text-xs px-6 py-3 text-center">WhatsApp ライン1</a>
                  <a href="https://wa.me/66844598284" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-6 py-3 text-center">WhatsApp ライン2</a>
                </div>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-3">
              <RevealOnScroll delay={150}>
                <ContactForm />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
