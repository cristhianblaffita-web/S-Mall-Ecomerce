import "./MoreDetails.css";
import { BiChevronDown } from "react-icons/bi";

const MoreDetails = ({
  brand = "---",
  weight = 0,
  dimensions = [],
  warranty = "No warranty",
}) => {
  return (
    <details className="more-details bg-background p-24 rounded-md">
      <summary className="cursor-pointer">
        <span className="font-bold">More Details</span>

        <span>
          <BiChevronDown className="details-icon ui-icon"/>
        </span>
      </summary>

      <ul className="text-gray">
        <li>
          <span>Brand</span>
          <span>{brand}</span>
        </li>

        <li>
          <span>Weight</span>
          <span>{weight}</span>
        </li>

        <li>
          <span>Dimensions</span>
          <span>
            {dimensions.width} × {dimensions.height} ×{dimensions.depth}
          </span>
        </li>

        <li>
          <span>Warranty</span>
          <span>{warranty}</span>
        </li>
      </ul>
    </details>
  );
};

export default MoreDetails;
