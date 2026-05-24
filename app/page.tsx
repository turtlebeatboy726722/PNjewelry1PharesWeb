import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "P&N Jewelry | OEM Jewelry Manufacturer Thailand — 40+ Years",
  description:
    "P&N Jewelry — Thailand's leading OEM jewelry manufacturer in Bangkok with 40+ years experience. Custom silver and gold jewelry for brands in Japan, Canada, Australia, Germany & USA. Low MOQ 30 pcs.",
};

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "30", label: "Min. Order Qty" },
  { value: "100%", label: "OEM Service" },
  { value: "Global", label: "Worldwide Shipping" },
];

const services = [
  { step: "01", title: "Design & CAD", desc: "From concept sketch to precise 3D CAD rendering. We bring your design vision to life with accuracy." },
  { step: "02", title: "Casting", desc: "Lost-wax casting with precision alloy control. Silver, gold, and base metals to your specification." },
  { step: "03", title: "Polishing", desc: "Mirror-finish or matte. Hand-polished by skilled craftsmen for flawless surface quality." },
  { step: "04", title: "Stone Setting", desc: "Prong, bezel, pavé, channel setting. Diamonds, gemstones, CZ — expertly secured." },
  { step: "05", title: "Plating", desc: "18k gold, rose gold, rhodium, black rhodium. Durable plating for lasting brilliance." },
];

const categories = [
  { title: "Rings", href: "/products/rings", img: "/images/products/rings/ring-1.jpg", desc: "Statement bands, stackable, solitaire" },
  { title: "Necklaces", href: "/products/necklaces", img: "/images/products/necklaces/necklace-1.jpg", desc: "Pendants, chains, layering pieces" },
  { title: "Bracelets", href: "/products/bracelets", img: "/images/products/bracelets/bracelet-1.jpg", desc: "Bangles, cuffs, charm bracelets" },
  { title: "Earrings", href: "/products/earrings", img: "/images/products/earrings/earring-1.jpg", desc: "Studs, hoops, drops, chandeliers" },
];

const factoryPreviews = [
  { img: "/images/factory/production/production-1.jpg", title: "Production Floor", desc: "State-of-the-art casting & assembly" },
  { img: "/images/factory/polishing/polishing-1.jpg", title: "Polishing Workshop", desc: "Hand-finished to perfection" },
  { img: "/images/factory/setting/setting-1.jpg", title: "Stone Setting", desc: "Master setters with decades of skill" },
];

const whyUs = [
  { icon: "◈", title: "40+ Years Expertise", desc: "Decades of OEM manufacturing experience for international jewelry brands in the USA, Japan, Canada, Australia, and Europe." },
  { icon: "◇", title: "Low MOQ — 30 Pcs", desc: "Start small, scale fast. Our Bangkok jewelry factory accepts orders from just 30 pieces per design." },
  { icon: "◉", title: "Full-Service Production", desc: "Design to delivery under one roof. No outsourcing. Complete control over every stage of production." },
  { icon: "◎", title: "Global Brand Partners", desc: "Trusted OEM jewelry manufacturer for established brands in the USA, Spain, Germany, Japan, and beyond." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0">
          <SafeImage src="/images/hero/hero-bg.jpg" alt="P&N Jewelry OEM Manufacturing Factory Bangkok Thailand" fill className="object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.8) 100%)" }} />
        </div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-32 opacity-30" style={{ background: "var(--gold)" }} />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label mb-8 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            OEM Jewelry Manufacturer — Bangkok, Thailand
          </p>
          <h1 className="text-white font-display font-light mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.8rem, 8vw, 7rem)", lineHeight: 1.05 }}>
            <span className="block animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>Crafted with</span>
            <span className="block gold-text animate-fade-up italic" style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}>40 Years of Mastery</span>
          </h1>
          <p className="text-charcoal-300 text-sm tracking-widest mb-12 animate-fade-up" style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}>
            Custom OEM & Private Label Jewelry · Silver 925 & Gold · Bangkok, Thailand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.9s", opacity: 0, animationFillMode: "forwards" }}>
            <Link href="/contact" className="btn-gold-filled text-xs px-10 py-4">Request Quotation</Link>
            <Link href="/about" className="btn-gold text-xs px-10 py-4">Our Story</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-widest text-gold-400 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 border-b border-charcoal-100" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-display font-light mb-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "3rem", color: "var(--gold)" }}>{s.value}</div>
                  <div className="text-[10px] tracking-widest text-charcoal-500 uppercase">{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <p className="section-label mb-4">About P&N Jewelry</p>
              <h2 className="font-display font-light mb-6 text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
                Thailand&apos;s Trusted{" "}
                <span className="italic gold-text">OEM Jewelry Manufacturer</span>
              </h2>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                P&N Jewelry Limited Partnership is a leading OEM jewelry manufacturer
                in Bangkok, Thailand, with over 40 years of experience. We are a
                trusted manufacturing partner for jewelry brands worldwide — including
                brands from the USA, Japan, Canada, Australia, Germany, and Spain.
              </p>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-8">
                As a full-service jewelry factory in Bangkok, we handle everything
                in-house: custom design, silver and gold casting, hand polishing,
                stone setting, and plating. Our low MOQ of just 30 pieces per design
                makes professional OEM manufacturing accessible to brands of all sizes.
              </p>
              <Link href="/about" className="btn-gold text-xs">Our Full Story</Link>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute -top-4 -left-4 w-full h-full border" style={{ borderColor: "var(--gold)", opacity: 0.3 }} />
                <div className="relative w-full h-full overflow-hidden">
                  <SafeImage src="/images/factory/production/production-2.jpg" alt="P&N Jewelry OEM Factory Bangkok Thailand" fill className="object-cover" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-28" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Our OEM Manufacturing Process</p>
              <h2 className="font-display font-light text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                From Concept to <span className="italic gold-text">Creation</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {services.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 80}>
                <div className="border-l border-charcoal-800 px-6 py-8 hover:border-gold-400 transition-colors duration-400 group" style={{ borderColor: i === 0 ? "var(--gold)" : undefined }}>
                  <div className="text-[11px] font-mono mb-4" style={{ color: "var(--gold)", opacity: 0.6 }}>{s.step}</div>
                  <h3 className="text-white font-display font-light mb-3 text-xl" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-gold text-xs">Full Service Details</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Custom OEM Collections</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Product <span className="italic gold-text">Categories</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 120}>
                <Link href={cat.href} className="block product-card group">
                  <div className="relative overflow-hidden" style={{ paddingBottom: "130%" }}>
                    <div className="absolute inset-0">
                      <SafeImage src={cat.img} alt={`Custom OEM ${cat.title} Manufacturer Thailand`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <h3 className="text-white font-display font-light text-3xl mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>{cat.title}</h3>
                      <p className="text-gold-400 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400">{cat.desc}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <div className="text-center mt-12">
              <Link href="/products" className="btn-gold text-xs">View All Products</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── FACTORY PREVIEW ─── */}
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Inside Our Bangkok Jewelry Factory</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Where <span className="italic gold-text">Precision</span> Meets Craft
              </h2>
              <p className="text-charcoal-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
                Our Bangkok jewelry factory houses every stage of OEM production —
                from wax injection and silver casting to stone setting and final
                quality control — all under one roof.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {factoryPreviews.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 100}>
                <div className="group overflow-hidden">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <SafeImage src={f.img} alt={`${f.title} — P&N Jewelry Factory Bangkok`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="pt-5 pb-2 border-b border-charcoal-200">
                    <h3 className="font-display text-xl text-charcoal-900 mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>{f.title}</h3>
                    <p className="text-charcoal-400 text-xs">{f.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={350}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-gold text-xs">Explore Our Process</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <VideoSection
        youtubeId="NYG46nwFnto"
        label="P&N Jewelry — Bangkok, Thailand"
        title="See Our"
        subtitle="Craftsmanship in Action"
        description="A glimpse inside our Bangkok OEM jewelry factory — where every piece is crafted with precision by our skilled Thai artisans."
        dark={true}
      />

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Why Choose P&N Jewelry</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                The OEM Manufacturer <span className="italic gold-text">Brands Trust</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <div className="border border-charcoal-100 p-8 hover:border-gold-300 transition-all duration-400 group">
                  <div className="text-3xl mb-6 inline-block" style={{ color: "var(--gold)" }}>{item.icon}</div>
                  <h3 className="font-display text-xl text-charcoal-900 mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <div className="text-center mt-12">
              <Link href="/why-us" className="btn-gold text-xs">All Advantages</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── MARKETS ─── */}
      <section className="py-16 border-t border-charcoal-100" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <p className="section-label mb-3">Serving Brands Worldwide</p>
              <p className="text-charcoal-500 text-sm max-w-2xl mx-auto leading-relaxed">
                As a trusted OEM jewelry manufacturer in Thailand, we work with jewelry brands
                across the USA, Japan, Canada, Australia, Germany, Spain, and beyond.
                Our Bangkok factory ships worldwide with full export documentation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-charcoal-400 text-sm">
              {["🇺🇸 USA", "🇯🇵 Japan", "🇨🇦 Canada", "🇦🇺 Australia", "🇩🇪 Germany", "🇪🇸 Spain", "🇬🇧 UK", "🇫🇷 France", "🌍 Worldwide"].map((country) => (
                <span key={country} className="flex items-center gap-1 text-xs tracking-widest">{country}</span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── SEO KEYWORDS ─── */}
      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <p className="section-label mb-4">Our Manufacturing Specializations</p>
              <h2
                className="font-display font-light text-charcoal-900"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Complete <span className="italic gold-text">Custom Jewelry Manufacturing</span> in Thailand
              </h2>
              <p className="text-charcoal-500 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
                P&N Jewelry is Thailand&apos;s trusted silver jewelry manufacturer and gold vermeil jewelry
                manufacturer — offering full custom jewelry manufacturing and private label jewelry
                manufacturing services from our Bangkok factory.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "◈",
                title: "Silver Jewelry Manufacturer Thailand",
                desc: "Sterling silver 925 jewelry manufacturing for global brands. Rings, necklaces, bracelets, and earrings cast and finished in Bangkok.",
              },
              {
                icon: "◇",
                title: "Gold Vermeil Jewelry Manufacturer",
                desc: "Premium gold vermeil manufacturing — thick 18k gold plating over silver 925. Ideal for luxury private label jewelry brands worldwide.",
              },
              {
                icon: "◉",
                title: "Jewelry Casting & Plating Services",
                desc: "Professional jewelry casting services, stone setting services, and jewelry plating services — all under one roof in our Bangkok factory.",
              },
              {
                icon: "◎",
                title: "Prototype & Low MOQ Manufacturing",
                desc: "Jewelry prototype and sampling before full production. Low MOQ jewelry manufacturing from 30 pieces — ideal for new collections and boutique brands.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 80}>
                <div className="border border-charcoal-100 p-7 hover:border-gold-300 transition-all duration-400 group">
                  <div
                    className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="font-display text-lg text-charcoal-900 mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="section-label mb-6">Get in Touch</p>
            <h2 className="font-display font-light text-white mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Ready to Start Your{" "}
              <span className="italic gold-text">OEM Jewelry Project?</span>
            </h2>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">
              Contact our Bangkok team for a free consultation and quote.
              Low MOQ 30 pieces. We respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold-filled text-xs px-12 py-4">Request a Free Quote</Link>
              <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-12 py-4">WhatsApp Us</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
