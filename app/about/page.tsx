import PageBanner from '../../components/PageBanner'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <PageBanner 
        subtitle="Über uns"
        title="Vom Familienrezept auf den Teller in Schweinfurt"
        imageSrc="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2000&auto=format&fit=crop" 
      />
      
      <div className="max-w-4xl mx-auto px-8 py-24 text-center animate-popup delay-200">
        <h3 className="text-3xl font-serif text-white mb-8">Unsere Geschichte</h3>
        <div className="space-y-8 text-zinc-400 leading-relaxed text-lg">
          <p>
            Willkommen im Kösem Food House, direkt im Herzen von Schweinfurt. Wir stehen für echte Qualität, frische Zutaten und die Leidenschaft für das perfekte Döner-Erlebnis. Jeder Spieß wird mit Sorgfalt zubereitet und unser Brot täglich frisch gebacken.
          </p>
          <p>
            Ob Klassiker im Fladenbrot, ein saftiger Dürüm oder frische vegetarische Alternativen – bei uns trifft Tradition auf modernen Genuss. Besuche uns und schmecke den Unterschied.
          </p>
        </div>
      </div>
    </div>
  )
}