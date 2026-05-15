import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Frequently asked questions about P&N Jewelry OEM manufacturing. MOQ, lead time, materials, custom designs, shipping and more.",
};

const faqs = [
  {
    category: "Ordering",
    items: [
      {
        q: "What is your Minimum Order Quantity (MOQ)?",
        a: "Our MOQ is 30 pieces per design. We offer low MOQ to support boutique brands and new collections. MOQ is negotiable depending on the design complexity and materials.",
      },
      {
        q: "Do you accept custom designs?",
        a: "Yes, absolutely. Send us your sketch, photo reference, or CAD file and our design team will work with you to bring your vision to life. We support full custom OEM and private label production.",
      },
      {
        q: "Can I get a sample before full production?",
        a: "Yes. We strongly recommend approving a physical sample before full production begins. Sample lead time is 7–14 business days.",
      },
      {
        q: "What payment terms do you accept?",
        a: "Standard terms are 50% deposit to start production, and 50% balance before shipment. We accept bank wire transfer (T/T).",
      },
    ],
  },
  {
    category: "Production",
    items: [
      {
        q: "What is the production lead time?",
        a: "Sample production takes 7–14 business days. Full production typically takes 30–45 business days depending on quantity, design complexity, and stone setting requirements.",
      },
      {
        q: "What materials do you work with?",
        a: "We work with Sterling Silver 925, Gold 9k–18k, Brass, and Copper. Plating options include 18k Gold, Rose Gold, Yellow Gold, Rhodium, and Black Rhodium.",
      },
      {
        q: "What stone setting options are available?",
        a: "We offer Prong, Bezel, Pavé, Channel, and Micro-setting. We work with Cubic Zirconia (CZ), Diamonds, and natural or synthetic Gemstones.",
      },
      {
        q: "Do you offer CAD design services?",
        a: "Yes. Our in-house design team creates precise 3D CAD models from your sketch or reference image. You review and approve the CAD before we produce a physical prototype.",
      },
      {
        q: "What is your quality control process?",
        a: "Every piece goes through multiple QC checkpoints — post-casting, post-polishing, post-setting, and final inspection before packaging. We provide QC photos upon request.",
      },
    ],
  },
  {
    category: "Shipping & Logistics",
    items: [
      {
        q: "Do you ship worldwide?",
        a: "Yes. We ship to the USA, Europe, Asia, and worldwide via DHL, FedEx, and EMS. All shipments include tracking and insurance.",
      },
      {
        q: "Do you provide export documents?",
        a: "Yes. We provide Commercial Invoice, Packing List, Certificate of Origin, and material certifications upon request.",
      },
    ],
  },
  {
    category: "Branding & Packaging",
    items: [
      {
        q: "Can you add our brand logo to the jewelry?",
        a: "Yes. We offer laser engraving and stamping of your brand logo, hallmarks, or custom text on the jewelry pieces.",
      },
      {
        q: "Do you offer custom packaging?",
        a: "Yes. We can arrange custom jewelry boxes, pouches, and tags with your brand logo. MOQ for custom packaging applies separately.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with P&N Jewelry"
      />

      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">

          {faqs.map((section, si) => (
            <RevealOnScroll key={section.category} delay={si * 80}>
              <div className="mb-16">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span style={{ color: "var(--gold)" }}>◇</span>
                  <h2
                    className="font-display text-2xl text-charcoal-900"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {section.category}
                  </h2>
                  <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.2 }} />
                </div>

                {/* Questions */}
                <div className="space-y-0">
                  {section.items.map((item, i) => (
                    <FAQItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* Still have questions */}
          <RevealOnScroll delay={200}>
            <div
              className="text-center p-12 border border-charcoal-200 mt-8"
              style={{ background: "var(--cream)" }}
            >
              <span className="text-3xl block mb-4" style={{ color: "var(--gold)" }}>◈</span>
              <h3
                className="font-display text-2xl text-charcoal-900 mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Still Have Questions?
              </h3>
              <p className="text-charcoal-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                Our team is ready to answer any questions about your specific project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-gold-filled text-xs px-10 py-3">
                  Send an Inquiry
                </Link>
                <a
                  href="https://wa.me/66617898877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs px-10 py-3"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-charcoal-100 py-5 cursor-pointer">
      <summary className="flex items-start justify-between gap-4 list-none">
        <h3
          className="font-display text-lg text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300 pr-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {q}
        </h3>
        <span
          className="flex-shrink-0 text-xl transition-transform duration-300 group-open:rotate-45 mt-0.5"
          style={{ color: "var(--gold)" }}
        >
          +
        </span>
      </summary>
      <p className="text-charcoal-500 text-sm leading-relaxed mt-4 pr-8">
        {a}
      </p>
    </details>
  );
}
