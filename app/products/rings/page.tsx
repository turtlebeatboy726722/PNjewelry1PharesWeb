import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Rings — Custom Silver & Gold Ring Manufacturer Thailand",
  description:
    "Custom OEM ring manufacturing in Bangkok, Thailand. Stackable, solitaire, band, and statement rings in silver and gold. MOQ 50 pieces.",
};

const rings = [
  { id: "r1", img: "ring-1.jpg", title: "Stackable Band", material: "Sterling Silver 925" },
  { id: "r2", img: "ring-2.jpg", title: "Solitaire Prong", material: "18k Gold Plated" },
  { id: "r3", img: "ring-3.jpg", title: "Pavé Statement", material: "Rose Gold · CZ Set" },
  { id: "r4", img: "ring-4.jpg", title: "Twisted Band", material: "Sterling Silver 925" },
  { id: "r5", img: "ring-5.jpg", title: "Bezel Set Stone", material: "Gold Vermeil" },
  { id: "r6", img: "ring-6.jpg", title: "Signet Ring", material: "Oxidized Silver" },
  { id: "r7", img: "ring-7.jpg", title: "Cluster Ring", material: "18k Gold Plated" },
  { id: "r8", img: "ring-8.jpg", title: "Open Bangle Ring", material: "Sterling Silver 925" },
  { id: "r9", img: "ring-9.jpg", title: "Filigree Band", material: "Rose Gold Plated" },
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
