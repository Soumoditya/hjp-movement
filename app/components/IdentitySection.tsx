import Image from 'next/image'

export default function IdentitySection() {
  return (
    <section className="border-t border-white/[0.06] relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/protect-identity.png"
          alt="Protect Identity"
          fill
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/75 to-[#070707]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 w-full">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
            Civilizational Duty
          </div>

          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] text-[#f5f1ea]">
            PROTECT
            <br />
            IDENTITY
          </h2>

          <div className="mt-2 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] text-[#d4621a]">
            PRESERVE
            <br />
            TRADITION
          </div>

          <div className="mt-8 saffron-line" />

          <p className="mt-8 text-base sm:text-lg leading-8 text-[#d6d0c7]">
            Our traditions survive through us.
            Not through institutions. Not through governments.
            Through people who refuse to forget.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xs">
            {[
              { label: 'Roots', symbol: '🌿' },
              { label: 'Discipline', symbol: '⚔️' },
              { label: 'Continuity', symbol: '∞' },
            ].map(({ label, symbol }) => (
              <div key={label} className="text-center">
                <div className="text-2xl mb-2">{symbol}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-[#d4621a]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
