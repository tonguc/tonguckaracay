import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog-utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tonguckaracay.com';
  const now = new Date();

  // Static pages - TR
  const staticPagesTR = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/hakkimda`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/iletisim`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/gizlilik-politikasi`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/kullanim-kosullari`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/hizmetler/ui-ux-tasarim`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/seo-danismanligi`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/online-reklamcilik`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/yapay-zeka-cozumleri`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/sosyal-medya-yonetimi`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  // Static pages - EN
  const staticPagesEN = [
    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/en/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/privacy-policy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/en/terms-of-service`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/en/services/ui-ux-design`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/seo-consulting`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/online-advertising`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/ai-solutions`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/social-media-management`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  // Blog posts - TR (canonical: /slug, no /blog/ prefix)
  const trSlugs = getAllSlugs('tr');
  const blogPostsTR = trSlugs.map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog posts - EN (canonical: /en/slug, no /en/blog/ prefix)
  const enSlugs = getAllSlugs('en');
  const blogPostsEN = enSlugs.map(slug => ({
    url: `${baseUrl}/en/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPagesTR,
    ...staticPagesEN,
    ...blogPostsTR,
    ...blogPostsEN,
  ];
     }
