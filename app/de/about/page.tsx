import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Über uns — 40+ Jahre OEM Schmuckherstellung",
  description: "Die Geschichte von P&N Jewelry. Über 40 Jahre OEM Schmuckherstellung in Bangkok, Thailand. Expertenhandwerk für globale Marken.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/about" },
};

const values = [
  { icon: "◈", title: "Präzision", desc: "Jeder Millimeter zählt. Unsere Handwerker halten Toleranzen ein, die Industriestandards übertreffen." },
  { icon: "◇", title: "Integrität", desc: "Transparente Preisgestaltung, ehrliche Zeitpläne und gleichbleibende Qualität." },
  { icon: "◉", title: "Partnerschaft", desc: "Wir behandeln die Marke jedes Kunden wie unsere eigene." },
  { icon: "◎", title: "Innovation", desc: "Kombination aus thailändischem Goldschmiedehandwerk und moderner CAD/CAM-Technologie." },
];

export default function DeAboutPage() {
  return (
    <>
      <PageHero label="Über uns" title="Vier Jahrzehnte Handwerkskunst" subtitle="Thailands vertrauenswürdiger OEM-Schmuckfertigungspartner seit den 1980er Jahren" />
      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll>
              <p className="section-label mb-4">Wer wir sind</p>
              <h2 className="font-display font-light text-charcoal-900 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Aufgebaut auf Können, <span className="italic gold-text">getrieben von Exzellenz</span>
              </h2>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-4">P&N Jewelry wurde in Bangkok gegründet und hat sich von einer kleinen Handwerkswerkstatt zu einem der angesehensten OEM-Schmuckhersteller der Region entwickelt.</p>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-8">Von der ersten Designberatung bis zur abschließenden Qualitätskontrolle spiegelt jedes Stück unser unerschütterliches Engagement für Exzellenz wider.</p>
              <div className="flex gap-4">
                <Link href="/de/contact" className="btn-gold-filled text-xs px-8 py-3">Kontakt aufnehmen</Link>
                <Link href="/de/services" className="btn-gold text-xs px-8 py-3">Unsere Services</Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <SafeImage src="/images/factory/production/production-1.jpg" alt="Produktionshalle" fill className="object-cover" />
                </div>
                <div className="relative overflow-hidden mt-8" style={{ aspectRatio: "3/4" }}>
                  <SafeImage src="/images/factory/setting/setting-1.jpg" alt="Steinfassung" fill className="object-cover" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="py-28" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Was uns antreibt</p>
              <h2 className="font-display font-light text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Unsere <span className="italic gold-text">Kernwerte</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl mb-6" style={{ color: "var(--gold)" }}>{v.icon}</div>
                  <h3 className="text-white font-display text-xl mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{v.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <VideoSection youtubeId="cozkxxdlhto" label="Fabrikbesichtigung" title="Unsere Fertigung" subtitle="hautnah erleben" description="Erleben Sie unseren vollständigen Produktionsprozess — vom Design und Guss bis zur Politur, Steinfassung und abschließenden Qualitätskontrolle." dark={false} />
      <section className="py-24 text-center" style={{ background: "var(--warm-white)" }}>
        <RevealOnScroll>
          <p className="section-label mb-6">Projekt starten</p>
          <h2 className="font-display font-light text-charcoal-900 mb-8" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Lassen Sie uns gemeinsam etwas <span className="italic gold-text">Schönes schaffen</span>
          </h2>
          <Link href="/de/contact" className="btn-gold-filled text-xs px-12 py-4">Heute kontaktieren</Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
