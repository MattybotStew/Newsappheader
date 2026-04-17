import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NativeAdPodcastCard } from './ads/NativeAdPodcastCard';
import { adConfig } from '../config/adConfig';
import { usePodcastEpisodes } from '../api/hooks';
import type { PodcastEpisode } from '../api/hooks';

const SHOW_FILTERS = [
  { id: 'all', label: 'All Shows' },
  { id: 'martha', label: 'Martha Zoller' },
  { id: 'drive', label: 'The Drive at 5' },
  { id: 'thursday', label: 'Thursday Night QB' },
  { id: 'mornings', label: 'Mornings on Main' },
];

function matchesFilter(episode: PodcastEpisode, filter: string): boolean {
  if (filter === 'all') return true;
  const t = episode.title.toLowerCase();
  if (filter === 'martha') return t.includes('martha') || t.includes('zoller');
  if (filter === 'drive') return t.includes('drive') || t.includes('drive at 5');
  if (filter === 'thursday') return t.includes('thursday') || t.includes('qb');
  if (filter === 'mornings') return t.includes('morning') || t.includes('main street');
  return true;
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

function EpisodeCard({ episode, onClick }: { episode: PodcastEpisode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white border-b border-[#e8eaed] hover:bg-[#f8f9fa] transition-colors text-left"
    >
      <div className="flex gap-3 px-4 py-3">
        <div className="size-[96px] shrink-0 overflow-hidden rounded-[4px] bg-[#e8eaed]">
          <img
            src={episode.imageUrl}
            alt={episode.title}
            className="size-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-['Source_Sans_3',sans-serif] font-bold text-[15px] text-[#1a3178] mb-1 line-clamp-2 leading-snug">
            {episode.title}
          </h3>
          {episode.description && (
            <p className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#6b7178] mb-2 line-clamp-2 leading-snug">
              {episode.description}
            </p>
          )}
          <div className="flex items-center gap-1.5 text-[#6b7178]">
            <span className="font-['Source_Sans_3',sans-serif] text-[12px]">{formatDate(episode.pubDate)}</span>
            {episode.duration && (
              <>
                <span className="text-[10px]">·</span>
                <span className="font-['Source_Sans_3',sans-serif] text-[12px]">{episode.duration}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

export function PodcastsContent() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const navigate = useNavigate();
  const { data: episodes, isLoading, isError } = usePodcastEpisodes();

  const filtered = (episodes ?? []).filter(ep => matchesFilter(ep, selectedFilter));

  return (
    <div className="bg-white w-full pb-[200px]">
      {/* Header */}
      <div className="px-4 pt-5 pb-4 border-b border-[#e8eaed]">
        <h1 className="font-['Source_Sans_3',sans-serif] font-bold text-[24px] text-[#1a1c1e] mb-0.5">
          Podcasts
        </h1>
        <p className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#6b7178]">
          Listen to your favorite local shows on-demand
        </p>
      </div>

      {/* Filter Chips */}
      <div className="border-b border-[#e8eaed] px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {SHOW_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors font-['Source_Sans_3',sans-serif] font-semibold text-[13px] ${
                selectedFilter === f.id
                  ? 'bg-[#1a3178] text-white'
                  : 'border border-[#c1c7ce] text-[#41484d] hover:bg-[#f0f0f0]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-[#1a3178] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="px-4 py-12 text-center text-[#6b7280]">
          <p className="font-['Source_Sans_3',sans-serif] text-[16px]">Unable to load episodes. Please try again.</p>
        </div>
      )}

      {/* Episode List */}
      {!isLoading && !isError && (
        <div>
          {filtered.length === 0 ? (
            <div className="px-4 py-12 text-center text-[#6b7280]">
              <p className="font-['Source_Sans_3',sans-serif] text-[15px]">No episodes found for this show.</p>
            </div>
          ) : (
            filtered.map((episode, index) => (
              <div key={episode.id}>
                <EpisodeCard
                  episode={episode}
                  onClick={() => navigate(`/podcasts/player/${episode.id}`)}
                />
                {index === 2 && (
                  <NativeAdPodcastCard adUnit={adConfig.adUnits.podcastsNative} />
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
