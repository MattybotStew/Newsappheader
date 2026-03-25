import newAd from '../../../assets/newADxd.png';

interface BannerAdProps {
  adUnit: string;
  size: { width: number; height: number };
  label?: string;
  className?: string;
}

export function BannerAd({ size, label, className = '' }: BannerAdProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <div className="text-center mb-2">
          <span className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#6b7178] uppercase tracking-wider">
            {label}
          </span>
        </div>
      )}
      <a href="#" className="hover:opacity-90 transition-opacity">
        <img
          src={newAd}
          alt="Advertisement"
          style={{ width: `${size.width}px`, height: `${size.height}px` }}
          className="object-cover"
        />
      </a>
    </div>
  );
}