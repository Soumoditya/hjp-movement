export default function ShlokMarquee() {
  const shlokas = [
    'धर्मो रक्षति रक्षितः',
    '•',
    'गावो विश्वस्य मातरः',
    '•',
    'सत्यं वद धर्मं चर',
    '•',
    'वसुधैव कुटुम्बकम्',
    '•',
    'धर्म एव हतो हन्ति',
    '•',
    'एक धर्म • एक राष्ट्र',
    '•',
    'सर्वे भवन्तु सुखिनः',
    '•',
  ]

  const repeated = [...shlokas, ...shlokas]

  return (
    <div className="border-y border-white/[0.07] bg-[#0a0a0a] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((s, i) => (
          <span
            key={i}
            className={`font-devanagari text-sm mx-6 ${
              s === '•' ? 'text-[#d4621a]' : 'text-[#d6d0c7]'
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
