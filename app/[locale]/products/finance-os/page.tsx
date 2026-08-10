import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Wallet, TrendingDown, PieChart, Target, ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import { FINANCE_OS_ETSY_URL, FINANCE_OS_DEMO_URL } from "@/lib/products/finance-os";

export const metadata: Metadata = {
  title: "Finance OS — Personal Budget & Net Worth Tracker | Tonguç Karaçay",
  description: "Track your budget, debt payoff, and net worth in one single-file, fully offline app. No account required, your data stays on your device.",
  keywords: ["budget app", "personal finance tracker", "net worth tracker", "debt payoff planner", "offline budget app"],
  openGraph: {
    title: "Finance OS — Personal Budget & Net Worth Tracker",
    description: "Track your budget, debt payoff, and net worth in one single-file, fully offline app.",
    type: "website",
    images: ["/products/finance-os/dashboard.jpg"],
  },
};

const features = [
  {
    icon: Wallet,
    title: "Your Budget at a Glance",
    description: "Truly unclaimed cash this month, real cash flow, and savings rate — all on one Dashboard, no spreadsheet math required."
  },
  {
    icon: TrendingDown,
    title: "Debt Payoff Planner",
    description: "Automatic Snowball or Avalanche payoff order, a real APR-based debt-free date estimate, and credit-limit utilization tracking."
  },
  {
    icon: PieChart,
    title: "One Real Net Worth Number",
    description: "Assets and liabilities combine automatically — every debt payment reflects correctly instead of quietly inflating your net worth."
  },
  {
    icon: Target,
    title: "Goals & Categories",
    description: "Savings goals, per-category budget limits, and automatic over/watch/safe zones so you know where you stand at a glance."
  },
  {
    icon: ShieldCheck,
    title: "Calm, Honest Guidance",
    description: "A Monthly Review that answers 'what should I do this month' in plain language — no gamification, no streaks, no guilt."
  },
  {
    icon: Download,
    title: "100% Local, Zero Account",
    description: "Your data lives only on your device — no internet required, no sign-up, no subscription. One file, runs in your browser, backs up to JSON."
  },
];

const steps = [
  { step: "01", title: "Download & Open", description: "One HTML file — opens directly in Chrome, Edge, or Safari, nothing to install." },
  { step: "02", title: "Add Your Accounts", description: "Enter your bank/credit card accounts, categories, and any existing debts." },
  { step: "03", title: "Log Transactions", description: "Expense, income, debt payment, or goal contribution — each one updates the right account automatically." },
  { step: "04", title: "Follow the Dashboard", description: "Dashboard, Budget, Debt, and Reports all refresh themselves the moment you log something new." },
];

const faqs = [
  {
    question: "Do I need an internet connection?",
    answer: "No. Finance OS runs entirely in your browser and stores data in localStorage on your own device. Nothing is ever sent to a server."
  },
  {
    question: "Is there a subscription?",
    answer: "No — a one-time purchase, unlimited use. No monthly fee, no renewal."
  },
  {
    question: "What if I lose my data?",
    answer: "Export a full JSON backup any time and import it on another device the same way."
  },
  {
    question: "How is this different from a Google Sheets or Excel template?",
    answer: "No broken formulas, row-shifting, or spreadsheet setup - a real app interface with automatic calculations and debt/net-worth logic built in."
  },
];

type Props = { params: { locale: string } };

export default function FinanceOSPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/en/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">Finance OS</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">Finance OS</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Track your budget, debt payoff plan, and net worth in one place — no account, no subscription, your data never leaves your device.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>One-time purchase</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Works 100% offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>No account required</span>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image src="/products/finance-os/dashboard.jpg" alt="Finance OS Dashboard" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots gallery */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">A Look <span className="text-gradient">Inside</span></h2>
            <p className="text-primary-300 max-w-2xl mx-auto">Sample data shown — real screenshots from the actual app.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image src="/products/finance-os/debt.jpg" alt="Finance OS Debt Tracking" fill className="object-cover object-top" />
              </div>
            </div>
            <div className="card overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image src="/products/finance-os/reports.jpg" alt="Finance OS Monthly Review" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">What Can You <span className="text-gradient">Do?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-primary-300">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">How It <span className="text-gradient">Works</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="card p-6 relative group hover:border-accent-500/30 transition-colors">
                <div className="absolute top-4 right-4 text-5xl font-bold text-accent-500/10 group-hover:text-accent-500/20 transition-colors">{s.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-primary-300">{s.description}</p>
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

      {/* Schema.org FAQ */}
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

      {/* Schema.org Product */}
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
