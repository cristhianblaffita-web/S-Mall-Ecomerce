import { Link } from "react-router-dom"
import { setDiscount } from "@/utils/setDiscount"
import "./ProductSuggestion.css"
import { BsStarFill } from "react-icons/bs";

const ProductSuggestion = ({ product }) => {
  const productDiscount = setDiscount(product.price, product.discountPercentage)

  return (
    <Link
      className="suggestion-result"
      to={`/products/${product.id}`}
    >
      <div className="image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          onLoad={(e) => e.currentTarget.classList.add("loaded")}
        />
      </div>

      <div className="content">
        <p className="category">{product.category}</p>

        <h3 className="title">
          {product.title}
        </h3>

        <div className="bottom">
          <div className="price">
            ${productDiscount.toFixed(2)}
          </div>

          <div className="rating">
            <BsStarFill className="rating-icon"/>
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductSuggestion