import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Share2, Users, Calendar, TrendingUp, MessageCircle, BarChart3, Instagram, Youtube, Linkedin, Twitter, Video, Image, PenTool, Target, Clock, AlertTriangle, Heart, Eye, Building2, ShoppingCart, Briefcase, Utensils, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Management | Instagram, TikTok, LinkedIn | Tonguç Karaçay",
  description: "Professional social media management to grow your brand. Content strategy, organic growth, community management. Instagram, TikTok, LinkedIn, Facebook management.",
  keywords: ["social media management", "Instagram management", "TikTok management", "LinkedIn management", "content strategy", "community management", "social media marketing"],
  openGraph: {
    title: "Social Media Management | Instagram, TikTok, LinkedIn",
    description: "Professional social media management to grow your brand. Content strategy and organic growth.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/en/services/social-media-management',
  },
};

// ============================================
// ENGLISH CONTENT - INDEPENDENT RESEARCH
// ============================================
// Competitor Analysis (Google.com):
// - WebFX: 45-person team, all platforms, engagement/retention focus
// - Thrive Agency: Two decades experience, platform-specific strategies
// - LYFE Marketing: SMB focus, 3-month contracts, 100-300 followers/month
// - NoGood: Growth marketing approach, data-driven content
// - Cave Social: Boutique approach, anti-big-agency positioning
// - Goat: Influencer marketing specialist, award-winning
//
// Key Differentiators Found:
// - Most agencies are large teams (20-100+ people)
// - Individual consultant model very rare
// - SEO + social media integration uncommon
// - AI-powered content creation emerging
// - Transparent pricing rare
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. social media management services [Commercial]
// 2. Instagram account management [Commercial]
// 3. TikTok content management [Service]
// 4. LinkedIn company page management [Commercial]
// 5. social media content strategy [Service]
// 6. organic follower growth [Commercial]
// 7. social media consulting [Service]
// 8. community management services [Commercial]
// 9. social media reporting [Service]
// 10. brand social media management [Commercial]
// 11. corporate social media [Service]
// 12. social media marketing services [Commercial]
// ============================================

const platforms = [
  { 
    icon: Instagram, 
    name: "Instagram", 
    description: "Feed, Stories, and Reels content creation. Hashtag strategy, engagement boosting, and organic growth."
  },
  { 
    icon: Video, 
    name: "TikTok", 
    description: "Trend-driven short-form video content. High viral potential, reaching younger demographics effectively."
  },
  { 
    icon: Linkedin, 
    name: "LinkedIn", 
    description: "B2B-focused professional content. Thought leadership, company page, and personal brand management."
  },
  { 
    icon: Users, 
    name: "Facebook", 
    description: "Page management and community building. Broad demographic reach and advertising integration."
  },
  { 
    icon: Twitter, 
    name: "X (Twitter)", 
    description: "Real-time engagement, brand voice development, and customer communication."
  },
  { 
    icon: Youtube, 
    name: "YouTube", 
    description: "Video content strategy, SEO optimization, channel growth, and Shorts content."
  }
];

const services = [
  { 
    icon: PenTool, 
    title: "Content Strategy & Creation", 
    description: "Content calendars aligned with your brand identity, visual design, copywriting, and video content planning." 
  },
  { 
    icon: Calendar, 
    title: "Scheduling & Management", 
    description: "Regular posting schedules, optimal timing, multi-platform coordination, and content approval workflows." 
  },
  { 
    icon: MessageCircle, 
    title: "Community Management", 
    description: "Comment and message monitoring, customer engagement, crisis management, and brand advocacy building." 
  },
  { 
    icon: TrendingUp, 
    title: "Organic Growth Strategy", 
    description: "Hashtag optimization, engagement techniques, collaboration opportunities, and algorithm alignment." 
  },
  { 
    icon: BarChart3, 
    title: "Analytics & Reporting", 
    description: "Monthly performance reports, competitor analysis, insights, and strategic recommendations." 
  },
  { 
    icon: Target, 
    title: "Advertising Integration", 
    description: "Ad strategies aligned with organic content, boost recommendations, and budget optimization." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Brand Analysis", 
    description: "Analyze your current social presence, competitors, and target audience comprehensively." 
  },
  { 
    step: "02", 
    title: "Strategy Development", 
    description: "Select appropriate platforms, establish content pillars, and define your brand voice." 
  },
  { 
    step: "03", 
    title: "Content Planning", 
    description: "Create monthly content calendars and develop visual/video briefs." 
  },
  { 
    step: "04", 
    title: "Production & Approval", 
    description: "Create content, submit for your approval, and implement necessary revisions." 
  },
  { 
    step: "05", 
    title: "Publishing & Engagement", 
    description: "Publish content as scheduled, manage comments and messages actively." 
  },
  { 
    step: "06", 
    title: "Analysis & Optimization", 
    description: "Analyze performance data and continuously optimize strategy." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Product showcase, campaigns, UGC" },
  { icon: Building2, name: "Enterprise", desc: "Employer branding, B2B content" },
  { icon: Briefcase, name: "Professional Services", desc: "Thought leadership, trust" },
  { icon: Utensils, name: "Restaurant & Cafe", desc: "Visual-focused, local reach" },
  { icon: HeartPulse, name: "Health & Wellness", desc: "Educational content, credibility" },
  { icon: Users, name: "Personal Brands", desc: "Influencers, coaches, consultants" }
];

const advantages = [
  {
    title: "Strategy-First Approach",
    description: "Not just creating content, but building a holistic social media strategy that serves your business goals. Every post has a purpose."
  },
  {
    title: "SEO & Social Media Integration",
    description: "I bring my SEO expertise to social media. YouTube SEO, LinkedIn searchability, hashtag strategy to increase organic discoverability."
  },
  {
    title: "AI-Powered Content",
    description: "Using AI tools to accelerate content creation, conduct trend analysis, and make data-driven content decisions."
  },
  {
    title: "Transparent Reporting",
    description: "Detailed monthly reports show what's working and what isn't. Business results-focused KPIs, not vanity metrics."
  }
];

const faqs = [
  {
    question: "What does social media management include?",
    answer: "Strategy development, content calendar creation, visual/video content production, posting management, comment and message monitoring, community management, and monthly performance reporting. Scope can be customized to your needs."
  },
  {
    question: "How many platforms do you manage?",
    answer: "I offer single platform or multi-platform packages. Most common combinations are Instagram + LinkedIn or Instagram + TikTok. Each additional platform increases content volume and management workload, so pricing adjusts accordingly."
  },
  {
    question: "How is content created?",
    answer: "First, I understand your brand identity and target audience. I prepare monthly content calendars for your approval. Visuals are created using Canva/Figma, videos with simple editing tools. Professional photo/video shoots can be coordinated separately if needed."
  },
  {
    question: "How quickly will I see results?",
    answer: "For organic growth, the first 2-4 weeks are for analysis and strategy. Consistent growth typically begins from month 3. Meaningful organic growth is targeted by month 6. Ad-supported campaigns deliver faster results."
  },
  {
    question: "What are social media management prices?",
    answer: "Prices vary by number of platforms, content volume, and service scope. Packages start from $300/month for a single platform. I provide detailed pricing after a needs assessment."
  }
];

type Props = { params: { locale: string } };

export default function SocialMediaManagementPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Social Media Management</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">Social Media</span> Management
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Grow your brand on social media. Content strategy, consistent posting, community management, and performance analysis to strengthen your social presence. Build a consistent and effective brand voice on Instagram, TikTok, LinkedIn, and other platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/en/contact" className="btn-primary group text-lg">
                  Free Strategy Session
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
                  <span>Strategy Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Organic Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Transparent Reporting</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">The power of social media</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Global social media users</span>
                    <span className="text-accent-500 font-bold">4.9B+</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Instagram users who shop on platform</span>
                    <span className="text-accent-500 font-bold">44%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Brand discovery via social media</span>
                    <span className="text-accent-500 font-bold">76%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '76%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Source: We Are Social, DataReportal 2024</p>
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
              Professional social media management strengthens your digital presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Time Constraints</h3>
              <p className="text-primary-400 text-sm mb-3">You don't have time to create regular social media content.</p>
              <p className="text-accent-400 text-sm">→ Full-service management takes this burden off your shoulders</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Low Visibility</h3>
              <p className="text-primary-400 text-sm mb-3">Your posts reach few people, engagement is low.</p>
              <p className="text-accent-400 text-sm">→ Algorithm-aligned strategy and hashtag optimization</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Content Idea Shortage</h3>
              <p className="text-primary-400 text-sm mb-3">You don't know what to post, content ideas run dry.</p>
              <p className="text-accent-400 text-sm">→ Content pillars and monthly calendars for fresh ideas</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Low Engagement</h3>
              <p className="text-primary-400 text-sm mb-3">You have followers but can't get engagement.</p>
              <p className="text-accent-400 text-sm">→ Community management and engagement strategies</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Inconsistent Brand Image</h3>
              <p className="text-primary-400 text-sm mb-3">Different tones across platforms, mixed messages.</p>
              <p className="text-accent-400 text-sm">→ Consistent brand voice and visual identity guidelines</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Measurement Gaps</h3>
              <p className="text-primary-400 text-sm mb-3">You don't know what's working and what isn't.</p>
              <p className="text-accent-400 text-sm">→ Detailed monthly reporting and data-driven optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Platforms I <span className="text-gradient">Manage</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Every platform has different dynamics. I apply platform-specific strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <div key={i} className="card p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <platform.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                <p className="text-primary-300">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Service <span className="text-gradient">Scope</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Comprehensive social media management services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-primary-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              The systematic process I follow for social media management.
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
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Industry <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-primary-300 mb-8">
                Every industry has different social media dynamics. From product visuals and UGC for e-commerce, to thought leadership for B2B, to visual-focused content for restaurants—I apply industry-specific approaches.
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

            <div className="card p-8 border-accent-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Content Types</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center">
                    <Image className="w-4 h-4 text-pink-400" />
                  </div>
                  <span className="text-primary-200">Static images & carousels</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                    <Video className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-primary-200">Reels, TikTok & Shorts videos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-primary-200">Stories & interactive content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                    <PenTool className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-primary-200">Long-form content (LinkedIn, Blog)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Why <span className="text-gradient">Work With Me?</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Advantages I offer compared to standard social media agencies.
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
                <h3 className="text-xl font-semibold text-white mb-2">Advertising-Integrated Strategy</h3>
                <p className="text-primary-300">
                  Combined with my <Link href="/en/services/online-advertising" className="text-accent-400 hover:underline">online advertising</Link> services, I integrate organic and paid strategies. Organic content supports ads, ads support organic growth.
                </p>
              </div>
              <Link href="/en/services/online-advertising" className="btn-secondary flex-shrink-0">
                Online Advertising
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-500/10 to-blue-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Let's Build Your Social Media Strategy
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Schedule a free strategy session to discuss how we can strengthen your social presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-primary group text-lg">
              Free Strategy Session
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
            "name": "Social Media Management",
            "description": "Professional social media management to grow your brand. Content strategy, organic growth, community management.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Social Media Management"
          })
        }}
      />
    </main>
  );
}
