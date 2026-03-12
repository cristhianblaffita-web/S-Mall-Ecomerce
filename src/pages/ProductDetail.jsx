import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { productService } from "@/services/productService" 
import ProductDetails from "@/features/details/components/ProductDetails"

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const [productDetails, setProductDetails] = useState(null)
  
  const { id } = useParams()
  
  const dummyJson = `https://dummyjson.com/products/${id}`
  
  useEffect(() => {
    
    const loadData = async (api) => {
      try {
        const data = await productService(api)
        setProductDetails(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadData(dummyJson)
  }, [id])

  return (
    <main>
      {isLoading ? <p>Loading...</p> : <ProductDetails
          productImages={productDetails.images}
          productTitle={productDetails.title}
          productPrice={productDetails.price}
          productRating={productDetails.rating}
          productStock={productDetails.stock}
          productDescription={productDetails.description}
        />
      }
      
    </main>
  )
}

export default ProductDetail