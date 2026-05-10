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
  verification: {
    google: "lAE1QjmOh2w1Rx7zI4DzGH_i9l1237XlVgNDvmloMwk",
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
        <a
          href="https://wa.me/66617898877"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.428a.75.75 0 00.921.921l5.6-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 01-4.964-1.366l-.356-.211-3.824 1.001 1.001-3.824-.211-.356A9.695 9.695 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
        </a>
      </body>
    </html>
  );
}