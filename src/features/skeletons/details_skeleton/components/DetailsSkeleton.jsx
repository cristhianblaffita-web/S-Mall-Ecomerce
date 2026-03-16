import LoadSkeleton from "@/features/skeletons/load_skeleton/LoadSkeleton"

const DetailsSkeleton = () => {
  return (
    <div>
      <ul
        className="flex p-16 gap-16 overflow-x-auto list-none"
      >
        <li>      
          <LoadSkeleton
            width="280px"
            height="280px"
          />
        </li>
        <li>      
          <LoadSkeleton
            width="280px"
            height="280px"
          />
        </li>
      </ul>
      
      <div
        className="flex flex-col m-16 gap-8"
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
      </div>
      
      <div
        className="m-16"
      >
              <LoadSkeleton 
                width="100%"
                height="180px"
              />
      </div>
      <div
        className="m-16"
      >
              <LoadSkeleton 
                width="100%"
                height="80px"
              />
      </div>
      <div
        className="m-16"
      >
              <LoadSkeleton 
                width="100%"
                height="60px"
              />
      </div>
    </div>
  )
}

export default DetailsSkeleton