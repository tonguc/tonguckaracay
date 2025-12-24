"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "SEO Danışmanlığı", href: "/hizmetler/seo-danismanligi" },
  { name: "Online Reklamcılık", href: "/hizmetler/online-reklamcilik" },
  { name: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
  { name: "Yapay Zeka Çözümleri", href: "/hizmetler/yapay-zeka-cozumleri" },
  { name: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya-yonetimi" },
];

const blogCategories = [
  { name: "Tüm Yazılar", href: "/blog" },
  { name: "SEO", href: "/seo" },
  { name: "Online Reklamcılık", href: "/online-reklamcilik" },
  { name: "UI/UX Tasarım", href: "/ui-ux-tasarim" },
  { name: "Yapay Zeka", href: "/yapay-zeka" },
  { name: "Sosyal Medya", href: "/sosyal-medya" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-darker/90 backdrop-blur-lg border-b border-surface-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Tonguç Karaçay"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="font-display text-xl font-bold text-white hidden sm:inline">
              Tonguç Karaçay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Hizmetler Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 text-primary-200 hover:text-white transition-colors font-medium">
                Hizmetler
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-xl p-2 min-w-[220px] shadow-2xl">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2.5 text-primary-200 hover:text-white hover:bg-surface-border/50 rounded-lg transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("blog")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 text-primary-200 hover:text-white transition-colors font-medium">
                Blog
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "blog" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "blog" && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-xl p-2 min-w-[200px] shadow-2xl">
                    {blogCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-2.5 text-primary-200 hover:text-white hover:bg-surface-border/50 rounded-lg transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Hakkımda */}
            <Link
              href="/hakkimda"
              className="text-primary-200 hover:text-white transition-colors font-medium"
            >
              Hakkımda
            </Link>

            {/* CTA Button */}
            <Link href="/iletisim" className="btn-primary">
              İletişime Geç
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-xl p-4">
              {/* Mobile Services */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-primary-400 mb-2 px-2">
                  Hizmetler
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-2 py-2 text-primary-200 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Blog */}
              <div className="mb-4 pt-4 border-t border-surface-border">
                <p className="text-xs uppercase tracking-wider text-primary-400 mb-2 px-2">
                  Blog
                </p>
                {blogCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-2 py-2 text-primary-200 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Other Links */}
              <div className="pt-4 border-t border-surface-border space-y-2">
                <Link
                  href="/hakkimda"
                  className="block px-2 py-2 text-primary-200 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hakkımda
                </Link>
                <Link
                  href="/iletisim"
                  className="btn-primary w-full text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
