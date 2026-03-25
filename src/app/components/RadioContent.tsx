import { Link } from 'react-router';
import wdunAmLogo from '../../assets/wdun-am-550.png';
import wdunFmLogo from '../../assets/wdun-fm-102.png';
import lakeLogo from '../../assets/the-lake-94.png';

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
    tagline: "North Georgia's News Station",
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
      <div className="bg-white border-b border-[#e8eaed] hover:bg-[#f8f9fa] transition-colors">
        <div className="flex gap-3 px-4 py-3 items-center">
          <div className="size-[96px] shrink-0 overflow-hidden rounded-[4px] bg-[#f0f0f0] flex items-center justify-center">
            <img
              src={station.logoUrl}
              alt={station.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['Source_Sans_3',sans-serif] font-bold text-[17px] text-[#1a3178] mb-0.5 leading-snug">
              {station.name}
            </p>
            <p className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#41484d] mb-1.5">
              {station.tagline}
            </p>
            <div className="flex items-center gap-2 text-[#6b7178]">
              <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[13px] text-[#41484d]">
                {station.frequency}
              </span>
              <span>·</span>
              <span className="font-['Source_Sans_3',sans-serif] text-[13px]">
                {station.genre}
              </span>
            </div>
          </div>
          <svg viewBox="0 0 24 24" fill="none" className="size-5 text-[#c1c7ce] shrink-0">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function RadioContent() {
  return (
    <div className="bg-white w-full pb-[200px]">
      <div className="px-4 pt-5 pb-4 border-b border-[#e8eaed]">
        <h1 className="font-['Source_Sans_3',sans-serif] font-bold text-[24px] text-[#1a1c1e] mb-0.5">
          Radio
        </h1>
        <p className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#6b7178]">
          Listen to your favorite local stations
        </p>
      </div>
      <div>
        {stations.map((station) => (
          <RadioStationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
}
