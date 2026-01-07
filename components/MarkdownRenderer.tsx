"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="text-2xl font-display font-bold dark:text-white text-slate-900 mt-12 mb-6">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-display font-semibold dark:text-white text-slate-900 mt-8 mb-4">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-display font-semibold dark:text-white text-slate-900 mt-6 mb-3">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="dark:text-primary-300 text-slate-600 leading-relaxed mb-6">
            {children}
          </p>
        ),
        a: ({ href, children }) => (
          <a 
            href={href} 
            className="text-accent-500 hover:text-accent-400 hover:underline transition-colors"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="dark:text-white text-slate-900 font-semibold">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="dark:text-primary-200 text-slate-700 italic">{children}</em>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 mb-6 dark:text-primary-300 text-slate-600">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 mb-6 dark:text-primary-300 text-slate-600">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="dark:text-primary-300 text-slate-600 pl-2">
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-accent-500 dark:bg-surface-card/50 bg-slate-100 py-4 px-6 rounded-r-xl my-6 dark:text-primary-200 text-slate-700 italic">
            {children}
          </blockquote>
        ),
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="dark:bg-surface-card bg-slate-200 text-accent-500 px-1.5 py-0.5 rounded text-sm">
                {children}
              </code>
            );
          }
          return (
            <code className={className}>
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="dark:bg-surface-darker bg-slate-800 border dark:border-surface-border border-slate-700 rounded-xl p-4 overflow-x-auto mb-6">
            {children}
          </pre>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="dark:bg-surface-card bg-slate-100">
            {children}
          </thead>
        ),
        th: ({ children }) => (
          <th className="dark:text-white text-slate-900 font-semibold p-3 text-left border dark:border-surface-border border-slate-300">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="p-3 border dark:border-surface-border border-slate-300 dark:text-primary-300 text-slate-600">
            {children}
          </td>
        ),
        tr: ({ children }) => (
          <tr className="dark:hover:bg-surface-card/50 hover:bg-slate-50 transition-colors">
            {children}
          </tr>
        ),
        hr: () => (
          <hr className="dark:border-surface-border border-slate-300 my-8" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
