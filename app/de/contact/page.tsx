import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Kontakt — OEM Schmuck Angebot anfordern",
  description: "Kontaktieren Sie P&N Jewelry für OEM-Fertigungsanfragen. E-Mail: sale@pnjewelrymfg.com oder WhatsApp. Kostenloser Kostenvoranschlag innerhalb von 48 Stunden.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/contact" },
};

const contactInfo = [
  { icon: "✉", label: "E-Mail", value: "sale@pnjewelrymfg.com", href: "mailto:sale@pnjewelrymfg.com" },
  { icon: "◎", label: "WhatsApp — Leitung 1", value: "+66 61 789 8877", href: "https://wa.me/66617898877" },
  { icon: "◎", label: "WhatsApp — Leitung 2", value: "+66 84 459 8284", href: "https://wa.me/66844598284" },
  { icon: "◇", label: "Standort", value: "Bangkok, Thailand", href: null },
];

export default function DeContactPage() {
  return (
    <>
      <PageHero label="Kontakt" title="Angebot anfordern" subtitle="Wir antworten auf alle Anfragen innerhalb von 24-48 Stunden" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <p className="section-label mb-4">Kontaktinformationen</p>
                <h2 className="font-display font-light text-charcoal-900 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                  Lassen Sie uns über Ihr <span className="italic gold-text">Projekt sprechen</span>
                </h2>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-10">Ob Sie eine neue Schmuckmarke starten oder eine bestehende Kollektion erweitern — wir sind für Sie da. Senden Sie uns Ihre Designs oder Konzepte.</p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4 items-start py-4 border-b border-charcoal-100">
                      <span className="flex-shrink-0 text-lg mt-0.5" style={{ color: "var(--gold)" }}>{item.icon}</span>
                      <div>
                        <div className="text-[10px] tracking-widest text-charcoal-400 uppercase mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-charcoal-800 text-sm hover:text-gold-500 transition-colors duration-300">{item.value}</a>
                        ) : (
                          <span className="text-charcoal-800 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col gap-3">
                  <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold-filled text-xs px-6 py-3 text-center">WhatsApp Leitung 1</a>
                  <a href="https://wa.me/66844598284" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-6 py-3 text-center">WhatsApp Leitung 2</a>
                </div>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-3">
              <RevealOnScroll delay={150}>
                <ContactForm />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
