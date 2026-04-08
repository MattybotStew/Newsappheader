interface TopBannerAdProps {
  adUnit: string;
}

export function TopBannerAd({ adUnit: _ }: TopBannerAdProps) {
  return (
    <a href="#" className="w-full shrink-0 block hover:opacity-90 transition-opacity">
      <div className="w-full bg-[#1a1a1a] flex flex-col items-center justify-center gap-1" style={{ height: '46px' }}>
        <span className="font-['Source_Sans_3',sans-serif] text-[11px] font-bold tracking-[0.8px] uppercase text-white/30">
          Advertisement
        </span>
        <span className="font-['Source_Sans_3',sans-serif] text-[15px] font-semibold text-white/60">
          This ad is global
        </span>
      </div>
    </a>
  );
}
