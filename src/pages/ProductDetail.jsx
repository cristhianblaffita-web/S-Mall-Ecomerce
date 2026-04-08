import { useParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import DataStateHandler from "@/features/ui_states/DataStateHandler";
import ErrorState from "@/features/ui_states/error_state/ErrorState";
import EmptyState from "@/features/ui_states/empty_state/EmptyState";
import ProductDetails from "@/features/details/components/ProductDetails";
import DetailsSkeleton from "@/features/skeletons/details_skeleton/components/DetailsSkeleton";

const ProductDetail = () => {
  const { id } = useParams();

  const { products, isLoading, error } = useProducts(
    `https://dummyjson.com/products/${id}`,
  );

  return (
    <main>
      {
        <DataStateHandler
          isLoading={isLoading}
          loadingComponent={<DetailsSkeleton />}
          isEmpty={products?.length === 0}
          emptyComponent={<EmptyState />}
          error={error}
          errorComponent={<ErrorState />}
        >
          <ProductDetails product={products} />
        </DataStateHandler>
      }
    </main>
  );
};

export default ProductDetail;
