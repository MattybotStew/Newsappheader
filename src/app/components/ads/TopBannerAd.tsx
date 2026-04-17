import { GoogleAdSlot } from './GoogleAdSlot';
import { adSizes } from '../../config/adConfig';

interface TopBannerAdProps {
  adUnit: string;
}

export function TopBannerAd({ adUnit }: TopBannerAdProps) {
  return (
    <GoogleAdSlot
      adUnit={adUnit}
      sizes={adSizes.leaderboard}
      minHeight={50}
      label="Advertisement"
    />
  );
}
