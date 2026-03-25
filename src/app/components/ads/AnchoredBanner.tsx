import ngrBanner from '../../../assets/bannernew.png';

interface AnchoredBannerProps {
  adUnit: string;
}

export function AnchoredBanner({ adUnit: _ }: AnchoredBannerProps) {
  return (
    <div className="fixed left-0 right-0 z-30 bg-[#021843] rounded-t-[6px]" style={{ bottom: 'calc(62px + env(safe-area-inset-bottom, 0px))' }}>
      <div className="flex flex-col items-center px-[4px] pt-[4px]">
        <a href="#" className="w-full hover:opacity-90 transition-opacity">
          <img
            src={ngrBanner}
            alt="Advertisement"
            className="rounded-[3px] w-full object-cover"
            style={{ height: '47.22px', maxHeight: '90px' }}
          />
        </a>
      </div>
    </div>
  );
}