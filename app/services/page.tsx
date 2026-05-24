import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

export const metadata = {
  title: 'OEM Jewelry Manufacturing Services | Casting, Stone Setting & Plating | P&N Thailand',
  description: 'Full-service custom jewelry manufacturing in Bangkok. Jewelry casting services, stone setting services, jewelry plating services, prototype & sampling. Silver 925, Gold Vermeil, gold 9k-18k. Low MOQ 30 pieces.',
}

const process = [
  {
    step: "01",
    title: "Design & CAD",
    desc: "Submit your sketch, concept, or reference image. Our design team creates precise 3D CAD models for your approval before production begins. We support revisions until perfection.",
    features: ["3D CAD Modeling", "Prototype Samples", "Design Consultation", "Wax Model Approval"],
  },
  {
    step: "02",
    title: "Casting",
    desc: "Using lost-wax casting, we achieve flawless metal reproduction. Our alloys include sterling silver (925), gold (9k\u201318k), brass, and copper. Each piece is individually inspected post-cast.",
    features: ["Silver 925 & Gold", "Lost-wax Method", "Alloy Control", "Post-cast QC"],
  },
  {
    step: "03",
    title: "Polishing",
    desc: "Mirror-bright or matte brushed \u2014 our polishing team delivers the exact surface finish your design requires. Hand-polishing ensures no machine marks on complex geometries.",
    features: ["Mirror Polish", "Matte & Brushed", "Hand Finishing", "Complex Geometry"],
  },
  {
    step: "04",
    title: "Stone Setting",
    desc: "Master setters with decades of experience handle prong, bezel, pav\u00e9, channel, and micro-setting. We work with diamonds, colored gemstones, CZ, and synthetic stones.",
    features: ["Prong & Bezel", "Pav\u00e9 Setting", "CZ & Diamonds", "Gemstones"],
  },
  {
    step: "05",
    title: "Plating",
    desc: "Electroplating in 18k gold, rose gold, yellow gold, rhodium, black rhodium, and custom colors. Durable plating with adhesion testing to ensure lasting quality.",
    features: ["18k Gold Plating", "Rose Gold", "Rhodium", "Black Rhodium"],
  },
];

const capabilities = [
  { icon: "\u25c8", title: "Jewelry Casting Services", desc: "Professional lost-wax jewelry casting services for silver 925, gold 9k\u201318k, brass, and copper. Precision casting with post-cast quality inspection for all jewelry types." },
  { icon: "\u25c7", title: "Stone Setting Services", desc: "Expert stone setting services including prong, bezel, pav\u00e9, channel, and micro-setting. We work with diamonds, CZ, and natural or synthetic gemstones to your exact specification." },
  { icon: "\u25c9", title: "Jewelry Plating Services", desc: "Professional jewelry plating services in 18k gold, rose gold, rhodium, and black rhodium. All plating is adhesion-tested for lasting quality and durability." },
  { icon: "\u25ce", title: "Jewelry Prototype & Sampling", desc: "Wax or silver prototype and sampling service before full production. Approve your custom jewelry design before committing to full-scale manufacturing." },
  { icon: "\u25c6", title: "Gold Vermeil Jewelry Manufacturing", desc: "Gold vermeil jewelry manufacturing \u2014 thick gold plating over sterling silver 925. Ideal for premium private label jewelry brands seeking luxury quality at accessible prices." },
  { icon: "\u25d0", title: "Low MOQ Jewelry Manufacturing", desc: "Low MOQ jewelry manufacturing starting from just 30 pieces per design. Professional custom jewelry manufacturing for boutique brands and emerging designers." },
];

const factorySections = [
  {
    dir: "factory/production",
    title: "Factory Production",
    subtitle: "State-of-the-Art Manufacturing Floor",
    desc: "Our production floor is equipped with modern wax injection, casting, and assembly stations. Skilled operators manage every stage with precision, ensuring consistency across every piece in your order.",
    images: ["production-1.jpg", "production-2.jpg", "production-3.jpg"],
  },
  {
    dir: "factory/polishing",
    title: "Polishing Process",
    subtitle: "Handcrafted Surface Perfection",
    desc: "Each piece passes through multiple stages of polishing \u2014 from rough tumbling to fine hand-finishing. Our polishers are trained to maintain the exact surface quality specified for each collection.",
    images: ["polishing-1.jpg", "polishing-2.jpg", "polishing-3.jpg"],
  },
  {
    dir: "factory/setting",
    title: "Stone Setting",
    subtitle: "Master Setters at Work",
    desc: "Stone setting is where art meets precision. Our master setters use magnification and specialized tools to secure every stone perfectly \u2014 ensuring security, alignment, and brilliance.",
    images: ["setting-1.jpg", "setting-2.jpg", "setting-3.jpg"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Full OEM Manufacturing"
        subtitle="Design \u00b7 Cast \u00b7 Polish \u00b7 Set \u00b7 Plate \u2014 Everything under one roof"
      />

      {/* OEM Process */}
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Our OEM Process</p>
              <h2
                className="font-display font-light text-charcoal-900"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Five Steps to{" "}
                <span className="italic gold-text">Perfection</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-0">
            {process.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 60}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-charcoal-100 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:col-span-1">
                    <div
                      className="font-display text-5xl font-light"
                      style={{ color: "var(--gold)", opacity: 0.4, fontFamily: "var(--font-cormorant)" }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3
                      className="font-display text-3xl text-charcoal-900 mb-4"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="lg:col-span-6 lg:pl-16">
                    <div className="grid grid-cols-2 gap-3">
                      {step.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-xs text-charcoal-600 py-2 border-b border-charcoal-100"
                        >
                          <span style={{ color: "var(--gold)" }}>\u25c7</span>
                          {f}
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

      {/* ─── CAPABILITIES ─── */}
      <section className="py-20" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <p className="section-label mb-4">What We Offer</p>
              <h2
                className="font-display font-light text-white"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Complete <span className="italic gold-text">Custom Jewelry Manufacturing</span>
              </h2>
              <p className="text-charcoal-400 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
                From jewelry prototype and sampling to full-scale private label jewelry manufacturing \u2014
                P&N Jewelry handles every step of your Thailand OEM jewelry manufacturing in-house.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 80}>
                <div className="border border-charcoal-800 p-8 hover:border-gold-500 transition-all duration-400 group">
                  <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block" style={{ color: "var(--gold)" }}>{item.icon}</div>
                  <h3
                    className="text-white font-display text-xl mb-3 group-hover:text-gold-200 transition-colors duration-300"
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

      {/* Factory Sections */}
      {factorySections.map((section, si) => (
        <section
          key={section.title}
          className="py-28"
          style={{ background: si % 2 === 0 ? "var(--cream)" : "var(--ink)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="section-label mb-3">{section.subtitle}</p>
                <h2
                  className={`font-display font-light ${si % 2 === 0 ? "text-charcoal-900" : "text-white"}`}
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {section.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="italic gold-text">
                    {section.title.split(" ").slice(-1)[0]}
                  </span>
                </h2>
                <p
                  className={`mt-4 text-sm leading-relaxed max-w-2xl ${
                    si % 2 === 0 ? "text-charcoal-500" : "text-charcoal-400"
                  }`}
                >
                  {section.desc}
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <RevealOnScroll key={img} delay={i * 100}>
                  <div className="group overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <div className="relative w-full h-full overflow-hidden">
                      <SafeImage
                        src={`/images/${section.dir}/${img}`}
                        alt={`${section.title} ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <p className="section-label mb-6">Start Production</p>
            <h2
              className="font-display font-light text-charcoal-900 mb-8"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Ready to Manufacture Your{" "}
              <span className="italic gold-text">Next Collection?</span>
            </h2>
            <p className="text-charcoal-500 text-sm mb-10">
              Low MOQ of 30 pieces. Free design consultation. Fast turnaround.
            </p>
            <Link href="/contact" className="btn-gold-filled text-xs px-12 py-4">
              Request a Free Quote
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
