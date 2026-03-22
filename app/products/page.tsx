import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "OEM Jewelry Products — Rings, Necklaces, Bracelets & Earrings",
  description:
    "Browse P&N Jewelry's OEM product categories. Custom rings, necklaces, bracelets and earrings manufactured in Bangkok, Thailand. MOQ 50 pieces.",
};

const categories = [
  {
    title: "Rings",
    href: "/products/rings",
    img: "/images/products/rings/ring-1.jpg",
    count: "Stackable · Solitaire · Band · Statement",
    desc: "From minimalist bands to elaborate cocktail rings, we craft rings in silver, gold, and mixed metals to your exact specification.",
  },
  {
    title: "Necklaces",
    href: "/products/necklaces",
    img: "/images/products/necklaces/necklace-1.jpg",
    count: "Pendant · Chain · Layering · Choker",
    desc: "Layering pieces, pendants, and statement chains — designed for modern jewelry collections and private label brands.",
  },
  {
    title: "Bracelets",
    href: "/products/bracelets",
    img: "/images/products/bracelets/bracelet-1.jpg",
    count: "Bangle · Cuff · Charm · Tennis",
    desc: "Elegant bangles, sculptural cuffs, and delicate charm bracelets crafted in sterling silver and gold-plated finishes.",
  },
  {
    title: "Earrings",
    href: "/products/earrings",
    img: "/images/products/earrings/earring-1.jpg",
    count: "Stud · Hoop · Drop · Chandelier",
    desc: "From everyday studs to statement chandeliers — earrings crafted in silver, gold, and rose gold with stone-setting options.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="OEM Collections"
        title="Our Product Range"
        subtitle="All pieces manufactured in-house at our Bangkok facility"
      />

      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Categories</p>
              <h2
                className="font-display font-light text-charcoal-900"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                What We <span className="italic gold-text">Manufacture</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-20">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 100}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                      <SafeImage
                        src={cat.img}
                        alt={cat.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="section-label mb-3">{cat.count}</p>
                    <h3
                      className="font-display text-charcoal-900 font-light mb-4"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed mb-8">{cat.desc}</p>
                    <Link href={cat.href} className="btn-gold text-xs px-10 py-3">
                      Browse {cat.title}
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "var(--ink)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">Custom Order</p>
          <h2
            className="font-display font-light text-white mb-8"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Don't See What You Need?{" "}
            <span className="italic gold-text">We'll Make It.</span>
          </h2>
          <p className="text-charcoal-400 text-sm mb-10">
            Send us your design or concept and we'll produce it from scratch.
          </p>
          <Link href="/contact" className="btn-gold-filled text-xs px-12 py-4">
            Request Custom Quote
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
