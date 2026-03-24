import imgImg from "figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png";

function Img() {
  return (
    <div className="h-[67.998px] opacity-60 relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-gradient-to-b from-[#4a4a4a] h-[67.998px] relative rounded-[14px] shrink-0 to-[#3a3a3a] w-[79.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Img />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[14.988px] relative shrink-0 w-[269.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#6b9bd1] text-[10px] top-[-0.92px] tracking-[0.7px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Advertisement
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[37.801px] relative shrink-0 w-[269.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18.9px] left-0 text-[14px] text-white top-[0.08px] w-[232px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Your Ad Could Be Here - Reach Local Audiences
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16.987px] relative shrink-0 w-[269.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#bbb] text-[10px] top-[1.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sponsored Content
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[75.738px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.998px] items-start relative size-full">
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[11.991px] h-[96.721px] items-start left-0 pt-[9.992px] px-[15.988px] top-0 w-[393.456px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[23.998px] left-[315.52px] top-[11.99px] w-[61.952px]" data-name="Container">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#999] text-[10px] top-[4.59px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sponsored
      </p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#2c2c2c] border-[#444] border-b-[1.084px] border-solid relative size-full" data-name="Container">
      <Container1 />
      <Container7 />
    </div>
  );
}