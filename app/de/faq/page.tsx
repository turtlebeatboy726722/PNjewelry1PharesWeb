import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "FAQ — Häufig gestellte Fragen",
  description: "Häufig gestellte Fragen zur OEM-Schmuckherstellung bei P&N Jewelry. MOQ, Lieferzeiten, Materialien, individuelle Designs, Versand und mehr.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/faq" },
};

const faqs = [
  {
    category: "Bestellung",
    items: [
      { q: "Was ist Ihre Mindestbestellmenge (MOQ)?", a: "Unsere MOQ beträgt 30 Stück pro Design. Je nach Designkomplexität und Materialien ist Verhandlung möglich." },
      { q: "Akzeptieren Sie individuelle Designs?", a: "Ja. Senden Sie uns Ihre Skizze, ein Referenzfoto oder eine CAD-Datei und unser Designteam setzt Ihre Vision um." },
      { q: "Kann ich vor der Serienproduktion ein Muster erhalten?", a: "Ja. Wir empfehlen dringend, ein physisches Muster zu bestätigen, bevor die Serienproduktion beginnt. Lieferzeit: 7-14 Werktage." },
      { q: "Welche Zahlungsbedingungen bieten Sie an?", a: "Standard: 50% Anzahlung bei Produktionsbeginn, 50% Restbetrag vor Versand. Wir akzeptieren Banküberweisung (T/T)." },
    ],
  },
  {
    category: "Produktion",
    items: [
      { q: "Wie lange dauert die Lieferzeit?", a: "Musterproduktion 7-14 Werktage. Serienproduktion 30-45 Werktage je nach Menge und Designkomplexität." },
      { q: "Mit welchen Materialien arbeiten Sie?", a: "Sterling Silber 925, Gold 9k-18k, Messing und Kupfer. Vergoldung: 18K Gold, Rosegold, Rhodium, Schwarzrhodium." },
      { q: "Welche Steinfassungsoptionen gibt es?", a: "Krappen, Zarge, Pavé, Kanal und Mikrofassung. Wir arbeiten mit Zirkonia, Diamanten sowie natürlichen und synthetischen Edelsteinen." },
      { q: "Bieten Sie CAD-Designservices an?", a: "Ja. Unser internes Designteam erstellt präzise 3D CAD Modelle aus Ihrer Skizze oder Referenzbildern." },
    ],
  },
  {
    category: "Versand & Logistik",
    items: [
      { q: "Liefern Sie nach Deutschland und Europa?", a: "Ja. Wir versenden weltweit per DHL, FedEx und EMS nach Deutschland und ganz Europa. Alle Sendungen sind versichert und nachverfolgbar." },
      { q: "Stellen Sie Exportdokumente bereit?", a: "Ja. Wir stellen Handelsrechnung, Packliste, Ursprungszeugnis und auf Anfrage Materialzertifikate aus." },
    ],
  },
];

export default function DeFAQPage() {
  return (
    <>
      <PageHero label="FAQ" title="Häufig gestellte Fragen" subtitle="Alles, was Sie über die Zusammenarbeit mit P&N Jewelry wissen müssen" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {faqs.map((section, si) => (
            <RevealOnScroll key={section.category} delay={si * 80}>
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span style={{ color: "var(--gold)" }}>◇</span>
                  <h2 className="font-display text-2xl text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)" }}>{section.category}</h2>
                  <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.2 }} />
                </div>
                <div className="space-y-0">
                  {section.items.map((item, i) => (
                    <details key={i} className="group border-b border-charcoal-100 py-5 cursor-pointer">
                      <summary className="flex items-start justify-between gap-4 list-none">
                        <h3 className="font-display text-lg text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300 pr-4" style={{ fontFamily: "var(--font-cormorant)" }}>{item.q}</h3>
                        <span className="flex-shrink-0 text-xl transition-transform duration-300 group-open:rotate-45 mt-0.5" style={{ color: "var(--gold)" }}>+</span>
                      </summary>
                      <p className="text-charcoal-500 text-sm leading-relaxed mt-4 pr-8">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
          <RevealOnScroll delay={200}>
            <div className="text-center p-12 border border-charcoal-200" style={{ background: "var(--cream)" }}>
              <span className="text-3xl block mb-4" style={{ color: "var(--gold)" }}>◈</span>
              <h3 className="font-display text-2xl text-charcoal-900 mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>Noch Fragen?</h3>
              <p className="text-charcoal-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">Unser Team beantwortet gerne alle Fragen zu Ihrem spezifischen Projekt.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/de/contact" className="btn-gold-filled text-xs px-10 py-3">Anfrage senden</Link>
                <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-10 py-3">WhatsApp Kontakt</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
