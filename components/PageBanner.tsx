interface PageBannerProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export default function PageBanner({ title, subtitle, imageSrc }: PageBannerProps) {
  return (
    <div className="relative w-full h-[40vh] min-h-[350px] flex flex-col items-center justify-center text-center">
      
      {/* Background with Lightened Overlays */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-zinc-950/30 to-zinc-950"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto mt-10 animate-popup">
        <p className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 drop-shadow-md">{subtitle}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif tracking-wide leading-tight drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}