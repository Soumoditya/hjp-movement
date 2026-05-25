import Image from 'next/image'

export default function SanskritSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden border-t border-white/[0.06]">
      {/* Background - image right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5">
        <Image
          src="/images/sanskrit-matters.png"
          alt="Sanskrit Matters"
          fill
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#070707]/50 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 w-full">
        <div className="max-w-xl">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
            Sacred Memory
          </div>

          <h2 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.88] text-[#f5f1ea]">
            WHY
            <br />
            SANSKRIT
            <br />
            <span className="text-[#d4621a]">MATTERS</span>
          </h2>

          <div className="mt-8 saffron-line" />

          <p className="mt-8 text-base leading-8 text-[#d6d0c7]">
            The language of our roots. Not a relic — a living vessel of 5,000 years of thought.
          </p>

          <div className="mt-10 space-y-6">
            <div className="font-devanagari text-2xl sm:text-3xl text-[#f5f1ea] leading-relaxed">
              संस्कृतं नाम दैवी वाक्
            </div>
            <p className="text-xs text-[#6b6560] tracking-widest">
              Sanskrit is the divine speech itself
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              { icon: '📜', label: 'Our scriptures carry Sanskrit' },
              { icon: '💡', label: 'Our knowledge lives in Sanskrit' },
              { icon: '🧬', label: 'Our identity breathes in Sanskrit' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-lg">{icon}</span>
                <span className="text-sm text-[#a09890]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
