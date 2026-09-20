"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

interface PortfolioItem {
  id: string;
  category: string;
  img: string;
  title: string;
  material: string;
  finish: string;
}

interface Category {
  id: string;
  label: string;
}

export default function PortfolioGrid({
  items,
  categories,
}: {
  items: PortfolioItem[];
  categories: Category[];
}) {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <section className="py-20" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="text-[11px] tracking-widest uppercase px-6 py-2 transition-all duration-300"
              style={{
                border: "1px solid",
                borderColor: active === cat.id ? "var(--gold)" : "#d4d4d4",
                background: active === cat.id ? "var(--gold)" : "transparent",
                color: active === cat.id ? "#0d0d0d" : "#6d6d6d",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <RevealOnScroll key={item.id} delay={(i % 3) * 80}>
              <div className="group">
                <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "1/1" }}>
                  <SafeImage
                    src={item.img}
                    alt={`${item.title} — Custom OEM ${item.category} Thailand`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }}
                  >
                    <Link href="/contact" className="btn-gold text-[10px] px-6 py-2 w-full text-center block">
                      Request Similar Design
                    </Link>
                  </div>
                </div>
                <div className="border-b border-charcoal-100 pb-4">
                  <h3 className="font-display text-xl text-charcoal-900 mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[10px] tracking-widest text-charcoal-400 uppercase">
                    {item.material} · {item.finish}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll>
          <p className="text-center text-charcoal-400 text-xs tracking-widest mt-10">
            Showing {filtered.length} of {items.length} pieces · All manufactured in Bangkok, Thailand
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
