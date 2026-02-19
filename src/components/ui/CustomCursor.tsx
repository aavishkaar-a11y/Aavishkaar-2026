import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Simple screen-based detection (most stable)
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ===============================
  // 🖥 DESKTOP CURSOR
  // ===============================
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        target.closest("button") !== null ||
        target.closest("a") !== null
      );
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop]);

  // ===============================
  // 📱 MOBILE CLICK EFFECT ONLY
  // ===============================
  useEffect(() => {
    if (isDesktop) return;

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];

      const ripple = document.createElement("div");

      ripple.style.position = "fixed";
      ripple.style.left = `${touch.clientX - 15}px`;
      ripple.style.top = `${touch.clientY - 15}px`;
      ripple.style.width = "30px";
      ripple.style.height = "30px";
      ripple.style.borderRadius = "50%";
      ripple.style.pointerEvents = "none";
      ripple.style.border = "2px solid rgba(34,211,238,0.9)";
      ripple.style.boxShadow = "0 0 18px rgba(34,211,238,0.8)";
      ripple.style.transform = "scale(0)";
      ripple.style.opacity = "1";
      ripple.style.transition =
        "transform 0.3s ease-out, opacity 0.3s ease-out";
      ripple.style.zIndex = "9999";

      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.transform = "scale(1.5)";
        ripple.style.opacity = "0";
      });

      setTimeout(() => {
        ripple.remove();
      }, 300);
    };

    document.addEventListener("touchstart", handleTouch);
    return () => document.removeEventListener("touchstart", handleTouch);
  }, [isDesktop]);

  // 🚫 Hide cursor if not desktop
  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
            isPointer
              ? "border-primary scale-150 bg-primary/10"
              : "border-secondary/50"
          }`}
          style={{
            boxShadow: isPointer
              ? "0 0 20px hsl(52 95% 55% / 0.6)"
              : "0 0 12px hsl(190 100% 50% / 0.4)",
          }}
        />
      </div>

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
        }}
      >
        <div
          className={`w-full h-full rounded-full ${
            isPointer ? "bg-primary scale-0" : "bg-secondary"
          }`}
        />
      </div>
    </>
  );
}
