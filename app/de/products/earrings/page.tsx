import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Ohrringe — Individueller Schmuckhersteller Thailand",
  description: "Individuelle Ohrringe aus Thailand. Silber 925, Gold 9k-18k. MOQ ab 30 Stück.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/products/earrings" },
};

const items = [
  { id: "e1", img: "earring-1.jpg", title: "Klassischer Ohrstecker", material: "Sterling Silber 925" },
  { id: "e2", img: "earring-2.jpg", title: "Creolen", material: "18K Vergoldet" },
  { id: "e3", img: "earring-3.jpg", title: "Hängeohrringe", material: "Rosegold · Zirkonia" },
  { id: "e4", img: "earring-4.jpg", title: "Kronleuchter", material: "Gold Vermeil" },
  { id: "e5", img: "earring-5.jpg", title: "Huggie Creolen", material: "Sterling Silber 925" },
  { id: "e6", img: "earring-6.jpg", title: "Ohrmanschette", material: "Oxidiertes Silber" },
  { id: "e7", img: "earring-7.jpg", title: "Pavé Ohrstecker", material: "18K Vergoldet · CZ" },
  { id: "e8", img: "earring-8.jpg", title: "Einfädler Ohrringe", material: "Rosegold Vergoldet" },
  { id: "e9", img: "earring-9.jpg", title: "Geometrische Hänger", material: "Sterling Silber 925" }
];

export default function DeEarringsPage() {
  return (
    <>
      <PageHero label="Produktkategorie" title="Ohrringe" subtitle="Individuell gefertigt nach Ihren Spezifikationen" />
      <ProductGrid category="Ohrringe Kollektion" imgDir="earrings" items={items} />
    </>
  );
}
