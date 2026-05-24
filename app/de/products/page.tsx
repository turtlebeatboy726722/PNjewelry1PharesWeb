import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "OEM Schmuck — Ringe, Halsketten, Armbänder & Ohrringe",
  description: "P&N Jewelry Produktkategorien. Individuelle Ringe, Halsketten, Armbänder und Ohrringe aus unserer Bangkoker Fabrik. MOQ 30 Stück.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/products" },
};

const categories = [
  { title: "Ringe", href: "/de/products/rings", img: "/images/products/rings/ring-1.jpg", count: "Stapelringe · Solitäre · Bänder · Statement", desc: "Von minimalistischen Bändern bis zu aufwändigen Cocktailringen in Silber und Gold." },
  { title: "Halsketten", href: "/de/products/necklaces", img: "/images/products/necklaces/necklace-1.jpg", count: "Anhänger · Ketten · Layering · Choker", desc: "Layering-Stücke, Anhänger und Statement-Ketten für moderne Schmuckkollektionen." },
  { title: "Armbänder", href: "/de/products/bracelets", img: "/images/products/bracelets/bracelet-1.jpg", count: "Bangles · Manschetten · Charm · Tennis", desc: "Elegante Bangles, skulpturale Manschetten und zarte Charm-Armbänder." },
  { title: "Ohrringe", href: "/de/products/earrings", img: "/images/products/earrings/earring-1.jpg", count: "Ohrstecker · Creolen · Hänger · Kronleuchter", desc: "Von alltäglichen Ohrsteckern bis zu Statement-Kronleuchtern in Silber und Gold." },
];

export default function DeProductsPage() {
  return (
    <>
      <PageHero label="OEM Produkte" title="Unser Sortiment" subtitle="Alle Stücke in unserer Bangkoker Fabrik gefertigt" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Kategorien</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Was wir <span className="italic gold-text">fertigen</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-20">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                      <SafeImage src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="section-label mb-3">{cat.count}</p>
                    <h3 className="font-display text-charcoal-900 font-light mb-4" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>{cat.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed mb-8">{cat.desc}</p>
                    <Link href={cat.href} className="btn-gold text-xs px-10 py-3">{cat.title} ansehen</Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 text-center" style={{ background: "var(--ink)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">Individuelle Bestellung</p>
          <h2 className="font-display font-light text-white mb-8" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Nicht das Richtige gefunden? <span className="italic gold-text">Wir fertigen es.</span>
          </h2>
          <Link href="/de/contact" className="btn-gold-filled text-xs px-12 py-4">Angebot anfordern</Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
