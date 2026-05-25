import Image from 'next/image'

export default function SevaSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0">
        <Image
          src="/images/seva-dharma.png"
          alt="Seva is Dharma"
          fill
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-[#070707]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 to-[#070707]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 w-full">
        <div className="max-w-xl">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
            Action
          </div>

          <h2 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.88] text-[#f5f1ea]">
            SEVA
            <br />
            IS
            <br />
            <span className="text-[#d4621a]">DHARMA</span>
          </h2>

          <div className="mt-8 saffron-line" />

          <p className="mt-8 text-base sm:text-lg leading-8 text-[#d6d0c7]">
            Action matters. Dharma is practiced through action.
          </p>

          <div className="mt-12 space-y-0 divide-y divide-white/[0.07] max-w-xs">
            {[
              { label: 'Service', desc: 'Mandir seva hamara dharma' },
              { label: 'Discipline', desc: 'Every action is a statement' },
              { label: 'Responsibility', desc: 'To the community, to the tradition' },
            ].map(({ label, desc }) => (
              <div key={label} className="py-4">
                <div className="text-xs uppercase tracking-[0.3em] text-[#d4621a] mb-1">{label}</div>
                <div className="text-sm text-[#6b6560]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
