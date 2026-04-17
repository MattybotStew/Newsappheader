import { GoogleAdSlot } from './GoogleAdSlot';
import { adSizes } from '../../config/adConfig';

interface AnchoredBannerProps {
  adUnit: string;
}

export function AnchoredBanner({ adUnit }: AnchoredBannerProps) {
  return (
    <div
      className="fixed left-0 right-0 z-30"
      style={{ bottom: 'calc(62px + env(safe-area-inset-bottom, 0px))' }}
    >
      <GoogleAdSlot
        adUnit={adUnit}
        sizes={adSizes.anchoredBanner}
        minHeight={50}
        label="Advertisement"
      />
    </div>
  );
}
