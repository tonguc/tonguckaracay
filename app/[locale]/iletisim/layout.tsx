import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "İletişim & Ücretsiz SEO Ön Analizi | Tonguç Karaçay",
  description: "Sitenizin SEO, GEO ve dönüşüm tarafındaki en büyük fırsatları için ücretsiz ön analiz isteyin ya da projenizi anlatın. 24 saat içinde dönüş yapıyorum.",
  alternates: {
    canonical: 'https://tonguckaracay.com/iletisim',
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children;
}
