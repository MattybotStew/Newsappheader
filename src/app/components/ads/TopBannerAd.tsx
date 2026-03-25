import { useState, useEffect } from 'react';
import weaverLawBanner from '../../../assets/weaver-law-banner.png';

interface TopBannerAdProps {
  adUnit: string;
}

export function TopBannerAd({ adUnit }: TopBannerAdProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simulate ad loading
    const timer = setTimeout(() => {
      // Simulate 95% success rate
      if (Math.random() > 0.05) {
        setIsLoaded(true);
      } else {
        setHasError(true);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [adUnit]);

  // Collapse container if ad fails to load
  if (hasError || !isLoaded) {
    return null;
  }

  return (
    <div className="bg-[#011843] w-full shrink-0">
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