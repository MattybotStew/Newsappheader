import { useState, useEffect } from 'react';

interface AnchoredBannerProps {
  adUnit: string;
}

export function AnchoredBanner({ adUnit }: AnchoredBannerProps) {
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
    <div className="fixed bottom-[60px] left-0 right-0 z-40 bg-[#1a1a1a] border-t border-[#444] shadow-[0_-2px_8px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-center w-full h-[50px] bg-[#2c2c2c]">
        <div className="text-center">
          <span className="font-['Roboto:Regular',sans-serif] text-[11px] text-white">
            Advertisement
          </span>
        </div>
      </div>
    </div>
  );
}