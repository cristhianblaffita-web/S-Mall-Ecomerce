import { useMemo } from "react"
import { useOutletContext, useSearchParams } from "react-router-dom"
import { capitalize } from "@/utils/format"
import ProductCard from "@/features/product/components/ProductCard"
import SkeletonsList from "@/features/skeletons/load_skeleton/SkeletonsList"
import ProductSkeleton from "@/features/skeletons/product_skeleton/ProductSkeleton"

const Products = () => {
  const [params] = useSearchParams()

  const { products, productsLoading } = useOutletContext() 

  const category = params.get('category')

  const filtered = products && products.filter(p => p.category === category)

  const data = !category ? products : filtered

  const productCards = useMemo(() => {
    if (!data) return []

    return data.map((product) => (
      <ProductCard
        key={product.id}
        productId={product.id}
        productImage={product.thumbnail}
        discountPercentage={product.discountPercentage}
        oldPrice={product.price}
        productRating={product.rating}
        productTitle={product.title}
      />))
  }, [data])

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
        >{!category ? "Best selling" : `${capitalize(category)} (${filtered?.length || 0 })` }</h2>

        <div
          className="products-layout"
        >
          {!productsLoading ? productCards : (
            <SkeletonsList quantity={50}>
              <ProductSkeleton/>
            </SkeletonsList>
          )}
        </div>
      </section>
    </main>
  )
}

export default Products