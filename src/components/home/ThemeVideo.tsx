export function ThemeVideo() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-10">
          <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
            Experience The Trailer
          </p>

          <h2 className="font-samarkan text-4xl md:text-5xl neon-yellow mb-4">
            Previous Events Watch Out
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive into the mysterious world of AAVISHKAAR 2026 with our fun activities.
            Dark, cinematic, and full of surprises!
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden neon-border-yellow aspect-video">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/WZOBDECGBds"
              title="Aavishkaar Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>
        </div>

      </div>
    </section>
  );
}
