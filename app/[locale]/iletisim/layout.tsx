import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Danışmanlığı & İletişim | Tonguç Karaçay',
  description: 'SEO ve dijital pazarlama projeniz için ücretsiz danışmanlık görüşmesi alın. 25+ yıllık deneyim, Google Ads, UI/UX ve yapay zeka çözümleri.',
  alternates: {
    canonical: 'https://tonguckaracay.com/iletisim',
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children;
}
