import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BannerAd } from './ads/BannerAd';
import { adConfig, adSizes } from '../config/adConfig';
import { obituaries as mockObituaries } from '../data/mockArticles';

const TIME_FILTERS = ['Day', 'Week', 'Month'];
const COUNTY_FILTERS = ['All', 'Banks', 'Barrow', 'Clarke', 'Dawson', 'DeKalb', 'Fannin',
  'Forsyth', 'Franklin', 'Fulton', 'Gwinnett', 'Habersham',
  'Hall', 'Jackson', 'Lumpkin', 'Madison', 'Oconee', 'Rabun',
  'Stephens', 'Towns', 'Union', 'White', 'Other'];

function ChipRow({ items, selected, onSelect }: { items: string[]; selected: string; onSelect: (v: string) => void }) {
  return (
    <div className="bg-white border-b border-[#eef0f3]">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 pb-3 pt-1">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-semibold font-['Source_Sans_3',sans-serif] tracking-[0.2px] transition-colors border whitespace-nowrap ${
              selected === item
                ? 'bg-[#1a3178] text-white border-[#1a3178]'
                : 'bg-white text-[#1a3178] border-[#c1c7ce] hover:border-[#1a3178]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

// Obituary List Item Component
function ObituaryListItem({ 
  name, 
  age,
  city,
  county,
  dateOfDeath,
  imageUrl
}: { 
  name: string; 
  age: number;
  city: string;
  county: string;
  dateOfDeath: string;
  imageUrl?: string;
}) {
  return (
    <Link to="/obituaries/1" className="block hover:bg-white transition-colors">
      <div className="flex gap-4 items-start pb-4 pt-4 px-4 border-b border-[#e5e7eb]">
        <div className="h-[100px] shrink-0 w-[100px] overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0]">
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="font-['Source_Sans_3',sans-serif] font-bold leading-[20px] text-[#111827] text-[16px]">
            {name}
          </div>
          <div className="font-['Source_Sans_3',sans-serif] font-semibold text-[#6b7280] text-[13px]">
            Age {age}
          </div>
          <div className="font-['Source_Sans_3',sans-serif] font-normal text-[#6b7280] text-[12px]">
            {city}, {county} County
          </div>
          <div className="font-['Source_Sans_3',sans-serif] font-normal text-[#9ca3af] text-[11px] pt-1">
            {dateOfDeath}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Main Component
export function ObituariesContent() {
  const [selectedTime, setSelectedTime] = useState('Day');
  const [selectedCounty, setSelectedCounty] = useState('All');

  return (
    <div className="bg-white w-full pb-24">
      <ChipRow items={TIME_FILTERS} selected={selectedTime} onSelect={setSelectedTime} />
      <ChipRow items={COUNTY_FILTERS} selected={selectedCounty} onSelect={setSelectedCounty} />
      
      {/* Obituary List with Ads */}
      <div>
        {mockObituaries.map((obit, index) => (
          <div key={obit.id}>
            <ObituaryListItem
              name={obit.name}
              age={obit.age}
              city={obit.city}
              county={obit.county}
              dateOfDeath={obit.dateOfDeath}
              imageUrl={obit.imageUrl}
            />
            {/* Insert Medium Rectangle Ad after every 5th obituary (index 4, 9, etc.) */}
            {(index + 1) % 5 === 0 && (
              <div className="py-4">
                <BannerAd 
                  adUnit={adConfig.adUnits.obituariesInline}
                  size={adSizes.mediumRectangle}
                  label="Sponsored"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}