import { useState, useRef, TouchEvent, MouseEvent } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NativeAdArticleCard } from './ads/NativeAdArticleCard';
import { adConfig } from '../config/adConfig';
import { breakingNews, localNews } from '../data/mockArticles';

// Hero Article Slider Component
function HeroArticleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const allStories = [...breakingNews, ...localNews];
  const stories = allStories.slice(0, 5).map(article => ({
    category: article.category,
    title: article.title,
    author: article.author,
    time: article.timestamp,
    imageUrl: article.imageUrl
  }));

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setTranslateX(clientX - startX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(translateX) > 50) {
      if (translateX > 0 && currentSlide > 0) setCurrentSlide(currentSlide - 1);
      else if (translateX < 0 && currentSlide < stories.length - 1) setCurrentSlide(currentSlide + 1);
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: TouchEvent) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
  const handleMouseDown = (e: MouseEvent) => handleStart(e.clientX);
  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);

  return (
    <div className="px-4 pb-3">
      <div
        ref={sliderRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% + ${translateX}px))`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {stories.map((story, index) => (
            <Link
              key={index}
              to="/article/1"
              className="min-w-full"
              onClick={(e) => { if (Math.abs(translateX) > 5) e.preventDefault(); }}
            >
              <div className="bg-[#dde3ea] h-[216px] overflow-clip shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] relative mx-1 rounded-sm">
                <ImageWithFallback src={story.imageUrl} alt={story.title} className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex flex-col gap-1">
                  <span className={`self-start text-white text-[10px] font-bold tracking-[0.7px] uppercase px-3 py-[3px] rounded-full ${story.category.toUpperCase() === 'BREAKING' ? 'bg-[#dc2626]' : 'bg-[#1a3178]'}`}>
                    {story.category}
                  </span>
                  <p className="text-white font-['Source_Sans_3',sans-serif] font-bold text-[16px] leading-[1.25] line-clamp-2 drop-shadow">
                    {story.title}
                  </p>
                  <p className="text-white/80 font-['Source_Sans_3',sans-serif] text-[11px]">
                    {story.author} · {story.time}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots */}
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


// Article List Item — Artifact-inspired layout
function ArticleListItem({ category, title, author, imageUrl }: { category: string; title: string; author: string; imageUrl?: string }) {
  const isBreaking = category.toLowerCase() === 'breaking';
  const categoryColor = isBreaking ? 'text-[#dc2626]' : 'text-[#1a56a4]';

  return (
    <Link to="/article/1" className="block hover:bg-[#f8f9fa] transition-colors">
      <div className="flex gap-3 items-start py-3 px-4 border-b border-[#eef0f3] bg-white">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <span className={`text-[10px] font-bold tracking-[0.7px] uppercase font-['Source_Sans_3',sans-serif] ${categoryColor}`}>
            {category}
          </span>
          <p className="font-['Source_Sans_3',sans-serif] font-bold text-[14px] leading-[1.35] text-[#1a3178] line-clamp-3">
            {title}
          </p>
          <p className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#9ca3af] pt-0.5">
            {author}
          </p>
        </div>
        {/* Thumbnail */}
        <div className="size-[72px] shrink-0 overflow-hidden rounded-sm bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2]">
          <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </Link>
  );
}

// Section Divider
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="px-4 pt-4 pb-1">
      <span className="text-[11px] font-bold tracking-[0.8px] uppercase text-[#9ca3af] font-['Source_Sans_3',sans-serif]">
        {label}
      </span>
    </div>
  );
}

// Main Component
export function HomeContent() {
  const allArticles = [...breakingNews, ...localNews];


  return (
    <div className="bg-white w-full">
      {/* Hero Slider */}
      <div className="pt-3 bg-[#f8f9fa]">
        <HeroArticleSlider />
      </div>

      {/* Article Feed */}
      <div className="pb-[200px]">
        <SectionLabel label="Latest News" />
        {allArticles.slice(0, 15).map((article, index) => (
          <div key={article.id}>
            <ArticleListItem
              category={article.category}
              title={article.title}
              author={`${article.author}  ·  ${article.timestamp}`}
              imageUrl={article.imageUrl}
            />
            {index === 2 && (
              <NativeAdArticleCard adUnit={adConfig.adUnits.newsFeedNative} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
