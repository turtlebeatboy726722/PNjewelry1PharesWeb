import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "OEM Jewelry Portfolio — Custom Silver & Gold Samples | Bangkok Thailand",
  description:
    "Browse P&N Jewelry's OEM portfolio. Custom 925 sterling silver, gold vermeil, natural diamond, lab grown diamond, moissanite and CZ jewelry — manufactured in Bangkok, Thailand. MOQ 30 pieces.",
  keywords: [
    "OEM jewelry portfolio Thailand",
    "custom jewelry samples Bangkok",
    "silver jewelry examples Thailand",
    "gold vermeil jewelry portfolio",
    "custom jewelry manufacturer portfolio",
    "jewelry OEM samples Bangkok",
  ],
  alternates: { canonical: "https://www.pnjewelrymfg.com/portfolio" },
};

const categories = [
  { id: "all", label: "All" },
  { id: "rings", label: "Rings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "bracelets", label: "Bracelets" },
  { id: "earrings", label: "Earrings" },
];

const items = [
  { id: "r1", category: "rings", img: "/images/products/rings/ring-1.jpg", title: "Stackable Band", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "r2", category: "rings", img: "/images/products/rings/ring-2.jpg", title: "Solitaire Prong", material: "925 Sterling Silver", finish: "18k Gold Plated" },
  { id: "r3", category: "rings", img: "/images/products/rings/ring-3.jpg", title: "Pavé Statement", material: "925 Sterling Silver", finish: "Rose Gold · CZ" },
  { id: "r4", category: "rings", img: "/images/products/rings/ring-4.jpg", title: "Twisted Band", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "r5", category: "rings", img: "/images/products/rings/ring-5.jpg", title: "Bezel Set Stone", material: "925 Sterling Silver", finish: "Gold Vermeil" },
  { id: "r6", category: "rings", img: "/images/products/rings/ring-6.jpg", title: "Signet Ring", material: "925 Sterling Silver", finish: "Oxidized Silver" },
  { id: "n1", category: "necklaces", img: "/images/products/necklaces/necklace-1.jpg", title: "Delicate Pendant", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "n2", category: "necklaces", img: "/images/products/necklaces/necklace-2.jpg", title: "Layering Chain", material: "925 Sterling Silver", finish: "18k Gold Plated" },
  { id: "n3", category: "necklaces", img: "/images/products/necklaces/necklace-3.jpg", title: "Pavé Choker", material: "925 Sterling Silver", finish: "Rose Gold · CZ" },
  { id: "n4", category: "necklaces", img: "/images/products/necklaces/necklace-4.jpg", title: "Coin Necklace", material: "925 Sterling Silver", finish: "Gold Vermeil" },
  { id: "n5", category: "necklaces", img: "/images/products/necklaces/necklace-5.jpg", title: "Bar Pendant", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "n6", category: "necklaces", img: "/images/products/necklaces/necklace-6.jpg", title: "Teardrop Lariat", material: "925 Sterling Silver", finish: "18k Gold Plated" },
  { id: "b1", category: "bracelets", img: "/images/products/bracelets/bracelet-1.jpg", title: "Hammered Bangle", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "b2", category: "bracelets", img: "/images/products/bracelets/bracelet-2.jpg", title: "Open Cuff", material: "925 Sterling Silver", finish: "18k Gold Plated" },
  { id: "b3", category: "bracelets", img: "/images/products/bracelets/bracelet-3.jpg", title: "Tennis Bracelet", material: "925 Sterling Silver", finish: "Rose Gold · CZ" },
  { id: "b4", category: "bracelets", img: "/images/products/bracelets/bracelet-4.jpg", title: "Charm Chain", material: "925 Sterling Silver", finish: "Gold Vermeil" },
  { id: "b5", category: "bracelets", img: "/images/products/bracelets/bracelet-5.jpg", title: "Twisted Bangle", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "b6", category: "bracelets", img: "/images/products/bracelets/bracelet-6.jpg", title: "Pavé Cuff", material: "925 Sterling Silver", finish: "18k Gold Plated" },
  { id: "e1", category: "earrings", img: "/images/products/earrings/earring-1.jpg", title: "Classic Stud", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "e2", category: "earrings", img: "/images/products/earrings/earring-2.jpg", title: "Hoop Earring", material: "925 Sterling Silver", finish: "18k Gold Plated" },
  { id: "e3", category: "earrings", img: "/images/products/earrings/earring-3.jpg", title: "Drop Earring", material: "925 Sterling Silver", finish: "Rose Gold · CZ" },
  { id: "e4", category: "earrings", img: "/images/products/earrings/earring-4.jpg", title: "Chandelier", material: "925 Sterling Silver", finish: "Gold Vermeil" },
  { id: "e5", category: "earrings", img: "/images/products/earrings/earring-5.jpg", title: "Huggie Hoop", material: "925 Sterling Silver", finish: "Rhodium Plated" },
  { id: "e6", category: "earrings", img: "/images/products/earrings/earring-6.jpg", title: "Ear Cuff", material: "925 Sterling Silver", finish: "Oxidized Silver" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="OEM Portfolio"
        title="Our Work"
        subtitle="Custom OEM jewelry manufactured in Bangkok — 925 sterling silver, gold vermeil & more"
      />

      {/* Intro */}
      <section className="py-16 border-b border-charcoal-100" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <RevealOnScroll>
            <p className="text-charcoal-500 text-sm leading-relaxed mb-6">
              The pieces below represent the types of custom OEM jewelry we manufacture at our Bangkok factory.
              Every item is produced from a client&apos;s original design — in 925 sterling silver, gold vermeil,
              or with natural diamond, lab grown diamond, moissanite, or CZ stone setting.
            </p>
            <p className="text-charcoal-400 text-xs tracking-widest uppercase">
              All designs are client-owned · NDA respected · Custom designs from 30 pieces MOQ
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Filter + Grid */}
      <PortfolioGrid items={items} categories={categories} />

      {/* Stone Capabilities */}
      <section className="py-20" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Stone Setting</p>
              <h2 className="font-display font-light text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                We Work With <span className="italic gold-text">All Stone Types</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "◈", name: "Natural Diamond", desc: "GIA-certified available" },
              { icon: "◇", name: "Lab Grown Diamond", desc: "Conflict-free" },
              { icon: "◉", name: "Moissanite", desc: "9.25 Mohs hardness" },
              { icon: "◎", name: "CZ (AAA+)", desc: "All shapes & sizes" },
            ].map((s, i) => (
              <RevealOnScroll key={s.name} delay={i * 80}>
                <div className="border border-charcoal-800 p-6 text-center hover:border-gold-500 transition-all duration-400">
                  <div className="text-2xl mb-3" style={{ color: "var(--gold)" }}>{s.icon}</div>
                  <h3 className="text-white font-display text-lg mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>{s.name}</h3>
                  <p className="text-charcoal-400 text-xs">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <p className="section-label mb-6">Start Your Project</p>
            <h2 className="font-display font-light text-charcoal-900 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Want Something <span className="italic gold-text">Like This?</span>
            </h2>
            <p className="text-charcoal-500 text-sm mb-10 leading-relaxed">
              Send us your design, sketch, or reference image and we&apos;ll manufacture it
              in 925 sterling silver, gold vermeil, or your preferred material. MOQ from 30 pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold-filled text-xs px-12 py-4">Request a Quote</Link>
              <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-12 py-4">WhatsApp Us</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
