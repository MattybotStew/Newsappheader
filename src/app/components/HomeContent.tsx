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
  
  // Use the first 5 articles from breaking news and local news combined
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
                to="/article/1" 
                className="min-w-full"
                onClick={(e) => {
                  if (Math.abs(translateX) > 5) {
                    e.preventDefault();
                  }
                }}
              >
                <div className="bg-[#dde3ea] h-[216px] overflow-clip shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] relative mx-1">
                  <ImageWithFallback
                    src={story.imageUrl}
                    alt={story.title}
                    className="size-full object-cover"
                  />
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
                    ? 'w-6 bg-[#1a56a4]' 
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

// Article List Item Component
function ArticleListItem({ category, title, author, imageUrl }: { category: string; title: string; author: string; imageUrl?: string }) {
  const isBreaking = category.toLowerCase() === 'breaking';
  
  // Get category color based on type
  const getCategoryColor = () => {
    if (isBreaking) return 'text-[#dc2626] bg-[#dc2626]';
    const lower = category.toLowerCase();
    if (lower.includes('sport')) return 'text-[#22c55e] bg-[#22c55e]';
    if (lower.includes('weather')) return 'text-[#f97316] bg-[#f97316]';
    return 'text-[#1a3178] bg-[#1a3178]'; // Default navy for Local, Business, etc.
  };
  
  return (
    <Link to="/article/1" className="block hover:bg-gray-50 transition-colors">
      <div className="flex gap-3 items-start pb-[11px] pt-[10px] px-4 border-b border-[#e5e7eb] bg-white">
        <div className="h-[68px] shrink-0 w-20 overflow-hidden bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2]">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[3px]">
          <div className={`font-['Source_Sans_3',sans-serif] font-bold text-[10px] tracking-[0.7px] uppercase ${getCategoryColor().split(' ')[0]}`}>
            {category}
          </div>
          <div className="h-[37.78px] overflow-clip">
            <div className="font-['Source_Sans_3',sans-serif] font-semibold leading-[18.9px] text-[#333399] text-[14px]">
              {title}
            </div>
          </div>
          <div className="font-['Source_Sans_3',sans-serif] font-normal text-[#6b7280] text-[10px] pt-[2px]">
            {author}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Main Component
export function HomeContent() {
  // Combine breaking news and local news, with breaking news first
  const allArticles = [...breakingNews, ...localNews];

  return (
    <div className="bg-[#f8f9fa] w-full pb-24">
      {/* Hero Slider - Use top 5 breaking/featured stories */}
      <div className="pt-4">
        <HeroArticleSlider />
      </div>
      
      {/* Article List with Native Ad after 3rd article */}
      {allArticles.slice(0, 10).map((article, index) => (
        <div key={article.id}>
          <ArticleListItem
            category={article.category}
            title={article.title}
            author={`${article.author}  ·  ${article.timestamp}`}
            imageUrl={article.imageUrl}
          />
          {/* Insert native ad after 3rd article (index 2) */}
          {index === 2 && (
            <NativeAdArticleCard adUnit={adConfig.adUnits.newsFeedNative} />
          )}
        </div>
      ))}
    </div>
  );
}