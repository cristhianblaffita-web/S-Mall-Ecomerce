import ProductSkeleton from "./ProductSkeleton.jsx"

const ProductSkeletonList = ({ quantity = 8 }) => {
  return (
    <>
      {Array.from({ length: quantity }, (_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </>
  )
}

export default ProductSkeletonList