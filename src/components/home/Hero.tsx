export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 w-full mb-12 px-5 sm:px-8 lg:px-12 items-center justify-items-center">
      <div className="flex flex-col gap-5 order-2 lg:order-1 w-full max-w-xl">
        <div className="flex flex-col gap-4.5">
          <div className="flex flex-col gap-3.5">
            <p className="font-black text-2xl sm:text-3xl md:text-4xl">سیم پیچی تخصصی موتور</p>
            <p className="font-black text-2xl sm:text-3xl md:text-4xl">
              تعمیر و فروش <strong className="text-primary">پمپ آب</strong>
            </p>
          </div>
          <span className="opacity-50">با ضمانت کیفیت و خدمات معتبر</span>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-5">
          <button className="flex gap-2 items-center justify-center px-4 sm:px-6 py-3 rounded bg-primary hover:bg-[#003494] cursor-pointer transition">
            <img src="/assets/icons/expand_arrow_white.svg" alt="arrow" width={15} height={15} />
            مشاهده خدمات
          </button>
          <button className="flex gap-2 items-center justify-center px-4 sm:px-6 py-3 rounded border border-white/60 hover:bg-white/10 cursor-pointer transition">
            <img src="/assets/icons/expand_arrow.svg" alt="arrow" width={15} height={15} />
            مشاهده محصولات
          </button>
        </div>
      </div>
      <div className="w-full order-1 lg:order-2">
        <img src="/assets/images/pomp.png" alt="Pomp Picture" className="w-3/4 sm:w-2/3 lg:w-full mx-auto" />
      </div>
    </section>
  )
}
