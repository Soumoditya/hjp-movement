import { ArrowRight, BookOpen, HeartHandshake, Instagram, Landmark, Shield } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Dharma',
    text: 'Discipline, sacredness and continuity rooted in Hindu civilizational identity.',
  },
  {
    icon: HeartHandshake,
    title: 'Seva',
    text: 'Real action through temple seva, community work and responsibility.',
  },
  {
    icon: BookOpen,
    title: 'Sanskrit',
    text: 'Preserving scriptural memory, philosophy and traditional knowledge.',
  },
  {
    icon: Landmark,
    title: 'Temples',
    text: 'Sacred places deserve dignity, preservation and disciplined conduct.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0b] text-[#f5f5f2]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(201,120,34,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />

      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <div>
            <div className="text-sm tracking-[0.35em] font-bold">HJP</div>
            <div className="mt-1 text-[11px] tracking-[0.28em] text-[#ddd8cf]">एक धर्म • एक राष्ट्र</div>
          </div>

          <a
            href="https://www.instagram.com/hindujanta.party"
            target="_blank"
            className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-md hover:bg-white/10 transition"
          >
            <Instagram className="h-4 w-4 text-[#c97822]" />
            @hindujanta.party
          </a>
        </header>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center pt-20 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c97822]/30 bg-[#c97822]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f5f5f2]">
              <span className="h-2 w-2 rounded-full bg-[#c97822]" />
              Hindu Cultural Movement
            </div>

            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-[-0.07em] max-w-5xl">
              Dharma. Seva.
              <br />
              Sanskrit.
              <br />
              Sacred Identity.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-[#ddd8cf] leading-8 max-w-2xl">
              A premium modern Hindu cultural movement platform focused on Dharma, temple dignity, Sanskrit awareness, sacred traditions and disciplined identity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/hindujanta.party"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f2] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Follow HJP <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#petition"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                Support Campaign
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[#c97822]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <div className="rounded-[1.7rem] border border-white/10 bg-[#111111] p-8 min-h-[620px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#ddd8cf]">
                  <span>HJP</span>
                  <span>@hindujanta.party</span>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#c97822]/30 bg-[#c97822]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] mb-6">
                    Dharma Above Politics
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-black leading-[0.92] tracking-[-0.06em] max-w-md">
                    Protect what is sacred.
                  </h2>

                  <p className="mt-6 text-[#ddd8cf] leading-8 max-w-md text-sm sm:text-base">
                    Modern editorial movement branding inspired by temples, Sanskrit, seva and disciplined Hindu identity.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {['Sanskrit', 'Gau Mata', 'Temple Seva', 'Tradition'].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs tracking-[0.22em]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="petition" className="border-t border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ddd8cf]">
              Public Campaign
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.06em] leading-[0.95] max-w-4xl">
              Gau Mata is not symbolic for us. She is mother.
            </h2>

            <p className="mt-6 max-w-3xl text-[#ddd8cf] leading-8 text-sm sm:text-base">
              This campaign represents public Hindu support for stronger protection, preservation and dignity of Gau Mata within Hindu tradition and cultural life.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon

                return (
                  <div
                    key={pillar.title}
                    className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c97822]/30 bg-[#c97822]/10 text-[#c97822]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em]">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#ddd8cf]">
                      {pillar.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#f5f5f2] px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Support the Campaign
              </button>

              <a
                href="https://www.instagram.com/hindujanta.party"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold hover:bg-white/10 transition"
              >
                Share @hindujanta.party
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
