import { ArrowRight, BookOpen, HeartHandshake, Instagram, Landmark, Shield, Sparkles, Flame, ScrollText } from 'lucide-react'

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

const gallery = [
  'DHARMA ABOVE POLITICS',
  'PROUD HINDU',
  'WHY SANSKRIT MATTERS',
  'TEMPLES ARE SACRED',
  'SEVA IS DHARMA',
  'GAU MATA',
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f5f5f2]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(201,120,34,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />

      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <div>
            <div className="text-sm tracking-[0.35em] font-bold">HJP</div>
            <div className="mt-1 text-[11px] tracking-[0.28em] text-[#ddd8cf]">एक धर्म • एक राष्ट्र</div>
          </div>

          <a href="https://www.instagram.com/hindujanta.party" target="_blank" className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-md hover:bg-white/10 transition">
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

            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.88] tracking-[-0.08em] max-w-5xl">
              Dharma.
              <br />
              Seva.
              <br />
              Sacred Identity.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-[#ddd8cf] leading-8 max-w-2xl">
              A modern Hindu cultural platform focused on Dharma, Sanskrit, temple dignity and preservation of sacred traditions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://www.instagram.com/hindujanta.party" className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f2] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Follow HJP <ArrowRight className="h-4 w-4" />
              </a>

              <a href="#campaign" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
                Explore Campaigns
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[#c97822]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <div className="rounded-[1.7rem] border border-white/10 bg-[#111111] p-8 min-h-[640px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#ddd8cf]">
                  <span>HJP</span>
                  <span>@hindujanta.party</span>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#c97822]/30 bg-[#c97822]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] mb-6">
                    <Sparkles className="h-3 w-3 text-[#c97822]" />
                    Dharma Above Politics
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-black leading-[0.92] tracking-[-0.06em] max-w-md">
                    Protect what is sacred.
                  </h2>

                  <p className="mt-6 text-[#ddd8cf] leading-8 max-w-md text-sm sm:text-base">
                    Inspired by temples, Sanskrit manuscripts, saffron dhwaj and disciplined cultural identity.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {['Sanskrit', 'Gau Mata', 'Temple Seva', 'Tradition'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-xs tracking-[0.22em] hover:border-[#c97822]/40 transition">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ddd8cf]">Core Pillars</p>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black tracking-[-0.06em] leading-[0.94]">
              Built with a modern editorial visual language.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <div key={pillar.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 hover:-translate-y-1 transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c97822]/30 bg-[#c97822]/10 text-[#c97822]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em]">{pillar.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#ddd8cf]">{pillar.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="campaign" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
              <div className="flex items-center gap-3 text-[#c97822]">
                <Flame className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.3em]">Public Campaign</span>
              </div>

              <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-[-0.06em] leading-[0.94]">
                Gau Mata is mother.
              </h2>

              <p className="mt-6 text-[#ddd8cf] leading-8 text-sm sm:text-base">
                A cultural awareness initiative focused on seva, preservation and dignity of Gau Mata within Hindu tradition.
              </p>

              <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[#ddd8cf]">
                  Community Support
                </div>

                <p className="mt-4 text-sm sm:text-base leading-8 text-[#ddd8cf]">
                  The movement is currently growing through Instagram awareness, poster campaigns and cultural outreach.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#f5f5f2] px-7 py-4 text-sm font-semibold text-black hover:scale-[1.02] transition">
                  Support Campaign
                </button>

                <a href="https://www.instagram.com/hindujanta.party" className="rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold hover:bg-white/10 transition">
                  Share Movement
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {gallery.map((item, index) => (
                <div key={item} className={`rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,#1a1a1a,#0e0e0e)] p-7 min-h-[220px] flex flex-col justify-between ${index % 2 === 0 ? 'sm:translate-y-10' : ''}`}>
                  <div className="flex items-center justify-between text-[#c97822]">
                    <ScrollText className="h-5 w-5" />
                    <span className="text-[11px] uppercase tracking-[0.25em]">HJP</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-[-0.05em] leading-[0.96]">
                      {item}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#ddd8cf]">
                      Awareness visuals built with a restrained editorial aesthetic.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 sm:p-12 lg:p-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ddd8cf]">Instagram</p>

            <h2 className="mt-5 text-4xl sm:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-4xl">
              Posters, campaigns and cultural awareness in one visual identity.
            </h2>

            <p className="mt-6 max-w-3xl text-[#ddd8cf] leading-8 text-sm sm:text-base">
              HJP visuals follow a consistent dark editorial style with restrained saffron accents and modern typography.
            </p>

            <a href="https://www.instagram.com/hindujanta.party" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f5f5f2] px-7 py-4 text-sm font-semibold text-black hover:scale-[1.02] transition">
              Visit @hindujanta.party
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
