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

  const connectionError = (
    <div
      className="fixed w-full h-full flex justify-center items-center"
      style={{
        background: "rgba(0,0,0,.3)",
        backdropFilter: "blur(3px)"
      }}
    >
      <p
        className="bg-surface m-16 p-24 shadow-sm rounded-md"
      >
        Please check your internet connection
      </p>
    </div>
  )

  return (
    <main>
      {isLoading ? <DetailsSkeleton /> : /*(productDetails.length != 0 ?*/ <ProductDetails
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
      /> /*:
          connectionError)*/
      }

    </main>
  )
}

export default ProductDetail