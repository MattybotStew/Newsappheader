import { Header } from '../components/Header';
import { SportsContent } from '../components/SportsContent';
import { Footer } from '../components/Footer';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig } from '../config/adConfig';

export function SportsPage() {
  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto">
        <SportsContent />
      </main>
      <AnchoredBanner adUnit={adConfig.adUnits.anchoredBanner} />
      <Footer />
    </div>
  );
}