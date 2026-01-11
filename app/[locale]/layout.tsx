import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n.config';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <link rel="alternate" hrefLang="tr" href="https://tonguckaracay.com" />
        <link rel="alternate" hrefLang="en" href="https://tonguckaracay.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://tonguckaracay.com" />
        
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
