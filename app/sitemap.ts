import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog-utils';
import { aiProjects } from '@/lib/ai-projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tonguckaracay.com';
  // Only signal an actual publication/update date, never the deployment time.
  const modifiedDate = (value: string | undefined): Date | undefined => {
    if (!value) return undefined;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
  };

  // Static pages - TR
  const staticPagesTR = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/hakkimda`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/iletisim`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/projeler`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/hizmetler/geo-optimizasyonu`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/ui-ux-tasarim`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/seo-danismanligi`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/online-reklamcilik`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/yapay-zeka-cozumleri`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler/sosyal-medya-yonetimi`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ai-egitimi`, changeFrequency: 'monthly' as const, priority: 0.9 },
  ];

  // Static pages - EN
  const staticPagesEN = [
    { url: `${baseUrl}/en`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/en/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/blog`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/case-studies`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/services/geo-optimization`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/en/terms-of-service`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/en/services/ui-ux-design`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/seo-consulting`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/online-advertising`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/ai-solutions`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/social-media-management`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/ai-training`, changeFrequency: 'monthly' as const, priority: 0.9 },
  ];

  // Blog posts use frontmatter dates, not deployment timestamps.
  const blogPostsTR = getAllPosts('tr').map(post => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: modifiedDate(post.updatedDate || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPostsEN = getAllPosts('en').map(post => ({
    url: `${baseUrl}/en/${post.slug}`,
    lastModified: modifiedDate(post.updatedDate || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPagesTR,
    ...staticPagesEN,
    ...blogPostsTR,
    ...blogPostsEN,
    ...aiProjects.flatMap((p) => ([
      { url: `${baseUrl}/ai-projects/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 },
      { url: `${baseUrl}/en/ai-projects/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 },
    ])),
  ];
     }
