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

export default function Prizes() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  // ✅ MOVE STATE HERE (CORRECT PLACE)
  const [openPrize, setOpenPrize] = useState<
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
  }, []);

  /* ================= CLOSE ON ESC ================= */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPrize(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const eventTotals = allEvents.map((event) =>
  event.prizes.reduce(
    (s, p) => s + Number(p.amount.replace(/\D/g, "")),
    0
  )
);
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden text-foreground">

        {/* BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
          src="/videos/prize-bg.mp4"
        />
        <div className="fixed inset-0 bg-black/80 -z-10" />

        {/* ================= HERO ================= */}
        <section
          ref={heroRef}
          className="py-28 text-center relative z-30"
        >
          <h1 className="hero-title font-samarkan text-4xl sm:text-6xl neon-yellow mb-4">
            🏆 OVERALL COLLEGE CHAMPIONSHIP
          </h1>

          <p className="hero-sub text-muted-foreground mb-6">
            Points earned in every event determine the champion.
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

        {/* ================= TROPHY SECTION ================= */}
        <section className="container mx-auto px-4 py-24 relative">

          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-16 flex justify-center gap-3">
              <Crown className="text-yellow-400" size={34} />
              OVERALL COLLEGE TROPHY
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
                  onClick={() => setOpenPrize(item.key as any)}
                  className="trophy-card cursor-pointer flex flex-col items-center justify-center text-center relative hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">
                    {item.label}
                  </h3>

                  <span className="click-badge">
                    Click Me
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* ================= POPUP ================= */}
          {openPrize && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              onClick={() => setOpenPrize(null)}
            >
              <div
                className="popup-box relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setOpenPrize(null)}
                  className="absolute top-4 right-4 text-white text-xl hover:text-yellow-400"
                >
                  ✕
                </button>

                {openPrize === "first" && (
                  <>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                      🥇 1st Prize = 15 Points
                    </h3>
                    <p>
                      Winning First Prize earns
                      <span className="text-yellow-400 font-bold">
                        {" "}15 Championship Points
                      </span>.
                    </p>
                  </>
                )}

                {openPrize === "second" && (
                  <>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                      🥈 2nd Prize = 10 Points
                    </h3>
                    <p>
                      Winning Second Prize earns
                      <span className="text-yellow-400 font-bold">
                        {" "}10 Championship Points
                      </span>.
                    </p>
                  </>
                )}

                {openPrize === "third" && (
                  <>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                      🥉 3rd Prize = 5 Points
                    </h3>
                    <p>
                      Winning Third Prize earns
                      <span className="text-yellow-400 font-bold">
                        {" "}5 Championship Points
                      </span>.
                    </p>
                  </>
                )}

                <p className="text-muted-foreground mt-6">
                  Points from all events will be accumulated.
                  The highest scoring college becomes the
                  <span className="text-yellow-400 font-semibold">
                    {" "}Overall Champion
                  </span>.
                </p>
              </div>
            </div>
          )}
          {/* ================= EVENT-WISE PRIZES ================= */}
<section className="container mx-auto px-4 pb-32">
  <ScrollAnimation>
    <h2 className="text-3xl font-bold text-center mt-16 mb-16 neon-yellow">
      Event-Wise Prizes
    </h2>
  </ScrollAnimation>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {allEvents.map((event, index) => {
      const total = eventTotals[index];
      const count = useCountUp(total, startCount);

      return (
        <ScrollAnimation key={event.id}>
          <div className="event-card hover:scale-105 transition-all duration-300">

            <h3 className="neon-yellow font-semibold mb-3 text-lg">
              {event.title}
            </h3>

            <p className="text-primary text-xl font-bold mb-4">
              ₹{count.toLocaleString()}
            </p>

            {event.prizes.map((p, i) => (
              <div
                key={i}
                className="flex justify-between bg-muted/20 px-4 py-2 rounded text-sm mb-2"
              >
                <span>{p.position}</span>
                <span className="text-yellow-400">{p.amount}</span>
              </div>
            ))}

          </div>
        </ScrollAnimation>
      );
    })}
  </div>
</section>

        </section>

        {/* ================= STYLES ================= */}
        <style>{`
          .trophy-card {
            background: rgba(0,0,0,.6);
            padding: 2rem;
            border-radius: 1.25rem;
            box-shadow: 0 0 25px rgba(250,204,21,.25);
          }

          .click-badge {
            font-size: 0.8rem;
            color: #facc15;
            animation: pulseClick 1.5s infinite;
          }

          @keyframes pulseClick {
            0% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.5; transform: scale(1); }
          }

          .popup-box {
            background: rgba(0,0,0,.95);
            padding: 3rem;
            border-radius: 1.5rem;
            width: 90%;
            max-width: 500px;
            text-align: center;
            animation: popupAnim .3s ease-out;
            box-shadow: 0 0 40px rgba(250,204,21,.6);
          }

          @keyframes popupAnim {
            from { transform: scale(.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          .glow {
            box-shadow: 0 0 70px rgba(250,204,21,.9);
            animation: pulse 3s infinite;
          }

          @keyframes pulse {
            0%,100% { box-shadow: 0 0 45px rgba(250,204,21,.6); }
            50% { box-shadow: 0 0 90px rgba(250,204,21,1); }
          }
            .event-card {
    background: rgba(0,0,0,.6);
    padding: 1.5rem;
    border-radius: 1.25rem;
    box-shadow: 0 0 25px rgba(250,204,21,.25);
  }
        `}</style>

      </div>
    </Layout>
  );
}