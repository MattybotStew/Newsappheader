import { useState, useEffect } from 'react';

interface NativeAdPodcastCardProps {
  adUnit: string;
}

export function NativeAdPodcastCard({ adUnit }: NativeAdPodcastCardProps) {
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
    <div className="relative w-full bg-[#2c2c2c] rounded-lg shadow-sm border border-[#444] overflow-hidden">
      {/* Sponsored label */}
      <div className="absolute top-3 right-3 z-10">
        <span className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#999] uppercase tracking-wider bg-[#1a1a1a]/90 px-2 py-1 rounded">
          Sponsored
        </span>
      </div>

      <div className="flex gap-3 p-3">
        {/* Thumbnail */}
        <div className="size-24 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#4a4a4a] to-[#3a3a3a]">
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#999]">AD</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[15px] text-white mb-1 line-clamp-2" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sponsored Content - Your Ad Here
          </h3>
          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#bbb] mb-2 line-clamp-2" style={{ fontVariationSettings: "'wdth' 100" }}>
            Reach engaged listeners with targeted podcast advertising.
          </p>
          <div className="flex items-center gap-2 text-[#999]">
            <span className="font-['Roboto:Regular',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Advertisement
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}