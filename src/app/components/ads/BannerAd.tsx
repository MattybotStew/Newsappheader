import { useState, useEffect } from 'react';

interface BannerAdProps {
  adUnit: string;
  size: { width: number; height: number };
  label?: string;
  className?: string;
}

export function BannerAd({ adUnit, size, label, className = '' }: BannerAdProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simulate ad loading
    const timer = setTimeout(() => {
      // Simulate 90% success rate
      if (Math.random() > 0.1) {
        setIsLoaded(true);
      } else {
        setHasError(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Collapse container if ad fails to load
  if (hasError) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <div className="text-center mb-2">
          <span className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#6b7178] uppercase tracking-wider">
            {label}
          </span>
        </div>
      )}
      <div
        className="bg-[#2c2c2c] border border-[#444] flex items-center justify-center overflow-hidden"
        style={{ width: `${size.width}px`, height: `${size.height}px` }}
      >
        {isLoaded ? (
          <div className="text-center p-4">
            <div className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#999] mb-2">
              Advertisement
            </div>
            <div className="font-['Roboto:Bold',sans-serif] text-[14px] text-white mb-1">
              Ad Placeholder
            </div>
            <div className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#bbb]">
              {size.width} × {size.height}
            </div>
          </div>
        ) : (
          <div className="animate-pulse w-full h-full bg-gradient-to-r from-[#3a3a3a] via-[#2c2c2c] to-[#3a3a3a]" />
        )}
      </div>
    </div>
  );
}