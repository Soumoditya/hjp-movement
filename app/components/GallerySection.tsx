'use client'

import Image from 'next/image'
import { useRef } from 'react'

const images = [
  { src: '/images/dharma-above-politics.png', alt: 'Dharma Above Politics' },
  { src: '/images/gau-mata.png', alt: 'Gau Mata' },
  { src: '/images/hjp-brush-logo.png', alt: 'HJP Brush Logo' },
  { src: '/images/hjp-circle-dark.png', alt: 'HJP Circle' },
  { src: '/images/hjp-flag-logo.png', alt: 'HJP Flag Logo' },
  { src: '/images/protect-identity.png', alt: 'Protect Identity' },
  { src: '/images/proud-hindu.png', alt: 'Proud Hindu' },
  { src: '/images/sanskrit-matters.png', alt: 'Sanskrit Matters' },
  { src: '/images/seva-dharma.png', alt: 'Seva & Dharma' },
  { src: '/images/swastika.png', alt: 'Swastika — Sacred Symbol' },
  { src: '/images/temples-sacred.png', alt: 'Temples Are Sacred' },
  { src: '/images/what-is-hjp.png', alt: 'What Is HJP' },
]

function TiltCard({ src, alt }: { src: string; alt: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotX = (y - 0.5) * -18
    const rotY = (x - 0.5) * 18
    card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`
    card.style.transition = 'transform 0.08s ease'
  }

  const onLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)'
    card.style.transition = 'transform 0.5s ease'
  }

  return (
    <div
      ref={cardRef}
      className="relative flex-shrink-0 overflow-hidden group"
      style={{ width: '280px', height: '380px', willChange: 'transform' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="280px"
      />
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4621a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4621a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6d0c7]">{alt}</p>
      </div>
    </div>
  )
}

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Visual Archive</div>
        <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea]">
          THE MOVEMENT<br />IN IMAGES
        </h2>
      </div>

      <div className="overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 px-6 lg:px-10" style={{ width: 'max-content' }}>
          {images.map((img, i) => (
            <TiltCard key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <p className="text-[10px] tracking-[0.35em] text-[#6b6560] uppercase">
          @hindujanta.party — visual archive of the movement
        </p>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>
    </section>
  )
}
