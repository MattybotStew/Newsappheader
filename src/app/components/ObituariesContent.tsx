import { useState } from 'react';
import { Link } from 'react-router';
import placeholderImage from 'figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png';
import { BannerAd } from './ads/BannerAd';
import { adConfig, adSizes } from '../config/adConfig';

// County Filter Component
function CountyFilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCounties, setSelectedCounties] = useState<string[]>([]);

  const counties = [
    'Banks', 'Barrow', 'Clarke', 'Dawson', 'DeKalb', 'Fannin', 
    'Forsyth', 'Franklin', 'Fulton', 'Gwinnett', 'Habersham',
    'Hall', 'Jackson', 'Lumpkin', 'Madison', 'Oconee', 'Rabun',
    'Stephens', 'Towns', 'Union', 'White', 'Other'
  ];

  const toggleCounty = (county: string) => {
    if (selectedCounties.includes(county)) {
      setSelectedCounties(selectedCounties.filter(c => c !== county));
    } else {
      setSelectedCounties([...selectedCounties, county]);
    }
  };

  const clearFilters = () => {
    setSelectedCounties([]);
  };

  return (
    <div className="px-4 py-3 bg-white border-b border-[#c1c7ce]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="font-['Roboto:Bold',sans-serif] font-bold text-[#1a56a4] text-[20px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            Filter by County
          </div>
        </div>
        <svg 
          className={`size-6 text-[#1a56a4] transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-3">
          {/* Clear Filters CTA */}
          <div className="mb-3 px-2">
            <button
              onClick={clearFilters}
              disabled={selectedCounties.length === 0}
              className={`w-full py-3 px-4 rounded-lg font-['Roboto:Bold',sans-serif] font-bold text-[16px] transition-colors ${
                selectedCounties.length > 0
                  ? 'bg-[#1976d2] text-white hover:bg-[#1565c0]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Clear Filters {selectedCounties.length > 0 && `(${selectedCounties.length})`}
            </button>
          </div>

          {/* County List */}
          <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#1a56a4] scrollbar-track-gray-200">
            <div className="space-y-2">
              {counties.map((county) => (
                <button
                  key={county}
                  onClick={() => toggleCounty(county)}
                  className={`w-full flex items-center gap-3 p-3 rounded hover:bg-gray-50 transition-colors ${
                    selectedCounties.includes(county) ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className={`size-6 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedCounties.includes(county) 
                      ? 'bg-[#1976d2] border-[#1976d2]' 
                      : 'bg-white border-[#6b7178]'
                  }`}>
                    {selectedCounties.includes(county) && (
                      <svg className="size-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="font-['Roboto:Medium',sans-serif] font-medium text-[#1a1c1e] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {county}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Time Filter Component
function TimeFilter() {
  const [selectedFilter, setSelectedFilter] = useState('Day');

  const filters = ['Day', 'Week', 'Month'];

  return (
    <div className="px-4 py-3 bg-white border-b border-[#c1c7ce]">
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedFilter === filter
                ? 'bg-[#1976d2] text-white'
                : 'bg-[#e8eef5] text-[#41484d] hover:bg-[#d9e3f0]'
            }`}
          >
            <span className="font-['Roboto:Medium',sans-serif] font-medium text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {filter}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Obituary List Item Component
function ObituaryListItem({ 
  name, 
  lifespan, 
  location,
  date 
}: { 
  name: string; 
  lifespan: string; 
  location: string;
  date: string;
}) {
  return (
    <Link to="/obituaries/1" className="block hover:bg-white transition-colors">
      <div className="flex gap-4 items-start pb-4 pt-4 px-4 border-b border-[#c1c7ce]">
        <div className="h-[100px] rounded-xl shrink-0 w-[100px] overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0]">
          <img
            src={placeholderImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#1a1c1e] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {name}
          </div>
          <div className="font-['Roboto:Medium',sans-serif] font-medium text-[#41484d] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {lifespan}
          </div>
          <div className="font-['Roboto:Regular',sans-serif] font-normal text-[#41484d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {location}
          </div>
          <div className="font-['Roboto:Regular',sans-serif] font-normal text-[#6b7178] text-[11px] pt-1" style={{ fontVariationSettings: "'wdth' 100" }}>
            {date}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Main Component
export function ObituariesContent() {
  const obituaries = [
    { name: "Robert James Anderson", lifespan: "1945 - 2026", location: "Gainesville, Georgia", date: "March 3, 2026" },
    { name: "Mary Elizabeth Thompson", lifespan: "1952 - 2026", location: "Flowery Branch, Georgia", date: "March 2, 2026" },
    { name: "William David Harrison", lifespan: "1938 - 2026", location: "Oakwood, Georgia", date: "March 2, 2026" },
    { name: "Patricia Ann Wilson", lifespan: "1960 - 2026", location: "Buford, Georgia", date: "March 1, 2026" },
    { name: "Charles Edward Brown", lifespan: "1942 - 2026", location: "Braselton, Georgia", date: "March 1, 2026" },
    { name: "Dorothy Mae Collins", lifespan: "1947 - 2026", location: "Gainesville, Georgia", date: "February 29, 2026" },
    { name: "James Michael Davis", lifespan: "1955 - 2026", location: "Hoschton, Georgia", date: "February 28, 2026" },
    { name: "Linda Sue Johnson", lifespan: "1950 - 2026", location: "Clermont, Georgia", date: "February 28, 2026" },
    { name: "George Franklin Miller", lifespan: "1940 - 2026", location: "Flowery Branch, Georgia", date: "February 27, 2026" },
    { name: "Barbara Jean Taylor", lifespan: "1948 - 2026", location: "Oakwood, Georgia", date: "February 27, 2026" },
  ];

  return (
    <div className="bg-[#f8f9fa] w-full pb-24">
      {/* County Filter */}
      <CountyFilter />
      
      {/* Time Filter */}
      <TimeFilter />
      
      {/* Obituary List with Ads */}
      <div>
        {obituaries.map((obit, index) => (
          <div key={index}>
            <ObituaryListItem
              name={obit.name}
              lifespan={obit.lifespan}
              location={obit.location}
              date={obit.date}
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