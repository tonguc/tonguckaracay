import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LaptopMockup from "@/components/LaptopMockup";
import { FINANCE_OS_ETSY_URL, FINANCE_OS_DEMO_URL } from "@/lib/products/finance-os";

export const metadata: Metadata = {
  title: "Finance OS — Personal Budget & Net Worth Tracker | Tonguç Karaçay",
  description: "Track your budget, debt payoff, and net worth in one single-file, fully offline app. No account required, your data stays on your device.",
  keywords: ["budget app", "personal finance tracker", "net worth tracker", "debt payoff planner", "offline budget app"],
  openGraph: {
    title: "Finance OS — Personal Budget & Net Worth Tracker",
    description: "Track your budget, debt payoff, and net worth in one single-file, fully offline app.",
    type: "website",
    images: ["/products/finance-os/mockup-hero.png"],
  },
};

const trustBadges = [
  "One-time purchase", "Works 100% offline", "No account required", "Your data never leaves your device",
];

const rows = [
  {
    eyebrow: "SMART PRIORITIES",
    title: "Stop guessing what to do next",
    body: "The Action Center ranks the month's top 3 things by priority - a category running over budget, an extra payment that clears a debt months sooner, or just confirmation you're on pace. No badges, no streaks - just a clear next step.",
    points: ["Automatic prioritization", "Interprets the numbers, doesn't just display them"],
    img: "/products/finance-os/mockup-action-center.png",
  },
  {
    eyebrow: "DEBT PAYOFF PLAN",
    title: "See your real debt-free date, with real math",
    body: "Automatic Snowball or Avalanche payoff order, a real APR-based debt-free date estimate, and credit-limit utilization tracking - all calculated automatically. No manual tracking, no guessing.",
    points: ["Real compound-interest APR math", "Multiple debts, ranked automatically"],
    img: "/products/finance-os/mockup-debt.png",
  },
  {
    eyebrow: "MONTHLY REVIEW",
    title: "Know what actually happened, in plain language",
    body: "The Monthly Review explains what happened that month - did spending stay on plan, did debt go down, did goals move forward. No competitor product does this - it doesn't just show a number, it tells you what it means.",
    points: ["\"If you only do one thing\" recommendation", "A concrete target for next month"],
    img: "/products/finance-os/mockup-review.png",
  },
];

const miniFeatures = [
  { title: "Goals & Categories", description: "Savings goals and per-category budget limits, auto-sorted into over/watch/safe." },
  { title: "12 Currencies", description: "Instant switching between USD, EUR, GBP, TRY, and 8 more." },
  { title: "Dark Mode", description: "Easy-on-the-eyes dark theme, one click to toggle." },
  { title: "JSON Backup", description: "Export your entire dataset as one file, import it on any device." },
];

const faqs = [
  { question: "Do I need an internet connection?", answer: "No. Finance OS runs entirely in your browser and stores data in localStorage on your own device. Nothing is ever sent to a server." },
  { question: "Is there a subscription?", answer: "No — a one-time purchase, unlimited use. No monthly fee, no renewal." },
  { question: "What if I lose my data?", answer: "Export a full JSON backup any time and import it on another device the same way." },
  { question: "How is this different from a Google Sheets or Excel template?", answer: "No broken formulas, row-shifting, or spreadsheet setup - a real app interface with automatic calculations and debt/net-worth logic built in." },
];

type Props = { params: { locale: string } };

export default function FinanceOSPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/en/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">Finance OS</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stop guessing where <span className="text-gradient">your money went</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
              See your budget, debt payoff plan, and net worth in one place. No account, no subscription - just a file that runs in your browser, your data never leaves it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={FINANCE_OS_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group text-lg">
                Try the Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              {FINANCE_OS_ETSY_URL ? (
                <a href={FINANCE_OS_ETSY_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
                  Buy on Etsy
                </a>
              ) : (
                <span className="btn-secondary text-lg opacity-50 cursor-not-allowed select-none" aria-disabled="true">
                  Buy on Etsy — Coming Soon
                </span>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-400">
              {trustBadges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-500" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <LaptopMockup src="/products/finance-os/mockup-hero.png" alt="Finance OS Dashboard - Safe to Spend, Cash Flow, Net Worth" width={1053} height={559} priority />
          </div>
        </div>
      </section>

      {/* Feature + proof rows, alternating, equal-size mockups */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom space-y-24">
          {rows.map((row, i) => (
            <div key={row.title} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <LaptopMockup src={row.img} alt={row.title} width={1053} height={559} />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-accent-400 text-sm font-semibold tracking-wide">{row.eyebrow}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 mb-4">{row.title}</h2>
                <p className="text-primary-300 leading-relaxed mb-5">{row.body}</p>
                <ul className="space-y-2">
                  {row.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-primary-200">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compact everything-else strip */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miniFeatures.map((f) => (
              <div key={f.title}>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-primary-400 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">How It <span className="text-gradient">Works</span></h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:divide-x md:divide-surface-border">
            {[
              { n: "01", t: "Download & Open", d: "One HTML file, opens directly in your browser." },
              { n: "02", t: "Add Your Accounts", d: "Bank/credit card accounts and categories." },
              { n: "03", t: "Log Transactions", d: "Each entry updates the right account automatically." },
              { n: "04", t: "Follow the Dashboard", d: "It refreshes itself with every entry." },
            ].map((s) => (
              <div key={s.n} className="flex-1 px-0 md:px-6 first:pl-0">
                <div className="text-accent-500/40 text-3xl font-bold mb-2">{s.n}</div>
                <h3 className="text-white font-semibold mb-1">{s.t}</h3>
                <p className="text-primary-400 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <span className="text-accent-500 group-open:rotate-180 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-primary-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Take Control of Your Budget Today
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            No sign-up - try it right in your browser.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={FINANCE_OS_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group text-lg">
              Try the Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Finance OS",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "description": "A single-file, fully offline app for personal budget, debt payoff, and net worth tracking.",
            "offers": FINANCE_OS_ETSY_URL ? { "@type": "Offer", "url": FINANCE_OS_ETSY_URL } : undefined,
          })
        }}
      />
    </main>
  );
}
