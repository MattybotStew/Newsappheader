import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NativeAdPodcastCard } from './ads/NativeAdPodcastCard';
import { adConfig } from '../config/adConfig';

const shows = [
  { id: 'all', name: 'All Shows' },
  { id: 'martha-zoller', name: 'The Martha Zoller Show' },
  { id: 'drive-5', name: 'The Drive at 5' },
  { id: 'thursday-qb', name: 'Thursday Night QB' },
];

interface PodcastEpisode {
  id: number;
  show: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  imageUrl: string;
}

const episodes: PodcastEpisode[] = [
  {
    id: 1,
    show: 'martha-zoller',
    title: 'Martha Zoller Show: Georgia Politics & Local Issues',
    description: 'Martha discusses the latest state legislature developments and their impact on North Georgia communities.',
    date: 'March 3, 2025',
    duration: '45 min',
    imageUrl: 'https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5jaG9yJTIwYnJvYWRjYXN0aW5nfGVufDF8fHx8MTc3NDM3NDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    show: 'drive-5',
    title: 'The Drive at 5: Monday Sports Roundup',
    description: 'Recapping the weekend in sports with analysis of local high school and college games.',
    date: 'March 2, 2025',
    duration: '60 min',
    imageUrl: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHJlY29yZGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NzQzNzQ3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    show: 'thursday-qb',
    title: 'Thursday Night QB: High School Football Preview',
    description: 'Breaking down this week\'s biggest high school matchups and playoff implications.',
    date: 'February 27, 2025',
    duration: '50 min',
    imageUrl: 'https://images.unsplash.com/photo-1763479197379-93d1dcd229d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDMwMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    show: 'martha-zoller',
    title: 'Martha Zoller Show: Education & Community',
    description: 'Special interview with local school board members about upcoming initiatives.',
    date: 'March 1, 2025',
    duration: '40 min',
    imageUrl: 'https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5jaG9yJTIwYnJvYWRjYXN0aW5nfGVufDF8fHx8MTc3NDM3NDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    show: 'drive-5',
    title: 'The Drive at 5: UGA Basketball & Recruiting News',
    description: 'Latest updates on Georgia basketball season and recruiting commitments.',
    date: 'February 28, 2025',
    duration: '55 min',
    imageUrl: 'https://images.unsplash.com/photo-1762025930827-9f1dda45aff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbiUyMHNob3R8ZW58MXx8fHwxNzc0Mzc0Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    show: 'thursday-qb',
    title: 'Thursday Night QB: Playoff Predictions',
    description: 'Expert analysis and predictions for the upcoming regional playoffs.',
    date: 'February 26, 2025',
    duration: '48 min',
    imageUrl: 'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwY3Jvd2R8ZW58MXx8fHwxNzc0Mzc0Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function PodcastsContent() {
  const [selectedShow, setSelectedShow] = useState('all');
  const navigate = useNavigate();

  const filteredEpisodes = selectedShow === 'all' 
    ? episodes 
    : episodes.filter(ep => ep.show === selectedShow);

  return (
    <div className="bg-[#f8f9fa] w-full pb-[200px]">
      {/* Header */}
      <div className="px-4 pt-5 pb-4 bg-white border-b border-[#c1c7ce]">
        <h1 className="font-['Roboto:Bold',sans-serif] font-bold text-[24px] text-[#1a1c1e] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
          Podcasts
        </h1>
        <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#41484d]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Listen to your favorite local shows on-demand
        </p>
      </div>

      {/* Filter Chips */}
      <div className="bg-white border-b border-[#c1c7ce] px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {shows.map((show) => (
            <button
              key={show.id}
              onClick={() => setSelectedShow(show.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedShow === show.id
                  ? 'bg-[#1976d2] text-white'
                  : 'bg-[#e8eaed] text-[#41484d] hover:bg-[#d8dadd]'
              }`}
            >
              <span className="font-['Roboto:Medium',sans-serif] font-medium text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {show.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Episode List with Native Ad */}
      <div className="px-4 py-4 space-y-3">
        {filteredEpisodes.map((episode, index) => (
          <div key={episode.id}>
            <button
              onClick={() => navigate(`/podcasts/player/${episode.id}`)}
              className="w-full bg-white rounded-lg shadow-sm border border-[#c1c7ce] overflow-hidden hover:shadow-md transition-shadow text-left"
            >
              <div className="flex gap-3 p-3">
                {/* Thumbnail */}
                <div className="size-24 shrink-0 overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0]">
                  <img
                    src={episode.imageUrl}
                    alt={episode.title}
                    className="size-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[15px] text-[#1a1c1e] mb-1 line-clamp-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {episode.title}
                  </h3>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7178] mb-2 line-clamp-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {episode.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#6b7178]">
                    <span className="font-['Roboto:Regular',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {episode.date}
                    </span>
                    <span>•</span>
                    <span className="font-['Roboto:Regular',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {episode.duration}
                    </span>
                  </div>
                </div>
              </div>
            </button>
            {/* Insert native ad after 3rd episode (index 2) */}
            {index === 2 && (
              <NativeAdPodcastCard adUnit={adConfig.adUnits.podcastsNative} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}