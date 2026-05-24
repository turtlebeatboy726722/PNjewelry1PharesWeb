import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM ピアス — タイのカスタムピアスメーカー",
  description: "タイ・バンコクでカスタムピアスを製造。シルバー、ゴールド対応。最小注文数30個。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/products/earrings" },
};

const items = [
  { id: "e1", img: "earring-1.jpg", title: "クラシックスタッド", material: "シルバー925" },
  { id: "e2", img: "earring-2.jpg", title: "フープピアス", material: "18Kゴールドメッキ" },
  { id: "e3", img: "earring-3.jpg", title: "ドロップピアス", material: "ローズゴールド・CZ" },
  { id: "e4", img: "earring-4.jpg", title: "シャンデリア", material: "ゴールドヴェルメイユ" },
  { id: "e5", img: "earring-5.jpg", title: "ハギーフープ", material: "シルバー925" },
  { id: "e6", img: "earring-6.jpg", title: "イヤーカフ", material: "酸化シルバー" },
  { id: "e7", img: "earring-7.jpg", title: "パヴェスタッド", material: "18Kゴールドメッキ" },
  { id: "e8", img: "earring-8.jpg", title: "スレッダーピアス", material: "ローズゴールドメッキ" },
  { id: "e9", img: "earring-9.jpg", title: "ジオメトリックドロップ", material: "シルバー925" }
];

export default function JaEarringsPage() {
  return (
    <>
      <PageHero label="製品カテゴリー" title="ピアス" subtitle="ご要望に合わせてカスタム製造いたします" />
      <ProductGrid category="ピアスコレクション" imgDir="earrings" items={items} />
    </>
  );
}
