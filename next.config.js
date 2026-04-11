const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tonguckaracay.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: true,
  
  // 301 Redirects - Eski URL'lerden yeni URL'lere (gerçek slug'larla eşleştirildi)
  async redirects() {
    return [
      // Blog yazıları redirect'leri
      {
        source: '/seo-nedir-seo-calismalari-nasil-yapilir',
        destination: '/seo-nedir-nasil-yapilir',
        permanent: true,
      },
      {
        source: '/kaliteli-backlink-nedir-nasil-alinir-old',
        destination: '/kaliteli-backlink-nedir-nasil-alinir',
        permanent: true,
      },
      {
        source: '/ui-ux-designer-nedir-nasil-calisirlar-old',
        destination: '/ui-ux-designer-nedir-nasil-calisirlar',
        permanent: true,
      },
      {
        source: '/google-analytics-ile-site-optimizasyonu-old',
        destination: '/google-analytics-ile-site-optimizasyonu',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama-stratejileri-ve-araclari-old',
        destination: '/dijital-pazarlama-stratejileri-ve-araclari',
        permanent: true,
      },
      {
        source: '/inbound-marketing-nedir-nasil-yapilir-old',
        destination: '/inbound-marketing-nedir-nasil-yapilir',
        permanent: true,
      },
      {
        source: '/kullanmaniz-gereken-seo-araclari-nelerdir-nasil-kullanilir',
        destination: '/kullanmaniz-gereken-seo-araclari',
        permanent: true,
      },
      {
        source: '/seo-ile-organik-trafigi-artirmanin-yontemleri-old',
        destination: '/seo-ile-organik-trafigi-artirmanin-yontemleri',
        permanent: true,
      },
      {
        source: '/seoda-organik-trafigi-arttirmanin-yontemleri',
        destination: '/seo-ile-organik-trafigi-artirmanin-yontemleri',
        permanent: true,
      },
      {
        source: '/serp-nedir-old',
        destination: '/serp-nedir-google-icin-neden-onemlidir',
        permanent: true,
      },
      {
        source: '/heading-tags-nedir',
        destination: '/heading-tags-nedir-h1-etiketi-nasil-kullanilir',
        permanent: true,
      },
      {
        source: '/kaliteli-ve-ozgun-icerigin-seo-icin-onemi-old',
        destination: '/kaliteli-ve-ozgun-icerigin-seo-icin-onemi',
        permanent: true,
      },
      {
        source: '/profesyonel-seo-uzmani-nedir-nasil-olunur-old',
        destination: '/profesyonel-seo-uzmani-nedir-nasil-olunur',
        permanent: true,
      },
      {
        source: '/dropshipping-ile-dijital-pazarlama-old',
        destination: '/dropshipping-ile-dijital-pazarlama',
        permanent: true,
      },
      {
        source: '/icerik-pazarlamasinda-kalite-ozgunluk-ve-seo-optimizasyonu',
        destination: '/icerik-pazarlamasi-ve-seo-optimizasyonu',
        permanent: true,
      },
      {
        source: '/icerik-pazarlamasi-ve-seo-optimizasyonu-old',
        destination: '/icerik-pazarlamasi-ve-seo-optimizasyonu',
        permanent: true,
      },
      {
        source: '/sosyal-medya-yonetimi-ve-online-pazarlama-old',
        destination: '/sosyal-medya-yonetimi-ve-online-pazarlama',
        permanent: true,
      },
      {
        source: '/en-etkili-dijital-pazarlama-yontemleri-old',
        destination: '/en-etkili-dijital-pazarlama-yontemleri',
        permanent: true,
      },
      {
        source: '/site-ici-seo-nasil-yapilir-old',
        destination: '/site-ici-seo-nasil-yapilir',
        permanent: true,
      },
      // Kategori sayfaları
      {
        source: '/seo',
        destination: '/blog?kategori=seo',
        permanent: true,
      },
      {
        source: '/ui-ux-designer',
        destination: '/blog?kategori=ui-ux',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama',
        destination: '/blog?kategori=dijital-pazarlama',
        permanent: true,
      },
      {
        source: '/e-ticaret',
        destination: '/blog?kategori=e-ticaret',
        permanent: true,
      },
      // Yazar sayfası
      {
        source: '/author/tkaracay',
        destination: '/hakkimda',
        permanent: true,
      },
      // Blog URL yapısı değişikliği: /blog/[slug] → /[slug]
      {
        source: '/blog/:slug*',
        destination: '/:slug*',
        permanent: true,
      },
      {
        source: '/en/blog/:slug*',
        destination: '/en/:slug*',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
