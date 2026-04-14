import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-accent-500 mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-primary-300 mb-8">
          Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 text-primary-950 font-semibold rounded-xl hover:bg-accent-400 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-surface-border text-primary-300 font-semibold rounded-xl hover:text-white hover:border-accent-500/50 transition-colors"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
