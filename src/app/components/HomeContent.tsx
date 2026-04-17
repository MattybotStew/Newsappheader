import { useState, useRef, TouchEvent, MouseEvent } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NativeAdArticleCard } from './ads/NativeAdArticleCard';
import { adConfig } from '../config/adConfig';
import { useNewsInfinite, getFeaturedImage, getAuthor, stripHtml, timeAgo } from '../api/hooks';
import type { WPPost } from '../api/types';

const NEWS_FALLBACK = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80';

const NEWS_CATEGORIES: { label: string; id: number }[] = [
  { label: 'All',      id: 0 },
  { label: 'Local',    id: 66 },
  { label: 'Breaking', id: 67 },
  { label: 'Business', id: 1897 },
  { label: 'Politics', id: 17 },
  { label: 'Georgia',  id: 69 },
];

function FilterChips({ selected, onSelect }: { selected: string; onSelect: (c: string) => void }) {
  return (
    <div className="bg-white border-b border-[#eef0f3]">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 pb-3 pt-1">
        {NEWS_CATEGORIES.map(({ label }) => (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-semibold font-['Source_Sans_3',sans-serif] tracking-[0.2px] transition-colors border whitespace-nowrap ${
              selected === label
                ? 'bg-[#1a3178] text-white border-[#1a3178]'
                : 'bg-white text-[#1a3178] border-[#c1c7ce] hover:border-[#1a3178]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Hero Article Slider
function HeroArticleSlider({ posts }: { posts: WPPost[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const stories = posts.slice(0, 5);

  const handleStart = (clientX: number) => { setIsDragging(true); setStartX(clientX); };
  const handleMove = (clientX: number) => { if (!isDragging) return; setTranslateX(clientX - startX); };
  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(translateX) > 50) {
      if (translateX > 0 && currentSlide > 0) setCurrentSlide(currentSlide - 1);
      else if (translateX < 0 && currentSlide < stories.length - 1) setCurrentSlide(currentSlide + 1);
    }
    setTranslateX(0);
  };

  return (
    <div className="px-4 pb-3">
      <div
        ref={sliderRef}
        className="relative overflow-hidden"
        onTouchStart={(e: TouchEvent) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e: TouchEvent) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e: MouseEvent) => handleStart(e.clientX)}
        onMouseMove={(e: MouseEvent) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(calc(-${currentSlide * 100}% + ${translateX}px))`, cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {stories.map((post) => (
            <Link
              key={post.id}
              to={`/article/${post.id}`}
              className="min-w-full"
              onClick={(e) => { if (Math.abs(translateX) > 5) e.preventDefault(); }}
            >
              <div className="bg-[#dde3ea] h-[216px] overflow-clip shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] relative mx-1 rounded-sm">
                <ImageWithFallback src={getFeaturedImage(post)} alt={stripHtml(post.title.rendered)} className="size-full object-cover" fallbackSrc={NEWS_FALLBACK} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex flex-col gap-1">
                  <span className="self-start text-white text-[10px] font-bold tracking-[0.7px] uppercase px-3 py-[3px] rounded-full bg-[#dc2626]">
                    Breaking
                  </span>
                  <p className="text-white font-['Source_Sans_3',sans-serif] font-bold text-[16px] leading-[1.25] line-clamp-2 drop-shadow">
                    {stripHtml(post.title.rendered)}
                  </p>
                  <p className="text-white/80 font-['Source_Sans_3',sans-serif] text-[11px]">
                    {getAuthor(post)} · {timeAgo(post.date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-1.5 justify-center mt-3">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.preventDefault(); setCurrentSlide(index); }}
              className={`h-1.5 rounded-full transition-all ${index === currentSlide ? 'w-6 bg-[#1a56a4]' : 'w-1.5 bg-[#c1c7ce]'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Article List Item
function ArticleListItem({ post }: { post: WPPost }) {
  return (
    <Link to={`/article/${post.id}`} className="block hover:bg-[#f8f9fa] transition-colors">
      <div className="flex gap-3 items-start py-3 px-4 border-b border-[#eef0f3] bg-white">
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <p className="font-['Source_Sans_3',sans-serif] font-bold text-[14px] leading-[1.35] text-[#1a3178] line-clamp-3">
            {stripHtml(post.title.rendered)}
          </p>
          <p className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#9ca3af] pt-0.5">
            {getAuthor(post)} · {timeAgo(post.date)}
          </p>
        </div>
        <div className="size-[72px] shrink-0 overflow-hidden rounded-sm bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2]">
          <ImageWithFallback src={getFeaturedImage(post)} alt={stripHtml(post.title.rendered)} className="w-full h-full object-cover" fallbackSrc={NEWS_FALLBACK} />
        </div>
      </div>
    </Link>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="px-4 pt-4 pb-1">
      <span className="text-[11px] font-bold tracking-[0.8px] uppercase text-[#9ca3af] font-['Source_Sans_3',sans-serif]">
        {label}
      </span>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 border-4 border-[#1a3178] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function HomeContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categoryId = NEWS_CATEGORIES.find(c => c.label === selectedCategory)?.id ?? 0;
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useNewsInfinite(categoryId);
  const posts = (data?.pages.flatMap((p) => p.data) ?? [])
    .filter(p => !p['news-category']?.includes(88));

  if (isLoading) return <LoadingState />;

  return (
    <div className="bg-white w-full">
      <div className="pt-3 bg-[#f8f9fa]">
        <HeroArticleSlider posts={posts} />
      </div>

      <FilterChips selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="pb-[200px]">
        <SectionLabel label={selectedCategory === 'All' ? 'Latest News' : `${selectedCategory} News`} />
        {posts.map((post, index) => (
          <div key={post.id}>
            <ArticleListItem post={post} />
            {index === 2 && (
              <NativeAdArticleCard adUnit={adConfig.adUnits.newsFeedNative} />
            )}
          </div>
        ))}

        {/* Load more */}
        {hasNextPage && (
          <div className="flex justify-center py-6">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-6 py-2 bg-[#1a3178] text-white text-[13px] font-bold rounded-full font-['Source_Sans_3',sans-serif] disabled:opacity-50"
            >
              {isFetchingNextPage ? 'Loading…' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
