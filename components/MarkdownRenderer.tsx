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
          <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-display font-semibold text-white mt-8 mb-4">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-display font-semibold text-white mt-6 mb-3">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="text-primary-300 leading-relaxed mb-6">
            {children}
          </p>
        ),
        a: ({ href, children }) => (
          <a 
            href={href} 
            className="text-accent-400 hover:text-accent-300 hover:underline transition-colors"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="text-white font-semibold">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="text-primary-200 italic">{children}</em>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 mb-6 text-primary-300">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 mb-6 text-primary-300">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-primary-300 pl-2">
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-accent-500 bg-surface-card/50 py-4 px-6 rounded-r-xl my-6 text-primary-200 italic">
            {children}
          </blockquote>
        ),
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="bg-surface-card text-accent-400 px-1.5 py-0.5 rounded text-sm">
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
          <pre className="bg-surface-darker border border-surface-border rounded-xl p-4 overflow-x-auto mb-6">
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
          <thead className="bg-surface-card">
            {children}
          </thead>
        ),
        th: ({ children }) => (
          <th className="text-white font-semibold p-3 text-left border border-surface-border">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="p-3 border border-surface-border text-primary-300">
            {children}
          </td>
        ),
        tr: ({ children }) => (
          <tr className="hover:bg-surface-card/50 transition-colors">
            {children}
          </tr>
        ),
        hr: () => (
          <hr className="border-surface-border my-8" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
