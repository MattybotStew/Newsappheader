import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Share2, Facebook, Mail } from 'lucide-react';
import { BannerAd } from '../components/ads/BannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { NativeAdArticleCard } from '../components/ads/NativeAdArticleCard';
import { adConfig, adSizes } from '../config/adConfig';

export function SportsArticlePage() {
  const navigate = useNavigate();

  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
        <div className="bg-white">
          {/* Back Button */}
          <div className="border-b border-[#c1c7ce]">
            <button 
              onClick={() => navigate('/sports')}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full"
            >
              <ChevronLeft className="size-5 text-[#1976d2]" />
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Back to Sports
              </span>
            </button>
          </div>

          {/* Article Header */}
          <div className="px-4 pt-4 pb-3">
            <span className="font-['Source_Sans_3',sans-serif] font-bold text-[10px] text-[#1a3178] tracking-[0.6px] uppercase block mb-3">
              High School
            </span>
            
            <h1 className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] text-[22px] text-[#1a3178] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
              North Hall wins region championship with dominant 42-14 victory over rivals
            </h1>

            <div className="flex items-center gap-2 text-[12px] text-[#41484d] mb-4">
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
                AccessNorthGA Sports
              </span>
              <span className="opacity-50">·</span>
              <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                March 2, 2026 10:45 PM
              </span>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 pb-4 border-b border-[#c1c7ce]">
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px] text-[#41484d] mr-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                Share:
              </span>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <Facebook className="size-4 text-[#1877f2]" fill="#1877f2" />
              </button>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="#1DA1F2">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <Mail className="size-4 text-[#41484d]" />
              </button>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <Share2 className="size-4 text-[#41484d]" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1620397629667-6e4ed81766a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjBnYW1lJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzI1NjA0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="High school football game"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="px-4 py-6">
            <div className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#1a1c1e] leading-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-4">
                <strong>GAINESVILLE, Ga.</strong> — North Hall High School secured the Region 7-3A championship Friday night with a commanding 42-14 victory over rival Dawson County in front of a packed home crowd.
              </p>

              <p className="mb-4">
                Senior quarterback Jake Mitchell threw for 285 yards and four touchdowns, while the Trojans defense forced three turnovers to seal the win. The victory caps an undefeated region record for North Hall (9-1, 6-0) and positions them for a strong playoff seeding.
              </p>

              {/* Medium Rectangle Ad after 2nd paragraph */}
              <div className="my-6 flex justify-center">
                <BannerAd 
                  adUnit={adConfig.adUnits.articleInline}
                  size={adSizes.mediumRectangle}
                  className="mx-4"
                />
              </div>

              <p className="mb-4">
                "This is what we've been working for all season," said North Hall head coach David Bishop. "Our kids showed up ready to play tonight. The offense was clicking on all cylinders, and the defense made plays when we needed them."
              </p>

              <p className="mb-4">
                Mitchell connected with senior wide receiver Marcus Thompson for touchdown passes of 42 and 28 yards in the first half, giving the Trojans a 21-7 lead at halftime. Thompson finished with 127 receiving yards on six catches.
              </p>

              <p className="mb-4">
                The Trojans defense set the tone early when junior linebacker Tyler Jackson recovered a fumble on Dawson County's opening drive. North Hall capitalized with a 12-yard touchdown run by running back Cameron Davis on the ensuing possession.
              </p>

              <p className="mb-4">
                Davis added two more rushing touchdowns in the second half, finishing with 142 yards on 23 carries. His 35-yard scoring run in the fourth quarter effectively sealed the championship.
              </p>

              <p className="mb-4">
                "Our offensive line was dominant tonight," Mitchell said. "They gave me time to throw and opened up huge holes for Cameron. This win is all about them."
              </p>

              <p className="mb-4">
                Dawson County (7-3, 4-2) managed to score on a 15-yard touchdown pass early in the third quarter, but North Hall's defense tightened, allowing just 237 total yards.
              </p>

              <p className="mb-4">
                The Trojans will host a first-round playoff game next Friday night. Their opponent will be determined when final playoff brackets are released Sunday afternoon.
              </p>

              <div className="mt-6 rounded-xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
                <div className="flex items-center gap-2 bg-[#1a3178] px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  <span className="text-white font-bold text-[13px] uppercase tracking-wide">Game Stats</span>
                </div>
                <div className="px-4 py-3 space-y-2 text-[14px]">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#1a1c1e]">North Hall</span>
                    <span className="font-bold text-[#1a1c1e]">42</span>
                  </div>
                  <div className="flex justify-between text-[#41484d]">
                    <span className="font-semibold">Dawson County</span>
                    <span className="font-bold">14</span>
                  </div>
                  <div className="border-t border-[#e2e8f0] mt-3 pt-3">
                    <p className="text-[12px] text-[#41484d] mb-1">Jake Mitchell: 18/25, 285 yards, 4 TD</p>
                    <p className="text-[12px] text-[#41484d] mb-1">Cameron Davis: 23 carries, 142 yards, 3 TD</p>
                    <p className="text-[12px] text-[#41484d]">Marcus Thompson: 6 rec, 127 yards, 2 TD</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
                <div className="flex items-center gap-2 bg-[#1a3178] px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span className="text-white font-bold text-[13px] uppercase tracking-wide">Up Next</span>
                </div>
                <p className="px-4 py-3 text-[14px] text-[#41484d] leading-relaxed">
                  North Hall will host their first-round playoff game next Friday, March 10 at 7:30 PM. Stay tuned to AccessNorthGA for playoff matchup announcements and coverage.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-[200px]" />
        </div>
      </main>

      {/* Anchored Banner Ad */}
      <AnchoredBanner adUnit={adConfig.adUnits.articleBottom} />
      
      <Footer />
    </div>
  );
}