"use client";

import { useState } from 'react';
import PageBanner from '../../components/PageBanner'

// Define our menu data structure
const menuData = {
  "Döner Klassiker": [
    { name: "Döner Kebab", desc: "mit Kalb- oder Hähnchenfleisch & frischem Salat im Fladenbrot", price: "6,50 €" },
    { name: "Döner Box", desc: "mit Pommes, Fleisch und Spezialsauce", price: "7,00 €" },
    { name: "Döner Teller", desc: "mit Reis oder Pommes, Beilagensalat und Sauce", price: "9,50 €" },
    { name: "Iskender Kebab", desc: "Dönerfleisch auf geröstetem Brot mit Joghurt und Tomatenbuttersoße", price: "11,50 €" },
    { name: "Pide mit Dönerfleisch", desc: "Schiffchen aus Hefeteig mit Käse überbacken", price: "8,50 €" },
    { name: "Portion Dönerfleisch", desc: "pur, mit Zwiebeln und Zitrone", price: "8,00 €" },
  ],
  "Dürüm & Wraps": [
    { name: "Yufka Dürüm", desc: "mit Kalb- oder Hähnchenfleisch im dünnen Teigfladen", price: "7,00 €" },
    { name: "Mega Dürüm", desc: "mit extra viel Fleisch und Käse", price: "9,00 €" },
    { name: "Sucuk Wrap", desc: "mit gegrillter türkischer Knoblauchwurst und Salat", price: "7,50 €" },
    { name: "Falafel Dürüm", desc: "vegetarisch mit knusprigen Kichererbsenbällchen", price: "7,00 €" },
    { name: "Halloumi Wrap", desc: "mit gegrilltem Quietschkäse und Spezialsauce", price: "7,00 €" },
    { name: "Mix Dürüm", desc: "mit Dönerfleisch, Falafel und Halloumi", price: "8,50 €" },
  ],
  "Vegetarisch": [
    { name: "Falafel Teller", desc: "mit Hummus, Salat, Sauce und warmem Fladenbrot", price: "8,50 €" },
    { name: "Halloumi im Fladenbrot", desc: "Grillkäse mit frischem Salat und Sauce", price: "6,50 €" },
    { name: "Vegetarischer Döner", desc: "mit Weichkäse, frischem Salat, Kraut und Sauce", price: "5,50 €" },
    { name: "Pide mit Spinat & Käse", desc: "frisch aus dem Ofen", price: "7,50 €" },
    { name: "Sigara Börek", desc: "5 knusprige Teigröllchen gefüllt mit Weichkäse", price: "5,00 €" },
    { name: "Gemischter Vorspeisenteller", desc: "mit Hummus, Tzatziki, Weinblättern und Brot", price: "9,50 €" },
  ],
  "Beilagen": [
    { name: "Pommes Frites", desc: "knusprig frittiert mit Ketchup oder Mayo", price: "3,50 €" },
    { name: "Portion Reis", desc: "traditioneller türkischer Butterreis (Pilav)", price: "3,00 €" },
    { name: "Krautsalat", desc: "hausgemachter Rot- und Weißkrautsalat", price: "3,50 €" },
    { name: "Hummus", desc: "pürierte Kichererbsen mit Sesammuß und Fladenbrot", price: "4,50 €" },
    { name: "Baklava", desc: "3 Stück süßes Blätterteiggebäck mit Pistazien", price: "4,00 €" },
    { name: "Ayran", desc: "erfrischendes türkisches Joghurtgetränk (0,25l)", price: "2,00 €" },
  ]
};

// Extract categories to map the tabs
const categories = Object.keys(menuData) as Array<keyof typeof menuData>;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>("Döner Klassiker");

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <PageBanner 
        subtitle="Speisekarte"
        title="Frisch, würzig, hausgemacht"
        imageSrc="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" 
      />
      
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        <p className="text-zinc-500 text-sm text-center mb-16 animate-popup">
          Preise vorbehaltlich Änderungen. Bei Allergien oder Unverträglichkeiten sprich uns gerne an.<br/>
          <span className="text-red-700 font-bold mt-2 inline-block">Durchschnittlich 1–10 € pro Person</span>
        </p>

        {/* Menu Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-8 border-b border-zinc-800 pb-6 mb-16 animate-popup delay-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-bold tracking-wider text-sm uppercase transition-colors pb-2 border-b-2 ${
                activeCategory === category 
                  ? "text-red-600 border-red-600" 
                  : "text-zinc-500 border-transparent hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid Layout */}
        {/* We use key={activeCategory} so React unmounts and remounts this div, re-triggering the CSS animation! */}
        <div key={activeCategory} className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 animate-popup">
          
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="flex justify-between items-start group border-b border-zinc-900 pb-4">
              <div className="pr-4">
                <h4 className="text-zinc-200 group-hover:text-red-400 transition-colors text-lg font-medium">
                  {item.name}
                </h4>
                <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="text-red-600 font-bold text-lg whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}