import { ArrowRight, Instagram } from 'lucide-react'

const pillars = [
  {
    title: 'DHARMA',
    text: 'Civilizations disappear slowly. First memory. Then symbols. Then faith.',
  },
  {
    title: 'SANSKRIT',
    text: 'A language carrying scripture, philosophy and thousands of years of continuity.',
  },
  {
    title: 'TEMPLES',
    text: 'Temples are not monuments. They are living centers of devotion and memory.',
  },
  {
    title: 'GAU MATA',
    text: 'गावो विश्वस्य मातरः — Gau Mata is mother within Hindu tradition.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-[#f5f1ea]">
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(circle_at_top,rgba(201,120,34,0.5),transparent_30%)]" />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <header className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold tracking-[0.4em]">HJP</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.35em] text-[#d6d0c7]">
                एक धर्म • एक राष्ट्र
              </div>
            </div>

            <a
              href="https://www.instagram.com/hindujanta.party"
              target="_blank"
              className="hidden sm:flex items-center gap-2 border border-white/10 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-white/[0.06]"
            >
              <Instagram className="h-4 w-4 text-[#c97822]" />
              @hindujanta.party
            </a>
          </header>

          <div className="pt-24 pb-28 lg:pt-32 lg:pb-40">
            <div className="max-w-5xl">
              <div className="text-[11px] uppercase tracking-[0.38em] text-[#c97822]">
                Hindu Cultural Movement
              </div>

              <h1 className="mt-8 text-6xl sm:text-7xl lg:text-[9rem] font-black tracking-[-0.09em] leading-[0.84]">
                Dharma.
                <br />
                Memory.
                <br />
                Continuity.
              </h1>

              <p className="mt-10 max-w-2xl text-base sm:text-lg leading-9 text-[#d6d0c7]">
                Focused on Sanskrit, temple preservation, Gau Seva and continuity of Hindu traditions.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/hindujanta.party"
                  className="inline-flex items-center gap-2 bg-[#f5f1ea] px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Follow HJP
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-[#c97822]">
                Manifesto
              </div>

              <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-[-0.07em] leading-[0.92]">
                Heritage survives only when people protect it.
              </h2>
            </div>

            <div className="space-y-8 text-[#d6d0c7] text-base sm:text-lg leading-9">
              <p>
                Languages disappear.
                <br />
                Sacred spaces decay.
                <br />
                Traditions become aesthetics.
              </p>

              <p>
                HJP exists to preserve continuity between faith, memory and future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-[#0b0b0b] p-8 lg:p-10 min-h-[320px] flex flex-col justify-between">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[#c97822]">
                  {pillar.title}
                </div>

                <p className="text-2xl leading-[1.4] tracking-[-0.04em] text-[#f5f1ea] max-w-xs">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <div className="text-[11px] uppercase tracking-[0.35em] text-[#c97822]">
            Gau Mata
          </div>

          <h2 className="mt-8 text-5xl sm:text-7xl font-black tracking-[-0.08em] leading-[0.9]">
            गावो विश्वस्य मातरः
          </h2>

          <p className="mt-10 text-lg sm:text-2xl leading-[1.8] text-[#d6d0c7] max-w-4xl mx-auto">
            Gau Mata is not symbolic.
            <br />
            She is mother.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-[#c97822]">
                Instagram
              </div>

              <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-[-0.07em] leading-[0.92]">
                Posters rooted in memory, faith and continuity.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base sm:text-lg leading-9 text-[#d6d0c7]">
                From Sanskrit awareness to temple seva, every campaign reflects tradition through modern visual storytelling.
              </p>

              <a
                href="https://www.instagram.com/hindujanta.party"
                className="mt-10 inline-flex items-center gap-2 border border-white/10 px-7 py-4 text-sm uppercase tracking-[0.22em] transition hover:bg-white/[0.05]"
              >
                Visit Instagram
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
