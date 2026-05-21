import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Target, TrendingUp, DollarSign, Users, BarChart3, RefreshCw, Search, Play, ShoppingCart, Smartphone, Clock, AlertTriangle, Eye, Zap, Building2, Briefcase, HeartPulse, Scale, Utensils, MousePointer } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Advertising Services | Google Ads & Meta Ads Management | Tonguç Karaçay",
  description: "Professional Google Ads and Meta Ads management to maximize your ad budget ROI. ROAS-focused campaigns, A/B testing, remarketing. 25+ years experience.",
  keywords: ["Google Ads management", "Meta Ads", "PPC advertising", "paid search", "performance marketing", "remarketing", "ROAS optimization", "digital advertising"],
  openGraph: {
    title: "Online Advertising Services | Google Ads & Meta Ads Management",
    description: "Professional Google Ads and Meta Ads management to maximize your ad budget ROI. 25+ years experience.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/en/services/online-advertising',
  },
};

// ============================================
// ENGLISH CONTENT - INDEPENDENT RESEARCH
// ============================================
// Competitor Analysis (Google.com):
// - AgencyPPC: Complex accounts, strategic partner, $30-50M raised through leads
// - Straight North: Google certified, Skai platform, lead gen focus
// - AdVenture Media: 500+ clients, 265K marketers trained, proprietary training
// - SmartSites: Google Premier Partner, multi-service approach
// - OuterBox: CPL/ROAS targets, full-funnel, CRO integration
// - KlientBoost: Strong B2B, cost efficiency, conversion focus
//
// Key Differentiators Found:
// - Most agencies are large teams (20-100+ people)
// - Individual consultant model very rare
// - SEO + PPC integration not commonly offered together
// - Landing page optimization often separate service
// - AI/automation optimization trending
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. Google Ads management services [Commercial]
// 2. PPC advertising agency [Commercial]
// 3. paid search management [Service]
// 4. Meta Ads management [Commercial]
// 5. performance marketing services [Service]
// 6. pay-per-click management [Commercial]
// 7. remarketing campaigns [Service]
// 8. ecommerce advertising [Commercial]
// 9. YouTube advertising services [Service]
// 10. conversion optimization [Commercial]
// 11. ad budget optimization [Service]
// 12. ROAS optimization [Commercial]
// ============================================

const services = [
  { 
    icon: Search, 
    title: "Google Search Ads", 
    description: "Reach potential customers at the exact moment they're searching. Keyword strategy, ad copy optimization, and bid management for maximum ROI." 
  },
  { 
    icon: ShoppingCart, 
    title: "Google Shopping & Performance Max", 
    description: "Product feed optimization, Shopping campaigns, and AI-powered Performance Max management for e-commerce businesses." 
  },
  { 
    icon: Users, 
    title: "Meta Ads (Facebook & Instagram)", 
    description: "Detailed audience targeting, visual/video ads, and conversion-focused campaigns. Includes retargeting and lookalike audiences." 
  },
  { 
    icon: Play, 
    title: "YouTube & Video Advertising", 
    description: "YouTube pre-roll, in-stream, and discovery ads. Video content strategy and view optimization for brand awareness and conversions." 
  },
  { 
    icon: RefreshCw, 
    title: "Remarketing & Retargeting", 
    description: "Re-engage site visitors across platforms. Dynamic remarketing, audience lists, and cross-platform retargeting strategies." 
  },
  { 
    icon: BarChart3, 
    title: "Conversion Tracking & Reporting", 
    description: "Google Analytics 4 setup, conversion tracking implementation. Weekly/monthly performance reports with ROAS analysis." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Goals & Budget Analysis", 
    description: "Analyze your business objectives, target audience, and advertising budget. Establish realistic KPIs and success metrics." 
  },
  { 
    step: "02", 
    title: "Account Structure & Strategy", 
    description: "Campaign architecture, keyword research, audience segmentation, and bidding strategy development." 
  },
  { 
    step: "03", 
    title: "Ad Creation", 
    description: "Conversion-focused ad copy, creative assets, and landing page recommendations. A/B test scenarios preparation." 
  },
  { 
    step: "04", 
    title: "Campaign Launch", 
    description: "Tracking setup, campaign activation, and intensive monitoring during the first week of launch." 
  },
  { 
    step: "05", 
    title: "Optimization & Testing", 
    description: "Continuous A/B testing, negative keyword management, bid optimization, and audience refinement." 
  },
  { 
    step: "06", 
    title: "Reporting & Scaling", 
    description: "Detailed performance reports, insight sharing, and scaling successful campaigns for growth." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Shopping, PMAX, dynamic remarketing" },
  { icon: Building2, name: "B2B & Enterprise", desc: "LinkedIn Ads, lead generation" },
  { icon: Briefcase, name: "SaaS & Technology", desc: "Free trial, demo campaigns" },
  { icon: HeartPulse, name: "Healthcare", desc: "Local targeting, appointment campaigns" },
  { icon: Scale, name: "Legal", desc: "Search network, local SEO integration" },
  { icon: Utensils, name: "Hospitality", desc: "Local campaigns, booking-focused" }
];

const brands = ["Turkish Airlines", "BMW", "Galatasaray", "Sabah Media", "ATV", "Star TV", "Hürriyet", "Milliyet", "NTV", "CNN Türk"];

const advantages = [
  {
    title: "Transparent Reporting",
    description: "Track your ad spend, cost per click, and conversions in real-time. No hidden commissions or additional fees."
  },
  {
    title: "Expert, Not Agency",
    description: "Your account won't be handed off to junior staff. Work directly with a single senior professional with 25+ years experience. Faster decisions, less coordination overhead."
  },
  {
    title: "SEO & PPC Integration",
    description: "I manage both advertising and organic strategies together. Ad data informs SEO, SEO insights strengthen ads—a truly integrated approach."
  },
  {
    title: "Landing Page Focus",
    description: "With my UI/UX expertise, I also optimize your ad landing pages. Getting traffic isn't enough—conversions are what matter."
  }
];

const faqs = [
  {
    question: "What's the minimum budget for Google Ads?",
    answer: "Minimum budget varies by industry and competition level. Generally, I recommend at least $500-1,000/month in ad spend to collect meaningful data. You can start with less, but optimization takes longer with limited data."
  },
  {
    question: "How quickly will I see results from ads?",
    answer: "With Google Ads, you can see initial results within days. However, campaign optimization and understanding true performance requires at least 2-4 weeks. The first 3 months are typically a learning and optimization period."
  },
  {
    question: "Should I choose Google Ads or Meta Ads?",
    answer: "It depends on your goals. Google Ads reaches users actively searching (high intent). Meta Ads reaches broader audiences and builds awareness. The ideal strategy often combines both platforms."
  },
  {
    question: "What does ROAS mean, and what should my target be?",
    answer: "ROAS (Return on Ad Spend) measures ad effectiveness. $1 spent generating $4 in sales = 4x ROAS. Target varies by industry; for e-commerce, 3-5x ROAS is generally considered good."
  },
  {
    question: "How is management fee calculated?",
    answer: "Management fee is typically 10-20% of ad spend or a fixed monthly fee. I provide custom quotes based on your budget and scope. Contact me for detailed pricing."
  }
];

type Props = { params: { locale: string } };

export default function OnlineAdvertisingPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Online Advertising</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">Online Advertising</span> Services
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Reach your target audience instantly with Google Ads and Meta Ads. ROAS-focused campaign management, continuous optimization, and transparent reporting to maximize your ad budget. With over 25 years of digital marketing experience, I deliver data-driven advertising strategies that produce measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/en/contact" className="btn-primary group text-lg">
                  Free Ad Account Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#process" className="btn-secondary text-lg">
                  My Process
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>ROAS Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Transparent Reporting</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">The power of digital advertising</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Daily Google searches</span>
                    <span className="text-accent-500 font-bold">8.5 Billion</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Average Google Ads ROI</span>
                    <span className="text-accent-500 font-bold">200%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Search ads click-through rate</span>
                    <span className="text-accent-500 font-bold">3-5%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '50%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Source: Google Economic Impact Report, WordStream Industry Benchmarks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              What Problems Does This <span className="text-gradient">Service Solve?</span>
            </h2>
            <p className="text-primary-300 text-lg mb-12">
              Professional management is essential to avoid wasting your advertising budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Wasted Budget</h3>
              <p className="text-primary-400 text-sm mb-3">You're spending on ads but not getting conversions—money going down the drain.</p>
              <p className="text-accent-400 text-sm">→ Conversion-focused campaign structure and continuous optimization</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Poor Targeting</h3>
              <p className="text-primary-400 text-sm mb-3">Your ads aren't reaching the right audience, generating irrelevant clicks.</p>
              <p className="text-accent-400 text-sm">→ Detailed audience analysis and negative keyword management</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Competitors Winning</h3>
              <p className="text-primary-400 text-sm mb-3">Competitors consistently appear above you in ad positions.</p>
              <p className="text-accent-400 text-sm">→ Competitive analysis and smart bidding strategies</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <MousePointer className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Low Conversion Rate</h3>
              <p className="text-primary-400 text-sm mb-3">You're getting clicks but no sales or leads.</p>
              <p className="text-accent-400 text-sm">→ Landing page optimization and conversion tracking</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Time Constraints</h3>
              <p className="text-primary-400 text-sm mb-3">You don't have time to manage and optimize campaigns properly.</p>
              <p className="text-accent-400 text-sm">→ Full-service management and regular reporting</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Measurement Gaps</h3>
              <p className="text-primary-400 text-sm mb-3">You don't know which campaigns are working and which aren't.</p>
              <p className="text-accent-400 text-sm">→ GA4 setup, conversion tracking, and detailed reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Service <span className="text-gradient">Scope</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Comprehensive advertising management across Google, Meta, and other platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-primary-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              The structured and transparent process I follow for advertising management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div key={i} className="card p-6 relative group hover:border-accent-500/30 transition-colors">
                <div className="absolute top-4 right-4 text-5xl font-bold text-accent-500/10 group-hover:text-accent-500/20 transition-colors">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-primary-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Industry <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-primary-300 mb-8">
                Every industry has different advertising dynamics. From Shopping campaigns in e-commerce to LinkedIn Ads and lead generation in B2B, location-based targeting for local businesses—I apply industry-specific approaches.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{industry.name}</h4>
                      <p className="text-sm text-primary-400">{industry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Notable Brands I've Worked With</h3>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-border/50 rounded-full text-primary-200 text-sm">
                    {brand}
                  </span>
                ))}
              </div>
              <p className="text-primary-400 text-sm mt-6">
                Managed digital advertising campaigns for Turkey's leading media organizations and corporate brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Why <span className="text-gradient">Work With Me?</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Advantages I offer that differ from typical PPC agencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{adv.title}</h3>
                <p className="text-primary-300">{adv.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8 border-accent-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Integrated SEO & Advertising Strategy</h3>
                <p className="text-primary-300">
                  With my <Link href="/en/services/seo-consulting" className="text-accent-400 hover:underline">SEO consulting</Link> expertise, I integrate advertising and organic strategies. Ad data informs SEO, SEO insights strengthen ads—creating a holistic digital strategy.
                </p>
              </div>
              <Link href="/en/services/seo-consulting" className="btn-secondary flex-shrink-0">
                SEO Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Platform <span className="text-gradient">Comparison</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Search className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Google Ads</h3>
              </div>
              <ul className="space-y-3 text-primary-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Reaches users actively searching (high intent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Search, Shopping, YouTube, Display networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Conversion-focused, measurable ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Ideal for e-commerce and B2B</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Meta Ads</h3>
              </div>
              <ul className="space-y-3 text-primary-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Reaches broad audiences, builds awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Facebook, Instagram, Messenger, WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Detailed demographic and interest targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Ideal for D2C, lifestyle, and brand campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
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
            Let's Build Your Advertising Strategy
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Get a free ad account audit to evaluate your current campaigns or map out a strategy for new ones.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-primary group text-lg">
              Free Ad Account Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:info@tonguckaracay.com" className="btn-secondary text-lg">
              Send Email
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
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Online Advertising Services",
            "description": "Professional Google Ads and Meta Ads management to maximize your ad budget ROI.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Digital Advertising"
          })
        }}
      />
    </main>
  );
}
