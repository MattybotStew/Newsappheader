import { useEffect, useRef } from 'react';
import { ADS_ENABLED } from '../../config/adConfig';

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      defineSlot: (adUnitPath: string, sizes: [number, number][], divId: string) => {
        addService: (service: unknown) => unknown;
      };
      pubads: () => {
        enableSingleRequest: () => void;
        collapseEmptyDivs: () => void;
        enableLazyLoad: (config: object) => void;
        refresh: (slots?: unknown[]) => void;
      };
      display: (divId: string) => void;
      enableServices: () => void;
      destroySlots: (slots: unknown[]) => void;
    };
  }
}

let slotCounter = 0;

interface GoogleAdSlotProps {
  adUnit: string;
  sizes: [number, number][];
  className?: string;
  minHeight?: number;
  label?: string;
}

export function GoogleAdSlot({ adUnit, sizes, className = '', minHeight = 50, label = 'Advertisement' }: GoogleAdSlotProps) {
  const slotIdRef = useRef<string>(`gpt-slot-${++slotCounter}-${Math.random().toString(36).slice(2)}`);
  const gptSlotRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ADS_ENABLED) return;
    const divId = slotIdRef.current;
    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(() => {
      const slot = window.googletag.defineSlot(adUnit, sizes, divId);
      if (!slot) return;
      slot.addService(window.googletag.pubads());
      gptSlotRef.current = slot;
      window.googletag.display(divId);
    });

    return () => {
      if (gptSlotRef.current) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots([gptSlotRef.current]);
          gptSlotRef.current = null;
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {/* Brand-blue placeholder — sits behind the GPT iframe */}
      <div
        className="relative w-full flex flex-col items-center justify-center bg-[#1a3178] overflow-hidden"
        style={{ minHeight }}
      >
        {/* Subtle diagonal pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id={`diag-${slotIdRef.current}`} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="12" stroke="white" strokeWidth="4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#diag-${slotIdRef.current})`} />
        </svg>

        {/* Label text */}
        <span className="relative z-10 font-['Source_Sans_3',sans-serif] text-[10px] font-bold tracking-[1.2px] uppercase text-white/40 select-none">
          {label}
        </span>

        {/* GPT slot renders on top */}
        <div id={slotIdRef.current} className="relative z-20" />
      </div>
    </div>
  );
}
