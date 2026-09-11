"use client";

import { useState } from 'react';
import PageBanner from '../../components/PageBanner'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <PageBanner 
        subtitle="Kontakt"
        title="Wir freuen uns auf dich"
        imageSrc="https://images.unsplash.com/photo-1585238341267-1cb1120eb580?q=80&w=2000&auto=format&fit=crop" 
      />
      
      <div className="max-w-6xl mx-auto px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-zinc-900/30 p-8 border border-zinc-800 animate-popup delay-100 h-full relative overflow-hidden">
            <h3 className="text-2xl font-serif text-white mb-8">Schreib uns</h3>
            
            <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${status === 'success' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <input required type="text" placeholder="Name" className="w-full bg-zinc-900 border border-zinc-700 text-white px-5 py-4 focus:outline-none focus:border-red-700 transition-colors placeholder:text-zinc-600" />
              <input required type="email" placeholder="E-Mail" className="w-full bg-zinc-900 border border-zinc-700 text-white px-5 py-4 focus:outline-none focus:border-red-700 transition-colors placeholder:text-zinc-600" />
              <textarea required placeholder="Nachricht" rows={5} className="w-full bg-zinc-900 border border-zinc-700 text-white px-5 py-4 focus:outline-none focus:border-red-700 transition-colors placeholder:text-zinc-600 resize-none"></textarea>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-red-800 hover:bg-red-700 disabled:bg-zinc-800 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase transition-all w-full flex justify-center items-center h-[52px]"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : 'Nachricht senden'}
              </button>
            </form>

            {/* Success Message Overlay */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/95 transition-all duration-500 ${status === 'success' ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-500 text-3xl border border-green-900/50">✓</div>
              <h4 className="text-xl text-white font-serif mb-2">Vielen Dank!</h4>
              <p className="text-zinc-400 text-sm">Deine Nachricht wurde gesendet.</p>
            </div>
          </div>

          <div className="flex flex-col h-full animate-popup delay-300">
            {/* Embedded Dark Mode Google Map - Now pointing directly to the exact address */}
            <div className="w-full h-[300px] bg-zinc-900 border border-zinc-800 mb-10 relative overflow-hidden group">
              <iframe 
                src="https://maps.google.com/maps?q=Ignaz-Sch%C3%B6n-Stra%C3%9Fe%2042,%2097421%20Schweinfurt&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale invert-[90%] hue-rotate-[180deg] contrast-80 opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="text-red-700 font-bold tracking-wider uppercase mb-4">Adresse & Kontakt</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Ignaz-Schön-Straße 42<br /> 
                  97421 Schweinfurt<br /><br />
                  Tel: 09721 801354
                </p>
              </div>
              <div>
                <h4 className="text-red-700 font-bold tracking-wider uppercase mb-4">Öffnungszeiten</h4>
                <div className="text-zinc-400 leading-relaxed">
                  <div className="flex justify-between w-full max-w-[150px]">
                    <span>Mo - Fr:</span> <span>11:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between w-full max-w-[150px]">
                    <span>Samstag:</span> <span>11:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between w-full max-w-[150px] text-zinc-600 mt-1">
                    <span>Sonntag:</span> <span>Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}