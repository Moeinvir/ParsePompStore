import { services } from '../../data/home'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  return (
    <section className="w-full flex flex-col" dir="rtl">
      <section className="flex flex-col">
        <div className="relative flex flex-col gap-3 mt-10 items-center justify-center mx-auto w-fit">
          <img src="/assets/icons/Water.svg" alt="" width={20} height={20} />
          <h2 className="font-black text-3xl">خدمات ما</h2>
          <span className="absolute top-full h-0.5 w-1/4 rounded-full bg-primary" />
        </div>

        <span className="mx-auto my-4 px-6 text-center opacity-50 text-xs md:text-sm">
          ارائه تخصصی‌ترین خدمات در زمینه پمپ آب و موتور‌های الکتریکی
        </span>

        <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
      </section>
    </section>
  )
}
