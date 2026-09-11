import Link from 'next/link'
import TiltCard from '../components/TiltCard'
import MagneticWrapper from '../components/MagneticWrapper'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center overflow-x-hidden bg-zinc-950">
      
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2000&auto=format&fit=crop"
            alt="Kösem Food House Döner"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-tight drop-shadow-2xl">
              WELCOME TO<br />KÖSEM FOOD HOUSE
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <MagneticWrapper strength={0.3}>
                <Link href="/menu" className="block bg-red-800 hover:bg-red-700 text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(185,28,28,0.4)]">
                  OUR MENU
                </Link>
              </MagneticWrapper>
              
              <MagneticWrapper strength={0.3}>
                <Link href="/about" className="block bg-zinc-800 hover:bg-zinc-700 text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-colors">
                  ABOUT US
                </Link>
              </MagneticWrapper>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3D Interactive Specials Section - Now triggering on scroll! */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-32 flex flex-col items-center">
        <ScrollReveal className="text-center mb-16">
          <p className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Empfehlungen</p>
          <h2 className="text-4xl md:text-5xl text-white font-serif tracking-wide">
            Our Specialties
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <ScrollReveal delay={100}>
            <TiltCard 
              title="Premium Kebab" 
              imageSrc="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop" 
            />
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <TiltCard 
              title="Iskender Plate" 
              imageSrc="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" 
            />
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <TiltCard 
              title="Fresh Shawarma" 
              imageSrc="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
            />
          </ScrollReveal>
        </div>
      </div>

    </div>
  )
}