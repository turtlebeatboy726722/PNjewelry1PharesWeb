import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SafeImage from "@/components/SafeImage";

interface ProductGridProps {
  category: string;
  imgDir: string;
  items: Array<{
    id: string;
    img: string;
    title: string;
    material: string;
  }>;
}

export default function ProductGrid({ category, imgDir, items }: ProductGridProps) {
  return (
    <section className="py-28" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealOnScroll>
          <div className="mb-16">
            <Link
              href="/products"
              className="text-[10px] tracking-widest text-charcoal-400 uppercase hover:text-gold-400 transition-colors duration-300 mb-4 block"
            >
              ← All Products
            </Link>
            <p className="section-label mb-3">OEM Manufacturing</p>
            <h1
              className="font-display font-light text-charcoal-900"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              {category}
            </h1>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 80}>
              <div className="group">
                <div
                  className="relative overflow-hidden mb-4"
                  style={{ aspectRatio: "1/1" }}
                >
                  <SafeImage
                    src={`/images/products/${imgDir}/${item.img}`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    }}
                  >
                    <Link
                      href="/contact"
                      className="btn-gold text-[10px] px-6 py-2 w-full text-center"
                      style={{ display: "block" }}
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
                <div className="border-b border-charcoal-100 pb-4">
                  <h3
                    className="font-display text-xl text-charcoal-900 mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[10px] tracking-widest text-charcoal-400 uppercase">
                    {item.material}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={300}>
          <div className="text-center mt-16 py-12 border border-charcoal-200">
            <p className="section-label mb-4">Custom Orders Welcome</p>
            <h3
              className="font-display text-2xl text-charcoal-900 mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Need a Custom Design?
            </h3>
            <p className="text-charcoal-500 text-sm mb-6">
              MOQ 50 pieces · Free design consultation · Fast turnaround
            </p>
            <Link href="/contact" className="btn-gold-filled text-xs px-10 py-3">
              Request Quote
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
