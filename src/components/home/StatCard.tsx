import type { StatItem } from '../../data/home'

export default function StatCard({ value, line1, line2 }: StatItem) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4 bg-[#05080C] border border-white/8 px-6 sm:px-10 lg:px-14 py-6 lg:py-5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div>
        <img src="/assets/icons/Commiunity.svg" alt="Commiunity" width={70} height={70} />
      </div>
      <span className="text-primary font-black text-4xl sm:text-5xl">{value}</span>
      <div className="flex flex-col gap-1 items-center">
        <span>{line1}</span>
        <span className="opacity-70">{line2}</span>
      </div>
    </div>
  )
}
