"use client";

import { useEffect, useState } from 'react';
import { ChevronDown, List } from 'lucide-react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  headings: Heading[];
  locale: 'tr' | 'en';
  variant?: 'mobile' | 'desktop';
}

export default function TableOfContents({ headings, locale, variant }: Props) {
  const [activeId, setActiveId] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  const label = locale === 'tr' ? 'İçindekiler' : 'Contents';

  const NavLinks = () => (
    <nav className="space-y-1 border-l border-surface-border mt-3">
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`block py-1 text-sm transition-all duration-150 border-l-2 -ml-px
            ${h.level === 3 ? 'pl-6' : 'pl-4'}
            ${activeId === h.id
              ? 'border-accent-500 text-accent-400 font-medium'
              : 'border-transparent text-primary-400 hover:text-primary-200 hover:border-primary-500'
            }`}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );

  // Mobil: katlanabilir accordion
  if (variant === 'mobile') {
    return (
      <div className="mb-8 bg-surface-card/50 border border-surface-border rounded-xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-primary-300 hover:text-white transition-colors"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-accent-500" />
            {label}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="px-5 pb-4">
            <NavLinks />
          </div>
        )}
      </div>
    );
  }

  // Desktop: sticky sidebar
  return (
    <aside className="w-64 shrink-0 h-full">
      <div className="sticky top-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-4 flex items-center gap-2">
          <List className="w-3.5 h-3.5 text-accent-500" />
          {label}
        </p>
        <NavLinks />
      </div>
    </aside>
  );
}
