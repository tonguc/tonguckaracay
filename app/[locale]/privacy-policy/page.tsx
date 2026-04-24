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
      ? 'Privacy Policy | Tonguç Karaçay'
      : 'Gizlilik Politikası | Tonguç Karaçay',
    description: isEN
      ? 'Privacy policy for tonguckaracay.com. Learn how your data is collected, used, and protected.'
      : 'tonguckaracay.com gizlilik politikası. Verilerinizin nasıl toplandığı, kullanıldığı ve korunduğunu öğrenin.',
    alternates: {
      canonical: isEN
        ? 'https://tonguckaracay.com/en/privacy-policy'
        : 'https://tonguckaracay.com/gizlilik-politikasi',
      languages: {
        tr: 'https://tonguckaracay.com/gizlilik-politikasi',
        en: 'https://tonguckaracay.com/en/privacy-policy',
      },
    },
  };
}

export default function PrivacyPolicyPage({ params: { locale } }: Props) {
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
            <span className="text-white">{isEN ? 'Privacy Policy' : 'Gizlilik Politikası'}</span>
          </nav>

          <h1 className="font-display text-4xl font-bold text-white mb-4">
            {isEN ? 'Privacy Policy' : 'Gizlilik Politikası'}
          </h1>
          <p className="text-primary-400 text-sm mb-10">
            {isEN ? 'Last updated: April 24, 2026' : 'Son güncelleme: 24 Nisan 2026'}
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-primary-300">
            {isEN ? (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Data Controller</h2>
                  <p>This website is operated by Tonguç Karaçay, an independent digital consultant based in Istanbul, Turkey. Contact: <a href="mailto:tkaracay@gmail.com" className="text-accent-400 hover:underline">tkaracay@gmail.com</a></p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Data Collected</h2>
                  <p>When you use the contact form on this website, the following information is collected: your name, email address, and message content. This data is used solely to respond to your inquiry.</p>
                  <p className="mt-3">This website also uses Google Analytics to collect anonymous traffic data such as page views, session duration, and geographic location. No personally identifiable information is collected through analytics.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Cookies</h2>
                  <p>This website uses a language preference cookie (<code className="text-accent-400">NEXT_LOCALE</code>) to remember your language selection. This cookie does not track personal data and expires after 1 year. Google Analytics may set additional cookies for traffic measurement purposes.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
                  <p>Contact form submissions are processed via <strong className="text-white">Resend</strong> (resend.com). Analytics data is processed via <strong className="text-white">Google Analytics</strong>. Both services operate under their own privacy policies.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
                  <p>Your personal data is never sold, rented, or shared with third parties for marketing purposes. Data is only shared with service providers listed above to the extent necessary to operate this website.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
                  <p>Under GDPR and applicable Turkish law (KVKK), you have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact: <a href="mailto:tkaracay@gmail.com" className="text-accent-400 hover:underline">tkaracay@gmail.com</a></p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
                  <p>This privacy policy may be updated periodically. The date at the top of this page reflects the most recent revision.</p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Veri Sorumlusu</h2>
                  <p>Bu web sitesi İstanbul, Türkiye merkezli bağımsız dijital danışman Tonguç Karaçay tarafından işletilmektedir. İletişim: <a href="mailto:tkaracay@gmail.com" className="text-accent-400 hover:underline">tkaracay@gmail.com</a></p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Toplanan Veriler</h2>
                  <p>Bu web sitesindeki iletişim formunu kullandığınızda adınız, e-posta adresiniz ve mesaj içeriğiniz toplanmaktadır. Bu veriler yalnızca talebinize yanıt vermek amacıyla kullanılmaktadır.</p>
                  <p className="mt-3">Site ayrıca Google Analytics aracılığıyla sayfa görüntülemeleri, oturum süresi ve coğrafi konum gibi anonim trafik verilerini toplamaktadır. Analitik yoluyla kişisel olarak tanımlanabilir bilgi toplanmamaktadır.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Çerezler</h2>
                  <p>Bu site, dil tercihinizi hatırlamak için bir dil çerezi (<code className="text-accent-400">NEXT_LOCALE</code>) kullanmaktadır. Bu çerez kişisel veri takibi yapmaz ve 1 yıl sonra sona erer. Google Analytics trafik ölçümü amacıyla ek çerezler de yerleştirebilir.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Üçüncü Taraf Hizmetleri</h2>
                  <p>İletişim formu gönderimleri <strong className="text-white">Resend</strong> (resend.com) aracılığıyla işlenmektedir. Analitik veriler <strong className="text-white">Google Analytics</strong> aracılığıyla işlenmektedir. Her iki hizmet de kendi gizlilik politikaları kapsamında faaliyet göstermektedir.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. Veri Paylaşımı</h2>
                  <p>Kişisel verileriniz pazarlama amacıyla hiçbir üçüncü tarafla satılmaz, kiralanmaz veya paylaşılmaz. Veriler yalnızca bu web sitesini işletmek için gerekli olan yukarıda listelenen hizmet sağlayıcılarıyla paylaşılmaktadır.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. Haklarınız</h2>
                  <p>GDPR ve geçerli Türk hukuku (KVKK) kapsamında kişisel verilerinize erişim, düzeltme veya silinmesini talep etme hakkına sahipsiniz. Bu hakları kullanmak için iletişime geçin: <a href="mailto:tkaracay@gmail.com" className="text-accent-400 hover:underline">tkaracay@gmail.com</a></p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. Politika Değişiklikleri</h2>
                  <p>Bu gizlilik politikası periyodik olarak güncellenebilir. Bu sayfanın üstündeki tarih en son revizyonu yansıtmaktadır.</p>
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
