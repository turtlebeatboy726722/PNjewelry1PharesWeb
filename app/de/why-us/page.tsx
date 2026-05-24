import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Warum P&N Jewelry — 40 Jahre OEM Schmuckherstellung",
  description: "Entdecken Sie, warum globale Marken P&N Jewelry wählen: 40+ Jahre Erfahrung, niedrige MOQ 30 Stück, Vollservice OEM, vertraut von US & Spanien Marken.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/why-us" },
};

const advantages = [
  { icon: "◈", title: "40+ Jahre Expertise", desc: "Jahrzehntelange OEM-Fertigungserfahrung für internationale Schmuckmarken.", detail: "Gegründet in den 1980ern hat P&N Jewelry jeden Wandel im globalen Schmuckmarkt mitgemacht und dabei stets die gleichen Qualitätsstandards gehalten." },
  { icon: "◇", title: "Niedrige MOQ — ab 30 Stück", desc: "Starten Sie mit nur 30 Stück pro Design. Ideal für neue Marken und Kollektionen.", detail: "Unsere niedrige MOQ-Politik ermöglicht es Ihnen, neue Designs zu testen, limitierte Editionen zu lancieren oder eine neue Marke ohne großes finanzielles Risiko aufzubauen." },
  { icon: "◉", title: "Vollservice unter einem Dach", desc: "Design, Guss, Polieren, Steinfassung, Vergoldung, QC — alles inhouse.", detail: "Indem wir alles inhouse halten, eliminieren wir Übergabefehler, reduzieren Lieferzeiten und halten konsistente Qualitätsstandards ein." },
  { icon: "◎", title: "Globale Markenerfahrung", desc: "Vertraut von Marken in den USA, Spanien und ganz Europa.", detail: "Unsere Erfahrung mit internationalen Kunden bedeutet, dass wir Compliance-Anforderungen und die Erwartungen anspruchsvoller Käufer bestens kennen." },
  { icon: "◆", title: "Thailändische Meisterhandwerker", desc: "Thailand hat eine jahrhundertealte Tradition der Metallbearbeitung.", detail: "Jeder Handwerker in unserer Werkstatt ist auf eine bestimmte Produktionsphase spezialisiert und entwickelt durch fokussierte Wiederholung Meisterschaft." },
  { icon: "◐", title: "CAD Design Support", desc: "Aus Skizze oder Foto erstellen wir professionelle 3D CAD Modelle.", detail: "CAD-Freigabe eliminiert teure Produktionsfehler. Auf Wunsch erstellen wir physische Wachsprototypen." },
  { icon: "○", title: "Flexible Materialien", desc: "Silber 925, Gold 9k-18k, Messing. Vergoldung in Gold, Rosegold, Rhodium.", detail: "Wir beziehen Metalle und Steine von zertifizierten Lieferanten und stellen auf Anfrage Materialzertifikate aus." },
  { icon: "●", title: "Transparente Kommunikation", desc: "Dediziertes Account Management, Produktionsfotos und klare Zeitpläne.", detail: "Wir liefern Produktions-Meilenstein-Fotos via WhatsApp oder E-Mail und reagieren auf alle Zeitzonen." },
];

export default function DeWhyUsPage() {
  return (
    <>
      <PageHero label="Warum P&N Jewelry" title="Der Partner dem Marken vertrauen" subtitle="40+ Jahre · Niedrige MOQ · Vollservice OEM · Bangkok, Thailand" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Unsere Vorteile</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Acht Gründe für <span className="italic gold-text">P&N</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {advantages.map((item, i) => (
              <RevealOnScroll key={item.title} delay={(i % 2) * 120}>
                <div className="border border-charcoal-100 p-10 hover:border-gold-300 transition-all duration-400">
                  <div className="text-3xl mb-5" style={{ color: "var(--gold)" }}>{item.icon}</div>
                  <h3 className="font-display text-2xl text-charcoal-900 mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-charcoal-400 text-xs leading-relaxed border-t border-charcoal-100 pt-3">{item.detail}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 text-center" style={{ background: "var(--ink)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <p className="section-label mb-6">Jetzt starten</p>
            <h2 className="font-display font-light text-white mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Bereit Ihr <span className="italic gold-text">OEM-Projekt zu starten?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/de/contact" className="btn-gold-filled text-xs px-12 py-4">Kostenloses Angebot</Link>
              <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-12 py-4">WhatsApp Kontakt</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
