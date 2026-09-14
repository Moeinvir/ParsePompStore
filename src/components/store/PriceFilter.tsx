import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { formatToman } from "../../utils/format";

interface PriceFilterProps {
  bounds: { min: number; max: number };
  value: [number, number];
  onApply: (range: [number, number]) => void;
}

// Round to the nearest 10,000 toman so dragging lands on tidy numbers.
const STEP = 10_000;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

type Thumb = "min" | "max";

export default function PriceFilter({
  bounds,
  value,
  onApply,
}: PriceFilterProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [draftMin, setDraftMin] = useState(value[0]);
  const [draftMax, setDraftMax] = useState(value[1]);

  // Mirrors of the latest values, read inside pointer handlers so they
  // never see a stale closure from the render that attached the listener.
  const minRef = useRef(draftMin);
  const maxRef = useRef(draftMax);

  // Keep the draft in sync if the range gets reset from outside.
  useEffect(() => {
    setDraftMin(value[0]);
    setDraftMax(value[1]);
  }, [value]);

  useEffect(() => {
    minRef.current = draftMin;
  }, [draftMin]);

  useEffect(() => {
    maxRef.current = draftMax;
  }, [draftMax]);

  // Guard against bounds.min === bounds.max (e.g. a filtered category with
  // a single price point), which would otherwise divide by zero below.
  const span = bounds.max - bounds.min || 1;

  const valueFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return bounds.min;
    const rect = track.getBoundingClientRect();
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    const raw = bounds.min + ratio * span;
    return clamp(Math.round(raw / STEP) * STEP, bounds.min, bounds.max);
  };

  const dragThumb = (thumb: Thumb, clientX: number) => {
    const next = valueFromClientX(clientX);
    if (thumb === "min") {
      setDraftMin(Math.min(next, maxRef.current));
    } else {
      setDraftMax(Math.max(next, minRef.current));
    }
  };

  // Each thumb captures its own pointer, so dragging one is never stolen
  // by the other thumb sitting underneath it — the classic failure mode
  // of the "two overlapped <input type=range>" trick once both values
  // get close together.
  const handleThumbPointerDown =
    (thumb: Thumb) => (event: PointerEvent<HTMLDivElement>) => {
      event.stopPropagation();
      event.currentTarget.setPointerCapture(event.pointerId);
      dragThumb(thumb, event.clientX);
    };

  const handleThumbPointerMove =
    (thumb: Thumb) => (event: PointerEvent<HTMLDivElement>) => {
      if (event.buttons !== 1) return;
      dragThumb(thumb, event.clientX);
    };

  const handleThumbKeyDown =
    (thumb: Thumb) => (event: KeyboardEvent<HTMLDivElement>) => {
      const delta =
        event.key === "ArrowRight" ? STEP : event.key === "ArrowLeft" ? -STEP : 0;
      if (!delta) return;
      event.preventDefault();
      if (thumb === "min") {
        setDraftMin((prev) => clamp(prev + delta, bounds.min, maxRef.current));
      } else {
        setDraftMax((prev) => clamp(prev + delta, minRef.current, bounds.max));
      }
    };

  // Clicking anywhere on the track jumps whichever thumb is closer.
  const handleTrackPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const next = valueFromClientX(event.clientX);
    const distToMin = Math.abs(next - draftMin);
    const distToMax = Math.abs(next - draftMax);
    if (distToMin <= distToMax) {
      setDraftMin(Math.min(next, draftMax));
    } else {
      setDraftMax(Math.max(next, draftMin));
    }
  };

  const lowPercent = ((draftMin - bounds.min) / span) * 100;
  const highPercent = ((draftMax - bounds.min) / span) * 100;

  return (
    <div className="bg-surface border border-white/8 rounded-xl p-5">
      <h3 className="font-black text-lg mb-5">فیلتر بر اساس قیمت</h3>

      {/* Custom dual-thumb slider — not native <input type="range">.
          Native range inputs don't support RTL reliably across browsers,
          and two overlapped inputs fight over which one receives the
          drag once their values get close. Each thumb below is its own
          element with pointer capture, so there's no ambiguity about
          which one you're dragging, and it stays keyboard-accessible. */}
      <div
        ref={trackRef}
        dir="ltr"
        onPointerDown={handleTrackPointerDown}
        className="relative h-1.5 rounded-full bg-white/10 mb-5 cursor-pointer"
      >
        <div
          className="absolute h-1.5 rounded-full bg-primary pointer-events-none"
          style={{ left: `${lowPercent}%`, right: `${100 - highPercent}%` }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label="حداقل قیمت"
          aria-valuemin={bounds.min}
          aria-valuemax={bounds.max}
          aria-valuenow={draftMin}
          onPointerDown={handleThumbPointerDown("min")}
          onPointerMove={handleThumbPointerMove("min")}
          onKeyDown={handleThumbKeyDown("min")}
          className="absolute top-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-primary -translate-y-1/2 -translate-x-1/2 cursor-pointer touch-none"
          style={{ left: `${lowPercent}%` }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label="حداکثر قیمت"
          aria-valuemin={bounds.min}
          aria-valuemax={bounds.max}
          aria-valuenow={draftMax}
          onPointerDown={handleThumbPointerDown("max")}
          onPointerMove={handleThumbPointerMove("max")}
          onKeyDown={handleThumbKeyDown("max")}
          className="absolute top-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-primary -translate-y-1/2 -translate-x-1/2 cursor-pointer touch-none"
          style={{ left: `${highPercent}%` }}
        />
      </div>

      <div className="flex justify-between items-center text-xs opacity-70 mb-5">
        <span>قیمت</span>
        <span dir="ltr">
          {formatToman(draftMin)} — {formatToman(draftMax)} تومان
        </span>
      </div>

      <button
        type="button"
        onClick={() => onApply([draftMin, draftMax])}
        className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 transition text-sm font-bold"
      >
        فیلتر
      </button>
    </div>
  );
}
