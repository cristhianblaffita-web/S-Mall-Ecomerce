import Skeleton from "@/features/skeletons/load_skeleton/LoadSkeleton.jsx"
import "./ProductSkeleton.css"

const ProductSkeleton = ({
  skeletonBg,
  skeletonShimmer
}) => {
  
  return (
        <div className="product-skeleton">
          <Skeleton
            width="100%"
            height="calc((var(--screen-w)/var(--product-relation)) - 32px)"
            bg={skeletonBg}
            shimmer={skeletonShimmer}
          />
          <div
            style={{
              display: "flex",
              gap: "10%"
            }}
          >
            <Skeleton
              width="60%"
              bg={skeletonBg}
              shimmer={skeletonShimmer}
            />
            
            <Skeleton 
              width="30%" 
              bg={skeletonBg}
              shimmer={skeletonShimmer}
            />
          </div>
          
          <Skeleton 
            width="100%" 
            bg={skeletonBg}
            shimmer={skeletonShimmer}
          />
          
          <Skeleton 
            width="100%" 
            height="2.5em"
            bg={skeletonBg}
            shimmer={skeletonShimmer}
          />
        </div>
  )
}

export default ProductSkeleton