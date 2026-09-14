import { useEffect, useMemo, useState } from "react";
import StoreBanner from "../components/store/StoreBanner";
import StoreSidebar from "../components/store/StoreSidebar";
import StoreToolbar from "../components/store/StoreToolbar";
import type { ViewMode } from "../components/store/StoreToolbar";
import ProductGrid from "../components/store/ProductGrid";
import Pagination from "../components/store/Pagination";
import {
  categories,
  brands,
  storeProducts,
  priceBounds,
  PAGE_SIZE,
} from "../data/store";
import type { SortOption } from "../data/store";

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    priceBounds.min,
    priceBounds.max,
  ]);
  const [sort, setSort] = useState<SortOption>("default");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleBrand = (id: string) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
    );
  };

  const toggleWish = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id],
    );
  };

  const filteredProducts = useMemo(() => {
    let result = storeProducts.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.categoryId === selectedCategory;
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brandId);
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesBrand && matchesPrice;
    });

    result = [...result].sort((a, b) => {
      if (sort === "cheapest") return a.price - b.price;
      if (sort === "expensive") return b.price - a.price;
      if (sort === "newest") return Number(b.isNew) - Number(a.isNew);
      return 0;
    });

    return result;
  }, [selectedCategory, selectedBrands, priceRange, sort]);

  // Jump back to page 1 whenever the active filters or sorting change.
  useEffect(() => {
    setPage(1);
  }, [selectedCategory, selectedBrands, priceRange, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageProducts = filteredProducts.slice(pageStart, pageStart + PAGE_SIZE);

  return (
    <>
      <StoreBanner />
      <section className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <StoreToolbar
              sort={sort}
              onSortChange={setSort}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              rangeStart={pageStart + 1}
              rangeEnd={Math.min(
                pageStart + PAGE_SIZE,
                filteredProducts.length,
              )}
              total={filteredProducts.length}
            />
            <ProductGrid
              products={pageProducts}
              view={viewMode}
              wishlist={wishlist}
              onToggleWish={toggleWish}
            />
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onChange={setPage}
            />
          </div>

          <StoreSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            brands={brands}
            selectedBrands={selectedBrands}
            onToggleBrand={toggleBrand}
            priceBounds={priceBounds}
            priceRange={priceRange}
            onApplyPrice={setPriceRange}
          />
        </div>
      </section>
    </>
  );
}
