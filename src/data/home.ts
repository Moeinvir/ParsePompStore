export interface FeatureHighlight {
  title: string;
  subtitle: string;
}

const futures: FeatureHighlight[] = [
  {
    title: "سیم پیچی تخصصی",
    subtitle: "با بهترین متریال",
  },
  {
    title: "سیم پیچی تخصصی",
    subtitle: "با بهترین متریال",
  },
  {
    title: "سیم پیچی تخصصی",
    subtitle: "با بهترین متریال",
  },
  {
    title: "سیم پیچی تخصصی",
    subtitle: "با بهترین متریال",
  },
];

// The original markup repeated this exact card four times.
export const featureHighlights: FeatureHighlight[] = Array.from(futures);

export interface ServiceItem {
  title: string;
  lines: [string, string];
}

export const services: ServiceItem[] = [
  {
    title: "سیم‌پیچی موتور",
    lines: [
      "سیم‌پیچی انواع موتور‌های پمپ آب",
      "سیم لاکی مرغوب و دستگاه‌های پیشرفته",
    ],
  },
  {
    title: "تعمیر پمپ آب",
    lines: ["تعمیر تخصصی انواع پمپ‌های آب", "با استفاده از تجهیزات پیشرفته"],
  },
  {
    title: "فروش پمپ آب",
    lines: ["فروش انواع پمپ آب خانگی و صنعتی", "با کیفیت و قیمت مناسب"],
  },
];

export interface Product {
  id: number;
  name: string;
  spec: string;
  price: string;
  image: string;
}

// The original swiper had 8 slides, all showing the same placeholder
// product — kept as-is since real product data isn't wired up yet.
export const products: Product[] = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  name: "پمپ خانگی پدراوو",
  spec: "6.5 اسب | PKn60",
  price: "4,900,000",
  image: "/assets/images/PompWater.png",
}));

export interface StatItem {
  value: string;
  line1: string;
  line2: string;
}

export const stats: StatItem[] = [
  { value: "2500+", line1: "مشتری رضایت‌مند", line2: "در سراسر کشور" },
  { value: "2500+", line1: "مشتری رضایت‌مند", line2: "در سراسر کشور" },
  { value: "2500+", line1: "مشتری رضایت‌مند", line2: "در سراسر کشور" },
  { value: "15+", line1: "مشتری رضایت‌مند", line2: "در سراسر کشور" },
];
