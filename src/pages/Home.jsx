import { useState, useEffect } from "react"
import { productService } from "@/services/productService"
import ProductCard from "@/features/product/components/ProductCard"
import ProductSkeleton from "@/features/skeletons/product_skeleton/components/ProductSkeleton.jsx"
import ProductSkeletonList from
"@/features/skeletons/product_skeleton/components/ProductSkeletonList.jsx"
import bannerImage from "@/assets/images/home-banner.png"


const Home = () => {
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const currentApi = "https://dummyjson.com/products"
  
  
  useEffect(() => {
    
    const loadData = async (api) => {
      try {
        const data = await productService(api)
        setProducts(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadData(currentApi)
  }, [])
  
  
  
  return (
    <main
      className="home-page w-full font-base"

    >
      <div
        style={{
          width: "100%",
          height: "480px",
          background: "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(home-banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "var(--color-surface)",
          fontSize: "24px",
          
        }}
      >
        <h1>S-MALL SHOP</h1>
      </div>
      <section>
        <h2
          className="m-4 p-32 bg-surface rounded-md shadow-sm"
        >Best selling</h2>
        
        <div
          className="col-count-2 col-gap-4 p-4"
        >
          {products ? products.products.map((product, index) => (
          <ProductCard
            productId={product.id}
            productImage={product.thumbnail}
            discountPercentage={product.discountPercentage}
            oldPrice={product.price}
            productRating={product.rating}
            productTitle={product.title}
          />)) : <ProductSkeletonList quantity={10}/>}
        </div>
      </section>
    </main>
  )
}

export default Home