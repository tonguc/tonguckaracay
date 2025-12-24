/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tonguckaracay.com',
      },
    ],
  },
  trailingSlash: true,
  
  // 301 Redirects - Eski URL'lerden yeni URL'lere
  async redirects() {
    return [
      // Blog yazıları redirect'leri
      {
        source: '/seo-nedir-seo-calismalari-nasil-yapilir',
        destination: '/blog/seo-nedir-nasil-yapilir',
        permanent: true,
      },
      {
        source: '/kaliteli-backlink-nedir-nasil-alinir',
        destination: '/blog/backlink-nedir-nasil-alinir',
        permanent: true,
      },
      {
        source: '/ui-ux-designer-nedir-nasil-calisirlar',
        destination: '/blog/ui-ux-designer-nedir',
        permanent: true,
      },
      {
        source: '/google-analytics-ile-site-optimizasyonu',
        destination: '/blog/google-analytics-ile-site-optimizasyonu',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama-stratejileri-ve-araclari',
        destination: '/blog/dijital-pazarlama-stratejileri',
        permanent: true,
      },
      {
        source: '/inbound-marketing-nedir-nasil-yapilir',
        destination: '/blog/inbound-marketing-nedir',
        permanent: true,
      },
      {
        source: '/kullanmaniz-gereken-seo-araclari-nelerdir-nasil-kullanilir',
        destination: '/blog/seo-araclari-rehberi',
        permanent: true,
      },
      {
        source: '/seo-ile-organik-trafigi-artirmanin-yontemleri',
        destination: '/blog/organik-trafik-artirma',
        permanent: true,
      },
      {
        source: '/seoda-organik-trafigi-arttirmanin-yontemleri',
        destination: '/blog/organik-trafik-artirma',
        permanent: true,
      },
      {
        source: '/serp-nedir',
        destination: '/blog/serp-nedir',
        permanent: true,
      },
      {
        source: '/heading-tags-nedir',
        destination: '/blog/heading-tags-h1-etiketi',
        permanent: true,
      },
      {
        source: '/seo-uyumlu-icerik-nasil-yazilir',
        destination: '/blog/seo-uyumlu-icerik',
        permanent: true,
      },
      {
        source: '/profesyonel-seo-uzmani-nedir-nasil-olunur',
        destination: '/blog/profesyonel-seo-uzmani',
        permanent: true,
      },
      {
        source: '/dropshipping-ile-dijital-pazarlama',
        destination: '/blog/dropshipping-dijital-pazarlama',
        permanent: true,
      },
      {
        source: '/icerik-pazarlamasinda-kalite-ozgunluk-ve-seo-optimizasyonu',
        destination: '/blog/icerik-pazarlamasi-seo',
        permanent: true,
      },
      {
        source: '/icerik-pazarlamasi-ve-seo-optimizasyonu',
        destination: '/blog/icerik-pazarlamasi-seo',
        permanent: true,
      },
      {
        source: '/sosyal-medya-yonetimi-ve-online-pazarlama',
        destination: '/blog/sosyal-medya-pazarlama',
        permanent: true,
      },
      {
        source: '/en-etkili-dijital-pazarlama-yontemleri',
        destination: '/blog/dijital-pazarlama-yontemleri',
        permanent: true,
      },
      {
        source: '/site-ici-seo-nasil-yapilir',
        destination: '/blog/on-page-seo-rehberi',
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
    ];
  },
};

module.exports = nextConfig;
