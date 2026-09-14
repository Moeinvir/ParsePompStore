import { phoneNumber } from '../../data/navigation'
import { WrenchIcon } from './icons'

export default function ConsultCard() {
  return (
    <div className="bg-[#05080C] border border-white/8 rounded-xl p-5 flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
        <WrenchIcon className="w-6 h-6 text-primary" />
      </div>
      <p className="font-bold">نیاز به مشاوره دارید؟</p>
      <p className="text-xs opacity-60 leading-6">کارشناسان ما آماده پاسخگویی به سوالات شما هستند</p>
      <a
        href={phoneNumber.href}
        className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 transition text-sm font-bold"
      >
        تماس با ما
      </a>
    </div>
  )
}
