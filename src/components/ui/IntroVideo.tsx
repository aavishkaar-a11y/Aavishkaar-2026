import { useState, useEffect, useRef } from "react";
import strangerthingsVideo from "@/assets/Aaviskaartrailer.mp4";

export function IntroVideo() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">("desktop");

useEffect(() => {
  const checkScreen = () => {
    const width = window.innerWidth;

    if (width < 640) setScreenType("mobile");
    else if (width < 1024) setScreenType("tablet");
    else setScreenType("desktop");
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);


  useEffect(() => {
    // Check if intro was already shown in this session
    const introShown = sessionStorage.getItem("introShown");
    if (introShown) {
      setShowIntro(false);
      return;
    }

    // Auto-skip after video ends or after 15 seconds max

    return () => clearTimeout(timeout);
  }, []);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("introShown", "true");
    }, 1000);
  };

  const handleVideoEnd = () => {
    handleSkip();
  };

  if (!showIntro) return null;

  return (
    <div
       className={`fixed top-0 left-0 w-screen h-screen z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000  ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
    <div>{!hasStarted && (
  <div
    onClick={() => {
      setHasStarted(true);
      videoRef.current?.play();
    }}
    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80 text-center cursor-pointer"
  >
    <p className="text-secondary text-sm tracking-widest uppercase mb-2">
      Tap to Start
    </p>
    <p className="text-primary text-lg font-semibold">
      Experience AAVISHKAAR 2026
    </p>
  </div>
)}
</div>
      {/* Video */}
      <video
  ref={videoRef}
  className={`w-full h-full ${
    screenType === "desktop" ? "object-cover" : "object-contain"
  }`}
  playsInline
  onEnded={handleSkip}
>

        <source src={strangerthingsVideo} type="video/mp4" />
      </video>

      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-30" />

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-3 bg-black/60 border border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary transition-all duration-300 text-sm tracking-widest uppercase font-medium backdrop-blur-sm"
      >
        Skip Intro
      </button>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none vignette" />
    </div>
  );
}
