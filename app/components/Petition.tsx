'use client'

import { useState, useEffect, useRef } from 'react'

function AnimatedCount({ value }: { value: number }) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)

  useEffect(() => {
    if (value === prev.current) return
    const from = prev.current
    const to = value
    prev.current = value

    const duration = 900
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(from + (to - from) * ease))
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value])

  return (
    <span className="font-display text-[clamp(2.8rem,7vw,5.5rem)] text-[#d4621a] leading-none tabular-nums">
      {display.toLocaleString('en-IN')}
    </span>
  )
}

export default function Petition() {
  const [count, setCount] = useState<number | null>(null)
  const [kvReady, setKvReady] = useState(true)
  const [form, setForm] = useState({ name: '', city: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch real count on mount + every 30s for live feel
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/petition')
        const data = await res.json()
        setCount(data.count)
        setKvReady(data.ok)
      } catch {
        setCount(0)
      }
    }
    fetchCount()
    const id = setInterval(fetchCount, 30_000)
    return () => clearInterval(id)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.city.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/petition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      setCount(data.count)
      setSubmitted(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
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
              GAU MATA —<br />OUR NATIONAL<br />
              <span className="text-[#d4621a]">MOTHER</span>
            </h2>
            <p className="text-base leading-8 text-[#a09890] max-w-lg">
              We demand the recognition of Gau Mata as the National Animal of India —
              deserving of legal protection, cultural honor, and civilizational reverence.
              Not a political statement. A dharmic responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Live counter */}
      <div className="border-b border-white/[0.06] py-12 lg:py-16 bg-[#0e0e0e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10">
            <div>
              {count === null ? (
                <div className="font-display text-[clamp(2.8rem,7vw,5.5rem)] text-[#d4621a] leading-none opacity-30">
                  —
                </div>
              ) : (
                <AnimatedCount value={count} />
              )}
              <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-[#6b6560]">
                Real signatures
              </div>
            </div>

            {count !== null && count > 0 && (
              <div className="pb-3 text-sm text-[#a09890]">
                {count.toLocaleString('en-IN')} people have signed.
                Add your name below.
              </div>
            )}

            {count === 0 && !kvReady && (
              <p className="pb-3 text-xs text-[#6b6560] max-w-sm">
                Petition counter initialising. If you're the site owner, connect a{' '}
                <span className="text-[#d4621a]">Vercel KV store</span> in your project
                dashboard to enable live tracking.
              </p>
            )}
          </div>

          {count !== null && count > 0 && (
            <div className="mt-6">
              <div className="flex justify-between text-[10px] text-[#4a4540] mb-2 uppercase tracking-widest">
                <span>0</span>
                <span>{count.toLocaleString('en-IN')} signed</span>
              </div>
              <div className="h-[2px] bg-white/[0.06] relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#d4621a] transition-all duration-1000"
                  style={{ width: `${Math.min((count / 100000) * 100, 100)}%` }}
                />
              </div>
              <div className="mt-2 text-[10px] text-[#3a3530] uppercase tracking-widest text-right">
                Target: 1,00,000
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Form + demands */}
      <div className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">

            {/* Demands */}
            <div>
              <div className="font-display text-3xl sm:text-4xl text-[#f5f1ea] leading-tight mb-8">
                WHAT WE<br />
                <span className="text-[#d4621a]">DEMAND</span>
              </div>

              <div className="space-y-0 text-sm text-[#a09890] divide-y divide-white/[0.06]">
                <div className="pb-5">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">Recognition</div>
                  <p>Constitutional recognition of Gau Mata as the National Animal of India</p>
                </div>
                <div className="py-5">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">Protection</div>
                  <p>Strict legal enforcement against illegal slaughter across all states</p>
                </div>
                <div className="py-5">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">Reverence</div>
                  <p>State-funded Gau Shalas and care infrastructure across India</p>
                </div>
                <div className="pt-5">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">Belief</div>
                  <p>Gau Seva is Dharma — a civilizational duty, not a political demand</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="font-display text-2xl text-[#f5f1ea] mb-6">
                    ADD YOUR NAME
                  </div>

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

                  {error && (
                    <p className="text-xs text-red-400 py-2">{error}</p>
                  )}

                  <div className="pt-2">
                    <p className="text-xs text-[#4a4540] mb-6 leading-6">
                      Voluntary declaration of support. Not affiliated with any political party.
                      Your data will never be shared or sold.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#d4621a] py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#070707] hover:bg-[#e8721a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Signing...' : 'Sign — Jai Gau Mata'}
                    </button>

                    <div className="mt-4 flex gap-3">
                      <a
                        href="https://www.instagram.com/hindujanta.party"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-white/10 py-3 text-xs uppercase tracking-[0.2em] text-[#a09890] hover:border-white/20 transition-colors text-center"
                      >
                        Share on Instagram
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: 'Gau Mata Petition — HJP',
                              text: 'I signed the HJP petition for Gau Mata\'s recognition as National Animal. Join us.',
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
                <div className="text-center py-12">
                  <div className="text-5xl mb-6">🙏</div>
                  <div className="font-display text-4xl text-[#d4621a] mb-4">JAI GAU MATA</div>
                  <p className="text-base text-[#a09890] leading-8 mb-2">
                    <strong className="text-[#f5f1ea]">{form.name}</strong> from {form.city} —
                    your name is recorded.
                  </p>
                  {count !== null && (
                    <p className="text-sm text-[#6b6560] mb-8">
                      You are signer #{count.toLocaleString('en-IN')}
                    </p>
                  )}
                  <div className="font-devanagari text-2xl text-[#d6d0c7]">
                    गावो विश्वस्य मातरः
                  </div>
                  <p className="text-xs text-[#6b6560] mt-3 tracking-widest">
                    Cows are the mothers of the world
                  </p>
                  <a
                    href="https://www.instagram.com/hindujanta.party"
                    target="_blank"
                    rel="noopener noreferrer"
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
