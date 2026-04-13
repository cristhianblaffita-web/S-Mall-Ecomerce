import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import DataStateHandler from "@/features/ui_states/DataStateHandler";
import ErrorState from "@/features/ui_states/error_state/ErrorState";
import EmptyState from "@/features/ui_states/empty_state/EmptyState";
import ProductDetails from "@/features/details/components/ProductDetails";
import DetailsSkeleton from "@/features/skeletons/details_skeleton/components/DetailsSkeleton";

import useSearch from "@/hooks/useSearch";
import SearchResult from "@/features/search/components/SearchResult";

const ProductDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { products } = useOutletContext();

  const {
    products: product,
    isLoading,
    error,
  } = useProducts(`https://dummyjson.com/products/${id}`);

  const { results: productSuggestion } = useSearch(product.category, products);

  return (
    <main>
        <DataStateHandler
          isLoading={isLoading}
          loadingComponent={<DetailsSkeleton />}
          isEmpty={product?.length === 0}
          emptyComponent={<EmptyState />}
          error={error}
          errorComponent={
            <div className="p-12">
              <ErrorState error={error} />
            </div>
          }
        >
          <>
            <ProductDetails product={product} />

            <div className="bg-surface flex flex-col gap-8 m-8 mt-16">
              <h3 className="p-24 text-start ">You also may like</h3>
              <ul
                className="flex p-8 gap-8 overflow-x-auto"
              >
                {productSuggestion
                  ?.filter((product) => product.id !== Number(id))
                  .map((res) => (
                    <li
                      key={res.id}
                      onClick={() => navigate(`/products/${res.id}`)}
                      className="flex gap-12 decoration-none cursor-pointer rounded-md bg-background"
                    >
                      <SearchResult product={res}/>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        </DataStateHandler>
    </main>
  );
};

export default ProductDetail;
