import { useEffect, useState } from 'react';

interface TickerItem {
  id: number;
  text: string;
  time?: string;
}

export function SportsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tickerItems: TickerItem[] = [
    { id: 1, text: "North Hall defeats Dawson County 42-14 to clinch Region 7-3A championship", time: "7:45 PM" },
    { id: 2, text: "Flowery Branch leads Loganville 21-7 at halftime in playoff matchup", time: "8:10 PM" },
    { id: 3, text: "Gainesville Red Elephants secure playoff spot with 35-28 victory", time: "6:30 PM" },
    { id: 4, text: "East Hall upsets Chestatee 24-21 in overtime thriller", time: "9:15 PM" },
    { id: 5, text: "Johnson High basketball team advances to regional finals", time: "5:20 PM" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [tickerItems.length]);

  const currentItem = tickerItems[currentIndex];

  return (
    <div className="bg-white border-b border-[#e5e7eb]">
      <div className="px-4 py-3">
        {/* Ticker Label */}
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-[#1a3178] px-2 py-1 rounded">
            <span className="font-['Kranto',sans-serif] font-extrabold text-[11px] text-white tracking-[1px] uppercase">
              SPORTS TICKER
            </span>
          </div>
          <div className="size-2 bg-[#22c55e] rounded-full animate-pulse" />
        </div>

        {/* Ticker Content */}
        <div className="relative overflow-hidden h-[48px] bg-[#f0f4f8] rounded-lg px-3 py-2 border border-[#1a3178]/20">
          <div 
            className="transition-all duration-500 ease-in-out"
            key={currentItem.id}
          >
            <div className="flex items-start gap-2">
              <span className="font-['Kranto',sans-serif] font-semibold text-[12px] text-[#1a3178] shrink-0 mt-0.5">
                {currentItem.time}
              </span>
              <p className="font-['Kranto',sans-serif] text-[14px] text-[#111827] leading-[20px] line-clamp-2">
                {currentItem.text}
              </p>
            </div>
          </div>
        </div>

        {/* Ticker Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {tickerItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#1a3178] w-4' 
                  : 'bg-[#c1c7ce] hover:bg-[#1a3178]/50'
              }`}
              aria-label={`Go to ticker item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}