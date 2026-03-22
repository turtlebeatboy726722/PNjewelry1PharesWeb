import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "P&N Jewelry | OEM Jewelry Manufacturer Thailand",
    template: "%s | P&N Jewelry",
  },
  description:
    "P&N Jewelry Limited Partnership — OEM jewelry manufacturer in Thailand with 40+ years experience. Specializing in rings, necklaces, and bracelets for global brands. Low MOQ 50 pcs.",
  keywords: [
    "OEM jewelry manufacturer Thailand",
    "custom jewelry manufacturer",
    "jewelry manufacturer Bangkok",
    "wholesale jewelry Thailand",
    "private label jewelry",
    "925 silver jewelry manufacturer",
    "gold jewelry manufacturer Thailand",
  ],
  openGraph: {
    title: "P&N Jewelry | OEM Jewelry Manufacturer Thailand",
    description:
      "40+ years of OEM jewelry manufacturing excellence. Serving global brands with precision craftsmanship.",
    type: "website",
    locale: "en_US",
    siteName: "P&N Jewelry Limited Partnership",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
