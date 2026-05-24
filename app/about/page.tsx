import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import RevealOnScroll from "@/components/RevealOnScroll";
import PageHero from "@/components/PageHero";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "About Us | OEM Jewelry Manufacturer Bangkok Thailand",
  description:
    "P&N Jewelry Limited Partnership — OEM jewelry manufacturer in Bangkok, Thailand with 40+ years of experience. Full-service custom jewelry production for brands in USA, UK, Japan, Canada, Australia, Germany, Russia, and Europe. Low MOQ 30 pieces.",
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
  { year: "1984", title: "Founded in Bangkok", desc: "P&N Jewelry established as a family-run OEM jewelry workshop in Bangkok, Thailand." },
  { year: "1995", title: "Factory Expansion", desc: "Expanded our Bangkok jewelry factory to support full in-house casting, polishing, and stone setting." },
  { year: "2005", title: "USA & Europe Clients", desc: "Began long-term OEM partnerships with jewelry brands in the United States and Spain." },
  { year: "2015", title: "Japan & Asia Markets", desc: "Extended our reach to serve jewelry brands in Japan, Hong Kong, Singapore, and across Asia." },
  { year: "2024", title: "Global OEM Partner", desc: "Now serving brands in 10+ countries including USA, UK, Japan, Canada, Australia, Germany, Russia, and across Europe." },
];

const values = [
  {
    icon: "◈",
    title: "Precision Craftsmanship",
    desc: "Every piece produced in our Bangkok factory undergoes strict quality control — meeting the exacting standards of global jewelry brands.",
  },
  {
    icon: "◇",
    title: "Transparent Partnership",
    desc: "We communicate openly at every stage of production. No surprises — just reliable OEM manufacturing you can count on.",
  },
  {
    icon: "◉",
    title: "Full In-House Production",
    desc: "From CAD design and lost-wax casting to hand polishing, stone setting, and rhodium plating — all under one roof in our Bangkok facility.",
  },
  {
    icon: "◈",
    title: "Accessible MOQ",
    desc: "With a minimum order of just 30 pieces per design, we are the ideal jewelry manufacturing partner for boutique labels and growing brands alike.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About Us"
        title="40+ Years of OEM Jewelry Manufacturing"
        subtitle="Bangkok, Thailand"
      />

      {/* ─── COMPANY STORY ─── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-light text-black mb-6 leading-tight">
                  Thailand's Experienced OEM Jewelry Manufacturing Partner
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 1984, <strong>P&amp;N Jewelry Limited Partnership</strong> has grown from a small Bangkok workshop into one of Thailand's most trusted <strong>OEM jewelry manufacturers</strong> for international brands.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our <strong>Bangkok jewelry factory</strong> operates entirely in-house — no subcontracting, no compromises. Every stage of production, from the initial design and lost-wax casting through to hand polishing, stone setting, and final plating, takes place under our roof and under our supervision.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Over the past 40 years, we have built lasting partnerships with <strong>jewelry brands in the USA, UK, Japan, Spain, Canada, Australia, Germany, and Russia</strong>. Our clients choose us because we deliver consistent quality, maintain open communication, and understand the needs of international OEM buyers.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  With a <strong>low minimum order quantity of just 30 pieces per design</strong>, we make professional OEM manufacturing accessible to boutique brands, independent designers, and established labels alike — all from our base in Bangkok, Thailand.
                </p>
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                </Link>
              </div>

              <div>
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <SafeImage
                    src="/images/factory/production/production-1.jpg"
                    alt="P&N Jewelry OEM factory Bangkok Thailand manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── MILESTONES ─── */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                40 Years of Jewelry Manufacturing Excellence
              </h2>
            </div>
          </RevealOnScroll>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <RevealOnScroll key={m.year} delay={i * 80}>
                  <div className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:direction-rtl"}`}>
                    <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                      <div className="text-gold text-4xl font-light mb-2">{m.year}</div>
                      <h3 className="text-white text-xl font-light mb-2">{m.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gold" />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
                What Makes Us a Trusted OEM Partner
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Brands from the USA, UK, Japan, Canada, Australia, Germany, and Russia return to us year after year because of the values we uphold at every stage of production.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 80}>
                <div className="border border-gray-200 p-8 hover:border-gold/40 transition-colors">
                  <div className="text-gold text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-black font-light mb-3 tracking-wide">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "/images/factory/polishing/polishing-1.jpg",
                  "/images/factory/setting/setting-1.jpg",
                  "/images/factory/production/production-2.jpg",
                  "/images/factory/polishing/polishing-2.jpg",
                ].map((src, j) => (
                  <div key={j} className="aspect-square overflow-hidden bg-gray-200">
                    <SafeImage
                      src={src}
                      alt="P&N Jewelry manufacturing expertise Bangkok Thailand"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Manufacturing Expertise</p>
                <h2 className="text-3xl font-light text-black mb-6 leading-tight">
                  Full-Service Custom Jewelry Production in Bangkok
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Materials", value: "Sterling Silver 925, Gold 9k–18k, Rose Gold, Brass" },
                    { label: "Setting", value: "Prong, Bezel, Pavé, Channel, Flush Setting" },
                    { label: "Stones", value: "CZ, Diamonds, Natural Gemstones" },
                    { label: "Plating", value: "Gold, Rose Gold, Rhodium, Black Rhodium" },
                    { label: "MOQ", value: "30 pieces per design (negotiable for larger collections)" },
                    { label: "Sample Time", value: "7–14 business days" },
                    { label: "Production", value: "30–45 business days" },
                    { label: "Shipping", value: "Worldwide via DHL & FedEx" },
                  ].map((item) => (
                    <div key={item.label} className="flex border-b border-gray-100 pb-4">
                      <span className="text-gold font-light w-32 shrink-0 text-sm">{item.label}</span>
                      <span className="text-gray-600 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <VideoSection
        youtubeId="cozkxxdlhto"
        title="Inside Our Bangkok Jewelry Factory"
        subtitle="A full tour of our OEM manufacturing facility — the same process trusted by jewelry brands in the USA, UK, Japan, Canada, Australia, Germany, and Russia for over 40 years."
      />

      {/* ─── CTA ─── */}
      <section className="section-padding bg-white">
        <div className="container-luxury text-center">
          <RevealOnScroll>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Work With Us</p>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
              Partner With Thailand's Trusted Jewelry Manufacturer
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need <strong>custom OEM jewelry for your USA or UK brand</strong>, a <strong>private label collection for the Japanese or Russian market</strong>, or a reliable manufacturer for your European label — we are ready to bring your vision to life. <strong>MOQ from 30 pieces.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Free Quote
              </Link>
              <Link href="/services" className="btn-outline">
                Our Full Process
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
