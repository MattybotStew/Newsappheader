import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BannerAd } from './ads/BannerAd';
import { adConfig, adSizes } from '../config/adConfig';
import { obituaries as mockObituaries } from '../data/mockArticles';

const COUNTIES = ['All', 'Banks', 'Barrow', 'Clarke', 'Dawson', 'DeKalb', 'Fannin',
  'Forsyth', 'Franklin', 'Fulton', 'Gwinnett', 'Habersham',
  'Hall', 'Jackson', 'Lumpkin', 'Madison', 'Oconee', 'Rabun',
  'Stephens', 'Towns', 'Union', 'White', 'Other'];

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

function CountyDropdown({ selected, onSelect }: { selected: string; onSelect: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const isFiltered = selected !== 'All';
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
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-['Source_Sans_3',sans-serif]">
              Active
            </span>
          )}
          <svg viewBox="0 0 24 24" fill="none" className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${isFiltered ? 'text-white' : 'text-[#1a3178]'}`}>
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
          </svg>
        </div>
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
          <div className="font-['Source_Sans_3',sans-serif] font-bold leading-[20px] text-[#1a3178] text-[16px]">
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('All');

  const filteredObituaries = mockObituaries.filter(obit => {
    const matchesCounty = selectedCounty === 'All' || obit.county === selectedCounty;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || obit.name.toLowerCase().includes(q) || obit.city.toLowerCase().includes(q);
    return matchesCounty && matchesSearch;
  });

  return (
    <div className="bg-white w-full pb-[200px]">
      <CountyDropdown selected={selectedCounty} onSelect={setSelectedCounty} />
      <ObituarySearch value={searchQuery} onChange={setSearchQuery} />
      
      {/* Obituary List with Ads */}
      <div>
        {filteredObituaries.map((obit, index) => (
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