import ngrBanner from '../../../assets/bannernew.png';

interface TopBannerAdProps {
  adUnit: string;
}

export function TopBannerAd({ adUnit: _ }: TopBannerAdProps) {
  return (
    <a href="#" className="w-full hover:opacity-90 transition-opacity shrink-0">
      <img
        src={ngrBanner}
        alt="Advertisement"
        className="w-full object-cover"
        style={{ maxHeight: '90px' }}
      />
    </a>
  );
}
