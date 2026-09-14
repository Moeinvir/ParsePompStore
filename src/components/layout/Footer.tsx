import { footerServiceLinks, footerUsefulLinks, socialLinks } from '../../data/footer'

export default function Footer() {
  return (
    <footer className="w-full mt-8" dir="rtl">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 px-6 sm:px-10 lg:px-16 pb-10">
        {/* Brand */}
        <div className="w-full max-w-xs flex flex-col gap-5 text-right">
          <div className="flex items-center gap-2">
            <img src="/assets/icons/water.png" alt="پارس پمپ" width={40} height={40} className="shrink-0" />
            <div>
              <h1 className="font-bold text-xl">پارس پمپ</h1>
              <span className="opacity-50 text-xs">سیم‌پیچی و فروش پمپ آب</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 opacity-60 text-sm leading-6">
            <span>با سال‌ها تجربه در زمینه سیم‌پیچی موتور و تعمیر</span>
            <span>و فروش انواع پمپ آب، همراه مطمئن شما هستیم.</span>
          </div>
          <div className="flex items-center justify-start gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center justify-center w-9 h-9 rounded-xl hover:bg-primary/10 transition"
              >
                <img src={social.icon} alt={social.label} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="w-full max-w-xs flex flex-col text-right">
          <h2 className="font-black text-xl">خدمات ما</h2>
          <ul className="flex flex-col gap-2 mt-5">
            {footerServiceLinks.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm opacity-50 hover:opacity-100 hover:text-primary transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-full max-w-xs flex flex-col text-right">
          <h2 className="font-black text-xl">لینک‌های مفید</h2>
          <ul className="flex flex-col gap-2 mt-5">
            {footerUsefulLinks.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm opacity-50 hover:opacity-100 hover:text-primary transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full max-w-xs flex flex-col text-right">
          <h2 className="font-black text-xl mb-4">خبرنامه</h2>
          <div className="flex flex-col gap-3">
            <p className="opacity-60 text-sm leading-6">
              برای دریافت آخرین اخبار و تخفیف‌ها ایمیل خود را وارد کنید.
            </p>
            <div className="flex flex-col gap-2">
              <input
                className="bg-gray-500/50 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-primary transition"
                type="email"
                placeholder="ایمیل شما"
              />
              <button
                className="bg-primary hover:bg-primary/90 py-3 rounded-xl text-white text-sm transition"
                type="button"
              >
                اشتراک
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 px-6 sm:px-10 lg:px-16 py-3 text-center sm:text-right">
        <p className="text-[10px] sm:text-sm">
          تمامی حقوق این سایت متعلق به <strong className="text-primary underline">پارس پمپ</strong> می‌باشد.
        </p>
        <p className="text-[10px] sm:text-sm opacity-70">
          طراحی و توسعه توسط <strong className="text-primary">معین کارگربیده</strong>
        </p>
      </section>
    </footer>
  )
}
