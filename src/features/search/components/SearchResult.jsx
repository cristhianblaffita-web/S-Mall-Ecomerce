import { Link } from "react-router-dom"
import { setDiscount } from "@/utils/setDiscount"
import RatingIcon from "@/assets/icons/ui/star.png"
import "./SearchResult.css"

const SearchResult = ({ product }) => {
  const productDiscount = setDiscount(product.price, product.discountPercentage)

  return (
    <Link
      className="search-result bg-surface p-12 rounded-md decoration-none"
      to={`/products/${product.id}`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="item-image w-full object-cover rounded-md mb-8"
        onLoad={(e) => e.currentTarget.classList.add("loaded")}
      />

      <h3 className="text-sm font-medium text-normal">
        {product.title}
      </h3>

      <p className="text-xs text-gray">
        {product.category}
      </p>

      <div className="flex items-center gap-8 mt-4">
        <img className="rating-icon" src={RatingIcon} />
        <span className="text-xs text-gray">
          {product.rating.toFixed(1)}
        </span>
      </div>

      <div className="flex gap-8 items-center">
        <p className="text-sm font-medium mt-4 text-normal">
          ${productDiscount.toFixed(2)}
        </p>
        <p className="text-xs text-gray line-tr">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}

export default SearchResult