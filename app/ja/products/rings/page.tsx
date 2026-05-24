import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM リング — タイのカスタムリングメーカー",
  description: "タイ・バンコクでカスタムリングを製造。シルバー、ゴールド対応。最小注文数30個。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/products/rings" },
};

const items = [
  { id: "r1", img: "ring-1.jpg", title: "クラシックバンド", material: "シルバー925" },
  { id: "r2", img: "ring-2.jpg", title: "ソリテール", material: "18Kゴールドメッキ" },
  { id: "r3", img: "ring-3.jpg", title: "パヴェリング", material: "ローズゴールド・CZ" },
  { id: "r4", img: "ring-4.jpg", title: "ツイストバンド", material: "シルバー925" },
  { id: "r5", img: "ring-5.jpg", title: "ベゼルストーン", material: "ゴールドヴェルメイユ" },
  { id: "r6", img: "ring-6.jpg", title: "シグネットリング", material: "酸化シルバー" },
  { id: "r7", img: "ring-7.jpg", title: "クラスターリング", material: "18Kゴールドメッキ" },
  { id: "r8", img: "ring-8.jpg", title: "オープンリング", material: "シルバー925" },
  { id: "r9", img: "ring-9.jpg", title: "フィリグリーバンド", material: "ローズゴールドメッキ" }
];

export default function JaRingsPage() {
  return (
    <>
      <PageHero label="製品カテゴリー" title="リング" subtitle="ご要望に合わせてカスタム製造いたします" />
      <ProductGrid category="リングコレクション" imgDir="rings" items={items} />
    </>
  );
}
