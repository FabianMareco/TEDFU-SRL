import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "TEDFU S.R.L. — Constructora | Obra civil, infraestructura ferroviaria y mantenimiento en Buenos Aires",
    template: "%s | TEDFU S.R.L.",
  },
  description:
    "Constructora con 10 años de trayectoria en obras públicas y privadas en AMBA: infraestructura ferroviaria, instituciones educativas, edificios y obra civil. Pedí tu presupuesto.",
  keywords: [
    "constructora Buenos Aires",
    "obra civil AMBA",
    "infraestructura ferroviaria",
    "mantenimiento edilicio",
    "reformas",
    "demoliciones",
    "obra llave en mano",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "TEDFU S.R.L.",
    title: "TEDFU S.R.L. — Constructora con 10 años de trayectoria",
    description:
      "Infraestructura ferroviaria, obra civil, instituciones y edificios. Obras públicas y privadas en AMBA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
