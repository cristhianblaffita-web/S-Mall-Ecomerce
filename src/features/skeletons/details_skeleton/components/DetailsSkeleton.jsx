import "./DetailsSkeleton.css"
import LoadSkeleton from "@/features/skeletons/load_skeleton/LoadSkeleton"

const DetailsSkeleton = ({ carouselSize=6 }) => {
  return (
    <div className="details-skeleton-wrapper">
      <ul
        className="carousel-skeleton p-16 list-none"
      >
        
        {Array.from({ length: carouselSize }, (_, i) => (
        <li key={i}>      
          <LoadSkeleton
            width="100%"
            height="100%"
          />
        </li>
      ))}
      </ul>
      
      <div
        className="info-skeleton flex flex-col m-16 gap-8"
      >
        <LoadSkeleton
          width="100%"
          height="32px"
          
        />
        <div
          className="flex justify-between"
        >
          <LoadSkeleton
            width="30%"
            height="32px"
          />
          <LoadSkeleton
            width="30%"
            height="32px"
          />
        </div>
        <LoadSkeleton
          width="40%"
          height="32px"
        />
        <div
          className="description-skeleton"
        >
                <LoadSkeleton 
                  width="100%"
                  height="180px"
                />
        </div>
      </div>
      
      <div
        className="checkout-skeleton m-16"
      >
              <LoadSkeleton 
                width="100%"
                height="100%"
              />
      </div>
      <div
        className="more-details-skeleton m-16"
      >
              <LoadSkeleton 
                width="100%"
                height="100%"
              />
      </div>

      <div
        className="reviews-skeleton m-16"
      >
              <LoadSkeleton 
                width="100%"
                height="280px"
              />
      </div>
    </div>
  )
}

export default DetailsSkeleton