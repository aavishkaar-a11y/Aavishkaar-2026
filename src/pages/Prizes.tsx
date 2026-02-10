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

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

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
      launchConfetti(confettiRef.current, isMobile ? 40 : 100);
    }
  }, [isMobile]);

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
            🎭 AAVISHKAAR 2026 • March 27 & 28
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

        {/* ================= GRAND PRIZES ================= */}
        <section className="container mx-auto px-4 py-24">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-16 flex justify-center gap-3">
              <Crown className="text-yellow-400" size={34} />
              GRAND PRIZES 
            </h2>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-3 gap-10">
            {["🥇 1st Prize", "🥈 2nd Prize", "🥉 3rd Prize"].map((p) => (
              <ScrollAnimation key={p}>
                  <div className="trophy-card flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-bold ">{p}</h3>
                  <p className="text-muted-foreground">
                    
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* ================= EVENT PRIZES ================= */}
        <section className="container mx-auto px-4 pb-32">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-16">
              Event-Wise Prizes
            </h2>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {allEvents.map((event) => {
              const total = event.prizes.reduce(
                (s, p) => s + Number(p.amount.replace(/\D/g, "")),
                0
              );

              const count = useCountUp(total, startCount);

              return (
                <ScrollAnimation key={event.id}>
                  <div className="event-card">
                    <h3 className="neon-yellow font-semibold mb-2">
                      {event.title}
                    </h3>

                    <p className="text-primary mb-3">
                      ₹{count.toLocaleString()}
                    </p>

                    {event.prizes.map((p, i) => (
                      <div
                        key={i}
                        className="flex justify-between bg-muted/20 px-3 py-2 rounded text-sm mb-2"
                      >
                        <span>{p.position}</span>
                        <span>{p.amount}</span>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
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

          .trophy-card,
          .event-card {
            background: rgba(0,0,0,.6);
            padding: 1.5rem;
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