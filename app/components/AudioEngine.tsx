'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

type AudioState = 'idle' | 'playing' | 'muted'

function playShankh(ctx: AudioContext, shankhOut: GainNode) {
  const now = ctx.currentTime
  const dur = 4.2

  // Envelope: breathe in, sustain, fade
  shankhOut.gain.setValueAtTime(0, now)
  shankhOut.gain.linearRampToValueAtTime(0.55, now + 0.45)
  shankhOut.gain.setValueAtTime(0.55, now + dur - 1.2)
  shankhOut.gain.exponentialRampToValueAtTime(0.001, now + dur)

  // Harmonic stack — fundamental sweeps upward as you blow harder
  const addTone = (startHz: number, endHz: number, g: number, type: OscillatorType = 'sine') => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(startHz, now)
    osc.frequency.exponentialRampToValueAtTime(endHz, now + dur * 0.7)
    gain.gain.value = g
    osc.connect(gain)
    gain.connect(shankhOut)
    osc.start(now)
    osc.stop(now + dur + 0.1)
  }

  addTone(80, 185, 0.18)           // sub rumble
  addTone(155, 370, 0.42)          // fundamental
  addTone(310, 740, 0.22)          // 2nd harmonic
  addTone(465, 1110, 0.10)         // 3rd
  addTone(620, 1480, 0.05)         // 4th

  // Breathy noise (air through the shell)
  const len = Math.floor(ctx.sampleRate * dur)
  const buf = ctx.createBuffer(1, len, ctx.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
  const noise = ctx.createBufferSource()
  noise.buffer = buf

  const bpf = ctx.createBiquadFilter()
  bpf.type = 'bandpass'
  bpf.frequency.setValueAtTime(260, now)
  bpf.frequency.exponentialRampToValueAtTime(700, now + dur * 0.65)
  bpf.Q.value = 4.5

  const ng = ctx.createGain()
  ng.gain.value = 0.18
  noise.connect(bpf); bpf.connect(ng); ng.connect(shankhOut)
  noise.start(now)
}

export default function AudioEngine() {
  const [audioState, setAudioState] = useState<AudioState>('idle')
  const ctxRef = useRef<AudioContext | null>(null)
  const droneRef = useRef<GainNode | null>(null)
  const masterRef = useRef<GainNode | null>(null)

  const ringBell = useCallback((ctx: AudioContext, dest: AudioNode, freq = 528, vol = 0.06) => {
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq
    g.gain.setValueAtTime(0, ctx.currentTime)
    g.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.012)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.2)
    osc.connect(g); g.connect(dest)
    osc.start(); osc.stop(ctx.currentTime + 3.5)
  }, [])

  const buildDrone = useCallback((ctx: AudioContext, droneGain: GainNode) => {
    const addOsc = (freq: number, gain: number, detune = 0, type: OscillatorType = 'sawtooth') => {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      const lpf = ctx.createBiquadFilter()
      lpf.type = 'lowpass'; lpf.frequency.value = 650; lpf.Q.value = 0.8
      osc.type = type; osc.frequency.value = freq; osc.detune.value = detune
      g.gain.value = gain
      osc.connect(lpf); lpf.connect(g); g.connect(droneGain)
      osc.start()
    }
    addOsc(65.4, 0.20, 0)
    addOsc(65.4, 0.15, 9)
    addOsc(98.0, 0.11, -5)
    addOsc(130.8, 0.08, 6)
    addOsc(130.8, 0.06, -8)
    addOsc(196.0, 0.04, 0)
    addOsc(261.6, 0.025, 3, 'sine')

    // LFO tremolo
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.frequency.value = 0.22; lfoGain.gain.value = 0.012
    lfo.connect(lfoGain); lfoGain.connect(droneGain.gain)
    lfo.start()
  }, [])

  const startAudio = useCallback(() => {
    if (ctxRef.current) return

    const ctx = new AudioContext()
    ctxRef.current = ctx

    // Separate gain nodes: shankh and drone → master
    const master = ctx.createGain()
    master.gain.value = 1
    master.connect(ctx.destination)
    masterRef.current = master

    const shankhGain = ctx.createGain()
    shankhGain.connect(master)
    playShankh(ctx, shankhGain)

    const drone = ctx.createGain()
    drone.gain.value = 0
    drone.connect(master)
    droneRef.current = drone

    // Build drone immediately but silent — start fading in after shankh
    buildDrone(ctx, drone)

    // Drone fades in as shankh fades out
    drone.gain.setValueAtTime(0, ctx.currentTime + 2.5)
    drone.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 7)

    // Opening bell after shankh
    setTimeout(() => ringBell(ctx, drone, 528, 0.07), 4600)

    setAudioState('playing')
  }, [buildDrone, ringBell])

  const toggle = () => {
    if (audioState === 'idle') { startAudio(); return }
    if (!masterRef.current || !ctxRef.current) return
    if (audioState === 'playing') {
      masterRef.current.gain.linearRampToValueAtTime(0, ctxRef.current.currentTime + 0.5)
      setAudioState('muted')
    } else {
      masterRef.current.gain.linearRampToValueAtTime(1, ctxRef.current.currentTime + 0.5)
      setAudioState('playing')
    }
  }

  // Section-aware bells
  useEffect(() => {
    if (audioState !== 'playing') return
    const ctx = ctxRef.current!
    const drone = droneRef.current!

    const freqMap: Record<string, number> = {
      manifesto: 528, petition: 396, sanskrit: 741,
      'gau-mata': 432, temples: 660, identity: 528,
    }

    const seen = new Set<string>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (!seen.has(id)) {
            seen.add(id)
            setTimeout(() => ringBell(ctx, drone, freqMap[id] ?? 880, 0.035), 300)
          }
        }
      })
    }, { threshold: 0.35 })

    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [audioState, ringBell])

  const isPlaying = audioState === 'playing'
  const bars = [3, 5, 4, 7, 4, 6, 3, 5, 4]

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-2.5 border border-white/[0.08] bg-[#0c0c0c]/90 backdrop-blur-sm hover:border-[#d4621a]/40 transition-all duration-300 group"
      aria-label="Toggle ambient sound"
    >
      <div className="flex items-end gap-[2.5px] h-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-[2px] bg-[#d4621a] rounded-full origin-bottom"
            style={{
              height: isPlaying ? `${h * 2}px` : '3px',
              opacity: isPlaying ? 1 : 0.2,
              transition: 'height 0.3s ease, opacity 0.3s',
              animation: isPlaying ? `soundBar ${0.55 + i * 0.08}s ease-in-out ${i * 65}ms infinite alternate` : 'none',
            }}
          />
        ))}
      </div>
      <span className="text-[9px] uppercase tracking-[0.3em] text-[#4a4540] group-hover:text-[#6b6560] transition-colors">
        {audioState === 'idle' ? 'ॐ Sound' : isPlaying ? 'On' : 'Off'}
      </span>
    </button>
  )
}
