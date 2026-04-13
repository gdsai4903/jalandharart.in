"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { paintings } from "@/data/gallery";

const INITIAL_COUNT = 6;

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? paintings : paintings.slice(0, INITIAL_COUNT);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + paintings.length) % paintings.length : null
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % paintings.length : null
    );
  }, []);

  // Keyboard navigation & scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, goPrev, goNext]);

  const current = lightboxIndex !== null ? paintings[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="scroll-mt-20 py-20 md:py-28 px-6 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-body mb-3">
            Selected Works
          </p>
          <div className="w-[60px] h-[2px] bg-gold mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Gallery
          </h2>
          <p className="text-charcoal/50 text-sm sm:text-base">
            A selection of works in oil, portrait, and nature media
          </p>
        </div>

        {/* Masonry grid */}
        <div className="transition-all duration-500 overflow-hidden">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {visible.map((painting, index) => (
              <div
                key={painting.id}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={painting.src}
                  alt={painting.title}
                  width={painting.width}
                  height={painting.height}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-end p-4">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-heading text-lg font-semibold">
                      {painting.title}
                    </p>
                    <p className="text-white/70 text-sm">{painting.medium}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {paintings.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full sm:w-auto border border-gold text-gold px-8 py-3 text-sm tracking-wide hover:bg-gold hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {expanded ? "Show less" : "View full gallery"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        <p className="text-center text-charcoal/40 italic mt-10 text-sm">
          Additional works available on request.
        </p>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div
            className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={current.src}
                alt={current.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-center">
              <p className="text-white font-heading text-xl font-semibold">
                {current.title}
              </p>
              <p className="text-white/60 text-sm">{current.medium}</p>
            </div>

            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-12 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Previous painting"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-12 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Next painting"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
