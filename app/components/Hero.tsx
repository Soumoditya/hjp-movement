'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const SCRAMBLE_CHARS = 'ॐअआइउकखगघचजटदनपमयरलवशसΩ∞✦⟁◈'

function ScrambleText({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const [display, setDisplay] = useState(() => text.replace(/\S/g, '·'))

  useEffect(() => {
    let raf: number
    const duration = 1400
    const startAt = performance.now() + delay

    const tick = (now: number) => {
      if (now < startAt) { raf = requestAnimationFrame(tick); return }
      const t = Math.min((now - startAt) / duration, 1)

      const result = text.split('').map((char, i) => {
        if (char === ' ') return ' '
        const threshold = (i / text.length) * 0.75
        if (t > threshold + 0.25) return char
        if (t > threshold) return Math.random() > 0.4 ? char : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      }).join('')

      setDisplay(result)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setDisplay(text)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, delay])

  return <span className={className}>{display}</span>
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    let lx = 0, ly = 0
    let raf: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      lx = lerp(lx, mouseRef.current.x, 0.04)
      ly = lerp(ly, mouseRef.current.y, 0.04)
      if (bgRef.current) {
        const scrollY = window.scrollY * 0.28
        bgRef.current.style.transform = `translateY(${scrollY}px) translate(${lx * 18}px, ${ly * 12}px) scale(1.12)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouse, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background — scroll + mouse parallax merged */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/dharma-above-politics.png"
          alt="Dharma Above Politics"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#070707]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-[#070707]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/20 to-[#070707]/50" />

      {/* Floating saffron embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: '12%', delay: '0s', dur: '9s', size: 2 },
          { left: '28%', delay: '2.5s', dur: '12s', size: 1.5 },
          { left: '52%', delay: '4s', dur: '10s', size: 2.5 },
          { left: '68%', delay: '1.2s', dur: '14s', size: 1 },
          { left: '83%', delay: '6s', dur: '11s', size: 2 },
          { left: '40%', delay: '8s', dur: '13s', size: 1.5 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute bottom-0 rounded-full bg-[#d4621a] opacity-0"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `floatUp ${p.dur} ${p.delay} ease-in infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-24 lg:pb-36 pt-32 w-full">
        <div className="max-w-4xl">
          <div
            className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-8 opacity-0"
            style={{ animation: 'fadeInUp 0.8s 2.5s ease forwards' }}
          >
            || धर्मो रक्षति रक्षितः ||
          </div>

          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.88] text-[#f5f1ea]">
            <ScrambleText text="DHARMA" delay={400} />
            <br />
            <ScrambleText text="ABOVE" delay={800} className="text-[#d4621a]" />
            <br />
            <ScrambleText text="POLITICS" delay={1200} />
          </h1>

          <div
            className="mt-8 saffron-line opacity-0"
            style={{ animation: 'fadeInUp 0.8s 2.8s ease forwards' }}
          />

          <p
            className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-[#d6d0c7] font-devanagari opacity-0"
            style={{ animation: 'fadeInUp 0.8s 3s ease forwards' }}
          >
            एक धर्म • एक राष्ट्र
          </p>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-[#a09890] opacity-0"
            style={{ animation: 'fadeInUp 0.8s 3.2s ease forwards' }}
          >
            Not a party. Not a protest. A refusal — to let what is sacred become a relic
            while the people it belongs to look the other way.
          </p>

          <div
            className="mt-12 flex flex-wrap gap-4 opacity-0"
            style={{ animation: 'fadeInUp 0.8s 3.5s ease forwards' }}
          >
            <a
              href="#manifesto"
              className="inline-flex items-center gap-3 bg-[#d4621a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#070707] hover:bg-[#e8721a] transition-colors duration-200"
            >
              Read the Manifesto
            </a>
            <a
              href="#petition"
              className="inline-flex items-center gap-3 border-2 border-[#d4621a]/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4621a] hover:bg-[#d4621a]/10 hover:border-[#d4621a] transition-all duration-200"
            >
              Protect Gau Mata
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent" />
    </section>
  )
}
