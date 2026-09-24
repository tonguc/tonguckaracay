import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n.config';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const GA_ID = "G-0YHTLZPKKZ";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const messages = await getMessages();
  const t = (messages as any).metadata;
  
  const baseUrl = 'https://tonguckaracay.com';
  const url = locale === 'tr' ? baseUrl : `${baseUrl}/en`;
  
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.split(', '),
    authors: [{ name: "Tonguç Karaçay" }],
    creator: "Tonguç Karaçay",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        'tr': baseUrl,
        'en': `${baseUrl}/en`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === 'tr' ? "tr_TR" : "en_US",
      url: url,
      siteName: "Tonguç Karaçay",
      title: t.title,
      description: t.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Person Schema — E-E-A-T + AIO authorship signals */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com",
              "image": "https://tonguckaracay.com/tonguc-karacay.jpg",
              "jobTitle": "SEO, GEO & UX Growth Consultant",
              "description": "E-ticaret ve hizmet şirketlerine SEO, GEO, UX ve yapay zeka otomasyonuyla trafik ve gelir büyümesi sağlayan, 25+ yıllık deneyime sahip bağımsız danışman. Türk Hava Yolları, BMW ve Borusan Otomotiv gibi markalarla çalıştı.",
              "knowsAbout": [
                "SEO", "Generative Engine Optimization", "UX Design",
                "Conversion Rate Optimization", "AI Automation", "Google Ads",
                "Social Media Management", "E-commerce", "Web Analytics"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Tonguç Karaçay Danışmanlık"
              },
              "sameAs": [
                "https://www.linkedin.com/in/tongu%C3%A7-kara%C3%A7ay-36311040/",
                "https://www.instagram.com/tonguckaracay",
                "https://www.behance.net/tonguc"
              ]
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com",
              "logo": "https://tonguckaracay.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/in/tongu%C3%A7-kara%C3%A7ay-36311040/",
                "https://www.instagram.com/tonguckaracay",
                "https://www.behance.net/tonguc"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Turkish", "English"]
              }
            })
          }}
        />

        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://tonguckaracay.com/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Google Analytics - must be in head for Search Console verification */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
