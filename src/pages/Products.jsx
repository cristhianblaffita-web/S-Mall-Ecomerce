import { useMemo } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { capitalize } from "@/utils/format";
import ProductCard from "@/features/product/components/ProductCard";
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList";
import ProductSkeleton from "@/features/skeletons/product_skeleton/ProductSkeleton";
import EmptyState from "@/features/ui_states/empty_state/EmptyState";
import ErrorState from "@/features/ui_states/error_state/ErrorState";
import DataStateHandler from "@/features/ui_states/DataStateHandler";

const Products = () => {
  const [params] = useSearchParams();

  const { products, productsLoading, productsError } = useOutletContext();

  const category = params.get("category") || null;

  const data = useMemo(() => {
    if (!category) return products;
    return products?.filter((p) => p.category === category) || [];
  }, [products, category]);

  return (
    <main className="w-full font-base">
      <div className="hero-banner">
        <h1>S-MALL SHOP</h1>
      </div>
      <section>
        <h2 className="m-4 p-32 bg-surface rounded-md shadow-sm">
          {!category
            ? "Best selling"
            : `${capitalize(category)} (${data?.length ?? 0})`}
        </h2>

        <div className="products-layout">
          <DataStateHandler
            error={productsError}
            errorComponent={<ErrorState error={productsError}/>}
            isLoading={productsLoading}
            loadingComponent={
              <SkeletonsList quantity={50}>
                <ProductSkeleton />
              </SkeletonsList>
            }
            isEmpty={!data.length}
            emptyComponent={<EmptyState />}
          >
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </DataStateHandler>
        </div>
      </section>
    </main>
  );
};

export default Products;
