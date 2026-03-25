import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BannerAd } from './ads/BannerAd';
import { adConfig, adSizes } from '../config/adConfig';
import { obituaries as mockObituaries } from '../data/mockArticles';

const TIME_FILTERS = ['Day', 'Week', 'Month'];
const COUNTIES = ['All', 'Banks', 'Barrow', 'Clarke', 'Dawson', 'DeKalb', 'Fannin',
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

function CountyDropdown({ selected, onSelect }: { selected: string; onSelect: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative bg-white border-b border-[#eef0f3]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#f8f9fa] transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-[0.7px] uppercase text-[#9ca3af] font-['Source_Sans_3',sans-serif]">County</span>
          {selected !== 'All' && (
            <span className="bg-[#1a3178] text-white text-[11px] font-semibold font-['Source_Sans_3',sans-serif] px-2 py-0.5 rounded-full">{selected}</span>
          )}
        </div>
        <svg viewBox="0 0 24 24" fill="none" className={`size-4 text-[#9ca3af] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 z-40 bg-white border-b border-[#eef0f3] shadow-lg max-h-[240px] overflow-y-auto">
            {COUNTIES.map((county) => (
              <button
                key={county}
                onClick={() => { onSelect(county); setOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-[#f8f9fa] transition-colors border-b border-[#f3f4f6] last:border-0 ${selected === county ? 'bg-[#f0f4ff]' : ''}`}
              >
                <span className={`text-[13px] font-['Source_Sans_3',sans-serif] ${selected === county ? 'font-bold text-[#1a3178]' : 'font-normal text-[#374151]'}`}>
                  {county}
                </span>
                {selected === county && (
                  <svg viewBox="0 0 24 24" fill="none" className="size-4 text-[#1a3178] shrink-0">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} stroke="currentColor" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
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
      <CountyDropdown selected={selectedCounty} onSelect={setSelectedCounty} />
      
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