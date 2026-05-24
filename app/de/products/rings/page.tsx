import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Ringe — Individueller Schmuckhersteller Thailand",
  description: "Individuelle Ringe aus Thailand. Silber 925, Gold 9k-18k. MOQ ab 30 Stück.",
  alternates: { canonical: "https://www.pnjewelrymfg.com/de/products/rings" },
};

const items = [
  { id: "r1", img: "ring-1.jpg", title: "Stapelring", material: "Sterling Silber 925" },
  { id: "r2", img: "ring-2.jpg", title: "Solitär Krappenfassung", material: "18K Vergoldet" },
  { id: "r3", img: "ring-3.jpg", title: "Pavé Statement", material: "Rosegold · Zirkonia" },
  { id: "r4", img: "ring-4.jpg", title: "Gedrehtes Band", material: "Sterling Silber 925" },
  { id: "r5", img: "ring-5.jpg", title: "Zargenfassung", material: "Gold Vermeil" },
  { id: "r6", img: "ring-6.jpg", title: "Siegelring", material: "Oxidiertes Silber" },
  { id: "r7", img: "ring-7.jpg", title: "Cluster Ring", material: "18K Vergoldet" },
  { id: "r8", img: "ring-8.jpg", title: "Offener Ring", material: "Sterling Silber 925" },
  { id: "r9", img: "ring-9.jpg", title: "Filigranband", material: "Rosegold Vergoldet" }
];

export default function DeRingsPage() {
  return (
    <>
      <PageHero label="Produktkategorie" title="Ringe" subtitle="Individuell gefertigt nach Ihren Spezifikationen" />
      <ProductGrid category="Ringe Kollektion" imgDir="rings" items={items} />
    </>
  );
}
