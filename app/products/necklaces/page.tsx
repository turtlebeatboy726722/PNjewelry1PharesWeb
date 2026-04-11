import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Necklaces — Custom Pendant & Chain Manufacturer Thailand",
  description:
    "Custom OEM necklace manufacturing in Bangkok, Thailand. Pendants, chains, layering pieces and chokers in silver and gold. MOQ 50 pieces.",
};

const necklaces = [
  { id: "n1", img: "necklace-1.jpg", title: "Infinite Necklace", material: "Sterling Silver 925 · CZ Set" },
  { id: "n2", img: "necklace-2.jpg", title: "Lucky Clover", material: "Sterling Silver 925 · CZ Set" },
  { id: "n3", img: "necklace-3.jpg", title: "Halo Pendant", material: "Sterling Silver 925 · CZ 6.5mm" },
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
