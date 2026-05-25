import Image from 'next/image'

export default function TemplesSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/temples-sacred.png"
          alt="Temples Are Sacred"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
            Sacred Spaces
          </div>

          <h2 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] text-[#f5f1ea]">
            TEMPLES
            <br />
            ARE
            <br />
            <span className="text-[#d4621a]">SACRED</span>
          </h2>

          <div className="mt-8 saffron-line" />

          <p className="mt-8 max-w-lg text-base sm:text-lg leading-8 text-[#d6d0c7]">
            Respect the space. A sacred place should never be neglected.
            Not monuments. Living centers of devotion, memory, and belonging.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm">
            {[
              { label: 'Discipline' },
              { label: 'Respect' },
              { label: 'Seva' },
            ].map(({ label }) => (
              <div key={label} className="border border-white/10 py-3 text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#d4621a]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
