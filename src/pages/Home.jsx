import { useState, useEffect } from "react"
import { productService } from "@/services/productService"

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
    <main>
      {products ? products.products.map((product, index) => (
      <div key={index}>{product.title}</div>)) : <p>Loading...</p>}
    </main>
  )
}

export default Home