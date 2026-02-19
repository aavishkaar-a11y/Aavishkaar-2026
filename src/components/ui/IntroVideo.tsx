import { useEffect, useRef, useState } from "react";
import introVideo from "@/assets/AaviskaarIntro.mp4";

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showIntro, setShowIntro] = useState(false);
  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  /* Check if already shown (per tab) */
  useEffect(() => {
    const shown = sessionStorage.getItem("introShown");
    if (!shown) setShowIntro(true);
  }, []);

  /* Start video with audio (user gesture required) */
  const startVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false;
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
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* TAP TO START OVERLAY */}
      {!started && (
        <div
          onClick={startVideo}
          onTouchStart={startVideo}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/70 text-center cursor-pointer px-4"
        >
          <p className="text-yellow-400 tracking-widest text-sm mb-2 animate-pulse">
            TOUCH ANYWHERE
          </p>
          <p className="text-yellow-300 text-lg sm:text-xl md:text-2xl font-semibold">
            Experience AAVISHKAAR 2026
          </p>
          <p className="text-xs text-gray-400 mt-3">
            Sound ON • Best Experience
          </p>
        </div>
      )}

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={introVideo}
        playsInline
        preload="auto"
        onEnded={endIntro}
        className="w-full h-full object-contain sm:object-cover"
      />
    </div>
  );
}
