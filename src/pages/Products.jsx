import { useMemo } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { capitalize } from "@/utils/format";
import ProductCard from "@/features/product/components/ProductCard";
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList";
import ProductSkeleton from "@/features/skeletons/product_skeleton/ProductSkeleton";
import EmptyState from "@/features/ui_states/empty_state/EmptyState";
import ErrorState from "@/features/ui_states/error_state/ErrorState";
import DataStateHandler from "@/features/ui_states/DataStateHandler";

import bannerImage from "@/assets/images/home-banner.png"

const Products = () => {
  const [params] = useSearchParams();

  const { products, productsLoading, productsError } = useOutletContext();

  const category = params.get("category") || null;

  const data = useMemo(() => {
    if (!category) return products;
    return products?.filter((p) => p.category === category) || [];
  }, [products, category]);

  const handleScrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full font-base">
      <div className="hero-banner">
        <img src={bannerImage} className="banner-image" onLoad={(e) => e.currentTarget.classList.add("loaded")}/>
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">S-MALL ECOMMERCE</h1>
            <p className="hero-subtitle">Discover premium products curated for you</p>
          </div>
          <button className="hero-cta cursor-pointer" onClick={handleScrollToProducts}>
            Shop Now
          </button>
        </div>
      </div>
      <section id="products-section">
        <h2 className="p-32 bdr-layout bg-surface rounded-md shadow-sm m-4 m-tb-16">
          {!category
            ? "All Products"
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
