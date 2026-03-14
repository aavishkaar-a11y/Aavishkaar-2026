import { useState } from "react";
import { Play } from "lucide-react";

export function ThemeVideo() {
  const [play, setPlay] = useState(false);

  const videoId = "WZOBDECGBds";

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
            Experience The Trailer
          </p>

          <h2 className="font-samarkan text-4xl md:text-5xl neon-yellow mb-4">
            Previous Events Watch Out
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive into the mysterious world of AAVISHKAAR 2026 with our fun activities.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden neon-border-yellow aspect-video">

            {!play ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setPlay(true)}
              >
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  className="w-full h-full object-cover"
                  alt="Trailer"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-yellow-400 p-5 rounded-full shadow-xl group-hover:scale-110 transition">
                    <Play size={36} className="text-black ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&controls=1`}
                title="Aavishkaar Trailer"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}

          </div>
        </div>

      </div>
    </section>
  );
}