import Image from 'next/image'

export default function GauMataSection() {
  return (
    <section id="gau-mata" className="border-t border-white/[0.06]">
      {/* Full bleed image */}
      <div className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <Image
          src="/images/gau-mata.png"
          alt="Gau Mata"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 w-full">
            <div className="max-w-xl">
              <h2 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] text-[#f5f1ea]">
                GAU
                <br />
                MATA
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Text below image */}
      <div className="bg-[#0a0a0a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="font-devanagari text-3xl sm:text-4xl text-[#f5f1ea] leading-relaxed mb-4">
                गावो विश्वस्य मातरः
              </div>
              <div className="text-xs uppercase tracking-[0.4em] text-[#d4621a] mb-8">
                Cows are the mothers of the world
              </div>

              <p className="text-2xl sm:text-3xl font-display text-[#f5f1ea] leading-tight">
                GAU MATA IS NOT SYMBOLIC FOR US.
                <br />
                <span className="text-[#d4621a]">SHE IS MOTHER.</span>
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-8 text-[#a09890]">
                In Hindu tradition, Gau Mata represents the living embodiment of nurture, abundance,
                and sacred continuity. She is not a symbol. She is not a political argument.
                She is a being of immense spiritual significance — woven into the dharmic fabric
                of this civilization for millennia.
              </p>
              <p className="text-base leading-8 text-[#a09890]">
                We stand for her protection — not as a slogan, but as a sacred responsibility.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {['Protection', 'Dharma', 'Respect'].map((v) => (
                  <div key={v} className="border border-white/[0.08] p-4 text-center">
                    <div className="text-xs uppercase tracking-[0.25em] text-[#d4621a]">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
