import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Share2, Users, Calendar, TrendingUp, MessageCircle, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Management | Organic Growth | Tonguç Karaçay",
  description: "Organic growth and community management. Strategy, content planning, and engagement optimization.",
};

const services = [
  { icon: Calendar, title: "Content Planning", description: "Strategic content calendar and regular posts." },
  { icon: Users, title: "Community Management", description: "Follower engagement and community building." },
  { icon: TrendingUp, title: "Organic Growth", description: "Organic follower growth without paid ads." },
  { icon: MessageCircle, title: "Engagement Strategy", description: "Comment and message management." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Performance tracking and detailed reports." },
  { icon: Share2, title: "Platform Strategy", description: "Custom strategy for each platform." }
];

type Props = { params: { locale: string } };

export default function SocialMediaManagementPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Social Media Management</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Social Media</span> Management
          </h1>
          <p className="text-xl text-primary-300 mb-8 max-w-2xl">
            Organic growth and community management. Strategy, content planning, and engagement optimization.
          </p>
          <Link href="/en/contact" className="btn-primary group">
            Strategy Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title mb-12 text-center">Service <span className="text-gradient">Scope</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-primary-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Let's Build Your Social Strategy</h2>
          <Link href="/en/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
