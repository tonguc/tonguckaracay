"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-indigo-500/20 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-surface-card border border-surface-border rounded-2xl transform -rotate-3" />
              
              {/* Actual Image */}
              <div className="relative rounded-2xl overflow-hidden border border-surface-border">
                <Image
                  src="/tonguc-karacay.jpg"
                  alt="Tonguç Karaçay"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-surface-card/90 backdrop-blur-lg border border-surface-border rounded-xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-white">25+</p>
                    <p className="text-xs text-primary-400">Yıl Deneyim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="section-title mb-6">
              Merhaba, ben{" "}
              <span className="text-gradient">Tonguç Karaçay</span>
            </h2>
            
            <div className="space-y-4 text-primary-300 leading-relaxed mb-8">
              <p>
                25 yılı aşkın deneyimimle UI/UX tasarım, SEO, dijital pazarlama ve 
                yapay zeka alanlarında işletmelere stratejik danışmanlık veriyorum.
              </p>
              <p>
                Türkiye'nin önde gelen kurumsal şirketlerine dijital dönüşüm süreçlerinde 
                destek verdim. Aynı zamanda Amerika, Kanada ve Almanya'daki firmalara 
                uluslararası SEO ve dijital pazarlama hizmetleri sunuyorum.
              </p>
              <p>
                Teknik uzmanlığımı, kullanıcı deneyimi odaklı tasarım anlayışıyla birleştirerek 
                sadece trafik değil, gerçek dönüşüm sağlayan stratejiler geliştiriyorum.
              </p>
            </div>

            {/* Referans Markalar */}
            <div className="mb-8">
              <p className="text-sm text-primary-400 mb-3">Çalıştığım markalardan bazıları:</p>
              <div className="flex flex-wrap gap-2">
                {["Sabancı Holding", "Borusan Otomotiv", "MNG Holding", "Filli Boya", "Sabah", "ATV", "Star TV", "24 TV"].map((brand) => (
                  <span 
                    key={brand}
                    className="px-3 py-1.5 text-sm text-primary-300 bg-surface-card/50 border border-surface-border/50 rounded-lg"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link 
              href="/hakkimda" 
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium group"
            >
              Daha fazla bilgi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
