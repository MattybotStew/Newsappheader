import { Header } from '../components/Header';
import { PodcastsContent } from '../components/PodcastsContent';
import { Footer } from '../components/Footer';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig } from '../config/adConfig';

export function PodcastsPage() {
  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto">
        <PodcastsContent />
      </main>
      
      {/* Anchored Banner Ad */}
      <AnchoredBanner adUnit={adConfig.adUnits.articleBottom} />
      
      <Footer />
    </div>
  );
}