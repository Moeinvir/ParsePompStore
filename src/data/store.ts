export interface Category {
  id: string;
  label: string;
}

export const categories: Category[] = [
  { id: "home", label: "پمپ آب خانگی" },
  { id: "industrial", label: "پمپ آب صنعتی" },
  { id: "sludge", label: "پمپ لجن‌کش" },
  { id: "submersible-drainage", label: "پمپ کفکش" },
  { id: "submersible", label: "پمپ شناور" },
  { id: "accessories", label: "لوازم جانبی پمپ" },
];

export interface Brand {
  id: string;
  label: string;
}

export const brands: Brand[] = [
  { id: "electrogen", label: "الکتروژن" },
  { id: "pentax", label: "پنتاکس" },
  { id: "grundfos", label: "گراندفوس" },
  { id: "lowara", label: "لوارا" },
  { id: "iranpump", label: "ایران پمپ" },
  { id: "ebara", label: "ابارا" },
  { id: "calpeda", label: "کالپدا" },
];

// How many brands show before the "نمایش بیشتر" toggle in the sidebar.
export const VISIBLE_BRAND_COUNT = 5;

export interface StoreProduct {
  id: number;
  name: string;
  model: string;
  power: string;
  price: number;
  image: string;
  categoryId: string;
  brandId: string;
  isNew?: boolean;
}

const baseProducts: Omit<StoreProduct, "id">[] = [
  {
    name: "پمپ آب خانگی پنتاکس",
    model: "CAM100",
    power: "1 اسب",
    price: 8_500_000,
    categoryId: "home",
    brandId: "pentax",
    image: "/assets/images/PompWater.png",
    isNew: true,
  },
  {
    name: "پمپ لجن‌کش آبارا",
    model: "808",
    power: "1 اسب",
    price: 6_200_000,
    categoryId: "sludge",
    brandId: "iranpump",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ آب محیطی الکتروژن",
    model: "QB60 0.5",
    power: "0.5 اسب",
    price: 4_900_000,
    categoryId: "home",
    brandId: "electrogen",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ شناور لوارا",
    model: "4GSm",
    power: "1 اسب",
    price: 7_200_000,
    categoryId: "submersible",
    brandId: "lowara",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ آب صنعتی ابارا",
    model: "CDM1",
    power: "1 اسب",
    price: 6_800_000,
    categoryId: "industrial",
    brandId: "iranpump",
    image: "/assets/images/PompWater.png",
    isNew: true,
  },
  {
    name: "پمپ کفکش لوکس",
    model: "DX10",
    power: "1 اسب",
    price: 5_100_000,
    categoryId: "submersible-drainage",
    brandId: "pentax",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ آب خانگی گراندفوس",
    model: "CM100",
    power: "1 اسب",
    price: 9_400_000,
    categoryId: "home",
    brandId: "grundfos",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ صنعتی الکتروژن",
    model: "IND200",
    power: "2 اسب",
    price: 12_600_000,
    categoryId: "industrial",
    brandId: "electrogen",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ لجن‌کش ایران پمپ",
    model: "LJ50",
    power: "1 اسب",
    price: 5_450_000,
    categoryId: "sludge",
    brandId: "iranpump",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ کفکش پنتاکس",
    model: "DG15",
    power: "1.5 اسب",
    price: 6_050_000,
    categoryId: "submersible-drainage",
    brandId: "pentax",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ شناور گراندفوس",
    model: "SP3A",
    power: "1 اسب",
    price: 8_900_000,
    categoryId: "submersible",
    brandId: "grundfos",
    image: "/assets/images/PompWater.png",
    isNew: true,
  },
  {
    name: "شیر یک‌طرفه لوارا",
    model: "VLV20",
    power: "—",
    price: 850_000,
    categoryId: "accessories",
    brandId: "lowara",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ آب خانگی ایران پمپ",
    model: "CAM80",
    power: "0.5 اسب",
    price: 4_300_000,
    categoryId: "home",
    brandId: "iranpump",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ صنعتی پنتاکس",
    model: "IND150",
    power: "1.5 اسب",
    price: 10_200_000,
    categoryId: "industrial",
    brandId: "pentax",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "کلید فلوتر الکتروژن",
    model: "FL10",
    power: "—",
    price: 620_000,
    categoryId: "accessories",
    brandId: "electrogen",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ لجن‌کش گراندفوس",
    model: "LJ90",
    power: "1.5 اسب",
    price: 9_100_000,
    categoryId: "sludge",
    brandId: "grundfos",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ شناور ایران پمپ",
    model: "4SM",
    power: "0.75 اسب",
    price: 6_400_000,
    categoryId: "submersible",
    brandId: "iranpump",
    image: "/assets/images/PompWater.png",
  },
  {
    name: "پمپ کفکش گراندفوس",
    model: "DG25",
    power: "2 اسب",
    price: 8_100_000,
    categoryId: "submersible-drainage",
    brandId: "grundfos",
    image: "/assets/images/PompWater.png",
  },
];

export const storeProducts: StoreProduct[] = baseProducts.map(
  (product, index) => ({
    ...product,
    id: index + 1,
  }),
);

export const priceBounds = {
  min: Math.min(...storeProducts.map((p) => p.price)),
  max: Math.max(...storeProducts.map((p) => p.price)),
};

export type SortOption = "default" | "cheapest" | "expensive" | "newest";

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "پیش‌فرض" },
  { value: "cheapest", label: "ارزان‌ترین" },
  { value: "expensive", label: "گران‌ترین" },
  { value: "newest", label: "جدیدترین" },
];

export const PAGE_SIZE = 6;
