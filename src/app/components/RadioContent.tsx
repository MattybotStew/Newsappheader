import { Link } from 'react-router';
import { Radio as RadioIcon } from 'lucide-react';
import wdunAmLogo from '../../assets/radio-image-1.png';
import wdunFmLogo from '../../assets/radio-image-2.png';
import lakeLogo from '../../assets/radio-image-3.png';

interface RadioStation {
  id: string;
  name: string;
  frequency: string;
  tagline: string;
  genre: string;
  logoUrl: string;
}

const stations: RadioStation[] = [
  {
    id: 'wdun-am',
    name: 'WDUN AM 550',
    frequency: 'AM 550',
    tagline: 'News Talk 550',
    genre: 'News & Talk',
    logoUrl: wdunAmLogo,
  },
  {
    id: 'wdun-fm',
    name: 'WDUN FM 102.9',
    frequency: 'FM 102.9',
    tagline: 'North Georgia\'s News Station',
    genre: 'News & Information',
    logoUrl: wdunFmLogo,
  },
  {
    id: 'the-lake',
    name: '94.5 The Lake',
    frequency: 'FM 94.5',
    tagline: 'Classic Hits',
    genre: 'Classic Rock',
    logoUrl: lakeLogo,
  },
];

function RadioStationCard({ station }: { station: RadioStation }) {
  return (
    <Link to={`/radio/${station.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-[#c1c7ce] overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex gap-3 p-3">
          {/* Thumbnail - matching podcast size (96px) */}
          <div className="size-24 shrink-0 overflow-hidden bg-white flex items-center justify-center">
            <img 
              src={station.logoUrl} 
              alt={station.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] mb-1 line-clamp-2 text-[#333399]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {station.name}
            </h3>
            <p className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#1976d2] mb-2 line-clamp-1" style={{ fontVariationSettings: "'wdth' 100" }}>
              {station.tagline}
            </p>
            <div className="flex items-center gap-3">
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[13px] text-[#41484d]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {station.frequency}
              </span>
              <span className="text-[#6b7178]">•</span>
              <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7178]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {station.genre}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function RadioContent() {
  return (
    <div className="bg-[#f8f9fa] w-full pb-24">
      {/* Page Header */}
      <div className="px-4 pt-5 pb-4 bg-white border-b border-[#c1c7ce]">
        <h1 className="font-['Roboto:Bold',sans-serif] font-bold text-[24px] mb-1 text-[#333399]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Radio
        </h1>
        <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#41484d]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Listen to your favorite local stations
        </p>
      </div>

      <div className="px-4 py-4 space-y-3">
        {stations.map((station) => (
          <RadioStationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
}