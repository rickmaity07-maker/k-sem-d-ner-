"use client";

import { useState, useRef } from "react";

interface TiltCardProps {
  title: string;
  imageSrc: string;
}

export default function TiltCard({ title, imageSrc }: TiltCardProps) {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    // Calculate cursor position relative to the card
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15; // Divider controls tilt intensity
    const y = -(e.clientY - top - height / 2) / 15;
    
    setTransform(`rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    // Reset position smoothly when mouse leaves
    setTransform("rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full aspect-[4/5] transition-transform duration-200 ease-out cursor-pointer group"
      style={{ perspective: "1000px" }} // Required to create 3D space
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl shadow-black"
        style={{ transform, transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
      >
        {/* Background Image pushed back slightly */}
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: "translateZ(-10px) scale(1.1)" }} 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        {/* Text popping out towards the user */}
        <div
          className="absolute bottom-6 left-6 right-6 pointer-events-none"
          style={{ transform: "translateZ(50px)" }} 
        >
          <div className="w-10 h-1 bg-red-600 mb-4 transition-all duration-300 group-hover:w-full"></div>
          <h3 className="text-2xl font-serif text-white drop-shadow-md">{title}</h3>
        </div>
      </div>
    </div>
  );
}