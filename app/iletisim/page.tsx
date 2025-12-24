"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Send,
  CheckCircle2,
  Loader2
} from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "UI/UX Tasarım",
    "SEO Danışmanlığı",
    "Online Reklamcılık",
    "Yapay Zeka Çözümleri",
    "Sosyal Medya Yönetimi",
    "Diğer"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    // Replace with actual form handling (e.g., API route, Formspree, etc.)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-primary-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <span className="text-white">İletişim</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient">İletişime</span> Geçin
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Projenizi konuşmak, fiyat teklifi almak veya sadece merhaba demek için 
              aşağıdaki formu doldurun. Genellikle 24 saat içinde yanıt veriyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">E-posta</h3>
                    <a 
                      href="mailto:info@tonguckaracay.com" 
                      className="text-primary-300 hover:text-accent-400 transition-colors"
                    >
                      info@tonguckaracay.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Konum</h3>
                    <p className="text-primary-300">İstanbul, Türkiye</p>
                    <p className="text-primary-400 text-sm">Uzaktan çalışma ile her yerden hizmet</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Telefon</h3>
                    <p className="text-primary-300">Form üzerinden iletişime geçin</p>
                    <p className="text-primary-400 text-sm">Geri dönüş için numaranızı bırakın</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="text-white font-medium mb-4">Sosyal Medya</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com/in/tonguckaracay" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-500/50 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/tonguckaracay" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-500/50 transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-10 p-5 bg-surface-card/50 border border-surface-border rounded-xl">
                <h3 className="text-white font-medium mb-3">Hızlı Bilgi</h3>
                <ul className="space-y-2 text-sm text-primary-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-400" />
                    <span>İlk görüşme ücretsiz</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-400" />
                    <span>24 saat içinde yanıt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-400" />
                    <span>Uzaktan çalışma imkanı</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-400" />
                    <span>Türkçe & İngilizce hizmet</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface-card/50 border border-surface-border rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3">
                      Mesajınız Alındı!
                    </h3>
                    <p className="text-primary-300 mb-6">
                      En kısa sürede size geri dönüş yapacağım. Genellikle 24 saat içinde yanıt veriyorum.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          message: ""
                        });
                      }}
                      className="text-accent-400 hover:text-accent-300 font-medium"
                    >
                      Yeni mesaj gönder
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-display font-bold text-white mb-6">
                      Proje Detaylarınızı Paylaşın
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">
                            Ad Soyad *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors"
                            placeholder="Adınız Soyadınız"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">
                            E-posta *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors"
                            placeholder="ornek@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-primary-300 mb-2">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors"
                            placeholder="05XX XXX XX XX"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-primary-300 mb-2">
                            Şirket
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors"
                            placeholder="Şirket adı (opsiyonel)"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-primary-300 mb-2">
                          İlgilendiğiniz Hizmet
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white focus:outline-none focus:border-accent-500 transition-colors"
                        >
                          <option value="">Seçiniz</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">
                          Mesajınız *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                          placeholder="Projeniz hakkında kısaca bilgi verin..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Mesaj Gönder
                          </>
                        )}
                      </button>

                      <p className="text-sm text-primary-400 text-center">
                        * ile işaretli alanlar zorunludur
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-16 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-8">
              Sık Sorulan Sorular
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-surface-darker/50 border border-surface-border rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">İlk görüşme ücretli mi?</h3>
                <p className="text-primary-300 text-sm">Hayır, ilk görüşme ve ön değerlendirme tamamen ücretsizdir.</p>
              </div>

              <div className="bg-surface-darker/50 border border-surface-border rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">Ne kadar sürede yanıt alırım?</h3>
                <p className="text-primary-300 text-sm">Genellikle 24 saat içinde tüm mesajlara yanıt veriyorum.</p>
              </div>

              <div className="bg-surface-darker/50 border border-surface-border rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">Uzaktan çalışıyor musunuz?</h3>
                <p className="text-primary-300 text-sm">Evet, Türkiye ve yurt dışından müşterilerle uzaktan çalışıyorum.</p>
              </div>

              <div className="bg-surface-darker/50 border border-surface-border rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">Minimum proje bütçesi var mı?</h3>
                <p className="text-primary-300 text-sm">Her proje farklı, görüşmede bütçenize uygun çözümler sunarım.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
