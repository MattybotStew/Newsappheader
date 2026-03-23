import { useState, useEffect } from 'react';

interface TopBannerAdProps {
  adUnit: string;
}

export function TopBannerAd({ adUnit }: TopBannerAdProps) {
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
  }, [adUnit]);

  // Collapse container if ad fails to load
  if (hasError || !isLoaded) {
    return null;
  }

  return (
    <div className="bg-[#1a1a1a] w-full border-b border-[#444] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)]">
      <div className="bg-[#2c2c2c] h-[50px] flex items-center justify-center">
        <span className="font-['Roboto:Regular',sans-serif] text-[11px] text-white">
          Advertisement
        </span>
      </div>
    </div>
  );
}
