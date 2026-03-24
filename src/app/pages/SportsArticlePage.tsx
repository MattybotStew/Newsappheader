import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Share2, Facebook, Mail } from 'lucide-react';
import { BannerAd } from '../components/ads/BannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig, adSizes } from '../config/adConfig';

export function SportsArticlePage() {
  const navigate = useNavigate();

  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
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
            <div className="font-['Source_Sans_3',sans-serif] font-extrabold text-[9px] text-[#22c55e] tracking-[0.6px] uppercase bg-[#22c55e] bg-opacity-10 px-2 py-0.5 rounded inline-block mb-2">
              High School
            </div>
            
            <h1 className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] text-[22px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <div className="px-4 py-6 pb-24">
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

              <div className="mt-6 p-4 bg-[#f0f4f8] rounded-lg border-l-4 border-[#1976d2]">
                <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Game Stats
                </p>
                <div className="space-y-2 text-[14px]">
                  <div className="flex justify-between">
                    <span className="font-['Roboto:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>North Hall</span>
                    <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>42</span>
                  </div>
                  <div className="flex justify-between text-[#41484d]">
                    <span className="font-['Roboto:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>Dawson County</span>
                    <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>14</span>
                  </div>
                  <div className="border-t border-[#c1c7ce] mt-3 pt-3">
                    <p className="text-[12px] text-[#41484d] mb-1">Jake Mitchell: 18/25, 285 yards, 4 TD</p>
                    <p className="text-[12px] text-[#41484d] mb-1">Cameron Davis: 23 carries, 142 yards, 3 TD</p>
                    <p className="text-[12px] text-[#41484d]">Marcus Thompson: 6 rec, 127 yards, 2 TD</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#fff8e1] rounded-lg border-l-4 border-[#ffa000]">
                <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Up Next
                </p>
                <p className="text-[14px] text-[#41484d]">
                  North Hall will host their first-round playoff game next Friday, March 10 at 7:30 PM. Stay tuned to AccessNorthGA for playoff matchup announcements and coverage.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="border-t border-[#c1c7ce] px-4 py-6 bg-[#f8f9fa]">
            <h2 className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#1a1c1e] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
              Related Stories
            </h2>
            
            <div className="space-y-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full text-left hover:bg-white p-3 rounded-lg transition-colors"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-[68px] bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2] shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-['Roboto:Bold',sans-serif] font-bold text-[#1976d2] text-[10px] tracking-[0.7px] uppercase mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      High School
                    </div>
                    <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] text-[#333399] text-[14px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Flowery Branch advances to semifinals with upset victory
                    </div>
                    <div className="font-['Roboto:Regular',sans-serif] text-[#41484d] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      AccessNorthGA Sports · Yesterday
                    </div>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full text-left hover:bg-white p-3 rounded-lg transition-colors"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-[68px] bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2] shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-['Roboto:Bold',sans-serif] font-bold text-[#1976d2] text-[10px] tracking-[0.7px] uppercase mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Friday Game Night
                    </div>
                    <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] text-[#333399] text-[14px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Week 11 high school football scores from Northeast Georgia
                    </div>
                    <div className="font-['Roboto:Regular',sans-serif] text-[#41484d] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      AccessNorthGA Sports · 2 days ago
                    </div>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full text-left hover:bg-white p-3 rounded-lg transition-colors"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-[68px] bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2] shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-['Roboto:Bold',sans-serif] font-bold text-[#1976d2] text-[10px] tracking-[0.7px] uppercase mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      High School
                    </div>
                    <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] text-[#333399] text-[14px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Gainesville High prepares for tough playoff matchup Friday
                    </div>
                    <div className="font-['Roboto:Regular',sans-serif] text-[#41484d] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      AccessNorthGA Sports · 3 days ago
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Anchored Banner Ad */}
      <AnchoredBanner adUnit={adConfig.adUnits.articleBottom} />
      
      <Footer />
    </div>
  );
}