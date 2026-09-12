import './globals.css'
import Navbar from '../components/Navbar'
import CustomCursor from '../components/CustomCursor'
import MobileMenu from '../components/MobileMenu'

export const metadata = {
  title: 'Kösem Food House',
  description: 'Premium Döner in Schweinfurt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate="no">
      {/* Added pt-16 on mobile to account for the new fixed top bar, pt-0 on desktop */}
      <body className="flex min-h-screen bg-zinc-950 text-white font-sans antialiased w-full overflow-x-hidden pt-16 md:pt-0">
        
        <CustomCursor />
        
        {/* Renders only on mobile */}
        <MobileMenu />

        {/* Fixed Left Sidebar - Hidden on mobile (hidden md:flex) */}
        <aside className="hidden md:flex w-64 min-w-[16rem] fixed top-0 left-0 h-screen bg-black border-r border-zinc-900 flex-col items-center py-10 z-50 overflow-y-auto">
          <div className="mb-12 text-center animate-popup">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-4 mx-auto border border-zinc-800 shadow-[0_0_15px_rgba(185,28,28,0.2)]">
              <span className="text-red-600 font-bold text-3xl">K</span>
            </div>
            <h1 className="text-xl font-bold tracking-[0.1em] uppercase text-white leading-tight">Kösem<br/>Food House</h1>
            <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">Premium Döner</p>
          </div>

          <Navbar />

          <div className="mt-auto flex gap-6 text-zinc-600 pb-4 animate-popup delay-200">
            <span className="hover:text-white cursor-pointer transition-colors text-sm">f</span>
            <span className="hover:text-white cursor-pointer transition-colors text-sm">x</span>
            <span className="hover:text-white cursor-pointer transition-colors text-sm">ig</span>
          </div>
        </aside>

        {/* Main Content Wrapper - 100% width on mobile, pushed right on desktop */}
        <main className="w-full md:ml-64 md:w-[calc(100%-16rem)] relative min-h-screen flex flex-col">
          {children}
        </main>
        
      </body>
    </html>
  )
}