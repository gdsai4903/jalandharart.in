export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background:
          "linear-gradient(135deg, #FAFAF7 0%, #F5EFE0 50%, #F0E8D0 100%)",
      }}
    >
      <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold text-charcoal leading-tight">
        Sukhwinder Singh
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-charcoal/60 tracking-widest uppercase font-body">
        Oil Painter &middot; Nature Artist &middot; National Awardee
      </p>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-charcoal/50 font-heading italic max-w-xl">
        Capturing the soul of nature, one brushstroke at a time.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#gallery"
          className="border-2 border-gold text-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
        >
          Explore Gallery
        </a>
        <a
          href="#contact"
          className="text-charcoal/60 hover:text-gold text-sm tracking-widest uppercase transition-colors flex items-center gap-2"
        >
          Get in Touch
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>

      {/* Brush-stroke SVG divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20"
        >
          <path
            d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="#FAFAF7"
          />
        </svg>
      </div>
    </section>
  );
}
