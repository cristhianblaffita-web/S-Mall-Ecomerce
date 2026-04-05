import { useMemo } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { capitalize } from "@/utils/format";
import ProductCard from "@/features/product/components/ProductCard";
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList";
import ProductSkeleton from "@/features/skeletons/product_skeleton/ProductSkeleton";

const Products = () => {
  const [params] = useSearchParams();

  const { products, productsLoading, productsError } = useOutletContext();

  const category = params.get("category") || null;

  const data = useMemo(() => {
    if (!category) return products;
    return products?.filter((p) => p.category === category) || [];
  }, [products, category]);

  if (productsError) {
    <p>Something went wrong: {productsError}</p>;
  }

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
          {productsLoading ? (
            <SkeletonsList quantity={50}>
              <ProductSkeleton />
            </SkeletonsList>
          ) : data.length === 0 ? (
            <p>No products were found</p>
          ) : (
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
