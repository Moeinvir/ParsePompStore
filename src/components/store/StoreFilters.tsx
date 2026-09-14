// NOTE: This section is still unfinished in the original static site
// (filters, sorting, product list and pagination are not built yet).
// Converted 1:1, including the temporary bg-red-400 / bg-blue-600 /
// bg-amber-500 placeholder colors, so the follow-up work is identical.
export default function StoreFilters() {
  return (
    <section className="w-full px-5">
      <section className="bg-red-400">
        <div className="bg-blue-600 flex justify-between items-center">
          {/* Title Shop Filter */}
          <div className="w-full">
            <p className="opacity-50 text-sm">نمایش محصول 1 تا 10 از 25محصول</p>
            <div>
              <div>
                <div />
                <div />
              </div>
              <div />
            </div>
          </div>
          {/* Shop */}
          <div />
        </div>
        <div className="bg-amber-500" />
      </section>
    </section>
  )
}
