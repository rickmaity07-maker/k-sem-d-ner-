"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex flex-col gap-6 w-full text-center mt-4 animate-popup delay-100">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        
        return (
          <Link 
            key={item.name} 
            href={item.path} 
            className={`font-bold tracking-widest text-xs uppercase transition-all duration-300 ${
              isActive 
                ? "text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)] scale-105" 
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}