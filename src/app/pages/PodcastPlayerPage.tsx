import { useParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Square, Play, Share2, SkipBack, SkipForward } from 'lucide-react';
import { useState } from 'react';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { adConfig } from '../config/adConfig';
import placeholderImage from 'figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png';

interface PodcastEpisode {
  id: number;
  show: string;
  showName: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  imageUrl: string;
}

const allEpisodes: PodcastEpisode[] = [
  {
    id: 1,
    show: 'martha-zoller',
    showName: 'The Martha Zoller Show',
    title: 'Martha Zoller Show: Georgia Politics & Local Issues',
    description: 'Martha discusses the latest state legislature developments and their impact on North Georgia communities.',
    date: 'March 3, 2025',
    duration: '45 min',
    imageUrl: 'https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5jaG9yJTIwYnJvYWRjYXN0aW5nfGVufDF8fHx8MTc3NDM3NDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    show: 'drive-5',
    showName: 'The Drive at 5',
    title: 'The Drive at 5: Monday Sports Roundup',
    description: 'Recapping the weekend in sports with analysis of local high school and college games.',
    date: 'March 2, 2025',
    duration: '60 min',
    imageUrl: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHJlY29yZGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NzQzNzQ3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    show: 'thursday-qb',
    showName: 'Thursday Night QB',
    title: 'Thursday Night QB: High School Football Preview',
    description: 'Breaking down this week\'s biggest high school matchups and playoff implications.',
    date: 'February 27, 2025',
    duration: '50 min',
    imageUrl: 'https://images.unsplash.com/photo-1763479197379-93d1dcd229d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDMwMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    show: 'martha-zoller',
    showName: 'The Martha Zoller Show',
    title: 'Martha Zoller Show: Education & Community',
    description: 'Special interview with local school board members about upcoming initiatives.',
    date: 'March 1, 2025',
    duration: '40 min',
    imageUrl: 'https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5jaG9yJTIwYnJvYWRjYXN0aW5nfGVufDF8fHx8MTc3NDM3NDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    show: 'drive-5',
    showName: 'The Drive at 5',
    title: 'The Drive at 5: UGA Basketball & Recruiting News',
    description: 'Latest updates on Georgia basketball season and recruiting commitments.',
    date: 'February 28, 2025',
    duration: '55 min',
    imageUrl: 'https://images.unsplash.com/photo-1762025930827-9f1dda45aff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbiUyMHNob3R8ZW58MXx8fHwxNzc0Mzc0Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    show: 'thursday-qb',
    showName: 'Thursday Night QB',
    title: 'Thursday Night QB: Playoff Predictions',
    description: 'Expert analysis and predictions for the upcoming regional playoffs.',
    date: 'February 26, 2025',
    duration: '48 min',
    imageUrl: 'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwY3Jvd2R8ZW58MXx8fHwxNzc0Mzc0Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function PodcastPlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const episode = allEpisodes.find(ep => ep.id === Number(id));

  if (!episode) {
    return (
      <div className="size-full flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Episode not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  const otherEpisodes = allEpisodes.filter(ep => ep.id !== episode.id).slice(0, 3);

  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
        <div className="bg-white">
          {/* Back Button */}
          <div className="border-b border-[#c1c7ce]">
            <button 
              onClick={() => navigate('/podcasts')}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full"
            >
              <ChevronLeft className="size-5 text-[#1976d2]" />
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Back to Podcasts
              </span>
            </button>
          </div>

          {/* Episode Header */}
          <div className="text-center py-6 px-4">
            <p className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#6b7178] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              {episode.showName}
            </p>
            <h1 className="font-['Roboto:Bold',sans-serif] font-bold text-[22px] text-[#1a3178] mb-3 leading-tight" style={{ fontVariationSettings: "'wdth' 100" }}>
              {episode.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#6b7178]">
              <span className="font-['Roboto:Regular',sans-serif] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {episode.date}
              </span>
              <span>•</span>
              <span className="font-['Roboto:Regular',sans-serif] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {episode.duration}
              </span>
            </div>
          </div>

          {/* Album Art / Episode Artwork */}
          <div className="px-4 py-6">
            <div className="max-w-sm mx-auto">
              <div className="aspect-square w-1/2 mx-auto overflow-hidden shadow-lg bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] mb-6">
                <img
                  src={episode.imageUrl}
                  alt={episode.title}
                  className="size-full object-cover"
                />
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="h-1 bg-[#e8eaed] rounded-full overflow-hidden">
                  <div className="h-full bg-[#1976d2] w-[35%]"></div>
                </div>
              </div>
              <div className="flex justify-between text-[11px] text-[#6b7178] mb-4">
                <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>15:45</span>
                <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>45:00</span>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button className="size-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                  <Square className="size-6 text-[#41484d]" fill="#41484d" />
                </button>
                <button className="size-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                  <SkipBack className="size-6 text-[#41484d]" fill="#41484d" />
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
                  <SkipForward className="size-6 text-[#41484d]" fill="#41484d" />
                </button>
                <button className="size-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="size-6 text-[#41484d]" />
                </button>
              </div>
            </div>
          </div>

          {/* Episode Description */}
          <div className="px-4 py-6 bg-white border-t border-[#c1c7ce]">
            <div className="max-w-sm mx-auto">
              <h2 className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                About this episode
              </h2>
              <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#41484d] leading-[24px] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                {episode.description}
              </p>
              <div className="bg-[#f0f4f8] rounded-lg p-4">
                <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Show: {episode.showName}
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#41484d]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Published: {episode.date}
                </p>
              </div>
            </div>
          </div>

          {/* More Episodes */}
          <div className="px-4 py-6 pb-[200px] bg-[#f8f9fa] border-t border-[#c1c7ce]">
            <h2 className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#1a1c1e] mb-4 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              More Episodes
            </h2>
            
            <div className="space-y-3 max-w-sm mx-auto">
              {otherEpisodes.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => navigate(`/podcasts/player/${ep.id}`)}
                  className="w-full bg-white rounded-lg border border-[#c1c7ce] hover:shadow-md transition-shadow text-left overflow-hidden"
                >
                  <div className="flex gap-3 p-3">
                    <div className="size-16 shrink-0 overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0]">
                      <img
                        src={ep.imageUrl}
                        alt={ep.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-1 line-clamp-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {ep.title}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#6b7178]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {ep.date} • {ep.duration}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
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