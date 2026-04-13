"use client";

import { useState } from "react";
import { awards, type AwardCategory } from "@/data/awards";

const filters: { label: string; value: AwardCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "National", value: "national" },
  { label: "State", value: "state" },
  { label: "Institutional", value: "institutional" },
];

const collections = [
  "Punjab Kala Foundation (PKF), Jalandhar",
  "Virsa Vihar, Kapurthala",
  "Punjab Technical University, Jalandhar",
  "Gurudwara Singh Sabha Multimedia Museum",
  "Bank of Punjab Calendars (1999, 2008)",
  "Private collections across India, Canada, America, Australia & More",
];

function TrophyIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold"
    >
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
      <path d="M12 16v3" />
      <path d="M8 22h8" />
      <path d="M8 22a1 1 0 0 1-1-1v-1h10v1a1 1 0 0 1-1 1H8z" />
    </svg>
  );
}

export default function Achievements() {
  const [active, setActive] = useState<AwardCategory | "all">("all");

  const filtered =
    active === "all" ? awards : awards.filter((a) => a.category === active);

  return (
    <section
      id="achievements"
      className="scroll-mt-20 py-20 md:py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-body mb-3">
            Awards & Accolades
          </p>
          <div className="w-[60px] h-[2px] bg-gold mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Recognition &amp; Honours
          </h2>
          <p className="text-charcoal/50 text-sm sm:text-base">
            Decades of excellence, acknowledged across India
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`text-sm tracking-wide px-4 py-2 transition-colors border-b-2 ${
                active === f.value
                  ? "border-gold text-charcoal"
                  : "border-transparent text-charcoal/50 hover:text-charcoal/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((award) => (
            <div
              key={award.id}
              className="group border border-charcoal/10 p-6 hover:-translate-y-1 hover:border-l-4 hover:border-l-gold transition-all duration-200"
            >
              <div className="flex items-end gap-2 mb-3">
                <TrophyIcon />
                {award.Type && (
                  <span className="inline-block bg-gold/15 text-gold text-xs px-2 py-0.5 tracking-wide rounded-sm mb-1">
                    {award.Type}
                  </span>
                )}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal mb-1">
                {award.title} ({award.year})
              </h3>
              <p className="text-charcoal/50 text-sm mb-3">{award.body}</p>
            </div>
          ))}
        </div>

        {/* Notable Collections */}
        <div className="mt-20 text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-6">
            Works in Public &amp; Institutional Collections
          </h3>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-charcoal/60">
            {collections.map((item, i) => (
              <span key={i} className="flex items-center gap-3">
                {item}
                {i < collections.length - 1 && (
                  <span className="text-gold">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
