import type { Category } from '../../data/store'

interface CategoryFilterProps {
  categories: Category[]
  selectedId: string | null
  onSelect: (id: string | null) => void
}

export default function CategoryFilter({ categories, selectedId, onSelect }: CategoryFilterProps) {
  return (
    <div className="bg-[#05080C] border border-white/8 rounded-xl p-5">
      <h3 className="font-black text-lg mb-4">دسته‌بندی محصولات</h3>
      <ul className="flex flex-col gap-3">
        {categories.map((category) => {
          const isActive = category.id === selectedId
          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => onSelect(isActive ? null : category.id)}
                className={`w-full flex items-center gap-2 text-sm transition-colors ${
                  isActive ? 'text-primary font-bold' : 'opacity-70 hover:opacity-100 hover:text-primary'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-primary' : 'bg-white/20'}`}
                  aria-hidden="true"
                />
                <span>{category.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
