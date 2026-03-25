import { Header } from '../components/Header';
import { HomeContent } from '../components/HomeContent';
import { Footer } from '../components/Footer';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig } from '../config/adConfig';

export function HomePage() {
  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto pb-[80px]">
        <HomeContent />
      </main>
      <AnchoredBanner adUnit={adConfig.adUnits.anchoredBanner} />
      <Footer />
    </div>
  );
}