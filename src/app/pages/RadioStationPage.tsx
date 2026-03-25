import { useParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Share2 } from 'lucide-react';
import { useState } from 'react';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig } from '../config/adConfig';
import wdunAmLogo from '../../assets/wdun-am-550.png';
import wdunFmLogo from '../../assets/wdun-fm-102.png';
import lakeLogo from '../../assets/the-lake-94.png';

const stationData = {
  'wdun-am': {
    name: 'WDUN AM 550',
    frequency: 'AM 550',
    tagline: 'News Talk 550',
    genre: 'News & Talk',
    description: 'North Georgia\'s trusted source for news, weather, and talk radio since 1947.',
    logoUrl: wdunAmLogo,
  },
  'wdun-fm': {
    name: 'WDUN FM 102.9',
    frequency: 'FM 102.9',
    tagline: 'North Georgia\'s News Station',
    genre: 'News & Information',
    description: 'Your source for local news, sports, and community updates across North Georgia.',
    logoUrl: wdunFmLogo,
  },
  'the-lake': {
    name: '94.5 The Lake',
    frequency: 'FM 94.5',
    tagline: 'Classic Hits',
    genre: 'Classic Rock',
    description: 'Playing the greatest hits from the 70s, 80s, and 90s - music you know and love.',
    logoUrl: lakeLogo,
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
      <main className="flex-1 overflow-y-auto flex flex-col">

        {/* Player area — fills screen, vertically centered */}
        <div className="flex-1 bg-gradient-to-b from-[#011843] to-[#1a3178] relative flex flex-col justify-center px-6 pt-12 pb-[200px]">
          {/* Back button — absolute so it doesn't affect centering */}
          <button
            onClick={() => navigate('/radio')}
            className="absolute top-4 left-6 flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="size-5" />
            <span className="font-['Source_Sans_3',sans-serif] text-[13px] font-semibold tracking-wide uppercase">Radio</span>
          </button>

          {/* Two-column layout: artwork left, player right */}
          <div className="flex items-center gap-6 w-full mb-8">
            {/* Artwork */}
            <div className="bg-white rounded-lg shadow-2xl flex items-center justify-center overflow-hidden shrink-0" style={{ width: 120, height: 120 }}>
              <img
                src={station.logoUrl}
                alt={station.name}
                className="w-4/5 h-4/5 object-contain"
              />
            </div>

            {/* Player right column */}
            <div className="flex-1 min-w-0">
              {/* Station info */}
              <div className="flex items-start justify-between mb-4">
                <div className="min-w-0">
                  <h1 className="font-['Source_Sans_3',sans-serif] font-bold text-[20px] text-white leading-tight mb-0.5 truncate">
                    {station.name}
                  </h1>
                  <p className="font-['Source_Sans_3',sans-serif] text-[13px] text-white/60 truncate">
                    {station.tagline} · {station.frequency}
                  </p>
                </div>
                <button className="ml-2 shrink-0 text-white/60 hover:text-white transition-colors">
                  <Share2 className="size-5" />
                </button>
              </div>

              {/* Live pulse bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`size-2 rounded-full shrink-0 ${isPlaying ? 'bg-[#009933] animate-pulse' : 'bg-white/30'}`} />
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  {isPlaying && (
                    <div className="h-full bg-[#009933] animate-pulse rounded-full" style={{ width: '100%' }} />
                  )}
                </div>
                <span className="font-['Source_Sans_3',sans-serif] text-[11px] font-bold tracking-widest text-white/60 uppercase shrink-0">
                  Live
                </span>
              </div>

              {/* Play/Pause control */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="size-10 flex items-center justify-center rounded-full bg-white hover:scale-105 active:scale-95 transition-transform shadow-lg"
              >
                {isPlaying ? (
                  <svg className="size-4 text-[#011843]" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" rx="1"/>
                    <rect x="14" y="4" width="4" height="16" rx="1"/>
                  </svg>
                ) : (
                  <svg className="size-4 text-[#011843] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Other stations */}
          <div className="w-full border-t border-white/10 pt-6">
            <p className="font-['Source_Sans_3',sans-serif] text-[11px] font-bold tracking-[0.8px] uppercase text-white/40 mb-3">
              Other Stations
            </p>
            <div className="space-y-2">
              {Object.entries(stationData)
                .filter(([key]) => key !== id)
                .map(([key, s]) => (
                  <button
                    key={key}
                    onClick={() => navigate(`/radio/${key}`)}
                    className="w-full flex items-center gap-3 py-2 hover:opacity-80 transition-opacity text-left"
                  >
                    <div className="size-10 shrink-0 bg-white rounded flex items-center justify-center overflow-hidden">
                      <img src={s.logoUrl} alt={s.name} className="w-4/5 h-4/5 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-['Source_Sans_3',sans-serif] font-semibold text-[14px] text-white truncate">{s.name}</p>
                      <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-white/50">{s.frequency} · {s.genre}</p>
                    </div>
                    <ChevronLeft className="size-4 text-white/30 shrink-0 rotate-180" />
                  </button>
                ))}
            </div>
          </div>
        </div>

      </main>

      <AnchoredBanner adUnit={adConfig.adUnits.articleBottom} />
      <Footer />
    </div>
  );
}
