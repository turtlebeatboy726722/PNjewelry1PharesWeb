import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM ネックレス — タイのカスタムネックレスメーカー",
  description: "タイ・バンコクでカスタムネックレスを製造。シルバー、ゴールド対応。最小注文数30個。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/products/necklaces" },
};

const items = [
  { id: "n1", img: "necklace-1.jpg", title: "デリケートペンダント", material: "シルバー925" },
  { id: "n2", img: "necklace-2.jpg", title: "レイヤリングチェーン", material: "18Kゴールドメッキ" },
  { id: "n3", img: "necklace-3.jpg", title: "パヴェチョーカー", material: "ローズゴールド・CZ" },
  { id: "n4", img: "necklace-4.jpg", title: "コインネックレス", material: "ゴールドヴェルメイユ" },
  { id: "n5", img: "necklace-5.jpg", title: "バーペンダント", material: "シルバー925" },
  { id: "n6", img: "necklace-6.jpg", title: "ティアドロップラリアット", material: "18Kゴールドメッキ" },
  { id: "n7", img: "necklace-7.jpg", title: "マルチストランド", material: "ローズゴールドメッキ" },
  { id: "n8", img: "necklace-8.jpg", title: "ジオメトリックドロップ", material: "酸化シルバー" },
  { id: "n9", img: "necklace-9.jpg", title: "クラスターペンダント", material: "シルバー925" }
];

export default function JaNecklacesPage() {
  return (
    <>
      <PageHero label="製品カテゴリー" title="ネックレス" subtitle="ご要望に合わせてカスタム製造いたします" />
      <ProductGrid category="ネックレスコレクション" imgDir="necklaces" items={items} />
    </>
  );
}
