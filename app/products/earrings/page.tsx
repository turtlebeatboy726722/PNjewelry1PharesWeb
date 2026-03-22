import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Earrings — Custom Stud & Drop Earring Manufacturer Thailand",
  description:
    "Custom OEM earring manufacturing in Bangkok, Thailand. Studs, hoops, drop and chandelier earrings in silver and gold. MOQ 50 pieces.",
};

const earrings = [
  { id: "e1", img: "earring-1.jpg", title: "Classic Stud", material: "Sterling Silver 925" },
  { id: "e2", img: "earring-2.jpg", title: "Hoop Earring", material: "18k Gold Plated" },
  { id: "e3", img: "earring-3.jpg", title: "Drop Earring", material: "Rose Gold · CZ Set" },
  { id: "e4", img: "earring-4.jpg", title: "Chandelier", material: "Gold Vermeil" },
  { id: "e5", img: "earring-5.jpg", title: "Huggie Hoop", material: "Sterling Silver 925" },
  { id: "e6", img: "earring-6.jpg", title: "Ear Cuff", material: "Oxidized Silver" },
  { id: "e7", img: "earring-7.jpg", title: "Pavé Stud", material: "18k Gold Plated · CZ" },
  { id: "e8", img: "earring-8.jpg", title: "Threader Earring", material: "Rose Gold Plated" },
  { id: "e9", img: "earring-9.jpg", title: "Geometric Drop", material: "Sterling Silver 925" },
];

export default function EarringsPage() {
  return (
    <>
      <PageHero
        label="Product Category"
        title="Earrings"
        subtitle="Studs, hoops, drops and chandeliers — handcrafted to your specification"
      />
      <ProductGrid category="Earrings Collection" imgDir="earrings" items={earrings} />
    </>
  );
}
