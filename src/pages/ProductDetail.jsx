import { useParams } from "react-router-dom"
import { useProducts } from "@/hooks/useProducts"
import ProductDetails from "@/features/details/components/ProductDetails"
import DetailsSkeleton from
  "@/features/skeletons/details_skeleton/components/DetailsSkeleton"
import { setDiscount } from "@/utils/setDiscount"

const ProductDetail = () => {
  const { id } = useParams()

  const { products, isLoading } = useProducts(`https://dummyjson.com/products/${id}`)

  return (
    <main>
      {isLoading ? <DetailsSkeleton /> : <ProductDetails
        productId={products.id}
        productThumbnail={products.thumbnail}
        productImages={products.images}
        productTitle={products.title}
        productPrice={setDiscount(products.price,
          products.discountPercentage)}
        productRating={products.rating}
        productStock={products.stock}
        productDescription={products.description}
        productBrand={products.brand}
        productWeight={products.weight}
        productDimensions={products.dimensions}
        productWarranty={products.warrantyInformation}
        productReviews={products.reviews}
      />
      }

    </main>
  )
}

export default ProductDetail