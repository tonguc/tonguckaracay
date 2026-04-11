import { redirect } from 'next/navigation';
import { getAllSlugs } from '@/lib/blog-utils';

type Props = { params: { locale: 'tr' | 'en'; slug: string } };

export async function generateStaticParams() {
  return [
    ...getAllSlugs('tr').map(slug => ({ locale: 'tr', slug })),
    ...getAllSlugs('en').map(slug => ({ locale: 'en', slug })),
  ];
}

export default function BlogPostRedirect({ params: { locale, slug } }: Props) {
  redirect(locale === 'en' ? `/en/${slug}` : `/${slug}`);
}
