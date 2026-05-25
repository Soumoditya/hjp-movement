'use client'

import { useEffect, useRef } from 'react'

function Line({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {text}
    </div>
  )
}

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-28 lg:py-44 border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
              Manifesto
            </div>
            <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] text-[#f5f1ea]">
              WHAT
              <br />
              WE
              <br />
              STAND
              <br />
              FOR
            </h2>

            <div className="mt-8 saffron-line" />

            <p className="mt-8 text-sm leading-7 text-[#6b6560] font-devanagari">
              || धर्मो रक्षति रक्षितः ||
            </p>
          </div>

          {/* Right */}
          <div className="space-y-10 text-[#d6d0c7]">
            <div className="text-2xl sm:text-3xl leading-[1.5] font-light space-y-4 border-b border-white/[0.06] pb-10">
              <Line text="Languages disappear." delay={0} />
              <Line text="Sacred spaces decay." delay={80} />
              <Line text="Traditions become aesthetics." delay={160} />
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-8">
              <p className="text-[#f5f1ea] font-semibold text-xl">
                HJP is not a political party.
              </p>
              <p>
                It is a movement of memory — for those who know that Dharma is not ideology,
                Sanskrit is not a dead language, and temples are not tourist sites.
              </p>
              <p>
                We exist because the thread between generations is fraying.
                Because young Hindus grow up disconnected from what their ancestors built.
                Because silence is itself a form of destruction.
              </p>
            </div>

            <div className="border-l-2 border-[#d4621a] pl-8 py-2 space-y-3">
              <p className="text-xl sm:text-2xl font-display text-[#f5f1ea] leading-tight">
                DHARMA IS NOT A BELIEF SYSTEM.
              </p>
              <p className="text-xl sm:text-2xl font-display text-[#f5f1ea] leading-tight">
                IT IS A WAY OF BEING.
              </p>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-8">
              <p>
                We do not promise elections. We promise memory.
                We do not offer slogans. We offer continuity.
              </p>
              <p>
                Heritage survives only when people refuse to let it disappear.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {['Dharma', 'Seva', 'Discipline', 'Tradition'].map((v) => (
                <div key={v} className="border border-white/[0.08] p-4 text-center">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-[#d4621a] mb-2">—</div>
                  <div className="text-sm font-display tracking-wide text-[#f5f1ea]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
