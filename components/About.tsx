"use client";

import Link from "next/link";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-indigo-500/20 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-surface-card border border-surface-border rounded-2xl transform -rotate-3" />
              
              {/* Image Placeholder - Replace with actual image */}
              <div className="relative bg-gradient-to-br from-surface-card to-surface-dark border border-surface-border rounded-2xl overflow-hidden h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-600/20 border-2 border-accent-500/30 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-accent-400">TK</span>
                  </div>
                  <p className="text-primary-400 text-sm">Profil fotoğrafı eklenecek</p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-surface-card/90 backdrop-blur-lg border border-surface-border rounded-xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-white">10+</p>
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
                10 yılı aşkın deneyimimle SEO, dijital pazarlama ve yapay zeka alanlarında 
                işletmelere danışmanlık veriyorum. Küçük girişimlerden kurumsal markalara kadar 
                120'den fazla işletmenin dijital büyüme yolculuğuna eşlik ettim.
              </p>
              <p>
                Teknik SEO uzmanlığımı, kullanıcı deneyimi odaklı tasarım anlayışıyla birleştirerek 
                sadece trafik değil, gerçek dönüşüm sağlayan stratejiler geliştiriyorum.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-surface-card/30 border border-surface-border/50 rounded-xl">
                <Briefcase className="w-5 h-5 text-accent-400 mx-auto mb-2" />
                <p className="text-2xl font-display font-bold text-white">120+</p>
                <p className="text-xs text-primary-400">Proje</p>
              </div>
              <div className="text-center p-4 bg-surface-card/30 border border-surface-border/50 rounded-xl">
                <Award className="w-5 h-5 text-accent-400 mx-auto mb-2" />
                <p className="text-2xl font-display font-bold text-white">%40</p>
                <p className="text-xs text-primary-400">Ort. Büyüme</p>
              </div>
              <div className="text-center p-4 bg-surface-card/30 border border-surface-border/50 rounded-xl">
                <GraduationCap className="w-5 h-5 text-accent-400 mx-auto mb-2" />
                <p className="text-2xl font-display font-bold text-white">10+</p>
                <p className="text-xs text-primary-400">Yıl</p>
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
