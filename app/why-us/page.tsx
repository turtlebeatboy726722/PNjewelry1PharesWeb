import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Why Choose P&N Jewelry — 40 Years OEM Manufacturing",
  description:
    "Discover why global brands choose P&N Jewelry: 40+ years experience, low MOQ 50 pcs, full-service OEM, and trusted by USA & Spain brands.",
};

const advantages = [
  {
    icon: "◈",
    title: "40+ Years of Expertise",
    desc: "Four decades of hands-on OEM jewelry manufacturing experience. We've produced millions of pieces for brands across three continents. Our institutional knowledge is unmatched.",
    detail: "Founded in the 1980s, P&N Jewelry has navigated every shift in global jewelry trends — from traditional goldsmithing to modern minimalism — while maintaining the same standard of craft.",
  },
  {
    icon: "◇",
    title: "Low MOQ — Just 50 Pieces",
    desc: "Most large manufacturers require thousands of pieces. We start at 50 pieces per design, making high-quality OEM manufacturing accessible to boutique brands, startups, and emerging designers.",
    detail: "Our low MOQ policy allows you to test new designs, launch limited editions, or start a new brand without the financial risk of massive inventory commitments.",
  },
  {
    icon: "◉",
    title: "Full-Service Under One Roof",
    desc: "Design, casting, polishing, stone setting, plating, QC, and packaging — all handled in our Bangkok facility. No subcontracting. Complete quality control from start to finish.",
    detail: "By keeping everything in-house, we eliminate handoff errors, reduce lead times, and maintain consistent quality standards that subcontracted production cannot guarantee.",
  },
  {
    icon: "◎",
    title: "Global Brand Experience",
    desc: "We have manufactured for established jewelry brands in the USA and Spain, understanding the quality standards, labeling requirements, and market expectations of Western markets.",
    detail: "Our experience with international clients means we understand compliance requirements, hallmarking standards, and the expectations of discerning retail buyers.",
  },
  {
    icon: "◆",
    title: "Master Thai Craftsmen",
    desc: "Thailand has a centuries-old tradition of fine metalwork. Our artisans combine this cultural heritage with formal training to deliver surface quality and detail that machines cannot replicate.",
    detail: "Each craftsperson in our workshop specializes in a specific stage of production, building mastery through focused repetition — the hallmark of true artisanal manufacturing.",
  },
  {
    icon: "◐",
    title: "CAD Design Support",
    desc: "Submit a sketch, photo, or concept and our in-house design team will produce professional 3D CAD models. Review and approve before a single gram of metal is cast.",
    detail: "CAD approval eliminates costly production errors. We produce physical wax prototypes upon request, giving you a tangible sample before full production begins.",
  },
  {
    icon: "○",
    title: "Flexible Materials & Finishes",
    desc: "Sterling silver 925, gold 9k–18k, brass, copper. Plating in gold, rose gold, rhodium, black rhodium. Stones: CZ, diamonds, synthetic and natural gemstones.",
    detail: "We source metals and stones from verified suppliers, providing material certifications on request. All silver is hallmarked 925 and gold plating thickness is documented.",
  },
  {
    icon: "●",
    title: "Transparent Communication",
    desc: "Dedicated account management, production photo updates, and clear timelines. You'll always know the status of your order — no surprises at delivery.",
    detail: "We provide production milestone photos via WhatsApp or email, and our team is responsive across US, European, and Asian business hours.",
  },
];

const process = [
  { step: "01", label: "Send Your Inquiry", desc: "Contact us with your design files, reference photos, or concept." },
  { step: "02", label: "Receive Free Quote", desc: "Within 48 hours you'll have a detailed price breakdown and timeline." },
  { step: "03", label: "Approve Sample", desc: "We produce a wax or silver prototype for your review and approval." },
  { step: "04", label: "Production Begins", desc: "Full production starts with quality checkpoints throughout." },
  { step: "05", label: "Quality Inspection", desc: "Every piece inspected before packaging and shipment." },
  { step: "06", label: "Worldwide Delivery", desc: "Shipped worldwide with full tracking and insurance." },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        label="Why P&N Jewelry"
        title="The Manufacturer Brands Trust"
        subtitle="40+ years · Low MOQ · Full-service OEM · Bangkok, Thailand"
      />

      {/* Key Advantages Grid */}
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Our Advantages</p>
              <h2
                className="font-display font-light text-charcoal-900"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Eight Reasons to Choose{" "}
                <span className="italic gold-text">P&N</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {advantages.map((item, i) => (
              <RevealOnScroll key={item.title} delay={(i % 2) * 120}>
                <div className="border border-charcoal-100 p-10 hover:border-gold-300 transition-all duration-400 group">
                  <div
                    className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="font-display text-2xl text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-charcoal-400 text-xs leading-relaxed border-t border-charcoal-100 pt-3 mt-3">
                    {item.detail}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "40+", label: "Years in Business" },
              { num: "50", label: "Minimum Order Qty" },
              { num: "100%", label: "In-house Production" },
              { num: "2", label: "International Markets" },
            ].map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div>
                  <div
                    className="font-display font-light mb-2"
                    style={{ color: "var(--gold)", fontSize: "3.5rem", fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[10px] tracking-widest text-charcoal-400 uppercase">
                    {s.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Overview */}
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">How It Works</p>
              <h2
                className="font-display font-light text-charcoal-900"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                From Inquiry to{" "}
                <span className="italic gold-text">Delivery</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <RevealOnScroll key={p.step} delay={i * 80}>
                <div className="flex gap-5 p-6 border border-charcoal-200 hover:border-gold-300 transition-colors duration-400 group">
                  <div
                    className="font-display text-4xl font-light flex-shrink-0"
                    style={{ color: "var(--gold)", opacity: 0.5, fontFamily: "var(--font-cormorant)" }}
                  >
                    {p.step}
                  </div>
                  <div>
                    <h3
                      className="font-display text-xl text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {p.label}
                    </h3>
                    <p className="text-charcoal-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Image Row */}
      <section className="py-0">
        <div className="grid grid-cols-3">
          {[
            { src: "/images/factory/production/production-1.jpg", alt: "Production" },
            { src: "/images/factory/polishing/polishing-1.jpg", alt: "Polishing" },
            { src: "/images/factory/setting/setting-1.jpg", alt: "Stone Setting" },
          ].map((img, i) => (
            <RevealOnScroll key={img.alt} delay={i * 100}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <SafeImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(13,13,13,0.4)" }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-white font-display text-lg"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {img.alt}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center" style={{ background: "var(--ink)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <p className="section-label mb-6">Get Started</p>
            <h2
              className="font-display font-light text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Ready to Start Your{" "}
              <span className="italic gold-text">OEM Project?</span>
            </h2>
            <p className="text-charcoal-400 text-sm mb-10 leading-relaxed">
              Contact us today for a free consultation and no-obligation quote.
              We respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold-filled text-xs px-12 py-4">
                Request Free Quote
              </Link>
              <a
                href="https://wa.me/66617898877"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-12 py-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
