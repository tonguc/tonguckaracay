import { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isEN = locale === 'en';
  return {
    title: isEN
      ? 'Terms of Service | Tonguç Karaçay'
      : 'Kullanım Koşulları | Tonguç Karaçay',
    description: isEN
      ? 'Terms of service for tonguckaracay.com. Please read these terms before using this website.'
      : 'tonguckaracay.com kullanım koşulları. Bu web sitesini kullanmadan önce lütfen bu koşulları okuyun.',
    alternates: {
      canonical: isEN
        ? 'https://tonguckaracay.com/en/terms-of-service'
        : 'https://tonguckaracay.com/kullanim-kosullari',
      languages: {
        tr: 'https://tonguckaracay.com/kullanim-kosullari',
        en: 'https://tonguckaracay.com/en/terms-of-service',
      },
    },
  };
}

export default function TermsOfServicePage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const isEN = locale === 'en';

  return (
    <main className="pt-20">
      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-8">
            <Link href={isEN ? '/en' : '/'} className="hover:text-white transition-colors">
              {isEN ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white">{isEN ? 'Terms of Service' : 'Kullanım Koşulları'}</span>
          </nav>

          <h1 className="font-display text-4xl font-bold text-white mb-4">
            {isEN ? 'Terms of Service' : 'Kullanım Koşulları'}
          </h1>
          <p className="text-primary-400 text-sm mb-10">
            {isEN ? 'Last updated: April 24, 2026' : 'Son güncelleme: 24 Nisan 2026'}
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-primary-300">
            {isEN ? (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                  <p>By accessing and using tonguckaracay.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
                  <p>This website provides information about professional consulting services offered by Tonguç Karaçay, including UI/UX design, SEO consulting, digital marketing, AI solutions, and social media consulting. The content on this site is for informational purposes only.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
                  <p>All content on this website — including text, graphics, logos, images, and blog articles — is the property of Tonguç Karaçay and is protected by applicable copyright laws. You may not reproduce, distribute, or create derivative works without prior written permission.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Contact Form</h2>
                  <p>The contact form on this website is provided for legitimate business inquiries only. By submitting the form, you consent to being contacted in response to your inquiry. Spam or unsolicited commercial messages are prohibited.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. Disclaimer</h2>
                  <p>The information on this website is provided in good faith and for general informational purposes only. Tonguç Karaçay makes no representations or warranties of any kind regarding the accuracy, completeness, or suitability of the information.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. External Links</h2>
                  <p>This website may contain links to third-party websites. These links are provided for convenience only. Tonguç Karaçay has no control over the content of those sites and accepts no responsibility for them.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. Governing Law</h2>
                  <p>These terms are governed by the laws of the Republic of Turkey. Any disputes arising from the use of this website shall be subject to the jurisdiction of Istanbul courts.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
                  <p>These terms may be updated periodically. The date at the top of this page reflects the most recent revision. Continued use of the website constitutes acceptance of the updated terms.</p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Koşulların Kabulü</h2>
                  <p>tonguckaracay.com'a erişerek ve kullanarak bu Kullanım Koşulları'nı kabul etmiş olursunuz. Bu koşulları kabul etmiyorsanız lütfen bu web sitesini kullanmayın.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Hizmetler</h2>
                  <p>Bu web sitesi, Tonguç Karaçay tarafından sunulan UI/UX tasarım, SEO danışmanlığı, dijital pazarlama, yapay zeka çözümleri ve sosyal medya danışmanlığı hizmetleri hakkında bilgi sunmaktadır. Sitedeki içerik yalnızca bilgilendirme amaçlıdır.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Fikri Mülkiyet</h2>
                  <p>Bu web sitesindeki tüm içerik — metin, grafik, logo, görsel ve blog yazıları dahil — Tonguç Karaçay'ın mülkiyetinde olup ilgili telif hakkı yasalarıyla korunmaktadır. Önceden yazılı izin almaksızın çoğaltma, dağıtma veya türev çalışmalar oluşturamazsınız.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. İletişim Formu</h2>
                  <p>Bu web sitesindeki iletişim formu yalnızca meşru iş sorguları için sunulmaktadır. Formu göndererek talebinize yanıt alabilmek için iletişime geçilmesine onay vermiş olursunuz. Spam veya istenmeyen ticari mesajlar yasaktır.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. Sorumluluk Reddi</h2>
                  <p>Bu web sitesindeki bilgiler iyi niyetle ve yalnızca genel bilgilendirme amacıyla sunulmaktadır. Tonguç Karaçay, bilgilerin doğruluğu, eksiksizliği veya uygunluğu konusunda hiçbir garanti vermemektedir.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. Dış Bağlantılar</h2>
                  <p>Bu web sitesi üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kolaylık sağlamak amacıyla verilmiştir. Tonguç Karaçay, bu sitelerin içeriği üzerinde hiçbir kontrole sahip değildir ve bunlar için hiçbir sorumluluk kabul etmez.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. Geçerli Hukuk</h2>
                  <p>Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Bu web sitesinin kullanımından doğacak anlaşmazlıklar İstanbul mahkemelerinin yargı yetkisine tabi olacaktır.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">8. Koşullardaki Değişiklikler</h2>
                  <p>Bu koşullar periyodik olarak güncellenebilir. Bu sayfanın üstündeki tarih en son revizyonu yansıtmaktadır. Web sitesini kullanmaya devam etmeniz güncellenmiş koşulları kabul ettiğiniz anlamına gelir.</p>
                </section>
              </>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-surface-border">
            <Link
              href={isEN ? '/en/contact' : '/iletisim'}
              className="text-accent-400 hover:underline"
            >
              {isEN ? '← Back to Contact' : '← İletişime Dön'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
                  }
