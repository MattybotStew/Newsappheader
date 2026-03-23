import { useParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Radio as RadioIcon, Square, Play, Share2 } from 'lucide-react';
import { useState } from 'react';
import { BannerAd } from '../components/ads/BannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig, adSizes } from '../config/adConfig';
import placeholderImage from 'figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png';

const stationData = {
  'wdun-am': {
    name: 'WDUN AM 550',
    frequency: 'AM 550',
    tagline: 'News Talk 550',
    genre: 'News & Talk',
    description: 'North Georgia\'s trusted source for news, weather, and talk radio since 1947.',
  },
  'wdun-fm': {
    name: 'WDUN FM 102.9',
    frequency: 'FM 102.9',
    tagline: 'North Georgia\'s News Station',
    genre: 'News & Information',
    description: 'Your source for local news, sports, and community updates across North Georgia.',
  },
  'the-lake': {
    name: '94.5 The Lake',
    frequency: 'FM 94.5',
    tagline: 'Classic Hits',
    genre: 'Classic Rock',
    description: 'Playing the greatest hits from the 70s, 80s, and 90s - music you know and love.',
  },
};

export function RadioStationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const station = id ? stationData[id as keyof typeof stationData] : null;

  if (!station) {
    return (
      <div className="size-full flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Station not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
        <div className="bg-white">
          {/* Back Button */}
          <div className="border-b border-[#c1c7ce]">
            <button 
              onClick={() => navigate('/radio')}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full"
            >
              <ChevronLeft className="size-5 text-[#1976d2]" />
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Back to Radio
              </span>
            </button>
          </div>

          {/* Station Header */}
          <div className="text-center py-6 px-4">
            <h1 className="font-['Roboto:Bold',sans-serif] font-bold text-[28px] text-[#1a1c1e] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              {station.name}
            </h1>
            <p className="font-['Roboto:Medium',sans-serif] font-medium text-[16px] text-[#1976d2] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
              {station.tagline}
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 bg-[#1976d2] text-white px-3 py-1 rounded-full">
                <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  LIVE
                </span>
              </span>
            </div>
          </div>

          {/* Album Art / Now Playing */}
          <div className="px-4 py-6">
            <div className="max-w-sm mx-auto">
              <div className="aspect-square w-1/2 mx-auto rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] mb-4">
                <img
                  src={placeholderImage}
                  alt="Now Playing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <button className="size-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                  <Square className="size-6 text-[#41484d]" fill="#41484d" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-16 flex items-center justify-center rounded-full bg-[#1976d2] hover:bg-[#1565c0] transition-colors shadow-lg"
                >
                  {isPlaying ? (
                    <svg className="size-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" rx="1"/>
                      <rect x="14" y="4" width="4" height="16" rx="1"/>
                    </svg>
                  ) : (
                    <Play className="size-8 text-white ml-1" fill="white" />
                  )}
                </button>
                <button className="size-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="size-6 text-[#41484d]" />
                </button>
              </div>

              <p className="text-center font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7178] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Now Playing
              </p>
            </div>
          </div>

          {/* Station Info */}
          <div className="px-4 py-6 bg-white border-t border-[#c1c7ce]">
            <div className="max-w-sm mx-auto">
              <div className="bg-[#f0f4f8] rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <RadioIcon className="size-6 text-[#1976d2] mt-1" />
                  <div>
                    <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {station.frequency}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#41484d]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {station.genre}
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#41484d] leading-[24px] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                {station.description}
              </p>
            </div>
          </div>

          {/* Other Stations */}
          <div className="px-4 py-6 pb-24 bg-[#f8f9fa] border-t border-[#c1c7ce]">
            <h2 className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#1a1c1e] mb-4 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              Other Stations
            </h2>
            
            <div className="space-y-3 max-w-sm mx-auto">
              {Object.entries(stationData)
                .filter(([key]) => key !== id)
                .map(([key, s]) => (
                  <button
                    key={key}
                    onClick={() => navigate(`/radio/${key}`)}
                    className="w-full bg-white rounded-lg p-4 border border-[#c1c7ce] hover:shadow-md transition-shadow text-left"
                  >
                    <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[15px] text-[#1a1c1e] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {s.name}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7178]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {s.frequency} • {s.genre}
                    </p>
                  </button>
                ))}
            </div>
          </div>

          {/* Ad Banner */}
          <div className="px-4 py-6 bg-[#f8f9fa] border-t border-[#c1c7ce]">
            <BannerAd 
              adUnit={adConfig.adUnits.radioStationInline}
              size={adSizes.mediumRectangle}
            />
          </div>
        </div>
      </main>
      
      {/* Anchored Banner Ad */}
      <AnchoredBanner adUnit={adConfig.adUnits.articleBottom} />
      
      <Footer />
    </div>
  );
}