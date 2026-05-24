import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "About Us — 40 Years of OEM Jewelry Manufacturing",
  description:
    "Learn about P&N Jewelry's 40+ year legacy as a leading OEM jewelry manufacturer in Bangkok, Thailand. Expert craftsmanship for global brands in USA, UK, Japan, Canada, Australia, Germany, and Russia.",
  keywords: [
    "OEM jewelry manufacturer Thailand",
    "jewelry factory Bangkok",
    "custom jewelry manufacturer Bangkok",
    "silver jewelry manufacturer Thailand",
    "private label jewelry Thailand",
    "jewelry manufacturer for Japanese brands",
    "OEM jewelry manufacturer Canada",
    "custom jewelry Australia",
    "Schmuck Hersteller Thailand",
    "jewelry factory Germany",
    "jewelry manufacturer UK",
    "OEM jewelry manufacturer United Kingdom",
    "custom jewelry Russia",
    "ювелирный производитель Таиланд",
    "925 silver jewelry manufacturer Bangkok",
    "gold jewelry manufacturer Thailand",
    "jewelry OEM factory Thailand small order",
    "low MOQ jewelry manufacturer",
  ],
};

const milestones = [
  { year: "1980s", title: "Founded in Bangkok", desc: "Established as a small family workshop specializing in sterling silver jewelry for local markets." },
  { year: "1990s", title: "OEM Expansion", desc: "Began serving international clients, developing full OEM capabilities for European and American jewelry brands." },
  { year: "2000s", title: "Factory Modernization", desc: "Invested in CAD design, precision casting equipment, and expanded stone-setting workshops." },
  { year: "2010s", title: "Global Partnerships", desc: "Established long-term partnerships with brands in USA, UK, Japan, Spain, Germany, and across Europe." },
  { year: "Today", title: "Full-Service OEM Leader", desc: "Complete end-to-end jewelry manufacturing for global brands in USA, UK, Japan, Canada, Australia, Germany, Russia, and beyond — with 30-piece minimum order quantities." },
];

const values = [
  { icon: "◈", title: "Precision", desc: "Every millimeter matters. Our craftsmen maintain tolerances that exceed industry standards." },
  { icon: "◇", title: "Integrity", desc: "Transparent pricing, honest timelines, and consistent quality you can rely on order after order." },
  { icon: "◉", title: "Partnership", desc: "We treat every client's brand as our own. Your success drives our commitment to excellence." },
  { icon: "◎", title: "Innovation", desc: "Combining Thai goldsmithing heritage with modern CAD/CAM technology and contemporary design." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Four Decades of Craftsmanship"
        subtitle="Thailand's trusted OEM jewelry manufacturing partner since the 1980s"
      />

      {/* Intro */}
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll>
              <p className="section-label mb-4">Who We Are</p>
              <h2
                className="font-display font-light text-charcoal-900 mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.15 }}
              >
                Built on Skill,{" "}
                <span className="italic gold-text">Driven by Excellence</span>
              </h2>
              <div className="space-y-4 text-charcoal-500 text-sm leading-relaxed">
                <p>
                  P&amp;N Jewelry Limited Partnership was founded in Bangkok, Thailand,
                  growing from a small artisan workshop into one of the region's most
                  respected <strong>OEM jewelry manufacturers</strong>. Over four decades, we have
                  refined every aspect of our production process while preserving the
                  human touch that defines true craftsmanship.
                </p>
                <p>
                  Our facility employs skilled artisans who have honed their expertise
                  across generations of Thai jewelry tradition. We pair this heritage
                  with modern CAD design software, precision casting equipment, and
                  rigorous quality control systems.
                </p>
                <p>
                  Today, our <strong>Bangkok jewelry factory</strong> serves as a trusted manufacturing partner for
                  jewelry brands in the <strong>United States, UK, Japan, Canada, Australia, Germany, Russia</strong>, and beyond —
                  handling everything from initial design through final delivery. With a minimum order of just <strong>30 pieces per design</strong>, we make professional OEM manufacturing accessible to brands of all sizes.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <Link href="/contact" className="btn-gold-filled text-xs px-8 py-3">Work With Us</Link>
                <Link href="/services" className="btn-gold text-xs px-8 py-3">Our Services</Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <SafeImage src="/images/factory/production/production-1.jpg" alt="Factory production floor" fill className="object-cover" />
                </div>
                <div className="relative overflow-hidden mt-8" style={{ aspectRatio: "3/4" }}>
                  <SafeImage src="/images/factory/setting/setting-1.jpg" alt="Stone setting workshop" fill className="object-cover" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">What Drives Us</p>
              <h2
                className="font-display font-light text-white"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Our Core <span className="italic gold-text">Values</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="text-4xl mb-6 inline-block" style={{ color: "var(--gold)" }}>{v.icon}</div>
                  <h3 className="text-white font-display text-xl mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{v.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoSection
        label="Factory Tour"
        title="Inside Our"
        subtitle="Manufacturing Process"
        description="Watch our complete production process — from design and casting to polishing, stone setting, and final quality inspection. The same process trusted by jewelry brands in the USA, UK, Japan, Canada, Australia, Germany, and Russia for over 40 years."
        youtubeId="cozkxxdlhto"
      />

      {/* Timeline */}
      <section className="py-28" style={{ background: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <p className="section-label mb-4">Our Journey</p>
              <h2
                className="font-display font-light text-white"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                A Timeline of <span className="italic gold-text">Excellence</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)", opacity: 0.4 }} />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <RevealOnScroll key={m.year} delay={i * 100}>
                  <div className={`flex gap-8 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""} pl-16 md:pl-0`}>
                      <div className="font-display text-4xl font-light mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>{m.year}</div>
                      <h3 className="text-white font-display text-xl mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>{m.title}</h3>
                      <p className="text-charcoal-400 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "var(--gold)", background: "var(--ink)" }} />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "var(--warm-white)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">Start a Project</p>
          <h2
            className="font-display font-light text-charcoal-900 mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let's Build Something <span className="italic gold-text">Beautiful Together</span>
          </h2>
          <p className="text-charcoal-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need <strong>custom OEM jewelry for your USA or UK brand</strong>, a <strong>private label collection for the Japanese or Russian market</strong>, or a reliable manufacturer for your European label — we are ready. <strong>MOQ from 30 pieces.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold-filled text-xs px-12 py-4">Contact Us Today</Link>
            <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-12 py-4">WhatsApp Us</a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
