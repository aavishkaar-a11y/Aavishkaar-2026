import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IntroVideoProps {
  onFinish: () => void;
}

const text = "AAVISHKAAR";

const IntroVideo = ({ onFinish }: IntroVideoProps) => {
  const [stage, setStage] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/intro.mp3");
    audio.volume = 0;
    audioRef.current = audio;

    audio.play().catch(() => {});

    let vol = 0;

    const fadeIn = setInterval(() => {
      if (vol < 0.8) {
        vol += 0.2;
        audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 100);

    setTimeout(() => setStage(1), 300);
    setTimeout(() => setStage(2), 800);
    setTimeout(() => setStage(3), 1500);

    setTimeout(() => {
      let fadeOutVol = audio.volume;
      const fadeOut = setInterval(() => {
        if (fadeOutVol > 0) {
          fadeOutVol -= 0.2;
          audio.volume = fadeOutVol;
        } else {
          clearInterval(fadeOut);
          audio.pause();
        }
      }, 100);
    }, 4000);

    setTimeout(() => onFinish(), 5000);

    return () => {
      audio.pause();
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at center, #0a1d4d 0%, #000814 80%)",
        }}
      >
        {/* Smooth Zoom */}
        <motion.div
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ willChange: "transform" }}
        >

          {/* Soft Glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute w-[700px] h-[700px] rounded-full
            bg-gradient-to-tr from-blue-700/20 via-yellow-400/10 to-transparent
            blur-2xl"
          />

          {/* Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(18)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  background: i % 2 === 0 ? "#facc15" : "#3b82f6",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, -120],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="text-center relative px-4">

            {/* Title */}
            {stage >= 2 && (
              <div className="flex justify-center flex-wrap">
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="text-6xl sm:text-7xl md:text-[110px]
                    font-bold tracking-widest font-samarkan text-yellow-400"
                    style={{
                      textShadow:
                        "0 0 12px #facc15, 0 0 30px #fbbf24, 0 0 60px #f59e0b",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Year */}
            {stage >= 3 && (
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-blue-400 mt-6"
              >
                2026
              </motion.h2>
            )}

            {/* Tagline */}
            {stage >= 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-6 text-lg sm:text-xl md:text-2xl text-yellow-300"
              >
                Unleashed Vibe. Unmatched Energy.
              </motion.p>
            )}

            {/* Loading Dots */}
            {stage >= 3 && (
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: dot * 0.2,
                    }}
                    className="w-3 h-3 bg-yellow-400 rounded-full"
                  />
                ))}
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroVideo;