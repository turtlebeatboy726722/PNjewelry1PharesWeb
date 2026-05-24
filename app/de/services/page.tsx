import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "OEM Schmuck Services — Design bis Lieferung",
  description: "Vollständige OEM Schmuckfertigung: Design, Guss, Polieren, Steinfassung und Vergoldung. P&N Jewelry erledigt jeden Schritt in unserer Bangkoker Fabrik.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/services" },
};

const process = [
  { step: "01", title: "Design & CAD", desc: "Von der Skizze zum präzisen 3D-CAD-Modell.", features: ["3D CAD Modellierung", "Prototypen", "Designberatung", "Wachsmodell-Freigabe"] },
  { step: "02", title: "Guss", desc: "Wachsausschmelzverfahren mit präziser Legierungskontrolle.", features: ["Silber 925 & Gold", "Wachsausschmelzen", "Legierungskontrolle", "QC nach dem Guss"] },
  { step: "03", title: "Polieren", desc: "Spiegelglanz oder Matt — unsere Polierteam liefert die exakte Oberflächengüte.", features: ["Hochglanzpolitur", "Matt & Gebürstet", "Handfinish", "Komplexe Geometrien"] },
  { step: "04", title: "Steinfassung", desc: "Krappen-, Zarge-, Pavé-, Kanalfassung. Diamanten, Zirkonia, Edelsteine.", features: ["Krappen & Zarge", "Pavé-Fassung", "Zirkonia & Diamant", "Edelsteine"] },
  { step: "05", title: "Vergoldung", desc: "18K Gold, Rosegold, Rhodium, Schwarzrhodium. Langlebige Beschichtung.", features: ["18K Vergoldung", "Rosegold", "Rhodium", "Schwarzrhodium"] },
];

const factorySections = [
  { dir: "factory/production", title: "Produktionshalle", subtitle: "Modernste Fertigung", desc: "Unsere Produktionshalle ist mit modernen Wachsinjektions-, Guss- und Montagestationen ausgestattet.", images: ["production-1.jpg", "production-2.jpg", "production-3.jpg"] },
  { dir: "factory/polishing", title: "Polierbereich", subtitle: "Handgefertigte Perfektion", desc: "Jedes Stück durchläuft mehrere Polierstufen — von der Grobpolitur bis zur feinen Handpolitur.", images: ["polishing-1.jpg", "polishing-2.jpg", "polishing-3.jpg"] },
  { dir: "factory/setting", title: "Steinfassung", subtitle: "Meisterhafte Handarbeit", desc: "Unsere Meister-Setter verwenden Vergrößerung und Spezialwerkzeuge, um jeden Stein perfekt zu fassen.", images: ["setting-1.jpg", "setting-2.jpg", "setting-3.jpg"] },
];

export default function DeServicesPage() {
  return (
    <>
      <PageHero label="Services" title="Vollständige OEM-Fertigung" subtitle="Design · Guss · Polieren · Steinfassung · Vergoldung — alles unter einem Dach" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Unser Prozess</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Fünf Schritte zur <span className="italic gold-text">Perfektion</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-0">
            {process.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 60}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-charcoal-100">
                  <div className="lg:col-span-1">
                    <div className="font-display text-5xl font-light" style={{ color: "var(--gold)", opacity: 0.4, fontFamily: "var(--font-cormorant)" }}>{step.step}</div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-3xl text-charcoal-900 mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>{step.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="lg:col-span-6 lg:pl-16">
                    <div className="grid grid-cols-2 gap-3">
                      {step.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-charcoal-600 py-2 border-b border-charcoal-100">
                          <span style={{ color: "var(--gold)" }}>◇</span>{f}
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
      {factorySections.map((section, si) => (
        <section key={section.title} className="py-28" style={{ background: si % 2 === 0 ? "var(--ink)" : "var(--cream)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="section-label mb-3">{section.subtitle}</p>
                <h2 className={`font-display font-light ${si % 2 === 0 ? "text-white" : "text-charcoal-900"}`} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  <span className="italic gold-text">{section.title}</span>
                </h2>
                <p className={`mt-4 text-sm leading-relaxed max-w-2xl ${si % 2 === 0 ? "text-charcoal-400" : "text-charcoal-500"}`}>{section.desc}</p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <RevealOnScroll key={img} delay={i * 100}>
                  <div className="group overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <div className="relative w-full h-full overflow-hidden">
                      <SafeImage src={`/images/${section.dir}/${img}`} alt={`${section.title} ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="py-24 text-center" style={{ background: "var(--warm-white)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">Produktion starten</p>
          <h2 className="font-display font-light text-charcoal-900 mb-8" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Bereit Ihre <span className="italic gold-text">nächste Kollektion zu fertigen?</span>
          </h2>
          <Link href="/de/contact" className="btn-gold-filled text-xs px-12 py-4">Kostenloses Angebot anfordern</Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
