import { useMemo } from "react"
import { useProducts } from "@/hooks/useProducts"
import ProductCard from "@/features/product/components/ProductCard"
import ProductSkeletonList from
  "@/features/skeletons/product_skeleton/components/ProductSkeletonList.jsx"


const Home = () => {
  const { products, isLoading } = useProducts("https://dummyjson.com/products")

  const productCards = useMemo(() => {
    if (!products) return []

    return products.products.map((product) => (
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
      className="home-page w-full font-base"

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
          {!isLoading ? productCards : <ProductSkeletonList quantity={10} />}
        </div>
      </section>
    </main>
  )
}

export default Home