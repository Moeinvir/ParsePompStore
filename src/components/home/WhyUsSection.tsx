import { stats } from '../../data/home'
import StatCard from './StatCard'

export default function WhyUsSection() {
  return (
    <section className="w-full flex flex-col">
      <section>
        <section className="flex flex-col">
          <div className="relative flex flex-col gap-3 mt-10 items-center justify-center mx-auto w-fit">
            <img src="/assets/icons/Water.svg" alt="" width={20} height={20} />
            <h2 className="font-black text-3xl">چرا مارا انتخاب کنید؟</h2>
            <span className="absolute top-full mt-2 h-0.75 w-1/6 rounded-full bg-primary" />
          </div>
          <section className="px-6 sm:px-10 lg:px-16 xl:px-24 mb-20 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}
