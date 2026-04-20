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

  const { filterFromURL } = filterService();

  const filteredProducts = filterFromURL(results, params);

  return (
    <div className="p-16">
      <h1 className="bg-surface p-24 rounded-md text-lg font-semibold mb-16">
        Results for "{query}"
      </h1>

      {!loading && results.length ? (
        <FiltersBar/>
      ) : (
        false
      )}

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
