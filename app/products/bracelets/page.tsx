import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Bracelets — Custom Bangle & Cuff Manufacturer Thailand",
  description:
    "Custom OEM bracelet manufacturing in Bangkok, Thailand. Bangles, cuffs, charm bracelets and tennis bracelets in silver and gold. MOQ 50 pieces.",
};

const bracelets = [
  { id: "b1", img: "bracelet-1.jpg", title: "Hammered Bangle", material: "Sterling Silver 925" },
  { id: "b2", img: "bracelet-2.jpg", title: "Open Cuff", material: "18k Gold Plated" },
  { id: "b3", img: "bracelet-3.jpg", title: "Tennis Bracelet", material: "Rose Gold · CZ Set" },
  { id: "b4", img: "bracelet-4.jpg", title: "Charm Chain", material: "Gold Vermeil" },
  { id: "b5", img: "bracelet-5.jpg", title: "Twisted Bangle", material: "Sterling Silver 925" },
  { id: "b6", img: "bracelet-6.jpg", title: "Beaded Stretch", material: "Oxidized Silver" },
  { id: "b7", img: "bracelet-7.jpg", title: "Pavé Cuff", material: "18k Gold Plated" },
  { id: "b8", img: "bracelet-8.jpg", title: "Wrap Bracelet", material: "Rose Gold Plated" },
  { id: "b9", img: "bracelet-9.jpg", title: "Stacking Set", material: "Sterling Silver 925" },
];

export default function BraceletsPage() {
  return (
    <>
      <PageHero
        label="Product Category"
        title="Bracelets"
        subtitle="Bangles, cuffs, and charm bracelets handcrafted for global collections"
      />
      <ProductGrid category="Bracelets Collection" imgDir="bracelets" items={bracelets} />
    </>
  );
}
