import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-6bngkawl5e";
import { TopBannerAd } from './ads/TopBannerAd';
import { adConfig } from '../config/adConfig';

const SECTION_LABELS: Record<string, string> = {
  '/sports': 'SPORTS',
  '/weather': 'WEATHER',
  '/radio': 'RADIO',
  '/podcasts': 'PODCASTS',
  '/obituaries': 'OBITS',
  '/search': 'SEARCH',
};

function getSectionLabel(pathname: string): string | null {
  for (const [prefix, label] of Object.entries(SECTION_LABELS)) {
    if (pathname.startsWith(prefix)) return label;
  }
  return null;
}

const STATIONS = ['WDUN AM 550', 'WDUN FM 102.9', '94.5FM THE LAKE'];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentStation, setCurrentStation] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const sectionLabel = getSectionLabel(location.pathname);

  // Detect scroll direction on the main scroll container
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;
    let lastY = 0;
    const onScroll = () => {
      const y = main.scrollTop;
      if (y < 60) setIsScrolled(false);
      else if (y > lastY + 5) setIsScrolled(true);
      else if (y < lastY - 5) setIsScrolled(false);
      lastY = y;
    };
    main.addEventListener('scroll', onScroll, { passive: true });
    return () => main.removeEventListener('scroll', onScroll);
  }, []);

  // Close expanded station list when route changes
  useEffect(() => {
    setIsExpanded(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const handleSearchSubmit = () => {
    const q = searchQuery.trim();
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="bg-[#1a3178] sticky top-0 z-50 w-full shrink-0 flex flex-col gap-[8px] p-[6px]">

      {/* ── Search mode ─────────────────────────────── */}
      {isSearchOpen ? (
        <div className="flex items-center gap-[8px] w-full">
          {/* Search icon */}
          <div className="size-[36px] flex items-center justify-center rounded-[8px] bg-[#0091b0] shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="size-[22px] text-white">
              <path d={svgPaths.p3696db80} fill="currentColor" />
            </svg>
          </div>
          {/* White input */}
          <div className="flex-1 flex items-center bg-white rounded-[8px] px-3 gap-2 h-[36px]">
            <input
              ref={searchInputRef}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearchSubmit()}
              placeholder="Search accessWDUN…"
              className="flex-1 bg-transparent text-[#011843] placeholder-[#011843]/40 text-[14px] font-['Source_Sans_3',sans-serif] outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[#011843]/40 hover:text-[#011843] transition-colors shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="size-4">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
                </svg>
              </button>
            )}
          </div>
          {/* Close icon */}
          <button
            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
            className="size-[36px] flex items-center justify-center rounded-[8px] bg-white/15 hover:bg-white/25 transition-colors text-white shrink-0"
            aria-label="Close search"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
            </svg>
          </button>
        </div>

      ) : (
        <>
          {/* ── Logo row ────────────────────────────── */}
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-white rounded-[8px] size-[34px] flex items-center justify-center shrink-0">
                <svg className="size-[22px]" fill="none" viewBox="0 0 22 22">
                  <path d={svgPaths.p2331ea80} fill="url(#hdrGrad)" />
                  <path d={svgPaths.p2c748980} stroke="url(#hdrGrad)" strokeWidth="1.65" />
                  <defs>
                    <linearGradient id="hdrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="50%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-['Source_Sans_3',sans-serif] text-[22px] text-white tracking-[-0.2px]">
                  <span className="font-normal">access</span><span className="font-bold">WDUN</span>
                </span>
                {sectionLabel && (
                  <span className="text-[10px] font-bold tracking-[1px] text-white/55 font-['Source_Sans_3',sans-serif]">
                    {sectionLabel}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="size-[36px] flex items-center justify-center rounded-[8px] bg-[#0091b0] hover:bg-[#007a96] transition-colors text-white shrink-0"
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-[22px]">
                <path d={svgPaths.p3696db80} fill="currentColor" />
              </svg>
            </button>
          </div>

          {/* ── Radio bar ───────────────────────────── */}
          <div className="w-full">
            <div className={`bg-[#011843] rounded-[8px] flex items-center justify-between px-[12px] transition-all duration-300 ${isScrolled ? 'h-[30px]' : 'h-[40px]'}`}>
              {/* Left: live dot + badge + station name */}
              <button
                onClick={() => !isScrolled && setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 flex-1 min-w-0 hover:opacity-80 transition-opacity text-left"
              >
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className={`rounded-[3px] size-[6px] bg-[#ff5252] ${isPlaying ? 'animate-pulse' : 'opacity-50'}`} />
                  <span className="bg-[#c62828] text-white text-[9px] font-extrabold tracking-[0.8px] px-[6px] py-[2px] rounded-full">LIVE</span>
                </div>
                <span className="text-white text-[13px] font-medium font-['Source_Sans_3',sans-serif] truncate">
                  {STATIONS[currentStation]}
                </span>
              </button>

              {/* Right: listen button + "More stations" */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`active:scale-95 transition-all flex items-center gap-1.5 pl-3 pr-1.5 rounded-[3px] text-white text-[12px] font-bold font-['Source_Sans_3',sans-serif] whitespace-nowrap ${isPlaying ? 'bg-[#0077b6] hover:bg-[#005f92]' : 'bg-[#009933] hover:bg-[#007a29]'}`}
                  style={{ height: isScrolled ? '22px' : '26px' }}
                >
                  {isPlaying ? (
                    <>
                      Pause
                      <div className="size-[18px] rounded-full bg-black/30 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 14 14" fill="none" className="size-2.5">
                          <path d="M4 2H6V12H4V2ZM8 2H10V12H8V2Z" fill="white" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <>
                      Listen
                      <div className="size-[18px] rounded-full bg-black/30 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 14 14" fill="none" className="size-2.5">
                          <path d={svgPaths.p3c11d380} fill="white" />
                        </svg>
                      </div>
                    </>
                  )}
                </button>

                {!isScrolled && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-0.5 text-white/60 hover:text-white transition-colors text-[11px] font-medium font-['Source_Sans_3',sans-serif] whitespace-nowrap"
                  >
                    More stations
                    <svg viewBox="0 0 24 24" fill="none" className={`size-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} stroke="currentColor" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Ad banner ───────────────────────────────── */}
      {!isSearchOpen && <TopBannerAd adUnit={adConfig.adUnits.topBanner} />}

      {/* ── Station dropdown ────────────────────────── */}
      {isExpanded && !isSearchOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsExpanded(false)} />
          <div className="absolute top-full left-4 right-4 mt-1 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-[#d1d5db]">
            <div className="bg-[#011843] px-4 py-2.5 flex items-center justify-between">
              <span className="font-bold text-white text-[14px] font-['Source_Sans_3',sans-serif] tracking-[0.3px]">LISTEN LIVE</span>
              <button onClick={() => setIsExpanded(false)} className="text-white/70 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="size-4">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
                </svg>
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {STATIONS.map((name, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentStation(i); setIsExpanded(false); }}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className={`font-semibold text-[14px] font-['Source_Sans_3',sans-serif] ${i === currentStation ? 'text-[#1a56a4]' : 'text-[#374151]'}`}>
                    {name}
                  </span>
                  {i === currentStation && (
                    <svg viewBox="0 0 24 24" fill="none" className="size-4 text-[#1a56a4]">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
