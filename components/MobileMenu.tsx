"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="md:hidden">
      {/* Fixed Top Bar for Mobile */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 flex items-center justify-between px-6 z-[100]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 shadow-[0_0_10px_rgba(185,28,28,0.2)]">
            <span className="text-red-600 font-bold text-sm">K</span>
          </div>
          <span className="text-white font-bold tracking-[0.1em] uppercase text-sm">Kösem</span>
        </div>
        
        {/* Animated Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white p-2 focus:outline-none z-[110]"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5 relative z-[110]">
            <span className={`block h-[2px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-[2px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Full Screen Overlay Navigation */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-[90] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif tracking-widest uppercase transition-all duration-300 ${
                  isActive 
                    ? 'text-red-600 scale-110 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}