import strangerthingsVideo from "@/assets/Aaviskaartrailer.mp4";

export function ThemeVideo() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
            Experience The trailor
          </p>
          <h2 className="font-samarkan text-4xl md:text-5xl neon-yellow mb-4">
             previous events watch out 
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive into the mysterious world of AAVISHKAAR 2026 with our fun activities.
            Dark, cinematic, and full of surprises!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden neon-border-yellow">
            <video
              className="w-full aspect-video object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={strangerthingsVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
