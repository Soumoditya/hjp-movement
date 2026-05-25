'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <Image
          src="/images/dharma-above-politics.png"
          alt="Dharma Above Politics"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlays — strong enough to kill embedded poster text in bg image */}
      <div className="absolute inset-0 bg-[#070707]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-[#070707]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/20 to-[#070707]/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-24 lg:pb-36 pt-32 w-full">
        <div className="max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-8">
            || धर्मो रक्षति रक्षितः ||
          </div>

          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.88] text-[#f5f1ea]">
            DHARMA
            <br />
            <span className="text-[#d4621a]">ABOVE</span>
            <br />
            POLITICS
          </h1>

          <div className="mt-8 saffron-line" />

          <p className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-[#d6d0c7] font-devanagari">
            एक धर्म • एक राष्ट्र
          </p>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-[#a09890]">
            Not a party. Not a protest. A refusal — to let what is sacred become a relic
            while the people it belongs to look the other way.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#manifesto" className="inline-flex items-center gap-3 bg-[#d4621a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#070707] hover:bg-[#e8721a] transition-colors duration-200">
              Read the Manifesto
            </a>
            <a href="#petition" className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#f5f1ea] hover:border-[#d4621a]/50 transition-colors duration-200">
              Sign — Gau Mata
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent" />
    </section>
  )
}
