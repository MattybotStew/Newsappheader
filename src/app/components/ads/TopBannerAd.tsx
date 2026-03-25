import ngrBanner from '../../../assets/bannernew.png';

interface TopBannerAdProps {
  adUnit: string;
}

export function TopBannerAd({ adUnit: _ }: TopBannerAdProps) {
  return (
    <div className="bg-[#021843] w-full shrink-0">
      <div className="flex flex-col items-start pt-[4px] px-[4px] pb-[4px]">
        <a href="#" className="w-full hover:opacity-90 transition-opacity">
          <img
            src={ngrBanner}
            alt="Advertisement"
            className="rounded-[3px] w-full object-cover"
            style={{ maxHeight: '90px' }}
          />
        </a>
      </div>
    </div>
  );
}
