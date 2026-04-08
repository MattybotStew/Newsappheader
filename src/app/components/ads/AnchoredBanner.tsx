interface AnchoredBannerProps {
  adUnit: string;
}

export function AnchoredBanner({ adUnit }: AnchoredBannerProps) {
  return (
    <div className="fixed left-0 right-0 z-30 bg-[#021843] rounded-t-[6px]" style={{ bottom: 'calc(62px + env(safe-area-inset-bottom, 0px))' }}>
      <div className="bg-[#1a1a1a] rounded-t-[6px] flex flex-col items-center justify-center gap-1 px-4" style={{ height: '46px' }}>
        <span className="font-['Source_Sans_3',sans-serif] text-[10px] font-bold tracking-[0.8px] uppercase text-white/30">
          Advertisement · {adUnit}
        </span>
        <span className="font-['Source_Sans_3',sans-serif] text-[11px] font-semibold text-white/60 text-center leading-tight">
          This ad needs to be able to be different for News / Sports / Obits / Weather / Podcast
        </span>
      </div>
    </div>
  );
}
