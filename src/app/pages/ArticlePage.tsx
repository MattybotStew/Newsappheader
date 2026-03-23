import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Share2, Facebook, Mail } from 'lucide-react';
import { BannerAd } from '../components/ads/BannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig, adSizes } from '../config/adConfig';

export function ArticlePage() {
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
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full"
            >
              <ChevronLeft className="size-5 text-[#1a56a4]" />
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a56a4]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Back to News
              </span>
            </button>
          </div>

          {/* Article Header */}
          <div className="px-4 pt-4 pb-3">
            <div className="bg-[#1a56a4] px-2 py-[2px] rounded-full inline-block mb-3">
              <div className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[9px] text-white tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                Local News
              </div>
            </div>
            
            <h1 className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] text-[22px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
              Interstate 85 northbound wreck causing late-morning delays by SR 211
            </h1>

            <div className="flex items-center gap-2 text-[12px] text-[#41484d] mb-4">
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
                AccessNorthGA Staff
              </span>
              <span className="opacity-50">·</span>
              <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                March 3, 2026 11:15 AM
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
              src="https://images.unsplash.com/photo-1703101091834-3d81b2960248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwdHJhZmZpYyUyMGFjY2lkZW50JTIwZW1lcmdlbmN5fGVufDF8fHx8MTc3MjU1OTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Interstate 85 traffic"
              className="w-full h-[240px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="px-4 py-6 pb-24">
            <div className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#1a1c1e] leading-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-4">
                <strong>HALL COUNTY, Ga.</strong> — A multi-vehicle wreck on Interstate 85 northbound is causing significant delays near the SR 211 exit Tuesday morning.
              </p>

              <p className="mb-4">
                According to the Georgia Department of Transportation, the incident was reported just before 11:00 a.m. at mile marker 126. Initial reports indicate that at least three vehicles are involved in the collision.
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
                The right two lanes are currently blocked as emergency crews work to clear the scene. Traffic is being diverted to the left lane, causing delays of approximately 15-20 minutes for northbound travelers.
              </p>

              <p className="mb-4">
                Hall County Fire Services and the Georgia State Patrol are on scene. There are no immediate reports of serious injuries, but at least one person has been transported to Northeast Georgia Medical Center as a precaution.
              </p>

              <p className="mb-4">
                Motorists are advised to use alternate routes if possible or expect delays in the area. The SR 211 exit and Friendship Road interchange may be used as detour options for local traffic.
              </p>

              <p className="mb-4">
                The Georgia DOT estimates the roadway will be fully cleared by 12:30 p.m., though this timeline may change depending on the investigation and cleanup efforts.
              </p>

              <p className="mb-4">
                This is a developing story. AccessNorthGA will provide updates as more information becomes available.
              </p>

              <div className="mt-6 p-4 bg-[#f0f4f8] rounded-lg border-l-4 border-[#1a56a4]">
                <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Traffic Alert
                </p>
                <p className="text-[14px] text-[#41484d]">
                  For real-time traffic updates, check the Georgia 511 app or visit <a href="https://511ga.org" className="text-[#1a56a4] underline">511ga.org</a>. You can also listen to News Talk 550 WDUN for live traffic reports.
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
                  <div className="w-20 h-[68px] bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2] rounded-xl shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-['Roboto:Bold',sans-serif] font-bold text-[#1a56a4] text-[10px] tracking-[0.7px] uppercase mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Local
                    </div>
                    <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] text-[#1a1c1e] text-[14px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Georgia DOT announces I-985 maintenance schedule for next week
                    </div>
                    <div className="font-['Roboto:Regular',sans-serif] text-[#41484d] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      AccessNorthGA Staff · Yesterday
                    </div>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full text-left hover:bg-white p-3 rounded-lg transition-colors"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-[68px] bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2] rounded-xl shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-['Roboto:Bold',sans-serif] font-bold text-[#1a56a4] text-[10px] tracking-[0.7px] uppercase mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Local
                    </div>
                    <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] text-[#1a1c1e] text-[14px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Hall County Sheriff's Office increases patrols on I-85 corridor
                    </div>
                    <div className="font-['Roboto:Regular',sans-serif] text-[#41484d] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Steve Winslow · 2 days ago
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