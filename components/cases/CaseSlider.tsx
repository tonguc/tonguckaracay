"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  alt: string;
  /** Kartlar aynı anda değişmesin diye başlangıç gecikmesi (ms). */
  offset?: number;
  interval?: number;
}

/**
 * Vaka kartı görsel slaytı — crossfade ile sürekli döner.
 * Üzerine gelince / klavye odağında durur; prefers-reduced-motion'da otomatik dönmez.
 */
export default function CaseSlider({ images, alt, offset = 0, interval = 3500 }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (images.length < 2 || paused || reduced) return;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setActive((i) => (i + 1) % images.length);
      timer = setInterval(() => setActive((i) => (i + 1) % images.length), interval);
    }, interval + offset);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [images.length, paused, reduced, interval, offset]);

  return (
    <div
      className="relative aspect-[3/2] w-full overflow-hidden bg-surface-darker"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : `${alt} — ${i + 1}`}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className={`object-cover object-top transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== active}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-black/50 to-transparent pb-2.5 pt-6">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${i + 1} / ${images.length}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-accent-400" : "w-1.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
