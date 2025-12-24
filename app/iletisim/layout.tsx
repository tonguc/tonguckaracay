import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Tonguç Karaçay - AI-Driven UX & Growth Partner",
  description: "UI/UX tasarım, SEO danışmanlığı ve yapay zeka çözümleri için benimle iletişime geçin. Ücretsiz ön görüşme için form doldurun.",
  keywords: "iletişim, UI UX tasarım teklif, SEO danışmanlık, dijital pazarlama danışmanı",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
