"use client";

import { useLocale } from 'next-intl';
import { Star, Quote } from "lucide-react";

const testimonials = {
  tr: [
    {
      name: "Ahmet Yılmaz",
      role: "E-Ticaret Direktörü",
      company: "Moda Grubu A.Ş.",
      avatar: "AY",
      quote:
        "Tonguç'un SEO danışmanlığıyla organik trafiğimiz 6 ayda %180 arttı. Teknik SEO ve içerik stratejisi konusundaki uzmanlığı gerçekten fark yaratıyor.",
      rating: 5,
    },
    {
      name: "Elif Kaya",
      role: "Pazarlama Müdürü",
      company: "TechStart Yazılım",
      avatar: "EK",
      quote:
        "Google Ads kampanyalarımızda daha önce bütçe israf ediyorduk. Tonguç'la çalıştıktan sonra ROAS'ımız 3 katına çıktı.",
      rating: 5,
    },
    {
      name: "Murat Demir",
      role: "Genel Müdür",
      company: "Demir İnşaat & Gayrimenkul",
      avatar: "MD",
      quote:
        "UI/UX yenileme projemizde Tonguç'un önerileri sayesinde web sitesi dönüşüm oranımız %240 arttı. Kullanıcı odaklı yaklaşımı diğerlerinden çok farklı.",
      rating: 5,
    },
  ],
  en: [
    {
      name: "Sarah Mitchell",
      role: "Head of Digital",
      company: "NovaBrand Agency",
      avatar: "SM",
      quote:
        "Tonguç's SEO strategy transformed our organic presence. Within 8 months we ranked on page 1 for our most competitive keywords and traffic doubled.",
      rating: 5,
    },
    {
      name: "James Okoye",
      role: "Marketing Director",
      company: "SwiftCommerce Ltd.",
      avatar: "JO",
      quote:
        "Our Google Ads ROAS went from 2.1× to 6.4× after Tonguç restructured our campaigns. The ROI-focused approach and transparent reporting made all the difference.",
      rating: 5,
    },
    {
      name: "Laura Fischer",
      role: "CEO",
      company: "HealthTech Solutions",
      avatar: "LF",
      quote:
        "The AI automation workflow Tonguç built for our content team saved us 20+ hours per week. His grasp of both AI tools and marketing strategy is rare.",
      rating: 5,
    },
  ],
};

export default function Testimonials() {
  const locale = useLocale();
  const items = locale === 'tr' ? testimonials.tr : testimonials.en;
  const heading =
    locale === 'tr' ? 'Müşteriler Ne Diyor?' : 'What Clients Say';
  const subheading =
    locale === 'tr'
      ? '25 yılı aşkın deneyimle yüzlerce marka için ölçülebilir sonuçlar.'
      : 'Measurable results for hundreds of brands across 25+ years.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: heading,
    itemListElement: items.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: t.rating,
          bestRating: 5,
        },
        author: {
          '@type': 'Person',
          name: t.name,
          jobTitle: t.role,
        },
        reviewBody: t.quote,
        itemReviewed: {
          '@type': 'ProfessionalService',
          name: 'Tonguç Karaçay Danışmanlık',
          url: 'https://tonguckaracay.com',
        },
      },
    })),
  };

  return (
    <section className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">
            {locale === 'tr' ? (
              <>
                Müşteriler Ne{' '}
                <span className="text-gradient">Diyor?</span>
              </>
            ) : (
              <>
                What <span className="text-gradient">Clients Say</span>
              </>
            )}
          </h2>
          <p className="text-base md:text-lg text-primary-400 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 md:p-8 flex flex-col gap-4 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-accent-500/30 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-accent-500 fill-accent-500"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-primary-300 text-sm md:text-base leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-primary-800">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-accent-400 text-xs font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-400 text-xs">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
