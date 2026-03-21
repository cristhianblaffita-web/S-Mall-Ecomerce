import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { productService } from "@/services/productService"
import ProductDetails from "@/features/details/components/ProductDetails"
import DetailsSkeleton from
  "@/features/skeletons/details_skeleton/components/DetailsSkeleton"
import { setDiscount } from "@/utils/setDiscount"

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const [productDetails, setProductDetails] = useState([])

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
      {isLoading ? <DetailsSkeleton /> : <ProductDetails
        productId={productDetails.id}
        productThumbnail={productDetails.thumbnail}
        productImages={productDetails.images}
        productTitle={productDetails.title}
        productPrice={setDiscount(productDetails.price,
          productDetails.discountPercentage)}
        productRating={productDetails.rating}
        productStock={productDetails.stock}
        productDescription={productDetails.description}
        productBrand={productDetails.brand}
        productWeight={productDetails.weight}
        productDimensions={productDetails.dimensions}
        productWarranty={productDetails.warrantyInformation}
        productReviews={productDetails.reviews}
      />
      }

    </main>
  )
}

export default ProductDetail