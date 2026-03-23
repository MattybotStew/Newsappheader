import svgPaths from "./svg-dc1mc847kk";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`Today's Headlines`}</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p37597280} fill="var(--fill-0, #1A56A4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">See all</p>
      </div>
      <Svg />
    </div>
  );
}

function TodaysHeadlines() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[8px] pt-[18px] px-[16px] right-0 top-0" data-name="TODAY\'S HEADLINES">
      <Container />
      <Link />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1a56a000} fill="var(--fill-0, #00306E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#d6e4f7] content-stretch flex gap-[4px] h-[32px] items-center left-[16px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Svg1 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00306e] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">All</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[82.42px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Local</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[145.52px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">National</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[224.58px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Politics</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[298.59px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Business</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[381.55px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Real Estate</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[475.89px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Food Inspections</p>
      </div>
    </div>
  );
}

function NewsFilterChipsMatchesWebsiteCategories() {
  return (
    <div className="absolute h-[46px] left-0 overflow-auto right-0 top-[40px]" data-name="News filter chips — matches website categories">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.45)] content-stretch flex flex-col items-start px-[13px] py-[6px] relative rounded-[8px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(26,86,164,0.35)] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(26,86,164,0.5)] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">{`HERO IMAGE   358 × 216 px`}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Background" style={{ backgroundImage: "linear-gradient(145deg, rgb(184, 208, 238) 0%, rgb(143, 184, 226) 100%)" }}>
      <OverlayBorder />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1a56a4] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[9px] text-white tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Local</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.705px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[20.48px] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Hall County Sheriff's deputy arrested on DUI`}</p>
        <p>charges Friday evening on GA-365</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.72)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Steve Winslow</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.72)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">·</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.72)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">2 hours ago</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-[-2.17px] content-stretch flex flex-col gap-[5.2px] items-start left-0 p-[14px] right-0" data-name="Container">
      <Background1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function HeroArticle() {
  return (
    <div className="absolute bg-[#dde3ea] h-[216px] left-[16px] overflow-clip right-[16px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] top-[86px]" data-name="Hero article">
      <Background />
      <div className="absolute bg-gradient-to-b from-[40%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.78)]" data-name="Gradient" />
      <Container1 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(26,86,164,0.3)] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(26,86,164,0.55)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">IMG</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="h-[68px] relative rounded-[12px] shrink-0 w-[80px]" data-name="Background" style={{ backgroundImage: "linear-gradient(145deg, rgb(184, 208, 238) 0%, rgb(143, 184, 226) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <OverlayBorder1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[10px] tracking-[0.7px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">National</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[37.78px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[38px] justify-center leading-[18.9px] left-0 text-[#1a1c1e] text-[14px] top-[18.44px] w-[255.55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Jury to potentially decide on 27 charges</p>
        <p>against father of alleged Apalachee HS…</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484d] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`Will Daughtry  ·  9:17 AM`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Container8 />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function ArticleList() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 pb-[11px] pt-[10px] px-[16px] right-0 top-[312px]" data-name="Article list">
      <div aria-hidden="true" className="absolute border-[#c1c7ce] border-b border-solid inset-0 pointer-events-none" />
      <Background2 />
      <Container7 />
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(26,86,164,0.3)] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(26,86,164,0.55)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">IMG</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="h-[68px] relative rounded-[12px] shrink-0 w-[80px]" data-name="Background" style={{ backgroundImage: "linear-gradient(145deg, rgb(184, 208, 238) 0%, rgb(143, 184, 226) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <OverlayBorder2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[10px] tracking-[0.7px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Politics</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[37.78px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[38px] justify-center leading-[18.9px] left-0 text-[#1a1c1e] text-[14px] top-[18.44px] w-[261.57px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">District 50 State Senator Bo Hatchett</p>
        <p>qualifies for re-election in 2026 primaries</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484d] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`Steve Winslow  ·  8:56 AM`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Container12 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 pb-[11px] pt-[10px] px-[16px] right-0 top-[401px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c1c7ce] border-b border-solid inset-0 pointer-events-none" />
      <Background3 />
      <Container11 />
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(26,86,164,0.3)] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(26,86,164,0.55)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">IMG</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="h-[68px] relative rounded-[12px] shrink-0 w-[80px]" data-name="Background" style={{ backgroundImage: "linear-gradient(145deg, rgb(184, 208, 238) 0%, rgb(143, 184, 226) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <OverlayBorder3 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[10px] tracking-[0.7px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Local</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[37.78px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[38px] justify-center leading-[18.9px] left-0 text-[#1a1c1e] text-[14px] top-[18.44px] w-[232.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Suspect arrested following Hoschton</p>
        <p>residential fire Thursday night</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484d] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`AccessWDUN Staff  ·  7:42 AM`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Container16 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 pb-[11px] pt-[10px] px-[16px] right-0 top-[490px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c1c7ce] border-b border-solid inset-0 pointer-events-none" />
      <Background4 />
      <Container15 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Sports</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p37597280} fill="var(--fill-0, #1A56A4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">See all</p>
      </div>
      <Svg2 />
    </div>
  );
}

function Sports() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[8px] pt-[18px] px-[16px] right-0 top-[595px]" data-name="SPORTS">
      <Container19 />
      <Link1 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1a56a000} fill="var(--fill-0, #00306E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#d6e4f7] content-stretch flex gap-[4px] h-[32px] items-center left-[16px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Svg3 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00306e] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">All Sports</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[121.23px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">High School</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[220.14px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Fri Game Night</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[334.44px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Bulldogs</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[415.36px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Falcons</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[491.23px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Braves</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[561.7px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Hawks</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[632.03px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">United</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[700.81px] px-[13px] py-px rounded-[100px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">NASCAR</p>
      </div>
    </div>
  );
}

function SportsFilterChipsMatchesWebsiteSubcategories() {
  return (
    <div className="absolute h-[46px] left-0 overflow-auto right-0 top-[635px]" data-name="Sports filter chips — matches website subcategories">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.92)] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Jefferson Dragons</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[30px] pl-[19.19px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-right text-white whitespace-nowrap">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-between py-[3px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.92)] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Sandy Creek Patriots</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[30px] pl-[8.39px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-right text-white whitespace-nowrap">
        <p className="leading-[normal]">27</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between py-[3px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.45)] tracking-[0.8px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`Boys Varsity Football  ·  Final`}</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container21 />
      <div className="bg-[rgba(255,255,255,0.15)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
      <Container24 />
      <Container27 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#1565c0] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[7px] text-white tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">ScoreStream</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pf59b470} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex items-center justify-center relative rounded-[11px] shrink-0 size-[22px]" data-name="Button">
      <Svg4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p33008e00} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex items-center justify-center relative rounded-[11px] shrink-0 size-[22px]" data-name="Button">
      <Svg5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background5 />
      <Container29 />
    </div>
  );
}

function ScoreStreamWidget() {
  return (
    <div className="absolute bg-[#0d1b2a] content-stretch flex gap-[14px] items-center left-[16px] p-[14px] right-[16px] rounded-[16px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.08)] top-[685px]" data-name="ScoreStream widget">
      <Container20 />
      <Container28 />
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(26,86,164,0.3)] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(26,86,164,0.55)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">IMG</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="h-[68px] relative rounded-[12px] shrink-0 w-[80px]" data-name="Background" style={{ backgroundImage: "linear-gradient(145deg, rgb(184, 208, 238) 0%, rgb(143, 184, 226) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <OverlayBorder4 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[10px] tracking-[0.7px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">NFL · Falcons</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[37.78px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[38px] justify-center leading-[18.9px] left-0 text-[#1a1c1e] text-[14px] top-[18.44px] w-[253.57px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Falcons dismiss assistant defensive line</p>
        <p>coach LaTroy Lewis after one season</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484d] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`AP  ·  FLOWERY BRANCH, Ga.`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Container31 />
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 pb-[11px] pt-[10px] px-[16px] right-0 top-[804px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c1c7ce] border-b border-solid inset-0 pointer-events-none" />
      <Background6 />
      <Container30 />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(26,86,164,0.3)] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(26,86,164,0.55)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">IMG</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="h-[68px] relative rounded-[12px] shrink-0 w-[80px]" data-name="Background" style={{ backgroundImage: "linear-gradient(145deg, rgb(184, 208, 238) 0%, rgb(143, 184, 226) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <OverlayBorder5 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[10px] tracking-[0.7px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">High School</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[37.78px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[38px] justify-center leading-[18.9px] left-0 text-[#1a1c1e] text-[14px] top-[18.44px] w-[257.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Friday Game Night: Week 14 local scores</p>
        <p>and highlights roundup</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484d] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`AccessWDUN Sports  ·  Yesterday`}</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Container35 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 pb-[11px] pt-[10px] px-[16px] right-0 top-[893px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c1c7ce] border-b border-solid inset-0 pointer-events-none" />
      <Background7 />
      <Container34 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Weather</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p37597280} fill="var(--fill-0, #1A56A4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Full forecast</p>
      </div>
      <Svg6 />
    </div>
  );
}

function Weather() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[8px] pt-[18px] px-[16px] right-0 top-[998px]" data-name="WEATHER">
      <Container38 />
      <Link2 />
    </div>
  );
}

function SvgPartlyCloudyIcon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="SVG - Partly cloudy icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="SVG - Partly cloudy icon">
          <path d={svgPaths.p3598ab0} fill="var(--fill-0, #FDD835)" id="Vector" opacity="0.9" />
          <path d={svgPaths.pe46b280} fill="var(--fill-0, white)" id="Vector_2" opacity="0.9" />
          <path d={svgPaths.p2059d780} fill="var(--fill-0, white)" id="Vector_3" opacity="0.95" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <SvgPartlyCloudyIcon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[36px] leading-[0] relative shrink-0 text-white tracking-[-1px] w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:ExtraLight',sans-serif] font-extralight h-[36px] justify-center left-0 text-[36px] top-[18px] w-[51.369px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">51°</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[18px] justify-center left-[50.55px] text-[18px] top-[23.5px] w-[9.349px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">F</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.88)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Overcast Clouds</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p4b2e871} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg7 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Gainesville, GA</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-h-px min-w-px relative" data-name="Container">
      <Paragraph />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="leading-[15.4px]">{`H `}</span>
          <span className="leading-[15.4px] text-[rgba(255,255,255,0.78)]">{`49° / `}</span>
          <span className="leading-[15.4px]">{`L `}</span>
          <span className="leading-[15.4px] text-[rgba(255,255,255,0.78)]">46°</span>
        </p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="leading-[15.4px]">{`Wind `}</span>
          <span className="leading-[15.4px] text-[rgba(255,255,255,0.78)]">9 mph E</span>
        </p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="leading-[15.4px]">{`Humidity `}</span>
          <span className="leading-[15.4px] text-[rgba(255,255,255,0.78)]">78%</span>
        </p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>
          <span className="leading-[15.4px]">{`Precip `}</span>
          <span className="leading-[15.4px] text-[rgba(255,255,255,0.78)]">0 in</span>
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-[3px] relative shrink-0 w-[68px]" data-name="Container">
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[16px] p-[16px] right-[16px] rounded-[16px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.08)] top-[1042px]" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(134.345deg, rgb(21, 101, 192) 0%, rgb(13, 71, 161) 100%)" }}>
      <Container39 />
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`Radio & Podcasts`}</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p37597280} fill="var(--fill-0, #1A56A4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a56a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">All stations</p>
      </div>
      <Svg8 />
    </div>
  );
}

function RadioPodcasts() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[8px] pt-[18px] px-[16px] right-0 top-[1165.56px]" data-name="RADIO & PODCASTS">
      <Container48 />
      <Link3 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="SVG">
          <path d={svgPaths.p2d979700} fill="var(--fill-0, white)" fillOpacity="0.85" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[52px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 86, 164) 0%, rgb(10, 46, 110) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg9 />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#c62828] content-stretch flex gap-[4px] items-center px-[7px] py-[2px] relative rounded-[100px] shrink-0" data-name="Background">
      <div className="bg-white rounded-[2.5px] shrink-0 size-[5px]" data-name="Background" />
      <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[9px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">LIVE</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex items-center left-0 right-0 top-0" data-name="Container">
      <Background9 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip right-0 top-[17px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">News Talk 550 WDUN</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip right-0 top-[34px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mornings on Main Street w/ Bill Maine</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path d={svgPaths.p1d316a80} fill="var(--fill-0, #00306E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#d6e4f7] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg10 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-[#eef2f7] content-stretch flex gap-[12px] items-center left-[16px] px-[15px] py-[13px] right-[16px] rounded-[16px] top-[1209.56px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#c1c7ce] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)]" />
      <Background8 />
      <Container49 />
      <Button18 />
    </div>
  );
}

function ScrollableContent() {
  return (
    <div className="bg-[#f8f9fa] h-[1319px] relative shrink-0 w-full" data-name="SCROLLABLE CONTENT">
      <TodaysHeadlines />
      <NewsFilterChipsMatchesWebsiteCategories />
      <HeroArticle />
      <ArticleList />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <div className="absolute bg-[#dde3ea] border-[#c1c7ce] border-b border-solid border-t h-[8px] left-0 right-0 top-[583px]" data-name="Band divider" />
      <Sports />
      <SportsFilterChipsMatchesWebsiteSubcategories />
      <ScoreStreamWidget />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <div className="absolute bg-[#dde3ea] border-[#c1c7ce] border-b border-solid border-t h-[8px] left-0 right-0 top-[986px]" data-name="Background+Border" />
      <Weather />
      <BackgroundShadow />
      <div className="absolute bg-[#dde3ea] border-[#c1c7ce] border-b border-solid border-t h-[8px] left-0 right-0 top-[1153.56px]" data-name="Background+Border" />
      <RadioPodcasts />
      <BackgroundBorderShadow />
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="home screen">
      <ScrollableContent />
    </div>
  );
}