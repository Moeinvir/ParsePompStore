export interface NavLink {
  label: string
  href: string
}

// Mirrors the menu that appears in both the desktop navbar and the
// mobile sidebar across all pages in the original static site.
export const navLinks: NavLink[] = [
  { label: 'صفحه اصلی', href: '/' },
  { label: 'خدمات', href: '#' },
  { label: 'فروشگاه', href: '/store' },
  { label: 'درباره ما', href: '#' },
  { label: 'مقالات', href: '#' },
  { label: 'تماس با ما', href: '#' },
]

export const phoneNumber = {
  display: '0936 202 2832',
  href: 'tel:+989362022832',
}
