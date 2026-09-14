# پارس پمپ — نسخه React

تبدیل ساختاری پروژه استاتیک ParsPomp به **React 19 + TypeScript + Vite + Tailwind CSS v4 + react-router-dom + swiper/react**.

این تبدیل، *فقط* ساختار و صفحات فعلی را به کامپوننت تبدیل کرده — هیچ قابلیت جدیدی (سبد خرید واقعی، دیتای پویای محصولات، فیلتر فروشگاه) اضافه نشده و همان محدودیت‌های پروژه اصلی (فروشگاه ناقص، دکمه‌های خرید بدون منطق، فرم خبرنامه بدون بک‌اند) عیناً حفظ شده‌اند.

## راه‌اندازی

```bash
npm install
npm run dev
```

سپس فولدر `assets/` پروژه‌ی قدیمی (fonts, icons, images) را داخل `public/assets/` این پروژه کپی کن — جزئیات در `public/assets/README.md`.

## دستورها

| دستور              | کار                          |
| ------------------ | ---------------------------- |
| `npm run dev`       | اجرای سرور توسعه Vite         |
| `npm run build`     | build نهایی برای production  |
| `npm run preview`   | پیش‌نمایش build نهایی        |
| `npm run lint`      | بررسی کد با oxlint            |

## ساختار پروژه

```
src/
├── main.tsx              # نقطه ورود + BrowserRouter
├── App.tsx                # تعریف مسیرها (routes)
├── index.css               # Tailwind v4 + theme (@theme) + استایل ناوبری Swiper
├── data/                   # داده‌های استاتیک (منو، فوتر، محتوای صفحه اصلی)
│   ├── navigation.ts
│   ├── footer.ts
│   └── home.ts
├── components/
│   ├── layout/              # Navbar, Sidebar (منوی موبایل), HamburgerButton, Footer, Layout
│   ├── home/                 # Hero, FeatureHighlights, ServicesSection/ServiceCard,
│   │                          # ProductsSection/ProductCard (Swiper), WhyUsSection/StatCard
│   └── store/                # StoreBanner, StoreFilters (بخش ناقص، عیناً حفظ‌شده)
└── pages/
    ├── Home.tsx              # مسیر "/"   (قبلاً index.html)
    └── Store.tsx             # مسیر "/store" (قبلاً pages/store/index.html)
```

## نگاشت فایل‌های قدیمی به جدید

| فایل قدیمی                          | معادل جدید                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------ |
| `index.html`                         | `src/pages/Home.tsx` + کامپوننت‌های `src/components/home/*`                    |
| `pages/store/index.html`             | `src/pages/Store.tsx` + `src/components/store/*`                               |
| `js/script.js` (`openNav`)           | `src/components/layout/HamburgerButton.tsx` (state-based، همان تایمینگ)        |
| `aside#sidebar` (تکرار در دو صفحه)   | `src/components/layout/Sidebar.tsx` (یک کامپوننت مشترک)                        |
| `<nav>` (تکرار در دو صفحه)           | `src/components/layout/Navbar.tsx`                                             |
| `<footer>`                           | `src/components/layout/Footer.tsx`                                             |
| `css/input.css`                      | بخش `@theme` در `src/index.css`                                                |
| `css/tailwind.css`                   | ادغام‌شده در `src/index.css` (استایل دکمه‌های Swiper)                          |
| `tailwind.config.js` (قدیمی/نامرتبط) | حذف شد — Tailwind v4 با `@tailwindcss/vite` و `@theme` در CSS پیکربندی می‌شود |

## تغییرات جزئی و آگاهانه نسبت به نسخه استاتیک

این‌ها اصلاح ساختاری لازم برای درست کار کردن در React/Vite بودند، نه اضافه‌شدن قابلیت:

- `lang="en"` در تگ `html` به `lang="fa"` و `dir="rtl"` تغییر کرد (قبلاً ناسازگار بین صفحات بود).
- مسیرهای asset از نسبی (`./assets/...` یا `assets/...` با `<base href>`) به مطلق (`/assets/...`) تبدیل شدند، چون در Vite فولدر `public/` از ریشه سرو می‌شود و دیگر نیازی به `<base href>` نیست.
- منو و سایدبار (که در `index.html` و `pages/store/index.html` جداگانه و کمی متفاوت نوشته شده بودند) در یک کامپوننت مشترک با آرایه‌ی `navLinks` یکسان شدند.
- کارت‌های تکراری (۴ ویژگی هم‌شکل زیر Hero، ۸ اسلاید محصول یکسان) با `.map()` روی آرایه‌ی داده رندر می‌شوند، به‌جای کپی-پیست HTML — محتوا هنوز کاملاً یکسان و placeholder است.

## موارد ناقص که عمداً دست‌نخورده باقی ماندند

مطابق تصمیم «فقط تبدیل ساختار»، این‌ها هنوز پیاده‌سازی نشده‌اند (دقیقاً مثل نسخه‌ی استاتیک):

- `StoreFilters.tsx`: فیلتر، مرتب‌سازی، لیست واقعی محصولات و pagination — همچنان placeholder با رنگ‌های آزمایشی `bg-red-400` / `bg-blue-600` / `bg-amber-500`.
- دکمه‌های خرید بدون منطق سبد خرید.
- فرم خبرنامه بدون اتصال به بک‌اند.
- اکثر لینک‌های منو (`خدمات`, `درباره ما`, `مقالات`, `تماس با ما`) هنوز به `#` اشاره می‌کنند.

قدم بعدی طبیعی — وقتی خواستی — می‌تونه اضافه‌کردن دیتای پویای محصولات، سبد خرید با state/localStorage، و تکمیل فیلتر فروشگاه باشه.
