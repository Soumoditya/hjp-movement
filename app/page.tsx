import Nav from './components/Nav'
import Hero from './components/Hero'
import ShlokMarquee from './components/ShlokMarquee'
import Manifesto from './components/Manifesto'
import WhatIsHJP from './components/WhatIsHJP'
import SanskritSection from './components/SanskritSection'
import TemplesSection from './components/TemplesSection'
import ProudHindu from './components/ProudHindu'
import SevaSection from './components/SevaSection'
import GauMataSection from './components/GauMataSection'
import Petition from './components/Petition'
import IdentitySection from './components/IdentitySection'
import SwastikaSection from './components/SwastikaSection'
import GallerySection from './components/GallerySection'
import HeritageSection from './components/HeritageSection'
import JoinSection from './components/JoinSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#070707] text-[#f5f1ea] overflow-x-hidden">
      <Nav />
      <Hero />
      <ShlokMarquee />
      <Manifesto />
      <WhatIsHJP />
      <ShlokMarquee />
      <SanskritSection />
      <TemplesSection />
      <ProudHindu />
      <SevaSection />
      <GauMataSection />
      <Petition />
      <IdentitySection />
      <SwastikaSection />
      <GallerySection />
      <HeritageSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
