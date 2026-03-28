import { useOutletContext, useSearchParams } from "react-router-dom"
import useSearch from "@/hooks/useSearch"
import SearchResult from "@/features/search/components/SearchResult"
import SearchSkeleton from "@/features/skeletons/search_skeleton/SearchSkeleton"
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList"

const Search = () => {
  
  const [params] = useSearchParams()

  const query = params.get('q')

  const { products } = useOutletContext()

  const { results, loading } = useSearch(query, products)

  return (
    <div className="p-16">
      <h1 className="bg-surface p-24 rounded-md text-lg font-semibold mb-16">
        Results for "{query}"
      </h1>


      {!loading && results.length === 0 && (
        <p className="bg-surface p-32 text-sm text-gray">
          No coincidences were found
        </p>
      )}

      <div 
        className="products-layout gap-8"
      >
        {loading ? (
          <SkeletonsList quantity={50}>
            <SearchSkeleton/>
          </SkeletonsList>
        ) : results.map((product) => (
          <SearchResult key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Search