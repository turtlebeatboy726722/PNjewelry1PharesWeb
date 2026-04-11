import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM Earrings — Custom Stud & Drop Earring Manufacturer Thailand",
  description:
    "Custom OEM earring manufacturing in Bangkok, Thailand. Studs, hoops, drop and chandelier earrings in silver and gold. MOQ 50 pieces.",
};

const earrings = [
  { id: "e1", img: "earring-1.jpg", title: "Halo Hoop Earring", material: "Sterling Silver 925 · CZ 6.5mm" },
  { id: "e2", img: "earring-2.jpg", title: "Lighting Hoop Earring", material: "Sterling Silver 925 · CZ Set" },
  { id: "e3", img: "earring-3.jpg", title: "Stud Earring", material: "Sterling Silver 925 · CZ 6.5mm" },
  { id: "e4", img: "earring-4.jpg", title: "Stud Earring II", material: "Sterling Silver 925 · CZ 5mm" },
  { id: "e5", img: "earring-5.jpg", title: "Huggie Hoop", material: "Sterling Silver 925 · White Gold" },
  { id: "e6", img: "earring-6.jpg", title: "Stud Earring III", material: "Sterling Silver 925 · Moonstone 5mm" },
  { id: "e7", img: "earring-7.jpg", title: "Stud Earring IV", material: "Sterling Silver 925 · Moonstone 4.5mm" },
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
