"use client";

import { useEffect, useState } from "react";
import { Send, CheckCircle2, Loader2, CalendarDays } from "lucide-react";

type Locale = "tr" | "en";

/**
 * Nitelikli iletişim formu (TR/EN ortak).
 * - ?konu=on-analiz / ?topic=pre-audit → "Ücretsiz Ön Analiz" seçili gelir, mesaj opsiyonel olur.
 * - ?konu=ai-egitimi / ?topic=ai-training → "AI Eğitimi" seçili gelir.
 * - NEXT_PUBLIC_BOOKING_URL (Calendly vb.) tanımlıysa form üstünde randevu linki çıkar.
 *   CSP iframe'e izin vermediği için gömülü değil, yeni sekmede açılır.
 */
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "";

const copy = {
  tr: {
    preAudit: "Ücretsiz Ön Analiz",
    services: ["Ücretsiz Ön Analiz", "SEO & GEO Büyüme", "UX & Dönüşüm", "AI Büyüme Sistemleri", "Online Reklamcılık", "Sosyal Medya Yönetimi", "AI Eğitimi", "Diğer"],
    aiTraining: "AI Eğitimi",
    traffic: ["1.000'den az", "1.000 – 10.000", "10.000 – 100.000", "100.000+", "Bilmiyorum"],
    goals: ["Daha fazla trafik", "Daha fazla satış / talep", "AI arama (ChatGPT, Gemini) görünürlüğü", "AI ile verimlilik / otomasyon", "Yeni site / yeniden tasarım", "Diğer"],
    budgets: ["Henüz belirlemedim", "Aylık 25.000 ₺'den az", "Aylık 25.000 – 75.000 ₺", "Aylık 75.000 ₺ ve üzeri"],
    title: "Proje Detaylarınızı Paylaşın",
    titlePre: "Ücretsiz SEO + GEO + Dönüşüm Ön Analizi",
    introPre: "Site adresinizi ve hedefinizi yazmanız yeterli. SEO, GEO (AI arama görünürlüğü) ve dönüşüm tarafında en büyük fırsatları birkaç iş günü içinde yazılı olarak iletiyorum.",
    booking: "Formla uğraşmak istemiyor musunuz? Takvimden 30 dk görüşme seçin",
    name: "Ad Soyad *", namePh: "Adınız Soyadınız",
    email: "E-posta *", emailPh: "ornek@email.com",
    website: "Web Siteniz", websitePh: "https://ornek.com",
    phone: "Telefon", phonePh: "05XX XXX XX XX",
    service: "İlgilendiğiniz Hizmet", select: "Seçiniz",
    trafficL: "Aylık Ziyaretçi", goalL: "Ana Hedefiniz", budgetL: "Bütçe Aralığı",
    message: "Mesajınız", messagePh: "Projeniz veya yaşadığınız sorun hakkında kısaca bilgi verin...",
    sending: "Gönderiliyor...", send: "Gönder", sendPre: "Ön Analiz İste",
    required: "* ile işaretli alanlar zorunludur",
    doneTitle: "Mesajınız Gönderildi!", doneText: "En kısa sürede size geri dönüş yapacağım.", again: "Yeni mesaj gönder",
    error: "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya tonguckaracay@gmail.com adresine yazın.",
  },
  en: {
    preAudit: "Free Pre-Audit",
    services: ["Free Pre-Audit", "SEO & GEO Growth", "UX & Conversion", "AI Growth Systems", "Online Advertising", "Social Media Management", "AI Training", "Other"],
    aiTraining: "AI Training",
    traffic: ["Under 1,000", "1,000 – 10,000", "10,000 – 100,000", "100,000+", "Not sure"],
    goals: ["More traffic", "More sales / leads", "Visibility in AI search (ChatGPT, Gemini)", "AI efficiency / automation", "New site / redesign", "Other"],
    budgets: ["Not decided yet", "Under $1,000 / month", "$1,000 – $3,000 / month", "$3,000+ / month"],
    title: "Share Your Project Details",
    titlePre: "Free SEO + GEO + Conversion Pre-Audit",
    introPre: "Just share your site address and goal. Within a few business days I'll send you the biggest SEO, GEO (AI search visibility) and conversion opportunities in writing.",
    booking: "Prefer to talk? Pick a 30-min slot on my calendar",
    name: "Full Name *", namePh: "Your full name",
    email: "Email *", emailPh: "you@example.com",
    website: "Your Website", websitePh: "https://example.com",
    phone: "Phone", phonePh: "+1 555 000 0000",
    service: "Service of Interest", select: "Select",
    trafficL: "Monthly Visitors", goalL: "Main Goal", budgetL: "Budget Range",
    message: "Your Message", messagePh: "Tell me briefly about your project or the problem you're facing...",
    sending: "Sending...", send: "Send", sendPre: "Request Pre-Audit",
    required: "* Required fields",
    doneTitle: "Message Sent!", doneText: "I'll get back to you as soon as possible.", again: "Send another message",
    error: "Something went wrong. Please try again or email tonguckaracay@gmail.com.",
  },
} as const;

const empty = { name: "", email: "", website: "", phone: "", service: "", traffic: "", goal: "", budget: "", message: "" };

export default function ContactForm({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [form, setForm] = useState(empty);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get(locale === "tr" ? "konu" : "topic") || "";
    if (topic.startsWith("on-analiz") || topic.startsWith("pre-audit")) {
      setForm((prev) => ({ ...prev, service: c.preAudit }));
    } else if (topic.startsWith("ai-egitimi") || topic.startsWith("ai-training")) {
      setForm((prev) => ({ ...prev, service: c.aiTraining }));
    }
  }, [locale, c.preAudit, c.aiTraining]);

  const isPre = form.service === c.preAudit;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setIsSubmitted(true);
        setForm(empty);
      } else {
        setError(c.error);
      }
    } catch {
      setError(c.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const field =
    "w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors";
  const label = "block text-sm font-medium text-primary-300 mb-2";

  const select = (name: keyof typeof empty, text: string, options: readonly string[]) => (
    <div>
      <label htmlFor={name} className={label}>{text}</label>
      <select id={name} name={name} value={form[name]} onChange={onChange} className={field}>
        <option value="">{c.select}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold text-white mb-3">{c.doneTitle}</h3>
        <p className="text-primary-300 mb-6">{c.doneText}</p>
        <button onClick={() => setIsSubmitted(false)} className="text-accent-400 hover:text-accent-300 font-medium transition-colors">
          {c.again}
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-display font-bold text-white mb-2">{isPre ? c.titlePre : c.title}</h2>
      {isPre && <p className="text-primary-300 mb-4">{c.introPre}</p>}

      {BOOKING_URL && (
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 flex items-center gap-3 rounded-xl border border-accent-500/30 bg-accent-500/5 px-4 py-3 text-sm font-medium text-accent-200 transition-colors hover:border-accent-500/60 hover:text-white"
        >
          <CalendarDays className="h-5 w-5 shrink-0 text-accent-400" />
          {c.booking} →
        </a>
      )}

      <form onSubmit={onSubmit} className="mt-4 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={label}>{c.name}</label>
            <input type="text" id="name" name="name" required autoComplete="name" value={form.name} onChange={onChange} className={field} placeholder={c.namePh} />
          </div>
          <div>
            <label htmlFor="email" className={label}>{c.email}</label>
            <input type="email" id="email" name="email" required autoComplete="email" value={form.email} onChange={onChange} className={field} placeholder={c.emailPh} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="website" className={label}>{c.website}{isPre ? " *" : ""}</label>
            <input type="text" inputMode="url" id="website" name="website" required={isPre} autoComplete="url" value={form.website} onChange={onChange} className={field} placeholder={c.websitePh} />
          </div>
          {select("service", c.service, c.services)}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {select("traffic", c.trafficL, c.traffic)}
          {select("goal", c.goalL, c.goals)}
          {select("budget", c.budgetL, c.budgets)}
        </div>

        <div>
          <label htmlFor="phone" className={label}>{c.phone}</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" value={form.phone} onChange={onChange} className={field} placeholder={c.phonePh} />
        </div>

        <div>
          <label htmlFor="message" className={label}>{c.message}{isPre ? "" : " *"}</label>
          <textarea id="message" name="message" required={!isPre} rows={4} value={form.message} onChange={onChange} className={`${field} resize-none`} placeholder={c.messagePh} />
        </div>

        {error && (
          <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 mr-2 animate-spin" />{c.sending}</>
          ) : (
            <><Send className="w-5 h-5 mr-2" />{isPre ? c.sendPre : c.send}</>
          )}
        </button>

        <p className="text-sm text-primary-400 text-center">{c.required}</p>
      </form>
    </>
  );
}
