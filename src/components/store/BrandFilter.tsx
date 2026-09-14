import { useState } from 'react'
import type { Brand } from '../../data/store'
import { VISIBLE_BRAND_COUNT } from '../../data/store'

interface BrandFilterProps {
  brands: Brand[]
  selectedIds: string[]
  onToggle: (id: string) => void
}

export default function BrandFilter({ brands, selectedIds, onToggle }: BrandFilterProps) {
  const [showAll, setShowAll] = useState(false)
  const visibleBrands = showAll ? brands : brands.slice(0, VISIBLE_BRAND_COUNT)
  const hasMore = brands.length > VISIBLE_BRAND_COUNT

  return (
    <div className="bg-[#05080C] border border-white/8 rounded-xl p-5">
      <h3 className="font-black text-lg mb-4">برند</h3>
      <ul className="flex flex-col gap-3">
        {visibleBrands.map((brand) => (
          <li key={brand.id}>
            <label className="flex items-center justify-between gap-2 text-sm cursor-pointer group">
              <span className="opacity-80 group-hover:opacity-100 transition">{brand.label}</span>
              <input
                type="checkbox"
                checked={selectedIds.includes(brand.id)}
                onChange={() => onToggle(brand.id)}
                className="w-4 h-4 rounded accent-primary cursor-pointer"
              />
            </label>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-4 text-xs text-primary hover:underline"
        >
          {showAll ? '- نمایش کمتر' : '+ مشاهده بیشتر'}
        </button>
      )}
    </div>
  )
}
