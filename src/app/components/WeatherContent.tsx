import { CloudOff } from 'lucide-react';
import { BannerAd } from './ads/BannerAd';
import { adConfig, adSizes } from '../config/adConfig';

export function WeatherContent() {
  return (
    <div className="bg-white w-full pb-[200px]">
      <div className="px-4 pt-10 flex flex-col items-center text-center">
        <CloudOff className="size-16 text-[#6b7178] mb-4" />
        <h2 className="font-['Roboto:Bold',sans-serif] font-bold text-[22px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
          Weather Plugin Required
        </h2>
        <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#41484d] leading-[24px] mb-5 max-w-sm" style={{ fontVariationSettings: "'wdth' 100" }}>
          Weather information is currently unavailable. We're working on integrating a weather service to bring you accurate local forecasts.
        </p>
        <div className="w-full max-w-sm bg-[#f0f4f8] rounded-lg p-4 border-l-4 border-[#1976d2] text-left mb-6">
          <p className="font-['Roboto:Medium',sans-serif] font-medium text-[13px] text-[#41484d]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Plugin selection in progress
          </p>
        </div>
        <BannerAd
          adUnit={adConfig.adUnits.weatherInline}
          size={adSizes.mediumRectangle}
        />
      </div>
    </div>
  );
}