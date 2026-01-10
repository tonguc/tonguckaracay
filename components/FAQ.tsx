'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-surface-border">
      <h2 className="font-display text-2xl font-bold text-white mb-8">
        {title || 'Sıkça Sorulan Sorular'}
      </h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-surface-card border border-surface-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-card/80 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-white pr-4">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-accent-500 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-5 pt-0 text-primary-300 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
