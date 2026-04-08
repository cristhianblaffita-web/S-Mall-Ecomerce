import { useOutletContext, useSearchParams } from "react-router-dom"
import useSearch from "@/hooks/useSearch"
import SearchResult from "@/features/search/components/SearchResult"
import DataStateHandler from "@/features/ui_states/DataStateHandler"
import SearchSkeleton from "@/features/skeletons/search_skeleton/SearchSkeleton"
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList"
import ErrorState from "@/features/ui_states/error_state/ErrorState"

const Search = () => {
  
  const [params] = useSearchParams()

  const query = params.get('q')

  const { products, productsError } = useOutletContext()

  const { results, loading } = useSearch(query, products)

  return (
    <div className="p-16">
      <h1 className="bg-surface p-24 rounded-md text-lg font-semibold mb-16">
        Results for "{query}"
      </h1>

      <div 
        className="products-layout gap-8"
      >
        <DataStateHandler
          isLoading={loading}
          loadingComponent={<SkeletonsList quantity={50}><SearchSkeleton/></SkeletonsList>}
          isEmpty={!results?.length}
          emptyComponent={<p className="bg-surface p-32 text-sm text-gray">No coincidences were found</p>}
          error={productsError}
          errorComponent={<ErrorState/>}
        >
          {results?.map((product) => (
            <SearchResult key={product.id} product={product} />
          ))}
        </DataStateHandler>
      </div>
    </div>
  )
}

export default Search