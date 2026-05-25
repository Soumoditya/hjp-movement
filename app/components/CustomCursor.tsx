'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    setMounted(true)

    let mx = 0, my = 0
    let lx = 0, ly = 0
    let raf: number
    let hovering = false

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }

      const el = document.elementFromPoint(mx, my)
      const isHover = !!el?.closest('a, button, [data-cursor]')
      if (isHover !== hovering) {
        hovering = isHover
        ringRef.current?.style.setProperty('--ring-scale', isHover ? '1.8' : '1')
        ringRef.current?.style.setProperty('--ring-opacity', isHover ? '0.7' : '0.3')
      }
    }

    const animate = () => {
      lx = lerp(lx, mx, 0.1)
      ly = lerp(ly, my, 0.1)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${lx - 16}px, ${ly - 16}px) scale(var(--ring-scale, 1))`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#d4621a] rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{ boxShadow: '0 0 6px #d4621a' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{
          border: '1px solid rgba(212, 98, 26, var(--ring-opacity, 0.3))',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          '--ring-scale': '1',
          '--ring-opacity': '0.3',
        } as React.CSSProperties}
      />
    </>
  )
}
