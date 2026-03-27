import LoadSkeleton from "@/features/skeletons/load_skeleton/LoadSkeleton"

const SearchSkeleton = () => {

    return (
        <div
            className="bg-surface flex flex-col justify-center items-start gap-8 p-12 rounded-md"
        >
            <LoadSkeleton
                width="var(--product-img-height)"
                height="var(--product-img-height)"
            />

            <LoadSkeleton/>
            <LoadSkeleton width="50%"/>
            <LoadSkeleton/>
        </div>  
    )
}

export default SearchSkeleton