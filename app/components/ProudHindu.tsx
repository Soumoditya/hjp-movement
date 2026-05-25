import Image from 'next/image'

export default function ProudHindu() {
  return (
    <section className="border-t border-white/[0.06] grid lg:grid-cols-2 min-h-[80vh]">
      {/* Left content */}
      <div className="flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
          Identity
        </div>

        <h2 className="font-display text-[clamp(4rem,8vw,7rem)] leading-[0.88] text-[#f5f1ea]">
          PROUD
          <br />
          HINDU
        </h2>

        <div className="mt-6 saffron-line" />

        <div className="mt-8 space-y-2">
          <div className="font-display text-xl text-[#d4621a] tracking-wider">DISCIPLINED HINDU</div>
        </div>

        <p className="mt-8 max-w-sm text-base leading-8 text-[#a09890]">
          Discipline is our identity. Not worn as performance. Lived as inheritance.
        </p>

        <div className="mt-10 font-devanagari text-xl text-[#d6d0c7]">
          धर्मो रक्षति रक्षितः
        </div>
        <p className="text-xs text-[#6b6560] mt-2 tracking-widest">
          Dharma protects those who protect it
        </p>
      </div>

      {/* Right image */}
      <div className="relative h-[60vw] lg:h-auto">
        <Image
          src="/images/proud-hindu.png"
          alt="Proud Hindu"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent lg:hidden" />
      </div>
    </section>
  )
}
