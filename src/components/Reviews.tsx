"use client";

import Image from "next/image";
import { reviews } from "@/data/reviews";
import type { Review } from "@/data/reviews";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function ReviewCard({ review }: { review: Review }) {
  const displayName = review.showName
    ? review.buyerName
    : "Anonymous collector";
  const initials = review.showName
    ? getInitials(review.buyerName)
    : "AC";

  return (
    <div className="w-[320px] flex-shrink-0 bg-white border border-charcoal/10 rounded-lg p-5">
      {/* Painting info row */}
      <div className="flex items-start gap-3 mb-4">
        <div className="relative w-[72px] h-[88px] flex-shrink-0 rounded overflow-hidden">
          <Image
            src={review.paintingImage}
            alt={review.paintingTitle}
            fill
            className="object-cover"
            sizes="72px"
          />
        </div>
        <div className="min-w-0">
          <span className="inline-block bg-gold/15 text-gold text-[10px] px-2 py-0.5 tracking-wide rounded-sm mb-1">
            {review.paintingMedium}
          </span>
          <p className="font-heading text-sm font-semibold text-charcoal leading-snug">
            {review.paintingTitle}
          </p>
          <p className="text-charcoal/40 text-xs">{review.year}</p>
        </div>
      </div>

      {/* Quote */}
      <span className="font-heading text-[40px] leading-none text-gold select-none">
        &ldquo;
      </span>
      <p className="text-charcoal/70 text-sm italic leading-relaxed -mt-4 mb-4">
        {review.reviewText}
      </p>

      {/* Buyer */}
      <div className="flex items-center gap-3 pt-3 border-t border-charcoal/5">
        <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="text-charcoal text-sm font-medium truncate">
            {displayName}
          </p>
          {review.showName && (
            <p className="text-charcoal/40 text-xs">{review.buyerCity}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 py-20 md:py-28 bg-cream overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12 max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-body mb-3">
          From Our Collectors
        </p>
        <div className="w-[60px] h-[2px] bg-gold mx-auto mb-6" />
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-3">
          What Collectors Say
        </h2>
        <p className="text-charcoal/50 text-sm sm:text-base">
          Reviews from those who carry a piece of his work home
        </p>
      </div>

      {/* Marquee */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="marquee-scroll">
          <div className="flex gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="flex gap-6">
            {reviews.map((review) => (
              <ReviewCard key={`clone-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
