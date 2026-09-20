import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "925 Sterling Silver & Gold Vermeil OEM Jewelry Manufacturer | Bangkok, Thailand",
    template: "%s | P&N Jewelry",
  },
  description:
    "P&N Jewelry — 925 sterling silver & gold vermeil OEM jewelry manufacturer in Bangkok, Thailand. 40+ years experience. Natural diamond, lab grown diamond, moissanite & CZ setting. Custom CAD prototype, private label jewelry. Low MOQ 30 pcs.",
  keywords: [
    // Core — เดิม
    "OEM jewelry manufacturer Thailand",
    "custom jewelry manufacturer Bangkok",
    "jewelry manufacturer Thailand",
    "wholesale jewelry Thailand",
    "private label jewelry Thailand",
    "925 silver jewelry manufacturer",
    "gold jewelry manufacturer Thailand",
    // NEW — Keywords ใหม่
    "925 sterling silver jewelry manufacturer Thailand",
    "OEM jewelry manufacturer Bangkok",
    "gold vermeil jewelry manufacturer",
    "lab grown diamond jewelry OEM Thailand",
    "moissanite jewelry OEM Thailand",
    "natural diamond jewelry manufacturer Thailand",
    "CZ jewelry manufacturer Thailand",
    "cubic zirconia jewelry OEM Bangkok",
    "diamond jewelry OEM manufacturer Thailand",
    "custom CAD jewelry prototype manufacturer",
    "private label jewelry manufacturer Thailand",
    "sterling silver OEM manufacturer Bangkok",
    "gold vermeil OEM Bangkok",
    "jewelry prototype manufacturer Thailand",
    // Japan 🇯🇵 — เดิม
    "jewelry manufacturer Thailand Japan",
    "OEM jewelry Japan",
    "silver jewelry factory Asia",
    "jewelry manufacturer for Japanese brands",
    "ジュエリーメーカー タイ",
    // Canada 🇨🇦 — เดิม
    "custom jewelry manufacturer Canada",
    "private label jewelry Canada",
    "jewelry factory Thailand Canada",
    "OEM jewelry Canada",
    // Australia 🇦🇺 — เดิม
    "jewelry manufacturer Bangkok Australia",
    "OEM jewelry Australia",
    "wholesale jewelry Thailand Australia",
    "custom jewelry manufacturer Australia",
    // Germany 🇩🇪 — เดิม
    "Schmuck Hersteller Thailand",
    "OEM Schmuck Thailand",
    "jewelry manufacturer Germany",
    "Schmuck Fabrik Bangkok",
    // General Global — เดิม
    "low MOQ jewelry manufacturer",
    "jewelry factory Bangkok",
    "fine jewelry manufacturer Asia",
    "jewelry casting Thailand",
    "stone setting jewelry Thailand",
  ],
  openGraph: {
    title: "925 Sterling Silver & Gold Vermeil OEM Jewelry Manufacturer | Bangkok, Thailand",
    description:
      "40+ years OEM jewelry manufacturing. 925 sterling silver, gold vermeil, natural diamond, lab grown diamond, moissanite & CZ. Custom CAD prototype & private label jewelry. Bangkok, Thailand. Low MOQ 30 pcs.",
    type: "website",
    locale: "en_US",
    siteName: "P&N Jewelry Limited Partnership",
  },
  alternates: {
    canonical: "https://www.pnjewelrymfg.com",
    languages: {
      "en": "https://www.pnjewelrymfg.com",
      "ja": "https://www.pnjewelrymfg.com/ja",
      "x-default": "https://www.pnjewelrymfg.com",
    },
  },
  verification: {
    google: "lAE1QjmOh2w1Rx7zI4DzGH_i9l1237XlVgNDvmloMwk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJLR0FVKRP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJLR0FVKRP');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
