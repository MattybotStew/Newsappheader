import { GoogleAdSlot } from './GoogleAdSlot';
import { adSizes } from '../../config/adConfig';

interface NativeAdPodcastCardProps {
  adUnit: string;
}

export function NativeAdPodcastCard({ adUnit }: NativeAdPodcastCardProps) {
  return (
    <GoogleAdSlot
      adUnit={adUnit}
      sizes={adSizes.infeed}
      minHeight={80}
      label="Sponsored"
    />
  );
}
