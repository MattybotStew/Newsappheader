import { useState, useRef, TouchEvent, MouseEvent } from 'react';
import { Link } from 'react-router';
import { NativeAdArticleCard } from './ads/NativeAdArticleCard';
import { adConfig } from '../config/adConfig';
import { sportsArticles } from '../data/mockArticles';

// Filter Chips Component — Artifact style
const SPORT_CATEGORIES = ['All', 'High School', 'Friday Game Night'];

function FilterChips({ selected, onSelect }: { selected: string; onSelect: (c: string) => void }) {
  return (
    <div className="bg-white border-b border-[#eef0f3]">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 pb-3 pt-1">
        {SPORT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-semibold font-['Source_Sans_3',sans-serif] tracking-[0.2px] transition-colors border whitespace-nowrap ${
              selected === cat
                ? 'bg-[#1a3178] text-white border-[#1a3178]'
                : 'bg-white text-[#1a3178] border-[#c1c7ce] hover:border-[#1a3178]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

// Hero Article Slider Component
function HeroArticleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Use top 5 sports articles for hero slider
  const stories = sportsArticles.slice(0, 5).map((article, index) => {
    const images = [
      'https://images.unsplash.com/photo-1763479197379-93d1dcd229d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDMwMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762025930827-9f1dda45aff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbiUyMHNob3R8ZW58MXx8fHwxNzc0Mzc0Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1696250892381-597efcbb9094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGdhbWUlMjBwbGF5ZXJ8ZW58MXx8fHwxNzc0Mzc0Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1761225091881-0d3bda9f6d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDM1NjUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwY3Jvd2R8ZW58MXx8fHwxNzc0Mzc0Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ];
    return {
      category: article.category,
      title: article.title,
      author: article.author,
      time: article.timestamp,
      imageUrl: images[index % images.length]
    };
  });

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold for slide change (50px)
    if (Math.abs(translateX) > 50) {
      if (translateX > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (translateX < 0 && currentSlide < stories.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = (e: MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="px-4 pb-3">
      <div className="block">
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
                to="/sports/article/1" 
                className="min-w-full"
                onClick={(e) => {
                  if (Math.abs(translateX) > 5) {
                    e.preventDefault();
                  }
                }}
              >
                <div className="bg-[#dde3ea] h-[216px] overflow-clip shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] relative mx-1">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="size-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex flex-col gap-1">
                    <span className="self-start bg-[#1a3178] text-white text-[10px] font-bold tracking-[0.7px] uppercase px-3 py-[3px] rounded-full">
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
          
          {/* Dots Navigation */}
          <div className="flex gap-1.5 justify-center mt-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(index);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-6 bg-[#1976d2]' 
                    : 'w-1.5 bg-[#c1c7ce]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Article List Item Component — Artifact style
function ArticleListItem({ category, title, author, imageUrl }: { category: string; title: string; author: string; imageUrl?: string }) {
  return (
    <Link to="/sports/article/1" className="block hover:bg-[#f8f9fa] transition-colors">
      <div className="flex gap-3 items-start py-3 px-4 border-b border-[#eef0f3] bg-white">
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <span className="text-[10px] font-bold tracking-[0.7px] uppercase font-['Source_Sans_3',sans-serif] text-[#1a3178]">
            {category}
          </span>
          <p className="font-['Source_Sans_3',sans-serif] font-bold text-[14px] leading-[1.35] text-[#1a3178] line-clamp-3">
            {title}
          </p>
          <p className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#9ca3af] pt-0.5">
            {author}
          </p>
        </div>
        <div className="size-[72px] shrink-0 overflow-hidden rounded-sm bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2]">
          {imageUrl && <img src={imageUrl} alt={title} className="w-full h-full object-cover" />}
        </div>
      </div>
    </Link>
  );
}

// Main Component
export function SportsContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All'
    ? sportsArticles
    : sportsArticles.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="bg-white w-full pb-[200px]">
      {/* Hero Slider */}
      <div className="pt-3 bg-[#f8f9fa]">
        <HeroArticleSlider />
      </div>

      {/* Filter Chips */}
      <FilterChips selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* Article List with Native Ad after 3rd article */}
      {filtered.map((article, index) => (
        <div key={article.id}>
          <ArticleListItem
            category={article.category}
            title={article.title}
            author={`${article.author}  ·  ${article.timestamp}`}
            imageUrl={article.imageUrl}
          />
          {index === 2 && (
            <NativeAdArticleCard adUnit={adConfig.adUnits.sportsFeedNative} />
          )}
        </div>
      ))}
    </div>
  );
}