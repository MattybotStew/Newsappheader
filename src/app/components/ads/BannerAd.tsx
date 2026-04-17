import { GoogleAdSlot } from './GoogleAdSlot';
import { adSizes } from '../../config/adConfig';

interface BannerAdProps {
  adUnit: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  size?: any; // legacy prop, ignored
  label?: string;
  className?: string;
}

export function BannerAd({ adUnit, label = 'Advertisement', className = '' }: BannerAdProps) {
  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <GoogleAdSlot
        adUnit={adUnit}
        sizes={adSizes.mediumRectangle}
        minHeight={250}
        label={label}
      />
    </div>
  );
}
