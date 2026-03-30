import { useParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Share2, SkipBack, SkipForward } from 'lucide-react';
import { useState } from 'react';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { adConfig } from '../config/adConfig';

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
    description: "Breaking down this week's biggest high school matchups and playoff implications.",
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
    <div className="size-full flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto flex flex-col">
        <div className="flex-1 bg-gradient-to-b from-[#011843] to-[#1a3178] relative flex flex-col justify-center px-6 pt-12 pb-[200px]">

          {/* Back button */}
          <button
            onClick={() => navigate('/podcasts')}
            className="absolute top-4 left-6 flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="size-5" />
            <span className="font-['Source_Sans_3',sans-serif] text-[13px] font-semibold tracking-wide uppercase">Podcasts</span>
          </button>

          {/* Two-column layout: artwork left, player right */}
          <div className="flex items-center gap-6 w-full mb-8">
            {/* Artwork */}
            <div className="rounded-lg shadow-2xl overflow-hidden shrink-0" style={{ width: 120, height: 120 }}>
              <img
                src={episode.imageUrl}
                alt={episode.title}
                className="size-full object-cover"
              />
            </div>

            {/* Player right column */}
            <div className="flex-1 min-w-0">
              {/* Episode info */}
              <div className="flex items-start justify-between mb-3">
                <div className="min-w-0">
                  <p className="font-['Source_Sans_3',sans-serif] text-[11px] font-bold tracking-[0.8px] uppercase text-white/50 mb-0.5">
                    {episode.showName}
                  </p>
                  <h1 className="font-['Source_Sans_3',sans-serif] font-bold text-[16px] text-white leading-tight mb-0.5 line-clamp-2">
                    {episode.title}
                  </h1>
                  <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-white/50">
                    {episode.date} · {episode.duration}
                  </p>
                </div>
                <button className="ml-2 shrink-0 text-white/60 hover:text-white transition-colors">
                  <Share2 className="size-5" />
                </button>
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-['Source_Sans_3',sans-serif] text-[10px] text-white/50 shrink-0">15:45</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[35%] rounded-full" />
                </div>
                <span className="font-['Source_Sans_3',sans-serif] text-[10px] text-white/50 shrink-0">45:00</span>
              </div>

              {/* Playback controls */}
              <div className="flex items-center gap-3">
                <button className="text-white/60 hover:text-white transition-colors">
                  <SkipBack className="size-5" fill="currentColor" />
                </button>
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
                <button className="text-white/60 hover:text-white transition-colors">
                  <SkipForward className="size-5" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* More Episodes */}
          <div className="w-full border-t border-white/10 pt-6">
            <p className="font-['Source_Sans_3',sans-serif] text-[11px] font-bold tracking-[0.8px] uppercase text-white/40 mb-3">
              More Episodes
            </p>
            <div className="space-y-2">
              {otherEpisodes.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => navigate(`/podcasts/player/${ep.id}`)}
                  className="w-full flex items-center gap-3 py-2 hover:opacity-80 transition-opacity text-left"
                >
                  <div className="size-10 shrink-0 rounded overflow-hidden bg-[#0a2a5e]">
                    <img src={ep.imageUrl} alt={ep.title} className="size-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Source_Sans_3',sans-serif] font-semibold text-[14px] text-white truncate">{ep.title}</p>
                    <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-white/50">{ep.date} · {ep.duration}</p>
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
