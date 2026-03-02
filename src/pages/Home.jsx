import { useState, useEffect } from "react"
import { productService } from "@/services/productService"
import ProductCard from "@/features/product/components/ProductCard"

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
      className="flex flex-wrap font-base bg-surface"
    >
      <h1
        className="w-full m-16"
      >Best selling</h1>
      
      {products ? products.products.map((product, index) => (
      <ProductCard
        productId={product.id}
        productImage={product.thumbnail}
        discountPercentage={product.discountPercentage}
        oldPrice={product.price}
        productRating={product.rating}
        productTitle={product.title}
      />)) : <p>Loading...</p>}
    </main>
  )
}

export default Home