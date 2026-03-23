function Container1() {
  return (
    <div className="h-[23.998px] relative shrink-0 w-[71.351px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16.5px] left-[36px] text-[11px] text-center text-white top-[4.59px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Advertisement
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#2c2c2c] h-[49.995px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

export default function Div() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start pt-[1.084px] relative size-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#444] border-solid border-t-[1.084px] inset-0 pointer-events-none shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.3)]" />
      <Container />
    </div>
  );
}