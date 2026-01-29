import { useEffect, useRef, useState } from "react";
import introVideo from "@/assets/Aaviskaartrailer.mp4";

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showIntro, setShowIntro] = useState(true);
  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect screen */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Skip if already shown */
  useEffect(() => {
    if (sessionStorage.getItem("introShown")) {
      setShowIntro(false);
    }
  }, []);

  /* START VIDEO + AUDIO (USER GESTURE) */
  const startVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false; // 🔊 ENABLE AUDIO
      video.volume = 1;
      video.currentTime = 0;
      await video.play();
      setStarted(true);
    } catch (err) {
      console.error("Playback blocked:", err);
    }
  };

  const endIntro = () => {
    setFadeOut(true);
    setTimeout(() => {
      sessionStorage.setItem("introShown", "true");
      setShowIntro(false);
    }, 700);
  };

  if (!showIntro) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* TAP TO START */}
      {!started && (
        <div
          onClick={startVideo}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 text-center cursor-pointer px-4"
        >
          <p className="text-yellow-400 tracking-widest text-sm mb-2">
            TAP TO START
          </p>
          <p className="text-yellow-300 text-lg sm:text-xl font-semibold">
            Experience AAVISHKAAR 2026
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Sound ON • Best experience
          </p>
        </div>
      )}

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={introVideo}
        playsInline
        webkit-playsinline="true"
        preload="auto"
        onEnded={endIntro}
        className={`w-full h-full ${
          isMobile ? "object-contain" : "object-cover"
        }`}
        style={{
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />

      {/* SKIP */}
      <button
        onClick={endIntro}
        className="absolute bottom-6 right-6 z-30 px-5 py-2 text-yellow-400 border border-yellow-400/60 bg-black/60 text-xs tracking-widest uppercase backdrop-blur"
      >
        Skip
      </button>

      {/* MOBILE SAFE GRADIENT */}
      {isMobile && (
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      )}
    </div>
  );
}