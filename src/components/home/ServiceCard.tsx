import type { ServiceItem } from '../../data/home'

export default function ServiceCard({ title, lines }: ServiceItem) {
  return (
    <div className="flex flex-col border border-white/10 bg-[#05080C] rounded-xl overflow-hidden">
      <div className="flex flex-col items-center rounded-t-xl overflow-hidden">
        <img src="/assets/images/Wire.png" alt="Wire" className="w-full h-auto object-cover" />
        <div className="relative -top-7 z-10 h-14 aspect-square rounded-full bg-primary" />
      </div>
      <div className="relative -top-7 flex flex-col gap-5 px-6 pb-2">
        <p className="text-2xl text-center font-bold">{title}</p>
        <div className="flex flex-col gap-1">
          {lines.map((line) => (
            <p key={line} className="opacity-50 text-center text-sm">
              {line}
            </p>
          ))}
        </div>
        <button className="font-bold px-4 py-3.5 border border-white/50 rounded-full cursor-pointer hover:bg-primary hover:border-primary transition">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  )
}
