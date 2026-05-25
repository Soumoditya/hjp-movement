'use client'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [phase, setPhase] = useState<'show' | 'fading' | 'done'>('show')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 1500)
    const t2 = setTimeout(() => setPhase('done'), 2300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#070707] flex flex-col items-center justify-center transition-opacity duration-700 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div className="absolute w-40 h-40 rounded-full border border-[#d4621a]/20 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute w-28 h-28 rounded-full border border-[#d4621a]/10" />
        {/* OM */}
        <div className="font-devanagari text-[6rem] text-[#d4621a] leading-none select-none" style={{ textShadow: '0 0 60px #d4621a60' }}>
          ॐ
        </div>
      </div>
      <div className="mt-10 text-[9px] uppercase tracking-[0.6em] text-[#2a2520]">
        Hindu Janta Party
      </div>
    </div>
  )
}
