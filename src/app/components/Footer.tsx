import { Link, useLocation } from 'react-router';
import svgPaths from "../../imports/svg-hj5gf2bhjc";

interface NavButtonProps {
  label: string;
  path: string;
  svgPath: string;
  isActive: boolean;
}

function NavButton({ label, path, svgPath, isActive }: NavButtonProps) {
  return (
    <Link to={path} className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-end pb-[4px] pt-[20px] relative w-full">
        {isActive ? (
          <div className="bg-[#d6e4f7] content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPath} fill="#00306E" />
                </g>
              </svg>
            </div>
          </div>
        ) : (
          <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  {label === 'Podcasts' ? (
                    <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5V11C13 11.55 12.55 12 12 12C11.45 12 11 11.55 11 11V5ZM17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11H5C5 14.53 7.61 17.43 11 17.92V21H13V17.92C16.39 17.43 19 14.53 19 11H17Z" fill="#41484D" />
                  ) : (
                    <path d={svgPath} fill="#41484D" />
                  )}
                </g>
              </svg>
            </div>
          </div>
        )}
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <div className={`flex flex-col justify-center leading-[0] relative shrink-0 text-[11px] text-center tracking-[0.3px] whitespace-nowrap ${
            isActive 
              ? "font-['Roboto:Bold',sans-serif] font-bold text-[#00306e]"
              : "font-['Roboto:Medium',sans-serif] font-medium text-[#41484d]"
          }`} style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">{label}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Footer() {
  const location = useLocation();
  
  const tabs = [
    { label: 'News', path: '/', svgPath: svgPaths.p8a20700 },
    { label: 'Sports', path: '/sports', svgPath: svgPaths.p35ce4700 },
    { label: 'Obits', path: '/obituaries', svgPath: svgPaths.p16e91500 },
    { label: 'Weather', path: '/weather', svgPath: svgPaths.p28f79600 },
    { label: 'Radio', path: '/radio', svgPath: svgPaths.p28b71800 },
    { label: 'Podcasts', path: '/podcasts', svgPath: '' },
  ];

  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-start justify-center pb-[8px] pt-px relative w-full shrink-0" data-name="Nav - M3 NAVIGATION BAR">
      <div aria-hidden="true" className="absolute border-[#c1c7ce] border-solid border-t inset-0 pointer-events-none shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.08)]" />
      {tabs.map((tab) => (
        <NavButton
          key={tab.label}
          label={tab.label}
          path={tab.path}
          svgPath={tab.svgPath}
          isActive={location.pathname === tab.path}
        />
      ))}
    </div>
  );
}
