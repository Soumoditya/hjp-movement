import Image from 'next/image'

export default function WhatIsHJP() {
  return (
    <section id="dharma" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/what-is-hjp.png"
          alt="What is HJP"
          fill
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-[#070707]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 w-full">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
            What is HJP?
          </div>

          <h2 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] text-[#f5f1ea]">
            A HINDU
            <br />
            MOVEMENT
            <br />
            <span className="text-[#d4621a]">BEYOND</span>
            <br />
            POLITICS
          </h2>

          <div className="mt-8 saffron-line" />

          <p className="mt-8 text-base leading-8 text-[#d6d0c7]">
            No apologies. No footnotes.
          </p>

          <div className="mt-10 space-y-0 divide-y divide-white/[0.07]">
            {[
              { label: 'Dharma', desc: 'Not a religion. The order that holds everything. You live by it or you drift.' },
              { label: 'Seva', desc: 'Not charity. Responsibility. Your hands are the proof of your belief.' },
              { label: 'Discipline', desc: 'You cannot protect what you don\'t practice. Start there.' },
              { label: 'Tradition', desc: 'What your ancestors chose not to abandon. Now it\'s your turn.' },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-center gap-6 py-5">
                <div className="h-1 w-1 rounded-full bg-[#d4621a] flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[#d4621a] mb-1">{label}</div>
                  <div className="text-sm text-[#a09890]">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
