import { CloudOff } from 'lucide-react';
import { BannerAd } from './ads/BannerAd';
import { adConfig, adSizes } from '../config/adConfig';

export function WeatherContent() {
  return (
    <div className="bg-[#f8f9fa] w-full h-full flex items-center justify-center pb-24">
      <div className="text-center px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <CloudOff className="size-16 text-[#6b7178]" />
          </div>
          <h2 className="font-['Roboto:Bold',sans-serif] font-bold text-[22px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
            Weather Plugin Required
          </h2>
          <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#41484d] leading-[24px] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
            Weather information is currently unavailable. We're working on integrating a weather service to bring you accurate local forecasts.
          </p>
          <div className="bg-[#f0f4f8] rounded-lg p-4 border-l-4 border-[#1976d2]">
            <p className="font-['Roboto:Medium',sans-serif] font-medium text-[13px] text-[#41484d]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Plugin selection in progress
            </p>
          </div>

          {/* Medium Rectangle Ad below message */}
          <div className="mt-6">
            <BannerAd 
              adUnit={adConfig.adUnits.weatherInline}
              size={adSizes.mediumRectangle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}