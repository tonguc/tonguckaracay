"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlidePost {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface Props {
  locale: string;
  posts: SlidePost[];
}

const AUTO_ADVANCE_MS = 6000;

/**
 * Bölüm 1 — Hero Manşet Slider.
 * WP tema manşet alanı gibi: en yeni yazılar büyük, görsel ağırlıklı bir
 * slider'da — arka plan görsel + üzerine bindirilmiş başlık, nokta
 * navigasyonu + ok butonları, otomatik geçiş (hover'da durur).
 */
export default function HeroSlider({ locale, posts }: Props) {
  const isTr = locale === "tr";
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % posts.length);
  }, [posts.length]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + posts.length) % posts.length);
  }, [posts.length]);

  useEffect(() => {
    if (paused || posts.length <= 1) return;
    const id = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, next, posts.length]);

  if (posts.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[440px] w-full sm:h-[500px] md:h-[560px] lg:h-[640px]">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={isTr ? `/${post.slug}` : `/en/${post.slug}`}
            aria-hidden={i !== active}
            tabIndex={i === active ? 0 : -1}
            className={`absolute inset-0 block transition-opacity duration-700 ease-out ${
              i === active ? "opacity-100 z-10" : "pointer-events-none opacity-0 z-0"
            }`}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/50 to-surface-darker/10" />

            <div className="container-custom relative z-10 flex h-full flex-col justify-end pb-16 md:pb-20">
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent-500/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-surface-darker">
                {post.category}
              </span>
              <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.15] text-white drop-shadow-sm sm:text-4xl md:text-5xl">
                {post.title}
              </h2>
              <p className="mt-4 max-w-2xl line-clamp-2 text-base leading-relaxed text-primary-200 md:text-lg">
                {post.description}
              </p>
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 font-semibold text-accent-300">
                {isTr ? "Yazıyı Oku" : "Read Article"}
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}

        {posts.length > 1 && (
          <>
            <button
              type="button"
              aria-label={isTr ? "Önceki" : "Previous"}
              onClick={prev}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-surface-darker/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-surface-darker/80 md:left-6 md:p-3"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              type="button"
              aria-label={isTr ? "Sonraki" : "Next"}
              onClick={next}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-surface-darker/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-surface-darker/80 md:right-6 md:p-3"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-8">
              {posts.map((post, i) => (
                <button
                  key={post.slug}
                  type="button"
                  aria-label={`${isTr ? "Slayt" : "Slide"} ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-accent-400" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
