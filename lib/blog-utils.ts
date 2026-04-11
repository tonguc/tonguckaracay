import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
  content: string;
  translationSlug?: string;
  faq?: FAQItem[];
}

const contentDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog posts for a specific locale
 */
export function getAllPosts(locale: 'tr' | 'en' = 'tr'): BlogPost[] {
  const postsDirectory = path.join(contentDirectory, locale);
  
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Blog directory not found: ${postsDirectory}`);
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: data.slug || fileName.replace(/\.md$/, ''),
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        updatedDate: data.updatedDate,
        category: data.category || '',
        tags: data.tags || [],
        readTime: data.readTime || '',
        image: data.image || '',
        content: content,
        translationSlug: data.translationSlug,
        faq: data.faq || undefined,
      } as BlogPost;
    });
  
  // Sort by date (newest first), same date → alphabetical slug
  return posts.sort((a, b) => {
    const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
    return diff !== 0 ? diff : a.slug.localeCompare(b.slug);
  });
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string, locale: 'tr' | 'en' = 'tr'): BlogPost | undefined {
  const posts = getAllPosts(locale);
  return posts.find(post => post.slug === slug);
}

/**
 * Get featured posts (returns first 6 posts by date)
 */
export function getFeaturedPosts(locale: 'tr' | 'en' = 'tr'): BlogPost[] {
  return getAllPosts(locale).slice(0, 6);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string, locale: 'tr' | 'en' = 'tr'): BlogPost[] {
  return getAllPosts(locale).filter(post => post.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(locale: 'tr' | 'en' = 'tr'): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

/**
 * Get all unique tags
 */
export function getAllTags(locale: 'tr' | 'en' = 'tr'): string[] {
  const posts = getAllPosts(locale);
  const tags = new Set(posts.flatMap(post => post.tags));
  return Array.from(tags);
}

/**
 * Get all slugs for static generation
 */
export function getAllSlugs(locale: 'tr' | 'en' = 'tr'): string[] {
  return getAllPosts(locale).map(post => post.slug);
}

/**
 * Get related posts based on category and tags
 */
export function getRelatedPosts(currentSlug: string, locale: 'tr' | 'en' = 'tr', limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug, locale);
  if (!currentPost) return [];

  const allPosts = getAllPosts(locale).filter(post => post.slug !== currentSlug);

  const related = allPosts.filter(post =>
    post.category === currentPost.category ||
    post.tags.some(tag => currentPost.tags.includes(tag))
  ).slice(0, limit);

  if (related.length >= limit) return related;

  // Yeterli ilgili yazı yoksa en son yazılarla tamamla
  const relatedSlugs = new Set(related.map(p => p.slug));
  const fallback = allPosts
    .filter(post => !relatedSlugs.has(post.slug))
    .slice(0, limit - related.length);

  return [...related, ...fallback];
}

/**
 * Get translation slug mapping
 */
export function getSlugMapping(): { trToEn: Record<string, string>; enToTr: Record<string, string> } {
  const trPosts = getAllPosts('tr');
  const enPosts = getAllPosts('en');
  
  const trToEn: Record<string, string> = {};
  const enToTr: Record<string, string> = {};
  
  // Build mapping from TR posts
  trPosts.forEach(post => {
    if (post.translationSlug) {
      trToEn[post.slug] = post.translationSlug;
    }
  });
  
  // Build reverse mapping from EN posts
  enPosts.forEach(post => {
    if (post.translationSlug) {
      enToTr[post.slug] = post.translationSlug;
    }
  });
  
  return { trToEn, enToTr };
}

/**
 * Get translated slug
 */
export function getTranslatedSlug(slug: string, fromLocale: 'tr' | 'en', toLocale: 'tr' | 'en'): string {
  if (fromLocale === toLocale) return slug;
  
  const { trToEn, enToTr } = getSlugMapping();
  
  if (fromLocale === 'tr' && toLocale === 'en') {
    return trToEn[slug] || slug;
  }
  
  if (fromLocale === 'en' && toLocale === 'tr') {
    return enToTr[slug] || slug;
  }
  
  return slug;
}
