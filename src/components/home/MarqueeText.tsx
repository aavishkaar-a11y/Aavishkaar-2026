export function MarqueeText() {
  return (
    <div className="overflow-hidden bg-primary/10 border-y border-primary/30 py-3">
      <div className="marquee-container">
        <div className="marquee-content">
           <span className="text-primary font-bold text-lg px-8">Registration Opens Soon</span>
          <span className="text-primary font-bold text-lg px-8">🏆 OVERALL COLLEGE CHAMPIONSHIP - 3 GRAND PRIZES</span>
          <span className="text-secondary font-bold text-lg px-8">🥇 1st Prize</span>
          <span className="text-primary font-bold text-lg px-8">🥈 2nd Prize</span>
          <span className="text-secondary font-bold text-lg px-8">🥉 3rd Prize</span>
          <span className="text-primary font-bold text-lg px-8">💰 TOTAL PRIZE POOL: ₹1.5 LAKH+</span>
          <span className="text-secondary font-bold text-lg px-8">🎭 AAVISHKAAR 2026 - March 13th & 14th</span>
          {/* Duplicate for seamless loop */}
          <span className="text-primary font-bold text-lg px-8">Registration Opens Soon</span>
          <span className="text-primary font-bold text-lg px-8">🏆 OVERALL COLLEGE CHAMPIONSHIP - 3 GRAND PRIZES</span>
          <span className="text-secondary font-bold text-lg px-8">🥇 1st Prize</span>
          <span className="text-primary font-bold text-lg px-8">🥈 2nd Prize</span>
          <span className="text-secondary font-bold text-lg px-8">🥉 3rd Prize</span>
          <span className="text-primary font-bold text-lg px-8">💰 TOTAL PRIZE POOL: ₹1.5 LAKH+</span>
          <span className="text-secondary font-bold text-lg px-8">🎭 AAVISHKAAR 2026 - March 13th & 14th</span>
        </div>
      </div>
    </div>
  );
}
