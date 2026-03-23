import svgPaths from "./svg-6bngkawl5e";

function SvgMountainWaveLogoMarkPlaceholder() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="SVG - Mountain / wave logo mark placeholder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG - Mountain / wave logo mark placeholder">
          <path d={svgPaths.p2331ea80} fill="var(--fill-0, #1A56A4)" id="Vector" />
          <path d={svgPaths.p2c748980} id="Vector_2" stroke="var(--stroke-0, #1A56A4)" strokeWidth="1.65" />
        </g>
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
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="leading-[normal]">access</span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
            WDUN
          </span>
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
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px]" data-name="Button - Search">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p21ef2200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNotifications() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px]" data-name="Button - Notifications">
      <Svg1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <ButtonSearch />
      <ButtonNotifications />
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
      <div className="bg-[#ff5252] rounded-[3px] shrink-0 size-[6px]" data-name="Background" />
      <Background1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">News Talk 550 WDUN</p>
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
          <path d={svgPaths.p3c11d380} fill="var(--fill-0, #1A56A4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] h-[28px] items-center px-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <Svg2 />
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[12px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Listen</p>
      </div>
    </div>
  );
}

function LiveRadioBar() {
  return (
    <div className="bg-[rgba(255,255,255,0.13)] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Live radio bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[10px] relative size-full">
          <Container4 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="bg-[#1a56a4] content-stretch flex flex-col gap-[2px] h-[104px] items-start pb-[10px] px-[16px] relative shrink-0 w-[390px] z-[1]" data-name="TOP APP BAR">
      <Container />
      <LiveRadioBar />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full">
      <TopAppBar />
    </div>
  );
}