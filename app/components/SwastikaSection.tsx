import Image from 'next/image'

export default function SwastikaSection() {
  return (
    <section className="border-t border-white/[0.06] grid lg:grid-cols-2 min-h-[80vh]">
      {/* Image left */}
      <div className="relative h-[60vw] lg:h-auto order-2 lg:order-1">
        <Image
          src="/images/swastika.png"
          alt="The Swastika — Sacred Symbol"
          fill
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] to-transparent lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent to-[#0a0a0a]" />
      </div>

      {/* Content right */}
      <div className="order-1 lg:order-2 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
          Sacred Symbol
        </div>

        <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-[#f5f1ea]">
          THE
          <br />
          SWASTIKA
        </h2>

        <div className="mt-6 saffron-line" />

        <p className="mt-8 max-w-sm text-base leading-8 text-[#a09890]">
          It was ours for millennia before one century tried to erase that.
          Sacred mark of auspiciousness, of Dharma, of all that is good.
          One man's crime does not erase ten thousand years of meaning.
        </p>

        <p className="mt-6 max-w-sm text-base leading-8 text-[#a09890]">
          We reclaim it with truth — not with rage, not with apology.
          With the certainty of those who know it was always ours.
        </p>

        <div className="mt-10 space-y-4">
          {[
            { label: 'Auspiciousness', desc: 'स्वस्तिक — that which brings good' },
            { label: 'Dharma', desc: 'The eternal cosmic order' },
            { label: 'Sanatan', desc: 'Beginningless. Endless. Ours.' },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="h-[1px] w-6 bg-[#d4621a] mt-3 flex-shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#d4621a] mb-1">{label}</div>
                <div className="text-sm text-[#6b6560]">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
