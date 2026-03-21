import "./MoreDetails.css"
import arrowDown from "@/assets/icons/ui/arrow-down.png"

const MoreDetails = (
    {
        brand = "---",
        weight = 0,
        dimensions = [],
        warranty = "No warranty"
    }
) => {

    return (
        <details
            className="bg-background flex flex-col p-24 m-16 rounded-md"
        >
            <summary
                className="flex justify-between items-center cursor-pointer"
            >
                <span className="font-bold">
                    More Details
                </span>

                <span>
                    <img
                        className="details-icon w-16px"
                        src={arrowDown}
                        alt="toggle-icon"
                    />
                </span>
            </summary>

            <ul
                className="flex flex-col gap-8 mt-8 text-gray"
            >
                <li className="flex justify-between">
                    <span>Brand</span>
                    <span>{brand}</span>
                </li>

                <li className="flex justify-between">
                    <span>Weight</span>
                    <span>{weight}</span>
                </li>

                <li className="flex justify-between">
                    <span>Dimensions</span>
                    <span>
                        {dimensions.width} × {dimensions.height} ×
                        {dimensions.depth}
                    </span>
                </li>

                <li className="flex justify-between">
                    <span>Warranty</span>
                    <span>{warranty}</span>
                </li>
            </ul>

        </details>
    )
}

export default MoreDetails