import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Request a Quote — P&N Jewelry Manufacturing",
  description:
    "Request a free quote or sample from P&N Jewelry Manufacturing. Thailand's premier OEM jewelry manufacturer with 40+ years of experience.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="py-32 text-center"
        style={{ background: "var(--ink)" }}
      >
        <RevealOnScroll>
          <p className="section-label mb-6" style={{ color: "var(--gold)" }}>
            Work With Us
          </p>
          <h1
            className="font-display font-light text-white mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              lineHeight: 1.1,
            }}
          >
            Request a{" "}
            <span className="italic gold-text">Quote or Sample</span>
          </h1>
          <p className="text-charcoal-400 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Tell us about your project. We respond within 24 hours.
          </p>
        </RevealOnScroll>
      </section>

      {/* ─── FORM ─── */}
      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <LeadForm />
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── CONTACT INFO ─── */}
      <section className="py-16 border-t border-charcoal-100" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <RevealOnScroll delay={0}>
              <div>
                <p className="section-label mb-2">Email</p>
                <a
                  href="mailto:sale@pnjewelrymfg.com"
                  className="text-sm text-charcoal-600 hover:text-gold-600 transition-colors"
                  style={{ color: "var(--gold)" }}
                >
                  sale@pnjewelrymfg.com
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div>
                <p className="section-label mb-2">WhatsApp</p>
                <a
                  href="https://wa.me/66617898877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: "var(--gold)" }}
                >
                  +66 61 789 8877
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div>
                <p className="section-label mb-2">Location</p>
                <p className="text-sm text-charcoal-500">Bangkok, Thailand</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
