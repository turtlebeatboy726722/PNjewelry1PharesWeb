import type { Metadata } from "next";
import BlogLayout, { Intro, H2, H3, P, UL, LI, CompareTable, Callout } from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "Gold Vermeil vs Gold Plated: Which Should Your Jewelry Brand Choose?",
  description: "Gold vermeil vs gold plated — understand the real difference in thickness, base metal, durability and price. Essential guide for OEM jewelry brands choosing the right finish.",
  keywords: ["gold vermeil vs gold plated", "gold vermeil jewelry manufacturer", "gold plated jewelry Thailand", "gold vermeil OEM", "jewelry plating guide"],
  alternates: { canonical: "https://www.pnjewelrymfg.com/blog/gold-vermeil-vs-gold-plated" },
  openGraph: {
    title: "Gold Vermeil vs Gold Plated: Which Should Your Jewelry Brand Choose?",
    description: "The real difference between gold vermeil and gold plated — and which is right for your OEM jewelry brand.",
    url: "https://www.pnjewelrymfg.com/blog/gold-vermeil-vs-gold-plated",
    siteName: "P&N Jewelry",
    type: "article",
    publishedTime: "2025-09-01T00:00:00.000Z",
  },
};

export default function BlogGoldVermeilVsPlated() {
  return (
    <BlogLayout
      title="Gold Vermeil vs Gold Plated: Which Should Your Jewelry Brand Choose?"
      description="The real difference in thickness, base metal, durability and price — and which is right for your OEM brand."
      date="September 2025"
      readTime="6 min"
    >
      <Intro>
        One of the most common questions we receive from new jewelry brands is: "What is the difference between gold vermeil and gold plated?" On the surface, both look identical. But for your customers, your brand reputation, and your long-term returns, the difference is significant. Here is what every OEM jewelry brand needs to know.
      </Intro>

      <H2>What is Gold Plated Jewelry?</H2>
      <P>Gold plated jewelry is any jewelry with a thin layer of gold applied over a base metal — typically brass or copper. The gold layer can be extremely thin, sometimes as little as 0.5 microns. There are no universal standards for what qualifies as "gold plated," which means quality varies enormously between manufacturers.</P>
      <P>Gold plated jewelry is the most common and lowest-cost option. It looks great when new, but the thin gold layer wears off relatively quickly — especially on high-contact areas like ring bands and bracelet clasps.</P>

      <H2>What is Gold Vermeil?</H2>
      <P>Gold vermeil (pronounced "ver-may") is a specific, regulated standard for gold-plated jewelry. To legally be called gold vermeil, a piece must meet three criteria:</P>
      <UL>
        <LI>Base metal must be sterling silver 925 — not brass or copper</LI>
        <LI>Gold plating must be at least 10k gold or higher (we use 18k)</LI>
        <LI>Gold layer must be at least 2.5 microns thick</LI>
      </UL>
      <P>This is a legally defined term in many markets including the USA. A manufacturer cannot label jewelry as "vermeil" unless it meets these three standards.</P>

      <H2>Side-by-Side Comparison</H2>
      <CompareTable
        headers={["", "Gold Plated", "Gold Vermeil"]}
        rows={[
          ["Base Metal", "Brass or Copper", "925 Sterling Silver"],
          ["Minimum Gold Thickness", "No standard (0.5–1 micron typical)", "2.5 microns minimum"],
          ["Gold Karat", "Any", "10k minimum (we use 18k)"],
          ["Durability", "Moderate — fades faster", "High — lasts significantly longer"],
          ["Hypoallergenic", "No (brass can cause reactions)", "Yes (silver base is skin-safe)"],
          ["Price Point", "Lower", "Premium"],
          ["Market Positioning", "Fashion / Fast Fashion", "Luxury / Premium Brand"],
          ["USA Legal Standard", "No standard", "Regulated term"],
        ]}
      />

      <H2>Which is Better for Your OEM Brand?</H2>
      <P>The answer depends on your brand positioning and target customer.</P>

      <H3>Choose Gold Plated if:</H3>
      <UL>
        <LI>Your price point is under $30–$40 retail</LI>
        <LI>You are in the fast fashion or trend jewelry space</LI>
        <LI>High volume, frequent new collections is your model</LI>
        <LI>Customers expect to replace pieces seasonally</LI>
      </UL>

      <H3>Choose Gold Vermeil if:</H3>
      <UL>
        <LI>Your retail price point is $50–$300+</LI>
        <LI>You want to position as a premium or luxury brand</LI>
        <LI>You sell in the USA market where vermeil is a recognized term</LI>
        <LI>Customer retention and repeat purchase matters to your brand</LI>
        <LI>You want fewer returns and complaints about tarnishing</LI>
      </UL>

      <Callout>
        At P&N Jewelry, we manufacture gold vermeil using 18k gold plating over 925 sterling silver — exceeding the minimum 2.5 micron standard. This is our recommended finish for premium private label brands. MOQ starts at 30 pieces per design.
      </Callout>

      <H2>What About Rose Gold Vermeil?</H2>
      <P>Rose gold vermeil follows the same standard — 18k rose gold plating (a gold-copper alloy that gives the pink tone) over 925 sterling silver at minimum 2.5 microns. It has become one of the most popular finishes for women's jewelry brands globally, particularly in the USA, Australia, and Canada.</P>

      <H2>How Long Does Gold Vermeil Last?</H2>
      <P>With proper care, high-quality gold vermeil jewelry can last 1–3 years of regular wear before any fading. Standard gold plated jewelry typically shows wear in 3–6 months with daily use. The difference is the gold layer thickness — 2.5 microns of 18k gold versus 0.5 microns of plating-grade gold is a significant difference in longevity.</P>

      <H2>Can P&N Jewelry Manufacture Both?</H2>
      <P>Yes. We offer both gold plating and gold vermeil manufacturing from our Bangkok factory. For brands starting out, we often recommend gold vermeil as the default — the price difference per unit is relatively small, but the brand positioning benefit is substantial. Our minimum order is 30 pieces per design for both options.</P>
    </BlogLayout>
  );
}
