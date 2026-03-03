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
  audio.volume = 0; // start silent
  audioRef.current = audio;

  audio.play().catch(() => {});

  let vol = 0;

  const fadeIn = setInterval(() => {
    if (vol < 0.8) {
      vol += 0.05;
      audio.volume = vol;
    } else {
      clearInterval(fadeIn);
    }
  }, 200);

    // Stage timing (16 sec smooth flow)
    setTimeout(() => setStage(1), 1000);
    setTimeout(() => setStage(2), 5000);
    setTimeout(() => setStage(3), 9000);

    // Fade out audio before exit
    setTimeout(() => {
      let fadeOutVol = audio.volume;
      const fadeOut = setInterval(() => {
        if (fadeOutVol > 0) {
          fadeOutVol -= 0.05;
          audio.volume = fadeOutVol;
        } else {
          clearInterval(fadeOut);
          audio.pause();
        }
      }, 200);
    }, 14000);

    setTimeout(() => onFinish(), 16000);

    return () => {
      audio.pause();
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, backgroundColor: "#0a1d4d" }}
        transition={{ duration: 2 }}
        className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at center, #0a1d4d 0%, #000814 80%)",
        }}
      >
        {/* Smooth Camera Zoom */}
        <motion.div
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 16, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >

          {/* Rotating Depth Glow */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute w-[1200px] h-[1200px] rounded-full 
            bg-gradient-to-tr from-blue-700/20 via-yellow-400/10 to-transparent 
            blur-3xl"
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(40)].map((_, i) => (
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
                  y: [-20, -200],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 10 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="text-center relative px-4">

            {/* AAVISHKAAR */}
            {stage >= 2 && (
              <div className="flex justify-center flex-wrap samarakan">
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                      y: [0, -12, 0, 12, 0],
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-6xl font-samarkan sm:text-8xl md:text-[140px]
                    font-bold tracking-widest text-yellow-400"
                    style={{
                      textShadow:
                        "0 0 15px #facc15, 0 0 40px #fbbf24, 0 0 80px #f59e0b",
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
                transition={{ duration: 2 }}
                className="text-4xl sm:text-6xl md:text-8xl font-samarkan font-bold text-blue-400 mt-6"
              >
                2026
              </motion.h2>
            )}

            {/* Tagline */}
            {stage >= 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
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
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: dot * 0.3,
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