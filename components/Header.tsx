"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
    { name: "SEO Danışmanlığı", href: "/hizmetler/seo-danismanligi" },
    { name: "Dijital Pazarlama", href: "/hizmetler/dijital-pazarlama" },
    { name: "AI Çözümleri", href: "/hizmetler/ai-cozumleri" },
    { name: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya-yonetimi" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-bold text-amber hover:text-amber-light transition-colors">
            TK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-amber transition-colors">
              Ana Sayfa
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-300 hover:text-amber transition-colors flex items-center gap-1">
                Hizmetler
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-navy-light border border-gray-800 rounded-lg shadow-xl py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-300 hover:text-amber hover:bg-navy transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-300 hover:text-amber transition-colors">
              Blog
            </Link>
            
            <Link href="/hakkimda" className="text-gray-300 hover:text-amber transition-colors">
              Hakkımda
            </Link>
            
            <Link href="/iletisim" className="btn btn-primary">
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-300 hover:text-amber transition-colors">
                Ana Sayfa
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-400 text-sm font-semibold">Hizmetler</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block pl-4 text-gray-300 hover:text-amber transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link href="/blog" className="text-gray-300 hover:text-amber transition-colors">
                Blog
              </Link>
              
              <Link href="/hakkimda" className="text-gray-300 hover:text-amber transition-colors">
                Hakkımda
              </Link>
              
              <Link href="/iletisim" className="btn btn-primary inline-block text-center">
                İletişim
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
