import { useEffect, useState } from "react";

export default function Popup() {
  const text =
    "📢 AAVISHKAAR 2026 has been postponed | Previous Dates: March 27th & 28th ❌ | New Dates: May 8th & 9th ✅";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#1E2A5A",
        color: "#FACC15",
        overflow: "hidden",
        position: "fixed",
        top: isMobile ? "65px" : "110px", // ✅ responsive top
        left: 0,
        zIndex: 9999,
      }}
    >
      <div style={{ display: "flex", whiteSpace: "nowrap" }}>
        <div
          style={{
            padding: "10px 0",
            fontWeight: 700,
            fontSize: isMobile ? "12px" : "14px", // ✅ responsive font
            animation: isMobile
              ? "marquee 16s linear infinite" // slower on mobile
              : "marquee 12s linear infinite",
          }}
        >
          {text}
        </div>

        <div
          style={{
            padding: "10px 0",
            fontWeight: 700,
            fontSize: isMobile ? "12px" : "14px",
            animation: isMobile
              ? "marquee 16s linear infinite"
              : "marquee 12s linear infinite",
          }}
        >
          {text}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}