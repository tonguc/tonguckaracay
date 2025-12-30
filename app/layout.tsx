import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://tonguckaracay.com'),
  title: {
    default: "Tonguç Karaçay | UI/UX Tasarım, SEO, Dijital Pazarlama Uzmanı",
    template: "%s | Tonguç Karaçay"
  },
  description: "Profesyonel UI/UX tasarım, SEO danışmanlığı, dijital pazarlama ve AI çözümleri. 25+ yıl deneyim.",
  keywords: [
    "UI/UX tasarım",
    "SEO danışmanlığı",
    "dijital pazarlama",
    "web tasarım",
    "kullanıcı deneyimi",
    "arama motoru optimizasyonu",
    "AI çözümleri",
    "sosyal medya yönetimi"
  ],
  authors: [{ name: "Tonguç Karaçay" }],
  creator: "Tonguç Karaçay",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tonguckaracay.com",
    siteName: "Tonguç Karaçay",
    title: "Tonguç Karaçay | UI/UX Tasarım, SEO, Dijital Pazarlama",
    description: "Profesyonel UI/UX tasarım, SEO danışmanlığı ve dijital pazarlama hizmetleri",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tonguç Karaçay - Dijital Çözümler"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonguç Karaçay | Dijital Çözümler",
    description: "UI/UX Tasarım, SEO, Dijital Pazarlama Uzmanı",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "G-0YHTLZPKKZ",
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
