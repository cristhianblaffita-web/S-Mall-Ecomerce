import { useMemo } from "react"
import { useProducts } from "@/hooks/useProducts"
import ProductCard from "@/features/product/components/ProductCard"
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList"
import ProductSkeleton from "@/features/skeletons/product_skeleton/ProductSkeleton"

const Home = () => {
  const { products, isLoading } = useProducts("https://dummyjson.com/products?limit=149")

  const productCards = useMemo(() => {
    if (!products) return []

    return products.map((product) => (
      <ProductCard
        key={product.id}
        productId={product.id}
        productImage={product.thumbnail}
        discountPercentage={product.discountPercentage}
        oldPrice={product.price}
        productRating={product.rating}
        productTitle={product.title}
      />))
  }, [products])

  return (
    <main
      className="w-full font-base"

    >
      <div
        className="hero-banner"
      >
        <h1>S-MALL SHOP</h1>
      </div>
      <section>
        <h2
          className="m-4 p-32 bg-surface rounded-md shadow-sm"
        >Best selling</h2>

        <div
          className="products-layout"
        >
          {!isLoading ? productCards : (
            <SkeletonsList>
              <ProductSkeleton/>
            </SkeletonsList>
          )}
        </div>
      </section>
    </main>
  )
}

export default Home