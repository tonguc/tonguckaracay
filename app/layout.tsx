import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tonguç Karaçay | AI-Driven UX & Growth Partner",
  description: "UI/UX Tasarım, SEO, Online Reklamcılık ve Yapay Zeka çözümleriyle işletmenizi dijitalde büyütüyorum. 25+ yıl deneyim, THY, BMW, Galatasaray gibi 35+ marka.",
  keywords: ["UI/UX tasarım", "SEO danışmanlığı", "dijital pazarlama", "yapay zeka çözümleri", "online reklamcılık", "growth hacking"],
  authors: [{ name: "Tonguç Karaçay" }],
  creator: "Tonguç Karaçay",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tonguckaracay.com",
    siteName: "Tonguç Karaçay",
    title: "Tonguç Karaçay | AI-Driven UX & Growth Partner",
    description: "UI/UX Tasarım, SEO ve Yapay Zeka çözümleriyle işletmenizi dijitalde büyütüyorum. 25+ yıl deneyim.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonguç Karaçay | AI-Driven UX & Growth Partner",
    description: "UI/UX Tasarım, SEO ve Yapay Zeka çözümleriyle işletmenizi dijitalde büyütüyorum. 25+ yıl deneyim.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
