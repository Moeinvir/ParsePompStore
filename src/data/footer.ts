export const footerServiceLinks = ['سیم‌پیچی موتور', 'تعمیر پمپ آب', 'فروش پمپ آب', 'سرویس و نگهداری']

export const footerUsefulLinks = ['سوالات متداول', 'درباره ما', 'تماس با ما', 'خدمات ما']

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  { label: 'تماس', href: 'tel:+989362022832', icon: '/assets/icons/message.svg' },
  { label: 'WhatsApp', href: '#', icon: '/assets/icons/whatsapp.svg' },
  { label: 'Telegram', href: '#', icon: '/assets/icons/telegram.svg' },
  { label: 'Instagram', href: '#', icon: '/assets/icons/instagram.svg' },
]
