import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useSearch from "@/hooks/useSearch"
import SearchResult from "@/features/search/components/SearchResult"
import { useProducts } from "@/hooks/useProducts"
import SearchSkeleton from "@/features/skeletons/search_skeleton/SearchSkeleton"
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList"

const Search = () => {
  
  const [params] = useSearchParams()

  const query = params.get('q')

  const { products } = useProducts("https://dummyjson.com/products?limit=149")

  const { results, loading, search } = useSearch()

  useEffect(() => {
    if (query) {
      search(query)
    }
  }, [query, products])


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
          <SkeletonsList>
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