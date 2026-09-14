import type { SortOption } from "../../data/store";
import { sortOptions } from "../../data/store";
import { ChevronDownIcon, GridIcon, ListIcon } from "./icons";

export type ViewMode = "grid" | "list";

interface StoreToolbarProps {
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  rangeStart: number;
  rangeEnd: number;
  total: number;
}

export default function StoreToolbar({
  sort,
  onSortChange,
  viewMode,
  onViewModeChange,
  rangeStart,
  rangeEnd,
  total,
}: StoreToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <div className="flex items-center gap-3">
        <div className="relative">
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            className="appearance-none bg-surface border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm cursor-pointer focus:outline-none focus:border-primary transition"
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                مرتب‌سازی: {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
        </div>

        <div className="flex items-center gap-1 bg-surface border border-white/10 rounded-xl p-1">
          <button
            type="button"
            aria-label="نمایش شبکه‌ای"
            aria-pressed={viewMode === "grid"}
            onClick={() => onViewModeChange("grid")}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition cursor-pointer ${
              viewMode === "grid"
                ? "bg-primary text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            <GridIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="نمایش لیستی"
            aria-pressed={viewMode === "list"}
            onClick={() => onViewModeChange("list")}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition cursor-pointer ${
              viewMode === "list"
                ? "bg-primary text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            <ListIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="opacity-50 text-sm">
        نمایش {total === 0 ? 0 : rangeStart} تا {rangeEnd} از {total} محصول
      </p>
    </div>
  );
}
