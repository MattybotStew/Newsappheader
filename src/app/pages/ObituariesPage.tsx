import { Header } from '../components/Header';
import { ObituariesContent } from '../components/ObituariesContent';
import { Footer } from '../components/Footer';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { adConfig } from '../config/adConfig';

export function ObituariesPage() {
  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto">
        <ObituariesContent />
      </main>
      <AnchoredBanner adUnit={adConfig.adUnits.anchoredBanner} />
      <Footer />
    </div>
  );
}