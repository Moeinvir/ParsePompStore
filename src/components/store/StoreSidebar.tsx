import type { Category, Brand } from "../../data/store";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import ConsultCard from "./ConsultCard";

interface StoreSidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  brands: Brand[];
  selectedBrands: string[];
  onToggleBrand: (id: string) => void;
  priceBounds: { min: number; max: number };
  priceRange: [number, number];
  onApplyPrice: (range: [number, number]) => void;
}

export default function StoreSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  brands,
  selectedBrands,
  onToggleBrand,
  priceBounds,
  priceRange,
  onApplyPrice,
}: StoreSidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-6">
      <CategoryFilter
        categories={categories}
        selectedId={selectedCategory}
        onSelect={onSelectCategory}
      />
      <PriceFilter
        bounds={priceBounds}
        value={priceRange}
        onApply={onApplyPrice}
      />
      <BrandFilter
        brands={brands}
        selectedIds={selectedBrands}
        onToggle={onToggleBrand}
      />
      <ConsultCard />
    </aside>
  );
}
