import type { StoreProduct } from "../../data/store";
import StoreProductCard from "./StoreProductCard";
import type { ViewMode } from "./StoreToolbar";

interface ProductGridProps {
  products: StoreProduct[];
  view: ViewMode;
  wishlist: number[];
  onToggleWish: (id: number) => void;
}

export default function ProductGrid({
  products,
  view,
  wishlist,
  onToggleWish,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center gap-2 text-center bg-surface border border-white/8 rounded-xl">
        <p className="font-bold">محصولی با این فیلترها پیدا نشد</p>
        <p className="opacity-50 text-sm">
          فیلترها را تغییر بده تا محصولات بیشتری ببینی
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          : "flex flex-col gap-4"
      }
    >
      {products.map((product) => (
        <StoreProductCard
          key={product.id}
          product={product}
          view={view}
          isWished={wishlist.includes(product.id)}
          onToggleWish={onToggleWish}
        />
      ))}
    </div>
  );
}
