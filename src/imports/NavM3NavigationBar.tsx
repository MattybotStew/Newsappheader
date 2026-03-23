import svgPaths from "./svg-hj5gf2bhjc";

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p2528e580} fill="var(--fill-0, #00306E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d6e4f7] content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]" data-name="Background">
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00306e] text-[11px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function ButtonHomeActive() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button - Home (active)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-end pb-[4px] pt-[20px] relative w-full">
        <Background />
        <Container />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p8a20700} fill="var(--fill-0, #41484D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]" data-name="Container">
      <Svg1 />
      <div className="absolute bg-[#c62828] right-[8px] rounded-[4px] size-[8px] top-[3px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#f8f9fa] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[11px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">News</p>
      </div>
    </div>
  );
}

function ButtonNews() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button - News">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-end pb-[4px] pt-[20px] relative w-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p35ce4700} fill="var(--fill-0, #41484D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[11px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Sports</p>
      </div>
    </div>
  );
}

function ButtonSports() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button - Sports">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-end pb-[4px] pt-[20px] relative w-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p28f79600} fill="var(--fill-0, #41484D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[11px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Weather</p>
      </div>
    </div>
  );
}

function ButtonWeather() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button - Weather">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-end pb-[4px] pt-[20px] relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p28b71800} fill="var(--fill-0, #41484D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[11px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Radio</p>
      </div>
    </div>
  );
}

function ButtonRadio() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button - Radio">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-end pb-[4px] pt-[20px] relative w-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p16e91500} fill="var(--fill-0, #41484D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[100px] shrink-0 w-[64px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[11px] text-center tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Obits</p>
      </div>
    </div>
  );
}

function ButtonObituaries() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button - Obituaries">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-end pb-[4px] pt-[20px] relative w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

export default function NavM3NavigationBar() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-start justify-center pb-[8px] pt-px relative size-full" data-name="Nav - M3 NAVIGATION BAR">
      <div aria-hidden="true" className="absolute border-[#c1c7ce] border-solid border-t inset-0 pointer-events-none shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.08)]" />
      <ButtonHomeActive />
      <ButtonNews />
      <ButtonSports />
      <ButtonWeather />
      <ButtonRadio />
      <ButtonObituaries />
    </div>
  );
}