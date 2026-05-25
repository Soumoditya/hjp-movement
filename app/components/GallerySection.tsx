import Image from 'next/image'

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

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Visual Archive</div>
        <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea]">
          THE MOVEMENT<br />IN IMAGES
        </h2>
      </div>

      {/* Scrollable gallery */}
      <div
        className="overflow-x-auto pb-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex gap-4 px-6 lg:px-10" style={{ width: 'max-content' }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden group"
              style={{ width: '280px', height: '380px' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="280px"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-20" />
              {/* Alt label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6d0c7]">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption strip */}
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
