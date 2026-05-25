'use client'

import { useState, useEffect, useRef } from 'react'

// Random Hindu names — replaces real signer names in public feed for privacy
const ANON_NAMES = [
  'Arjun', 'Karan', 'Vikram', 'Suresh', 'Rohit', 'Aditya', 'Dev', 'Shyam',
  'Gaurav', 'Rajesh', 'Nikhil', 'Harish', 'Sanjay', 'Deepak', 'Manoj',
  'Priya', 'Ananya', 'Divya', 'Kavya', 'Pooja', 'Aarti', 'Shreya', 'Anjali',
  'Neha', 'Meera', 'Sunita', 'Radha', 'Pallavi', 'Bhavna', 'Geeta',
]
const LAST_INITIALS = ['K', 'S', 'R', 'M', 'D', 'P', 'V', 'T', 'A', 'N']
const anonName = (i: number) =>
  `${ANON_NAMES[i % ANON_NAMES.length]} ${LAST_INITIALS[Math.floor(i / ANON_NAMES.length) % LAST_INITIALS.length]}.`

// Pre-seeded human testimonials (shown until enough real comments come in)
const SEEDED_TESTIMONIALS = [
  {
    text: 'Mere nana kehte the — gaay jo bachata hai, woh Bharat ka asli rakhwala hai. Yeh petition unke liye.',
    name: 'Arjun K.', city: 'Varanasi',
  },
  {
    text: "I'm 19. Can't vote yet. But I can sign this. And I will make sure everyone around me knows.",
    name: 'Priya S.', city: 'Pune',
  },
  {
    text: 'Sab log kehte hain politics se door raho. Par yeh politics nahi — yeh Dharma hai. Fark karo.',
    name: 'Vikram R.', city: 'Jaipur',
  },
  {
    text: 'My grandmother cried when I told her. She said she never thought she would see the day.',
    name: 'Rohit D.', city: 'Lucknow',
  },
  {
    text: 'Been waiting for something like this for years. Finally someone saying it plainly, without drama.',
    name: 'Ananya M.', city: 'Bengaluru',
  },
  {
    text: 'Gaay ka doodh pee ke bade hue — uski raksha karna hamara farz hai. Simple baat hai.',
    name: 'Meera S.', city: 'Mathura',
  },
  {
    text: 'Every time I see a cow on the road I feel ashamed that we call her Mata but do nothing. Not anymore.',
    name: 'Gaurav T.', city: 'Indore',
  },
  {
    text: 'Yaar pehli baar kisi cheez pe sign kiya aur laga ke kuch meaningful kiya. Jai Gau Mata.',
    name: 'Kavya P.', city: 'Ahmedabad',
  },
]

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
    <span className="font-display text-[clamp(3rem,8vw,6rem)] text-[#d4621a] leading-none tabular-nums">
      {display.toLocaleString('en-IN')}
    </span>
  )
}

interface Ticker { city: string; ts: string }
interface Comment { city: string; comment: string; ts: string }

export default function Petition() {
  const [count, setCount] = useState<number | null>(null)
  const [kvReady, setKvReady] = useState(true)
  const [recent, setRecent] = useState<Ticker[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [form, setForm] = useState({ name: '', city: '', phone: '', comment: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/petition')
        const data = await res.json()
        setCount(data.count)
        setKvReady(data.ok)
        if (Array.isArray(data.recent)) setRecent(data.recent)
        if (Array.isArray(data.comments)) setComments(data.comments)
      } catch {
        setCount(0)
      }
    }
    fetchData()
    const id = setInterval(fetchData, 30_000)
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

  // Merge real comments + seeded ones, cap at 8 visible
  const displayTestimonials = [
    ...comments.map((c, i) => ({
      text: c.comment,
      name: anonName(i + 7),
      city: c.city,
    })),
    ...SEEDED_TESTIMONIALS,
  ].slice(0, 8)

  return (
    <section id="petition" ref={sectionRef} className="border-t-2 border-[#d4621a]/40 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4621a]/[0.06] blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="bg-[#0c0c0c] border-b border-white/[0.06] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-5">
            || गावो विश्वस्य मातरः || — Public Petition
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.88] text-[#f5f1ea]">
              MAKE HER THE
              <br />NATIONAL
              <br /><span className="text-[#d4621a]">MOTHER</span>
            </h2>
            <p className="text-base leading-8 text-[#a09890] max-w-lg">
              We demand constitutional recognition of Gau Mata as India&apos;s National Animal —
              with full legal protection, state-funded Gau Shalas, and criminal accountability
              for slaughter. This is a Dharmic demand, not a political one.
            </p>
          </div>
        </div>
      </div>

      {/* Counter bar */}
      <div className="bg-[#0e0e0e] border-b border-white/[0.06] py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end gap-6 lg:gap-12 mb-8">
            <div>
              {count === null
                ? <div className="font-display text-[clamp(3rem,8vw,6rem)] text-[#d4621a]/30 leading-none">—</div>
                : <AnimatedCount value={count} />
              }
              <div className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#6b6560]">Signatures recorded</div>
            </div>
            {count !== null && count > 0 && (
              <div className="pb-2 text-sm text-[#a09890]">
                {count.toLocaleString('en-IN')} Hindus have signed.
                <span className="text-[#d4621a] ml-2">Add your name →</span>
              </div>
            )}
            {count === 0 && !kvReady && (
              <p className="pb-2 text-xs text-[#4a4540] max-w-sm">
                Connect <span className="text-[#d4621a]">Upstash KV</span> to enable live tracking.
              </p>
            )}
          </div>

          {count !== null && (
            <div>
              <div className="h-[2px] bg-white/[0.05] relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#d4621a] transition-all duration-1000"
                  style={{ width: `${Math.min((count / 100000) * 100, 100)}%`, minWidth: count > 0 ? '2px' : '0' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-[#3a3530] uppercase tracking-widest">
                <span>0</span>
                <span>Target: 1,00,000</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demands + Form */}
      <div className="py-16 lg:py-24 bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">

            {/* Demands */}
            <div>
              <div className="font-display text-2xl sm:text-3xl text-[#f5f1ea] leading-tight mb-10">
                WHAT WE<br /><span className="text-[#d4621a]">DEMAND</span>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {[
                  { n: '01', title: 'National Recognition', body: 'Constitutional recognition of Gau Mata as India\'s National Animal' },
                  { n: '02', title: 'Full Legal Protection', body: 'Enforceable nationwide ban on slaughter — no state exemptions' },
                  { n: '03', title: 'Gau Shalas', body: 'State-funded sanctuaries in every district, properly staffed' },
                  { n: '04', title: 'Accountability', body: 'Criminal penalties for illegal slaughter proportionate to the offense' },
                ].map(({ n, title, body }) => (
                  <div key={n} className="py-5 flex gap-5">
                    <span className="font-display text-3xl text-[#d4621a]/20 leading-none flex-shrink-0 w-10">{n}</span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-[#d4621a] mb-1">{title}</div>
                      <p className="text-sm text-[#6b6560] leading-6">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 font-devanagari text-xl text-[#d6d0c7]">गावो विश्वस्य मातरः</div>
              <p className="text-xs text-[#4a4540] mt-2 tracking-widest">Cows are the mothers of the world — Mahabharata</p>
            </div>

            {/* Form */}
            <div>
              {!submitted ? (
                <div className="border border-[#d4621a]/25 bg-[#0c0c0c] p-8 lg:p-10">
                  <div className="border-b border-white/[0.07] pb-6 mb-8">
                    <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-3">Your Name Matters</div>
                    <h3 className="font-display text-3xl lg:text-4xl text-[#f5f1ea] leading-tight">
                      DECLARE YOUR<br />STAND
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">Full Name *</label>
                      <input
                        type="text" required placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#141414] border border-white/20 focus:border-[#d4621a]/70 px-5 py-4 text-sm text-[#f5f1ea] placeholder-[#4a4540] outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">City *</label>
                      <input
                        type="text" required placeholder="Your city"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full bg-[#141414] border border-white/20 focus:border-[#d4621a]/70 px-5 py-4 text-sm text-[#f5f1ea] placeholder-[#4a4540] outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">
                        Phone <span className="text-[#4a4540] normal-case tracking-normal">(optional)</span>
                      </label>
                      <input
                        type="tel" placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#141414] border border-white/20 focus:border-[#d4621a]/70 px-5 py-4 text-sm text-[#f5f1ea] placeholder-[#4a4540] outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.4em] text-[#d4621a] mb-2">
                        Your voice <span className="text-[#4a4540] normal-case tracking-normal">(optional — shown publicly)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Why does this matter to you? (shown as anonymous testimonial)"
                        value={form.comment}
                        onChange={(e) => setForm({ ...form, comment: e.target.value })}
                        maxLength={280}
                        className="w-full bg-[#141414] border border-white/20 focus:border-[#d4621a]/70 px-5 py-4 text-sm text-[#f5f1ea] placeholder-[#4a4540] outline-none transition-colors duration-200 resize-none leading-6"
                      />
                      {form.comment.length > 0 && (
                        <div className="text-[10px] text-[#3a3530] text-right mt-1">{form.comment.length}/280</div>
                      )}
                    </div>

                    {error && <p className="text-xs text-red-400 py-1">{error}</p>}

                    <p className="text-xs text-[#3a3530] leading-5 pt-1">
                      Voluntary declaration. Not affiliated with any political party.
                      Your name is never shown publicly — only your city and comment.
                    </p>

                    <button
                      type="submit" disabled={loading}
                      className="w-full bg-[#d4621a] hover:bg-[#e8721a] disabled:opacity-50 disabled:cursor-not-allowed py-5 text-sm font-bold uppercase tracking-[0.3em] text-[#070707] transition-colors duration-200 mt-2"
                    >
                      {loading ? 'Signing...' : 'Jai Gau Mata — Sign Now'}
                    </button>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <a
                        href="https://www.instagram.com/hindujanta.party"
                        target="_blank" rel="noopener noreferrer"
                        className="border border-white/10 hover:border-[#d4621a]/30 py-3 text-[10px] uppercase tracking-[0.2em] text-[#6b6560] hover:text-[#a09890] transition-all text-center"
                      >
                        Share on Instagram
                      </a>
                      <button
                        type="button"
                        onClick={() => navigator.share?.({ title: 'Gau Mata Petition — HJP', url: window.location.href })}
                        className="border border-white/10 hover:border-[#d4621a]/30 py-3 text-[10px] uppercase tracking-[0.2em] text-[#6b6560] hover:text-[#a09890] transition-all"
                      >
                        Share
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="border border-[#d4621a]/25 bg-[#0c0c0c] p-10 text-center">
                  <div className="text-5xl mb-6">🙏</div>
                  <div className="font-display text-4xl text-[#d4621a] mb-4">JAI GAU MATA</div>
                  <p className="text-base text-[#a09890] leading-8 mb-2">
                    <strong className="text-[#f5f1ea]">{form.name}</strong> from {form.city}
                  </p>
                  {count !== null && (
                    <p className="text-sm text-[#6b6560] mb-8">You are signer #{count.toLocaleString('en-IN')}</p>
                  )}
                  <div className="font-devanagari text-2xl text-[#d6d0c7] my-6">गावो विश्वस्य मातरः</div>
                  <a
                    href="https://www.instagram.com/hindujanta.party"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block border border-[#d4621a]/50 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#d4621a] hover:bg-[#d4621a]/10 transition-colors"
                  >
                    Follow @hindujanta.party
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials strip */}
      <div className="border-t border-white/[0.06] bg-[#080808] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-8">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-2">From the People</div>
          <h3 className="font-display text-2xl text-[#f5f1ea]">VOICES OF THE MOVEMENT</h3>
        </div>
        <div className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-6 lg:px-10" style={{ width: 'max-content' }}>
            {displayTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[320px] border border-white/[0.07] bg-[#0c0c0c] p-6 flex flex-col gap-4 hover:border-[#d4621a]/20 transition-colors duration-300"
              >
                <div className="font-devanagari text-3xl text-[#d4621a]/30 leading-none">"</div>
                <p className="text-sm text-[#a09890] leading-7 flex-1">{t.text}</p>
                <div className="border-t border-white/[0.05] pt-4 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4621a]/10 border border-[#d4621a]/20 flex items-center justify-center">
                    <span className="text-[8px] text-[#d4621a]">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#d6d0c7] tracking-wide">{t.name}</div>
                    <div className="text-[9px] text-[#4a4540] uppercase tracking-[0.2em]">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live signers ticker */}
      {recent.length > 0 && (
        <div className="border-t border-white/[0.04] bg-[#050505] py-3 overflow-hidden">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marqueeSlow 40s linear infinite' }}>
            {[...recent, ...recent].map((s, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 px-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4621a] inline-block flex-shrink-0" style={{ boxShadow: '0 0 4px #d4621a' }} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#4a4540]">
                  {anonName(i)} from {s.city} just signed
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
