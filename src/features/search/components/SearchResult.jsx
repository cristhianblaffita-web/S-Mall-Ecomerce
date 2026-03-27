import { setDiscount } from "@/utils/setDiscount"
import "./SearchResult.css"

const SearchResult = ({ product }) => {
  const productDiscount = setDiscount(product.price, product.discountPercentage)

  return (
    <div 
        className="search-result bg-surface p-12 rounded-md"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full object-cover rounded-md mb-8"
      />

      <h3 className="text-sm font-medium">
        {product.title}
      </h3>

      <p className="text-xs text-gray">
        {product.category}
      </p>

      <div className="flex gap-8">
        <p className="text-sm font-medium mt-4">
            ${productDiscount.toFixed(2)}
        </p>
        <p className="text-xs text-gray line-tr">
            ${product.price}
        </p>
      </div>
    </div>
  )
}

export default SearchResult