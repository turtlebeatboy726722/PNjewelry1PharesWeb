import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact Us — Request an OEM Jewelry Quote",
  description:
    "Contact P&N Jewelry for OEM manufacturing inquiries. Email sale@pnjewelrymfg.com or WhatsApp us. Free quote within 48 hours.",
};

const contactInfo = [
  {
    icon: "✉",
    label: "Email",
    value: "sale@pnjewelrymfg.com",
    href: "mailto:sale@pnjewelrymfg.com",
  },
  {
    icon: "◎",
    label: "WhatsApp — Line 1",
    value: "+66 61 789 8877",
    href: "https://wa.me/66617898877",
  },
  {
    icon: "◎",
    label: "WhatsApp — Line 2",
    value: "+66 84 459 8284",
    href: "https://wa.me/66844598284",
  },
  {
    icon: "◇",
    label: "Location",
    value: "Bangkok, Thailand",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Request a Quote"
        subtitle="We respond to all inquiries within 24–48 hours"
      />

      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <p className="section-label mb-4">Contact Information</p>
                <h2
                  className="font-display font-light text-charcoal-900 mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    lineHeight: 1.15,
                  }}
                >
                  Let's Discuss Your{" "}
                  <span className="italic gold-text">Project</span>
                </h2>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-10">
                  Whether you're launching a new jewelry brand or scaling an
                  existing collection, we're here to help. Send us your designs,
                  references, or concept — and we'll take it from there.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-4 items-start py-4 border-b border-charcoal-100"
                    >
                      <span
                        className="flex-shrink-0 text-lg mt-0.5"
                        style={{ color: "var(--gold)" }}
                      >
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-[10px] tracking-widest text-charcoal-400 uppercase mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-charcoal-800 text-sm hover:text-gold-500 transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-charcoal-800 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <a
                    href="https://wa.me/66617898877"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-filled text-xs px-6 py-3 text-center"
                  >
                    WhatsApp Line 1
                  </a>
                  <a
                    href="https://wa.me/66844598284"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs px-6 py-3 text-center"
                  >
                    WhatsApp Line 2
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <RevealOnScroll delay={150}>
                <ContactForm />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="section-label mb-3">Helpful Tips</p>
              <h3
                className="font-display font-light text-charcoal-900"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                What to Include in Your Inquiry
              </h3>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "◈", title: "Design Files", desc: "Sketches, photos, or CAD files of your desired jewelry piece." },
              { icon: "◇", title: "Quantity Needed", desc: "Your target order quantity per style. MOQ is 50 pieces." },
              { icon: "◉", title: "Material Preference", desc: "Silver, gold, plating preference, and any stone requirements." },
              { icon: "◎", title: "Timeline", desc: "When you need the order. We'll confirm lead times promptly." },
            ].map((tip, i) => (
              <RevealOnScroll key={tip.title} delay={i * 80}>
                <div className="text-center p-6">
                  <div
                    className="text-2xl mb-4"
                    style={{ color: "var(--gold)" }}
                  >
                    {tip.icon}
                  </div>
                  <h4
                    className="font-display text-lg text-charcoal-900 mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {tip.title}
                  </h4>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{tip.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
