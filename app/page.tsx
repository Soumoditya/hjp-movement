export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f2] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-[#ddd8cf]">HJP • Hindu Janta Party</p>
        <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.92]">
          Dharma. Seva. Tradition.
        </h1>
        <p className="mt-6 text-lg text-[#ddd8cf] leading-8 max-w-2xl mx-auto">
          Premium modern Hindu cultural movement website under development.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://www.instagram.com/hindujanta.party" className="rounded-full bg-[#f5f5f2] px-6 py-3 text-black font-semibold">
            @hindujanta.party
          </a>
          <button className="rounded-full border border-white/10 px-6 py-3 bg-white/5">
            Cultural Movement
          </button>
        </div>
      </div>
    </main>
  )
}
