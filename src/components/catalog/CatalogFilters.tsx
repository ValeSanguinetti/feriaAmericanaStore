const categoryFilters = ['Outerwear', 'Knitwear', 'Accessories', 'Footwear']
const genderFilters = ['All', 'Women', 'Men']
const sizeFilters = ['XS', 'S', 'M', 'L', 'XL']

export function CatalogFilters() {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="space-y-10 lg:sticky lg:top-32">
        <div>
          <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
            Category
          </h3>
          <div className="grid gap-3">
            {categoryFilters.map((filter, index) => (
              <label key={filter} className="flex items-center gap-3 text-text-muted">
                <input className="accent-accent" defaultChecked={index === 0} type="checkbox" />
                <span>{filter}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
            Gender
          </h3>
          <div className="flex flex-wrap gap-2">
            {genderFilters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-xl px-4 py-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] ${
                  index === 0 ? 'bg-surface-muted text-headline' : 'bg-surface-soft text-text-muted'
                }`}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
            Size
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {sizeFilters.map((size) => (
              <button
                key={size}
                className={`h-10 w-10 rounded-md border text-[0.78rem] font-semibold ${
                  size === 'S'
                    ? 'border-accent bg-surface-muted text-headline'
                    : 'border-transparent bg-surface-soft text-text-muted'
                }`}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-headline text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-headline">
            Price Range
          </h3>
          <div className="grid gap-4">
            <input className="accent-accent" defaultValue="35" max="100" min="0" type="range" />
            <div className="flex justify-between text-[0.76rem] text-text-muted">
              <span>$0</span>
              <span>$2,000+</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
