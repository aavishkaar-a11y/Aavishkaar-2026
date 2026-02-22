// src/pages/Prizes.tsx
import { useEffect, useRef, useState } from "react";
import { Crown } from "lucide-react";
import { gsap } from "gsap";

import { Layout } from "@/components/layout/Layout";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { day1Events, day2Events } from "@/data/events";

const allEvents = [...day1Events, ...day2Events];

/* ================= COUNT UP ================= */
function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return value;
}

/* ================= CONFETTI ================= */
function launchConfetti(container: HTMLDivElement, count = 80) {
  const colors = ["#facc15", "#22d3ee", "#ffffff", "#fde047"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(piece);

    gsap.fromTo(
      piece,
      { y: -50, opacity: 1 },
      {
        y: window.innerHeight + 100,
        rotation: "+=360",
        duration: 2 + Math.random(),
        ease: "power2.out",
        onComplete: () => piece.remove(),
      }
    );
  }
}

export default function Prizes() {
  const heroRef = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<HTMLDivElement>(null);

  const [startCount, setStartCount] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<
    null | "first" | "second" | "third"
  >(null);

  const totalPrize = useCountUp(150000, startCount);

  /* ================= HERO ANIMATION ================= */
  useEffect(() => {
    if (!heroRef.current) return;

    gsap
      .timeline({ defaults: { ease: "power4.out" } })
      .from(".hero-title", { y: 60, opacity: 0, duration: 1 })
      .from(".hero-sub", { opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-prize", { scale: 0.85, opacity: 0, duration: 0.6 }, "-=0.3");

    setStartCount(true);

    if (confettiRef.current) {
      launchConfetti(confettiRef.current, 80);
    }
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden text-foreground">

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
          src="/videos/prize-bg.mp4"
        />
        <div className="fixed inset-0 bg-black/80 -z-10" />

        {/* CONFETTI LAYER */}
        <div
          ref={confettiRef}
          className="pointer-events-none fixed inset-0 z-20"
        />

        {/* ================= HERO ================= */}
        <section
          ref={heroRef}
          className="py-28 text-center relative z-30"
        >
          <h1 className="hero-title font-samarkan text-4xl sm:text-6xl neon-yellow mb-4">
            🏆 OVERALL COLLEGE CHAMPIONSHIP
          </h1>

          <p className="hero-sub text-muted-foreground mb-6">
            Points earned in every event will determine the champion.
          </p>

          <div className="hero-prize inline-block px-10 py-8 rounded-3xl border-2 border-yellow-400 glow">
            <p className="uppercase tracking-widest text-sm mb-2">
              Total Prize Pool
            </p>
            <p className="text-4xl sm:text-6xl font-extrabold text-yellow-400">
              ₹{totalPrize.toLocaleString()}+
            </p>
          </div>
        </section>

        {/* ================= TROPHY SYSTEM ================= */}
        <section className="container mx-auto px-4 py-24 relative z-30">

          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-16 flex justify-center gap-3">
              <Crown className="text-yellow-400" size={34} />
              OVERALL POINTS SYSTEM
            </h2>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-3 gap-10">

            {[
              { label: "🥇 1st Prize", key: "first" },
              { label: "🥈 2nd Prize", key: "second" },
              { label: "🥉 3rd Prize", key: "third" },
            ].map((item) => (
              <ScrollAnimation key={item.key}>
                <div
                  onClick={() =>
                    setSelectedPrize(item.key as any)
                  }
                  className={`trophy-card cursor-pointer hover:scale-105 transition-all duration-300 ${
                    selectedPrize === item.key
                      ? "ring-2 ring-yellow-400"
                      : ""
                  }`}
                >
                  <h3 className="text-xl font-bold">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Click to see points
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* ================= DYNAMIC DETAILS ================= */}
          {selectedPrize && (
            <div className="mt-14 max-w-3xl mx-auto text-center trophy-card">

              {selectedPrize === "first" && (
                <>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    🥇 1st Prize = 15 Points
                  </h3>
                  <p className="text-lg">
                    Winning First Prize in any event earns
                    <span className="text-yellow-400 font-bold">
                      {" "}15 Championship Points
                    </span>.
                  </p>
                </>
              )}

              {selectedPrize === "second" && (
                <>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    🥈 2nd Prize = 10 Points
                  </h3>
                  <p className="text-lg">
                    Winning Second Prize in any event earns
                    <span className="text-yellow-400 font-bold">
                      {" "}10 Championship Points
                    </span>.
                  </p>
                </>
              )}

              {selectedPrize === "third" && (
                <>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    🥉 3rd Prize = 5 Points
                  </h3>
                  <p className="text-lg">
                    Winning Third Prize in any event earns
                    <span className="text-yellow-400 font-bold">
                      {" "}5 Championship Points
                    </span>.
                  </p>
                </>
              )}

              <p className="text-muted-foreground mt-6 leading-relaxed">
                All points will be accumulated across events.
                The college with the highest total points will be crowned
                <span className="text-yellow-400 font-semibold">
                  {" "}Overall College Champion
                </span>.
                The Top 3 colleges will receive a special trophy.
              </p>

            </div>
          )}
        </section>

        {/* ================= STYLES ================= */}
        <style>{`
          .confetti-piece {
            position: absolute;
            top: 0;
            width: 8px;
            height: 14px;
            opacity: 0.9;
          }

          .glow {
            box-shadow: 0 0 70px rgba(250,204,21,.9);
            animation: pulse 3s infinite;
          }

          .trophy-card {
            background: rgba(0,0,0,.6);
            padding: 2rem;
            border-radius: 1.25rem;
            box-shadow: 0 0 25px rgba(250,204,21,.25);
          }

          @keyframes pulse {
            0%,100% { box-shadow: 0 0 45px rgba(250,204,21,.6); }
            50% { box-shadow: 0 0 90px rgba(250,204,21,1); }
          }
        `}</style>

      </div>
    </Layout>
  );
}