import type { Product } from '../../data/home'

export default function ProductCard({ name, spec, price, image }: Product) {
  return (
    <div className="bg-[#05080C] border border-white/8 py-6 sm:py-9 px-4 sm:px-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <figure>
        <img src={image} alt={name} width={300} height={300} className="w-full max-w-75 h-auto mx-auto" />
      </figure>
      <div className="flex flex-col gap-2 mt-7">
        <span className="font-black">{name}</span>
        <span className="opacity-50 text-sm">{spec}</span>
        <div className="flex justify-between items-center gap-3">
          <div className="font-bold">
            <span className="text-primary">{price}</span>
            <span> تومان</span>
          </div>
          <button
            type="button"
            className="group flex items-center justify-center w-10 h-10 bg-[#08111c] border border-primary/60 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-105 hover:shadow-[0_0_15px_rgba(2,75,207,0.35)]"
          >
            <img
              src="/assets/icons/shopping_cart.svg"
              alt="Buy This Product"
              width={21}
              height={21}
              className="transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
