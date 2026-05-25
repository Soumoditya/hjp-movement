'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

type AudioState = 'idle' | 'playing' | 'muted'

export default function AudioEngine() {
  const [audioState, setAudioState] = useState<AudioState>('idle')
  const ctxRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)

  const ringBell = useCallback((ctx: AudioContext, dest: AudioNode, freq = 528, vol = 0.06) => {
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq
    g.gain.setValueAtTime(0, ctx.currentTime)
    g.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.012)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3)
    osc.connect(g)
    g.connect(dest)
    osc.start()
    osc.stop(ctx.currentTime + 3.5)
  }, [])

  const startAudio = useCallback(() => {
    if (ctxRef.current) return

    const ctx = new AudioContext()
    ctxRef.current = ctx

    const master = ctx.createGain()
    master.gain.value = 0
    master.connect(ctx.destination)
    masterRef.current = master

    // Tamboura-style drone — C2 stack with harmonics
    const addOsc = (freq: number, gain: number, detune = 0, type: OscillatorType = 'sawtooth') => {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      const lpf = ctx.createBiquadFilter()
      lpf.type = 'lowpass'
      lpf.frequency.value = 650
      lpf.Q.value = 0.8
      osc.type = type
      osc.frequency.value = freq
      osc.detune.value = detune
      g.gain.value = gain
      osc.connect(lpf)
      lpf.connect(g)
      g.connect(master)
      osc.start()
    }

    addOsc(65.4, 0.20, 0)       // C2 root Sa
    addOsc(65.4, 0.15, 9)       // C2 chorused
    addOsc(98.0, 0.11, -5)      // G2 Pa (5th)
    addOsc(130.8, 0.08, 6)      // C3 Sa (octave)
    addOsc(130.8, 0.06, -8)     // C3 chorused
    addOsc(196.0, 0.04, 0)      // G3
    addOsc(261.6, 0.025, 3, 'sine') // C4 — smooth high note

    // Subtle LFO tremolo for organic feel
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.frequency.value = 0.22
    lfoGain.gain.value = 0.012
    lfo.connect(lfoGain)
    lfoGain.connect(master.gain)
    lfo.start()

    // Slow fade in
    master.gain.setValueAtTime(0, ctx.currentTime)
    master.gain.linearRampToValueAtTime(0.20, ctx.currentTime + 5)

    // Opening bell
    setTimeout(() => ringBell(ctx, master, 528, 0.07), 1000)

    setAudioState('playing')
  }, [ringBell])

  const toggle = () => {
    if (audioState === 'idle') {
      startAudio()
      return
    }
    if (audioState === 'playing') {
      masterRef.current?.gain.linearRampToValueAtTime(0, ctxRef.current!.currentTime + 0.6)
      setAudioState('muted')
    } else {
      masterRef.current?.gain.linearRampToValueAtTime(0.20, ctxRef.current!.currentTime + 0.6)
      setAudioState('playing')
    }
  }

  // Section-aware bells
  useEffect(() => {
    if (audioState !== 'playing') return
    const ctx = ctxRef.current!
    const master = masterRef.current!

    const freqMap: Record<string, number> = {
      manifesto: 528,
      petition: 396,
      sanskrit: 741,
      'gau-mata': 432,
    }

    const seen = new Set<string>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (!seen.has(id)) {
            seen.add(id)
            ringBell(ctx, master, freqMap[id] ?? 880, 0.035)
          }
        }
      })
    }, { threshold: 0.4 })

    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [audioState, ringBell])

  const isPlaying = audioState === 'playing'
  const barHeights = [3, 5, 4, 7, 4, 6, 3, 5, 4]

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-2.5 border border-white/[0.08] bg-[#0c0c0c]/90 backdrop-blur-sm hover:border-[#d4621a]/40 transition-all duration-300 group"
      aria-label="Toggle ambient sound"
    >
      <div className="flex items-end gap-[2.5px] h-4">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="w-[2px] bg-[#d4621a] rounded-full origin-bottom"
            style={{
              height: isPlaying ? `${h * 2}px` : '3px',
              opacity: isPlaying ? 1 : 0.2,
              transition: 'height 0.3s ease, opacity 0.3s',
              animation: isPlaying ? `soundBar ${0.6 + i * 0.07}s ease-in-out ${i * 70}ms infinite alternate` : 'none',
            }}
          />
        ))}
      </div>
      <span className="text-[9px] uppercase tracking-[0.3em] text-[#4a4540] group-hover:text-[#6b6560] transition-colors">
        {audioState === 'idle' ? 'Sound' : isPlaying ? 'On' : 'Off'}
      </span>
    </button>
  )
}
