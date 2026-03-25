import ngrBanner from '../../../assets/bannernew.png';

interface AnchoredBannerProps {
  adUnit: string;
}

export function AnchoredBanner({ adUnit: _ }: AnchoredBannerProps) {
  return (
    <div className="fixed bottom-[80px] left-0 right-0 z-30">
      <div className="flex flex-col items-start pt-[4px] px-[4px]">
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