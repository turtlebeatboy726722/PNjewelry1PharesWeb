import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Necklaces — Custom Pendant & Chain Manufacturer Thailand",
  description:
    "Custom OEM necklace manufacturing in Bangkok, Thailand. Pendants, chains, layering pieces and chokers in silver and gold. MOQ 50 pieces.",
};

const necklaces = [
  { id: "n1", img: "necklace-1.jpg", title: "Delicate Pendant", material: "Sterling Silver 925" },
  { id: "n2", img: "necklace-2.jpg", title: "Layering Chain", material: "18k Gold Plated" },
  { id: "n3", img: "necklace-3.jpg", title: "Pavé Choker", material: "Rose Gold · CZ Set" },
  { id: "n4", img: "necklace-4.jpg", title: "Coin Necklace", material: "Gold Vermeil" },
  { id: "n5", img: "necklace-5.jpg", title: "Bar Pendant", material: "Sterling Silver 925" },
  { id: "n6", img: "necklace-6.jpg", title: "Teardrop Lariat", material: "18k Gold Plated" },
  { id: "n7", img: "necklace-7.jpg", title: "Multi-strand Chain", material: "Rose Gold Plated" },
  { id: "n8", img: "necklace-8.jpg", title: "Geometric Drop", material: "Oxidized Silver" },
  { id: "n9", img: "necklace-9.jpg", title: "Stone Cluster Pendant", material: "Sterling Silver 925" },
];

export default function NecklacesPage() {
  return (
    <>
      <PageHero
        label="Product Category"
        title="Necklaces"
        subtitle="Pendants, chains, and layering pieces crafted with precision"
      />
      <ProductGrid category="Necklaces Collection" imgDir="necklaces" items={necklaces} />
    </>
  );
}
