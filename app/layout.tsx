import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio - Agence Développement Apps Mobiles",
  description: "Créateur d'applications mobiles performantes pour les entreprises. Design UX/UX award-winning, développement natif et cross-platform, support complet.",
  viewport: "width=device-width, initial-scale=1",
  keywords: ["applications mobiles", "développement app", "agence mobile", "iOS", "Android"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#0A0E27" />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
