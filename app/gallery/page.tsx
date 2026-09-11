"use client";

import { useState } from 'react';
import PageBanner from '../../components/PageBanner'

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1585238341267-1cb1120eb580?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1601314002592-b8734bca6604?q=80&w=800&auto=format&fit=crop", 
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col relative">
      <PageBanner 
        subtitle="Galerie"
        title="Ein Blick in unsere Küche"
        imageSrc="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop" 
      />
      
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImg(src)}
              className="aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden relative group cursor-pointer animate-popup"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <img 
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-100"
              />
              <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-bold tracking-widest uppercase text-sm transition-opacity duration-300">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-red-500 text-4xl font-light transition-colors">&times;</button>
          <img 
            src={selectedImg} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain shadow-2xl shadow-red-900/20"
          />
        </div>
      )}
    </div>
  )
}