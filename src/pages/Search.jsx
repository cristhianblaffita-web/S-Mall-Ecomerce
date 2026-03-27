import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useSearch from "@/hooks/useSearch"
import SearchResult from "@/features/search/components/SearchResult"
//import { useProducts } from "@/hooks/useProducts"

const Search = () => {
  
  const [params] = useSearchParams()

  const query = params.get('q')

  const { results, loading, search } = useSearch()

  useEffect(() => {
    if (query) {
      search(query)
    }
  }, [query])


  return (
    <div className="p-16">
      <h1 className="text-lg font-semibold mb-16">
        Results for "{query}"
      </h1>

     {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p className="text-sm text-muted">
          No results found
        </p>
      )}

      <div 
        className="search-layout gap-8"
      >
        {results.map((product) => (
          <SearchResult key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Search