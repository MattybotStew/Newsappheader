import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BannerAd } from './ads/BannerAd';
import { adConfig, adSizes } from '../config/adConfig';
import { useObituariesInfinite, getFeaturedImage, stripHtml, timeAgo } from '../api/hooks';
import type { WPObituary } from '../api/types';

const ALL_COUNTIES = ['Banks', 'Barrow', 'Clarke', 'Dawson', 'DeKalb', 'Fannin',
  'Forsyth', 'Franklin', 'Fulton', 'Gwinnett', 'Habersham',
  'Hall', 'Jackson', 'Lumpkin', 'Madison', 'Oconee', 'Rabun',
  'Stephens', 'Towns', 'Union', 'White'];

// Extract first "X County" mention from post content
const COUNTY_RE = new RegExp(`\\b(${ALL_COUNTIES.join('|')})\\s+County\\b`);
function extractCounty(content: string): string | null {
  const m = COUNTY_RE.exec(content);
  return m ? m[1] : null;
}

function ObituarySearch({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-white border-b border-[#eef0f3] px-4 py-2.5">
      <div className="flex items-center bg-[#f0f4ff] border border-[#c1c7ce] rounded-[8px] px-3 gap-2 h-[38px]">
        <svg viewBox="0 0 24 24" fill="none" className="size-4 text-[#1a3178] shrink-0">
          <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Search obituaries…"
          className="flex-1 bg-transparent text-[16px] text-[#1a1c1e] placeholder-[#6b7280] font-['Source_Sans_3',sans-serif] outline-none"
        />
        {value && (
          <button onClick={() => onChange('')} className="text-[#6b7280] hover:text-[#1a1c1e] transition-colors shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="size-4">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function CountyDropdown({ selected, onSelect, counts }: {
  selected: string;
  onSelect: (v: string) => void;
  counts: Record<string, number>;
}) {
  const [open, setOpen] = useState(false);
  const isFiltered = selected !== 'All';
  // Only show counties that have at least one obit in loaded data
  const available = ALL_COUNTIES.filter(c => (counts[c] ?? 0) > 0);

  return (
    <div className="relative border-b border-[#eef0f3]">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${isFiltered ? 'bg-[#1a3178]' : 'bg-[#f0f4ff] hover:bg-[#e6ecfa]'}`}
      >
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="none" className={`size-4 shrink-0 ${isFiltered ? 'text-white/70' : 'text-[#1a3178]'}`}>
            <path d="M3 6h18M6 12h12M9 18h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
          </svg>
          <span className={`text-[13px] font-bold font-['Source_Sans_3',sans-serif] tracking-[0.2px] ${isFiltered ? 'text-white' : 'text-[#1a3178]'}`}>
            {isFiltered ? `County: ${selected}` : 'Filter by County'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isFiltered && (
            <button
              onClick={e => { e.stopPropagation(); onSelect('All'); }}
              className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-['Source_Sans_3',sans-serif] transition-colors"
            >
              Clear ✕
            </button>
          )}
          <svg viewBox="0 0 24 24" fill="none" className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${isFiltered ? 'text-white' : 'text-[#1a3178]'}`}>
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
          </svg>
        </div>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 z-40 bg-white border-b border-[#eef0f3] shadow-lg max-h-[280px] overflow-y-auto">
            {available.length === 0 ? (
              <div className="px-4 py-3 text-[13px] text-[#9ca3af] font-['Source_Sans_3',sans-serif]">Loading counties…</div>
            ) : (
              available.map((county) => (
                <button key={county} onClick={() => { onSelect(county); setOpen(false); }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-[#f8f9fa] transition-colors border-b border-[#f3f4f6] last:border-0 ${selected === county ? 'bg-[#f0f4ff]' : ''}`}>
                  <span className={`text-[13px] font-['Source_Sans_3',sans-serif] ${selected === county ? 'font-bold text-[#1a3178]' : 'font-normal text-[#374151]'}`}>
                    {county} County
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-['Source_Sans_3',sans-serif] ${selected === county ? 'text-[#1a56a4]' : 'text-[#9ca3af]'}`}>
                      {counts[county]}
                    </span>
                    {selected === county && (
                      <svg viewBox="0 0 24 24" fill="none" className="size-4 text-[#1a3178] shrink-0">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} stroke="currentColor" />
                      </svg>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

function ObituaryListItem({ post }: { post: WPObituary }) {
  const title = stripHtml(post.title.rendered);
  const imageUrl = getFeaturedImage(post);
  return (
    <Link to={`/obituaries/${post.id}`} className="block hover:bg-white transition-colors">
      <div className="flex gap-4 items-center pb-4 pt-4 px-4 border-b border-[#e5e7eb]">
        <div className="size-[72px] shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] border-[3px] border-white shadow-md">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            fallbackSrc="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex items-baseline gap-2">
            <div className="font-['Source_Sans_3',sans-serif] font-bold leading-[20px] text-[#1a3178] text-[16px]">{title}</div>
            <div className="font-['Source_Sans_3',sans-serif] font-normal text-[#9ca3af] text-[11px] shrink-0">{timeAgo(post.date)}</div>
          </div>
          <div className="font-['Source_Sans_3',sans-serif] text-[#6b7280] text-[12px] line-clamp-2 mt-1">
            {stripHtml(post.excerpt.rendered)}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ObituariesContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('All');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useObituariesInfinite();
  const posts = data?.pages.flatMap((p) => p.data) ?? [];

  // Count how many loaded obits belong to each county
  const countyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of posts) {
      const county = extractCounty(p.content.rendered);
      if (county) counts[county] = (counts[county] ?? 0) + 1;
    }
    return counts;
  }, [posts]);

  const filtered = useMemo(() => posts.filter(p => {
    const matchesSearch = !searchQuery ||
      stripHtml(p.title.rendered).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCounty = selectedCounty === 'All' ||
      extractCounty(p.content.rendered) === selectedCounty;
    return matchesSearch && matchesCounty;
  }), [posts, searchQuery, selectedCounty]);

  return (
    <div className="bg-white w-full pb-[200px]">
      <CountyDropdown selected={selectedCounty} onSelect={setSelectedCounty} counts={countyCounts} />
      <ObituarySearch value={searchQuery} onChange={setSearchQuery} />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-[#1a3178] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div>
          {filtered.map((post, index) => (
            <div key={post.id}>
              <ObituaryListItem post={post} />
              {(index + 1) % 5 === 0 && (
                <div className="py-4">
                  <BannerAd adUnit={adConfig.adUnits.obituariesInline} size={adSizes.mediumRectangle} label="Sponsored" />
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && !isLoading && (
            <div className="flex flex-col items-center py-12 gap-2">
              <span className="text-[#9ca3af] text-[14px] font-['Source_Sans_3',sans-serif]">
                No obituaries found{selectedCounty !== 'All' ? ` in ${selectedCounty} County` : ''}.
              </span>
              {hasNextPage && selectedCounty !== 'All' && (
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="mt-2 px-5 py-1.5 bg-[#1a3178] text-white text-[12px] font-bold rounded-full font-['Source_Sans_3',sans-serif] disabled:opacity-50"
                >
                  {isFetchingNextPage ? 'Loading…' : 'Load more to search further'}
                </button>
              )}
            </div>
          )}

          {hasNextPage && (
            <div className="flex flex-col items-center py-6 gap-1.5">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-6 py-2 bg-[#1a3178] text-white text-[13px] font-bold rounded-full font-['Source_Sans_3',sans-serif] disabled:opacity-50"
              >
                {isFetchingNextPage ? 'Loading…' : 'Load More'}
              </button>
              {selectedCounty !== 'All' && (
                <span className="text-[11px] text-[#9ca3af] font-['Source_Sans_3',sans-serif]">
                  More {selectedCounty} County results may be in older pages
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
