export function Guest() {
  const totalGuests = 9;

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-yellow-400/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      {/* 🔥 Title */}
      <div className="text-center mb-16 md:mb-24 relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-widest neon-yellow">
          Faces of Fame
        </h2>

        <p className="mt-4 text-cyan-400 tracking-wider text-base md:text-lg">
          6 Juries • 3 Main Guests
        </p>

        <p className="text-gray-400 mt-2 text-xs md:text-sm tracking-widest">
          Revealing Soon...
        </p>
      </div>

      {/* 🎬 Circular Rotating Carousel */}
      <div className="carousel-container relative z-10">
        <div className="carousel">

          {Array.from({ length: totalGuests }).map((_, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                transform: `rotateY(${index * (360 / totalGuests)}deg) translateZ(350px)`
              }}
            >
              <div className="card">

                {/* Floating */}
                <div className="absolute inset-0 rounded-3xl animate-float"></div>

                {/* Mystery Content */}
                <div className="flex flex-col items-center animate-breathe">
                  <div className="text-5xl md:text-7xl text-cyan-400/30 font-bold">
                    ?
                  </div>
                  <p className="mt-4 text-[10px] md:text-xs tracking-widest text-gray-500 uppercase">
                    Mystery Guest
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
