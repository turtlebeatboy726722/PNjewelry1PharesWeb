import type { Metadata } from "next";
import BlogLayout, { Intro, H2, H3, P, UL, LI, Callout } from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "How to Design Custom Jewelry for OEM Manufacturing: A Step-by-Step Guide",
  description: "How to prepare your jewelry design for OEM manufacturing — from sketch to CAD to sample to production. A practical guide from a Bangkok jewelry factory.",
  keywords: ["custom CAD jewelry prototype manufacturer", "jewelry prototype manufacturer Thailand", "custom jewelry design OEM", "jewelry CAD design Bangkok", "OEM jewelry design process"],
  alternates: { canonical: "https://www.pnjewelrymfg.com/blog/how-to-design-custom-jewelry-oem-manufacturing" },
  openGraph: {
    title: "How to Design Custom Jewelry for OEM Manufacturing: A Step-by-Step Guide",
    description: "From sketch to CAD to sample to production — how to prepare your design for OEM jewelry manufacturing.",
    url: "https://www.pnjewelrymfg.com/blog/how-to-design-custom-jewelry-oem-manufacturing",
    siteName: "P&N Jewelry",
    type: "article",
    publishedTime: "2025-09-15T00:00:00.000Z",
  },
};

export default function BlogDesignGuide() {
  return (
    <BlogLayout
      title="How to Design Custom Jewelry for OEM Manufacturing: A Step-by-Step Guide"
      description="From sketch to CAD to sample to production — what you need to prepare and what your manufacturer handles."
      date="September 2025"
      readTime="7 min"
    >
      <Intro>
        One of the most common barriers for new jewelry brands is not knowing how to communicate their design ideas to a manufacturer. The good news: you do not need to be a CAD expert or a trained jeweler. You need a clear vision and a good manufacturing partner. Here is exactly how the custom jewelry design process works from our end.
      </Intro>

      <H2>What You Need to Start</H2>
      <P>You do not need a polished professional drawing or a CAD file to start the OEM process. What you need is enough visual information for our design team to understand your intent. Any of the following works:</P>
      <UL>
        <LI>A hand sketch — even rough pencil drawings work if proportions and key details are indicated</LI>
        <LI>Reference photos — images from Pinterest, Instagram, competitor products, or existing jewelry you want to adapt</LI>
        <LI>A CAD file — if you already have one, we work with most standard jewelry CAD formats</LI>
        <LI>A physical sample — an existing piece you want to replicate or modify</LI>
        <LI>A written description — for simpler pieces, a detailed written brief can be enough to start</LI>
      </UL>

      <H2>Step 1 — Initial Brief and Quotation</H2>
      <P>Send us your reference materials along with the following information:</P>
      <UL>
        <LI>Metal: 925 silver, gold vermeil, brass, or solid gold?</LI>
        <LI>Plating: rhodium, 18k gold, rose gold, black rhodium?</LI>
        <LI>Stones: CZ, moissanite, lab grown diamond, natural diamond, or no stones?</LI>
        <LI>Size: ring size, necklace length, earring drop length, etc.</LI>
        <LI>Quantity: how many pieces for the first production run?</LI>
      </UL>
      <P>We will respond within 48 hours with a preliminary price range and timeline. No commitment required at this stage.</P>

      <H2>Step 2 — CAD Design</H2>
      <P>Our in-house design team will create a precise 3D CAD model based on your reference materials. You will receive rendered images from multiple angles — top, front, side, and perspective view. This typically takes 3–7 business days depending on complexity.</P>
      <P>Review the CAD carefully. Check proportions, stone sizes, prong placement, thickness, and any engraving or texture details. We support unlimited revisions at this stage — it is much easier and cheaper to adjust the CAD than to modify a physical piece.</P>

      <H3>What to Look for in CAD Review</H3>
      <UL>
        <LI>Overall proportions — does it look right to scale?</LI>
        <LI>Stone size and placement — are the stones where you want them?</LI>
        <LI>Metal thickness — thin areas may be fragile in production</LI>
        <LI>Setting style — prong, bezel, pavé — does it match your reference?</LI>
        <LI>Any text or engraving — check spelling and positioning</LI>
      </UL>

      <H2>Step 3 — Prototype / Sample</H2>
      <P>Once the CAD is approved, we produce a physical prototype. This is typically in 925 silver (the same metal as production, or a similar alloy) and may or may not have stones set depending on complexity and your budget for sampling.</P>
      <P>Prototype lead time is 7–14 business days. We ship the physical sample to you for review. You will be able to hold it, photograph it, and assess weight, finish, and overall quality before committing to full production.</P>

      <Callout>
        Prototype cost is charged separately from production and is typically $50–$200 depending on complexity. This cost is usually credited against your first production order at P&N Jewelry.
      </Callout>

      <H2>Step 4 — Sample Approval and Production Order</H2>
      <P>If the sample meets your expectations, you approve it and we proceed to production. If adjustments are needed, we revise the CAD and produce a second sample. Most designs are approved within 1–2 rounds of sampling.</P>
      <P>At this point, you confirm your production quantity (minimum 30 pieces per design), pay the 50% production deposit, and we begin manufacturing.</P>

      <H2>Step 5 — Production and QC</H2>
      <P>Full production takes 30–45 business days for most designs. During production, we provide milestone photos via WhatsApp or email — typically at the casting stage, polishing stage, and final QC inspection before packaging.</P>
      <P>Every piece goes through our QC process: dimensional check against the approved sample, surface quality inspection, stone security check (for set pieces), and plating consistency verification.</P>

      <H2>Step 6 — Packaging and Shipment</H2>
      <P>We can package to your specification — individual polybags, gift boxes, branded packaging if you provide it — and ship worldwide via DHL, FedEx, or EMS with full tracking and insurance. We provide all export documentation including commercial invoice, packing list, and certificate of origin.</P>

      <H2>Common Design Mistakes to Avoid</H2>
      <UL>
        <LI>Too thin metal walls — pieces under 0.8mm thickness in key structural areas will be fragile</LI>
        <LI>Stones that are too small — stones under 1mm diameter are difficult to set consistently at scale</LI>
        <LI>Approving CAD without checking scale — always ask for the CAD with measurements</LI>
        <LI>Skipping the sample — the sample step exists for a reason; it protects both parties</LI>
        <LI>Changing design after production starts — modifications after production begins incur additional cost</LI>
      </UL>
    </BlogLayout>
  );
}
