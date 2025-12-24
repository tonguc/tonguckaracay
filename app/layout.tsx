import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Google Analytics ID
const GA_ID = "G-0YHTLZPKKZ";

export const metadata: Metadata = {
  title: "Tonguç Karaçay | AI-Driven UX & Growth Partner",
  description: "UI/UX Tasarım, SEO, Online Reklamcılık ve Yapay Zeka çözümleriyle işletmenizi dijitalde büyütüyorum. 25+ yıl deneyim, THY, BMW, Galatasaray gibi 35+ marka.",
  keywords: ["UI/UX tasarım", "SEO danışmanlığı", "dijital pazarlama", "yapay zeka çözümleri", "online reklamcılık", "growth hacking"],
  authors: [{ name: "Tonguç Karaçay" }],
  creator: "Tonguç Karaçay",
  metadataBase: new URL("https://tonguckaracay.com"),
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
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE", // Google Search Console doğrulama kodu ekle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
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
