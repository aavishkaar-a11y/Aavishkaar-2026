import { useEffect } from "react";

export const useAutoScroll = () => {
  useEffect(() => {
    let animationFrameId: number;
    let isUserInteracting = false;
    let resumeTimeout: ReturnType<typeof setTimeout>;
    let currentSpeed = 0;

    const baseSpeed = 0.5;     // readable slow speed
    const smoothFactor = 0.05;

    const startAutoScroll = () => {
      isUserInteracting = false;
      currentSpeed = 0; // reset speed for smooth restart
      animationFrameId = requestAnimationFrame(scroll);
    };

    const stopAutoScroll = () => {
      isUserInteracting = true;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resumeTimeout);

      resumeTimeout = setTimeout(() => {
        startAutoScroll();
      }, 10000); // 10 sec idle
    };

    const scroll = () => {
      if (isUserInteracting) return;

      // Always get latest position (important fix)
      const scrollPosition = window.scrollY;

      currentSpeed += (baseSpeed - currentSpeed) * smoothFactor;

      const newPosition = scrollPosition + currentSpeed;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (newPosition >= maxScroll) {
        cancelAnimationFrame(animationFrameId);
        return;
      }

      window.scrollTo(0, newPosition);

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    window.addEventListener("wheel", stopAutoScroll);
    window.addEventListener("touchstart", stopAutoScroll);
    window.addEventListener("keydown", stopAutoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resumeTimeout);
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
      window.removeEventListener("keydown", stopAutoScroll);
    };
  }, []);
};
