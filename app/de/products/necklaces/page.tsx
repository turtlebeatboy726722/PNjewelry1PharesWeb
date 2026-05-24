import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Halsketten — Individueller Schmuckhersteller Thailand",
  description: "Individuelle Halsketten aus Thailand. Silber 925, Gold 9k-18k. MOQ ab 30 Stück.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/products/necklaces" },
};

const items = [
  { id: "n1", img: "necklace-1.jpg", title: "Zartes Pendant", material: "Sterling Silber 925" },
  { id: "n2", img: "necklace-2.jpg", title: "Layering Kette", material: "18K Vergoldet" },
  { id: "n3", img: "necklace-3.jpg", title: "Pavé Choker", material: "Rosegold · Zirkonia" },
  { id: "n4", img: "necklace-4.jpg", title: "Münzhalskette", material: "Gold Vermeil" },
  { id: "n5", img: "necklace-5.jpg", title: "Stabanhänger", material: "Sterling Silber 925" },
  { id: "n6", img: "necklace-6.jpg", title: "Tränentropfen Lariat", material: "18K Vergoldet" },
  { id: "n7", img: "necklace-7.jpg", title: "Mehrstrangkette", material: "Rosegold Vergoldet" },
  { id: "n8", img: "necklace-8.jpg", title: "Geometrischer Hänger", material: "Oxidiertes Silber" },
  { id: "n9", img: "necklace-9.jpg", title: "Cluster Anhänger", material: "Sterling Silber 925" }
];

export default function DeNecklacesPage() {
  return (
    <>
      <PageHero label="Produktkategorie" title="Halsketten" subtitle="Individuell gefertigt nach Ihren Spezifikationen" />
      <ProductGrid category="Halsketten Kollektion" imgDir="necklaces" items={items} />
    </>
  );
}
