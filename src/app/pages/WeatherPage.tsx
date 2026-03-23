import { Header } from '../components/Header';
import { WeatherContent } from '../components/WeatherContent';
import { Footer } from '../components/Footer';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { adConfig } from '../config/adConfig';

export function WeatherPage() {
  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto">
        <WeatherContent />
      </main>
      <AnchoredBanner adUnit={adConfig.adUnits.anchoredBanner} />
      <Footer />
    </div>
  );
}