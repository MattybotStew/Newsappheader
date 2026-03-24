import { useState, useEffect } from 'react';
import weaverLawBanner from 'figma:asset/c32522b368fd0595bbc044e71ef12f86b79ec203.png';

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
    <div className="fixed bottom-[72px] left-0 right-0 z-40 bg-white border-t border-[#e5e7eb] shadow-[0_-2px_8px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center py-2">
        <a 
          href="https://example.com/weaverlaw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <img
            src={weaverLawBanner}
            alt="Weaver Law - Injury Attorneys"
            className="max-w-full h-auto"
            style={{ maxHeight: '90px' }}
          />
        </a>
      </div>
    </div>
  );
}