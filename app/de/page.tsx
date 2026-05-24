import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "P&N Jewelry | OEM Schmuckhersteller Thailand — 40+ Jahre Erfahrung",
  description: "OEM Schmuckhersteller in Bangkok, Thailand. Über 40 Jahre Erfahrung. Mindestbestellmenge ab 30 Stück. Ringe, Halsketten, Armbänder und Ohrringe nach Maß.",
  keywords: ["OEM Schmuckhersteller Thailand","Schmuck Fabrik Bangkok","Silberschmuck Hersteller","Gold Schmuck OEM","privates Label Schmuck Thailand"],
  alternates: { canonical: "https://www.pnjewelrymfg.com/de" },
};

const stats = [
  { value: "40+", label: "Jahre Erfahrung" },
  { value: "30", label: "Min. Bestellmenge" },
  { value: "100%", label: "Eigenfertigung" },
  { value: "Global", label: "Weltweiter Versand" },
];

const services = [
  { step: "01", title: "Design & CAD", desc: "Von der Skizze bis zum präzisen 3D-CAD-Modell. Wir realisieren Ihre Designvision." },
  { step: "02", title: "Guss", desc: "Wachsausschmelzverfahren mit präziser Legierungskontrolle. Silber, Gold und Basismetalle." },
  { step: "03", title: "Polieren", desc: "Spiegelglanz oder Matt. Handpoliert von erfahrenen Handwerkern." },
  { step: "04", title: "Steinfassung", desc: "Krappen-, Zarge-, Pavé-, Kanalfassung. Diamanten, Edelsteine, Zirkonia." },
  { step: "05", title: "Vergoldung", desc: "18K Gold, Rosegold, Rhodium, Schwarzrhodium. Langlebige Beschichtung." },
];

const categories = [
  { title: "Ringe", href: "/de/products/rings", img: "/images/products/rings/ring-1.jpg", desc: "Stapelringe, Solitäre, Statements" },
  { title: "Halsketten", href: "/de/products/necklaces", img: "/images/products/necklaces/necklace-1.jpg", desc: "Anhänger, Ketten, Layering" },
  { title: "Armbänder", href: "/de/products/bracelets", img: "/images/products/bracelets/bracelet-1.jpg", desc: "Bangles, Manschetten, Charm" },
  { title: "Ohrringe", href: "/de/products/earrings", img: "/images/products/earrings/earring-1.jpg", desc: "Ohrstecker, Creolen, Hänger" },
];

const whyUs = [
  { icon: "◈", title: "40+ Jahre Erfahrung", desc: "Jahrzehntelange OEM-Fertigungserfahrung für internationale Schmuckmarken." },
  { icon: "◇", title: "Niedrige MOQ — ab 30 Stück", desc: "Klein anfangen, schnell skalieren. Ideal für Boutique-Marken und neue Kollektionen." },
  { icon: "◉", title: "Vollservice-Produktion", desc: "Von Design bis Lieferung unter einem Dach. Keine Auslagerung. Vollständige Qualitätskontrolle." },
  { icon: "◎", title: "Globale Markenerfahrung", desc: "Vertraut von etablierten Marken in den USA, Spanien und ganz Europa." },
];

export default function DeHomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0">
          <SafeImage src="/images/hero/hero-bg.jpg" alt="P&N Jewelry" fill className="object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.8) 100%)" }} />
        </div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-32 opacity-30" style={{ background: "var(--gold)" }} />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label mb-8">OEM Schmuckhersteller Thailand</p>
          <h1 className="text-white font-display font-light mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1.1 }}>
            <span className="block">Über 40 Jahre</span>
            <span className="block gold-text italic">Handwerkskunst & Qualität</span>
          </h1>
          <p className="text-charcoal-300 text-sm tracking-widest mb-12">OEM · Private Label · Vollservice-Fertigung · Bangkok, Thailand</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/contact" className="btn-gold-filled text-xs px-10 py-4">Angebot anfordern</Link>
            <Link href="/de/about" className="btn-gold text-xs px-10 py-4">Über uns</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-widest text-gold-400 uppercase">Scrollen</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      <section className="py-16 border-b border-charcoal-100" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-display font-light mb-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "3rem", color: "var(--gold)" }}>{s.value}</div>
                  <div className="text-[10px] tracking-widest text-charcoal-500 uppercase">{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <p className="section-label mb-4">Über P&N Jewelry</p>
              <h2 className="font-display font-light mb-6 text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
                Ein Erbe der <span className="italic gold-text">Präzision</span>
              </h2>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-4">P&N Jewelry Limited Partnership wurde in Bangkok, Thailand gegründet und ist seit über vier Jahrzehnten ein vertrauenswürdiger OEM-Fertigungspartner für Schmuckmarken weltweit.</p>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-8">Von der ersten Designberatung bis zur abschließenden Qualitätskontrolle spiegelt jedes Stück unser unerschütterliches Engagement für Exzellenz wider.</p>
              <Link href="/de/about" className="btn-gold text-xs">Unsere Geschichte</Link>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute -top-4 -left-4 w-full h-full border" style={{ borderColor: "var(--gold)", opacity: 0.3 }} />
                <div className="relative w-full h-full overflow-hidden">
                  <SafeImage src="/images/factory/production/production-2.jpg" alt="Werkstatt" fill className="object-cover" />
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
              <p className="section-label mb-4">Unser Prozess</p>
              <h2 className="font-display font-light text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Vom Konzept zur <span className="italic gold-text">Vollendung</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {services.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 80}>
                <div className="border-l border-charcoal-800 px-6 py-8 hover:border-gold-400 transition-colors duration-400" style={{ borderColor: i === 0 ? "var(--gold)" : undefined }}>
                  <div className="text-[11px] font-mono mb-4" style={{ color: "var(--gold)", opacity: 0.6 }}>{s.step}</div>
                  <h3 className="text-white font-display font-light mb-3 text-xl" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <div className="text-center mt-12"><Link href="/de/services" className="btn-gold text-xs">Service-Details</Link></div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Produktkategorien</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Unser <span className="italic gold-text">Sortiment</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 120}>
                <Link href={cat.href} className="block product-card group">
                  <div className="relative overflow-hidden" style={{ paddingBottom: "130%" }}>
                    <div className="absolute inset-0">
                      <SafeImage src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <h3 className="text-white font-display font-light text-3xl mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>{cat.title}</h3>
                      <p className="text-gold-400 text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-400">{cat.desc}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <div className="text-center mt-12"><Link href="/de/products" className="btn-gold text-xs">Alle Produkte</Link></div>
          </RevealOnScroll>
        </div>
      </section>

      <VideoSection youtubeId="NYG46nwFnto" label="P&N Jewelry" title="Handwerkskunst in" subtitle="Aktion erleben" description="Ein Einblick in unsere Bangkoker Fabrik — wo jedes Stück mit Präzision und Sorgfalt gefertigt wird." dark={true} />

      <section className="py-28" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Warum P&N Jewelry</p>
              <h2 className="font-display font-light text-charcoal-900" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Der Partner dem <span className="italic gold-text">Marken vertrauen</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <div className="border border-charcoal-100 p-8 hover:border-gold-300 transition-all duration-400">
                  <div className="text-3xl mb-6" style={{ color: "var(--gold)" }}>{item.icon}</div>
                  <h3 className="font-display text-xl text-charcoal-900 mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="section-label mb-6">Kontakt</p>
            <h2 className="font-display font-light text-white mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Bereit für Ihre <span className="italic gold-text">nächste Kollektion?</span>
            </h2>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">Kontaktieren Sie uns für eine kostenlose Beratung. Wir antworten innerhalb von 24 Stunden.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/de/contact" className="btn-gold-filled text-xs px-12 py-4">Kostenloses Angebot anfordern</Link>
              <a href="https://wa.me/66617898877" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-12 py-4">WhatsApp Kontakt</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
