import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Rings — Custom Silver & Gold Ring Manufacturer Thailand",
  description:
    "Custom OEM ring manufacturing in Bangkok, Thailand. Stackable, solitaire, band, and statement rings in silver and gold. MOQ 50 pieces.",
};

const rings = [
  { id: "r1", img: "ring-1.jpg", title: "Eternity Band", material: "Sterling Silver 925" },
  { id: "r2", img: "ring-2.jpg", title: "Chain Ring", material: "Sterling Silver 925" },
  { id: "r3", img: "ring-3.jpg", title: "Emerald Ring", material: "Yellow Gold · Birth Stone" },
  { id: "r4", img: "ring-4.jpg", title: "Solitaire Ring", material: "Sterling Silver 925 · Round CZ Solitaire" },
  { id: "r5", img: "ring-5.jpg", title: "Triple Row Ring", material: "Sterling Silver 925 · Triple Channel-Set CZ Ring" },
  { id: "r6", img: "ring-6.jpg", title: "Solitaire Ring II", material: "Sterling Silver 925 · Oval CZ Solitaire" },
  { id: "r7", img: "ring-7.jpg", title: "Solitaire Ring III", material: "Sterling Silver 925 · Oval CZ Solitaire" },
  { id: "r8", img: "ring-8.jpg", title: "Bar Set Band", material: "Sterling Silver 925 · Geometric Bar-Set CZ Band" },
  { id: "r9", img: "ring-9.jpg", title: "Twisted Band", material: "Sterling Silver 925 · Twisted Infinity CZ Band" },
];

export default function RingsPage() {
  return (
    <>
      <PageHero
        label="Product Category"
        title="Rings"
        subtitle="Stackable, solitaire, statement — handcrafted to your specification"
      />
      <ProductGrid category="Rings Collection" imgDir="rings" items={rings} />
    </>
  );
}
