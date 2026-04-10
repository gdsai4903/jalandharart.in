import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 md:py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Portrait */}
        <div className="relative aspect-[4/5] bg-cream overflow-hidden">
          <Image
            src="/images/paintings/self-portrait.jpg"
            alt="Sukhwinder Singh — Oil Painter & Nature Artist"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Bio */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-body mb-3">
            About the Artist
          </p>
          <div className="w-[60px] h-[2px] bg-gold mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            A Lifelong Love for Light and Nature
          </h2>
          <div className="space-y-4 text-charcoal/70 leading-relaxed text-sm sm:text-base">
            <p>
              Sukhwinder Singh is an accomplished oil painter and nature artist
              based in Jalandhar, Punjab, whose work spans evocative landscapes,
              Sikh religious art, and delicate paintings on handmade sheets. His
              paintings have been exhibited at prestigious venues including the
              Jehangir Art Gallery in Mumbai, Punjab Lalit Kala Akademi in
              Chandigarh, and AIFACS in New Delhi. He has participated in more
              than fifty art workshops and exhibitions across India.
            </p>
            <p>
              His work is held in private collections across India and abroad,
              and has been featured in publications and calendars including two
              editions of the Bank of Punjab calendar. His paintings adorn the
              walls of government institutions, religious spaces, and the
              Multimedia Museum at Gurudwara Singh Sabha, Model Town, Jalandhar.
            </p>
            <p>
              As an art educator, he has been designated a State Resource Person
              by the Punjab School Education Department, and has mentored
              generations of students who continue to excel in the field of art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
