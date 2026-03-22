import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-16 border-b border-charcoal-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span
                className="font-display text-4xl font-light"
                style={{ fontFamily: "var(--font-cormorant)", color: "#fff" }}
              >
                P<span style={{ color: "var(--gold)" }}>&</span>N
              </span>
              <span
                className="block text-[9px] tracking-ultra uppercase mt-1"
                style={{ color: "var(--gold)", letterSpacing: "0.45em" }}
              >
                Jewelry Limited Partnership
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs">
              OEM jewelry manufacturer in Thailand with over 40 years of excellence.
              Crafting precision jewelry for global brands.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://wa.me/66617898877"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-[10px] px-6 py-3"
              >
                WhatsApp 1
              </a>
              <a
                href="https://wa.me/66844598284"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-[10px] px-6 py-3"
              >
                WhatsApp 2
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/products", label: "Products" },
                { href: "/products/rings", label: "— Rings" },
                { href: "/products/necklaces", label: "— Necklaces" },
                { href: "/products/bracelets", label: "— Bracelets" },
                { href: "/products/earrings", label: "— Earrings" },
                { href: "/why-us", label: "Why Choose Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-charcoal-400 hover:text-gold-400 text-sm transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>
              Contact
            </h4>
            <ul className="space-y-3 text-charcoal-400 text-sm">
              <li>
                <a
                  href="mailto:sale@pnjewelrymfg.com"
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  sale@pnjewelrymfg.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/66617898877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  +66 61 789 8877
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/66844598284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  +66 84 459 8284
                </a>
              </li>
              <li className="pt-2 text-charcoal-500 text-xs leading-relaxed">
                Bangkok, Thailand
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-charcoal-600 text-[11px] tracking-widest">
            © {new Date().getFullYear()} P&N Jewelry Limited Partnership. All rights reserved.
          </p>
          <p className="text-charcoal-700 text-[11px] tracking-widest">
            OEM MANUFACTURER · THAILAND
          </p>
        </div>
      </div>
    </footer>
  );
}
