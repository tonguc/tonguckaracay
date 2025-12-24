import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tonguç Karaçay | SEO ve Dijital Pazarlama Uzmanı",
  description: "SEO, UI/UX Tasarım, Online Reklamcılık ve Yapay Zeka çözümleriyle işletmenizi dijitalde büyütüyorum. 10+ yıl deneyim, 120+ başarılı proje.",
  keywords: ["SEO danışmanlığı", "dijital pazarlama", "UI/UX tasarım", "yapay zeka çözümleri", "online reklamcılık", "sosyal medya yönetimi"],
  authors: [{ name: "Tonguç Karaçay" }],
  creator: "Tonguç Karaçay",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tonguckaracay.com",
    siteName: "Tonguç Karaçay",
    title: "Tonguç Karaçay | SEO ve Dijital Pazarlama Uzmanı",
    description: "SEO, UI/UX Tasarım, Online Reklamcılık ve Yapay Zeka çözümleriyle işletmenizi dijitalde büyütüyorum.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonguç Karaçay | SEO ve Dijital Pazarlama Uzmanı",
    description: "SEO, UI/UX Tasarım, Online Reklamcılık ve Yapay Zeka çözümleriyle işletmenizi dijitalde büyütüyorum.",
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
