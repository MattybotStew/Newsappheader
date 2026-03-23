import svgPaths from "./svg-07nrk0hr4p";

function Svg() {
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
      <Svg />
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

export default function NewsFilterChipsMatchesWebsiteCategories() {
  return (
    <div className="relative size-full" data-name="News filter chips — matches website categories">
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