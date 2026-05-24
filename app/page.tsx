import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import RevealOnScroll from "@/components/RevealOnScroll";
import VideoSection from "@/components/VideoSection";

const categories = [
  { name: "Rings", slug: "rings", img: "/images/products/rings/ring-1.jpg", desc: "Custom OEM rings in silver & gold" },
  { name: "Necklaces", slug: "necklaces", img: "/images/products/necklaces/necklace-1.jpg", desc: "Precision-crafted necklaces & pendants" },
  { name: "Bracelets", slug: "bracelets", img: "/images/products/bracelets/bracelet-1.jpg", desc: "Fine bracelets for global brands" },
  { name: "Earrings", slug: "earrings", img: "/images/products/earrings/earring-1.jpg", desc: "Statement earrings, every style" },
];

const factoryItems = [
  {
    title: "Factory Production",
    desc: "Our Bangkok jewelry factory operates 6 days a week, running lost-wax casting, assembly, and quality control entirely in-house — no subcontracting.",
    images: [
      "/images/factory/production/production-1.jpg",
      "/images/factory/production/production-2.jpg",
      "/images/factory/production/production-3.jpg",
    ],
  },
  {
    title: "Polishing Process",
    desc: "Every piece undergoes multi-stage hand polishing by our skilled artisans, achieving mirror-finish results that meet the standards of leading jewelry brands worldwide.",
    images: [
      "/images/factory/polishing/polishing-1.jpg",
      "/images/factory/polishing/polishing-2.jpg",
      "/images/factory/polishing/polishing-3.jpg",
    ],
  },
  {
    title: "Stone Setting",
    desc: "We specialize in prong, bezel, pavé, and channel settings using CZ, diamonds, and natural gemstones — trusted by OEM clients from the USA, UK, Japan, Russia, and Europe.",
    images: [
      "/images/factory/setting/setting-1.jpg",
      "/images/factory/setting/setting-2.jpg",
      "/images/factory/setting/setting-3.jpg",
    ],
  },
];

const reasons = [
  { icon: "◈", title: "40+ Years Experience", desc: "Decades of OEM jewelry manufacturing expertise serving global brands from Thailand." },
  { icon: "◇", title: "Low MOQ 30 Pieces", desc: "One of the lowest minimums in Thailand — ideal for startups and boutique jewelry brands." },
  { icon: "◉", title: "Full-Service Under One Roof", desc: "Design, casting, polishing, stone setting, and plating — all in our Bangkok factory." },
  { icon: "◈", title: "Global Brand Trusted", desc: "Proven track record with brands in the USA, UK, Japan, Canada, Australia, Germany, Russia, and across Europe." },
];

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <SafeImage
            src="/images/hero/hero-bg.jpg"
            alt="P&N Jewelry OEM manufacturing factory Bangkok Thailand"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <RevealOnScroll>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6 font-light">
              Bangkok, Thailand · Since 1984
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-wide">
              OEM Jewelry Manufacturer
              <span className="block text-gold italic mt-2">in Thailand</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              40+ Years Experience · Trusted by Global Brands · Low MOQ 30 Pieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Quotation
              </Link>
              <Link href="/products" className="btn-secondary">
                View Products
              </Link>
            </div>
          </RevealOnScroll>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">About Us</p>
                <h2 className="text-3xl md:text-4xl font-light text-black mb-6 leading-tight">
                  Thailand's Trusted OEM Jewelry Manufacturing Partner
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  P&amp;N Jewelry Limited Partnership is a leading <strong>OEM jewelry manufacturer in Thailand</strong> with over 40 years of experience crafting precision jewelry for global brands.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Based in Bangkok, our full-service <strong>jewelry factory</strong> handles everything in-house — from design and lost-wax casting to hand polishing, stone setting, and plating. We serve brands in the <strong>USA, UK, Japan, Canada, Australia, Germany, Russia</strong>, and across Europe.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  With a <strong>low MOQ starting from just 30 pieces</strong> per design, we are the ideal manufacturing partner for boutique labels, established brands, and startups alike.
                </p>
                <Link href="/about" className="btn-outline">
                  Our Story
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "40+", label: "Years Experience" },
                  { num: "30", label: "Pieces Min. Order" },
                  { num: "100%", label: "In-House Production" },
                  { num: "USA & EU", label: "Brand Clients" },
                ].map((s) => (
                  <div key={s.label} className="border border-gold/30 p-6 text-center">
                    <div className="text-3xl font-light text-gold mb-2">{s.num}</div>
                    <div className="text-xs tracking-widest uppercase text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                Full-Service OEM Jewelry Production
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                As a <strong className="text-white/70">custom jewelry manufacturer in Bangkok</strong>, we offer end-to-end production — from your first design sketch to finished, export-ready pieces.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-5 gap-px bg-white/10">
            {["Design & CAD", "Lost-Wax Casting", "Hand Polishing", "Stone Setting", "Plating & QC"].map((step, i) => (
              <RevealOnScroll key={step} delay={i * 100}>
                <div className="bg-black p-8 text-center hover:bg-white/5 transition-colors">
                  <div className="text-gold text-2xl font-light mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-white text-sm font-light tracking-wide">{step}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Collections</p>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
                Custom OEM Jewelry Categories
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Sterling silver 925, gold 9k–18k, brass — manufactured to your exact specifications with <strong>low MOQ starting at 30 pieces</strong>.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.slug} delay={i * 80}>
                <Link href={`/products/${cat.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                    <SafeImage
                      src={cat.img}
                      alt={`${cat.name} OEM jewelry manufacturer Thailand`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-light text-black tracking-wide mb-1">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.desc}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FACTORY SECTIONS ─── */}
      {factoryItems.map((item, idx) => (
        <section
          key={item.title}
          className={`section-padding ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container-luxury">
            <RevealOnScroll>
              <div className="mb-10">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Our Facility</p>
                <h2 className="text-2xl md:text-3xl font-light text-black mb-3">{item.title}</h2>
                <p className="text-gray-600 max-w-2xl leading-relaxed">{item.desc}</p>
              </div>
            </RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-4">
              {item.images.map((img, j) => (
                <RevealOnScroll key={j} delay={j * 100}>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <SafeImage
                      src={img}
                      alt={`${item.title} - P&N Jewelry factory Bangkok Thailand`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── VIDEO SECTION ─── */}
      <VideoSection
        videoId="NYG46nwFnto"
        title="Watch Our Manufacturing Process"
        subtitle="See how we craft precision OEM jewelry in our Bangkok factory — from design to finished piece."
      />

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                Why Global Brands Choose P&amp;N Jewelry
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Brands from the <strong className="text-white/70">USA, UK, Japan, Canada, Australia, Germany, and Russia</strong> trust us for consistent quality, transparent communication, and reliable delivery.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r, i) => (
              <RevealOnScroll key={r.title} delay={i * 80}>
                <div className="text-center border border-white/10 p-8 hover:border-gold/40 transition-colors">
                  <div className="text-gold text-3xl mb-4">{r.icon}</div>
                  <h3 className="text-white font-light mb-3 tracking-wide">{r.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/why-us" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="section-padding bg-white">
        <div className="container-luxury text-center">
          <RevealOnScroll>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Start Your Project</p>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
              Ready to Manufacture Your Jewelry Collection?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are a startup building your first collection or an established brand looking for a reliable <strong>private label jewelry manufacturer in Thailand</strong>, we are ready to help. <strong>MOQ from 30 pieces per design.</strong> Send us your idea and receive a quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Free Quote
              </Link>
              <a
                href="https://wa.me/66617898877"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Us Now
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
