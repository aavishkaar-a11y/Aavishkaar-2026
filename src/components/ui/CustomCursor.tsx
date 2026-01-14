import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-300 ${
            isPointer 
              ? 'border-primary scale-150 bg-primary/10' 
              : 'border-secondary/50 scale-100'
          }`}
          style={{
            boxShadow: isPointer 
              ? '0 0 20px hsl(52 95% 55% / 0.5), 0 0 40px hsl(52 95% 55% / 0.3)'
              : '0 0 10px hsl(190 100% 50% / 0.3)'
          }}
        />
      </div>
      {/* Inner dot */}
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
          className={`w-full h-full rounded-full transition-all duration-150 ${
            isPointer ? 'bg-primary scale-0' : 'bg-secondary scale-100'
          }`}
          style={{
            boxShadow: '0 0 10px hsl(190 100% 50% / 0.8)'
          }}
        />
      </div>
    </>
  );
}
