import { CatalogFilters } from '../../components/catalog/CatalogFilters'
import { CatalogProductGrid } from '../../components/catalog/CatalogProductGrid'

export default function CatalogPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 pt-28 pb-16 md:px-8 lg:flex-row">
      <CatalogFilters />
      <CatalogProductGrid />
    </main>
  )
}
