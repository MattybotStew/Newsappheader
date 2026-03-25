import { Link, useLocation } from 'react-router';
import newsIcon from '../../assets/material-symbols_breaking-news-alt-1-outline.svg';
import sportsIcon from '../../assets/material-symbols_sports-football-outline.svg';
import obitsIcon from '../../assets/material-symbols_person-book-outline.svg';
import weatherIcon from '../../assets/material-symbols_weather-hail-outline.svg';
import radioIcon from '../../assets/material-symbols_radio-outline.svg';
import podcastsIcon from '../../assets/material-symbols_podcasts-rounded.svg';

interface NavButtonProps {
  label: string;
  path: string;
  icon: string;
  isActive: boolean;
}

function NavButton({ label, path, icon, isActive }: NavButtonProps) {
  return (
    <Link to={path} className="flex-[1_0_0] flex flex-col justify-end items-center px-[4px] gap-[1px] h-[50px]">
      <div className={`flex h-[32px] w-full items-center justify-center rounded-[100px] ${isActive ? 'bg-black/25' : ''}`}>
        <img src={icon} alt={label} className={`size-[24px] shrink-0 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
      </div>
      <p className={`font-['Source_Sans_3',sans-serif] text-[11px] text-center tracking-[0.3px] leading-[16px] whitespace-nowrap ${isActive ? 'font-bold text-white' : 'font-semibold text-white/60'}`}>
        {label}
      </p>
    </Link>
  );
}

export function Footer() {
  const location = useLocation();

  const tabs = [
    { label: 'News', path: '/', icon: newsIcon },
    { label: 'Sports', path: '/sports', icon: sportsIcon },
    { label: 'Obits', path: '/obituaries', icon: obitsIcon },
    { label: 'Weather', path: '/weather', icon: weatherIcon },
    { label: 'Radio', path: '/radio', icon: radioIcon },
    { label: 'Podcasts', path: '/podcasts', icon: podcastsIcon },
  ];

  return (
    <div className="bg-[#1a3178] content-stretch flex items-start justify-center px-[4px] pt-[6px] pb-[calc(6px+env(safe-area-inset-bottom,0px))] fixed bottom-0 left-0 right-0 z-50 w-full" data-name="Nav - M3 NAVIGATION BAR">
      <div aria-hidden="true" className="absolute border-[#011843] border-solid border-t inset-0 pointer-events-none shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.3)]" />
      {tabs.map((tab) => (
        <NavButton
          key={tab.label}
          label={tab.label}
          path={tab.path}
          icon={tab.icon}
          isActive={location.pathname === tab.path}
        />
      ))}
    </div>
  );
}