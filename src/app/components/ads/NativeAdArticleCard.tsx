import { useState, useEffect } from 'react';
import placeholderImage from 'figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png';

interface NativeAdArticleCardProps {
  adUnit: string;
}

export function NativeAdArticleCard({ adUnit }: NativeAdArticleCardProps) {
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
    <div className="relative block hover:bg-[#1a1a1a] transition-colors bg-[#2c2c2c] border-b border-[#444]">
      <div className="flex gap-3 items-start pb-[11px] pt-[10px] px-4">
        {/* Sponsored label in top right */}
        <div className="absolute top-3 right-4">
          <span className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#999] uppercase tracking-wider">
            Sponsored
          </span>
        </div>

        <div className="h-[68px] rounded-xl shrink-0 w-20 overflow-hidden bg-gradient-to-br from-[#4a4a4a] to-[#3a3a3a]">
          <img
            src={placeholderImage}
            alt="Advertisement"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[3px]">
          <div className="font-['Roboto:Bold',sans-serif] font-bold text-[#6b9bd1] text-[10px] tracking-[0.7px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
            Advertisement
          </div>
          <div className="h-[37.78px] overflow-clip">
            <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] text-white text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your Ad Could Be Here - Reach Local Audiences
            </div>
          </div>
          <div className="font-['Roboto:Regular',sans-serif] font-normal text-[#bbb] text-[10px] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sponsored Content
          </div>
        </div>
      </div>
    </div>
  );
}