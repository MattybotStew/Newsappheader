import { useState, useRef, TouchEvent, MouseEvent } from 'react';
import { Link } from 'react-router';
import placeholderImage from 'figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png';
import { NativeAdArticleCard } from './ads/NativeAdArticleCard';
import { adConfig } from '../config/adConfig';

// Hero Article Slider Component
function HeroArticleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const stories = [
    {
      category: 'Local',
      title: "Hall County Sheriff's deputy arrested on DUI charges Friday evening on GA-365",
      author: 'Steve Winslow',
      time: '2 hours ago'
    },
    {
      category: 'Politics',
      title: 'District 50 State Senator Bo Hatchett qualifies for re-election in 2026 primaries',
      author: 'Steve Winslow',
      time: '3 hours ago'
    },
    {
      category: 'Local',
      title: 'Suspect arrested following Hoschton residential fire Thursday night',
      author: 'AccessNorthGA Staff',
      time: '7:42 AM'
    },
    {
      category: 'Business',
      title: 'New development plans announced for downtown Gainesville commercial district',
      author: 'AccessNorthGA Staff',
      time: '8:15 AM'
    },
    {
      category: 'Local',
      title: 'Local schools announce winter break schedule changes due to weather concerns',
      author: 'Steve Winslow',
      time: 'Yesterday'
    }
  ];

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
                <div className="bg-[#dde3ea] h-[216px] overflow-clip rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] relative mx-1">
                  <img
                    src={placeholderImage}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute bg-gradient-to-b from-[40%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.78)]" />
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[5.2px] items-start p-[14px]">
                    <div className="bg-[#1a56a4] px-2 py-[2px] rounded-full">
                      <div className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[9px] text-white tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {story.category}
                      </div>
                    </div>
                    <div className="font-['Roboto:Bold',sans-serif] font-bold leading-[20.48px] text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {story.title}
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-[rgba(255,255,255,0.72)]">
                      <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>{story.author}</span>
                      <span className="opacity-50">·</span>
                      <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>{story.time}</span>
                    </div>
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
function ArticleListItem({ category, title, author }: { category: string; title: string; author: string }) {
  const isBreaking = category.toLowerCase() === 'breaking';
  
  return (
    <Link to="/article/1" className="block hover:bg-white transition-colors">
      <div className="flex gap-3 items-start pb-[11px] pt-[10px] px-4 border-b border-[#c1c7ce]">
        <div className="h-[68px] rounded-xl shrink-0 w-20 overflow-hidden bg-gradient-to-br from-[#b8d0ee] to-[#8fb8e2]">
          <img
            src={placeholderImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[3px]">
          <div className={`font-['Roboto:Bold',sans-serif] font-bold text-[10px] tracking-[0.7px] uppercase ${isBreaking ? 'text-[#c62828]' : 'text-[#1a56a4]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {category}
          </div>
          <div className="h-[37.78px] overflow-clip">
            <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] text-[#1a1c1e] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {title}
            </div>
          </div>
          <div className="font-['Roboto:Regular',sans-serif] font-normal text-[#41484d] text-[10px] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {author}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Main Component
export function HomeContent() {
  const articles = [
    {
      category: "Breaking",
      title: "District 50 State Senator Bo Hatchett qualifies for re-election in 2026 primaries",
      author: "Steve Winslow  ·  8:56 AM"
    },
    {
      category: "Breaking",
      title: "Hall County Schools announces weather-related delay for Thursday",
      author: "Maria Johnson  ·  7:15 AM"
    },
    {
      category: "Breaking",
      title: "New development project approved for downtown Gainesville",
      author: "Tom Patterson  ·  6:42 AM"
    },
    {
      category: "Local",
      title: "Suspect arrested following Hoschton residential fire Thursday night",
      author: "AccessNorthGA Staff  ·  7:42 AM"
    },
    {
      category: "Business",
      title: "New retail development coming to Hall County with 15 stores planned",
      author: "AccessNorthGA Staff  ·  Yesterday"
    },
    {
      category: "Real Estate",
      title: "Housing market sees steady growth in Northeast Georgia region",
      author: "Steve Winslow  ·  Yesterday"
    },
    {
      category: "Local",
      title: "Community fundraiser exceeds goal for local family in need",
      author: "AccessNorthGA Staff  ·  2 days ago"
    },
    {
      category: "Food Inspections",
      title: "Health department releases latest restaurant inspection scores",
      author: "AccessNorthGA Staff  ·  2 days ago"
    },
    {
      category: "Politics",
      title: "City council approves new infrastructure improvements for 2026",
      author: "Steve Winslow  ·  3 days ago"
    },
    {
      category: "Local",
      title: "Local high school students win state championship competition",
      author: "AccessNorthGA Staff  ·  3 days ago"
    }
  ];

  return (
    <div className="bg-[#f8f9fa] w-full pb-24">
      {/* Hero Slider */}
      <div className="pt-4">
        <HeroArticleSlider />
      </div>
      
      {/* Article List with Native Ad after 3rd article */}
      {articles.map((article, index) => (
        <div key={index}>
          <ArticleListItem
            category={article.category}
            title={article.title}
            author={article.author}
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