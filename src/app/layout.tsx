import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/data/company";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.shortName} — Premium Commercial Cleaning Services in Dubai`,
    template: `%s — ${company.shortName} Cleaning Services`,
  },
  description:
    "Rawdah Al Jazira T A Cleaning Services L.L.C delivers premium commercial cleaning across Dubai — universities, malls, hospitals, offices, hotels, mosques and more. Ladies & gents cleaners on monthly and yearly contracts.",
  keywords: [
    "cleaning services Dubai",
    "commercial cleaning Dubai",
    "office cleaning Dubai",
    "mall cleaning",
    "university cleaning",
    "marble polishing Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: company.shortName,
    title: `${company.shortName} — Premium Commercial Cleaning Services in Dubai`,
    description:
      "Premium commercial cleaning across Dubai — universities, malls, hospitals, offices, hotels and more. Monthly & yearly contracts.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
