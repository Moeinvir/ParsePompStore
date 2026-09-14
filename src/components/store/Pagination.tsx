import { ChevronIcon } from './icons'

interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    // Kept left-to-right on purpose, matching the reference design: page
    // numbers are a numeric control, so they read the same regardless of
    // the page's overall text direction.
    <nav dir="ltr" className="flex items-center justify-center gap-2 mt-10" aria-label="صفحه‌بندی محصولات">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="صفحه قبل"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary transition"
      >
        <ChevronIcon direction="left" className="w-4 h-4" />
      </button>

      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onChange(pageNumber)}
          aria-current={pageNumber === page ? 'page' : undefined}
          className={`w-9 h-9 flex items-center justify-center rounded-full text-sm transition ${
            pageNumber === page ? 'bg-primary text-white font-bold' : 'border border-white/10 hover:border-primary'
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="صفحه بعد"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary transition"
      >
        <ChevronIcon direction="right" className="w-4 h-4" />
      </button>
    </nav>
  )
}
