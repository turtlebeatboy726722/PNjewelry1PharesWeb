import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "P&N Jewelry | OEM Jewelry Manufacturer Thailand",
    template: "%s | P&N Jewelry",
  },
  description:
    "P&N Jewelry Limited Partnership — OEM jewelry manufacturer in Thailand with 40+ years experience. Specializing in rings, necklaces, and bracelets for global brands. Low MOQ 30 pcs.",
  keywords: [
    // Core
    "OEM jewelry manufacturer Thailand",
    "custom jewelry manufacturer Bangkok",
    "jewelry manufacturer Thailand",
    "wholesale jewelry Thailand",
    "private label jewelry Thailand",
    "925 silver jewelry manufacturer",
    "gold jewelry manufacturer Thailand",
    // Japan 🇯🇵
    "jewelry manufacturer Thailand Japan",
    "OEM jewelry Japan",
    "silver jewelry factory Asia",
    "jewelry manufacturer for Japanese brands",
    "ジュエリーメーカー タイ",
    // Canada 🇨🇦
    "custom jewelry manufacturer Canada",
    "private label jewelry Canada",
    "jewelry factory Thailand Canada",
    "OEM jewelry Canada",
    // Australia 🇦🇺
    "jewelry manufacturer Bangkok Australia",
    "OEM jewelry Australia",
    "wholesale jewelry Thailand Australia",
    "custom jewelry manufacturer Australia",
    // Germany 🇩🇪
    "Schmuck Hersteller Thailand",
    "OEM Schmuck Thailand",
    "jewelry manufacturer Germany",
    "Schmuck Fabrik Bangkok",
    // General Global
    "low MOQ jewelry manufacturer",
    "jewelry factory Bangkok",
    "fine jewelry manufacturer Asia",
    "jewelry casting Thailand",
    "stone setting jewelry Thailand",
  ],
  openGraph: {
    title: "P&N Jewelry | OEM Jewelry Manufacturer Thailand",
    description:
      "40+ years of OEM jewelry manufacturing excellence. Serving global brands in Japan, Canada, Australia, Germany and beyond. Low MOQ 30 pcs.",
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
      </body>
    </html>
  );
}
