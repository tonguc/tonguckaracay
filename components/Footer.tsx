import Link from "next/link";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const services = [
  { name: "SEO Danışmanlığı", href: "/hizmetler/seo-danismanligi" },
  { name: "Online Reklamcılık", href: "/hizmetler/online-reklamcilik" },
  { name: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
  { name: "Yapay Zeka Çözümleri", href: "/hizmetler/yapay-zeka-cozumleri" },
  { name: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya-yonetimi" },
];

const blogCategories = [
  { name: "SEO", href: "/seo" },
  { name: "Online Reklamcılık", href: "/online-reklamcilik" },
  { name: "UI/UX Tasarım", href: "/ui-ux-tasarim" },
  { name: "Yapay Zeka", href: "/yapay-zeka" },
  { name: "Sosyal Medya", href: "/sosyal-medya" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/tonguckaracay", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/tonguckaracay", icon: Twitter },
  { name: "GitHub", href: "https://github.com/tonguckaracay", icon: Github },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-surface-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold text-white inline-block mb-4">
              Tonguç<span className="text-accent-400">.</span>
            </Link>
            <p className="text-primary-400 mb-6 leading-relaxed">
              SEO, dijital pazarlama ve yapay zeka çözümleriyle işletmenizin dijital büyümesine katkı sağlıyorum.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-400 hover:text-accent-400 hover:border-accent-500/30 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Hizmetler</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-primary-400 hover:text-accent-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Blog</h3>
            <ul className="space-y-3">
              {blogCategories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-primary-400 hover:text-accent-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@tonguckaracay.com"
                  className="flex items-center gap-2 text-primary-400 hover:text-accent-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@tonguckaracay.com
                </a>
              </li>
              <li>
                <Link
                  href="/hakkimda"
                  className="text-primary-400 hover:text-accent-400 transition-colors"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-primary-400 hover:text-accent-400 transition-colors"
                >
                  İletişim Formu
                </Link>
              </li>
            </ul>

            {/* Newsletter - Optional */}
            <div className="mt-6">
              <p className="text-sm text-primary-400 mb-3">
                Güncel içeriklerden haberdar olun
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-surface-card border border-surface-border rounded-lg text-sm text-primary-200 placeholder:text-primary-500 focus:outline-none focus:border-accent-500/50"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-medium text-sm rounded-lg transition-colors"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-500">
            <p>© {new Date().getFullYear()} Tonguç Karaçay. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-6">
              <Link href="/gizlilik-politikasi" className="hover:text-primary-300 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" className="hover:text-primary-300 transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
