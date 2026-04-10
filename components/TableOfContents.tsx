"use client";

import { useEffect, useState } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  headings: Heading[];
  locale: 'tr' | 'en';
}

export default function TableOfContents({ headings, locale }: Props) {
  const [activeId, setActiveId] = useState('');

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

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-4">
          {locale === 'tr' ? 'İçindekiler' : 'Contents'}
        </p>
        <nav className="space-y-1 border-l border-surface-border">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
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
      </div>
    </aside>
  );
}
