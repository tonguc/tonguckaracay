"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTheme } from './ThemeProvider';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => <h2 className={`text-2xl font-display font-bold ${isLight ? 'text-slate-900' : 'text-white'} mt-12 mb-6`}>{children}</h2>,
        h3: ({ children }) => <h3 className={`text-xl font-display font-semibold ${isLight ? 'text-slate-900' : 'text-white'} mt-8 mb-4`}>{children}</h3>,
        h4: ({ children }) => <h4 className={`text-lg font-display font-semibold ${isLight ? 'text-slate-900' : 'text-white'} mt-6 mb-3`}>{children}</h4>,
        p: ({ children }) => <p className={`${isLight ? 'text-slate-600' : 'text-primary-300'} leading-relaxed mb-6`}>{children}</p>,
        a: ({ href, children }) => <a href={href} className="text-accent-500 hover:text-accent-400 hover:underline transition-colors">{children}</a>,
        strong: ({ children }) => <strong className={`${isLight ? 'text-slate-900' : 'text-white'} font-semibold`}>{children}</strong>,
        em: ({ children }) => <em className={`${isLight ? 'text-slate-700' : 'text-primary-200'} italic`}>{children}</em>,
        ul: ({ children }) => <ul className={`list-disc list-inside space-y-2 mb-6 ${isLight ? 'text-slate-600' : 'text-primary-300'}`}>{children}</ul>,
        ol: ({ children }) => <ol className={`list-decimal list-inside space-y-2 mb-6 ${isLight ? 'text-slate-600' : 'text-primary-300'}`}>{children}</ol>,
        li: ({ children }) => <li className={`${isLight ? 'text-slate-600' : 'text-primary-300'} pl-2`}>{children}</li>,
        blockquote: ({ children }) => <blockquote className={`border-l-4 border-accent-500 ${isLight ? 'bg-slate-100 text-slate-700' : 'bg-surface-card/50 text-primary-200'} py-4 px-6 rounded-r-xl my-6 italic`}>{children}</blockquote>,
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) return <code className={`${isLight ? 'bg-slate-200' : 'bg-surface-card'} text-accent-500 px-1.5 py-0.5 rounded text-sm`}>{children}</code>;
          return <code className={className}>{children}</code>;
        },
        pre: ({ children }) => <pre className={`${isLight ? 'bg-slate-800' : 'bg-surface-darker'} border ${isLight ? 'border-slate-700' : 'border-surface-border'} rounded-xl p-4 overflow-x-auto mb-6`}>{children}</pre>,
        table: ({ children }) => <div className="overflow-x-auto mb-6"><table className="w-full border-collapse">{children}</table></div>,
        thead: ({ children }) => <thead className={`${isLight ? 'bg-slate-100' : 'bg-surface-card'}`}>{children}</thead>,
        th: ({ children }) => <th className={`${isLight ? 'text-slate-900 border-slate-300' : 'text-white border-surface-border'} font-semibold p-3 text-left border`}>{children}</th>,
        td: ({ children }) => <td className={`p-3 border ${isLight ? 'border-slate-300 text-slate-600' : 'border-surface-border text-primary-300'}`}>{children}</td>,
        tr: ({ children }) => <tr className={`${isLight ? 'hover:bg-slate-50' : 'hover:bg-surface-card/50'} transition-colors`}>{children}</tr>,
        hr: () => <hr className={`${isLight ? 'border-slate-300' : 'border-surface-border'} my-8`} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
