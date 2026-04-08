interface NativeAdArticleCardProps {
  adUnit: string;
}

export function NativeAdArticleCard({ adUnit }: NativeAdArticleCardProps) {
  return (
    <div className="bg-[#1a1a1a] border-b border-[#333] flex flex-col items-center justify-center gap-1 px-4" style={{ height: '80px' }}>
      <span className="font-['Source_Sans_3',sans-serif] text-[10px] font-bold tracking-[0.8px] uppercase text-white/30">
        Advertisement · {adUnit}
      </span>
      <span className="font-['Source_Sans_3',sans-serif] text-[13px] font-semibold text-white/60 text-center">
        This ad should be able to be different for News stories / Sports stories
      </span>
    </div>
  );
}
