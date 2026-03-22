"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-display text-2xl font-light tracking-widest transition-colors duration-300 ${
                scrolled || !isHome ? "text-charcoal-900" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              P<span style={{ color: "var(--gold)" }}>&</span>N
            </span>
            <span
              className="text-[9px] font-body font-medium tracking-ultra uppercase transition-colors duration-300"
              style={{
                color: "var(--gold)",
                fontFamily: "var(--font-jost)",
                letterSpacing: "0.4em",
              }}
            >
              Jewelry
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link transition-colors duration-300 ${
                  scrolled || !isHome ? "text-charcoal-900" : "text-white"
                } ${pathname === link.href ? "text-gold-400" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link href="/contact" className="hidden lg:block btn-gold text-xs">
            Request Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled || !isHome ? "bg-charcoal-900" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled || !isHome ? "bg-charcoal-900" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled || !isHome ? "bg-charcoal-900" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden flex flex-col ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="flex items-center justify-between px-8 h-20 border-b border-charcoal-100">
          <span
            className="font-display text-xl text-charcoal-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            P<span style={{ color: "var(--gold)" }}>&</span>N Jewelry
          </span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <span className="block w-5 h-px bg-charcoal-900 rotate-45 translate-y-px" />
            <span className="block w-5 h-px bg-charcoal-900 -rotate-45" />
          </button>
        </div>
        <nav className="flex flex-col px-8 pt-10 gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-charcoal-900 text-sm ${
                pathname === link.href ? "text-gold-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-8 mt-10">
          <Link href="/contact" className="btn-gold-filled text-xs w-full text-center block">
            Request Quote
          </Link>
        </div>
        <div className="px-8 mt-auto pb-10">
          <p className="text-[10px] tracking-widest text-charcoal-400 uppercase">
            sale@pnjewelrymfg.com
          </p>
        </div>
      </div>
    </>
  );
}
