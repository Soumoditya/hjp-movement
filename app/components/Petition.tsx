'use client'

import { useState, useEffect, useRef } from 'react'

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = Math.floor(target * 0.87)
          const duration = 2800
          const startTime = performance.now()

          const update = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(start + (target - start) * eased)
            setCount(current)
            if (progress < 1) requestAnimationFrame(update)
          }

          requestAnimationFrame(update)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-display text-[clamp(3rem,8vw,6rem)] text-[#d4621a] leading-none tabular-nums">
      {count.toLocaleString('en-IN')}
    </div>
  )
}

export default function Petition() {
  const [form, setForm] = useState({ name: '', city: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.city.trim()) return
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1200)
  }

  return (
    <section id="petition" className="border-t border-white/[0.06] bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-white/[0.06] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6">
            Public Petition
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-[#f5f1ea]">
              GAU MATA —
              <br />
              OUR NATIONAL
              <br />
              <span className="text-[#d4621a]">MOTHER</span>
            </h2>
            <p className="text-base leading-8 text-[#a09890] max-w-lg">
              We demand the recognition of Gau Mata as the National Animal of India —
              deserving of legal protection, cultural honor, and civilizational reverence.
              This is not a political statement. It is a dharmic responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Counter section */}
      <div className="border-b border-white/[0.06] py-12 lg:py-16 bg-gradient-to-b from-[#0e0e0e] to-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.07]">
            <div className="lg:px-8 first:lg:pl-0">
              <Counter target={84312} />
              <div className="mt-3 text-xs uppercase tracking-[0.35em] text-[#6b6560]">Supporters</div>
            </div>
            <div className="lg:px-8">
              <div className="font-display text-[clamp(3rem,8vw,6rem)] text-[#f5f1ea] leading-none">28</div>
              <div className="mt-3 text-xs uppercase tracking-[0.35em] text-[#6b6560]">States</div>
            </div>
            <div className="lg:px-8">
              <div className="font-display text-[clamp(3rem,8vw,6rem)] text-[#f5f1ea] leading-none">4.2K</div>
              <div className="mt-3 text-xs uppercase tracking-[0.35em] text-[#6b6560]">Today</div>
            </div>
            <div className="lg:px-8">
              <div className="font-display text-[clamp(3rem,8vw,6rem)] text-[#d4621a] leading-none">1L</div>
              <div className="mt-3 text-xs uppercase tracking-[0.35em] text-[#6b6560]">Target</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-10">
            <div className="flex justify-between text-xs text-[#6b6560] mb-3 uppercase tracking-widest">
              <span>0</span>
              <span>84% Complete</span>
              <span>1,00,000</span>
            </div>
            <div className="h-[3px] bg-white/[0.07] relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#d4621a] transition-all duration-2000"
                style={{ width: '84%' }}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <div className="font-display text-3xl sm:text-4xl text-[#f5f1ea] leading-tight mb-6">
                ADD YOUR
                <br />
                <span className="text-[#d4621a]">NAME</span>
              </div>
              <p className="text-sm leading-7 text-[#6b6560] mb-8">
                Every name matters. Every voice counted.
                Stand with 84,000 Hindus who refuse to let Gau Mata's dignity go unrecognized.
              </p>

              <div className="space-y-4 text-sm text-[#a09890] divide-y divide-white/[0.06]">
                <div className="pb-4">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">We demand</div>
                  <p>Constitutional recognition of Gau Mata as National Animal</p>
                </div>
                <div className="py-4">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">We stand for</div>
                  <p>Strict enforcement against illegal slaughter across all states</p>
                </div>
                <div className="pt-4">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">We believe</div>
                  <p>Gau Seva is Dharma — a civilizational duty, not a political demand</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your city"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-dark"
                    />
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-[#4a4540] mb-6">
                      By signing, you affirm this is a voluntary declaration of support for Gau Mata's protection and recognition. Your data will not be shared with any political party.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#d4621a] py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#070707] hover:bg-[#e8721a] transition-colors duration-200 disabled:opacity-60"
                    >
                      {loading ? 'Signing...' : 'Sign the Petition — Jai Gau Mata'}
                    </button>

                    <div className="mt-4 flex gap-4 text-center">
                      <a
                        href="https://www.instagram.com/hindujanta.party"
                        target="_blank"
                        className="flex-1 border border-white/10 py-3 text-xs uppercase tracking-[0.2em] text-[#a09890] hover:border-white/20 transition-colors"
                      >
                        Share on Instagram
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: 'Gau Mata Petition — HJP',
                              text: 'I signed the HJP petition for Gau Mata\'s recognition as National Animal.',
                              url: window.location.href,
                            })
                          }
                        }}
                        className="flex-1 border border-white/10 py-3 text-xs uppercase tracking-[0.2em] text-[#a09890] hover:border-white/20 transition-colors"
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="text-5xl mb-6">🙏</div>
                  <div className="font-display text-4xl text-[#d4621a] mb-4">JAI GAU MATA</div>
                  <p className="text-base text-[#a09890] leading-8 mb-8">
                    <strong className="text-[#f5f1ea]">{form.name}</strong> from {form.city} —
                    your name stands with 84,000+ Hindus.
                  </p>
                  <div className="font-devanagari text-2xl text-[#d6d0c7]">
                    गावो विश्वस्य मातरः
                  </div>
                  <p className="text-xs text-[#6b6560] mt-3 tracking-widest">
                    Cows are the mothers of the world
                  </p>

                  <a
                    href="https://www.instagram.com/hindujanta.party"
                    target="_blank"
                    className="mt-10 inline-block border border-[#d4621a]/50 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#d4621a] hover:bg-[#d4621a]/10 transition-colors"
                  >
                    Follow HJP @hindujanta.party
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
