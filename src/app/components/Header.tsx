import { useState } from 'react';
import { Link } from 'react-router';
import svgPaths from "../../imports/svg-6bngkawl5e";
import placeholderImage from 'figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png';

function SvgMountainWaveLogoMarkPlaceholder() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="SVG - Mountain / wave logo mark placeholder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG - Mountain / wave logo mark placeholder">
          <path d={svgPaths.p2331ea80} fill="url(#logoGradient)" id="Vector" />
          <path d={svgPaths.p2c748980} id="Vector_2" stroke="url(#logoGradient)" strokeWidth="1.65" />
        </g>
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[34px]" data-name="Background">
      <SvgMountainWaveLogoMarkPlaceholder />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-baseline font-['Source_Sans_3',sans-serif] leading-[0] relative shrink-0 text-[22px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p>
          <span className="font-normal leading-[normal]">access</span>
          <span className="font-bold leading-[normal]">WDUN</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Container2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3696db80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSearch() {
  return (
    <Link 
      to="/search"
      className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px] hover:bg-white/10 transition-colors" 
      data-name="Button - Search"
    >
      <Svg />
    </Link>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <ButtonSearch />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#c62828] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[100px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[9px] text-white tracking-[0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">LIVE</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#ff5252] rounded-[3px] shrink-0 size-[6px] animate-pulse" data-name="Background" />
      <Background1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">WDUN AM 550</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p3c11d380} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PauseIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Pause">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d="M4 2H6 12H4V2ZM8 2H10V12H8V2Z" fill="white" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg className="size-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="size-4 text-[#1a56a4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function Button({ isPlaying, onToggle }: { isPlaying: boolean; onToggle: () => void }) {
  return (
    <button 
      onClick={onToggle}
      className="bg-[#22c55e] content-stretch flex gap-[5px] h-[28px] items-center px-[14px] relative rounded-[100px] shrink-0 hover:bg-[#16a34a] transition-colors active:scale-95" 
      data-name="Button"
    >
      {isPlaying ? <PauseIcon /> : <Svg2 />}
      <div className="flex flex-col font-['Source_Sans_3',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-white text-[12px] text-center tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[normal]">{isPlaying ? 'Pause' : 'Listen'}</p>
      </div>
    </button>
  );
}

function LiveRadioBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const stations = [
    { name: 'WDUN AM 550', current: true },
    { name: 'WDUN FM 102.9', current: false },
    { name: '94.5FM THE LAKE', current: false }
  ];

  return (
    <div className="relative w-full">
      <div className="bg-[rgba(255,255,255,0.13)] h-[40px] rounded-[8px] w-full" data-name="Live radio bar">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pl-[12px] pr-[10px] relative size-full">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Container4 />
            </button>
            <div className="flex items-center gap-2">
              <Button isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="hover:opacity-80 transition-opacity"
              >
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsExpanded(false)}
          />
          <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-[#c1c7ce]">
            <div className="bg-[#1a56a4] px-4 py-3 flex items-center justify-between">
              <div className="font-['Roboto:Bold',sans-serif] font-bold text-white text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                LISTEN LIVE
              </div>
              <ChevronDown />
            </div>
            <div className="divide-y divide-gray-200">
              {stations.map((station, index) => (
                <button
                  key={index}
                  onClick={() => setIsExpanded(false)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[#1a56a4] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {station.name}
                  </div>
                  <ChevronRight />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function Header() {
  return (
    <div className="bg-[#1a3178] content-stretch flex flex-col gap-[2px] items-start pb-[10px] px-[16px] pt-[10px] sticky top-0 z-50 shrink-0 w-full" data-name="TOP APP BAR">
      <Container />
      <LiveRadioBar />
    </div>
  );
}