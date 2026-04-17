import { useParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Share2, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { adConfig } from '../config/adConfig';
import { usePodcastEpisodes, usePodcastEpisodeById } from '../api/hooks';

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export function PodcastPlayerPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: episode, isLoading } = usePodcastEpisodeById(id ?? null);
  const { data: allEpisodes } = usePodcastEpisodes();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  // Set up audio when episode loads
  useEffect(() => {
    if (!episode?.audioUrl) return;

    // Clean up previous
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    const audio = new Audio(episode.audioUrl);
    audioRef.current = audio;
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setProgress(0);

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    });
    audio.addEventListener('playing', () => { setIsBuffering(false); setIsPlaying(true); });
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('waiting', () => setIsBuffering(true));
    audio.addEventListener('canplay', () => setIsBuffering(false));
    audio.addEventListener('ended', () => { setIsPlaying(false); setProgress(1); });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [episode?.audioUrl]);

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      setIsBuffering(true);
      audio.play().catch(() => setIsBuffering(false));
    }
  }, [isPlaying]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * duration;
  };

  const handleSkip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.currentTime + seconds, duration));
  };

  const otherEpisodes = (allEpisodes ?? [])
    .filter(ep => ep.id !== id)
    .slice(0, 3);

  if (isLoading) {
    return (
      <div className="size-full flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-[#011843] to-[#1a3178]">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!episode) {
    return (
      <div className="size-full flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="font-['Source_Sans_3',sans-serif] text-[#6b7280]">Episode not found</p>
        </main>
        <Footer />
      </div>
    );
  }

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
            <div className="rounded-lg shadow-2xl overflow-hidden shrink-0 bg-[#0a2a5e]" style={{ width: 120, height: 120 }}>
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
                    AccessWDUN
                  </p>
                  <h1 className="font-['Source_Sans_3',sans-serif] font-bold text-[15px] text-white leading-tight mb-0.5 line-clamp-2">
                    {episode.title}
                  </h1>
                  <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-white/50">
                    {formatDate(episode.pubDate)}{episode.duration ? ` · ${episode.duration}` : ''}
                  </p>
                </div>
                <button className="ml-2 shrink-0 text-white/60 hover:text-white transition-colors">
                  <Share2 className="size-5" />
                </button>
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-['Source_Sans_3',sans-serif] text-[10px] text-white/50 shrink-0 w-8 text-right">
                  {formatTime(currentTime)}
                </span>
                <div
                  className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-white rounded-full transition-none"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <span className="font-['Source_Sans_3',sans-serif] text-[10px] text-white/50 shrink-0 w-8">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Playback controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSkip(-15)}
                  className="text-white/60 hover:text-white transition-colors"
                  title="Back 15s"
                >
                  <SkipBack className="size-5" fill="currentColor" />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="size-10 flex items-center justify-center rounded-full bg-white hover:scale-105 active:scale-95 transition-transform shadow-lg"
                >
                  {isBuffering ? (
                    <div className="size-4 border-2 border-[#011843] border-t-transparent rounded-full animate-spin" />
                  ) : isPlaying ? (
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
                <button
                  onClick={() => handleSkip(30)}
                  className="text-white/60 hover:text-white transition-colors"
                  title="Forward 30s"
                >
                  <SkipForward className="size-5" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* More Episodes */}
          {otherEpisodes.length > 0 && (
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
                      <p className="font-['Source_Sans_3',sans-serif] font-semibold text-[13px] text-white line-clamp-1">{ep.title}</p>
                      <p className="font-['Source_Sans_3',sans-serif] text-[11px] text-white/50">{formatDate(ep.pubDate)}{ep.duration ? ` · ${ep.duration}` : ''}</p>
                    </div>
                    <ChevronLeft className="size-4 text-white/30 shrink-0 rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <AnchoredBanner adUnit={adConfig.adUnits.articleBottom} />
      <Footer />
    </div>
  );
}
