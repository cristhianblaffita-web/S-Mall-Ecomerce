import { useOutletContext, useSearchParams } from "react-router-dom";
import useSearch from "@/hooks/useSearch";
import FiltersBar from "@/features/filters/components/FiltersBar";
import SearchResult from "@/features/search/components/SearchResult";
import DataStateHandler from "@/features/ui_states/DataStateHandler";
import SearchSkeleton from "@/features/skeletons/search_skeleton/SearchSkeleton";
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList";
import EmptyState from "@/features/ui_states/empty_state/EmptyState";
import ErrorState from "@/features/ui_states/error_state/ErrorState";

import { filterService } from "@/services/filterService";

const Search = () => {
  const [params] = useSearchParams();

  const query = params.get("q");

  const { products, productsError } = useOutletContext();

  const { results, loading } = useSearch(query, products);

  const { filterFromURL, getMaxPrice, getMinPrice } = filterService();

  const filteredProducts = filterFromURL(results, params);

  const maxPrice = getMaxPrice(results);

  const minPrice = getMinPrice(results);

  return (
    <div className="p-16">
      <h1 className="bg-surface bdr-layout p-24 shadow-md rounded-md text-lg font-semibold mb-16">
        Results for "{query}"
      </h1>

      {!loading && results.length ? (
        <FiltersBar 
          productsMaxPrice={maxPrice} 
          productsMinPrice={minPrice}
        />
      ) : null}

      <div className="products-layout gap-8">
        <DataStateHandler
          isLoading={loading}
          loadingComponent={
            <SkeletonsList quantity={50}>
              <SearchSkeleton />
            </SkeletonsList>
          }
          isEmpty={!results?.length}
          emptyComponent={<EmptyState />}
          error={productsError}
          errorComponent={<ErrorState error={productsError} />}
        >
          {filteredProducts?.map((product) => (
            <SearchResult key={product.id} product={product} />
          ))}
        </DataStateHandler>
      </div>
    </div>
  );
};

export default Search;