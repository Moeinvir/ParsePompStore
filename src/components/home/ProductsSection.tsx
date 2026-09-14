import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { products } from '../../data/home'
import ProductCard from './ProductCard'

export default function ProductsSection() {
  return (
    <section className="w-full flex flex-col">
      <section className="flex flex-col">
        <div className="relative flex flex-col gap-3 mt-10 items-center justify-center mx-auto w-fit">
          <img src="/assets/icons/Water.svg" alt="" width={20} height={20} />
          <h2 className="font-black text-2xl sm:text-3xl">محصولات پرفروش</h2>
          <span className="absolute top-full mt-2 h-0.75 w-1/4 rounded-full bg-primary" />
        </div>
        <span className="mx-auto my-4 px-4 text-center opacity-50 text-sm">با کیفیت ترین پمپ‌ها با بهترین قیمت</span>

        <section className="relative mx-4 sm:mx-8 lg:mx-16 xl:mx-24 mb-20">
          <Swiper
            modules={[Navigation]}
            dir="rtl"
            spaceBetween={16}
            loop
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="swiper-button-next hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-30 -right-3 md:-right-5 lg:-right-10 xl:-right-16 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-[#05080C] border border-white/15 cursor-pointer transition-colors duration-300 hover:bg-[#001336] after:hidden">
            <img src="/assets/icons/arrow-right.svg" alt="Next" className="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
          <div className="swiper-button-prev hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-30 -left-3 md:-left-5 lg:-left-10 xl:-left-16 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-[#05080C] border border-white/15 cursor-pointer transition-colors duration-300 hover:bg-[#001336] after:hidden">
            <img src="/assets/icons/arrow-left.svg" alt="Previous" className="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
        </section>
      </section>
    </section>
  )
}
