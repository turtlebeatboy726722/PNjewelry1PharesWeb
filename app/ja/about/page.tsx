import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "会社概要 — 40年以上のOEMジュエリー製造",
  description: "P&Nジュエリーの40年以上の歴史。タイ・バンコクを拠点とするOEMジュエリーメーカー。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/about" },
};

const values = [
  { icon: "◈", title: "精密さ", desc: "すべての工程において、業界水準を超える精度を追求します。" },
  { icon: "◇", title: "誠実さ", desc: "透明な価格設定、正直なスケジュール、一貫した品質をお約束します。" },
  { icon: "◉", title: "パートナーシップ", desc: "お客様のブランドを自社のものとして扱い、成功に全力を尽くします。" },
  { icon: "◎", title: "革新", desc: "タイの金細工の伝統と最新のCAD/CAM技術を融合させています。" },
];

export default function JaAboutPage() {
  return (
    <>
      <PageHero label="会社概要" title="40年以上の職人技" subtitle="1980年代からタイで信頼されるOEMジュエリー製造パートナー" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll>
              <p className="section-label mb-4">私たちについて</p>
              <h2 className="font-display font-light text-charcoal-900 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                技術に裏打ちされた<span className="italic gold-text">卓越した品質</span>
              </h2>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-4">P&NジュエリーはタイのバンコクでOEM製造を40年以上行ってきました。世界中のジュエリーブランドに信頼されるパートナーです。</p>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-8">デザイン相談から最終品質検査まで、すべての工程を自社工場で一貫管理しています。</p>
              <div className="flex gap-4">
                <Link href="/ja/contact" className="btn-gold-filled text-xs px-8 py-3">お問い合わせ</Link>
                <Link href="/ja/services" className="btn-gold text-xs px-8 py-3">サービス詳細</Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <SafeImage src="/images/factory/production/production-1.jpg" alt="生産フロア" fill className="object-cover" />
                </div>
                <div className="relative overflow-hidden mt-8" style={{ aspectRatio: "3/4" }}>
                  <SafeImage src="/images/factory/setting/setting-1.jpg" alt="石留め" fill className="object-cover" />
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
              <p className="section-label mb-4">私たちの価値観</p>
              <h2 className="font-display font-light text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>コア<span className="italic gold-text">バリュー</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl mb-6" style={{ color: "var(--gold)" }}>{v.icon}</div>
                  <h3 className="text-white font-display text-xl mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{v.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <VideoSection youtubeId="cozkxxdlhto" label="工場ツアー" title="製造現場を" subtitle="ご覧ください" description="デザインから鋳造、研磨、石留め、最終品質検査まで完全な製造プロセスをご覧ください。" dark={false} />
      <section className="py-24 text-center" style={{ background: "var(--warm-white)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">プロジェクトを始める</p>
          <h2 className="font-display font-light text-charcoal-900 mb-8" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            一緒に<span className="italic gold-text">美しいものを作りましょう</span>
          </h2>
          <Link href="/ja/contact" className="btn-gold-filled text-xs px-12 py-4">お問い合わせ</Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
