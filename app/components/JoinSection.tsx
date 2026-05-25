import Image from 'next/image'

export default function JoinSection() {
  return (
    <section className="border-t border-white/[0.06] py-24 lg:py-36 relative overflow-hidden">
      {/* Background logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] opacity-[0.04] pointer-events-none">
        <Image
          src="/images/hjp-brush-logo.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/hjp-flag-logo.png"
              alt="HJP"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>

          <div className="font-devanagari text-lg text-[#d4621a] mb-4">
            || धर्मो रक्षति रक्षितः ||
          </div>

          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] text-[#f5f1ea] mb-4">
            THIS IS
            <br />
            YOUR MOVEMENT
          </h2>

          <p className="text-base sm:text-lg leading-8 text-[#a09890] max-w-xl mx-auto mb-12">
            Not for spectators. For those who take Dharma seriously —
            not as nostalgia, not as politics, but as a way of life.
            If that is you, you already know.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/hindujanta.party"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-[#d4621a] px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#070707] hover:bg-[#e8721a] transition-colors duration-200"
            >
              Follow @hindujanta.party
            </a>
            <a
              href="#petition"
              className="inline-flex items-center justify-center gap-3 border border-white/15 px-10 py-4 text-xs uppercase tracking-[0.25em] text-[#f5f1ea] hover:border-[#d4621a]/50 transition-colors duration-200"
            >
              Sign the Petition
            </a>
          </div>

          <div className="mt-20 pt-12 border-t border-white/[0.06]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { label: 'Dharma', devanagari: 'धर्म' },
                { label: 'Shakti', devanagari: 'शक्ति' },
                { label: 'Unity', devanagari: 'एकता' },
                { label: 'Satya', devanagari: 'सत्य' },
              ].map(({ label, devanagari }) => (
                <div key={label} className="text-center">
                  <div className="font-devanagari text-2xl text-[#d4621a] mb-2">{devanagari}</div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-[#6b6560]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
