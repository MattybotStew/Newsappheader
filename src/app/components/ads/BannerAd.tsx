import { useState, useEffect } from 'react';
import { getRandomAd } from '../../data/fakeAds';

interface BannerAdProps {
  adUnit: string;
  size: { width: number; height: number };
  label?: string;
  className?: string;
}

export function BannerAd({ adUnit, size, label, className = '' }: BannerAdProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ad] = useState(() => getRandomAd());

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
        className="bg-white border border-[#e5e7eb] flex flex-col overflow-hidden"
        style={{ width: `${size.width}px`, height: `${size.height}px` }}
      >
        {isLoaded ? (
          <a
            href={ad.clickUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full hover:opacity-90 transition-opacity"
          >
            <div className="flex-1 relative overflow-hidden">
              <img
                src={ad.imageUrl}
                alt={ad.headline}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
              <div className="font-['Source_Sans_3',sans-serif] text-[9px] text-[#6b7280] uppercase tracking-wide mb-1">
                {ad.advertiser}
              </div>
              <div className="font-['Source_Sans_3',sans-serif] font-bold text-[13px] text-[#1a3178] leading-tight mb-1">
                {ad.headline}
              </div>
              <div className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#6b7280] line-clamp-2 leading-snug">
                {ad.bodyText}
              </div>
            </div>
          </a>
        ) : (
          <div className="animate-pulse w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
        )}
      </div>
    </div>
  );
}