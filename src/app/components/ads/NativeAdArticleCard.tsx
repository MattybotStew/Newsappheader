import { GoogleAdSlot } from './GoogleAdSlot';
import { adSizes } from '../../config/adConfig';

interface NativeAdArticleCardProps {
  adUnit: string;
}

export function NativeAdArticleCard({ adUnit }: NativeAdArticleCardProps) {
  return (
    <GoogleAdSlot
      adUnit={adUnit}
      sizes={adSizes.infeed}
      minHeight={80}
      label="Sponsored"
    />
  );
}
