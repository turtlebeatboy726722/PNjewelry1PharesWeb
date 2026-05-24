import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "OEM ブレスレット — タイのカスタムブレスレットメーカー",
  description: "タイ・バンコクでカスタムブレスレットを製造。シルバー、ゴールド対応。最小注文数30個。",
  alternates: { canonical: "https://www.pnjewelrymfg.com/ja/products/bracelets" },
};

const items = [
  { id: "b1", img: "bracelet-1.jpg", title: "ハンマードバングル", material: "シルバー925" },
  { id: "b2", img: "bracelet-2.jpg", title: "オープンカフ", material: "18Kゴールドメッキ" },
  { id: "b3", img: "bracelet-3.jpg", title: "テニスブレスレット", material: "ローズゴールド・CZ" },
  { id: "b4", img: "bracelet-4.jpg", title: "チャームチェーン", material: "ゴールドヴェルメイユ" },
  { id: "b5", img: "bracelet-5.jpg", title: "ツイストバングル", material: "シルバー925" },
  { id: "b6", img: "bracelet-6.jpg", title: "ビーズストレッチ", material: "酸化シルバー" },
  { id: "b7", img: "bracelet-7.jpg", title: "パヴェカフ", material: "18Kゴールドメッキ" },
  { id: "b8", img: "bracelet-8.jpg", title: "ラップブレスレット", material: "ローズゴールドメッキ" },
  { id: "b9", img: "bracelet-9.jpg", title: "スタッキングセット", material: "シルバー925" }
];

export default function JaBraceletsPage() {
  return (
    <>
      <PageHero label="製品カテゴリー" title="ブレスレット" subtitle="ご要望に合わせてカスタム製造いたします" />
      <ProductGrid category="ブレスレットコレクション" imgDir="bracelets" items={items} />
    </>
  );
}
