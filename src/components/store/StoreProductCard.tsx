import type { StoreProduct } from "../../data/store";
import { formatToman } from "../../utils/format";
import { HeartIcon } from "./icons";

interface StoreProductCardProps {
  product: StoreProduct;
  isWished: boolean;
  onToggleWish: (id: number) => void;
  view: "grid" | "list";
}

export default function StoreProductCard({
  product,
  isWished,
  onToggleWish,
  view,
}: StoreProductCardProps) {
  const isList = view === "list";

  return (
    <div
      className={`relative bg-surface border border-white/8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${
        isList
          ? "flex flex-row-reverse items-center gap-4 p-4"
          : "flex flex-col p-4"
      }`}
    >
      <button
        type="button"
        onClick={() => onToggleWish(product.id)}
        aria-pressed={isWished}
        aria-label="افزودن به علاقه‌مندی‌ها"
        className={`absolute top-3 left-3 z-10 w-8 h-8 rounded-full flex items-center justify-center border transition cursor-pointer ${
          isWished
            ? "bg-primary/20 border-primary text-primary"
            : "bg-black/40 border-white/15 text-white/70 hover:text-white"
        }`}
      >
        <HeartIcon
          className="w-4 h-4"
          filled={isWished}
        />
      </button>

      <figure
        className={`relative ${isList ? "w-28 sm:w-36 shrink-0" : "w-full"}`}
      >
        {product.isNew && (
          <span className="absolute top-2 right-2 z-10 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            جدید
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain"
        />
      </figure>

      <div
        className={`flex flex-col gap-2 ${isList ? "flex-1 text-right" : "mt-5"}`}
      >
        <span className="font-black">{product.name}</span>
        <span className="opacity-50 text-sm">
          {product.power} | {product.model}
        </span>
        <div
          className={`flex items-center gap-3 ${isList ? "" : "justify-between mt-1"}`}
        >
          <div className="font-bold">
            <span className="text-primary">{formatToman(product.price)}</span>
            <span> تومان</span>
          </div>
          <button
            type="button"
            className="group flex items-center justify-center w-10 h-10 bg-[#08111c] border border-primary/60 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-105 hover:shadow-[0_0_15px_rgba(2,75,207,0.35)]"
          >
            <img
              src="/assets/icons/shopping_cart.svg"
              alt="افزودن به سبد خرید"
              width={21}
              height={21}
              className="transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
