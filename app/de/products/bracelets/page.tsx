import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Armbänder — Individueller Schmuckhersteller Thailand",
  description: "Individuelle Armbänder aus Thailand. Silber 925, Gold 9k-18k. MOQ ab 30 Stück.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/products/bracelets" },
};

const items = [
  { id: "b1", img: "bracelet-1.jpg", title: "Gehämmertes Bangle", material: "Sterling Silber 925" },
  { id: "b2", img: "bracelet-2.jpg", title: "Offene Manschette", material: "18K Vergoldet" },
  { id: "b3", img: "bracelet-3.jpg", title: "Tennisarmband", material: "Rosegold · Zirkonia" },
  { id: "b4", img: "bracelet-4.jpg", title: "Charm Kette", material: "Gold Vermeil" },
  { id: "b5", img: "bracelet-5.jpg", title: "Gedrehtes Bangle", material: "Sterling Silber 925" },
  { id: "b6", img: "bracelet-6.jpg", title: "Perlenarmband", material: "Oxidiertes Silber" },
  { id: "b7", img: "bracelet-7.jpg", title: "Pavé Manschette", material: "18K Vergoldet" },
  { id: "b8", img: "bracelet-8.jpg", title: "Wickelarmband", material: "Rosegold Vergoldet" },
  { id: "b9", img: "bracelet-9.jpg", title: "Stapelset", material: "Sterling Silber 925" }
];

export default function DeBraceletsPage() {
  return (
    <>
      <PageHero label="Produktkategorie" title="Armbänder" subtitle="Individuell gefertigt nach Ihren Spezifikationen" />
      <ProductGrid category="Armbänder Kollektion" imgDir="bracelets" items={items} />
    </>
  );
}
