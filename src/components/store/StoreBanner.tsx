export default function StoreBanner() {
  return (
    <section
      className="relative w-full flex flex-row-reverse md:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 xl:px-24"
      dir="rtl"
    >
      <div className="flex flex-col gap-2 z-10 text-right shrink-0">
        <p className="font-black text-2xl sm:text-3xl md:text-4xl">فروشگاه</p>
        <span className="opacity-50 text-xs sm:text-sm">
          خانه / <strong className="text-primary font-bold">فروشگاه</strong>
        </span>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img src="/assets/images/pompBanner.png" alt="Pomp Banner" className="w-full h-80 object-contain" />
      </div>
    </section>
  )
}
