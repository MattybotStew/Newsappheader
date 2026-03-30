import { getRandomAd } from '../../data/fakeAds';

interface NativeAdPodcastCardProps {
  adUnit: string;
}

export function NativeAdPodcastCard({ adUnit: _ }: NativeAdPodcastCardProps) {
  const ad = getRandomAd();

  return (
    <a
      href={ad.clickUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block hover:opacity-95 transition-opacity bg-[#1a3178] border-b border-[#444]"
    >
      <div className="flex gap-3 items-start pb-[11px] pt-[10px] px-4">
        <div className="absolute top-3 right-4">
          <span className="font-['Source_Sans_3',sans-serif] text-[10px] text-[#6b9bd1] uppercase tracking-wider">
            Sponsored
          </span>
        </div>
        <div className="h-[68px] shrink-0 w-20 overflow-hidden bg-gradient-to-br from-[#4a4a4a] to-[#3a3a3a]">
          <img
            src={ad.imageUrl}
            alt={ad.headline}
            className="size-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[3px]">
          <div className="font-['Source_Sans_3',sans-serif] font-bold text-[#6b9bd1] text-[10px] tracking-[0.7px] uppercase">
            Advertisement
          </div>
          <div className="h-[37.78px] overflow-clip">
            <div className="font-['Source_Sans_3',sans-serif] font-semibold leading-[18.9px] text-white text-[14px]">
              {ad.headline}
            </div>
          </div>
          <div className="font-['Source_Sans_3',sans-serif] text-[#bbb] text-[10px] pt-[2px]">
            {ad.callToAction}
          </div>
        </div>
      </div>
    </a>
  );
}
