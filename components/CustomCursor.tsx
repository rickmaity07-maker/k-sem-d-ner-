"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse/trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Detect if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], iframe');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  // Hide entirely if on mobile
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null; 
  }

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center transition-all duration-300 ease-out"
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        width: isHovering ? '60px' : '20px',
        height: isHovering ? '60px' : '20px',
      }}
    >
      {/* Outer Ring */}
      <div className={`absolute inset-0 rounded-full border border-white/50 transition-all duration-300 ${isHovering ? 'scale-100 bg-white/10' : 'scale-0'}`}></div>
      {/* Center Dot */}
      <div className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${isHovering ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
    </div>
  );
}